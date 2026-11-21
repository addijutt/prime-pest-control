// Hero banner images per page type (brief for each set: docs/hero-banner-images.md).
//
// Every hero is a background photo + a technician cut-out. Each page uses one set below; a set without
// its own files falls back to the default set, so pages keep working while photos are being made.
// To add a photo: save it in public/assets/img/hero/ and fill in `background` / `technician` here.

export type HeroImageSetId = 'default' | 'indoor' | 'outdoor' | 'birds' | 'business' | 'construction';

export interface HeroImageSet {
  /** Shown in the docs; what the background should show */
  name: string;
  /** Background photo (3:2, at least 2400 x 1600, WebP) */
  background?: string;
  /** Technician cut-out (transparent, portrait 3:4, at least 1500 px tall, WebP) */
  technician?: string;
}

/** Current images, used until the real ones are added */
const FALLBACK = {
  background: '/assets/img/pest_control_near_me.webp',
  technician: '/assets/img/hero-guy-transparent.png',
};

export const HERO_IMAGE_SETS: Record<HeroImageSetId, HeroImageSet> = {
  default: { name: 'Dubai community street or villa entrance (homepage, area pages)' },
  indoor: { name: 'Inside a Dubai apartment: kitchen or living room' },
  outdoor: { name: 'Villa garden, boundary wall and planting' },
  birds: { name: 'Tower balconies with bird netting, or a rooftop' },
  business: { name: 'Commercial kitchen, office or warehouse' },
  construction: { name: 'Construction site with foundations' },
};

/** Which set each service page uses. Pages not listed (homepage, area pages) use 'default'. */
export const HERO_SET_BY_PAGE: Record<string, HeroImageSetId> = {
  '/cockroach-control-dubai': 'indoor',
  '/bed-bug-treatment-dubai': 'indoor',
  '/ant-control-dubai': 'indoor',
  '/spider-control-dubai': 'indoor',
  '/silverfish-control-dubai': 'indoor',
  '/pest-control-for-fleas': 'indoor',
  '/drain-fly-control-dubai': 'indoor',
  '/lizard-control-dubai': 'indoor',
  '/apartment-pest-control-dubai': 'indoor',
  '/move-in-pest-control-dubai': 'indoor',
  '/disinfection-services-dubai': 'indoor',
  '/residential-pest-control': 'default',
  '/villa-pest-control-dubai': 'outdoor',
  '/termite-control': 'outdoor',
  '/rodent-control': 'outdoor',
  '/mosquito-control-dubai': 'outdoor',
  '/fly-control-dubai': 'outdoor',
  '/tick-control-dubai': 'outdoor',
  '/hornet-nest-removal': 'outdoor',
  '/scorpion-control-dubai': 'outdoor',
  '/camel-spider-control-dubai': 'outdoor',
  '/snake-removal-dubai': 'outdoor',
  '/bird-control-dubai': 'birds',
  '/pigeon-control-dubai': 'birds',
  '/mynah-bird-control': 'birds',
  '/bird-netting-dubai': 'birds',
  '/solar-panel-bird-proofing-dubai': 'birds',
  '/commercial-pest-control-dubai': 'business',
  '/restaurant-pest-control-dubai': 'business',
  '/office-pest-control-dubai': 'business',
  '/fumigation-services-dubai': 'business',
  '/pre-construction-termite-treatment-dubai': 'construction',
};

/** The images a page's hero shows: its set, then the default set, then the current images */
export function heroImagesFor(pathname: string): { background: string; technician: string } {
  const set = HERO_IMAGE_SETS[HERO_SET_BY_PAGE[pathname] ?? 'default'];
  const def = HERO_IMAGE_SETS.default;
  return {
    background: set.background ?? def.background ?? FALLBACK.background,
    technician: set.technician ?? def.technician ?? FALLBACK.technician,
  };
}
