// Outline mask for a mugshot photo: the chart lines show everywhere except behind the subject.
// node scripts/make-mug-mask.mjs <photo.png> <out-mask.png> <size> <top> [wallW=1080] [wallH=960]
// The photo is placed like in social/mugshot.html: <size> px square, centred horizontally, <top> px from the top.
import sharp from 'sharp';

sharp.cache(false);
const [, , photo, out, sizeArg, topArg, wArg = '1080', hArg = '960'] = process.argv;
const S = +sizeArg, top = +topArg, W = +wArg, H = +hArg;

const { data, info } = await sharp(photo).resize(S, S).removeAlpha().raw().toBuffer({ resolveWithObject: true });
// Background = average of the four corners
const px = (x, y) => { const i = (y * S + x) * 3; return [data[i], data[i + 1], data[i + 2]]; };
const corners = [px(5, 5), px(S - 6, 5), px(5, S - 6), px(S - 6, S - 6)];
const bg = [0, 1, 2].map((c) => corners.reduce((a, p) => a + p[c], 0) / 4);

// Subject = pixels clearly different from the background
const sub = Buffer.alloc(S * S);
for (let i = 0; i < S * S; i++) {
  const d = Math.max(Math.abs(data[i * 3] - bg[0]), Math.abs(data[i * 3 + 1] - bg[1]), Math.abs(data[i * 3 + 2] - bg[2]));
  sub[i] = d > 26 ? 255 : 0;
}
// Grow the outline a little (blur, then threshold) so thin legs and antennae are fully covered
const grown = await sharp(sub, { raw: { width: S, height: S, channels: 1 } }).blur(2.2).threshold(18).toColourspace('b-w').raw().toBuffer();

// Wall mask: opaque everywhere (lines visible), transparent where the subject is
const alpha = Buffer.alloc(W * H, 255);
const left = Math.round((W - S) / 2);
for (let y = 0; y < S; y++) {
  const wy = top + y;
  if (wy < 0 || wy >= H) continue;
  for (let x = 0; x < S; x++) {
    const wx = left + x;
    if (wx < 0 || wx >= W) continue;
    if (grown[y * S + x] > 0) alpha[wy * W + wx] = 0;
  }
}
const white = Buffer.alloc(W * H * 3, 255);
await sharp(white, { raw: { width: W, height: H, channels: 3 } }).joinChannel(alpha, { raw: { width: W, height: H, channels: 1 } }).png().toFile(out);
console.log('wrote', out, 'bg', bg.map(Math.round).join(','));
