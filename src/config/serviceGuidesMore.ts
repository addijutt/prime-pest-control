import type { ServiceGuide } from './guideTypes';

// Guides for the remaining service pages (21 Nov 2026). Same rules as serviceGuides.ts:
// headings in Title Case without colons, no em dashes, prices only via priceKeys (prices.ts).

const SAFETY_COMMON = [
  'Only products approved for use in Dubai, applied by trained technicians from a Dubai Municipality licensed company.',
  'No smoke "bombs", no thermal fogging inside flats and never aluminium phosphide. These are banned for homes in the UAE after deaths through shared AC ducts.',
];

const BIRD_SAFETY = [
  'Birds are kept out, not harmed. No poison and no glue.',
  'Droppings and nests are removed with masks and gloves, then the area is disinfected.',
  'Work at height is done from inside the balcony or with proper access equipment.',
  'Bird control is a separate Dubai Municipality approval, and we hold it.',
];

export const MORE_GUIDES: Record<string, ServiceGuide> = {
  '/bird-control-dubai': {
    name: 'Bird Control',
    title: 'Bird Control and Bird Proofing in Dubai',
    photos: {
      intro: { brief: 'Technician installing stainless steel bird spikes on a villa parapet, with netting visible on a balcony behind', alt: 'Stainless steel bird spikes along a villa parapet wall and a netted balcony behind', src: '/assets/img/jobs/bird-control-dubai-intro.webp' },
      signs: { brief: 'Collage or one shot of the methods: balcony net, ledge spikes, railing wire and a solar panel mesh skirt', alt: 'Stainless steel bird spikes on a window ledge and bird wire along a balcony railing', src: '/assets/img/jobs/bird-control-dubai-signs.webp' },
    },
    priceKeys: ['pigeon', 'bird-net', 'bird-spikes', 'bird-other'],
    answer:
      'Bird control in Dubai means making the places birds land, roost and nest unusable. Netting closes balconies and terraces, spikes and wire stop birds landing on ledges, parapets and railings, gel works where spikes cannot be fixed, and mesh seals the gap under solar panels. We choose the method for each spot, often a mix of two or three.',
    body: [
      'Pigeons are the main problem, followed by mynahs, house crows and sparrows. They nest behind split AC units, on window recesses, under solar panels and in roof gaps, and they return to the same spot every day. Their droppings stain stone, corrode metal, block AC drains and carry fungi and bacteria that are harmful when the dried dust is breathed in.',
      'Scaring devices, reflective tape and plastic owls stop working within days because birds get used to them. Physical proofing is what lasts. We survey every spot first, clean and disinfect, then fit the right proofing so the birds move on for good.',
    ],
    signsTitle: 'Bird Proofing Methods We Use',
    signsEyebrow: 'Our Methods',
    signs: [
      'Bird netting for balconies, terraces, courtyards, light wells and car parks.',
      'Stainless steel bird spikes for ledges, parapets, signs, beams and AC unit tops.',
      'Tensioned bird wire for railings and long ledges where spikes would look too heavy.',
      'Bird gel for ledges and edges where spikes cannot be fixed.',
      'Solar panel mesh that closes the gap under rooftop panels without drilling.',
      'AC unit covers and guards so birds cannot nest behind outdoor units.',
    ],
    steps: [
      { title: 'Survey', text: 'We find where birds land, roost and nest, and which species, then recommend a method for each spot.' },
      { title: 'Clean and disinfect', text: 'Droppings and nests removed safely and the area disinfected before anything is fitted.' },
      { title: 'Proofing', text: 'Netting, spikes, wire, gel or mesh installed, matched to the building and its rules.' },
      { title: 'Check', text: 'We check every spot is closed and birds can no longer land or nest there.' },
    ],
    safety: BIRD_SAFETY,
    prevention: [
      'Never feed birds from balconies or terraces.',
      'Clear nesting material early, before eggs are laid.',
      'Proof every ledge on the same side of the building, or birds move to the next one.',
      'Keep bins closed and do not leave pet food outside, which draws crows and mynahs.',
    ],
    related: [
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
      { label: 'Bird netting', href: '/bird-netting-dubai' },
      { label: 'Solar panel bird proofing', href: '/solar-panel-bird-proofing-dubai' },
      { label: 'Mynah control', href: '/mynah-bird-control' },
    ],
  },

  '/mynah-bird-control': {
    name: 'Mynah Control',
    title: 'Mynah Bird Control in Dubai',
    photos: {
      intro: { brief: 'Common mynahs on a villa roof edge or AC unit in Dubai', alt: 'Mynah birds on a Dubai villa' },
      signs: { brief: 'Mynah nest material pushed into a roof gap, light fitting or AC pipe hole', alt: 'Mynah nest in a roof gap' },
    },
    priceKeys: ['bird-other', 'bird-spikes', 'bird-net'],
    answer:
      'The common mynah is an invasive bird in the UAE. It nests in roof gaps, light fittings, AC pipe holes and signage, is loud from early morning, and chases away native birds. Lasting control is closing the gaps it nests in and fitting spikes or netting where it roosts.',
    body: [
      'Mynahs are brown birds with a yellow beak and yellow skin around the eye. They live in pairs and groups, feed on scraps around villas, cafes and outdoor dining areas, and use the same nest holes year after year. Once a pair nests in a roof or wall gap, the noise and mess continue until the gap is closed.',
      'Because they nest in holes rather than on ledges, mynah control is mostly about blocking openings after the nest is removed, plus spikes or wire where they perch and netting for courtyards and terraces.',
    ],
    signsTitle: 'Signs of Mynahs Nesting',
    signs: [
      'Loud calls at dawn from the same roof corner or wall.',
      'Grass, plastic and twigs sticking out of a roof gap, light fitting or AC pipe hole.',
      'Birds going in and out of the same hole.',
      'Droppings on walls under the nest and scraps scattered near bins.',
    ],
    steps: [
      { title: 'Survey', text: 'Nest holes, perches and feeding spots around the villa or building.' },
      { title: 'Remove nests', text: 'Nest material removed and the area cleaned and disinfected.' },
      { title: 'Close the openings', text: 'Roof gaps, pipe holes and fittings sealed or meshed so they cannot nest again.' },
      { title: 'Perch proofing', text: 'Spikes or wire on ledges and beams, netting for courtyards and terraces.' },
    ],
    safety: BIRD_SAFETY,
    prevention: [
      'Keep bins closed and do not leave food on terraces.',
      'Seal small roof and wall gaps before nesting season in spring.',
      'Do not feed birds in the garden.',
    ],
    related: [
      { label: 'Bird control', href: '/bird-control-dubai' },
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
    ],
  },



  '/solar-panel-bird-proofing-dubai': {
    name: 'Solar Panel Bird Proofing',
    title: 'Solar Panel Bird Proofing in Dubai',
    photos: {
      intro: { brief: 'Rooftop solar panels on a Dubai villa with a mesh skirt fitted around the edges', alt: 'Solar panel bird proofing mesh on a Dubai villa' },
      signs: { brief: 'Pigeon nest and droppings under solar panels before proofing', alt: 'Pigeon nest under solar panels' },
    },
    priceKeys: ['solar-bird', 'pigeon'],
    answer:
      'Pigeons and sparrows nest in the shaded gap under rooftop solar panels. Solar panel bird proofing clears the nests and droppings, then fits a mesh skirt around the edge of the panel array with clips, so birds cannot get underneath. It does not need drilling into the panels.',
    body: [
      'More Dubai villas now have solar panels, and the gap underneath is a perfect nesting spot: shaded, hidden and close to food. Nests and droppings build up fast, block drainage, attract mites and can damage cabling. Droppings on the panel surface also reduce how much electricity it makes.',
      'The fix is to close the gap. A UV-resistant mesh is clipped around the panel edges, leaving airflow for cooling. We clean out nests and droppings first, so nothing is sealed in.',
    ],
    signsTitle: 'Signs Birds Are Under Your Panels',
    signs: [
      'Pigeons landing on the roof and disappearing under the panels.',
      'Twigs, feathers and droppings around the panel edges.',
      'Cooing from the roof early in the morning.',
      'Droppings running off the roof onto walls or windows.',
    ],
    steps: [
      { title: 'Roof survey', text: 'Panel layout, gaps, nests and access, with a quote.' },
      { title: 'Clean out', text: 'Nests, droppings and debris removed from under the panels and the roof disinfected.' },
      { title: 'Mesh skirt', text: 'UV-resistant mesh clipped around the array edges, no drilling into the panels.' },
      { title: 'Check', text: 'Every edge checked so no bird can get under.' },
    ],
    safety: BIRD_SAFETY,
    prevention: [
      'Proof new panels as soon as they are installed, before birds find them.',
      'Check the mesh after strong winds.',
      'Fit spikes on nearby parapets so pigeons do not roost next to the panels.',
    ],
    related: [
      { label: 'Pigeon control', href: '/pigeon-control-dubai' },
      { label: 'Bird control', href: '/bird-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/ant-control-dubai': {
    name: 'Ant Control',
    title: 'Ant Control in Dubai',
    photos: {
      intro: { brief: 'Technician placing ant bait gel along a kitchen counter edge or skirting in a Dubai home', alt: 'Gloved hand placing drops of ant gel bait along the skirting of a villa living room', src: '/assets/img/jobs/ant-control-dubai-intro.webp' },
      signs: { brief: 'Trail of small ants along a kitchen counter towards a sugar spill', alt: 'Trail of small ants from a gap at the wall tiles to spilled sugar on a white kitchen countertop', src: '/assets/img/jobs/ant-control-dubai-signs.webp' },
    },
    priceKeys: ['ant'],
    answer:
      'Most ant problems in Dubai homes are small indoor ants such as pharaoh ants and ghost ants, and garden ants coming in from villas and parks. Spraying the trail makes it worse, because the colony splits and you get more nests. The fix is slow-acting bait that workers carry back to the nest, plus a perimeter treatment in villas.',
    body: [
      'Ants follow food and water, and in Dubai they are active all year, with complaints rising in the heat and after rain. In apartments they come through wall cavities, pipe gaps and electrical boxes. In villas they nest in irrigated gardens, planters and under paving, then trail into kitchens and bathrooms. Communities with large green areas such as Dubai Hills, JLT and JVC see the most ant call-outs.',
      'Pharaoh ants react to sprays by budding into several new colonies, which is why shop-bought sprays often spread the problem. Baits work with the colony instead of against it.',
    ],
    signs: [
      'Trails of small ants along counters, skirting or bathroom tiles.',
      'Ants in sugar, pet food or the bin.',
      'Ants coming out of sockets, pipe gaps or cracks.',
      'Small soil mounds between garden paving or along villa walls.',
    ],
    steps: [
      { title: 'Identify the ant', text: 'Indoor nesting ant or garden ant, and where the trails lead.' },
      { title: 'Baits on the trails', text: 'Slow-acting gel or granular bait that workers carry back to the colony.' },
      { title: 'Perimeter treatment for villas', text: 'Garden nests and the villa edge treated so new ants cannot get in.' },
      { title: 'Follow-up if needed', text: 'Large or several colonies may need a second visit after 2 weeks.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Baits are placed in cracks and corners, out of reach of children and pets.',
    ],
    prevention: [
      'Do not spray ant trails yourself, because it splits the colony.',
      'Wipe sugary spills and keep food in sealed containers.',
      'Keep pet bowls clean and do not leave pet food out.',
      'Keep irrigation and planters away from villa walls and seal expansion joints.',
    ],
    related: [
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
    ],
  },

  '/mosquito-control-dubai': {
    name: 'Mosquito Control',
    title: 'Mosquito Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating a villa garden water feature or planter for mosquito larvae', alt: 'Gloved hands adding larvicide granules to a villa garden water feature', src: '/assets/img/jobs/mosquito-control-dubai-intro.webp' },
      signs: { brief: 'Standing water in a plant saucer, bucket or pool cover with mosquito larvae', alt: 'Mosquito larvae and pupae in standing water in a plant saucer', src: '/assets/img/jobs/mosquito-control-dubai-signs.webp' },
    },
    priceKeys: ['mosquito'],
    answer:
      'Mosquitoes in Dubai breed in standing water in villa gardens and homes: plant saucers, buckets, pool covers, water features, AC drip trays and blocked drains. They can go from egg to biting adult in about a week in the heat. Control works by removing and treating breeding water first, then treating the shaded spots where adults rest.',
    body: [
      'There are two main types in Dubai homes. Aedes mosquitoes, including the yellow fever mosquito, bite during the day, breed in small containers and can carry diseases such as dengue. Culex mosquitoes bite at night and breed in drains, ponds and larger standing water. Problems rise after rain and in gardens with heavy irrigation.',
      'Spraying the air only kills the adults flying at that moment. Lasting results come from larvicide in water that cannot be emptied, removing containers that collect water, and a residual treatment on walls, hedges and shaded planting where mosquitoes rest.',
    ],
    signs: [
      'Bites during the day (Aedes) or at night (Culex).',
      'Mosquitoes resting on shaded walls, under furniture or in dense planting.',
      'Small wriggling larvae in plant saucers, buckets or water features.',
      'More mosquitoes after rain or heavy irrigation.',
    ],
    steps: [
      { title: 'Breeding survey', text: 'Every place water collects: saucers, covers, drains, ponds, AC drip trays.' },
      { title: 'Remove and treat water', text: 'Containers emptied and larvicide applied to water that has to stay.' },
      { title: 'Resting-site treatment', text: 'Residual treatment on shaded walls, hedges and planting where adults rest.' },
      { title: 'Summer plan', text: 'Monthly visits through the hot months for gardens with water features.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Treatments keep away from fish ponds and pools unless the product is suitable, and avoid flowering plants bees use.',
    ],
    prevention: [
      'Empty plant saucers, buckets and covers every week.',
      'Keep gutters, drains and AC drip trays clear.',
      'Keep water features moving and clean.',
      'Fit insect screens on windows used in the evening.',
    ],
    related: [
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Drain fly treatment', href: '/drain-fly-control-dubai' },
      { label: 'Pest control in Al Barari', href: '/pest-control-al-barari' },
    ],
  },

  '/pest-control-for-fleas': {
    name: 'Flea Treatment',
    title: 'Flea Treatment in Dubai',
    photos: {
      intro: { brief: 'Technician treating carpet edges and under furniture in a Dubai living room, pet bed nearby', alt: 'Flea treatment in a Dubai home' },
      signs: { brief: 'Close-up of a flea on pet fur or tiny dark flea dirt on pet bedding', alt: 'Fleas on a pet in Dubai' },
    },
    priceKeys: ['flea', 'tick'],
    answer:
      'Fleas in Dubai homes are almost always cat fleas, which live on both cats and dogs. Only about one in twenty fleas in a home is on the pet. The rest are eggs, larvae and pupae in carpets, sofas and pet beds. That is why treatment needs two visits about two weeks apart, together with a vet flea treatment for the pet.',
    body: [
      'Flea pupae sit in a protective cocoon that no spray reaches. They hatch when they sense vibration or warmth, often weeks later. The second visit catches those new fleas before they lay more eggs. Vacuuming between visits helps, because it makes pupae hatch into the treatment.',
      'Fleas also come in from stray cats around villas and from shared gardens, so outdoor resting spots may need treatment too.',
    ],
    signs: [
      'Pets scratching and biting their skin, especially around the tail.',
      'Small itchy bites on ankles and lower legs.',
      'Tiny dark specks (flea dirt) on pet bedding that turn red on wet paper.',
      'Fleas jumping on carpets or white socks.',
    ],
    steps: [
      { title: 'Vet treatment for pets', text: 'All cats and dogs treated with a vet flea product the same week.' },
      { title: 'First treatment', text: 'Carpets, rugs, sofas, under furniture, pet resting areas and, if needed, the garden.' },
      { title: 'Vacuum daily', text: 'Vacuum for two weeks to make pupae hatch into the treatment.' },
      { title: 'Second treatment after about 2 weeks', text: 'Kills fleas that hatched from cocoons after the first visit.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Pets and children stay out of treated rooms until dry, usually 2–4 hours. Fish tanks covered and pumps off.',
    ],
    prevention: [
      'Keep pets on a year-round vet flea treatment.',
      'Wash pet bedding hot every week.',
      'Keep stray cats away from villa gardens and terraces.',
    ],
    related: [
      { label: 'Tick control', href: '/tick-control-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/hornet-nest-removal': {
    name: 'Wasp & Hornet Removal',
    title: 'Wasp, Hornet and Bee Removal in Dubai',
    photos: {
      intro: { brief: 'Technician in a bee suit removing a hornet or wasp nest from a villa wall or garden', alt: 'Hands in bee suit gloves treating a hornet ground nest at a villa garden wall with a duster', src: '/assets/img/jobs/hornet-nest-removal-intro.webp' },
      signs: { brief: 'Oriental hornets going in and out of a hole in the ground or a wall gap', alt: 'Oriental hornets at a ground nest entrance at the base of a villa garden wall', src: '/assets/img/jobs/hornet-nest-removal-signs.webp' },
    },
    priceKeys: ['wasp-nest', 'bee-relocation'],
    answer:
      'In Dubai the stinging insect that causes most call-outs is the Oriental hornet. It nests in the ground, in wall gaps and in sheltered corners of villas and gardens, and defends the nest hard. Never block or spray a nest yourself. We remove hornet and wasp nests safely and relocate honey bee swarms where possible.',
    body: [
      'Oriental hornets are reddish-brown with yellow bands and are most active from spring to autumn, when nests are largest. Paper wasps and mud daubers build smaller nests under eaves, balconies and AC units. Honey bee swarms sometimes settle in trees, roof spaces or wall cavities.',
      'Disturbing a nest can set off many stings at once, which is dangerous even for people without allergies. If someone is stung many times, or has trouble breathing, call 998.',
    ],
    signs: [
      'Hornets flying in and out of the same hole in the ground or a wall.',
      'Paper-like nests under eaves, balconies or AC units.',
      'A cluster of bees hanging on a tree or wall (a swarm).',
      'Humming from inside a wall or roof space.',
    ],
    steps: [
      { title: 'Identify', text: 'Hornet, wasp or bee, from a photo on WhatsApp if possible.' },
      { title: 'Protect the area', text: 'People and pets kept away, and work done in protective suits.' },
      { title: 'Remove or relocate', text: 'Hornet and wasp nests treated and removed, and honey bees relocated where possible.' },
      { title: 'Seal', text: 'Entry holes sealed so they do not rebuild in the same spot.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Never block a nest entrance or spray it yourself, because it makes the colony attack.',
    ],
    prevention: [
      'Seal holes in walls and around AC pipes before spring.',
      'Keep bins closed and clear fallen fruit, which attracts hornets.',
      'Check eaves and balconies for small new nests and call early.',
    ],
    related: [
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Scorpion control', href: '/scorpion-control-dubai' },
    ],
  },

  '/scorpion-control-dubai': {
    name: 'Scorpion Control',
    title: 'Scorpion Control in Dubai',
    photos: {
      intro: { brief: 'Technician applying a perimeter treatment along a villa garden wall at the desert edge', alt: 'Gloved hands spraying a scorpion barrier along the base of a villa garden wall at the desert edge', src: '/assets/img/jobs/scorpion-control-dubai-intro.webp' },
      signs: { brief: 'Gap under a villa door or garden gate where scorpions get in, with a door sweep being fitted', alt: 'Gloved hands fitting a brush door sweep to a villa garden door to keep scorpions out', src: '/assets/img/jobs/scorpion-control-dubai-signs.webp' },
    },
    priceKeys: ['scorpion', 'snake'],
    answer:
      'Scorpions in Dubai are most often found in villas near the desert edge, construction sites and older properties, especially in summer when they look for cool shelter. Control is a barrier treatment around the villa, treatment of hiding spots in the garden, and closing the gaps under doors and gates they use to get in.',
    body: [
      'The deathstalker and the Arabian fat-tailed scorpion both live in the UAE and can give medically serious stings. Scorpions hide by day under stones, wood, rubble and in wall cracks, and hunt at night. They glow under UV light, which helps find them in the dark.',
      'If someone is stung, keep them calm and still and call 998, especially for children and older people. Do not try to catch a scorpion by hand.',
    ],
    signs: [
      'Scorpions seen at night in the garage, garden or near doors.',
      'Stones, wood piles or rubble against the villa wall.',
      'Gaps under garden doors, gates and garage doors.',
      'A villa next to open desert or a construction site.',
    ],
    steps: [
      { title: 'Inspection', text: 'Garden, boundary walls, garage and entry points, including a UV check at dusk if needed.' },
      { title: 'Perimeter barrier', text: 'Residual treatment along walls, doors and the garden edge.' },
      { title: 'Hiding spots', text: 'Treatment of cracks, stone edging and storage areas.' },
      { title: 'Proofing advice', text: 'Door sweeps, gap sealing and garden changes that keep them out.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Children and pets stay away from treated areas until dry.',
    ],
    prevention: [
      'Fit door sweeps on garden, garage and maid\'s room doors.',
      'Clear stones, wood and rubble from along the walls.',
      'Shake out shoes and check bedding in villas near the desert.',
      'Keep outdoor lights low, because they draw insects, which draw scorpions.',
    ],
    related: [
      { label: 'Camel spider control', href: '/camel-spider-control-dubai' },
      { label: 'Snake removal', href: '/snake-removal-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/spider-control-dubai': {
    name: 'Spider Control',
    title: 'Spider Control in Dubai',
    photos: {
      intro: { brief: 'Technician removing webs from a villa ceiling corner or outdoor light', alt: 'Technician removing spider webs in Dubai' },
      signs: { brief: 'Spider webs around an outdoor light or window frame', alt: 'Spider webs around an outdoor light' },
    },
    priceKeys: ['spider', 'camel-spider'],
    answer:
      'Most spiders in Dubai homes are harmless house and cellar spiders that live off small insects. A few, such as the brown widow, can bite. Lasting spider control means removing webs and egg sacs, treating the corners and gaps they live in, and treating the insects they feed on.',
    body: [
      'Spiders follow food. Outdoor lights, balconies and gardens attract flying insects, and spiders build webs where those insects gather. Indoors, they hide behind furniture, in ceiling corners, store rooms and maid\'s rooms.',
      'Brown widows are brown with an orange hourglass mark under the body and are found in garden furniture, under ledges and in storage. Their bite can be painful, so seek medical advice if bitten.',
    ],
    signs: [
      'Webs in ceiling corners, behind furniture or around outdoor lights.',
      'Round egg sacs in webs or under garden furniture.',
      'Many insects around lights at night.',
    ],
    steps: [
      { title: 'Inspection', text: 'Where spiders live and what insects feed them.' },
      { title: 'Web and egg sac removal', text: 'Webs and egg sacs removed inside and outside.' },
      { title: 'Targeted treatment', text: 'Corners, gaps, window frames and outdoor areas treated.' },
      { title: 'Insect control', text: 'The insects they feed on treated so spiders do not return.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Wear gloves when moving garden furniture or stored items.',
    ],
    prevention: [
      'Switch off outdoor lights when not needed or use warm yellow bulbs.',
      'Declutter store rooms and garages.',
      'Fit insect screens and seal gaps around windows.',
    ],
    related: [
      { label: 'Camel spider control', href: '/camel-spider-control-dubai' },
      { label: 'Lizard control', href: '/lizard-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
    ],
  },

  '/camel-spider-control-dubai': {
    name: 'Camel Spider Control',
    title: 'Camel Spider Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating a villa garage or garden edge at the desert side of a Dubai community', alt: 'Gloved hands spraying the floor edge and roller door track of a villa garage', src: '/assets/img/jobs/camel-spider-control-dubai-intro.webp' },
      signs: { brief: 'Camel spider (solifuge) on a villa floor or patio, photographed from a safe distance', alt: 'Camel spider on villa patio tiles at night by a garden door', src: '/assets/img/jobs/camel-spider-control-dubai-signs.webp' },
    },
    priceKeys: ['camel-spider', 'scorpion'],
    answer:
      'Camel spiders are not true spiders and are not venomous, but they are large, very fast and have strong jaws that can give a painful bite. In Dubai they come into villas near the desert edge, mostly at night and in summer, chasing insects and shade. Control is a perimeter treatment and closing the gaps they use.',
    body: [
      'Camel spiders, also called solifuges or wind scorpions, hunt insects at night and are drawn to lights and cool shaded spots like garages, store rooms and maid\'s rooms. Many stories about them are myths. They do not chase people and they are not poisonous.',
      'The same conditions that bring camel spiders, open land, rubble and outdoor lights, also bring scorpions, so we usually treat for both.',
    ],
    signs: [
      'Fast sandy-coloured creatures running across floors at night.',
      'Sightings in the garage, store room or near garden doors.',
      'A villa next to open desert or a construction site.',
      'Many insects around outdoor lights.',
    ],
    steps: [
      { title: 'Inspection', text: 'Entry points, hiding spots and lighting around the villa.' },
      { title: 'Perimeter treatment', text: 'Barrier along walls, doors and the garden edge.' },
      { title: 'Insect control', text: 'The insects they hunt treated around lights and gardens.' },
      { title: 'Proofing', text: 'Door sweeps and gap sealing advice.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Do not try to catch one by hand. Use a container and call us.',
    ],
    prevention: [
      'Fit door sweeps and keep garage doors closed at night.',
      'Clear rubble and stored items from walls.',
      'Use fewer and warmer outdoor lights.',
    ],
    related: [
      { label: 'Scorpion control', href: '/scorpion-control-dubai' },
      { label: 'Spider control', href: '/spider-control-dubai' },
      { label: 'Snake removal', href: '/snake-removal-dubai' },
    ],
  },

  '/drain-fly-control-dubai': {
    name: 'Drain Fly Treatment',
    title: 'Drain Fly Treatment in Dubai',
    photos: {
      intro: { brief: 'Technician treating a bathroom floor drain with a foam or gel drain treatment', alt: 'Drain fly treatment in a Dubai bathroom' },
      signs: { brief: 'Small fuzzy drain flies resting on a bathroom wall near the shower', alt: 'Drain flies on a bathroom wall' },
    },
    priceKeys: ['drain-fly', 'cockroach-apartment'],
    answer:
      'Drain flies are the small fuzzy flies resting on bathroom and kitchen walls. They breed in the slimy film inside drains, floor traps and unused bathrooms, not in the room itself. Spraying the flies does nothing. The fix is cleaning and treating the drains where the larvae live.',
    body: [
      'In Dubai apartments drain flies are common in bathrooms that are rarely used, where floor traps dry out, and in kitchens with slow sinks. The flies are weak fliers and stay close to where they breed, so finding the right drain usually solves it.',
      'They do not bite, but they show there is organic build-up in the drains, which can also bring cockroaches up from the building\'s drainage.',
    ],
    signs: [
      'Small grey fuzzy flies with leaf-shaped wings on bathroom walls.',
      'More flies in the morning or after the bathroom has been unused.',
      'Slow drains or a smell from floor traps.',
    ],
    steps: [
      { title: 'Find the breeding drain', text: 'Floor traps, shower drains, sinks and unused bathrooms checked.' },
      { title: 'Clean the film', text: 'The slime layer brushed out of accessible drains.' },
      { title: 'Treat drains', text: 'Foam or gel drain treatment that coats the pipe where larvae live.' },
      { title: 'Advice', text: 'Simple steps to stop the build-up returning.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Drain treatments stay inside the pipes and are safe for the plumbing.',
    ],
    prevention: [
      'Run water in unused showers and floor drains every week.',
      'Clean drain covers and sink traps regularly.',
      'Report slow drains to building maintenance.',
    ],
    related: [
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
    ],
  },

  '/silverfish-control-dubai': {
    name: 'Silverfish Treatment',
    title: 'Silverfish Treatment in Dubai',
    photos: {
      intro: { brief: 'Technician treating gaps behind bathroom fittings or a wardrobe in a Dubai apartment', alt: 'Silverfish treatment in a Dubai apartment' },
      signs: { brief: 'Silverfish on a bathroom floor or between stored papers and books', alt: 'Silverfish between stored papers' },
    },
    priceKeys: ['silverfish', 'general-apartment'],
    answer:
      'Silverfish are small, silver, fish-shaped insects that live in humid spots: bathrooms, under sinks, AC closets, wardrobes and boxes of paper. They eat paper, glue, fabric and food crumbs. Treatment targets the gaps where they hide and fixes the humidity that keeps them there.',
    body: [
      'AC condensation, bathrooms without good ventilation and stored cardboard boxes give silverfish what they need in Dubai homes. They come out at night, so a few seen in the day can mean a larger population behind skirting, fittings and stored items.',
      'They do not bite, but they damage books, documents, wallpaper and clothes, and their presence often points to damp.',
    ],
    signs: [
      'Silverfish on bathroom floors or in sinks at night.',
      'Small holes or yellow marks on books, papers and fabric.',
      'Tiny pepper-like droppings in drawers and boxes.',
    ],
    steps: [
      { title: 'Inspection', text: 'Bathrooms, AC closets, wardrobes and storage.' },
      { title: 'Targeted treatment', text: 'Cracks, skirting, fittings and storage areas treated.' },
      { title: 'Damp advice', text: 'Ventilation and leaks that keep humidity high.' },
    ],
    safety: SAFETY_COMMON,
    prevention: [
      'Ventilate bathrooms and fix leaks under sinks.',
      'Store papers and clothes in sealed plastic boxes, not cardboard.',
      'Keep AC drains and drip trays clear.',
    ],
    related: [
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
    ],
  },

  '/residential-pest-control': {
    name: 'Residential Pest Control',
    title: 'Residential Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician greeting a family at the door of a Dubai villa or apartment, treatment kit in hand', alt: 'Residential pest control technician in Dubai' },
      signs: { brief: 'Technician explaining the treatment plan to a resident in a kitchen', alt: 'Technician explaining a pest treatment plan' },
    },
    priceKeys: ['general-apartment', 'general-villa', 'annual-apartment', 'annual-villa'],
    answer:
      'Residential pest control covers apartments, townhouses and villas, as a one-off treatment or an annual contract. Apartments mostly need cockroach, bed bug and ant treatment. Villas also need the garden, drains and perimeter treated for ants, termites, rodents, scorpions and mosquitoes.',
    body: [
      'Every home is different. A studio in a tower shares drains and risers with neighbours, while a villa has a garden, irrigation, roof and boundary walls. We start with what you are seeing, check where it comes from, and treat in the way that fits your home.',
      'For homes with recurring problems, an annual contract with scheduled visits is cheaper than repeated one-off treatments and catches problems early.',
    ],
    signsTitle: 'What We Treat in Homes',
    signsEyebrow: 'What We Treat',
    signs: [
      'Cockroaches, ants and silverfish in kitchens and bathrooms.',
      'Bed bugs in bedrooms and sofas.',
      'Rats and mice in store rooms and false ceilings.',
      'Termites, scorpions and mosquitoes in villas with gardens.',
      'Pigeons on balconies, roofs and solar panels.',
    ],
    steps: [
      { title: 'Tell us what you see', text: 'A photo or description on WhatsApp, and we tell you the likely cause and price.' },
      { title: 'Inspection', text: 'Where pests live, how they get in and what attracts them.' },
      { title: 'Treatment', text: 'Targeted treatment for your home type, with no fogging in flats.' },
      { title: 'Follow-up or contract', text: 'Second visit where needed, or scheduled visits on an annual plan.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'We tell you exactly what to prepare and how long to stay out of each room.',
    ],
    prevention: [
      'Keep drains covered and run water in unused bathrooms weekly.',
      'Seal gaps around pipes and under doors.',
      'Do not leave food or rubbish out overnight.',
    ],
    related: [
      { label: 'Apartment pest control', href: '/apartment-pest-control-dubai' },
      { label: 'Villa pest control', href: '/villa-pest-control-dubai' },
      { label: 'Move-in pest control', href: '/move-in-pest-control-dubai' },
    ],
  },
  // ── Added 21 Nov 2026 (service gap analysis) ──
  '/fumigation-services-dubai': {
    name: 'Fumigation',
    title: 'Fumigation Services in Dubai',
    photos: {
      intro: { brief: 'Licensed technician in full protective equipment sealing a shipping container or warehouse stack under a fumigation sheet', alt: 'Container fumigation in Dubai' },
      signs: { brief: 'Fumigation certificate and ISPM 15 marked wooden pallet ready for export', alt: 'Fumigation certificate and ISPM 15 pallet' },
    },
    priceKeys: ['fumigation-commercial', 'general-apartment', 'general-villa'],
    answer:
      'Fumigation fills a sealed space with a gas that reaches pests deep inside goods, wood and packaging. In Dubai it is used for warehouses, stored food and commodities, shipping containers and wooden pallets, and it needs a separate Dubai Municipality fumigation approval, which we hold. It is never used in homes. For apartments and villas we use safe targeted treatments instead.',
    body: [
      'Many people search for "fumigation" when they mean pest control at home. Gas fumigants such as aluminium phosphide are banned in homes in the UAE, after deaths caused by gas spreading through shared AC ducts into neighbouring flats. If someone offers to fumigate your apartment, do not accept. Cockroaches, bed bugs and other home pests are treated safely with gels, baits and targeted sprays.',
      'For businesses, fumigation protects stock from weevils, beetles and moths, and is required for many exports. Wooden pallets and crates often need ISPM 15 treatment, and many importers and customs authorities ask for a fumigation certificate with the shipping documents. We seal, treat, monitor and ventilate the space, and issue the certificate.',
    ],
    signsTitle: 'When Fumigation Is Needed',
    signsEyebrow: 'Who It Is For',
    signs: [
      'Warehouses and stores with weevils, beetles or moths in stored food or goods.',
      'Shipping containers and their contents before export.',
      'Wooden pallets, crates and dunnage that need ISPM 15 treatment.',
      'Stored commodities such as grain, rice, dates, spices and tobacco.',
      'Furniture and wood with drywood termites or wood-boring beetles (in a controlled, non-residential space).',
    ],
    steps: [
      { title: 'Survey and plan', text: 'The goods, the space, the pest and any export rules, then a written quote and schedule.' },
      { title: 'Seal', text: 'The container, room or stack is made gas-tight under sheets and warning signs are placed.' },
      { title: 'Treat and monitor', text: 'The fumigant is released at the correct dose and the gas level is monitored for the full exposure time.' },
      { title: 'Ventilate and clear', text: 'The space is aired and gas levels are checked before anyone goes back in.' },
      { title: 'Certificate', text: 'A fumigation certificate with the treatment details for your records or shipping documents.' },
    ],
    safety: [
      'Carried out only by trained technicians with the Dubai Municipality fumigation approval.',
      'Never used in homes, flats or occupied buildings, because gas fumigation in residential buildings is banned in the UAE.',
      'Treated areas are sealed, signed and monitored until gas levels are safe.',
    ],
    prevention: [
      'Inspect incoming goods and reject infested deliveries.',
      'Store food goods off the floor, rotate stock and keep stores clean.',
      'Use treated and marked pallets for exports.',
      'Book regular warehouse inspections so problems are caught early.',
    ],
    related: [
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
      { label: 'Restaurant pest control', href: '/restaurant-pest-control-dubai' },
      { label: 'Termite control', href: '/termite-control' },
      { label: 'Cockroach control (homes)', href: '/cockroach-control-dubai' },
    ],
  },

  '/restaurant-pest-control-dubai': {
    name: 'Restaurant Pest Control',
    title: 'Restaurant Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating under a commercial kitchen line after closing, stainless steel equipment visible', alt: 'Technician treating a Dubai restaurant kitchen' },
      signs: { brief: 'Service report and bait station map handed to a restaurant manager', alt: 'Pest control service report for a Dubai restaurant' },
    },
    priceKeys: ['restaurant-contract', 'fly-commercial'],
    answer:
      'Restaurants, cafes and cloud kitchens in Dubai need regular pest control: usually a monthly visit outside opening hours, rodent bait stations, fly control and a service report after every visit. Dubai Municipality food inspectors look for pest activity and your pest control records, so the paperwork matters as much as the treatment.',
    body: [
      'Kitchens give pests everything they need: food residue under equipment, grease traps, warm motors, drains and cardboard deliveries that bring in German cockroaches. In malls and towers, shared garbage rooms and drains bring them from neighbouring outlets too.',
      'A good programme prevents problems instead of reacting to them. We treat and monitor every visit, keep a bait station map and trend notes, and tell your team exactly what to change in cleaning, storage and waste.',
    ],
    signsTitle: 'What Every Visit Covers',
    signsEyebrow: 'Our Programme',
    signs: [
      'Kitchen line, under and behind equipment, dishwashers and motors.',
      'Dry stores, cold rooms, receiving area and cardboard storage.',
      'Drains, grease traps, washrooms and garbage area.',
      'Rodent bait stations checked and recorded against the station map.',
      'Insect light traps serviced for flies.',
      'Service report with findings, treatment and advice.',
    ],
    steps: [
      { title: 'Free site survey', text: 'Risk areas, current activity and what your inspector or brand standard needs.' },
      { title: 'Contract and station map', text: 'Visit frequency, products, bait stations and light traps agreed at a fixed monthly price.' },
      { title: 'Monthly visits after hours', text: 'Treatment, monitoring and a report after every visit.' },
      { title: 'Call-outs', text: 'Fast response between visits if staff see pests.' },
      { title: 'Review', text: 'Trend notes and advice on proofing, cleaning and storage.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Gel baits and targeted treatments suitable for food premises, with food and utensils covered or removed.',
      'Product safety data sheets and service reports for your records.',
    ],
    prevention: [
      'Clean under and behind equipment daily, not only the surfaces.',
      'Break down cardboard and remove it from the kitchen the same day.',
      'Keep drains and grease traps cleaned and covered.',
      'Store food off the floor and away from walls.',
      'Keep back doors closed and fit strip curtains or screens.',
    ],
    related: [
      { label: 'Fly control', href: '/fly-control-dubai' },
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
      { label: 'Rat & mouse control', href: '/rodent-control' },
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
      { label: 'Disinfection', href: '/disinfection-services-dubai' },
    ],
  },

  '/office-pest-control-dubai': {
    name: 'Office Pest Control',
    title: 'Office Pest Control in Dubai',
    photos: {
      intro: { brief: 'Technician treating an office pantry in the evening, empty desks in the background', alt: 'Office pest control in a Dubai pantry' },
      signs: { brief: 'Technician inspecting a false ceiling tile or cable tray with a torch', alt: 'Checking an office false ceiling for rodents' },
    },
    priceKeys: ['office-contract', 'disinfection-apartment'],
    answer:
      'Offices in Dubai mostly get cockroaches and ants in pantries and washrooms, and rodents in false ceilings, risers and cable trays. We treat outside working hours, as a one-off visit or on a quarterly contract, with a report after every visit.',
    body: [
      'Pantries with food, coffee machines, dishwashers and bins are where office pests start, and towers share drains and risers that let cockroaches move between floors. Rodents in ceilings are a bigger risk than they look. They chew cables and can cause outages.',
      'We work early morning, in the evening or at weekends, so treatment never disturbs your team, and most areas are dry and ready before staff arrive.',
    ],
    signsTitle: 'Signs Your Office Needs Pest Control',
    signs: [
      'Cockroaches or ants in the pantry, kitchen or washrooms.',
      'Droppings in drawers, store rooms or under sinks.',
      'Scratching sounds in the false ceiling or chewed cables.',
      'Small flies around pantry sinks and drains.',
    ],
    steps: [
      { title: 'Survey', text: 'Pantries, washrooms, stores, ceilings and risers checked, then a quote.' },
      { title: 'After-hours treatment', text: 'Gel baits, targeted treatment and drain treatment outside working hours.' },
      { title: 'Rodent control', text: 'Bait stations and traps where needed, and entry points sealed.' },
      { title: 'Report and plan', text: 'Service report and a quarterly plan if you want ongoing protection.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'Treatments are dry before staff arrive. We tell you if any area needs to stay closed for longer.',
    ],
    prevention: [
      'Keep pantry food in sealed containers and empty bins daily.',
      'Clean coffee machines, fridges and microwaves weekly.',
      'Report pests to building management so risers and shared areas are treated too.',
    ],
    related: [
      { label: 'Commercial pest control', href: '/commercial-pest-control-dubai' },
      { label: 'Disinfection', href: '/disinfection-services-dubai' },
      { label: 'Rat & mouse control', href: '/rodent-control' },
      { label: 'Cockroach control', href: '/cockroach-control-dubai' },
    ],
  },

  '/fly-control-dubai': {
    name: 'Fly Control',
    title: 'Fly Control in Dubai',
    photos: {
      intro: { brief: 'Insect light trap installed on a restaurant or kitchen wall, technician changing the glue board', alt: 'Insect light trap for fly control in Dubai' },
      signs: { brief: 'Fly breeding source: an open bin or blocked drain with flies around it', alt: 'Flies around a bin, a common breeding source' },
    },
    priceKeys: ['fly', 'fly-commercial'],
    answer:
      'Flies in Dubai homes and restaurants come from breeding sites close by: bins, drains, grease traps, food waste, pet waste and rotting fruit. Spraying the flies you see gives a day or two of relief. Finding and treating where they breed, and fitting insect light traps in food areas, is what stops them.',
    body: [
      'House flies and blow flies breed in rubbish and organic waste, fruit flies in fermenting fruit and drinks residue, and drain flies in the slime inside drains. In the heat, a fly can go from egg to adult in about a week, so one overlooked bin can bring back a whole population.',
      'For homes we find and treat the source in one visit. For restaurants and food businesses fly control is part of a monthly programme with light traps that catch flies without spraying near food.',
    ],
    signs: [
      'Many flies indoors even with doors and windows closed.',
      'Flies gathering around bins, drains or the kitchen sink.',
      'Small fruit flies around fruit bowls and recycling.',
      'Maggots in bins or around waste areas.',
    ],
    steps: [
      { title: 'Find the source', text: 'Bins, drains, grease traps, waste areas, garden compost and pet areas checked.' },
      { title: 'Treat breeding sites', text: 'Drains and waste areas treated and cleaned so larvae cannot develop.' },
      { title: 'Treat resting areas', text: 'Targeted treatment where flies rest, away from food.' },
      { title: 'Light traps for food sites', text: 'Insect light traps installed in kitchens and serviced every month.' },
    ],
    safety: [
      ...SAFETY_COMMON,
      'No spraying over food or food-preparation surfaces.',
    ],
    prevention: [
      'Use bins with tight lids and empty them daily in summer.',
      'Rinse recycling and keep fruit covered or in the fridge.',
      'Clean drains and grease traps regularly.',
      'Fit screens or strip curtains on doors used often.',
    ],
    related: [
      { label: 'Drain fly treatment', href: '/drain-fly-control-dubai' },
      { label: 'Restaurant pest control', href: '/restaurant-pest-control-dubai' },
      { label: 'Mosquito control', href: '/mosquito-control-dubai' },
    ],
  },
};
