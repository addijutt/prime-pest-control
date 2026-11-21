// Title and description of every service page. Adding an entry here creates the page
// (src/app/[slug]/page.tsx) and adds it to the sitemap; its content goes in pageContent.ts.

import { aed } from './prices';

export type SeoMeta = { title: string; description: string };

export const SEO_META: Record<string, SeoMeta> = {
  'ant-control-dubai': {
    title: 'Ant Control Dubai | Ant Exterminator Services | Prime Pest Control',
    description: 'Professional ant control and extermination in Dubai. We treat all ant species found in UAE homes and businesses. Same-day service. WhatsApp 055 304 5256.',
  },
  'spider-control-dubai': {
    title: 'Spider Control Dubai | Spider Exterminator | Prime Pest Control',
    description: 'Expert spider extermination services in Dubai. Safe removal of all spider species from homes and businesses. WhatsApp for a free quote.',
  },
  'cockroach-control-dubai': {
    title: 'Cockroach Control Dubai | Cockroach Exterminator | Prime Pest Control',
    description: 'Expert cockroach extermination in Dubai. We eliminate German, American and all cockroach species from homes and businesses. WhatsApp for a free quote.',
  },
  'pest-control-for-fleas': {
    title: 'Flea Control Dubai | Flea Treatment Services | Prime Pest Control',
    description: 'Expert flea control and treatment in Dubai. We eliminate flea infestations from homes, carpets and pet areas. WhatsApp 055 304 5256.',
  },
  'mosquito-control-dubai': {
    title: 'Mosquito Control Dubai | Mosquito Spraying Services | Prime Pest Control',
    description: 'Professional mosquito control and spraying services across Dubai. Eliminate mosquitoes from gardens, pools and outdoor spaces. WhatsApp 055 304 5256.',
  },
  'tick-control-dubai': {
    title: 'Tick Control Dubai | Tick Exterminator Services | Prime Pest Control',
    description: 'Expert tick control services in Dubai. Protect your family and pets from tick infestations. WhatsApp for a free quote.',
  },
  'bed-bug-treatment-dubai': {
    title: 'Bed Bug Treatment Dubai | Bed Bug Exterminator | Prime Pest Control',
    description: 'Professional bed bug exterminator in Dubai. Complete elimination of bed bug infestations from hotels, apartments and villas. WhatsApp for a free quote.',
  },
  'termite-control': {
    title: 'Termite Control Dubai | Termite Treatment Services | Prime Pest Control',
    description: 'Expert termite control and treatment in Dubai. Protect your property from termite damage with our guaranteed solutions. WhatsApp 055 304 5256.',
  },
  'residential-pest-control': {
    title: 'Residential Pest Control Dubai | Home Pest Services | Prime Pest Control',
    description: 'Professional residential pest control services across Dubai. We protect homes from cockroaches, bed bugs, termites, rodents and 50+ pests. WhatsApp for a free quote.',
  },
  'rodent-control': {
    title: 'Rat & Mouse Control Dubai | Rodent Exterminator | Prime Pest Control',
    description: 'Rat and mouse control in Dubai for apartments, villas and businesses. We find how rodents get in, remove them and seal entry points. WhatsApp 055 304 5256.',
  },
  'hornet-nest-removal': {
    title: 'Wasp, Hornet & Bee Removal Dubai | Nest Removal | Prime Pest Control',
    description: 'Safe wasp and hornet nest removal and bee swarm relocation in Dubai homes, villas and gardens. Oriental hornet specialists. WhatsApp 055 304 5256.',
  },
  'bird-control-dubai': {
    title: 'Bird Control Dubai | Netting, Spikes & Bird Proofing | Prime Pest Control',
    description: 'Bird control in Dubai with netting, spikes, bird wire, gel and solar panel mesh. Pigeons, mynahs, crows and sparrows kept off balconies, roofs, AC units and solar panels.',
  },
  'pigeon-control-dubai': {
    title: 'Pigeon Control Dubai | Pigeon Removal & Deterrents | Prime Pest Control',
    description: 'Professional pigeon control and removal in Dubai. Pigeon netting, spikes and deterrents installed across all communities. WhatsApp 055 304 5256.',
  },
  'mynah-bird-control': {
    title: 'Mynah Bird Control Dubai | Mynah Removal Services | Prime Pest Control',
    description: 'Expert mynah bird control and removal in Dubai. We provide humane, effective deterrents for mynah bird problems. WhatsApp for a free quote.',
  },
  'bird-netting-dubai': {
    title: 'Bird Netting Dubai | Anti-Bird Net Installation | Prime Pest Control',
    description: 'Professional bird netting installation in Dubai. Anti-pigeon nets for balconies, rooftops and buildings. WhatsApp 055 304 5256.',
  },
  'scorpion-control-dubai': {
    title: 'Scorpion Control Dubai | Scorpion Removal & Treatment | Prime Pest Control',
    description: 'Professional scorpion control and removal in Dubai. We treat Arabian Fat-tailed Scorpions, Deathstalkers and all UAE scorpion species. Same-day service. WhatsApp 055 304 5256.',
  },
  'camel-spider-control-dubai': {
    title: 'Camel Spider Removal Dubai | Solifugae Control | Prime Pest Control',
    description: 'Expert camel spider (sun spider) removal in Dubai. Professional treatment for camel spider sightings in homes and businesses across all Dubai communities. WhatsApp 055 304 5256.',
  },
  'drain-fly-control-dubai': {
    title: 'Drain Fly Control Dubai | Moth Fly Treatment | Prime Pest Control',
    description: 'Professional drain fly and moth fly control in Dubai. We eliminate drain fly infestations at the source for apartments, restaurants and hotels. WhatsApp for a free quote.',
  },
  'silverfish-control-dubai': {
    title: 'Silverfish Control Dubai | Silverfish Exterminator | Prime Pest Control',
    description: 'Expert silverfish control and extermination in Dubai. Protect books, clothing and stored items from silverfish damage. Same-day service available. WhatsApp 055 304 5256.',
  },
  'commercial-pest-control-dubai': {
    title: 'Commercial Pest Control Dubai | Restaurants, Hotels & Offices | Prime Pest Control',
    description: 'Dubai Municipality-compliant commercial pest control for restaurants, hotels, warehouses and offices in Dubai. AMC contracts available. WhatsApp for a free commercial quote.',
  },
  'solar-panel-bird-proofing-dubai': {
    title: 'Solar Panel Bird Proofing Dubai | Pigeon Mesh Installation | Prime Pest Control',
    description: 'Professional solar panel bird proofing in Dubai. Discrete mesh kits that permanently exclude pigeons and sparrows from under your solar panels. WhatsApp 055 304 5256.',
  },
  'villa-pest-control-dubai': {
    title: 'Villa Pest Control Dubai | Inside, Garden & Perimeter | Prime Pest Control',
    description: 'Villa pest control in Dubai covering inside, garden, drains and boundary: ants, termites, cockroaches, rodents, scorpions and snakes. Annual contracts available.',
  },
  'apartment-pest-control-dubai': {
    title: 'Apartment Pest Control Dubai | Cockroaches & Bed Bugs | Prime Pest Control',
    description: 'Apartment pest control in Dubai: cockroaches, bed bugs, ants and drain flies treated in one visit with tower-safe gel baits and targeted treatment. No fogging.',
  },
  'move-in-pest-control-dubai': {
    title: 'Move-In & Move-Out Pest Control Dubai | Empty Unit Treatment | Prime Pest Control',
    description: 'Treat your Dubai flat or villa while it is empty, before you move in, or before handover when you move out. One visit, service report included.',
  },
  'lizard-control-dubai': {
    title: 'Lizard & Gecko Control Dubai | Humane Removal | Prime Pest Control',
    description: 'Get rid of geckos and lizards in Dubai homes for good: we remove the insects that attract them, seal entry gaps and move lizards out. No glue traps.',
  },
  'snake-removal-dubai': {
    title: 'Snake Removal Dubai | Safe Snake Catcher for Villas & Gardens | Prime Pest Control',
    description: 'Snake in your Dubai villa or garden? Keep away and WhatsApp a photo. Safe snake removal and a property check for what attracted it. Call 055 304 5256.',
  },
  'disinfection-services-dubai': {
    title: 'Disinfection Services Dubai | Homes & Businesses | Prime Pest Control',
    description: 'Disinfection and sanitisation in Dubai for homes after illness or moving in, after rodent or pigeon droppings, and for offices, clinics and kitchens.',
  },
  'fumigation-services-dubai': {
    title: 'Fumigation Services Dubai | Warehouses, Containers & Homes | Prime Pest Control',
    description: 'Licensed fumigation in Dubai for warehouses, stored goods, export containers and wooden pallets, with certificate. For homes we use safe targeted treatments, never gas.',
  },
  'restaurant-pest-control-dubai': {
    title: 'Restaurant Pest Control Dubai | Food Business Contracts | Prime Pest Control',
    description: 'Pest control for Dubai restaurants, cafes and cloud kitchens: monthly visits outside opening hours, fly control and a service report after every visit for inspections.',
  },
  'office-pest-control-dubai': {
    title: 'Office Pest Control Dubai | After-Hours Service | Prime Pest Control',
    description: 'Office pest control in Dubai: cockroaches and ants in pantries, rodents in ceilings and cable trays, treated outside working hours. One-off or quarterly contracts.',
  },
  'fly-control-dubai': {
    title: 'Fly Control Dubai | House Flies & Fruit Flies | Prime Pest Control',
    description: `Fly control in Dubai homes, restaurants and food businesses: we find and treat breeding sites and fit insect light traps. Homes from ${aed('fly')}.`,
  },
  'pre-construction-termite-treatment-dubai': {
    title: 'Pre-Construction Anti-Termite Treatment Dubai | With Certificate | Prime Pest Control',
    description: 'Pre-construction anti-termite soil treatment in Dubai for villas, extensions and buildings, timed with your pour schedule. Dubai Municipality termite-approved, certificate included.',
  },
};
