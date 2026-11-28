// Page photos (docs/photo-prompts.md): node scripts/add-page-photos.mjs <folder>
// Each image in the folder must be named by its key, e.g. pest-control-dubai-marina-intro.jpg.
// Writes public/assets/img/jobs/<key>.webp: 4:3, 1200 x 900, centre-weighted crop, under 250 KB.
// Then set `src: '/assets/img/jobs/<key>.webp'` (and a matching alt) on that photo brief.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

sharp.cache(false);
const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node scripts/add-page-photos.mjs <folder>');
  process.exit(1);
}
const OUT = 'public/assets/img/jobs';
fs.mkdirSync(OUT, { recursive: true });
const MAX = 250 * 1024;

for (const file of fs.readdirSync(dir)) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  const key = path.parse(file).name.toLowerCase();
  const input = fs.readFileSync(path.join(dir, file));
  const base = sharp(input).rotate().resize(1200, 900, { fit: 'cover', position: 'attention' });
  let quality = 82;
  let buf = await base.clone().webp({ quality }).toBuffer();
  while (buf.length > MAX && quality > 50) {
    quality -= 6;
    buf = await base.clone().webp({ quality }).toBuffer();
  }
  fs.writeFileSync(path.join(OUT, `${key}.webp`), buf);
  console.log(`${key}.webp  ${Math.round(buf.length / 1024)} KB  q${quality}`);
}
