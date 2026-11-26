# Pest image list

Tiles in the "What we treat" grids and hero pest icons that still use a stand-in image. Generated from
`src/config/pageContent.ts` (21 Nov 2026). The site works without them; each tile shows the stand-in until the
real image is added.

**Style:** the same style as the existing pest icons: the pest (or the sign / method) cut out on a plain white
or transparent background, centred, no text. Real photos preferred; for methods (nets, spikes) a clear close-up.

**Ready-made image prompts for every image below:** `docs/pest-image-prompts.md`.

**Files (3 per image), in `public/assets/img/pests/`, WebP with transparency (same as the existing ones):**
`<key>.webp` (300 × 300), `<key>-d.webp` (150 × 150) and `<key>-m.webp` (100 × 100). Once the 3 files are in
place, remove the key from `PEST_IMAGE_FALLBACKS` in `src/config/pageContentHelpers.ts`.

Sorted by how many pages use the tile (most first).

| # | Tile | File key | What the image should show | Stand-in now | Pages |
|---|---|---|---|---|---|
| 1 | Bird Spikes | `bird-spikes` | Stainless steel bird spikes fixed on a ledge or parapet (method) | bird | 5 |
| 2 | Camel Spider | `camel-spider` | Camel spider (solifuge): large sandy-coloured arachnid with big jaws | wolf-spider | 5 |
| 3 | Subterranean Termite | `subterranean-termite` | Subterranean termite worker: creamy-white soft-bodied termite (the type that damages Dubai villas) | eastern-subterranean-termite | 5 |
| 4 | Bird Netting | `bird-netting` | Bird net installed on a balcony or terrace (method) | bird | 4 |
| 5 | Bird Wire | `bird-wire` | Tensioned bird wire along a ledge or railing (method) | bird | 4 |
| 6 | Solar Panel Mesh | `solar-panel-mesh` | Mesh skirt fitted around the edge of rooftop solar panels (method) | bird | 4 |
| 7 | Fruit Fly | `fruit-fly` | Fruit fly (vinegar fly) with red eyes | friut-flies | 3 |
| 8 | Brown Widow | `brown-widow` | Brown widow: brown spider with an orange hourglass mark | common-house-spider | 2 |
| 9 | False Black Widow | `false-black-widow` | False black widow: dark brown spider with a round body | common-house-spider | 2 |
| 10 | Harvester Termite | `harvester-termite` | Harvester termite: desert termite, darker body, as found in UAE villa gardens | termite | 2 |
| 11 | Pigeon Droppings | `pigeon-droppings` | Pigeon droppings on a balcony floor or railing (sign) | pigeon | 2 |
| 12 | Pigeon Nest | `pigeon-nest` | Pigeon nest with eggs behind an outdoor AC unit (sign) | pigeon | 2 |
| 13 | Termite Damage | `termite-damage` | Termite-damaged wood: hollowed door frame or skirting with soil inside (sign) | termite | 2 |
| 14 | Termite Mud Tubes | `termite-mud-tubes` | Termite mud tubes running up a wall or column (sign) | termite | 2 |
| 15 | Yellow Sac Spider | `yellow-sac-spider` | Yellow sac spider: pale yellow spider | common-house-spider | 2 |
| 16 | Ant Trail | `ant-trail` | Trail of small ants along a kitchen counter or skirting board (sign) | ant | 1 |
| 17 | Arab Carpenter Bee | `arab-carpenter-bee` | Arab carpenter bee: large black bee | eastern-carpenter-bee | 1 |
| 18 | Arabian Spiny Mouse | `arabian-spiny-mouse` | Arabian spiny mouse (Acomys dimidiatus): sandy mouse with spiny back fur | house-mouse | 1 |
| 19 | Balcony Net | `balcony-net` | Finished balcony pigeon net on a Dubai apartment | bird | 1 |
| 20 | Big-headed Ant | `big-headed-ant` | Big-headed ant: small brown ant, major worker with an oversized head | pavement-ant | 1 |
| 21 | Bird Gel | `bird-gel` | Bird repellent gel dishes on a ledge (method) | bird | 1 |
| 22 | Black Garden Ant | `black-garden-ant` | Black garden ant: medium black ant, as seen trailing from villa gardens into kitchens | black-ant | 1 |
| 23 | Brown Dog Tick Nymph | `brown-dog-tick-nymph` | Brown dog tick nymph: small eight-legged tick, lighter colour | brown-dog-tick | 1 |
| 24 | Camel Tick | `camel-tick` | Camel tick (Hyalomma dromedarii) | blacklegged-tick | 1 |
| 25 | Car Park Net | `car-park-net` | Netting under the roof of a car park or loading bay | bird | 1 |
| 26 | Cockroach Droppings | `cockroach-droppings` | Cockroach droppings: black pepper-like specks in a cabinet hinge or drawer (sign) | roach | 1 |
| 27 | Cockroach Egg Case | `cockroach-egg-case` | Cockroach egg case (ootheca): brown capsule about 8 mm long | roach | 1 |
| 28 | Common House Mosquito | `common-house-mosquito` | Common house mosquito (Culex pipiens): brown mosquito | northern-house-mosquito | 1 |
| 29 | Engorged Tick | `engorged-tick` | Engorged brown dog tick: swollen grey tick after feeding | brown-dog-tick | 1 |
| 30 | Flea Eggs | `flea-eggs` | Flea eggs: tiny white oval eggs on pet bedding | flea | 1 |
| 31 | Flea Larvae | `flea-larvae` | Flea larvae: tiny white worm-like larvae in carpet fibres | flea | 1 |
| 32 | Fly Larvae | `fly-larvae` | Fly larvae (maggots) in a bin or waste area (sign) | fly | 1 |
| 33 | Garden Ant Nest | `garden-ant-nest` | Ant nest mound in a villa garden or between paving stones (sign) | ant | 1 |
| 34 | German Cockroach Nymph | `german-cockroach-nymph` | German cockroach nymph: small, dark, wingless young cockroach with a light stripe | german-cockroach | 1 |
| 35 | Ghost Ant | `ghost-ant` | Ghost ant (Tapinoma melanocephalum): tiny ant with dark head and pale, almost see-through body | pharaoh-ant | 1 |
| 36 | House Fly | `house-fly` | House fly | fly | 1 |
| 37 | Hyalomma Tick | `hyalomma-tick` | Hyalomma tick: large tick with banded legs, common on livestock in the UAE | blacklegged-tick | 1 |
| 38 | Insect Light Trap | `insect-light-trap` | Insect light trap (fly catcher) mounted on a kitchen wall | fly | 1 |
| 39 | Longhorn Crazy Ant | `longhorn-crazy-ant` | Longhorn crazy ant: dark, long-legged ant with long antennae | black-ant | 1 |
| 40 | Malaria Mosquito | `malaria-mosquito` | Malaria mosquito (Anopheles): mosquito resting at an angle, spotted wings | northern-house-mosquito | 1 |
| 41 | Midges | `midges` | Non-biting midges swarming near a lake or water feature | gnat | 1 |
| 42 | Mosquito Breeding Water | `mosquito-breeding-water` | Standing water in a plant saucer, bucket or pool cover where mosquitoes breed (sign) | mosquito | 1 |
| 43 | Mosquito Larvae | `mosquito-larvae` | Mosquito larvae wriggling just under the water surface | mosquito | 1 |
| 44 | Moth Fly | `moth-fly` | Moth fly / drain fly: small fuzzy fly with leaf-shaped wings | fly | 1 |
| 45 | Oriental Hornet | `oriental-hornet` | Oriental hornet (Vespa orientalis): reddish-brown hornet with yellow bands, the main hornet in Dubai | paper-wasp | 1 |
| 46 | Pigeon Tick | `pigeon-tick` | Pigeon tick (Argas reflexus): flat soft tick from pigeon nests | blacklegged-tick | 1 |
| 47 | Rodent Droppings | `rodent-droppings` | Rat or mouse droppings on a store-room floor or shelf (sign) | rodent | 1 |
| 48 | Sand Fly | `sand-fly` | Sand fly: very small, hairy, pale brown fly with wings held in a V | gnat | 1 |
| 49 | Sand Rat | `sand-rat` | Sand rat: plump sandy-coloured desert rodent | house-mouse | 1 |
| 50 | Shipping Container | `shipping-container` | Shipping container sealed under a fumigation sheet with warning sign | commercial-pc | 1 |
| 51 | Stored Product Moth | `stored-product-moth` | Stored product moth (Indian meal moth) on a sack of grain or rice | weevil | 1 |
| 52 | Termite Soldier | `termite-soldier` | Termite soldier: white body with a large brown head and jaws | termite | 1 |
| 53 | Termite Worker | `termite-worker` | Termite worker: small creamy-white termite | termite | 1 |
| 54 | Terrace Net | `terrace-net` | Net covering a villa terrace or courtyard | bird | 1 |
| 55 | Tick Eggs | `tick-eggs` | Tick egg mass: cluster of tiny brown eggs in a crack | brown-dog-tick | 1 |
| 56 | Tick Larvae | `tick-larvae` | Tick larvae: very small six-legged ticks clustered on a wall or skirting | brown-dog-tick | 1 |
| 57 | Winged Termite | `winged-termite` | Winged termite (swarmer / alate) with long equal-sized wings | termite | 1 |
| 58 | Wooden Pallets | `wooden-pallets` | Stack of wooden pallets with the ISPM 15 stamp visible | commercial-pc | 1 |

## Existing images to replace

These files exist but show the wrong thing or do not match the style.

| File key | Problem | What it should show | Used on |
|---|---|---|---|
| `mynah` | Showed a bird of prey; until the real one exists the site shows the generic `bird` image (`PEST_IMAGE_FALLBACKS`). After adding it, remove `mynah` from the fallbacks | Common mynah: brown bird with black head, yellow beak and yellow eye patch | All bird pages, Mynah control |
| `house-crow` | Fixed 25 Nov 2026 (yellow and grey background removed by `scripts/fix-crow-background.mjs`); a better photo is still welcome | House crow (grey neck, black body) on a plain white background | All bird pages |

## Still missing (tiles removed until the image exists)

| Key | What it should show | Where to add it back |
|---|---|---|
| `house-gecko` | House gecko (pale, see-through skin) on a white background | First tile of the Lizard page hero (`pageContent.ts`, `/lizard-control-dubai` `pestIcons`) |
| `snake` | A Gulf sand snake or similar local snake, coiled, on a white background | First tile of the Snake page hero (`pageContent.ts`, `/snake-removal-dubai` `pestIcons`) |
