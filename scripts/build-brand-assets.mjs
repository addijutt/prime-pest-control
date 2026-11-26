// Builds the website's logo, favicon and share images from the brand kit.
// Usage: node scripts/build-brand-assets.mjs "<path to Prime-Pest-Control-Complete-Brand-Kit>"
// Output: public/assets/img/brand/ and src/app/favicon.ico
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

sharp.cache(false);
const KIT = process.argv[2];
if (!KIT) throw new Error('Pass the brand kit folder');
const OUT = 'public/assets/img/brand';
mkdirSync(OUT, { recursive: true });

const NAVY = '#0E1A35';
const trimmed = (file) => sharp(join(KIT, file)).trim({ threshold: 10 }).toBuffer();

// Logos: trimmed (the kit files have wide empty margins), sized for 2-3x retina at their display size
const horizontal = await trimmed('logos/horizontal-light.png'); // navy + green text, for light backgrounds
const horizontalOnDark = await trimmed('logos/horizontal-dark.png'); // white text, for the dark footer
const icon = await trimmed('logos/icon-light.png');

await sharp(horizontal).resize({ height: 150 }).webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT}/logo-horizontal.webp`);
await sharp(horizontal).resize({ height: 150 }).png({ compressionLevel: 9 }).toFile(`${OUT}/logo-horizontal.png`);
// Vertical (stacked) logo: phone header and phone menu
// The kit's vertical logo has a wide gap between the mark and the name, which makes the name tiny at phone
// size: cut the two parts apart and stack them with a small gap
const vSrc = join(KIT, 'logos/vertical-light.png');
const vMark = await sharp(vSrc).extract({ left: 0, top: 0, width: 1600, height: 900 }).toBuffer().then((b) => sharp(b).trim({ threshold: 10 }).toBuffer());
const vName = await sharp(vSrc).extract({ left: 0, top: 950, width: 1600, height: 650 }).toBuffer().then((b) => sharp(b).trim({ threshold: 10 }).toBuffer());
const [mMeta, nMeta] = await Promise.all([sharp(vMark).metadata(), sharp(vName).metadata()]);
const vGap = Math.round(nMeta.height * 0.12);
const vW = Math.max(mMeta.width, nMeta.width);
const vertical = await sharp({ create: { width: vW, height: mMeta.height + vGap + nMeta.height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([
    { input: vMark, left: Math.round((vW - mMeta.width) / 2), top: 0 },
    { input: vName, left: Math.round((vW - nMeta.width) / 2), top: mMeta.height + vGap },
  ])
  .png()
  .toBuffer();
await sharp(vertical).resize({ height: 180 }).webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT}/logo-vertical.webp`);
await sharp(horizontalOnDark).resize({ width: 600 }).webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT}/logo-horizontal-white.webp`);

// Square icon on a white tile (browser tabs in dark mode, iOS home screen, Google results)
async function tile(size, scale, radius) {
  const inner = Math.round(size * scale);
  const mark = await sharp(icon).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${Math.round(size * radius)}" fill="#fff"/></svg>`,
  );
  return sharp(bg).composite([{ input: mark, gravity: 'center' }]).png({ compressionLevel: 9 }).toBuffer();
}

writeFileSync(`${OUT}/apple-touch-icon.png`, await tile(180, 0.8, 0)); // iOS rounds the corners itself
writeFileSync(`${OUT}/icon-192.png`, await tile(192, 0.8, 0.22));
writeFileSync(`${OUT}/icon-512.png`, await tile(512, 0.8, 0.22));
writeFileSync(`${OUT}/icon-maskable-512.png`, await tile(512, 0.62, 0)); // Android safe zone
writeFileSync(`${OUT}/schema-logo.png`, await tile(600, 0.86, 0));

// favicon.ico with 16, 32 and 48 px PNG entries
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((s) => tile(s, 0.94, 0.2)));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
pngs.forEach((png, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(icoSizes[i] % 256, e);
  header.writeUInt8(icoSizes[i] % 256, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(png.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += png.length;
});
const ico = Buffer.concat([header, ...pngs]);
writeFileSync('src/app/favicon.ico', ico);
writeFileSync(`${OUT}/favicon-32.png`, pngs[1]);

// Share image (Facebook, WhatsApp, LinkedIn, X): 1200 x 630, logo + one line, no stock people
const logoForCard = await sharp(horizontal).resize({ width: 760 }).toBuffer();
const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect y="600" width="1200" height="30" fill="#16A34A"/>
  <rect y="600" x="900" width="300" height="30" fill="#FF7A00"/>
  <text x="600" y="472" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="700" fill="${NAVY}">Pest &amp; Bird Control in Dubai</text>
  <text x="600" y="536" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#15803D">Open 24/7  ·  Free quote on WhatsApp  ·  055 304 5256</text>
</svg>`);
await sharp(card).composite([{ input: logoForCard, top: 95, left: 220 }]).jpeg({ quality: 88 }).toFile(`${OUT}/og-image.jpg`);

console.log('Brand assets written to', OUT, 'and src/app/favicon.ico');
