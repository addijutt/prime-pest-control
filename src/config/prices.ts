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
};

export const PRICES = {
  // General
  'general-apartment': { label: 'General pest control, apartment', from: 199, unit: 'studio / 1-bedroom', visits: '1 visit' },
  'general-villa': { label: 'General pest control, villa', from: 449, unit: 'inside + garden perimeter', visits: '1 visit' },
  'annual-apartment': { label: 'Annual contract, apartment', from: 599, unit: 'per year', visits: '3–4 scheduled visits + call-outs' },
  'annual-villa': { label: 'Annual contract, villa', from: 1199, unit: 'per year', visits: '4 scheduled visits + call-outs' },

  // Insects
  'cockroach-apartment': { label: 'Cockroach treatment, apartment', from: 179, unit: 'studio / 1-bedroom', visits: 'gel bait + spray, follow-up after 2–3 weeks if needed' },
  'cockroach-villa': { label: 'Cockroach treatment, villa', from: 399, unit: 'villa or townhouse', visits: 'inside, drains and garden, follow-up if needed' },
  'bed-bug-apartment': { label: 'Bed bug treatment, apartment', from: 349, unit: 'studio / 1-bedroom', visits: '2 visits, 10–14 days apart' },
  'bed-bug-villa': { label: 'Bed bug treatment, villa', from: 1199, unit: 'up to 3 bedrooms', visits: '2 visits, 10–14 days apart' },
  'ant': { label: 'Ant treatment', from: 179, unit: 'apartment; villas from AED 349', visits: '1 visit + follow-up if needed' },
  'mosquito': { label: 'Mosquito treatment', from: 299, unit: 'villa garden', visits: '1 visit; monthly plans for summer' },
  'flea': { label: 'Flea treatment', from: 249, unit: 'apartment', visits: '2 visits, about 2 weeks apart' },
  'tick': { label: 'Tick treatment', from: 249, unit: 'apartment or ground-floor flat with garden', visits: '2 visits, about 2 weeks apart' },
  'wasp-nest': { label: 'Wasp or hornet nest removal', from: 249, unit: 'per nest', visits: '1 visit' },
  'bee-relocation': { label: 'Bee swarm relocation', from: 349, unit: 'per swarm or colony', visits: '1 visit' },
  'spider': { label: 'Spider treatment', from: 179, unit: 'apartment', visits: '1 visit' },
  'drain-fly': { label: 'Drain fly treatment', from: 179, unit: 'apartment', visits: '1 visit + drain advice' },
  'fly': { label: 'Fly control, home', from: 249, unit: 'apartment or villa', visits: '1 visit + breeding-site advice' },
  'silverfish': { label: 'Silverfish treatment', from: 179, unit: 'apartment', visits: '1 visit' },

  // Termites
  'termite-inspection': { label: 'Termite inspection', from: 250, unit: 'villa or townhouse', visits: '1 visit with written findings' },
  'termite-villa': { label: 'Termite treatment, villa', from: 1500, unit: 'post-construction, 3–4 bedrooms', visits: 'treatment + checks' },
  'termite-pre-construction': { label: 'Pre-construction anti-termite treatment', from: 8, unit: 'per m² of building footprint', perUnit: 'sqm', visits: 'soil treatment before the slab, with certificate' },

  // Rodents and others
  'rodent': { label: 'Rat & mouse control', from: 299, unit: 'apartment; villas from AED 449', visits: 'baiting/trapping + follow-up visit' },
  'scorpion': { label: 'Scorpion treatment', from: 299, unit: 'villa perimeter', visits: '1 visit' },
  'camel-spider': { label: 'Camel spider treatment', from: 249, unit: 'villa', visits: '1 visit' },
  'lizard': { label: 'Lizard & gecko control', from: 249, unit: 'apartment; villas from AED 399', visits: 'exclusion + insect treatment' },
  'snake': { label: 'Snake removal call-out', from: 349, unit: 'villa or garden', visits: 'removal + entry-point check' },

  // Hygiene and moving
  'disinfection-apartment': { label: 'Disinfection, apartment', from: 249, unit: 'studio / 1-bedroom', visits: '1 visit' },
  'disinfection-villa': { label: 'Disinfection, villa', from: 449, unit: 'up to 4 bedrooms', visits: '1 visit' },
  'move-in-apartment': { label: 'Move-in / move-out treatment, apartment', from: 249, unit: 'studio / 1-bedroom, empty unit', visits: '1 visit before you move in' },
  'move-in-villa': { label: 'Move-in / move-out treatment, villa', from: 549, unit: 'empty villa or townhouse', visits: '1 visit before you move in' },

  // Birds
  'pigeon': { label: 'Pigeon control', from: 349, unit: 'balcony, ledge or AC area', visits: 'cleaning + deterrents' },
  'bird-net': { label: 'Bird netting', from: 8, unit: 'per sq ft, installed (UV-stable HDPE)', perUnit: 'sqft', visits: 'free measurement first' },
  // Spikes: only weak market data (AED 50–100 per metre installed); owner to confirm
  'bird-spikes': { label: 'Bird spikes', from: 50, unit: 'per metre, installed (stainless steel)', perUnit: 'm', visits: 'ledges, parapets, signs, AC tops' },
  'bird-other': { label: 'Mynah, sparrow & crow control', from: 349, unit: 'per area', visits: 'survey + deterrents' },
  'solar-bird': { label: 'Solar panel bird proofing', from: null, unit: 'mesh skirt around the panel array', visits: 'free survey and quote' },

  // Business (quoted per site after a free survey, as is normal for contracts in Dubai)
  'restaurant-contract': { label: 'Restaurant pest control contract', from: null, unit: 'restaurants, cafes, cloud kitchens', visits: 'monthly visits + call-outs, report after every visit' },
  'office-contract': { label: 'Office pest control', from: null, unit: 'one-off or quarterly contract', visits: 'visits outside working hours' },
  'fumigation-commercial': { label: 'Fumigation (warehouses, containers, stored goods)', from: null, unit: 'per container, room or volume', visits: 'certificate included' },
  'fly-commercial': { label: 'Fly control, restaurants & food sites', from: null, unit: 'light traps + monthly service', visits: 'part of a monthly contract' },
  'commercial': { label: 'Commercial pest control', from: null, unit: 'restaurants, offices, buildings, warehouses', visits: 'monthly or quarterly contract after a free survey' },
} satisfies Record<string, PriceItem>;

export type PriceKey = keyof typeof PRICES;

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
