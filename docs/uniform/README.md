# Technician Uniform (approved design, 27 Nov 2026)

Send this folder to the uniform printer or embroidery shop.

| File | What it is |
|---|---|
| `uniform-spec-sheet.png` | Spec page 1 (A4, 300 dpi): colours, logo sizes and positions for the shirt and cap |
| `uniform-spec-trousers.png` | Spec page 2: full uniform and the trousers (fit, fabric, pockets, emerald piping on knee seams and cargo pocket tops, no logo) |
| `approved-full-uniform-mockup.png` | The approved full uniform: shirt, trousers and cap, front and back (AI mockup, reference only) |
| `approved-design-mockup.png` | The approved design (AI mockup, for reference only) |
| `ppc-logo-stacked-for-dark-fabric.png` | Stacked logo (shield + PPC in white), transparent background, 2400 px wide (20 cm at 300 dpi) |
| `ppc-logo-stacked-for-light-fabric.png` | Same logo with PPC in carbon black, for white or light fabric |
| `ppc-shield-only.png` | Shield only, for the cap front |

- Colours: carbon black `#16181B` (closest Pantone Black 6 C), emerald green `#0F7A3D` (closest Pantone 356 C).
- The shield comes from the brand kit, which is a raster file (about 870 px), enlarged here. Embroidery shops
  redraw the logo for their machines anyway; if a printer needs a vector file (SVG / AI / PDF), the shield
  has to be traced first.
- "PPC" is set in Segoe UI Black Italic.
- Ask for a fabric swatch in both colours and one embroidery sample of the chest logo before the bulk order.

Rebuild the files: `node scripts/build-uniform-logo.mjs "<brand kit folder>"`, then
`node scripts/build-uniform-spec.mjs` and `node scripts/build-uniform-trousers-spec.mjs`.

## Ready to share (`share/`)

- `Prime-Pest-Control-Uniform-For-Approval.pdf`: 3 pages (full uniform with a short summary, the shirt and cap spec, the trousers spec).
  Send this for approval.
- `Prime-Pest-Control-Uniform-Tailor-Pack.zip`: everything for the tailor (spec sheet, mockup, the 3 logo
  files and the PDF).
- The PDF is printed from `share/approval.html` with Chrome headless (`--print-to-pdf`).
