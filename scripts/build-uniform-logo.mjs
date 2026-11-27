// Builds the uniform logo files (stacked shield + "PPC") from the brand kit shield.
// Usage: node scripts/build-uniform-logo.mjs "<path to Prime-Pest-Control-Complete-Brand-Kit>"
// Output: docs/uniform/
import sharp from 'sharp';
import { join } from 'path';

sharp.cache(false);
const KIT = process.argv[2];
if (!KIT) throw new Error('Pass the brand kit folder');
const OUT = 'docs/uniform';

// Shield from the brand kit (dark-background version: white outline, green and orange swooshes)
const shield = await sharp(join(KIT, 'logos/icon-dark.png')).trim({ threshold: 10 }).toBuffer();

async function ppcText(width, color) {
  const h = Math.round(width * 0.36);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${h}">
    <text x="50%" y="${Math.round(h * 0.82)}" text-anchor="middle" font-family="Segoe UI Black" font-weight="900"
      font-style="italic" font-size="${Math.round(h * 1.02)}" letter-spacing="${Math.round(width * 0.01)}" fill="${color}">PPC</text></svg>`;
  return sharp(Buffer.from(svg)).png().trim({ threshold: 1 }).toBuffer();
}

/** Stacked lock-up: shield on top, "PPC" centred below, slightly narrower than the shield */
async function stacked(textColor, file) {
  const W = 2400; // px wide (20 cm at about 300 dpi)
  const sh = await sharp(shield).resize({ width: W }).toBuffer();
  const shMeta = await sharp(sh).metadata();
  const txt = await sharp(await ppcText(Math.round(W * 0.9), textColor)).resize({ width: Math.round(W * 0.66) }).toBuffer();
  const tMeta = await sharp(txt).metadata();
  const gap = Math.round(W * 0.06);
  const H = shMeta.height + gap + tMeta.height;
  await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: sh, left: 0, top: 0 },
      { input: txt, left: Math.round((W - tMeta.width) / 2), top: shMeta.height + gap },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(OUT, file));
  return { W, H };
}

const size = await stacked('#FFFFFF', 'ppc-logo-stacked-for-dark-fabric.png');
await stacked('#16181B', 'ppc-logo-stacked-for-light-fabric.png');
await sharp(shield).resize({ width: 2400 }).png({ compressionLevel: 9 }).toFile(join(OUT, 'ppc-shield-only.png'));
console.log('ok', size);
