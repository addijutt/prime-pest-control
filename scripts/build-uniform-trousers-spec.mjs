// Second spec page (full uniform and trousers): docs/uniform/uniform-spec-trousers.png (A4 at 300 dpi)
// Needs docs/uniform/approved-full-uniform-mockup.png.
import sharp from 'sharp';

sharp.cache(false);
const W = 2480, H = 3508, OUT = 'docs/uniform';
const NAVY = '#16181B', GREEN = '#0F7A3D', GREY = '#5b6570';
const esc = (s) => s.replace(/&/g, '&amp;');

const mock = await sharp(`${OUT}/approved-full-uniform-mockup.png`).resize({ width: 2240 }).png().toBuffer();
const mockH = (await sharp(mock).metadata()).height;

const rows = [
  ['Item', 'Detail'],
  ['Trousers', 'Technical work trousers, modern slim-straight fit with a slight taper (not baggy, not a tracksuit)'],
  ['Fabric', 'Matte lightweight stretch ripstop or poly-cotton, breathable for Dubai heat, no shine'],
  ['Colour', 'Carbon black #16181B, the same black as the shirt (closest Pantone: Black 6 C)'],
  ['Pockets', 'Two slanted front pockets, two back welt pockets, one flat side cargo pocket with flap on each thigh (must lie flat)'],
  ['Knees', 'Reinforced knee panels in the same black fabric, with a curved seam above and below the knee'],
  ['Green piping', 'Thin emerald #0F7A3D piping (about 3 mm, closest Pantone 356 C) on the curved knee panel seams and along the top edge of each side cargo pocket. No other green'],
  ['Waist', 'Belt loops, button and zip fly, hidden elastic at the back of the waistband for comfort'],
  ['Logos', 'None on the trousers. The shirt and cap carry the logo'],
  ['Full uniform', 'Polo shirt and cap as on page 1 (uniform-spec-sheet.png). Same carbon black and emerald across all three items'],
  ['Before bulk order', 'One sample set (shirt, trousers, cap) in a medium size to check fit, colours and the piping before the full order'],
];

const tableY = 260 + mockH + 90;
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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect width="${W}" height="200" fill="${NAVY}"/>
  <text x="120" y="128" font-family="Segoe UI" font-weight="700" font-size="72" fill="#ffffff">Prime Pest Control: Full Uniform and Trousers</text>
  <rect y="200" width="${W}" height="14" fill="${GREEN}"/>
  ${rowsSvg}
  <text x="120" y="${y + 80}" font-family="Segoe UI" font-size="32" fill="${GREY}">The mockup is a design reference; the sizes and colours in the tables are the specification.</text>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: mock, left: 120, top: 250 }])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/uniform-spec-trousers.png`);
console.log('ok, content ends at', y + 80, 'of', H);
