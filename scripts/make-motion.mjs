// 8-second before/after motion ad (MP4, H.264) from the HTML frames.
// node scripts/make-motion.mjs <endcard.png> <out.mp4> [width] [height]
// Scenes: before (2 s, slow zoom) → wipe (1 s) → after (2 s, slow zoom) → fade to end card (0.6 s) → end card (2.4 s)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import sharp from 'sharp';

// ffmpeg-static lives in social/ (its own package.json), so the website build on Vercel never downloads it.
// First time: cd social && npm install
const ffmpeg = createRequire(path.resolve('social/package.json'))('ffmpeg-static');

sharp.cache(false);
const [, , endcard, out, W = '1080', H = '1920'] = process.argv;
const w = +W, h = +H, FPS = 30;
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-'));

const render = (stage) => {
  const file = path.join(tmp, `${stage}.png`);
  execFileSync('node', ['scripts/render-social.mjs', 'social/motion-frame.html', file, W, H, `stage=${stage}`], { stdio: 'ignore' });
  return file;
};
const before = await sharp(render('before')).toBuffer();
const after = await sharp(render('after')).toBuffer();
const end = await sharp(endcard).resize(w, h).toBuffer();

const zoom = async (buf, s) => {
  const zw = Math.round(w * s), zh = Math.round(h * s);
  return sharp(buf).resize(zw, zh).extract({ left: Math.round((zw - w) / 2), top: Math.round((zh - h) / 2), width: w, height: h }).toBuffer();
};
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

let n = 0;
const save = (buf) => sharp(buf).jpeg({ quality: 92 }).toFile(path.join(tmp, `f${String(n++).padStart(4, '0')}.jpg`));

for (let i = 0; i < 60; i++) await save(await zoom(before, 1 + 0.04 * (i / 59)));
const beforeEnd = await zoom(before, 1.04);
for (let i = 0; i < 30; i++) {
  const x = Math.max(1, Math.round(w * ease(i / 29)));
  const part = await sharp(after).extract({ left: 0, top: 0, width: x, height: h }).toBuffer();
  const line = await sharp({ create: { width: 6, height: h, channels: 4, background: '#ffffff' } }).png().toBuffer();
  const layers = [{ input: part, left: 0, top: 0 }];
  if (x < w - 3) layers.push({ input: line, left: Math.min(x, w - 6), top: 0 });
  await save(await sharp(beforeEnd).composite(layers).toBuffer());
}
for (let i = 0; i < 60; i++) await save(await zoom(after, 1 + 0.04 * (i / 59)));
const afterEnd = await zoom(after, 1.04);
// Dip through dark: after → dark (9 frames) → end card (9 frames), so the two layouts never overlap
const dark = await sharp({ create: { width: w, height: h, channels: 4, background: { r: 15, g: 17, b: 19, alpha: 1 } } }).png().toBuffer();
for (let i = 1; i <= 9; i++) {
  const veil = await sharp(dark).ensureAlpha(i / 9).png().toBuffer();
  await save(await sharp(afterEnd).composite([{ input: veil }]).toBuffer());
}
for (let i = 1; i <= 9; i++) {
  const top = await sharp(end).ensureAlpha(i / 9).png().toBuffer();
  await save(await sharp(dark).composite([{ input: top }]).toBuffer());
}
for (let i = 0; i < 72; i++) await save(end);

execFileSync(ffmpeg, ['-y', '-framerate', String(FPS), '-i', path.join(tmp, 'f%04d.jpg'),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'slow', '-movflags', '+faststart', path.resolve(out)], { stdio: 'ignore' });
fs.rmSync(tmp, { recursive: true, force: true });
console.log('wrote', out, `${n} frames`);
