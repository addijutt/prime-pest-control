import { aed } from './prices';
import type { Community } from './guideTypes';
import { MORE_COMMUNITIES } from './communitiesMore';

// Community landing pages: /pest-control-<slug>. Add a community by adding an entry here;
// routing, sitemap and the links in the Service Area section pick it up automatically.
// Prices come from prices.ts via priceKeys.

const FIRST_COMMUNITIES: Community[] = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    homes: 'High-rise apartments',
    metaTitle: 'Pest Control Dubai Marina | Apartments & Bed Bugs | Prime Pest Control',
    metaDescription: `Pest control in Dubai Marina towers: cockroaches, bed bugs, ants and balcony pigeons. Apartment treatment from ${aed('general-apartment')}. WhatsApp 055 304 5256.`,
    headline: 'Pest Control in Dubai Marina',
    answer:
      'Most pest calls in Dubai Marina are for cockroaches, bed bugs and pigeons on balconies. The towers share drains, risers and garbage chutes, and many flats change tenants or guests often, which spreads bed bugs and cockroaches between units.',
    body: [
      'Dubai Marina is almost entirely high-rise apartments around the marina canal, with many holiday homes and short lets. Busy turnover means luggage and furniture come and go constantly, which is how bed bugs travel; Dubai Marina has long been one of the areas with the most bed bug call-outs in Dubai.',
      'We treat Marina flats with targeted methods that are safe in towers: gel baits, crack-and-crevice treatment and drain treatment, with no fogging that could travel through shared ducts. For holiday home operators we can schedule treatments between guests.',
    ],
    pests: [
      { pest: 'Bed bugs', why: 'Frequent guest and tenant turnover brings them in luggage and furniture.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Cockroaches', why: 'German cockroaches in kitchens; drain cockroaches from shared risers.', href: '/cockroach-control-dubai' },
      { pest: 'Pigeons', why: 'Nest behind balcony AC units on the sea-facing side.', href: '/bird-netting-dubai' },
      { pest: 'Ants', why: 'Come up through wall cavities and pipe gaps in kitchens.', href: '/ant-control-dubai' },
      { pest: 'Drain flies', why: 'Breed in slow drains and unused bathrooms.', href: '/drain-fly-control-dubai' },
    ],
    priceKeys: ['general-apartment', 'bed-bug-apartment', 'cockroach-apartment', 'bird-net'],
    tips: [
      'Holiday homes: inspect mattress seams between guests and treat at the first sign.',
      'Keep floor drains covered and run water in unused bathrooms weekly.',
      'Ask building management to check net colour rules before fitting a balcony net.',
      'Report cockroaches to the building so risers and garbage rooms are treated too.',
    ],
    faqs: [
      { question: 'Do you treat holiday homes in Dubai Marina between guests?', answer: 'Yes. We can schedule inspections and treatments between bookings, and for bed bugs we plan the two visits around your calendar.' },
      { question: 'Can you install pigeon nets on a Dubai Marina balcony?', answer: 'Yes. We use clear or black UV-stable nets that most towers accept, and we can check the building rules with management before installation.' },
      { question: 'Will the treatment affect my neighbours?', answer: 'No. We use gel baits and targeted treatments, not fogging or fumigation, so nothing travels through shared ducts.' },
    ],
    nearby: ['jlt', 'palm-jumeirah', 'discovery-gardens'],
    photos: {
      intro: { brief: 'Our technician or service vehicle with Dubai Marina towers and the marina canal behind', alt: 'Prime Pest Control in dubai marina' },
      tips: { brief: 'Technician on a Dubai Marina apartment balcony fitting a pigeon net', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'jvc',
    name: 'JVC (Jumeirah Village Circle)',
    homes: 'Apartments, townhouses & villas',
    metaTitle: 'Pest Control JVC | Jumeirah Village Circle Apartments & Villas | Prime Pest Control',
    metaDescription: `Pest control in JVC: cockroaches, ants, rodents from nearby construction, bed bugs and pigeons. Apartments from ${aed('general-apartment')}, villas from ${aed('general-villa')}.`,
    headline: 'Pest Control in JVC (Jumeirah Village Circle)',
    answer:
      'JVC is one of the busiest areas for pest control in Dubai. Building work across the community disturbs rats and cockroaches and pushes them into finished buildings, and the many parks and townhouse gardens bring ants and mosquitoes.',
    body: [
      'Jumeirah Village Circle mixes mid-rise apartment buildings, townhouses and villas, with new projects still going up on many plots. Construction next door is one of the main reasons for sudden rodent and cockroach problems in JVC buildings, as burrows and drains on site are disturbed.',
      'JVC and the neighbouring JVT are among the areas with the most pest control requests in Dubai, including for ants. We treat both apartments and villas here, and buildings\' common areas, garbage rooms and car parks on contract.',
    ],
    pests: [
      { pest: 'Cockroaches', why: 'German cockroaches in kitchens and American cockroaches from drains and car parks.', href: '/cockroach-control-dubai' },
      { pest: 'Rats and mice', why: 'Pushed out of construction plots into buildings and townhouse gardens.', href: '/rodent-control' },
      { pest: 'Ants', why: 'Nest in parks, planters and townhouse gardens and trail into kitchens.', href: '/ant-control-dubai' },
      { pest: 'Bed bugs', why: 'High tenant turnover in rental buildings.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Pigeons', why: 'Nest on balconies and AC units.', href: '/pigeon-control-dubai' },
      { pest: 'Mosquitoes', why: 'Breed in irrigation, planters and standing water near parks.', href: '/mosquito-control-dubai' },
    ],
    priceKeys: ['general-apartment', 'general-villa', 'rodent', 'cockroach-apartment'],
    tips: [
      'If a plot next to you starts construction, watch for droppings and seal gaps early.',
      'Townhouses: keep irrigation and planters away from the walls to keep ants out.',
      'Cover floor drains in apartments, especially on lower floors.',
      'Building owners: treat garbage rooms and car parks on a schedule, not only flats.',
    ],
    faqs: [
      { question: 'Why do I have rats in my JVC building?', answer: 'Nearby construction often disturbs rats, which then move into car parks, garbage rooms and lower floors. We use bait stations outside and traps inside, and seal the entry points.' },
      { question: 'Do you treat JVC townhouses and villas?', answer: `Yes. Villa and townhouse treatment covers inside, the garden and the perimeter, starting from ${aed('general-villa')}.` },
      { question: 'Can you treat a whole JVC building?', answer: 'Yes. We offer contracts for common areas, risers, garbage rooms and car parks for owners associations and building managers.' },
    ],
    nearby: ['al-barsha', 'dubai-hills-estate', 'discovery-gardens'],
    photos: {
      intro: { brief: 'Our service vehicle on a JVC street with mid-rise buildings and townhouses', alt: 'Prime Pest Control in jvc' },
      tips: { brief: 'Technician treating a JVC townhouse garden perimeter', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'jlt',
    name: 'JLT (Jumeirah Lake Towers)',
    homes: 'Apartment & office towers',
    metaTitle: 'Pest Control JLT | Jumeirah Lake Towers Apartments & Offices | Prime Pest Control',
    metaDescription: `Pest control in JLT towers: cockroaches, bed bugs, ants and pigeons in apartments and offices. Apartment treatment from ${aed('general-apartment')}.`,
    headline: 'Pest Control in JLT (Jumeirah Lake Towers)',
    answer:
      'JLT has some of the highest numbers of pest control requests in Dubai, mostly for cockroaches, bed bugs and ants in apartments. Its towers mix flats, offices, restaurants and shops in the same clusters, so pests move easily between kitchens, food outlets and homes.',
    body: [
      'Jumeirah Lake Towers is built in clusters of towers around man-made lakes, with restaurants and shops on the podium levels. Food outlets, shared garbage rooms and older drainage in some towers make cockroaches the most common problem, and JLT has been one of the areas with the most cockroach call-outs in Dubai.',
      'We treat JLT apartments and offices outside working hours if needed, and restaurants and cafes on monthly contracts with service reports for inspections.',
    ],
    pests: [
      { pest: 'Cockroaches', why: 'Food outlets on podium levels and shared garbage rooms.', href: '/cockroach-control-dubai' },
      { pest: 'Bed bugs', why: 'Rental flats with frequent moves.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Ants', why: 'Common in JLT kitchens and bathrooms, through wall cavities.', href: '/ant-control-dubai' },
      { pest: 'Pigeons', why: 'Balconies and window ledges facing the lakes.', href: '/pigeon-control-dubai' },
      { pest: 'Midges and mosquitoes', why: 'Near the lakes and landscaping in warm months.', href: '/mosquito-control-dubai' },
    ],
    priceKeys: ['general-apartment', 'cockroach-apartment', 'bed-bug-apartment', 'commercial'],
    tips: [
      'Keep balcony doors closed at dusk on lake-facing flats.',
      'Do not leave rubbish outside the flat door overnight.',
      'Offices: keep pantry food in closed containers and empty bins daily.',
      'Restaurants: keep pest control service reports ready for inspections.',
    ],
    faqs: [
      { question: 'Do you treat offices and restaurants in JLT?', answer: 'Yes. We treat offices outside working hours and restaurants on monthly contracts with a service report after every visit.' },
      { question: 'Why do cockroaches keep coming back in my JLT flat?', answer: 'In towers they travel through shared drains and risers. Gel bait treatment in your flat plus treatment of the building\'s garbage rooms and risers gives the most lasting result.' },
      { question: 'How much is pest control for a JLT apartment?', answer: `General treatment for a studio or 1-bedroom starts from ${aed('general-apartment')}; cockroach-only treatment from ${aed('cockroach-apartment')}.` },
    ],
    nearby: ['dubai-marina', 'discovery-gardens', 'al-barsha'],
    photos: {
      intro: { brief: 'JLT towers around the lake with our technician or vehicle in front', alt: 'Prime Pest Control in jlt' },
      tips: { brief: 'Technician treating a JLT apartment kitchen or an office pantry', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    homes: 'Villas & apartments',
    metaTitle: 'Pest Control Al Barsha | Villas & Apartments | Prime Pest Control',
    metaDescription: `Pest control in Al Barsha villas and apartments: bed bugs, cockroaches, termites in older villas, rodents and pigeons. From ${aed('general-apartment')}.`,
    headline: 'Pest Control in Al Barsha',
    answer:
      'Al Barsha has both older family villas and busy apartment buildings, so the pest problems are split: bed bugs and cockroaches in flats, and termites, rodents and ants in villas with gardens. It is one of the Dubai areas with the most pest control requests, especially for bed bugs.',
    body: [
      'Al Barsha 1, 2 and 3 are mostly independent villas with gardens, many of them older, while the area around Mall of the Emirates and Al Barsha Heights has dense apartment buildings and hotels. Older villas have more gaps and more wood at risk from termites; the apartment blocks see high tenant turnover and bed bugs.',
      'We treat Al Barsha villas inside, in the garden and along the boundary, and apartments with targeted, tower-safe treatments.',
    ],
    pests: [
      { pest: 'Bed bugs', why: 'Al Barsha is one of the areas with the most bed bug call-outs in Dubai.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Cockroaches', why: 'Kitchens in apartments and drains in villas.', href: '/cockroach-control-dubai' },
      { pest: 'Termites', why: 'Older villas with wooden door frames and gardens next to the walls.', href: '/termite-control' },
      { pest: 'Rats and mice', why: 'Villa gardens, store rooms and drains.', href: '/rodent-control' },
      { pest: 'Pigeons', why: 'Villa roofs, AC units and apartment balconies.', href: '/pigeon-control-dubai' },
    ],
    priceKeys: ['general-apartment', 'general-villa', 'bed-bug-apartment', 'termite-inspection'],
    tips: [
      'Older villas: book a termite inspection, especially if door frames sound hollow.',
      'Keep garden irrigation away from villa walls.',
      'After travel, check suitcases before bringing them into bedrooms.',
      'Seal gaps under villa doors and around AC pipes.',
    ],
    faqs: [
      { question: 'Do you do termite inspections for Al Barsha villas?', answer: `Yes. We inspect inside and the garden for mud tubes and damage and give written findings, from ${aed('termite-inspection')}.` },
      { question: 'How long does bed bug treatment take in Al Barsha?', answer: 'Two visits 10–14 days apart. Each visit takes 1–3 hours depending on the number of rooms.' },
      { question: 'Do you treat both villas and apartments in Al Barsha?', answer: 'Yes, across Al Barsha 1, 2, 3, Al Barsha South and Al Barsha Heights.' },
    ],
    nearby: ['dubai-hills-estate', 'jvc', 'jlt'],
    photos: {
      intro: { brief: 'An Al Barsha villa street with our service vehicle parked outside', alt: 'Prime Pest Control in al barsha' },
      tips: { brief: 'Technician inspecting a villa door frame for termites in Al Barsha', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    homes: 'Villas & townhouses',
    metaTitle: 'Pest Control Arabian Ranches | Villas, Scorpions & Termites | Prime Pest Control',
    metaDescription: `Villa pest control in Arabian Ranches: ants, termites, scorpions, snakes, mosquitoes and pigeons on solar panels. Villa treatment from ${aed('general-villa')}.`,
    headline: 'Pest Control in Arabian Ranches',
    answer:
      'Arabian Ranches is a villa and townhouse community with large gardens next to the desert, so the main pests are ants, termites, mosquitoes and rodents in gardens, and scorpions, camel spiders and occasionally snakes near the edges. A villa treatment here should always include the garden and the boundary.',
    body: [
      'Arabian Ranches I, II and III sit on the edge of open desert in Dubailand, with irrigated gardens, golf course landscaping and lakes. Water and greenery draw insects and rodents, and the rodents and lizards draw scorpions and snakes from the desert side.',
      'We treat villas inside, along the perimeter and in the garden, check for termite activity, and offer annual contracts with quarterly visits that many Ranches owners prefer.',
    ],
    pests: [
      { pest: 'Ants', why: 'Nest in irrigated gardens and come in under doors and through expansion joints.', href: '/ant-control-dubai' },
      { pest: 'Termites', why: 'Irrigated gardens against villa walls give termites the moisture they need.', href: '/termite-control' },
      { pest: 'Scorpions & camel spiders', why: 'Come in from the desert edge, especially in summer.', href: '/scorpion-control-dubai' },
      { pest: 'Snakes', why: 'Follow rodents and water into gardens near open land.', href: '/snake-removal-dubai' },
      { pest: 'Mosquitoes', why: 'Breed in planters, covers and standing water after irrigation.', href: '/mosquito-control-dubai' },
      { pest: 'Pigeons', why: 'Nest under solar panels and on roofs.', href: '/solar-panel-bird-proofing-dubai' },
    ],
    priceKeys: ['general-villa', 'annual-villa', 'termite-inspection', 'scorpion'],
    tips: [
      'Fit door sweeps on garden and garage doors to keep scorpions out.',
      'Keep irrigation 50 cm from villa walls and fix leaks quickly.',
      'Clear wood, rubble and stored items from side passages.',
      'Check under solar panels for pigeon nests in spring.',
    ],
    faqs: [
      { question: 'Do you remove snakes in Arabian Ranches?', answer: 'Yes. Keep away from the snake and send us a photo on WhatsApp; we remove it safely and check the garden for what attracted it.' },
      { question: 'How often should a villa in Arabian Ranches be treated?', answer: 'Most owners choose quarterly visits on an annual contract, with extra visits in summer when scorpions and ants are most active.' },
      { question: 'Do you treat the garden as well as the villa?', answer: 'Yes. Every villa treatment includes the garden, the perimeter and the boundary walls.' },
    ],
    nearby: ['dubai-hills-estate', 'al-barari', 'jvc'],
    photos: {
      intro: { brief: 'Arabian Ranches villa with garden, our technician walking the perimeter', alt: 'Prime Pest Control in arabian ranches' },
      tips: { brief: 'Technician fitting a door sweep or treating a garden boundary wall', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'dubai-hills-estate',
    name: 'Dubai Hills Estate',
    homes: 'Villas, townhouses & apartments',
    metaTitle: 'Pest Control Dubai Hills Estate | Villas & Apartments | Prime Pest Control',
    metaDescription: `Pest control in Dubai Hills Estate: ants, cockroaches, mosquitoes and pigeons in villas, townhouses and apartments. From ${aed('general-apartment')}.`,
    headline: 'Pest Control in Dubai Hills Estate',
    answer:
      'Dubai Hills Estate has topped Dubai\'s list for ant call-outs, because its villas, townhouses and apartments sit around a golf course, parks and irrigated landscaping. Ants, cockroaches and mosquitoes are the main problems, with pigeons on balconies in the apartment buildings.',
    body: [
      'The community combines villas and townhouses around the golf course with apartment buildings near the park and mall. Large areas of irrigated grass and planting keep ant colonies big and active close to homes, and they enter through expansion joints, door gaps and pipe entries.',
      'We treat ant problems at the colony with baits and perimeter treatment rather than only spraying the trails you see, which is why they stop instead of moving to the next room.',
    ],
    pests: [
      { pest: 'Ants', why: 'Golf course and park landscaping next to homes; Dubai Hills has had the most ant requests in Dubai.', href: '/ant-control-dubai' },
      { pest: 'Cockroaches', why: 'Kitchens and drains in apartments and villas.', href: '/cockroach-control-dubai' },
      { pest: 'Mosquitoes', why: 'Irrigation, water features and planters.', href: '/mosquito-control-dubai' },
      { pest: 'Pigeons', why: 'Apartment balconies and villa roofs.', href: '/bird-netting-dubai' },
      { pest: 'Termites', why: 'Villa gardens against the walls.', href: '/termite-control' },
    ],
    priceKeys: ['general-apartment', 'general-villa', 'cockroach-apartment', 'annual-villa'],
    tips: [
      'Do not spray ant trails yourself: it splits colonies. Use baits or call us.',
      'Wipe sugary spills and keep pet food bowls clean.',
      'Empty plant saucers and pool covers of standing water weekly.',
      'Seal expansion joints and door gaps on the garden side.',
    ],
    faqs: [
      { question: 'Why are there so many ants in Dubai Hills?', answer: 'Large irrigated green areas support big ant colonies close to homes. Treating the colony with baits and a perimeter treatment stops them coming in.' },
      { question: 'Do you treat Dubai Hills apartments as well as villas?', answer: `Yes, apartments from ${aed('general-apartment')} and villas from ${aed('general-villa')}.` },
      { question: 'Can you install pigeon nets in Dubai Hills apartments?', answer: 'Yes, after a free measurement, using UV-stable nets that suit building rules.' },
    ],
    nearby: ['al-barsha', 'arabian-ranches', 'jvc'],
    photos: {
      intro: { brief: 'Dubai Hills Estate villas or apartments with park or golf landscaping, technician in front', alt: 'Prime Pest Control in dubai hills estate' },
      tips: { brief: 'Technician placing ant bait along a garden-side door', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'al-barari',
    name: 'Al Barari',
    homes: 'Luxury villas & gardens',
    metaTitle: 'Pest Control Al Barari | Villa & Garden Pest Control | Prime Pest Control',
    metaDescription: `Pest control for Al Barari villas and gardens: mosquitoes, ants, termites, rodents, snakes and scorpions. Villa treatment from ${aed('general-villa')}.`,
    headline: 'Pest Control in Al Barari',
    answer:
      'Al Barari is Dubai\'s greenest villa community, with dense planting, lakes and streams. That makes mosquitoes, ants, termites and rodents the main pests, and snakes and scorpions possible in the gardens. Treatment has to cover the garden and water features, not only the villa.',
    body: [
      'Al Barari\'s villas sit inside thick landscaping with water running through the community. Moist soil and dense planting suit termites and ants, standing and slow water suit mosquitoes, and the cover and food draw rodents, which in turn attract snakes.',
      'We plan Al Barari treatments around the garden: perimeter and soil treatments, mosquito breeding-site treatment, rodent bait stations and termite checks, using methods that avoid harm to fish, pools and flowering plants.',
    ],
    pests: [
      { pest: 'Mosquitoes', why: 'Lakes, streams, water features and dense shade.', href: '/mosquito-control-dubai' },
      { pest: 'Ants', why: 'Large colonies in irrigated planting next to villas.', href: '/ant-control-dubai' },
      { pest: 'Termites', why: 'Moist soil and planting against walls.', href: '/termite-control' },
      { pest: 'Rats', why: 'Dense cover and water in the gardens.', href: '/rodent-control' },
      { pest: 'Snakes', why: 'Follow rodents and water into thick planting.', href: '/snake-removal-dubai' },
      { pest: 'Scorpions', why: 'Garden walls, stones and planting beds.', href: '/scorpion-control-dubai' },
    ],
    priceKeys: ['general-villa', 'mosquito', 'termite-inspection', 'annual-villa'],
    tips: [
      'Keep water features moving and clean; still water breeds mosquitoes within a week.',
      'Trim planting back from villa walls and windows.',
      'Use bait stations, not loose poison, in gardens with pets.',
      'Book a termite inspection once a year.',
    ],
    faqs: [
      { question: 'Can you control mosquitoes in an Al Barari garden?', answer: 'Yes. We treat breeding sites in water features, drains and planters and the resting areas in shaded planting, with products that are safe for fish when used correctly.' },
      { question: 'Do you offer annual contracts in Al Barari?', answer: `Yes. Quarterly visits plus call-outs, starting from ${aed('annual-villa')} a year for a villa.` },
      { question: 'What should I do if I see a snake in my Al Barari garden?', answer: 'Keep away, keep pets inside and send us a photo on WhatsApp. We remove it safely and check the garden for rodents and gaps.' },
    ],
    nearby: ['arabian-ranches', 'dubai-hills-estate', 'mirdif'],
    photos: {
      intro: { brief: 'Lush Al Barari villa garden with water feature, technician treating planting', alt: 'Prime Pest Control in al barari' },
      tips: { brief: 'Technician treating a water feature or planter for mosquito breeding', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'mirdif',
    name: 'Mirdif',
    homes: 'Family villas & townhouses',
    metaTitle: 'Pest Control Mirdif | Villa Pest Control & Termites | Prime Pest Control',
    metaDescription: `Pest control for Mirdif villas and townhouses: termites, cockroaches, rodents, ants and pigeons. Villa treatment from ${aed('general-villa')}, termite inspection from ${aed('termite-inspection')}.`,
    headline: 'Pest Control in Mirdif',
    answer:
      'Mirdif is an established family area of independent villas and townhouses with gardens. Older villas here are where termites, rodents and drain cockroaches show up most, together with ants in gardens and pigeons on roofs and AC units.',
    body: [
      'Many Mirdif villas are older than in newer communities, with wooden door frames, more gaps around pipes and doors, and mature gardens close to the walls. Those are the conditions termites and rodents need, and drain cockroaches come up through older drainage.',
      'We start Mirdif jobs with a walk-round of the plot, including the roof and garden, and recommend a termite inspection for villas that have never had one.',
    ],
    pests: [
      { pest: 'Termites', why: 'Older villas with wooden frames and mature gardens against the walls.', href: '/termite-control' },
      { pest: 'Cockroaches', why: 'American cockroaches from older drains, German in kitchens.', href: '/cockroach-control-dubai' },
      { pest: 'Rats and mice', why: 'Gardens, store rooms and roof spaces.', href: '/rodent-control' },
      { pest: 'Ants', why: 'Garden colonies trailing into kitchens.', href: '/ant-control-dubai' },
      { pest: 'Pigeons', why: 'Roofs, AC units and solar panels.', href: '/pigeon-control-dubai' },
    ],
    priceKeys: ['general-villa', 'termite-inspection', 'rodent', 'annual-villa'],
    tips: [
      'Have older villas checked for termites, especially door frames and kitchen cabinets.',
      'Fit drain covers and keep floor traps filled with water.',
      'Close gaps around AC pipes and roof access points.',
      'Keep the garden store room tidy and off the floor.',
    ],
    faqs: [
      { question: 'Are termites common in Mirdif villas?', answer: `They are a risk in older villas with wooden frames and gardens against the walls. A termite inspection, from ${aed('termite-inspection')}, tells you if there is activity.` },
      { question: 'Do you treat townhouses in Mirdif?', answer: 'Yes, townhouses and villas, inside and in the garden.' },
      { question: 'Can you get rid of drain cockroaches?', answer: 'Yes. We treat drains and floor traps and advise on covers and water seals so they cannot come back up.' },
    ],
    nearby: ['al-barari', 'arabian-ranches', 'al-barsha'],
    photos: {
      intro: { brief: 'Established Mirdif villa with mature garden, our service vehicle outside', alt: 'Prime Pest Control in mirdif' },
      tips: { brief: 'Technician checking a floor drain or treating a villa store room', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    homes: 'Beach villas & apartments',
    metaTitle: 'Pest Control Palm Jumeirah | Villas, Apartments & Holiday Homes | Prime Pest Control',
    metaDescription: `Pest control on Palm Jumeirah: villas on the fronds, apartments and holiday homes. Bed bugs, cockroaches, ants, pigeons and rodents. From ${aed('general-apartment')}.`,
    headline: 'Pest Control in Palm Jumeirah',
    answer:
      'On Palm Jumeirah the pest problems depend on the home: beach villas on the fronds see ants, rodents and pigeons in gardens and on roofs, while apartments and holiday homes on the trunk see cockroaches and bed bugs from guest turnover.',
    body: [
      'Palm Jumeirah combines villas with private gardens and beach access on the fronds, and apartment buildings and hotels along the trunk and crescent. Many homes are holiday lets, where bed bugs can arrive with guests and need fast, discreet treatment between bookings.',
      'We treat Palm villas inside and in the garden, apartments with targeted, tower-safe treatments, and work around holiday home schedules.',
    ],
    pests: [
      { pest: 'Bed bugs', why: 'Holiday homes and short lets with frequent guests.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Cockroaches', why: 'Kitchens and shared drains in apartment buildings.', href: '/cockroach-control-dubai' },
      { pest: 'Ants', why: 'Irrigated gardens and planters on the fronds.', href: '/ant-control-dubai' },
      { pest: 'Pigeons', why: 'Villa roofs, AC units and sea-view balconies.', href: '/bird-netting-dubai' },
      { pest: 'Rats', why: 'Gardens, beach-side planting and service areas.', href: '/rodent-control' },
    ],
    priceKeys: ['general-apartment', 'general-villa', 'bed-bug-apartment', 'bird-net'],
    tips: [
      'Holiday homes: check mattress seams and sofa joints between every guest.',
      'Villas: keep garden irrigation away from walls and doors.',
      'Do not leave food or bins on terraces overnight.',
      'Use UV-stable nets on sea-facing balconies; salt air wears cheap nets fast.',
    ],
    faqs: [
      { question: 'Do you treat holiday homes on Palm Jumeirah?', answer: 'Yes, discreetly and between bookings. For bed bugs we plan the two visits around your guests.' },
      { question: 'Do you treat villas on the Palm fronds?', answer: `Yes, inside, the garden and the perimeter, from ${aed('general-villa')}.` },
      { question: 'Can you stop pigeons on a Palm Jumeirah balcony?', answer: 'Yes, with UV-stable netting or spikes after a free measurement.' },
    ],
    nearby: ['dubai-marina', 'jlt', 'al-barsha'],
    photos: {
      intro: { brief: 'Palm Jumeirah frond villa or trunk apartments, technician or vehicle in front', alt: 'Prime Pest Control in palm jumeirah' },
      tips: { brief: 'Technician inspecting a holiday home mattress or fitting a sea-view balcony net', alt: 'Pest control technician at work' },
    },
  },
  {
    slug: 'discovery-gardens',
    name: 'Discovery Gardens',
    homes: 'Low-rise apartments',
    metaTitle: 'Pest Control Discovery Gardens | Apartment Pest Control | Prime Pest Control',
    metaDescription: `Pest control in Discovery Gardens apartments: cockroaches, bed bugs, ants, rodents and pigeons. Apartment treatment from ${aed('general-apartment')}. WhatsApp 055 304 5256.`,
    headline: 'Pest Control in Discovery Gardens',
    answer:
      'Discovery Gardens is a large community of low-rise apartment buildings around shared gardens. The most common problems are cockroaches from shared drains, bed bugs in rental flats, ants from the gardens and pigeons on balconies.',
    body: [
      'The buildings are grouped in themed clusters with landscaped courtyards between them. Ground and first-floor flats are close to the gardens, so ants and the occasional rodent come in more easily, and shared drains connect flats within each building.',
      'We treat Discovery Gardens flats in one visit with gel baits and targeted treatments, and building common areas on contract for owners associations.',
    ],
    pests: [
      { pest: 'Cockroaches', why: 'Shared drains and garbage areas in each building.', href: '/cockroach-control-dubai' },
      { pest: 'Bed bugs', why: 'Rental flats and shared accommodation.', href: '/bed-bug-treatment-dubai' },
      { pest: 'Ants', why: 'Courtyard gardens next to ground-floor flats.', href: '/ant-control-dubai' },
      { pest: 'Rats and mice', why: 'Gardens and garbage areas near lower floors.', href: '/rodent-control' },
      { pest: 'Pigeons', why: 'Balconies and AC units.', href: '/pigeon-control-dubai' },
    ],
    priceKeys: ['general-apartment', 'cockroach-apartment', 'bed-bug-apartment', 'move-in-apartment'],
    tips: [
      'Ground-floor flats: fit a door sweep on the garden-side door.',
      'Cover floor drains and keep traps filled with water.',
      'Moving in? Treat the empty flat before your furniture arrives.',
      'Ask the building to treat the garbage area at the same time.',
    ],
    faqs: [
      { question: 'How much is pest control in a Discovery Gardens apartment?', answer: `General treatment starts from ${aed('general-apartment')} for a studio or 1-bedroom; cockroach-only treatment from ${aed('cockroach-apartment')}.` },
      { question: 'I am moving into Discovery Gardens. Should I treat first?', answer: `Yes. Treating the empty flat is the most thorough and easiest moment; move-in treatment starts from ${aed('move-in-apartment')}.` },
      { question: 'Do you treat whole buildings?', answer: 'Yes, common areas, garbage rooms and drains on contract for owners associations.' },
    ],
    nearby: ['jlt', 'dubai-marina', 'jvc'],
    photos: {
      intro: { brief: 'Discovery Gardens low-rise building and courtyard, technician at the entrance', alt: 'Prime Pest Control in discovery gardens' },
      tips: { brief: 'Technician fitting a door sweep on a ground-floor flat garden door', alt: 'Pest control technician at work' },
    },
  },
];

// Batch 1 (this file) + batch 2 (communitiesMore.ts)
export const COMMUNITIES: Community[] = [...FIRST_COMMUNITIES, ...MORE_COMMUNITIES];

export const COMMUNITY_SLUGS = COMMUNITIES.map((c) => `pest-control-${c.slug}`);

export function getCommunityBySlug(slug: string): Community | null {
  return COMMUNITIES.find((c) => `pest-control-${c.slug}` === slug) ?? null;
}
