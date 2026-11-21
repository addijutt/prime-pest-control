import { COMMUNITIES } from './communities';

// Site menu (desktop mega menus + mobile drawer). Items are named the way visitors think
// ("Cockroaches", not "Cockroach Control"): the menu heading already says what the service is.

export type NavLink = { label: string; href: string };
export type NavGroup = { heading?: string; links: NavLink[] };
export type NavMenu = { id: string; label: string; href: string; groups: NavGroup[]; columns: number };

const areaLinks: NavLink[] = [...COMMUNITIES]
  .map((c) => ({ label: c.name.replace(/ \(.*\)$/, ''), href: `/pest-control-${c.slug}` }))
  .sort((a, b) => a.label.localeCompare(b.label));

/** Split a list into n roughly equal columns */
function columns(links: NavLink[], n: number): NavGroup[] {
  const per = Math.ceil(links.length / n);
  return Array.from({ length: n }, (_, i) => ({ links: links.slice(i * per, (i + 1) * per) }));
}

export const NAV_MENUS: NavMenu[] = [
  {
    id: 'pest',
    label: 'Pest Control',
    href: '/residential-pest-control',
    columns: 4,
    groups: [
      {
        heading: 'For your home',
        links: [
          { label: 'All Home Pest Control', href: '/residential-pest-control' },
          { label: 'Apartments', href: '/apartment-pest-control-dubai' },
          { label: 'Villas & Townhouses', href: '/villa-pest-control-dubai' },
          { label: 'Move-In / Move-Out', href: '/move-in-pest-control-dubai' },
        ],
      },
      {
        heading: 'Crawling insects',
        links: [
          { label: 'Cockroaches', href: '/cockroach-control-dubai' },
          { label: 'Bed Bugs', href: '/bed-bug-treatment-dubai' },
          { label: 'Ants', href: '/ant-control-dubai' },
          { label: 'Termites', href: '/termite-control' },
          { label: 'Fleas', href: '/pest-control-for-fleas' },
          { label: 'Ticks', href: '/tick-control-dubai' },
          { label: 'Spiders', href: '/spider-control-dubai' },
          { label: 'Silverfish', href: '/silverfish-control-dubai' },
        ],
      },
      {
        heading: 'Flying insects',
        links: [
          { label: 'Mosquitoes', href: '/mosquito-control-dubai' },
          { label: 'Flies', href: '/fly-control-dubai' },
          { label: 'Drain Flies', href: '/drain-fly-control-dubai' },
          { label: 'Wasps, Hornets & Bees', href: '/hornet-nest-removal' },
        ],
      },
      {
        heading: 'Other pests',
        links: [
          { label: 'Rats & Mice', href: '/rodent-control' },
          { label: 'Scorpions', href: '/scorpion-control-dubai' },
          { label: 'Camel Spiders', href: '/camel-spider-control-dubai' },
          { label: 'Lizards & Geckos', href: '/lizard-control-dubai' },
          { label: 'Snakes', href: '/snake-removal-dubai' },
        ],
      },
    ],
  },
  {
    id: 'bird',
    label: 'Bird Control',
    href: '/bird-control-dubai',
    columns: 1,
    groups: [
      {
        links: [
          { label: 'Bird Control & Proofing', href: '/bird-control-dubai' },
          { label: 'Pigeons', href: '/pigeon-control-dubai' },
          { label: 'Mynahs', href: '/mynah-bird-control' },
          { label: 'Bird Netting', href: '/bird-netting-dubai' },
          { label: 'Solar Panel Bird Proofing', href: '/solar-panel-bird-proofing-dubai' },
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    href: '/commercial-pest-control-dubai',
    columns: 1,
    groups: [
      {
        links: [
          { label: 'All Commercial Pest Control', href: '/commercial-pest-control-dubai' },
          { label: 'Restaurants & Cafes', href: '/restaurant-pest-control-dubai' },
          { label: 'Offices', href: '/office-pest-control-dubai' },
          { label: 'Fumigation', href: '/fumigation-services-dubai' },
          { label: 'Pre-Construction Anti-Termite', href: '/pre-construction-termite-treatment-dubai' },
          { label: 'Disinfection', href: '/disinfection-services-dubai' },
        ],
      },
    ],
  },
  {
    id: 'areas',
    label: 'Areas',
    href: '/#service-area',
    columns: 3,
    groups: columns(areaLinks, 3),
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];
