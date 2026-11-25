// One-off fix (25 Nov 2026): the house-crow image had a solid yellow block and a light grey square
// behind the bird. Yellow pixels and the light background connected to the image edges are made
// transparent (the crow's grey neck is darker and not connected to the edges), then the 3 sizes are rebuilt.
// Usage: node scripts/fix-crow-background.mjs [source]   (default source: the committed house-crow.webp;
// run it on the original from git history: git show 0ebf892:public/assets/img/pests/house-crow.webp > orig.webp)
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

sharp.cache(false);
const dir = join(dirname(fileURLToPath(import.meta.url)), '../public/assets/img/pests');
const src = process.argv[2] ?? join(dir, 'house-crow.webp');

const { data, info } = await sharp(readFileSync(src)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const px = (i) => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]];

// 1) yellow anywhere: red and green clearly above blue
for (let i = 0; i < w * h; i++) {
  const [r, g, b] = px(i);
  if (r - b > 50 && g - b > 35) data[i * 4 + 3] = 0;
}

// 2) flood fill from the edges through transparent or light, unsaturated pixels
const isBackground = (i) => {
  const [r, g, b, a] = px(i);
  if (a === 0) return true;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  return min > 200 && max - min < 25;
};
const seen = new Uint8Array(w * h);
const queue = [];
for (let x = 0; x < w; x++) queue.push(x, (h - 1) * w + x);
for (let y = 0; y < h; y++) queue.push(y * w, y * w + w - 1);
let cleared = 0;
while (queue.length) {
  const i = queue.pop();
  if (seen[i] || !isBackground(i)) continue;
  seen[i] = 1;
  if (data[i * 4 + 3] !== 0) { data[i * 4 + 3] = 0; cleared++; }
  const x = i % w, y = (i - x) / w;
  if (x > 0) queue.push(i - 1);
  if (x < w - 1) queue.push(i + 1);
  if (y > 0) queue.push(i - w);
  if (y < h - 1) queue.push(i + w);
}

const buf = await sharp(data, { raw: { width: w, height: h, channels: 4 } }).trim().png().toBuffer();
const sizes = { 'house-crow.webp': 300, 'house-crow-d.webp': 150, 'house-crow-m.webp': 100 };
for (const [name, size] of Object.entries(sizes)) {
  // bird at about 84% of the tile, like the other bird images
  const inner = Math.round(size * 0.84);
  const pad = Math.floor((size - inner) / 2);
  await sharp(buf)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: size - inner - pad, left: pad, right: size - inner - pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 85, alphaQuality: 90 })
    .toFile(join(dir, name));
}
console.log(`cleared ${cleared} light background pixels; wrote ${Object.keys(sizes).join(', ')}`);
