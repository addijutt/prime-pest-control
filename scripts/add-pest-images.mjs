// Turns generated pest / bird / method images into the 3 tile files the site uses.
// Usage: node scripts/add-pest-images.mjs "<folder with <key>.png files>"
// Each <key>.png (transparent or on a plain white background) becomes, in public/assets/img/pests/:
//   <key>.webp 300 x 300, <key>-d.webp 150 x 150, <key>-m.webp 100 x 100 (WebP with transparency).
// Prompts for the images: docs/pest-image-prompts.md. After adding, remove the key from
// PEST_IMAGE_FALLBACKS in src/config/pageContentHelpers.ts.
import sharp from 'sharp';
import { readdirSync, readFileSync } from 'fs';
import { join, basename, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

sharp.cache(false);
const SRC = process.argv[2];
if (!SRC) throw new Error('Pass the folder with the images');
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../public/assets/img/pests');
const SIZES = [['', 300], ['-d', 150], ['-m', 100]];
/** Share of the square the subject fills, like the existing tiles */
const FILL = 0.86;

/** Makes the plain white background transparent (flood fill from the edges, so white inside the subject stays).
 *  Images that come with a transparent background are first laid on white: generators often leave a faint
 *  grey haze in the "transparent" area, which would otherwise make the subject look small after trimming. */
async function cutOutWhite(input) {
  const flat = await sharp(input).flatten({ background: '#ffffff' }).png().toBuffer();
  const { data, info } = await sharp(flat).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const near = (i) => data[i] > 238 && data[i + 1] > 238 && data[i + 2] > 238;
  const seen = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const p = stack.pop();
    if (seen[p]) continue;
    seen[p] = 1;
    if (!near(p * 4)) continue;
    data[p * 4 + 3] = 0;
    const x = p % w;
    if (x > 0) stack.push(p - 1);
    if (x < w - 1) stack.push(p + 1);
    if (p >= w) stack.push(p - w);
    if (p < w * (h - 1)) stack.push(p + w);
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

const files = readdirSync(SRC).filter((f) => /\.(png|webp|jpe?g)$/i.test(f));
for (const file of files) {
  const key = basename(file, extname(file)).toLowerCase();
  const cut = await cutOutWhite(readFileSync(join(SRC, file)));
  const trimmed = await sharp(cut).trim({ threshold: 1 }).toBuffer();
  const { width, height } = await sharp(trimmed).metadata();
  const side = Math.round(Math.max(width, height) / FILL);
  const square = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: trimmed, left: Math.round((side - width) / 2), top: Math.round((side - height) / 2) }])
    .png()
    .toBuffer();
  for (const [suffix, px] of SIZES) {
    await sharp(square).resize(px, px).webp({ quality: 88, alphaQuality: 100 }).toFile(join(OUT, `${key}${suffix}.webp`));
  }
  console.log(`${key}: ${SIZES.map(([s, px]) => `${key}${s}.webp (${px})`).join(', ')}`);
}
