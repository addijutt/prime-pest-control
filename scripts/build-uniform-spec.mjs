// One-page uniform spec sheet for the printer: docs/uniform/uniform-spec-sheet.png (A4 at 300 dpi)
// Needs docs/uniform/approved-design-mockup.png and the logo from scripts/build-uniform-logo.mjs.
import sharp from 'sharp';

sharp.cache(false);
const W = 2480, H = 3508, OUT = 'docs/uniform';
const NAVY = '#16181B', GREEN = '#0F7A3D', GREY = '#5b6570';
const esc = (s) => s.replace(/&/g, '&amp;');

const mock = await sharp(`${OUT}/approved-design-mockup.png`).resize({ width: 1960 }).png().toBuffer();
const mockH = (await sharp(mock).metadata()).height;
const logo = await sharp(`${OUT}/ppc-logo-stacked-for-dark-fabric.png`).resize({ height: 520 }).png().toBuffer();
const logoW = (await sharp(logo).metadata()).width;
const logoCard = await sharp({ create: { width: logoW + 120, height: 640, channels: 4, background: NAVY } })
  .composite([{ input: logo, left: 60, top: 60 }])
  .png()
  .toBuffer();

const rows = [
  ['Item', 'Detail'],
  ['Shirt', 'Short-sleeve polo, modern athletic fit, matte pique / performance knit (no shine)'],
  ['Body colour', 'Carbon black #16181B (closest Pantone: Black 6 C)'],
  ['Accent colour', 'Emerald green #0F7A3D (closest Pantone: 356 C): collar, placket, side panels, cuff stripes'],
  ['Collar', 'Emerald, thin black tipping line on the edge'],
  ['Cuffs', 'Black with two thin emerald stripes'],
  ['Front logo', "Stacked shield + PPC, embroidered, 5.5 to 6 cm wide. Left chest (wearer's left), top of the shield level with the 2nd button, centred between the placket and the side seam"],
  ['Back logo', 'Same stacked logo, 18 to 20 cm wide, print or embroidery. Centred, top about 8 cm below the collar seam'],
  ['Logo colours', 'Shield in its own colours (white, green, orange). PPC in white on black fabric'],
  ['Cap', 'Structured 6-panel cap, carbon black crown, emerald brim, thin emerald piping on the seams'],
  ['Cap logo', 'Shield only (no text), 3D embroidery, about 5 cm wide, centred on the front panel. Back of the cap plain'],
  ['Logo files', 'ppc-logo-stacked-for-dark-fabric.png, ppc-logo-stacked-for-light-fabric.png, ppc-shield-only.png'],
  ['Before bulk order', 'Fabric swatch in both colours and one embroidery sample of the chest logo'],
];

const bandY = 260 + mockH + 60;
const tableY = bandY + 640 + 70;
const wrap = (text) => {
  const lines = [''];
  for (const w of text.split(' ')) {
    const next = `${lines[lines.length - 1]} ${w}`.trim();
    if (next.length > 82) lines.push(w);
    else lines[lines.length - 1] = next;
  }
  return lines;
};

let rowsSvg = '';
let y = tableY;
rows.forEach(([label, detail], i) => {
  const lines = wrap(detail);
  const rh = 40 + lines.length * 44;
  const bg = i === 0 ? NAVY : i % 2 ? '#ffffff' : '#f3f5f4';
  const col = i === 0 ? '#ffffff' : '#1f2933';
  rowsSvg += `<rect x="120" y="${y}" width="2240" height="${rh}" fill="${bg}"/>`;
  rowsSvg += `<text x="150" y="${y + 56}" font-family="Segoe UI" font-weight="700" font-size="36" fill="${col}">${esc(label)}</text>`;
  lines.forEach((l, j) => {
    rowsSvg += `<text x="640" y="${y + 56 + j * 44}" font-family="Segoe UI" font-weight="${i === 0 ? 700 : 400}" font-size="34" fill="${col}">${esc(l)}</text>`;
  });
  y += rh;
});
const tableEnd = y;

const swatch = (x, c, name) =>
  `<rect x="${x}" y="${bandY + 60}" width="200" height="200" rx="20" fill="${c}" stroke="#d0d5d2" stroke-width="3"/>` +
  `<text x="${x + 230}" y="${bandY + 140}" font-family="Segoe UI" font-weight="700" font-size="44" fill="${NAVY}">${name}</text>` +
  `<text x="${x + 230}" y="${bandY + 200}" font-family="Segoe UI" font-size="38" fill="${GREY}">${c}</text>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect width="${W}" height="200" fill="${NAVY}"/>
  <text x="120" y="128" font-family="Segoe UI" font-weight="700" font-size="72" fill="#ffffff">Prime Pest Control: Technician Uniform Spec</text>
  <rect y="200" width="${W}" height="14" fill="${GREEN}"/>
  ${swatch(120, NAVY, 'Carbon black')}${swatch(860, GREEN, 'Emerald green')}
  <text x="120" y="${bandY + 400}" font-family="Segoe UI" font-weight="700" font-size="40" fill="${NAVY}">Stacked logo (right)</text>
  <text x="120" y="${bandY + 460}" font-family="Segoe UI" font-size="34" fill="${GREY}">Shield on top, PPC centred below and narrower than the shield.</text>
  <text x="120" y="${bandY + 510}" font-family="Segoe UI" font-size="34" fill="${GREY}">Same logo on the chest and the back, only the size changes.</text>
  ${rowsSvg}
  <text x="120" y="${tableEnd + 80}" font-family="Segoe UI" font-size="32" fill="${GREY}">The mockup is a design reference; the sizes and colours in the table are the specification.</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([
    { input: mock, left: 260, top: 250 },
    { input: logoCard, left: 1700, top: bandY },
  ])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/uniform-spec-sheet.png`);
console.log('ok, content ends at', tableEnd + 80, 'of', H);
