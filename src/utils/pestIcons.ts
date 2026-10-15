/**
 * Global base zoom applied on top of every per-slug normalisation value.
 */
export const BASE_PEST_ICON_ZOOM = 1.1;

/**
 * Per-slug normalisation ratios.
 */
export const PEST_ICON_SCALE: Record<string, number> = {
  ant: 1.1,
  'aerial-yellow-jacket-nest': 0.85,
  'american-cockroach': 1,
  'asian-hornet': 1,
  'bald-faced-hornet': 1,
  'blacklegged-tick': 0.9,
  'common-bed-bug': 1.15,
  beetles: 1,
  'black-ant': 1,
  'cat-flea': 0.8,
  'dampwood-termite': 0.9,
  'dog-flea': 0.8,
  'drywood-termite': 0.95,
  earwigs: 1,
  'eastern-subterranean-termite': 0.9,
  'european-hornet': 0.95,
  'field-mouse': 0.9,
  'field-rat': 0.95,
  flea: 1,
  fly: 1.1,
  'friut-flies': 1,
  'german-cockroach': 1,
  gnat: 0.95,
  'ground-yellow-jacket-nest': 0.95,
  'house-mouse': 1,
  mice: 1,
  mosquito: 1.2,
  'mud-dauber': 1.05,
  'norway-rat': 0.9,
  'oriental-cockroach': 0.95,
  'paper-wasp': 0.95,
  'rat-flea': 0.85,
  'residential-pc': 1,
  roach: 1.05,
  rodent: 1.2,
  'roof-rat': 1.1,
  scorpion: 1.2,
  silverfish: 1,
  specialty: 1,
  spider: 0.95,
  stinkb: 0.95,
  termite: 1,
  trapping: 1,
  wasp: 1.1,
  weevil: 1,
  'western-yellow-jacket': 0.85,
  'white-mouse': 0.95,
  shield: 0.85,
};

export function pestSlugFromPath(imagePath: string): string {
  const filename = imagePath.split('/').pop() ?? '';
  return filename
    .replace(/-(m|d)\.(webp|png|jpg|jpeg)$/, '')
    .replace(/\.(webp|png|jpg|jpeg)$/, '');
}

export function pestIconScale(imagePath: string): number {
  const ratio = PEST_ICON_SCALE[pestSlugFromPath(imagePath)] ?? 1;
  return BASE_PEST_ICON_ZOOM * ratio;
}