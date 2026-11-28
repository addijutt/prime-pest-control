import { aed } from './prices';
import type { ServiceGuide } from './guideTypes';
import { MORE_GUIDES } from './serviceGuidesMore';

// Unique Dubai content per page, keyed by path. Prices are NOT written here: they come from prices.ts
// via `priceKeys`, so a price change never needs an edit in this file.

const SAFETY_COMMON = [
  'Only products approved for use in Dubai, applied by trained technicians from a Dubai Municipality licensed company.',
  'No smoke "bombs", no thermal fogging inside flats and never aluminium phosphide. These are banned for homes in the UAE after deaths through shared AC ducts.',
];

export const SERVICE_GUIDES: Record<string, ServiceGuide> = {
  '/': {
    priceKeys: ['general-apartment', 'general-villa', 'bed-bug-apartment', 'annual-apartment'],
    name: 'Pest Control',
    title: 'What to Expect From Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician in uniform at the door of a Dubai apartment with a treatment kit, greeting a resident', alt: 'Gloved hands placing cockroach gel bait in a kitchen cabinet hinge with a torch', src: '/assets/img/jobs/home-intro.webp' },
      signs: { brief: 'Close-up of common signs: cockroach droppings in a kitchen hinge, bed bug spots on a mattress seam, termite mud tube on a wall (collage or one clear shot)', alt: 'German cockroaches, droppings and an egg case inside a kitchen sink cabinet', src: '/assets/img/jobs/home-signs.webp' },
    },
    answer:
      `Pest control in Dubai usually starts from about ${aed('general-apartment')} for a studio or 1-bedroom apartment and ${aed('general-villa')} for a villa. Cockroaches, bed bugs, ants, rodents and termites are the most common call-outs, and most jobs are done in one visit. Bed bugs and heavy cockroach problems need a follow-up.`,
    body: [
      'Dubai\'s heat keeps pests active all year, with the peak from April to October. In apartment towers, cockroaches and ants move between flats through shared drains, risers and garbage rooms, so a problem often starts next door. In villas, gardens and irrigation bring ants, termites, mosquitoes, rodents and, near the desert edge, scorpions and snakes.',
      'We treat homes, buildings and businesses in every Dubai community, as a one-off visit or on an annual contract. Send a photo on WhatsApp and we tell you what it is, how we would treat it and the price before we book.',
    ],
    signsTitle: 'When to Call Us',
    signs: [
      'You see cockroaches in daylight, or droppings like black pepper in kitchen cabinets.',
      'Itchy bites in a line after sleeping, or small dark spots on mattress seams (bed bugs).',
      'Mud tubes on walls, hollow-sounding door frames or skirting boards (termites).',
      'Scratching in the false ceiling, chewed cables or droppings in the store room (rodents).',
      'Pigeons nesting on balcony ledges or roofs, or droppings on the balcony.',
    ],
    steps: [
      { title: 'Tell us what you see', text: 'A photo or short description on WhatsApp is enough to identify most pests and give a starting price.' },
      { title: 'Inspection', text: 'The technician finds where the pests live, how they get in and what attracts them before treating.' },
      { title: 'Targeted treatment', text: 'Gel baits, crack-and-crevice treatment, bait stations or barrier treatment, chosen for the pest and your home.' },
      { title: 'Follow-up and prevention', text: 'For bed bugs and heavy infestations we come back to break the breeding cycle, and we show you what to seal or change.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Most treatments need you out of the room for 1–4 hours. We tell you exactly how long, and what to do about children, pets, fish tanks and food.',
    ],
    prevention: [
      'Keep drain covers closed and run water in unused bathrooms weekly so traps do not dry out.',
      'Seal gaps around kitchen pipes, AC pipes and under doors.',
      'Do not leave pet food or rubbish out overnight.',
      'Check second-hand furniture and luggage after travel for bed bugs.',
    ],
    related: [
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
    ],
  },

  '/cockroach-control-dubai': {
    priceKeys: ['cockroach-apartment', 'cockroach-villa', 'annual-apartment'],
    name: 'Cockroach Control',
    title: 'Cockroach Control in Dubai',
    photos: {
      intro: { brief: 'Technician applying gel bait inside a kitchen cabinet hinge in a Dubai apartment, close-up of the bait gun', alt: 'Gloved hands placing cockroach gel bait in the gap between the countertop and wall tiles beside a cooker', src: '/assets/img/jobs/cockroach-control-dubai-intro.webp' },
      signs: { brief: 'Cockroach droppings and an egg case behind a fridge or in a cabinet corner, real job photo', alt: 'German cockroach, droppings and egg cases in the floor corner behind a fridge', src: '/assets/img/jobs/cockroach-control-dubai-signs.webp' },
    },
    answer:
      'Most cockroach problems in Dubai apartments are German cockroaches living in the kitchen and bathroom, and they are treated with gel bait in cracks and hinges, not by spraying the room. One visit clears most homes, but heavy infestations need a second visit after 2–3 weeks to kill the young that hatch from eggs.',
    body: [
      'Dubai has two main cockroaches. The small, light-brown German cockroach breeds indoors: behind the fridge, inside cabinet hinges, under the sink and in the dishwasher motor. One female can produce several hundred young in her life, so a few sightings usually mean a colony. The large reddish American cockroach lives in drains, sewers, parking basements and garbage rooms, and comes up through floor drains, especially in summer.',
      'In towers, cockroaches travel between flats through shared risers, kitchen ducts and garbage chutes. That is why they come back after a DIY spray. The spray kills what it touches and drives the rest into the walls and next door. Gel bait works the other way round. Cockroaches eat it, go back to the colony and spread it, which reaches the ones you never see.',
    ],
    signs: [
      'Cockroaches seen during the day, a sign the hiding places are already full.',
      'Droppings like black pepper or coffee grounds in drawers, hinges and behind appliances.',
      'Brown egg cases (about 8 mm) behind the fridge, in cabinet corners or under the sink.',
      'A musty, oily smell in kitchen cupboards.',
      'Large cockroaches near floor drains or in the bathroom at night (American cockroaches from the drains).',
    ],
    steps: [
      { title: 'Find the species and the harbourage', text: 'German or American cockroach, and where they breed: kitchen hinges, appliance motors, drains or the AC closet.' },
      { title: 'Gel bait in cracks and hinges', text: 'Small dots of professional bait where cockroaches hide, so they carry it back to the colony.' },
      { title: 'Drains and entry points', text: 'Floor drains, sink traps and pipe gaps are treated so drain cockroaches cannot come back up.' },
      { title: 'Growth regulator for heavy cases', text: 'Stops young cockroaches from becoming breeding adults, which is what breaks the cycle.' },
      { title: 'Follow-up after 2–3 weeks', text: 'For heavy infestations we come back to treat the young that hatched from eggs the first treatment could not reach.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Gel bait sits inside cracks and hinges, out of reach of children and pets, so you can usually stay at home.',
      'Wipe kitchen surfaces before cooking if a spray was used. We tell you which areas.',
    ],
    prevention: [
      'Do not leave dishes, pet food or open rubbish overnight, because cockroaches need very little.',
      'Keep floor drains closed and pour water into unused drains every week.',
      'Seal gaps around kitchen pipes and the gap behind the kitchen sink cabinet.',
      'Check grocery boxes and delivery cartons, because German cockroaches often arrive in them.',
      'In towers, ask the building to treat garbage rooms and risers at the same time.',
    ],
    related: [
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Drain fly treatment', href: '/drain-fly-control-dubai' },
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
    ],
  },

  '/bed-bug-treatment-dubai': {
    priceKeys: ['bed-bug-apartment', 'bed-bug-villa'],
    name: 'Bed Bug Treatment',
    title: 'Bed Bug Treatment in Dubai',
    photos: {
      intro: { brief: 'Technician inspecting mattress seams with a torch in a Dubai bedroom', alt: 'Gloved hands lifting a sheet and checking the mattress seam for bed bugs with a torch', src: '/assets/img/jobs/bed-bug-treatment-dubai-intro.webp' },
      signs: { brief: 'Close-up of a mattress seam with dark bed bug spots, shed skins and a live bed bug', alt: 'Adult bed bug, eggs, shed skins and dark spots on a mattress seam', src: '/assets/img/jobs/bed-bug-treatment-dubai-signs.webp' },
    },
    answer:
      `Bed bug treatment in Dubai needs two visits, 10–14 days apart. The first kills the adults and young, and the second kills the ones that hatch from eggs, which no spray kills reliably. Prices start from about ${aed('bed-bug-apartment')} for a studio or 1-bedroom apartment.`,
    body: [
      'Bed bugs arrive in luggage, second-hand furniture and from neighbouring flats, not because a home is dirty. Dubai is a travel hub and many people move flats every year, so bed bugs are one of the two most common reasons people call pest control here. They hide in mattress seams, bed frames, headboards, sofa joints, skirting boards and behind wall sockets, and come out at night to feed.',
      'Eggs are glued into cracks and protected by a shell, so one treatment never finishes the job. Skipping the second visit is the main reason bed bugs "come back". Good preparation also matters. Bedding and clothes from the affected rooms must be washed hot and dried on high heat before the treatment.',
    ],
    signs: [
      'Itchy red bites, often in a line or group of three, on arms, neck and legs after sleeping.',
      'Small rusty or dark spots on sheets, mattress seams and the bed frame.',
      'Pale shed skins and tiny white eggs in mattress seams and furniture joints.',
      'Live bugs that are flat, brown and about the size of an apple seed.',
      'A sweet, musty smell in heavy infestations.',
    ],
    steps: [
      { title: 'Inspection of beds and furniture', text: 'Mattresses, frames, headboards, sofas, curtains and skirting boards, to find every hiding place.' },
      { title: 'Preparation list', text: 'We send you a checklist to hot wash and dry bedding and clothes, bag them and clear under beds.' },
      { title: 'First treatment', text: 'Targeted treatment of seams, joints, cracks and sockets, plus a residual product that keeps working.' },
      { title: 'Second treatment after 10–14 days', text: 'Kills the young that hatched from eggs before they can breed.' },
      { title: 'Advice for the next weeks', text: 'Mattress encasements, what to check, and how to avoid bringing them back after travel.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Stay out of treated rooms for about 4 hours and air them before sleeping there again.',
      'Mattresses are treated on seams and joints only, so you can sleep on them the same night once the room is aired.',
    ],
    prevention: [
      'After travel, unpack on a hard floor and wash clothes hot straight away. Keep suitcases off the bed.',
      'Check second-hand beds and sofas carefully before bringing them home.',
      'Use zipped mattress encasements after treatment.',
      'In apartments, tell the building management, as neighbouring flats may need inspection too.',
    ],
    related: [
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Disinfection services', href: '/disinfection-services-dubai' },
    ],
  },

  '/termite-control': {
    priceKeys: ['termite-inspection', 'termite-villa', 'termite-pre-construction'],
    name: 'Termite Control',
    title: 'Termite Control in Dubai',
    photos: {
      intro: { brief: 'Technician inspecting a wooden door frame or skirting in a Dubai villa with a moisture meter', alt: 'Gloved hands checking a termite-damaged villa door frame with a moisture meter and torch', src: '/assets/img/jobs/termite-control-intro.webp' },
      signs: { brief: 'Termite mud tubes on a villa wall or column, close-up', alt: 'Termite mud tubes running up a villa wall beside a wooden door frame', src: '/assets/img/jobs/termite-control-signs.webp' },
    },
    answer:
      'Termites in Dubai are mostly subterranean termites that come up from the soil and eat wooden door frames, skirting, kitchen cabinets and wardrobes from the inside. The first sign is usually mud tubes on walls or wood that sounds hollow. Treatment is a soil barrier or bait system around the villa, after an inspection to find where they enter.',
    body: [
      'Subterranean termites cause the most structural damage in Dubai villas and low-rise buildings. They live in the soil, need moisture and build mud tubes to travel into the house through expansion joints, cracks in the slab, pipe penetrations and gaps behind skirting. Gardens with irrigation next to the walls make this much easier. Because they eat wood from the inside, damage is often found late, when a door frame or cabinet gives way.',
      'Termite control is a separate approval from Dubai Municipality, and general pest control licences do not cover it. We hold the termite control approval and treat both existing homes and buildings under construction.',
    ],
    signs: [
      'Pencil-thin mud tubes on walls, columns or along skirting boards.',
      'Door frames, skirting or cabinets that sound hollow or crumble when pressed.',
      'Bubbling paint or small holes in wood with soil in them.',
      'Swarms of winged termites near lights, often after rain, and discarded wings on window sills.',
      'Doors and windows that suddenly stick.',
    ],
    steps: [
      { title: 'Inspection', text: 'We map mud tubes, damaged wood and moisture around the villa, inside and in the garden, and give you written findings.' },
      { title: 'Soil barrier', text: 'A termiticide barrier in the soil along foundations and entry points, so termites cannot reach the building.' },
      { title: 'Bait stations where needed', text: 'Stations around the villa that termites feed on and carry back, to eliminate the colony.' },
      { title: 'Treat damaged wood', text: 'Infested wood inside is treated, and badly damaged wood should be replaced by a carpenter.' },
      { title: 'Checks', text: 'Follow-up inspections to confirm activity has stopped, and an annual check for peace of mind.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Soil treatments go into the ground outside, away from where children play, and we mark treated areas.',
      'Bait stations are tamper-resistant and safe around pets.',
    ],
    prevention: [
      'Keep irrigation and planting at least 50 cm away from villa walls.',
      'Fix leaking AC drains and pipes, because termites need moisture.',
      'Do not store wood, cardboard or timber against walls or in the garden.',
      'For new villas and extensions, ask for pre-construction anti-termite treatment.',
    ],
    related: [
      { label: 'Pre-construction anti-termite treatment', href: '/pre-construction-termite-treatment-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/pre-construction-termite-treatment-dubai': {
    priceKeys: ['termite-pre-construction', 'termite-inspection'],
    name: 'Pre-Construction Anti-Termite',
    title: 'Pre-Construction Anti-Termite Treatment in Dubai',
    photos: {
      intro: { brief: 'Technician spraying termiticide into foundation trenches on a Dubai construction site, PPE visible', alt: 'Pre-construction anti-termite soil treatment on a Dubai site' },
      signs: { brief: 'Levelled soil and polythene ready for the ground slab, with the technician treating around pipe penetrations', alt: 'Soil treatment around pipe penetrations before the slab pour' },
    },
    answer:
      `Pre-construction anti-termite treatment is a chemical barrier applied to the soil before the foundation slab is poured, so subterranean termites cannot reach the building. In Dubai it is a standard part of building specifications for villas, extensions and buildings, and we issue a treatment certificate for the project file. Prices start from about ${aed('termite-pre-construction')} of footprint.`,
    body: [
      'Once the slab is poured, the soil under the building can no longer be treated evenly. Treating before construction is the cheapest and most complete protection a building gets, which is why consultants and developers in Dubai commonly specify it and ask contractors for proof.',
      'Termite control needs its own Dubai Municipality approval, separate from general pest control. We hold it, work to the contractor\'s pour schedule and coordinate with the site engineer for each stage.',
    ],
    signsTitle: 'When It Is Needed',
    signsEyebrow: 'New Builds',
    signs: [
      'New villas, townhouses and buildings before the foundation and ground slab.',
      'Villa extensions, new majlis, pool houses and annexes.',
      'Re-treatment of soil during major renovations where the slab is opened.',
      'When the consultant or developer specification asks for an anti-termite certificate.',
    ],
    steps: [
      { title: 'Site survey and quote', text: 'Footprint, foundation type and pour schedule, so treatment is timed with the contractor.' },
      { title: 'Foundation trenches and footings', text: 'Termiticide applied to the soil of trenches and around footings at the specified rate.' },
      { title: 'Under the slab', text: 'The levelled soil is treated just before the polythene and slab, including around pipe and cable entries.' },
      { title: 'Perimeter', text: 'The external perimeter is treated after backfilling to close the barrier.' },
      { title: 'Certificate', text: 'A treatment certificate with dates, areas and product details for the consultant and project file.' },
    ],
    safety: [
      'Products approved for termite control in the UAE, applied by trained technicians with the Dubai Municipality termite approval.',
      'Treated areas are marked and site workers are kept away during application.',
      'We follow the product label rates for soil type and depth.',
    ],
    prevention: [
      'Book us at least a few days before each pour so no stage is missed.',
      'Ask for treatment around every pipe and cable penetration, because these are common entry points.',
      'Keep timber offcuts and formwork away from the site soil.',
      'After handover, keep irrigation away from the walls and book an annual termite check.',
    ],
    related: [
      { label: 'Termite control (existing homes)', href: '/termite-control' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
    ],
  },

  '/rodent-control': {
    priceKeys: ['rodent'],
    name: 'Rat & Mouse Control',
    title: 'Rat and Mouse Control in Dubai',
    photos: {
      intro: { brief: 'Technician placing a locked bait station along a villa boundary wall or in a building car park', alt: 'Locked rodent bait stations along a villa boundary wall', src: '/assets/img/jobs/rodent-control-intro.webp' },
      signs: { brief: 'Rodent droppings and gnaw marks on cables or a food packet in a store room', alt: 'Rat droppings, a gnawed power cable and a chewed food packet on a store room shelf', src: '/assets/img/jobs/rodent-control-signs.webp' },
    },
    answer:
      'Rats and mice in Dubai are mostly roof rats, Norway (brown) rats and house mice. They come in from parking basements, garbage rooms, gardens and nearby construction, and live in false ceilings, kitchen cabinets and store rooms. Control is trapping and tamper-resistant bait stations plus sealing the gaps they use, with a follow-up visit to check activity has stopped.',
    body: [
      'A mouse needs a gap the size of a pen to get in, a young rat a gap the size of a thumb. In apartments they use gaps around AC and kitchen pipes, shafts and doors to service areas. In villas they come from the garden, drains and roof spaces. Construction nearby often pushes rats into homes as their burrows are disturbed.',
      'Rodents chew cables, contaminate food and carry disease, so they should be dealt with quickly. Inside homes we prefer traps to poison where possible, because a poisoned rat dying in a false ceiling causes a smell for weeks.',
    ],
    signs: [
      'Scratching or running sounds in the false ceiling at night.',
      'Droppings in cabinets, store rooms or along walls (rice-sized for mice, olive-stone-sized for rats).',
      'Chewed cables, food packets, plastic pipes or door edges.',
      'Greasy dark marks along walls and pipes where they run.',
      'Burrows in the garden or near the boundary wall.',
    ],
    steps: [
      { title: 'Inspection', text: 'We find the species, where they nest and every entry point, inside and outside.' },
      { title: 'Traps and bait stations', text: 'Traps inside the home, and tamper-resistant, locked bait stations outside and in service areas.' },
      { title: 'Seal entry points', text: 'Gaps around pipes, cables and doors closed with rodent-proof material (steel wool and sealant, mesh).' },
      { title: 'Follow-up visit', text: 'We check and clear traps, and confirm activity has stopped.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Bait stations are locked and fixed in place so children and pets cannot reach the bait.',
      'Droppings and nests are removed and the area disinfected.',
    ],
    prevention: [
      'Store food in closed containers and do not leave pet food out at night.',
      'Keep garbage room doors closed and bins lidded.',
      'Cut back plants touching the villa and keep the garden clear of rubble and wood piles.',
      'Fit covers on floor drains and mesh on vents.',
    ],
    related: [
      { label: 'Disinfection services', href: '/disinfection-services-dubai' },
      { label: 'Snake removal (snakes follow rodents)', href: '/snake-removal-dubai' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
    ],
  },

  '/pigeon-control-dubai': {
    priceKeys: ['pigeon', 'bird-net', 'bird-spikes'],
    name: 'Pigeon Control',
    title: 'Pigeon Control in Dubai',
    photos: {
      intro: { brief: 'Clean apartment tower balcony with a pigeon net fitted (after photo)', alt: 'Apartment tower balcony closed with a fine pigeon net, view of the neighbouring towers', src: '/assets/img/jobs/pigeon-control-dubai-intro.webp' },
      signs: { brief: 'Pigeon nest and droppings in the corner of an apartment balcony, on the ledge or behind a planter', alt: 'Pigeon, nest and droppings behind an outdoor AC unit on an apartment balcony', src: '/assets/img/jobs/pigeon-control-dubai-signs.webp' },
    },
    answer:
      'Pigeons in Dubai nest on balcony ledges and in corners, in window recesses, behind villa AC units and on solar panels. The lasting fix is to make the spot unusable: clean and disinfect the droppings, remove the nest, then fit netting, spikes or wire so they cannot land or nest there again. Feeding or scaring them does not work for long.',
    body: [
      'Pigeons return to the same spot every day and breed all year in Dubai\'s climate, so one pair on a balcony quickly becomes many. Their droppings are acidic, stain stone and metal, block AC drains and can carry fungi and bacteria that are harmful when the dried dust is breathed in.',
      'Bird control is a separate Dubai Municipality approval, and we hold it. Many towers have rules about the colour and type of balcony nets, so we use clear or black UV-stable nets and can check with your building management first.',
    ],
    signs: [
      'Droppings on the balcony floor, railings, ledges and window sills.',
      'Twigs and nests in balcony corners, planters or behind villa AC units.',
      'Cooing early in the morning and birds landing on the same ledge every day.',
      'AC condensate drain blocked by droppings and feathers.',
    ],
    steps: [
      { title: 'Survey', text: 'We find where they land, roost and nest and recommend the right method for each spot.' },
      { title: 'Clean and disinfect', text: 'Droppings and nests removed safely with protective equipment and the area disinfected.' },
      { title: 'Proofing', text: 'Netting for balconies and recesses, spikes or wire for ledges and railings, AC unit covers and solar panel mesh.' },
      { title: 'Check the result', text: 'We check after installation that birds can no longer land or nest in the protected spots.' },
    ],
    safety: [
      'Birds are kept out, not harmed, with no poison and no glue.',
      'Technicians wear masks and gloves when removing dried droppings.',
      'Nets and spikes are installed from inside the balcony or with proper access equipment for high floors.',
    ],
    prevention: [
      'Never feed pigeons from the balcony, or they will come back daily.',
      'Do not leave water or plant pots with standing water on the balcony.',
      'Clear nesting material early, because a pair that has nested will try again.',
      'Proof the whole balcony, not one ledge, because birds move to the next unprotected spot.',
    ],
    related: [
      { label: 'Bird netting', href: '/bird-netting-dubai' },
      { label: 'Bird control', href: '/bird-control-dubai' },
      { label: 'Solar panel bird proofing', href: '/solar-panel-bird-proofing-dubai' },
      { label: 'Mynah bird control', href: '/mynah-bird-control' },
    ],
  },

  '/bird-netting-dubai': {
    priceKeys: ['bird-net', 'bird-spikes', 'pigeon'],
    name: 'Bird Netting',
    title: 'Bird Netting and Balcony Pigeon Nets in Dubai',
    photos: {
      intro: { brief: 'Finished balcony pigeon net on a Dubai tower, photographed from inside so the view through the net is clear', alt: 'Installed balcony bird net in a Dubai apartment' },
      signs: { brief: 'Technician fixing the stainless steel cable frame and net clips on a balcony edge', alt: 'Technician installing bird netting on a balcony' },
    },
    answer:
      `A pigeon net closes a balcony, terrace or recess so birds cannot get in, without blocking the view or air. In Dubai we use UV-stabilised HDPE netting that lasts for years in the sun, with 50 mm mesh for pigeons and smaller mesh for sparrows. Prices start from about ${aed('bird-net')} installed, after a free measurement.`,
    body: [
      'Netting is the most complete bird control for balconies, because it removes the whole space instead of one ledge. It is fixed to a stainless steel cable frame along the balcony edges with anchors that do not damage the facade. Clear or black nets are almost invisible from a few metres away, which most buildings accept.',
      'Cheap nets go brittle and tear in one or two summers. UV-stabilised HDPE, stainless fixings and tensioned cables are what make a net last. We measure first, check any building rules, then quote per square foot.',
    ],
    signsTitle: 'Where Nets Work Best',
    signsEyebrow: 'Where It Works',
    signs: [
      'Apartment balconies where pigeons nest on ledges and in corners.',
      'Villa terraces, courtyards and roof areas.',
      'Window recesses, light wells and building shafts.',
      'Car parks, warehouses and loading bays (commercial netting).',
    ],
    steps: [
      { title: 'Free measurement', text: 'We measure the area, check access and any building rules on net colour and fixing.' },
      { title: 'Clean and disinfect', text: 'Droppings and nests removed before the net goes up, so nothing is trapped behind it.' },
      { title: 'Cable frame', text: 'Stainless steel cable tensioned around the opening with discreet anchors.' },
      { title: 'Net installation', text: 'UV-stable net clipped to the frame, tight and without gaps where birds could get in.' },
      { title: 'Access where you need it', text: 'Zip or clip openings for AC maintenance and window cleaning.' },
    ],
    safety: [
      'Birds are excluded, not harmed. We check no bird is trapped inside before closing the net.',
      'Work at height is done from inside the balcony or with proper access equipment.',
      'Nets do not block fire escape routes or AC airflow.',
    ],
    prevention: [
      'Close the whole opening, because even a small gap is enough for a pigeon.',
      'Have the net checked after storms or facade cleaning.',
      'Do not hang items on the net, because it loosens the tension.',
    ],
    related: [
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
      { label: 'Bird control', href: '/bird-control-dubai' },
    ],
  },

  '/commercial-pest-control-dubai': {
    priceKeys: ['commercial', 'annual-apartment'],
    name: 'Commercial Pest Control',
    title: 'Commercial Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician servicing a restaurant kitchen outside opening hours, with a service report on a tablet', alt: 'Gloved hands with a service checklist tablet and torch inspecting a hotel restaurant kitchen after closing', src: '/assets/img/jobs/commercial-pest-control-dubai-intro.webp' },
      signs: { brief: 'Bait station map or monitoring station in a food store room, with the service report', alt: 'Rodent bait station and insect monitor in a hotel kitchen dry store', src: '/assets/img/jobs/commercial-pest-control-dubai-signs.webp' },
    },
    answer:
      'Commercial pest control in Dubai is a scheduled programme, usually monthly for restaurants and food businesses and quarterly for offices and buildings, with service reports you can show to inspectors and clients. We survey the site first and quote a fixed contract.',
    body: [
      'Food businesses are inspected by Dubai Municipality food safety officers, and pest activity or missing pest control records count against the inspection result. A good programme gives you regular visits, bait station maps, service reports and fast call-outs, so you are ready for an inspection on any day.',
      'We work in restaurants, cafes, cloud kitchens, supermarkets, hotels, offices, residential buildings, schools, warehouses and labour accommodation, and we schedule visits outside opening hours.',
    ],
    signsTitle: 'Who We Work With',
    signsEyebrow: 'Industries',
    signs: [
      'Restaurants, cafes, cloud kitchens and catering.',
      'Supermarkets, groceries and food stores.',
      'Residential buildings, including common areas, garbage rooms, risers and car parks.',
      'Offices, clinics, schools and gyms.',
      'Warehouses, logistics and labour accommodation.',
    ],
    steps: [
      { title: 'Site survey', text: 'Risk areas, pests present, entry points and what your inspector or client expects.' },
      { title: 'Programme and contract', text: 'Visit frequency, bait station map, products and response times, at a fixed price.' },
      { title: 'Scheduled visits', text: 'Treatment and monitoring outside opening hours, with a service report after every visit.' },
      { title: 'Call-outs', text: 'Fast response between visits if staff see pests.' },
      { title: 'Reviews', text: 'Trend reports and advice on proofing, cleaning and storage that stop pests coming back.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Food-area treatments use products and methods suitable for food premises, applied with food covered or removed.',
      'Material safety data sheets and service reports available for your records.',
    ],
    prevention: [
      'Close gaps under doors and around pipes in kitchens and stores.',
      'Keep waste in lidded bins and clean the garbage area daily.',
      'Store food off the floor and away from walls so you can inspect behind it.',
      'Check incoming deliveries and cartons for cockroaches.',
    ],
    related: [
      { label: 'Restaurant pest control', href: '/restaurant-pest-control-dubai' },
      { label: 'Office pest control', href: '/office-pest-control-dubai' },
      { label: 'Fumigation services', href: '/fumigation-services-dubai' },
      { label: 'Fly control', href: '/fly-control-dubai' },
      { label: 'Rat & mouse control', href: '/rodent-control' },
      { label: 'Disinfection services', href: '/disinfection-services-dubai' },
      { label: 'Bird netting', href: '/bird-netting-dubai' },
    ],
  },

  '/tick-control-dubai': {
    priceKeys: ['tick', 'flea'],
    name: 'Tick Control',
    title: 'Tick Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating garden borders and patio cracks of a ground-floor flat or villa with a dog kennel', alt: 'Technician treating a garden for ticks in Dubai' },
      signs: { brief: 'Brown dog ticks in a wall crack or on a door frame, close-up', alt: 'Brown dog ticks in a wall crack' },
    },
    answer:
      'Ticks in Dubai homes are almost always brown dog ticks. They come in on dogs, then hide in cracks, skirting boards, door frames and garden walls, and can climb up walls in large numbers. Treatment is two visits about two weeks apart, timed with a vet tick treatment for the dog, otherwise they come straight back.',
    body: [
      'Brown dog ticks can complete their whole life cycle indoors, which is why they are found in apartments, not only in villas. Ground-floor flats with gardens, villas with kennels and homes with dogs that use shared parks are the most common cases. Outdoors they are most active in spring and autumn, and indoors all year.',
      'Ticks can carry diseases that affect dogs and, rarely, people, so a tick problem should be treated promptly. Spraying once is not enough, because eggs and hidden ticks survive. The second visit and the vet treatment of the pet are what stop it.',
    ],
    signs: [
      'Small brown ticks on the dog, especially ears, neck and between the toes.',
      'Ticks climbing walls, curtains or door frames, often near where the dog sleeps.',
      'Ticks in cracks of the patio, garden wall or kennel.',
      'Clusters of tiny larvae near skirting boards after a few weeks.',
    ],
    steps: [
      { title: 'Inspection', text: 'Where the dog sleeps, rests and walks, including cracks, skirting, kennels, garden borders and walls.' },
      { title: 'Vet treatment for the pet', text: 'We ask you to treat the dog with a vet tick product the same week. This is essential.' },
      { title: 'First treatment', text: 'Cracks, skirting, door frames, furniture bases, patio and garden borders.' },
      { title: 'Second treatment after about 2 weeks', text: 'Kills ticks that hatched or came out of hiding after the first visit.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Pets stay out of treated areas until surfaces are dry, usually 2–4 hours, with fish tanks covered and pumps off.',
      'We use products suitable for homes with pets and tell you exactly when they can go back.',
    ],
    prevention: [
      'Keep the dog on a year-round vet tick preventative.',
      'Check the dog after walks in shared parks and grass.',
      'Wash pet bedding hot every week.',
      'Keep grass short and garden borders clear, and seal cracks in patio and walls.',
    ],
    related: [
      { label: 'Flea control', href: '/pest-control-for-fleas' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
    ],
  },

  '/villa-pest-control-dubai': {
    priceKeys: ['general-villa', 'cockroach-villa', 'termite-inspection', 'annual-villa'],
    name: 'Villa Pest Control',
    title: 'Villa Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating the garden perimeter of a Dubai villa, villa facade and planting visible', alt: 'Gloved hands spraying a perimeter band along a modern villa wall by the garden and pool', src: '/assets/img/jobs/villa-pest-control-dubai-intro.webp' },
      signs: { brief: 'Walk-round of a villa: technician checking a door frame, garden irrigation line and boundary wall', alt: 'Drip irrigation against a villa wall with a damp patch and an open pipe gap', src: '/assets/img/jobs/villa-pest-control-dubai-signs.webp' },
    },
    answer:
      'A villa in Dubai needs more than an indoor spray: the garden, irrigation, drains, roof and boundary walls are where most pests start. A full villa treatment covers inside, the perimeter and the garden, and many owners choose an annual contract with quarterly visits.',
    body: [
      'Gardens and irrigation bring ants, mosquitoes, termites and rodents close to the walls. Villas near the desert edge, such as in Dubailand, Arabian Ranches and Al Barari, also see scorpions, camel spiders and occasionally snakes, which follow the rodents and water. Pigeons nest on roofs, AC units and solar panels.',
      'Older villas have more gaps around doors, pipes and expansion joints, and wooden door frames and cabinets at risk from termites. That is why we start every villa job with a walk-round of the whole plot, not only the rooms you see pests in.',
    ],
    signsTitle: 'What We Check in a Villa',
    signsEyebrow: 'Villa Inspection',
    signs: [
      'Kitchen, bathrooms, store rooms and maid\'s room for cockroaches and ants.',
      'Door frames, skirting and cabinets for termite damage.',
      'Garden, irrigation lines and planters for ants, mosquitoes and termite mud tubes.',
      'Boundary walls, garage and gaps under doors for scorpions and rodents.',
      'Roof, AC units and solar panels for pigeons.',
    ],
    steps: [
      { title: 'Full walk-round', text: 'Inside, roof, garden and boundary, with a short report of what we found.' },
      { title: 'Indoor treatment', text: 'Gel baits and crack-and-crevice treatment in kitchens, bathrooms and store rooms.' },
      { title: 'Perimeter barrier', text: 'Treatment along walls, doors and the garden edge to stop crawling pests getting in.' },
      { title: 'Garden and drains', text: 'Ant nests, mosquito breeding spots and drains treated, with bait stations for rodents where needed.' },
      { title: 'Annual plan if you want it', text: 'Scheduled visits through the year and call-outs between them.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Garden treatments avoid flowering plants where bees feed and keep away from pools and fish ponds.',
      'Pets and children stay out of treated areas until dry, and we tell you how long.',
    ],
    prevention: [
      'Keep irrigation and planting away from villa walls.',
      'Fit door sweeps and seal gaps around pipes and AC lines.',
      'Empty standing water in plant saucers, buckets and covers every week.',
      'Clear rubble, wood and junk from the garden and the side passages.',
    ],
    related: [
      { label: 'Termite control', href: '/termite-control' },
      { label: 'Scorpion control', href: '/scorpion-control-dubai' },
      { label: 'Snake removal', href: '/snake-removal-dubai' },
      { label: 'Mosquito control', href: '/mosquito-control-dubai' },
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
    ],
  },

  '/apartment-pest-control-dubai': {
    priceKeys: ['general-apartment', 'cockroach-apartment', 'bed-bug-apartment', 'annual-apartment'],
    name: 'Apartment Pest Control',
    title: 'Apartment Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating under the kitchen sink of a Dubai apartment, tower view through the window', alt: 'Gloved hands with a torch and gel applicator under the sink of a modern apartment kitchen with a tower view', src: '/assets/img/jobs/apartment-pest-control-dubai-intro.webp' },
      signs: { brief: 'Small German cockroaches in a kitchen drawer or around a floor drain in an apartment', alt: 'German cockroaches around a floor drain in a modern apartment bathroom', src: '/assets/img/jobs/apartment-pest-control-dubai-signs.webp' },
    },
    answer:
      `In Dubai apartments the usual problems are cockroaches, bed bugs and ants, and they often come from shared drains, risers and neighbouring flats. Treatment for a studio or 1-bedroom starts from about ${aed('general-apartment')} and is done in one visit with gel baits and targeted treatment. You do not need to leave the flat for the day.`,
    body: [
      'Apartment towers share plumbing, kitchen ducts, garbage chutes and electrical risers. Cockroaches and ants use them to move between flats, and bed bugs can travel along walls and through sockets. That is why a flat can be spotless and still have pests, and why the most lasting results come when the building treats common areas at the same time.',
      'Smoke bombs and thermal fogging inside flats are banned in Dubai for safety, so professional apartment treatment is targeted: gel baits, crack-and-crevice treatment, drains and entry points, done in an hour or two.',
    ],
    signsTitle: 'Common Apartment Problems',
    signsEyebrow: 'Common Problems',
    signs: [
      'Small cockroaches in the kitchen and bathroom (German cockroaches).',
      'Bites after sleeping and spots on the mattress (bed bugs).',
      'Trails of tiny ants along the kitchen counter or bathroom.',
      'Drain flies over sinks and floor drains.',
      'Pigeons nesting on balcony ledges, planters and corners.',
    ],
    steps: [
      { title: 'Quick inspection', text: 'Kitchen, bathrooms, bedrooms, AC closet and balcony, to find what and where.' },
      { title: 'Targeted treatment', text: 'Gel bait in hinges and cracks, treatment of drains, pipe gaps and skirting.' },
      { title: 'Entry points', text: 'Gaps around pipes and under the kitchen sink sealed or treated.' },
      { title: 'Follow-up if needed', text: 'Second visit for bed bugs and heavy cockroach problems.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Most apartment treatments need you out of the treated rooms for 1–2 hours only.',
      'Safe for neighbours, with no fogging or fumigation that can travel through shared ducts.',
    ],
    prevention: [
      'Keep floor drains covered and run water in unused bathrooms weekly.',
      'Do not leave rubbish by the door or dishes overnight.',
      'Seal the gap where pipes enter under the kitchen sink.',
      'Report pests to building management so risers and garbage rooms are treated too.',
    ],
    related: [
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
      { label: 'Bed bug treatment', href: '/bed-bug-treatment-dubai' },
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
      { label: 'Bird netting for balconies', href: '/bird-netting-dubai' },
    ],
  },

  '/move-in-pest-control-dubai': {
    priceKeys: ['move-in-apartment', 'move-in-villa', 'disinfection-apartment'],
    name: 'Move-In Pest Control',
    title: 'Move-In and Move-Out Pest Control in Dubai',
    photos: {
      intro: { brief: 'Empty Dubai apartment with open kitchen cabinets and a technician treating before the move', alt: 'Move-in pest control in an empty Dubai apartment' },
      signs: { brief: 'Technician handing a service report to a tenant at the door of an empty flat, moving boxes visible', alt: 'Service report handed over after move-in treatment' },
    },
    answer:
      `The best time to treat a home in Dubai is when it is empty, before you move in. Every cabinet, wardrobe and drain can be reached and you do not need to protect furniture or food. A move-in treatment for an empty studio or 1-bedroom starts from about ${aed('move-in-apartment')} and takes one visit.`,
    body: [
      'Flats that have been empty often have dry drain traps that let cockroaches and drain flies come up, and the previous tenant may have left a problem behind. Treating before your furniture arrives means pests are dealt with before they can get into your boxes, mattress and kitchen.',
      'Under Dubai tenancy rules, maintenance and pest control usually sit with the landlord unless your contract says otherwise, so check your tenancy contract and ask your landlord or agent. Many landlords and tenancy contracts also ask for pest control when you move out, and we provide a service report for your handover.',
    ],
    signsTitle: 'What a Move-In Treatment Covers',
    signsEyebrow: 'What\'s Included',
    signs: [
      'All kitchen cabinets, drawers, appliance spaces and under the sink.',
      'Bathrooms, floor drains and sink traps.',
      'Wardrobes, bedrooms and skirting boards, with a check for bed bugs.',
      'AC closet, store room, balcony and maid\'s room.',
      'In villas, the garden perimeter, garage and drains as well.',
    ],
    steps: [
      { title: 'Book before your move date', text: 'Ideally 1–3 days before your furniture arrives, after any deep cleaning.' },
      { title: 'Inspection of the empty unit', text: 'We look for signs of cockroaches, bed bugs, ants and rodents left behind.' },
      { title: 'Full treatment', text: 'Gel baits and crack-and-crevice treatment in every room, drains treated, entry points checked.' },
      { title: 'Service report', text: 'What we found and treated, for your records, landlord or move-out handover.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'The unit can be aired and used again the same day. We tell you when it is safe to unpack food items.',
    ],
    prevention: [
      'Deep clean before the treatment, not after, so baits are not washed away.',
      'Check second-hand furniture and mattresses before they come in.',
      'Pour water into every drain once a week if rooms are unused.',
      'Keep your service report, as it helps if there is a dispute about pests at move-out.',
    ],
    related: [
      { label: 'Disinfection services', href: '/disinfection-services-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Bed bug treatment', href: '/bed-bug-treatment-dubai' },
    ],
  },

  '/lizard-control-dubai': {
    priceKeys: ['lizard'],
    name: 'Lizard Control',
    title: 'Lizard and Gecko Control in Dubai',
    photos: {
      intro: { brief: 'House gecko on a wall next to an outdoor light on a Dubai balcony at dusk', alt: 'House gecko near a balcony light in Dubai' },
      signs: { brief: 'Technician sealing the gap around an AC pipe where it enters the wall', alt: 'Sealing gaps around AC pipes to keep lizards out' },
    },
    answer:
      'The small lizards in Dubai homes are house geckos. They are harmless to people, but they come indoors to hunt insects near lights and leave droppings on walls and curtains. To get rid of them for good you remove what attracts them, the insects, and close the gaps they use. Killing geckos alone does not stop new ones coming in.',
    body: [
      'Geckos follow food. Lights on balconies and windows attract moths, flies and mosquitoes, and geckos come to eat them. Inside, cockroaches and spiders keep them fed. They get in through gaps under doors, around AC pipes, window frames and balcony doors left open in the evening.',
      'We treat the insects that feed them, seal the entry gaps and move geckos out where we find them. We do not use glue traps, because they are cruel and catch other animals.',
    ],
    signs: [
      'Small black and white droppings on walls, window sills and behind curtains.',
      'Geckos near ceiling corners, behind frames and around outdoor lights.',
      'Chirping sounds at night.',
      'Many insects near lights, which is what brings geckos in.',
    ],
    steps: [
      { title: 'Inspection', text: 'Where geckos are seen, where they get in, and which insects attract them.' },
      { title: 'Insect treatment', text: 'Cockroaches, spiders and flying insects around the home treated, so the food source goes.' },
      { title: 'Exclusion', text: 'Gaps under doors, around AC pipes and window frames sealed, with mesh where needed.' },
      { title: 'Removal', text: 'Geckos found indoors are caught and released outside.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'No glue traps and no poison for lizards.',
    ],
    prevention: [
      'Switch off balcony and outdoor lights when not needed, or use warm yellow bulbs that attract fewer insects.',
      'Keep balcony doors and windows closed in the evening or fit insect screens.',
      'Fix door sweeps and seal gaps around AC pipes.',
      'Keep the home clear of cockroaches and spiders.',
    ],
    related: [
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
      { label: 'Spider control', href: '/spider-control-dubai' },
      { label: 'Snake removal', href: '/snake-removal-dubai' },
    ],
  },

  '/snake-removal-dubai': {
    priceKeys: ['snake', 'rodent'],
    name: 'Snake Removal',
    title: 'Snake Removal in Dubai',
    photos: {
      intro: { brief: 'Technician with snake tongs and a secure container in a villa garden (no close-up of a snake needed)', alt: 'Technician with snake removal equipment in a Dubai garden' },
      signs: { brief: 'Gap under a villa garden gate or a hole in a boundary wall being checked', alt: 'Checking garden gaps where snakes get in' },
    },
    answer:
      'If you see a snake in a Dubai home or garden, keep everyone and pets away, do not try to catch or kill it, keep an eye on where it goes and call us. Most snakes in gardens are harmless, but saw-scaled vipers, which are venomous, have been reported in communities such as Dubailand, Jumeirah Park, Jumeirah Islands and The Lakes. If someone is bitten, call 998 for an ambulance.',
    body: [
      'Snakes come into villas and gardens for water, shade and food. Irrigation, ponds and dense planting keep gardens cool, and rodents and lizards attract snakes that feed on them. Communities next to open desert or construction sites see more sightings, especially in the warmer months and after rain.',
      'We remove the snake safely and then check the property for what brought it in: rodent activity, gaps under gates and doors, holes in boundary walls and drains, so it is less likely to happen again.',
    ],
    signsTitle: 'What to Do if You See a Snake',
    signsEyebrow: 'Safety First',
    signs: [
      'Keep children and pets indoors and stay at least a few metres away.',
      'Do not try to catch, kill or corner it, because most bites happen when people try.',
      'Watch where it goes from a safe distance, or take a photo for us to identify.',
      'Close internal doors to keep it in one room if it is inside.',
      'If anyone is bitten, call 998, keep them still and calm, and do not cut or suck the wound.',
    ],
    steps: [
      { title: 'Identify', text: 'A photo on WhatsApp helps us tell you quickly if the snake is venomous.' },
      { title: 'Safe removal', text: 'The snake is caught with proper tools and released away from homes where appropriate.' },
      { title: 'Property check', text: 'Rodent activity, gaps under gates and doors, wall holes, drains and dense planting.' },
      { title: 'Prevention', text: 'Rodent control and sealing advice so snakes have less reason to come back.' },
    ],
    safety: [
      'Removal is done by trained technicians with tongs and protective equipment, never by hand.',
      'We do not use chemical "snake repellents" that do not work and can harm pets.',
    ],
    prevention: [
      'Control rodents, because they are the main reason snakes come into gardens.',
      'Fit sweeps under gates and doors and close holes in boundary walls.',
      'Keep grass short and clear rubble, wood and stored items from the garden edges.',
      'Fix leaking irrigation and avoid standing water.',
    ],
    related: [
      { label: 'Rat & mouse control', href: '/rodent-control' },
      { label: 'Scorpion control', href: '/scorpion-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/disinfection-services-dubai': {
    priceKeys: ['disinfection-apartment', 'disinfection-villa', 'commercial'],
    name: 'Disinfection',
    title: 'Disinfection and Sanitisation Services in Dubai',
    photos: {
      intro: { brief: 'Technician in PPE disinfecting high-touch surfaces in an office or apartment kitchen', alt: 'Technician disinfecting surfaces in Dubai' },
      signs: { brief: 'Technician cleaning and disinfecting pigeon droppings on a balcony', alt: 'Disinfecting pigeon droppings on a balcony' },
    },
    answer:
      'Disinfection kills germs on surfaces. It is different from pest control, which deals with insects and rodents. We disinfect homes after illness, before moving in, after pest or bird droppings, and offices and businesses on a schedule, using disinfectants approved for use in Dubai.',
    body: [
      'Most homes need disinfection at specific moments: after someone in the family has been ill, before a new baby comes home, when moving into a flat, or after rodents or pigeons have left droppings. Businesses such as clinics, gyms, nurseries, offices and kitchens often schedule it regularly.',
      'We focus on high-touch surfaces and risk areas: door handles, switches, kitchen and bathroom surfaces, AC grilles, and areas contaminated by droppings, applied with sprayers that cover surfaces evenly without soaking furniture.',
    ],
    signsTitle: 'When to Book Disinfection',
    signsEyebrow: 'When It Helps',
    signs: [
      'After illness in the home, or before an elderly relative or new baby arrives.',
      'Before moving into a flat or villa.',
      'After rodent, cockroach or pigeon problems, where droppings were left behind.',
      'For offices, clinics, gyms, nurseries and food businesses, on a schedule.',
    ],
    steps: [
      { title: 'Plan', text: 'Rooms, surfaces and any sensitive areas (electronics, food, fabrics) agreed in advance.' },
      { title: 'Clean contaminated areas', text: 'Droppings and nesting material removed first, because disinfectant does not work through dirt.' },
      { title: 'Disinfect', text: 'Approved disinfectant applied to high-touch and risk surfaces, with the right contact time.' },
      { title: 'Ventilate and hand back', text: 'Rooms aired and ready to use, and we tell you when.' },
    ],
    safety: [
      'Disinfectants approved for use in Dubai, used at label strength by trained technicians.',
      'Food, toys and pet items removed or covered, and rooms aired before use.',
    ],
    prevention: [
      'Clean high-touch surfaces regularly, because disinfection works best on clean surfaces.',
      'Deal with the pests first, or the droppings come back.',
      'Keep AC filters clean.',
    ],
    related: [
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
      { label: 'Rat & mouse control', href: '/rodent-control' },
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
    ],
  },
};

export function getServiceGuide(pathname: string): ServiceGuide | null {
  const normalized = pathname.replace(/\/$/, '') || '/';
  return SERVICE_GUIDES[normalized] ?? MORE_GUIDES[normalized] ?? null;
}
