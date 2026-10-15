export type PestImageRef = {
  label: string;
  imageKey: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  hero: {
    headline: string;
    pestIcons: PestImageRef[];
  };
  expertise: {
    title: string;
    subtitle: string;
    images: PestImageRef[];
    bullets: string[];
  };
  faqTitle?: string;
  faqs?: FaqItem[];
};

const PEST_ASSET_BASE = '/assets/img/pests';

/** Missing keys → closest existing asset stem (labels in pageContent stay specific). */
const PEST_IMAGE_FALLBACKS: Record<string, string> = {
  'american-dog-tick': 'blacklegged-tick',
  'argentine-ant': 'odorous-house-ant',
  'brown-dog-tick': 'blacklegged-tick',
  'hyalomma-tick': 'blacklegged-tick',
  'camel-tick': 'blacklegged-tick',
  'bont-tick': 'blacklegged-tick',
  'soft-tick': 'blacklegged-tick',
  'asian-longhorned-tick': 'blacklegged-tick',
  'inland-floodwater-mosquito': 'northern-house-mosquito',
  'yellow-fever-mosquito': 'northern-house-mosquito',
  'malaria-mosquito': 'northern-house-mosquito',
  'southern-house-mosquito': 'northern-house-mosquito',
  'arabian-mosquito': 'northern-house-mosquito',
  'culex-quinquefasciatus': 'northern-house-mosquito',
  'jumping-spider': 'common-house-spider',
  'false-black-widow': 'common-house-spider',
  'brown-widow': 'common-house-spider',
  'yellow-sac-spider': 'common-house-spider',
  'camel-spider': 'wolf-spider',
  'cellar-spider': 'common-house-spider',
  'orb-weaver': 'common-house-spider',
  'leafcutter-bee': 'mason-bee',
  'little-black-ant': 'pavement-ant',
  'long-horned-bee': 'mining-bee',
  'sweat-bee': 'mason-bee',
  'eastern-honey-bee': 'western-honey-bee',
  'arab-carpenter-bee': 'eastern-carpenter-bee',
  'large-carpenter-bee': 'eastern-carpenter-bee',
  'small-carpenter-bee': 'eastern-carpenter-bee',
  'oriental-hornet': 'paper-wasp',
  'asian-hornet': 'paper-wasp',
  'yellow-wasp': 'paper-wasp',
  'asian-paper-wasp': 'paper-wasp',
  'banded-mud-wasp': 'mud-dauber',
  'potter-wasp': 'paper-wasp',
  'desert-subterranean-termite': 'eastern-subterranean-termite',
  'arabian-drywood-termite': 'drywood-termite',
  'arabian-fat-tailed-scorpion': 'shield',
  'deathstalker-scorpion': 'shield',
  'yellow-scorpion': 'shield',
  'black-scorpion': 'shield',
  'cairo-spiny-mouse': 'house-mouse',
  'sand-rat': 'house-mouse',
  'field-mouse': 'house-mouse',
  'arabian-desert-centipede': 'common-house-centipede',
  'silverfish': 'shield',
  'drain-fly': 'shield',
  'carpet-beetle': 'shield',
  'house-crow': 'bird',
  'house-sparrow': 'bird',
  'seagull': 'bird',
};

export function resolveImageKey(imageKey: string): string {
  return PEST_IMAGE_FALLBACKS[imageKey] ?? imageKey;
}

/**
 * Guaranteed-to-exist images, keyed by tile size. Used as a last-resort
 * runtime fallback so a missing/renamed asset never renders as a broken image.
 */
export const PEST_SAFE_FALLBACK = {
  base: `${PEST_ASSET_BASE}/shield.webp`,
  desktop: `${PEST_ASSET_BASE}/shield-d.webp`,
  mobile: `${PEST_ASSET_BASE}/shield-m.webp`,
} as const;

export type PestImageSize = keyof typeof PEST_SAFE_FALLBACK;

/**
 * `onError` handler for pest `<img>` elements. Swaps to the safe shield
 * asset for the given size so users never see a broken-image icon.
 */
export function handlePestImageError(size: PestImageSize) {
  return (event: { currentTarget: HTMLImageElement }) => {
    const target = event.currentTarget;
    const fallback = PEST_SAFE_FALLBACK[size];
    if (target.src.endsWith(fallback)) return;
    target.onerror = null;
    target.src = fallback;
  };
}

export function toImageKey(label: string): string {
  if (label.includes('40+') || label.toLowerCase().includes('shield')) {
    return 'shield';
  }
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function relatedHref(label: string): string {
  const l = label.toLowerCase();

  if (l.includes('40+') || l.includes('shield')) return '/residential-pest-control';
  if (l.includes('carpenter bee')) return '/carpenter-bee-exterminator-near-me';
  if (l.includes('yellow jacket')) return '/wasp-nest-removal';
  if (l.includes('oriental hornet') || l.includes('asian hornet')) return '/hornet-nest-removal';
  if (l.includes('hornet')) return '/hornet-nest-removal';
  if (l.includes('wasp') || l.includes('mud dauber') || l.includes('cicada killer') || l.includes('potter wasp') || l.includes('banded mud')) return '/wasp-nest-removal';
  if (l.includes('bee')) return '/bee-removal';
  if (l.includes('bed bug')) return '/bed-bug-exterminator-near-me';
  if (l.includes('termite')) return '/termite-control';
  if (l.includes('roach') || l.includes('cockroach')) return '/roach-exterminator-near-me';
  if (l.includes('centipede')) return '/exterminator-for-house-centipedes';
  if (l.includes('mosquito')) return '/mosquito-spraying-near-me';
  if (l.includes('tick')) return '/tick-control-near-me';
  if (l.includes('flea')) return '/pest-control-for-fleas';
  if (l.includes('scorpion') || l.includes('camel spider')) return '/critter-control';
  if (l.includes('silverfish')) return '/silverfish-control-dubai';
  if (l.includes('drain fly') || l.includes('moth fly')) return '/drain-fly-control-dubai';
  if (l.includes('spider')) return '/spider-exterminator-near-me';
  if (l.includes('ant')) return '/ant-exterminator-near-me';
  if (l.includes('rat') && !l.includes('operat')) return '/rat-exterminator-near-me';
  if (l.includes('mouse') || l.includes('mice') || l.includes('vole')) return '/mice-exterminator-near-me';
  if (l.includes('rodent')) return '/rodent-control';
  if (l.includes('crow') || l.includes('sparrow') || l.includes('seagull')) return '/crow-control-dubai';
  if (l.includes('pigeon')) return '/pigeon-control-dubai';
  if (l.includes('mynah')) return '/mynah-bird-control';

  return '/pest-control-for-bugs';
}

export function pest(label: string, href?: string, imageKey?: string): PestImageRef {
  return {
    label,
    imageKey: imageKey ?? toImageKey(label),
    href: href ?? relatedHref(label),
  };
}

export function pestAssetPaths(imageKey: string) {
  const key = resolveImageKey(imageKey);
  return {
    base: `${PEST_ASSET_BASE}/${key}.webp`,
    desktop: `${PEST_ASSET_BASE}/${key}-d.webp`,
    mobile: `${PEST_ASSET_BASE}/${key}-m.webp`,
  };
}

/**
 * The "40+ MORE" shield tile. Must always be the very last item of the
 * "pests we treat" grid - 5th/last slot when collapsed (1 row of 5),
 * 10th/last slot when expanded (2 rows of 5).
 */
export const HERO_MORE_PEST: PestImageRef = pest('40+ More', '/residential-pest-control', 'shield');

/**
 * Fixed set of 5 generic categories that fill out the second row when the
 * hero's "pests we treat" grid is expanded. Combined with the page's 4
 * custom collapsed pests + the shield tile, this always totals exactly
 * 10 items (2 rows x 5 columns) - never more, never less.
 *
 * These labels are generic category names, not species names, so their
 * asset filenames don't match the auto-slugified label (e.g. "Termites" ->
 * `termite.webp`, not `termites.webp`) - image keys are set explicitly here.
 */
export const GENERIC_HERO_EXPANSION_PESTS: PestImageRef[] = [
  pest('General Pest Control', '/residential-pest-control', 'residential-pc'),
  pest('Termites', '/termite-control', 'termite'),
  pest('Roaches', '/roach-exterminator-near-me', 'roach'),
  pest('Rodents', '/rodent-control', 'rodent'),
  pest('Ants', '/ant-exterminator-near-me', 'black-ant'),
];

export function toHeroDesktopAssets(ref: PestImageRef) {
  const paths = pestAssetPaths(ref.imageKey);
  return {
    label: ref.label.toUpperCase(),
    href: ref.href,
    desktop: paths.base,
    mobile: paths.mobile,
    longLabel: ref.label.length > 18,
  };
}

export function toServiceGridItem(ref: PestImageRef) {
  const paths = pestAssetPaths(ref.imageKey);
  return {
    label: ref.label,
    href: ref.href,
    imageDesktop: paths.desktop,
    imageMobile: paths.mobile,
  };
}
