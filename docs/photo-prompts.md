# Page Photo Prompts (Stand-in Photos Until the Real Job Photos)

Every service page and area page has two photo slots (110 in total, list in `docs/photo-shot-list.md`).
Until the team has real job photos, each slot gets an honest stand-in from one of four groups. The stand-ins
replace the current American stock photos (pickup trucks, US houses) that the live site shows today.

| Group | What | Where from | Slots |
|---|---|---|---|
| **A** | The area itself (towers, villa streets) | **Real free photos**, never AI | 22 |
| **B** | Pest or sign close-up (droppings, mud tubes, nests) | Free photo first, otherwise ChatGPT | 22 |
| **C** | Method or result, no people (net, spikes, bait station) | ChatGPT or free photo | 19 |
| **D** | Work in progress, **hands only** (no face, no logo) | ChatGPT or free photo | 47 |

## Rules (read once)

- **Never take photos from Google Images**, not even edited in ChatGPT. They belong to someone else.
- **Free photos only from:** [Unsplash](https://unsplash.com), [Pexels](https://www.pexels.com) (both free for
  business use, no credit needed) and [Wikimedia Commons](https://commons.wikimedia.org) (check the licence on
  the photo page: CC0 or "Public domain" is easiest; "CC BY" or "CC BY-SA" is fine but needs a credit line,
  so copy the author name and licence and send it to me with the photo).
- **No AI images of the area** (Group A): AI invents buildings that do not exist, and people who live there notice.
- **No AI images of a whole technician** in our uniform: that would look like a real job and it is not. Hands,
  gloves and tools only. The real team photos come later from the job list in `docs/photo-shot-list.md`.
- **No other company's logo or name** visible (vans, uniforms, shop signs).

## How to Generate (Groups B, C, D)

1. In ChatGPT, paste the **style block** of the group, then the **subject line** of the photo, in one message.
2. Ask for a **landscape** image (ChatGPT makes 1536 × 1024; I crop it to 4:3).
3. Make 2 or 3 versions and pick the most natural one (check "Before You Save").
4. Save it with its **key** as the file name, for example `cockroach-control-dubai-intro.png`.

Send me the folder (or the files). I check each one, crop it to 4:3, save a 1200 × 900 WebP under 250 KB
(`node scripts/add-page-photos.mjs <folder>`) and put it in its slot. Desktop and phone screenshots before
anything goes live.

### Style Block B: Pest or Sign Close-up

> Realistic close-up photograph taken with a phone camera in a modern Dubai apartment or upscale villa
> (contemporary finishes: quartz or marble, white walls, porcelain tiles), natural indoor or daylight,
> slightly imperfect framing and real everyday use (light dust, a few crumbs), shallow depth of field,
> true-to-life colours, no glossy or cinematic look, not a studio shot. Scientifically accurate insect anatomy.
> No text, no labels, no logos, no watermark, no people. Landscape 3:2.

### Style Block C: Method or Result, No People

> Realistic documentary photograph of pest control or bird control work in Dubai, taken by a technician on a
> phone camera, natural daylight, modern Dubai: high-rise apartment towers with glass balcony railings, upscale
> villa communities with landscaped gardens, hotels and restaurants, contemporary finishes, true-to-life
> colours, slightly imperfect framing, no HDR,
> no cinematic look. No people, no text, no readable labels, no logos, no watermark. Landscape 3:2.

### Style Block D: Hands-only Work Photo

> Realistic documentary photograph of a pest control technician at work in Dubai, showing only the forearms and
> hands in black nitrile gloves and plain dark sleeves (no logo, no face, no body), taken by a colleague on a
> phone camera, natural light, a modern Dubai apartment, upscale villa, hotel or restaurant with contemporary
> finishes, true-to-life colours, slightly imperfect
> framing, no HDR, no cinematic look. Professional equipment that looks used, not new. No text, no readable
> labels, no logos, no watermark. Landscape 3:2.

### Negative Prompt (tools with a separate field)

> face, person, full body, uniform logo, text, letters, watermark, logo, brand name, cartoon, illustration,
> 3D render, painting, HDR, cinematic, oversaturated, extra fingers, deformed hands, extra legs, missing legs,
> duplicate insects, frame, border

### Before You Save

- **Hands:** five fingers, natural grip, gloves fit. AI often gets this wrong.
- **Insects:** 6 legs; spiders, camel spiders (look like 10 because of the long palps) and adult ticks 8.
- **No fake writing:** labels, screens and signs should be blank or out of focus, not gibberish letters.
- **Looks like Dubai:** no American houses, wooden fences, lawns with picket fences, US power sockets
  (UK-style 3-pin sockets in the UAE), no snow, no red-brick walls.
- **Subject big enough:** the photo shows at about 600 px wide on desktop and 340 px on phones. An insect
  should be clearly visible at that size, so add "close framing, the insect large in frame" if it comes out tiny.
- **Modern expat Dubai (owner, 28 Nov 2026):** towers, modern apartments, upscale villa communities
  (Arabian Ranches, Dubai Hills, Palm, Emirates Hills), hotels. Not old sand-render houses or traditional
  local style. Desert only where the pest needs it (scorpions, camel spiders), with a modern villa community
  at the edge. No outdoor AC units on tower balconies (towers mostly have central AC).
- **Not too perfect:** a real kitchen has a kettle and a bit of clutter. Too clean and shiny looks AI.

---

## Group A: Area Photos (22, real free photos only)

Search the three sites with the words given. Pick a **landscape** photo, at least 1600 px wide, daylight, where
the area is easy to recognise, without big ads or other company logos. People small in the distance are fine.
If none of the sites has a good one (likely for International City, Discovery Gardens, Dubai South, Mirdif):
**take it yourself on your phone** next time the team passes by. Landscape, daylight, from the street. That is
the best photo of all, and it is ours.

| # | Key | Search words | Look for |
|---|---|---|---|
| 67 | `pest-control-dubai-marina-intro` | Dubai Marina | Towers along the marina canal |
| 69 | `pest-control-jvc-intro` | Jumeirah Village Circle; JVC Dubai | Mid-rise buildings or townhouse street |
| 71 | `pest-control-jlt-intro` | Jumeirah Lake Towers; JLT Dubai | Towers around the lakes |
| 73 | `pest-control-al-barsha-intro` | Al Barsha Dubai; Barsha Heights | Villa street or the Barsha Heights towers |
| 75 | `pest-control-arabian-ranches-intro` | Arabian Ranches Dubai | Villas with gardens, palm-lined road |
| 77 | `pest-control-dubai-hills-estate-intro` | Dubai Hills Estate; Dubai Hills Park | Park or golf landscaping with homes |
| 79 | `pest-control-al-barari-intro` | Al Barari Dubai | Green villa gardens, water features |
| 81 | `pest-control-mirdif-intro` | Mirdif Dubai | Villa street with mature trees |
| 83 | `pest-control-palm-jumeirah-intro` | Palm Jumeirah | Frond villas or the trunk apartments (aerial is fine) |
| 85 | `pest-control-discovery-gardens-intro` | Discovery Gardens Dubai | Low-rise buildings and courtyard |
| 87 | `pest-control-business-bay-intro` | Business Bay Dubai; Dubai Canal | Towers along the canal |
| 89 | `pest-control-downtown-dubai-intro` | Downtown Dubai | Downtown towers and boulevard |
| 91 | `pest-control-jumeirah-intro` | Jumeirah Dubai villas; Umm Suqeim | Low villa street near the beach road |
| 93 | `pest-control-dubai-silicon-oasis-intro` | Dubai Silicon Oasis | Buildings or villas in DSO |
| 95 | `pest-control-the-springs-meadows-intro` | The Springs Dubai; The Meadows Dubai; Emirates Living | Townhouses or villas by the lake |
| 97 | `pest-control-jumeirah-park-islands-intro` | Jumeirah Islands; Jumeirah Park Dubai | Villas by the water or with gardens |
| 99 | `pest-control-damac-hills-intro` | DAMAC Hills; Akoya Dubai | Villas or townhouses with golf course |
| 101 | `pest-control-motor-city-sports-city-intro` | Motor City Dubai; Dubai Sports City; Dubai Studio City | Buildings and townhouses |
| 103 | `pest-control-international-city-intro` | International City Dubai | Themed building clusters |
| 105 | `pest-control-deira-intro` | Deira Dubai; Dubai Creek Deira | Older buildings, creek or street |
| 107 | `pest-control-dubai-south-intro` | Dubai South; Expo City Dubai | New homes or the district |
| 109 | `pest-control-dubailand-intro` | Town Square Dubai; Mudon Dubai; Villanova Dubai | Townhouse community |

---

## Groups B, C and D: Service Pages

Paste the style block of the group, then the subject line.

| # | Key | Group | Subject line |
|---|---|---|---|
| 1 | `home-intro` | D | Gloved hands holding a slim professional gel applicator and a torch next to an open kitchen cabinet in a modern Dubai apartment, city towers soft and blurred through the window. |
| 2 | `home-signs` | B | Inside corner of a kitchen cabinet hinge with small dark cockroach droppings, a brown cockroach egg case and one small light-brown German cockroach. |
| 3 | `cockroach-control-dubai-intro` | D | Gloved hand applying small dots of cockroach gel bait with a slim gel applicator into the hinge of an open kitchen cabinet, close-up, apartment kitchen. |
| 4 | `cockroach-control-dubai-signs` | B | Floor corner behind a moved fridge with cockroach droppings, two egg cases and one German cockroach, white floor tiles and a power cable. |
| 5 | `bed-bug-treatment-dubai-intro` | D | Gloved hand shining a small torch along the seam of a mattress in a Dubai bedroom, the sheet pulled back, beam of light on the seam. |
| 6 | `bed-bug-treatment-dubai-signs` | B | Macro of a white mattress seam with dark rusty bed bug spots, pale shed skins, tiny white eggs and one adult bed bug (flat, reddish brown, apple-seed size). |
| 7 | `termite-control-intro` | D | Gloved hand pressing a pin moisture meter against the bottom of a wooden door frame in a Dubai villa, display blank or out of focus. |
| 8 | `termite-control-signs` | B | Termite mud tubes running up a painted villa wall from the floor tile joint, close-up, sand-coloured paint. |
| 9 | `pre-construction-termite-treatment-dubai-intro` | D | Close-up of a gloved hand holding a spray lance wetting compacted soil in a foundation trench, rebar and timber formwork, Dubai construction site in bright sun. |
| 10 | `pre-construction-termite-treatment-dubai-signs` | C | Levelled compacted soil under a ground slab area covered partly with polythene sheet, plumbing pipes coming up through it, construction site in Dubai. |
| 11 | `rodent-control-intro` | C | Black locked tamper-resistant rodent bait station on the ground along a sand-coloured villa boundary wall, garden gravel and a small plant. |
| 12 | `rodent-control-signs` | B | Store room shelf corner with rodent droppings, a gnawed cable and a chewed food packet, real dusty surface. |
| 13 | `pigeon-control-dubai-intro` | C | Dubai apartment balcony with a nearly invisible black pigeon net fitted across the opening, outdoor split AC unit clean, towers in the background. |
| 14 | `pigeon-control-dubai-signs` | B | Flat scruffy pigeon nest of twigs and feathers in the corner of a modern Dubai apartment tower balcony next to a planter, heavy white droppings on the ledge, tiles and glass railing base, one grey pigeon nearby. No AC unit. |
| 15 | `bird-netting-dubai-intro` | C | View from inside a Dubai apartment balcony through a finished fine black bird net, the city clearly visible through it, neat edges. |
| 16 | `bird-netting-dubai-signs` | D | Gloved hands fixing net clips onto a thin stainless steel cable along the edge of a balcony, the net and towers behind. |
| 17 | `commercial-pest-control-dubai-intro` | D | Gloved hand holding a tablet with a blank checklist screen in a stainless steel commercial kitchen after closing, lights dimmed. |
| 18 | `commercial-pest-control-dubai-signs` | C | Small insect monitoring station and a black bait station under metal shelving in a food store room, boxes on the shelves with no readable labels. |
| 19 | `tick-control-dubai-intro` | D | Gloved hand with a spray lance treating cracks in patio tiles and the garden border next to a dog kennel, ground-floor garden in Dubai. |
| 20 | `tick-control-dubai-signs` | B | Several brown dog ticks crawling in a crack of a painted wall next to a door frame, macro, 8 legs each. |
| 21 | `villa-pest-control-dubai-intro` | D | Gloved hand with a spray lance treating the base of a sand-coloured villa wall along the garden bed, palm and planting, Dubai sun. |
| 22 | `villa-pest-control-dubai-signs` | C | Garden drip irrigation line running against a villa wall with a damp patch at the base, gravel and planter, Dubai villa. |
| 23 | `apartment-pest-control-dubai-intro` | D | Gloved hands with a torch and gel applicator under an open kitchen sink cabinet, pipes and a waste bin visible. |
| 24 | `apartment-pest-control-dubai-signs` | B | Several small German cockroaches around a stainless steel floor drain on bathroom tiles. |
| 25 | `move-in-pest-control-dubai-intro` | C | Empty Dubai apartment kitchen with all cabinet doors and drawers open, bare counters, daylight, nobody living there yet. |
| 26 | `move-in-pest-control-dubai-signs` | C | Sealed moving boxes stacked by the front door of an empty Dubai apartment, keys on top, daylight. |
| 27 | `lizard-control-dubai-intro` | B | Pale house gecko on a sand-coloured wall next to an outdoor wall light at dusk on a Dubai balcony, small moths around the light. |
| 28 | `lizard-control-dubai-signs` | D | Gloved hand with a sealant tube applicator sealing the gap around an AC pipe where it enters the wall. |
| 29 | `snake-removal-dubai-intro` | C | Snake tongs and a closed clear plastic snake container standing on villa garden gravel, garden wall behind. |
| 30 | `snake-removal-dubai-signs` | C | Gap under a metal villa garden gate and a hole at the base of the boundary wall, sand drifted in. |
| 31 | `disinfection-services-dubai-intro` | D | Gloved hand wiping a door handle with a cloth after spraying disinfectant, kitchen in the background. |
| 32 | `disinfection-services-dubai-signs` | B | Balcony floor tiles and ledge covered in pigeon droppings and feathers before cleaning. |
| 33 | `bird-control-dubai-intro` | C | Stainless steel bird spikes fitted along a villa roof parapet, blue sky, a balcony with netting in the background. |
| 34 | `bird-control-dubai-signs` | C | Close-up of a window ledge with stainless steel bird spikes and a thin bird wire on the railing beside it. |
| 35 | `mynah-bird-control-intro` | B | Two common mynahs (brown body, black head, yellow eye patch and beak) on the edge of a villa roof in Dubai. |
| 36 | `mynah-bird-control-signs` | B | Bird nest material (dry grass, plastic bits) pushed into the hole around an AC pipe in an outside wall. |
| 37 | `solar-panel-bird-proofing-dubai-intro` | C | Rooftop solar panels on a Dubai villa with a black wire mesh skirt fitted all around the panel edges. |
| 38 | `solar-panel-bird-proofing-dubai-signs` | B | The gap under rooftop solar panels with a pigeon nest, droppings and feathers, villa roof. |
| 39 | `ant-control-dubai-intro` | D | Gloved hand placing small drops of ant bait gel along a kitchen skirting board. |
| 40 | `ant-control-dubai-signs` | B | Trail of tiny ants on a kitchen counter leading to a small sugar spill. |
| 41 | `mosquito-control-dubai-intro` | D | Gloved hand sprinkling larvicide granules into a garden water feature in a Dubai villa garden. |
| 42 | `mosquito-control-dubai-signs` | B | Plant saucer with standing water and mosquito larvae under a potted plant on a terrace. |
| 43 | `pest-control-for-fleas-intro` | D | Gloved hand with a sprayer treating along the carpet edge under a sofa, a pet bed nearby. |
| 44 | `pest-control-for-fleas-signs` | B | Light-coloured pet bedding with tiny dark flea dirt specks and one flea, macro. |
| 45 | `hornet-nest-removal-intro` | D | Hands in thick protective gloves with a dust applicator aimed at a gap in a villa garden wall. |
| 46 | `hornet-nest-removal-signs` | B | Oriental hornets (reddish brown with a yellow band) flying in and out of a hole in sandy ground. |
| 47 | `scorpion-control-dubai-intro` | D | Gloved hand with a spray lance treating the base of a villa garden wall, desert sand beyond the wall. |
| 48 | `scorpion-control-dubai-signs` | D | Gloved hands fitting a rubber door sweep to the bottom of a villa garden door, a visible gap under the door. |
| 49 | `spider-control-dubai-intro` | D | Gloved hand with a web brush on a pole removing cobwebs from a villa ceiling corner. |
| 50 | `spider-control-dubai-signs` | B | Spider webs around an outdoor wall light and window frame on a villa, one small spider. |
| 51 | `camel-spider-control-dubai-intro` | D | Gloved hand with a spray lance treating the edge of a villa garage floor, desert sand outside. |
| 52 | `camel-spider-control-dubai-signs` | B | Camel spider (solifuge, sandy colour, large jaws, long palps) on villa patio tiles at night, photographed from a distance. |
| 53 | `drain-fly-control-dubai-intro` | D | Gloved hand pouring foam drain treatment into a stainless steel bathroom floor drain. |
| 54 | `drain-fly-control-dubai-signs` | B | Small fuzzy grey drain flies (moth flies) resting on white bathroom wall tiles near the shower. |
| 55 | `silverfish-control-dubai-intro` | D | Gloved hand with a torch and gel applicator at the gap behind a bathroom vanity unit. |
| 56 | `silverfish-control-dubai-signs` | B | Silverfish (silver, teardrop shape, three tail bristles) on bathroom floor tiles. |
| 57 | `residential-pest-control-intro` | C | Pest control kit (pressure sprayer, gel applicator, torch, tool bag) placed by the front door in a Dubai apartment corridor. |
| 58 | `residential-pest-control-signs` | D | Gloved hand pointing at a simple floor plan sketch on a clipboard on a kitchen counter, no readable text. |
| 59 | `fumigation-services-dubai-intro` | C | Stack of goods on pallets in a warehouse sealed under a gas-tight fumigation sheet with sand snakes along the bottom, warning sign blank. |
| 60 | `fumigation-services-dubai-signs` | C | Stack of wooden export pallets with a heat-treatment stamp burned into the wood, warehouse floor. |
| 61 | `restaurant-pest-control-dubai-intro` | D | Gloved hand shining a torch under a stainless steel commercial cooking line after closing, clean floor. |
| 62 | `restaurant-pest-control-dubai-signs` | D | Gloved hand handing a clipboard with a service report (no readable text) across a stainless steel counter. |
| 63 | `office-pest-control-dubai-intro` | D | Gloved hand applying gel bait inside an office pantry cabinet in the evening, empty desks blurred behind. |
| 64 | `office-pest-control-dubai-signs` | D | Gloved hand holding a torch into an opened false ceiling tile, cable tray visible. |
| 65 | `fly-control-dubai-intro` | C | Insect light trap fixed on a commercial kitchen wall, blue light on, stainless steel worktop below. |
| 66 | `fly-control-dubai-signs` | B | Flies around an open overflowing bin next to a floor drain behind a restaurant. |

## Group D and C: Area Pages, "Local Tips" Photo

Same style blocks. Make each one a little different (a different room, angle or light), so no two pages
share the same picture.

| # | Key | Group | Subject line |
|---|---|---|---|
| 68 | `pest-control-dubai-marina-tips` | D | Gloved hands fixing a bird net clip on a high balcony, marina towers soft and blurred behind. |
| 70 | `pest-control-jvc-tips` | D | Gloved hand with a spray lance along a small townhouse garden border, low boundary wall, mid-rise buildings behind. |
| 72 | `pest-control-jlt-tips` | D | Gloved hand applying gel bait under an office pantry counter, lake towers blurred through the window. |
| 74 | `pest-control-al-barsha-tips` | D | Gloved hand with a moisture meter on an older villa's wooden door frame, worn paint. |
| 76 | `pest-control-arabian-ranches-tips` | D | Gloved hands fitting a door sweep to a villa garden door, desert-style landscaping outside. |
| 78 | `pest-control-dubai-hills-estate-tips` | D | Gloved hand placing ant bait gel along the track of a garden-side sliding door, green park outside. |
| 80 | `pest-control-al-barari-tips` | D | Gloved hand sprinkling larvicide granules into a large planter by a lush garden water feature. |
| 82 | `pest-control-mirdif-tips` | D | Gloved hand with a torch checking a floor drain in a villa store room. |
| 84 | `pest-control-palm-jumeirah-tips` | D | Gloved hand with a torch along a mattress seam in a holiday home bedroom, sea view blurred through the window. |
| 86 | `pest-control-discovery-gardens-tips` | D | Gloved hands fitting a door sweep to the garden door of a ground-floor flat, small patio outside. |
| 88 | `pest-control-business-bay-tips` | D | Gloved hands tensioning a stainless steel cable for a balcony net, canal-side towers blurred behind. |
| 90 | `pest-control-downtown-dubai-tips` | D | Gloved hand lifting a mattress corner with a torch in a modern serviced apartment bedroom. |
| 92 | `pest-control-jumeirah-tips` | D | Gloved hand tapping an older arched wooden villa door frame with a screwdriver handle to check for termites. |
| 94 | `pest-control-dubai-silicon-oasis-tips` | D | Gloved hand applying gel bait into a kitchen cabinet hinge in a compact apartment kitchen. |
| 96 | `pest-control-the-springs-meadows-tips` | D | Gloved hand emptying standing water from a plant saucer in a townhouse garden by a lake. |
| 98 | `pest-control-jumeirah-park-islands-tips` | C | Snake tongs and a clear secure container on the lawn edge of a large villa garden. |
| 100 | `pest-control-damac-hills-tips` | D | Gloved hand with a spray lance along a villa garden boundary wall, golf course greenery beyond. |
| 102 | `pest-control-motor-city-sports-city-tips` | D | Gloved hand with a spray lance treating the border of a ground-floor patio and grass. |
| 104 | `pest-control-international-city-tips` | D | Gloved hand with a torch under a small kitchen sink in a compact older apartment. |
| 106 | `pest-control-deira-tips` | D | Gloved hand with a torch checking shelving in a shop store room with cartons (no readable labels). |
| 108 | `pest-control-dubai-south-tips` | C | Brand new empty apartment kitchen with protective film on the counters and open cabinets. |
| 110 | `pest-control-dubailand-tips` | D | Gloved hand with a spray lance along a townhouse garden wall at the desert edge. |

## Order of Work

1. **Group A** (22 area photos): biggest gain, all real photos, no AI.
2. The **signs** photos on the busiest service pages: birds, cockroach, bed bugs, rodents, scorpion.
3. The rest of B, C and D.

When a real job photo of the same slot exists, it replaces the stand-in (same key, same file name).
