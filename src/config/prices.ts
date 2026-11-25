// ─────────────────────────────────────────────────────────────────────────────
// PRICES: the one place to change a price on the website.
//
// Every "From AED …" on the site (service pages, community pages, price cards and
// the Service schema for Google) reads from this file. Change a number here,
// rebuild, and it updates everywhere.
//
// `from`   starting price in AED (number), or null for "free quote after survey"
// `unit`   what the price is for, shown under the price ("studio / 1-bedroom")
// `visits` what is included ("2 visits, 2 weeks apart")
//
// Starting prices set 21 Nov 2026 from Dubai market rates (ServiceMarket, Urban
// Company and Dubai pest control price guides); the owner confirmed ours are about
// the same. Update them whenever our own price list changes.
// ─────────────────────────────────────────────────────────────────────────────

export const PRICES_UPDATED = '2026-11-21';

export type PriceItem = {
  label: string;
  from: number | null;
  unit: string;
  visits?: string;
  perUnit?: 'sqft' | 'sqm' | 'm';
  /** Free re-treatment if the same pest returns within this many days (365 = 1 year) */
  warrantyDays?: number;
  /** 'installation' = warranty on the fitted netting/spikes, not a re-treatment */
  warrantyKind?: 'retreatment' | 'installation';
};

export const PRICES = {
  // General
  'general-apartment': { label: 'General pest control, apartment', from: 199, unit: 'studio / 1-bedroom', visits: '1 visit', warrantyDays: 90 },
  'general-villa': { label: 'General pest control, villa', from: 449, unit: 'inside + garden perimeter', visits: '1 visit', warrantyDays: 90 },
  'annual-apartment': { label: 'Annual contract, apartment', from: 599, unit: 'per year', visits: '3–4 scheduled visits + free call-outs for covered pests' },
  'annual-villa': { label: 'Annual contract, villa', from: 1199, unit: 'per year', visits: '4 scheduled visits + free call-outs for covered pests' },

  // Insects
  'cockroach-apartment': { label: 'Cockroach treatment, apartment', from: 179, unit: 'studio / 1-bedroom', visits: 'gel bait + spray, follow-up after 2–3 weeks if needed', warrantyDays: 90 },
  'cockroach-villa': { label: 'Cockroach treatment, villa', from: 399, unit: 'villa or townhouse', visits: 'inside, drains and garden, follow-up if needed', warrantyDays: 90 },
  'bed-bug-apartment': { label: 'Bed bug treatment, apartment', from: 349, unit: 'studio / 1-bedroom', visits: '2 visits, 10–14 days apart', warrantyDays: 90 },
  'bed-bug-villa': { label: 'Bed bug treatment, villa', from: 1199, unit: 'up to 3 bedrooms', visits: '2 visits, 10–14 days apart', warrantyDays: 90 },
  'ant': { label: 'Ant treatment', from: 179, unit: 'apartment; villas from AED 349', visits: '1 visit + follow-up if needed', warrantyDays: 90 },
  'mosquito': { label: 'Mosquito treatment', from: 299, unit: 'villa garden', visits: '1 visit; monthly plans for summer' },
  'flea': { label: 'Flea treatment', from: 249, unit: 'apartment', visits: '2 visits, about 2 weeks apart', warrantyDays: 90 },
  'tick': { label: 'Tick treatment', from: 249, unit: 'apartment or ground-floor flat with garden', visits: '2 visits, about 2 weeks apart', warrantyDays: 90 },
  'wasp-nest': { label: 'Wasp or hornet nest removal', from: 249, unit: 'per nest', visits: '1 visit', warrantyDays: 90 },
  'bee-relocation': { label: 'Bee swarm relocation', from: 349, unit: 'per swarm or colony', visits: '1 visit' },
  'spider': { label: 'Spider treatment', from: 179, unit: 'apartment', visits: '1 visit', warrantyDays: 90 },
  'drain-fly': { label: 'Drain fly treatment', from: 179, unit: 'apartment', visits: '1 visit + drain advice', warrantyDays: 90 },
  'fly': { label: 'Fly control, home', from: 249, unit: 'apartment or villa', visits: '1 visit + breeding-site advice' },
  'silverfish': { label: 'Silverfish treatment', from: 179, unit: 'apartment', visits: '1 visit', warrantyDays: 90 },

  // Termites
  'termite-inspection': { label: 'Termite inspection', from: 250, unit: 'villa or townhouse; deducted from the treatment if you book it', visits: '1 visit with written findings' },
  'termite-villa': { label: 'Termite treatment, villa', from: 1500, unit: 'post-construction, 3–4 bedrooms', visits: 'treatment + checks', warrantyDays: 90 },
  'termite-pre-construction': { label: 'Pre-construction anti-termite treatment', from: 8, unit: 'per m² of building footprint', perUnit: 'sqm', visits: 'soil treatment before the slab, with certificate' },

  // Rodents and others
  'rodent': { label: 'Rat & mouse control', from: 299, unit: 'apartment; villas from AED 449', visits: 'baiting/trapping + follow-up visit', warrantyDays: 90 },
  'scorpion': { label: 'Scorpion treatment', from: 299, unit: 'villa perimeter', visits: '1 visit' },
  'camel-spider': { label: 'Camel spider treatment', from: 249, unit: 'villa', visits: '1 visit' },
  'lizard': { label: 'Lizard & gecko control', from: 249, unit: 'apartment; villas from AED 399', visits: 'exclusion + insect treatment', warrantyDays: 90 },
  'snake': { label: 'Snake removal call-out', from: 349, unit: 'villa or garden', visits: 'removal + entry-point check' },

  // Hygiene and moving
  'disinfection-apartment': { label: 'Disinfection, apartment', from: 249, unit: 'studio / 1-bedroom', visits: '1 visit' },
  'disinfection-villa': { label: 'Disinfection, villa', from: 449, unit: 'up to 4 bedrooms', visits: '1 visit' },
  'move-in-apartment': { label: 'Move-in / move-out treatment, apartment', from: 249, unit: 'studio / 1-bedroom, empty unit', visits: '1 visit before you move in', warrantyDays: 90 },
  'move-in-villa': { label: 'Move-in / move-out treatment, villa', from: 549, unit: 'empty villa or townhouse', visits: '1 visit before you move in', warrantyDays: 90 },

  // Birds
  'pigeon': { label: 'Pigeon control', from: 349, unit: 'balcony, ledge or AC area', visits: 'cleaning + deterrents' },
  'bird-net': { label: 'Bird netting', from: 8, unit: 'per sq ft, installed (UV-stable HDPE)', perUnit: 'sqft', visits: 'free measurement first', warrantyDays: 90, warrantyKind: 'installation' },
  // Spikes: only weak market data (AED 50–100 per metre installed); owner to confirm
  'bird-spikes': { label: 'Bird spikes', from: 50, unit: 'per metre, installed (stainless steel)', perUnit: 'm', visits: 'ledges, parapets, signs, AC tops', warrantyDays: 90, warrantyKind: 'installation' },
  'bird-other': { label: 'Mynah, sparrow & crow control', from: 349, unit: 'per area', visits: 'survey + deterrents' },
  'solar-bird': { label: 'Solar panel bird proofing', from: null, unit: 'mesh skirt around the panel array', visits: 'free survey and quote' },

  // Visits that are not part of a job (see SERVICE_TERMS)
  'callout': { label: 'Call-out visit', from: 50, unit: 'deducted from the job price when the job is booked and completed', visits: 'free under warranty or an annual contract' },

  // Business (quoted per site after a free survey, as is normal for contracts in Dubai)
  'restaurant-contract': { label: 'Restaurant pest control contract', from: null, unit: 'restaurants, cafes, cloud kitchens', visits: 'monthly visits + call-outs, report after every visit' },
  'office-contract': { label: 'Office pest control', from: null, unit: 'one-off or quarterly contract', visits: 'visits outside working hours' },
  'fumigation-commercial': { label: 'Fumigation (warehouses, containers, stored goods)', from: null, unit: 'per container, room or volume', visits: 'certificate included' },
  'fly-commercial': { label: 'Fly control, restaurants & food sites', from: null, unit: 'light traps + monthly service', visits: 'part of a monthly contract' },
  'commercial': { label: 'Commercial pest control', from: null, unit: 'restaurants, offices, buildings, warehouses', visits: 'monthly or quarterly contract after a free survey' },
} satisfies Record<string, PriceItem>;

export type PriceKey = keyof typeof PRICES;

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE TERMS: quotes, surveys, warranty and call-outs (decided 21 Nov 2026, in line with
// the Dubai market). Change them here; the price cards, FAQs and guides read from this.
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICE_TERMS = {
  /** Hours within which annual-contract call-outs are attended */
  calloutResponseHours: 48,
  /** Pests covered by free call-outs on annual contracts */
  annualCoveredPests: 'cockroaches, ants, spiders, silverfish and other crawling insects',
  /** Treated separately on annual contracts (specialist work) */
  annualExcluded: 'bed bugs, termites, rats and mice, birds and wasp nests',
  /** Survey visits that are free because the job needs measuring or inspecting first */
  freeSurveyFor: 'villas, businesses, bird netting, solar panels and fumigation',
};

/** "60 days", "1 year": the warranty period alone, for use inside sentences */
export function warrantyPeriod(key: PriceKey): string {
  const d = (PRICES[key] as PriceItem).warrantyDays ?? 0;
  if (!d) return '';
  const years = Math.round(d / 365);
  if (d >= 365) return `${years} year${years > 1 ? 's' : ''}`;
  return d % 30 === 0 ? `${d} days (${d / 30} months)` : `${d} days`;
}

/** "60-day warranty, free re-treatment", "1-year warranty on the installation", or '' */
export function warrantyText(key: PriceKey): string {
  const p: PriceItem = PRICES[key];
  if (!p.warrantyDays) return '';
  const span = p.warrantyDays >= 365 ? `${Math.round(p.warrantyDays / 365)}-year` : p.warrantyDays % 30 === 0 ? `${p.warrantyDays}-day (${p.warrantyDays / 30}-month)` : `${p.warrantyDays}-day`;
  return p.warrantyKind === 'installation' ? `${span} warranty on the installation` : `${span} warranty, free re-treatment`;
}

/** "AED 1,500" */
export function formatAed(n: number): string {
  return `AED ${n.toLocaleString('en-US')}`;
}

/** "From AED 349", "From AED 8 / sq ft", or "Free quote" */
export function priceText(key: PriceKey): string {
  const p: PriceItem = PRICES[key];
  if (p.from === null) return 'Free quote';
  const per = p.perUnit === 'sqft' ? ' / sq ft' : p.perUnit === 'sqm' ? ' / m²' : p.perUnit === 'm' ? ' / metre' : '';
  return `From ${formatAed(p.from)}${per}`;
}

/** "AED 199" or "AED 8 / m²": for prices inside sentences, e.g. `from ${aed('general-apartment')}` */
export function aed(key: PriceKey): string {
  return priceText(key).replace(/^From /, '');
}

/** Lowest whole-job price among the keys (per-m²/sq-ft prices are left out), for schema offers. */
export function lowestPrice(keys: PriceKey[]): number | null {
  const nums = keys
    .map((k) => PRICES[k] as PriceItem)
    .filter((p) => p.from !== null && !p.perUnit)
    .map((p) => p.from as number);
  return nums.length ? Math.min(...nums) : null;
}

/** Hero price line. 'main' (service pages): the price of the page's main service, its first price key,
 *  e.g. 'From AED 179' or 'From AED 8 / m²'; undefined when that service is quote-only, so a related
 *  service's price (rats on the snake page) is never shown as the page's price.
 *  'lowest' (area pages): the lowest whole-job price among the keys. */
export function heroPriceText(keys: PriceKey[], mode: 'main' | 'lowest' = 'main'): string | undefined {
  if (mode === 'lowest') {
    const low = lowestPrice(keys);
    return low === null ? undefined : `From ${formatAed(low)}`;
  }
  const main = keys[0];
  return main && (PRICES[main] as PriceItem).from !== null ? priceText(main) : undefined;
}

/** Hero warranty for a page: the warranty of its main service (the first price key, skipping an inspection),
 *  or 0. Related services further down the list (rats on the snake page, netting on the pigeon page) don't
 *  count, so a page never claims a warranty its own service doesn't have. */
export function heroWarrantyDays(keys: PriceKey[]): number {
  const main = keys.find((k) => !k.endsWith('-inspection'));
  return main ? ((PRICES[main] as PriceItem).warrantyDays ?? 0) : 0;
}
