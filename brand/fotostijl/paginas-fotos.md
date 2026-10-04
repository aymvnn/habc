# DUKAAT — foto's voor de binnenpagina's

Prompt-sheet gemaakt met het stijlboek [DUKAAT-fotostijl.md](DUKAAT-fotostijl.md) ("Known Weight"), bij het websiteplan [../websiteplan.md](../websiteplan.md). 86 beelden, in de volgorde van de site.

**Zo worden ze gemaakt:** `npm run photos -- --sheet brand/fotostijl/paginas-fotos.md --n 2 --check` (Gemini-API: Nano Banana 2 op 2K, de brede 21:9-banden Nano Banana Pro op 4K). Vergelijken in `flow-export/overzicht-paginas.html`, keuzes in `flow-export/keuze.json`, daarna `python scripts/export-photos.py` en `python scripts/build-photo-registry.py`.

**In Google Flow:** kies de verhouding waarmee de prompt eindigt en snijd bij naar het formaat: 21:9 (kies 16:9), 4:5 (kies 3:4), 3:2 (kies 4:3).

---

### about-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Beide · **Komt op:** `public/photos/pages/about-hero.jpg`

```
Create a photorealistic editorial photograph. A quiet interior view at standing eye level with a 50mm lens across an entrance hall of honed travertine and pale oak, where two garments hang side by side on wooden hangers from a slim oak rail, a charcoal wool overcoat and a dark brown bisht with a narrow, muted braid at its edge. Below them a long oak bench holds a pewter dish and a pair of oxblood leather gloves, left on arrival. The two sides mirror each other across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A charcoal wool overcoat and a dark brown bisht hang side by side above an oak bench with oxblood gloves.
**Alt NL:** Een antracieten wollen overjas en een donkerbruine bisht hangen naast elkaar boven een eiken bank met oxblood handschoenen.
**Alt AR:** معطف صوفي رمادي فحمي وبشت بني داكن معلّقان جنبًا إلى جنب فوق مقعد من خشب البلوط عليه قفازان جلديان عنابيّان.

### about-maker

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Egypte · **Komt op:** `public/photos/pages/about-maker.jpg`

```
Create a photorealistic editorial photograph. A wide view at standing eye level with a 35mm lens down the aisle of a clean, quiet weaving mill, a row of modern looms at rest on the left third, their control panels dark and their steel plates plain, fine warp threads of undyed cotton drawn taut across them. Bolts of undyed fine cotton cloth in white and natural cream rest on steel racks along the pale concrete floor, and a carved wooden mashrabiya screen of finely turned spindles fills a tall opening in the far wall. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Modern looms at rest in a weaving mill, with bolts of undyed cotton on steel racks and a wooden mashrabiya.
**Alt NL:** Moderne weefgetouwen in rust in een schone weverij, met rollen ongeverfd katoen op stalen rekken en een houten mashrabiya.
**Alt AR:** أنوال حديثة متوقفة في مصنع نسيج نظيف، مع لفائف من القطن غير المصبوغ على رفوف فولاذية ومشربية خشبية.

### about-room

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/about-room.jpg`

```
Create a photorealistic editorial photograph. A wide interior at seated eye level with a 35mm lens: a room with dark oak panelling, where six empty armchairs in dark brown leather stand in a circle on the right third, turned toward each other around a low oak table with a clear carafe of water. A single oxblood wool cushion rests in one chair, and a plain wool carpet in stone and charcoal lies beneath the circle, ready before anyone arrives. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Six empty dark brown leather armchairs turned toward each other around a low oak table in an oak-panelled room.
**Alt NL:** Zes lege donkerbruine leren fauteuils naar elkaar toe gedraaid rond een lage eiken tafel in een kamer met eiken lambrisering.
**Alt AR:** ستة مقاعد جلدية بنية داكنة فارغة متقابلة حول طاولة منخفضة من خشب البلوط في غرفة مكسوّة بألواح البلوط.

### about-coffee

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Jordanië · **Komt op:** `public/photos/pages/about-coffee.jpg`

```
Create a photorealistic editorial photograph. A close still life at low-table height with an 85mm lens: a brass dallah with a long curved spout stands on the left third of a pale oak table against walls clad in pale honed limestone, beside small handleless cups of dark, bitter Arabic coffee spiced with cardamom and a white earthenware bowl of cardamom pods. The tall window at the right is fitted with a perforated screen casting a geometric pattern across the stone. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A brass dallah and small cups of dark Arabic coffee on a low oak table, lit through a perforated screen.
**Alt NL:** Een messing dallah en kleine kopjes donkere Arabische koffie op een lage eiken tafel, in licht door een geperforeerd scherm.
**Alt AR:** دلّة نحاسية وفناجين صغيرة من القهوة العربية الداكنة على طاولة منخفضة من خشب البلوط، في ضوء يتسلّل عبر حاجز مثقّب.

### about-port

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, na de regen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/about-port.jpg`

```
Create a photorealistic editorial photograph. A long telephoto view across the water with a 200mm lens: the container quays of a great North Sea port just after rain, a row of plain quay cranes standing still above stacks of plain, unmarked containers in muted grey, sand and slate blue, with one plain oxblood container among them. The cranes behind flatten into pale layered silhouettes, and the wet quay edge draws a single clean horizontal line above calm water, the quay still and quiet. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Soft, even daylight falls from a low grey sky just after rain, the paving and every surface wet and softly reflective, the air clear and cool, with gentle short shadows. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Container quays of a large North Sea port after rain, with quay cranes and one oxblood container among grey stacks.
**Alt NL:** Containerkades van een grote Noordzeehaven na de regen, met kranen en één oxblood container tussen grijze stapels.
**Alt AR:** أرصفة الحاويات في ميناء كبير على بحر الشمال بعد المطر، مع رافعات وحاوية عنابية واحدة بين أكوام رمادية.

### story-balance

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/story-balance.jpg`

```
Create a photorealistic editorial photograph. A close still life at table height with a 100mm lens: a small brass merchant's balance stands on the right third of a table dressed in heavy natural linen, its beam level on a single upright pillar and its two shallow pans hanging empty and even. A nest of plain, unmarked brass cup weights waits beside it with a small pewter dish and a folded linen cloth, the rest of the table bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A small brass balance with two empty, level pans beside brass weights and a pewter dish on linen.
**Alt NL:** Een kleine messing weegschaal met twee lege schalen in evenwicht, naast messing gewichten en een tinnen schaaltje op linnen.
**Alt AR:** ميزان نحاسي صغير بكفّتين فارغتين متوازنتين بجانب أوزان نحاسية وطبق صغير من القصدير على مفرش من الكتان.

### story-tulip

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/story-tulip.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with an 85mm lens: a single deep garnet tulip leans from a plain white earthenware jug on the left third of a pale ash table set close to the window. Beside the jug a single hand-painted tile with a cobalt and deep red tulip motif, patterned with flowers only, stands propped against the plastered wall, and the table edge runs as one calm horizontal line across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A single deep red tulip in a white earthenware jug beside a hand-painted tulip tile on a pale ash table.
**Alt NL:** Eén donkerrode tulp in een witte aardewerken kan naast een beschilderde tulpentegel op een lichte essenhouten tafel.
**Alt AR:** زهرة توليب واحدة حمراء داكنة في إبريق فخاري أبيض بجانب بلاطة مرسومة يدويًا بزخرفة التوليب على طاولة فاتحة من خشب الدردار.

### story-river

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Irak · **Komt op:** `public/photos/pages/story-river.jpg`

```
Create a photorealistic editorial photograph. A calm riverside view at standing eye level with a 35mm lens along a quiet quay of restored buff-yellow brick warehouses with patterned brickwork, a few plain wooden river boats moored against the stone edge on the right third, their hulls unmarked. Beyond them a wide river lined with date palms stretches away, its far bank soft in the distance, and the quay edge draws one clean horizontal line across the frame, the water still. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Wooden river boats moored along a quay of yellow brick warehouses beside a wide river lined with date palms.
**Alt NL:** Houten rivierboten afgemeerd langs een kade met gele bakstenen pakhuizen, aan een brede rivier met dadelpalmen.
**Alt AR:** قوارب نهرية خشبية راسية على رصيف من المستودعات المبنية بالطابوق الأصفر بجانب نهر عريض تحفّه أشجار النخيل.

### why-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/why-hero.jpg`

```
Create a photorealistic editorial photograph. A view at seated eye level with a 50mm lens of a round oak table set for two, with two small stemless tulip-shaped tea glasses with thin gold rims, each on its own saucer with a small spoon, the tea light and clear, facing each other on white linen, a carafe of water between them. Two oak chairs stand on either side, one pulled back slightly. The two sides mirror each other across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Two tea glasses on saucers face each other on a small round oak table, with a carafe of water between.
**Alt NL:** Twee theeglaasjes op schoteltjes tegenover elkaar op een kleine ronde eiken tafel, met een karaf water ertussen.
**Alt AR:** كأسا شاي متقابلتان على صحنيهما فوق طاولة مستديرة من خشب البلوط، وبينهما إبريق ماء زجاجي.

### values-court

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Golf · **Komt op:** `public/photos/pages/values-court.jpg`

```
Create a photorealistic editorial photograph. A wide view at standing eye level with a 35mm lens from a shaded gallery with straight openings onto a pale limestone courtyard, the square pillars of the gallery framing the bright space beyond. A perforated bronze screen runs along one side of the courtyard, and a long, narrow pool of still water on the right third draws one clean horizontal line across the pale stone, the courtyard swept and quiet. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A pale limestone courtyard with a long, still pool and a bronze screen, seen from a shaded gallery.
**Alt NL:** Een lichte kalkstenen binnenplaats met een lange, stille waterbak en een bronzen scherm, gezien vanuit een schaduwrijke galerij.
**Alt AR:** فناء من الحجر الجيري الفاتح فيه حوض ماء طويل هادئ وحاجز برونزي، يُرى من رواق ظليل.

### values-value

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/values-value.jpg`

```
Create a photorealistic editorial photograph. A tight still life at worktable height with a 100mm lens: a precision-milled steel part with clean bores and bright machined edges rests on a folded linen cloth on the left third of a table of honed charcoal stone. Beside it lie a slim steel caliper, its fine scale soft beyond the plane of focus, and a small aged brass oil can with a long thin spout, the rest of the stone bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A milled steel part on a folded linen cloth, with a steel caliper and a small brass oil can.
**Alt NL:** Een gefreesd stalen onderdeel op een gevouwen linnen doek, met een schuifmaat en een klein messing oliekannetje.
**Alt AR:** قطعة فولاذية مصنّعة بدقة على قطعة كتان مطوية، مع قدمة قياس فولاذية وعلبة زيت نحاسية صغيرة.

### values-trust

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/values-trust.jpg`

```
Create a photorealistic editorial photograph. A still life at desk height with an 85mm lens: a folded letter of thick cream paper lies on the right third of a walnut desk with an inset leather top in dark brown, sealed with an oxblood wax seal pressed with a plain ring of fine engraved lines, a capped fountain pen beside it. The window at the left is fitted with a perforated bronze screen casting a faint geometric pattern across the leather. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A folded cream letter sealed with oxblood wax beside a fountain pen on a walnut desk with a leather top.
**Alt NL:** Een gevouwen crèmekleurige brief met een oxblood lakzegel naast een vulpen op een notenhouten bureau met leren blad.
**Alt AR:** رسالة مطوية بلون كريمي مختومة بشمع عنابي بجانب قلم حبر على مكتب من خشب الجوز بسطح جلدي.

### values-access

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Algerije · **Komt op:** `public/photos/pages/values-access.jpg`

```
Create a photorealistic editorial photograph. An upright view at standing eye level with a 35mm lens from inside a cool room with smooth white walls toward a tall wooden door standing open on the left third, and through it a bright seafront boulevard lined with palms and white arcaded facades. Inside, a low bench of pale oak holds a single piece of patterned Kabyle pottery, and the pale stone threshold draws one clean line across the frame. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A tall wooden door open from a white room onto a palm-lined seafront, with patterned pottery on a bench.
**Alt NL:** Een hoge houten deur open vanuit een witte kamer naar een boulevard met palmen, met beschilderd aardewerk op een bank.
**Alt AR:** باب خشبي طويل مفتوح من غرفة بيضاء على كورنيش تصطفّ فيه أشجار النخيل، وعلى مقعد قطعة فخار مزخرفة.

### founders-table

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/founders-table.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with a 50mm lens: a long dark oak table holds an open jute sack of chickpeas with a brass sampling probe across its rim and a contract on oxblood leather, its lines of type softened into pale grey bands by the shallow focus, a capped fountain pen on top, the signature lines still bare, and between them a small stemless tulip-shaped tea glass on its own saucer with a small spoon, the tea light and clear. The two sides mirror each other across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A jute sack of chickpeas with a brass probe, a tea glass and a contract on oxblood leather.
**Alt NL:** Een jute zak kikkererwten met een messing graanprikker, een theeglaasje en een contract op oxblood leer, op donker eiken.
**Alt AR:** كيس خيش من الحمّص عليه مسبار نحاسي، وكأس شاي، وعقد على جلد عنابي فوق طاولة من خشب البلوط الداكن.

### founders-store

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/founders-store.jpg`

```
Create a photorealistic editorial photograph. A view at standing eye level with a 50mm lens down an aisle in the bright, clean store of a contract-packing business, pallets stacked with plain kraft-paper sacks of pulses and nuts in orderly rows on a pale concrete floor, their stretch wrap catching the light. On the right third one figure in a dark work jacket checks the top of a stack, his back to the camera, seen from behind, the face turned away and out of view. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A figure in a dark work jacket, seen from behind, checks stacked pallets of paper sacks in a bright store.
**Alt NL:** Een figuur in een donker werkjack, van achteren gezien, controleert gestapelde pallets papieren zakken in een lichte opslag.
**Alt AR:** شخص بسترة عمل داكنة، يُرى من الخلف، يتفقّد منصّات مكدّسة بأكياس ورقية في مخزن مضيء.

### founders-desk

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/founders-desk.jpg`

```
Create a photorealistic editorial photograph. A close still life at desk height with a 100mm lens: an oxblood leather desk blotter lies on the right third of a pale oak desk, holding a thick customs file squared at the edges at a low, oblique angle, its lines of type softened into pale grey bands by the shallow focus. A pair of folded reading glasses rests on the file, with a slim capped pen and a closed laptop beside the blotter. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A customs file, folded reading glasses and a pen on an oxblood leather blotter on a pale oak desk.
**Alt NL:** Een douanedossier, een dichtgevouwen leesbril en een pen op een oxblood leren onderlegger op een licht eiken bureau.
**Alt AR:** ملف جمركي ونظارة قراءة مطوية وقلم على لوح مكتب جلدي عنابي فوق مكتب من خشب البلوط الفاتح.

### services-hero

**Formaat:** 21:9 · **Licht:** Reportage, helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/services-hero.jpg`

```
Create a photorealistic editorial photograph. A documentary view at standing eye level with a 35mm lens into a tidy distribution centre, where steel racks of stretch-wrapped pallets of plain cartons run toward open loading doors and a plain white trailer waits beside an oxblood-painted steel door. One worker in dark workwear checks a pallet by an unbadged forklift, his back to the camera, seen from behind, the face turned away and out of view. Real, lived-in details: tyre marks on concrete, a stray roll of stretch film. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A distribution centre with tall racks of wrapped pallets, a worker seen from behind and a waiting trailer.
**Alt NL:** Een distributiecentrum met hoge stellingen vol pallets in folie, een medewerker van achteren en een wachtende trailer.
**Alt AR:** مركز توزيع برفوف عالية من المنصّات المغلّفة، وعامل يُرى من الخلف، ومقطورة تنتظر عند باب التحميل.

### trade-samples

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/trade-samples.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with an 85mm lens: a squared stack of fabric swatches in linen, wool and bouclé in sand, cream, charcoal and indigo lies on the left third of a pale ash workbench, the soft weaves catching the light at their folded edges. Beside it rest a turned wooden chair leg in raw beech and a small tack hammer with a brass head, the rest of the bench bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A stack of fabric swatches in linen, wool and bouclé beside a wooden chair leg and a tack hammer.
**Alt NL:** Een stapel stofstalen in linnen, wol en bouclé naast een houten stoelpoot en een hamertje op een essenhouten werkbank.
**Alt AR:** رزمة من عيّنات الأقمشة من الكتان والصوف والبوكليه بجانب ساق كرسي خشبية ومطرقة صغيرة على طاولة عمل.

### trade-supplier

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Jordanië · **Komt op:** `public/photos/pages/trade-supplier.jpg`

```
Create a photorealistic editorial photograph. A close view at table height with a 100mm lens of proof pieces of pale honed limestone, travertine and marble laid out on the right third of a table of honed charcoal stone, in a room with walls clad in pale honed limestone. An oxblood leather folder rests closed at the table edge, and the tall window at the left is fitted with a perforated screen casting a soft geometric pattern across the stone. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Proof pieces of limestone, travertine and marble on a dark stone table, with an oxblood folder, in screened light.
**Alt NL:** Proefstukken kalksteen, travertin en marmer op een donkere stenen tafel, met een oxblood map, in licht door een scherm.
**Alt AR:** قطع عيّنات من الحجر الجيري والترافرتين والرخام على طاولة حجرية داكنة مع حافظة عنابية، في ضوء يمرّ عبر حاجز مثقّب.

### trade-distributor

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Golf · **Komt op:** `public/photos/pages/trade-distributor.jpg`

```
Create a photorealistic editorial photograph. A wide view at standing eye level with a 35mm lens across a clean depot apron, where a row of new unmarked truck tractors in white and slate grey stands on the right third beside a white refrigerated trailer, their cabs unbadged and their steel plates plain. Behind them a low, bright contemporary building of pale limestone and glass closes the view, and the swept concrete apron draws one clean horizontal line across the frame. Composed with a little calm space above and below the subject. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A row of new white and slate grey truck tractors beside a refrigerated trailer on a clean depot apron.
**Alt NL:** Een rij nieuwe vrachtwagentrekkers in wit en leigrijs naast een koeloplegger op een schoon depotterrein, in ochtendlicht.
**Alt AR:** صف من رؤوس الشاحنات الجديدة باللونين الأبيض والرمادي بجانب مقطورة مبرّدة على ساحة مستودع نظيفة.

### trade-buyer

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Jemen · **Komt op:** `public/photos/pages/trade-buyer.jpg`

```
Create a photorealistic editorial photograph. A quiet still life at table height with a 90mm lens: a plain glass jar of dark sidr honey stands on the left third of a table of pale honed stone, beside a shallow brass bowl of green coffee beans and a folded linen cloth, in a stone tower-house room. The tall window at the right has white gypsum trim and a small arched fanlight of coloured glass, just at the edge of the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A jar of sidr honey and a brass bowl of green coffee beans on a stone table by a window.
**Alt NL:** Een pot sidrhoning en een messing schaal groene koffiebonen op een lichte stenen tafel, bij een raam met gipsrand.
**Alt AR:** مرطبان من عسل السدر ووعاء نحاسي ضحل من حبوب البن الأخضر على طاولة حجرية فاتحة قرب نافذة بإطار جصّي.

### me-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Egypte · **Komt op:** `public/photos/pages/me-hero.jpg`

```
Create a photorealistic editorial photograph. A long view across the water with a 135mm lens toward the far bank of a wide river with white-sailed feluccas far in the distance, where a contemporary business district of glass and pale stone stands behind a long stone embankment, cropped at mid-height so only its calm lower storeys show. The waterline draws one clean horizontal line across the frame, the river broad and still. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A business district of glass and pale stone along a wide river, with white-sailed feluccas in the haze.
**Alt NL:** Een zakendistrict van glas en lichte steen langs een brede rivier, met feloeka's met witte zeilen in de nevel.
**Alt AR:** حيّ أعمال من الزجاج والحجر الفاتح على ضفة نهر عريض، مع قوارب فلوكة بأشرعة بيضاء بعيدة في الضباب.

### me-culture

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Golf · **Komt op:** `public/photos/pages/me-culture.jpg`

```
Create a photorealistic editorial photograph. A still life at low-table height with a 90mm lens: a brass dallah stands on the right third of a low pale oak table in a contemporary Gulf home, beside small finjan cups of pale Arabic coffee the colour of light honey, spiced with cardamom, a white earthenware dish of glossy dates and a folded oxblood linen napkin. The tall window at the left is fitted with a perforated screen of carved white plaster. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A brass dallah, finjan cups of pale coffee, dates and an oxblood napkin on a low oak table.
**Alt NL:** Een messing dallah, finjankopjes met lichte koffie, dadels en een oxblood servet op een lage eiken tafel.
**Alt AR:** دلّة نحاسية وفناجين من القهوة العربية الشقراء وتمر ومنديل عنابي على طاولة منخفضة من خشب البلوط الفاتح.

### rep-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Libië · **Komt op:** `public/photos/pages/rep-hero.jpg`

```
Create a photorealistic editorial photograph. A wide interior at seated eye level with a 35mm lens: a bright meeting room with smooth white walls, a long pale oak table on the left third with closed notebooks and plain tumblers set at each place, the chairs tucked in. Tall windows beyond look onto a seafront of pale arcaded buildings from the Italian era, lined with palms, soft in the distance. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A bright meeting room with a long oak table and notebooks, its windows facing a palm-lined arcaded seafront.
**Alt NL:** Een lichte vergaderkamer met een lange eiken tafel en notitieboeken, met ramen op een boulevard met arcaden en palmen.
**Alt AR:** قاعة اجتماعات مضيئة بطاولة طويلة من خشب البلوط ودفاتر، ونوافذها تطلّ على واجهة بحرية ذات أروقة ونخيل.

### rep-window

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/rep-window.jpg`

```
Create a photorealistic editorial photograph. An upright view at standing eye level with a 50mm lens into a restored canal-house room with plain white walls, where a woman in a dark wool trouser suit, her hair tied back, stands at a tall window on the right third, looking out at the canal gables opposite, a light rain streaking the tall windows, her back to the camera, seen from behind, the face turned away and out of view. An oxblood leather armchair stands beside her on the pale oak floor. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A woman in a dark trouser suit, seen from behind, looks out of a tall canal-house window in the rain.
**Alt NL:** Een vrouw in een donker broekpak, van achteren gezien, kijkt uit een hoog raam van een grachtenpand in de regen.
**Alt AR:** امرأة ببدلة داكنة، تُرى من الخلف، تنظر من نافذة عالية في بيت مطلّ على قناة تحت المطر.

### docs-desk

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/docs-desk.jpg`

```
Create a photorealistic editorial photograph. A tight still life at table height with a 100mm lens: a neat stack of shipping documents squared at the edges lies at a low, oblique angle on the right third of a pale honed travertine table, its lines of type softened into pale grey bands by the shallow focus, the signature lines still bare. A capped fountain pen lies beside a pair of folded reading glasses and a small plain brass paperweight. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A squared stack of shipping documents beside a fountain pen, reading glasses and a brass paperweight on travertine.
**Alt NL:** Een nette stapel verzenddocumenten naast een vulpen, een leesbril en een messing presse-papier op travertin.
**Alt AR:** رزمة مرتّبة من مستندات الشحن بجانب قلم حبر ونظارة قراءة وثقّالة ورق نحاسية على طاولة من الترافرتين.

### docs-dock

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, blauw uur) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/docs-dock.jpg`

```
Create a photorealistic editorial photograph. A wide view at standing eye level with a 50mm lens along the loading dock of a brick warehouse at the blue hour, stretch-wrapped pallets of plain kraft cartons waiting at an open dock door with warm light spilling out. A plain white trailer is backed up to the dock beside a plain oxblood container on its chassis, its doors closed and sealed, and the dock edge draws one clean horizontal line across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. The soft light of the blue hour just after sunset lies over the scene, the sky a deep, even blue-grey, warm interior lights glowing softly in the windows, calm and low in contrast. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Wrapped pallets at a warehouse loading dock at dusk, with a white trailer and a sealed oxblood container.
**Alt NL:** Pallets in folie bij het laadperron van een pakhuis in de schemering, met een witte trailer en een verzegelde oxblood container.
**Alt AR:** منصّات مغلّفة عند رصيف تحميل مستودع وقت الغسق، مع مقطورة بيضاء وحاوية عنابية مختومة.

### inv-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Golf · **Komt op:** `public/photos/pages/inv-hero.jpg`

```
Create a photorealistic editorial photograph. A quiet architectural detail at standing eye level with a 50mm lens: the facade of a bright contemporary building of pale limestone and glass, a tall perforated bronze screen standing before the glass on the left third, its fine geometry crisp. A single date palm casts a long, soft shadow across the pale stone, and the base of the building draws one clean horizontal line across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A pale limestone and glass facade with a perforated bronze screen and the soft shadow of a date palm.
**Alt NL:** Een gevel van lichte kalksteen en glas met een geperforeerd bronzen scherm en de zachte schaduw van een dadelpalm.
**Alt AR:** واجهة من الحجر الجيري الفاتح والزجاج مع حاجز برونزي مثقّب وظلّ ناعم لنخلة.

### inv-meeting

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/inv-meeting.jpg`

```
Create a photorealistic editorial photograph. An interior at seated eye level with a 50mm lens: a small meeting corner in a restored canal-house room with plain white walls, two armchairs upholstered in sand-coloured bouclé angled toward each other on the left third across a low walnut table. A closed oxblood project folder lies squared on the table beside a clear carafe of water, and a light rain streaking the tall windows softens the view outside. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Two sand bouclé armchairs at a low walnut table with an oxblood folder, beside tall windows in the rain.
**Alt NL:** Twee zandkleurige bouclé fauteuils aan een lage notenhouten tafel met een oxblood map, bij hoge ramen in de regen.
**Alt AR:** مقعدان من البوكليه بلون الرمل عند طاولة منخفضة من خشب الجوز عليها حافظة عنابية، بجوار نوافذ عالية تحت المطر.

### adv-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/adv-hero.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with an 85mm lens: a closed linen-bound notebook rests squared on a closed laptop in matte grey aluminium on the left third of a table of honed charcoal stone, a capped fountain pen laid parallel beside them and a plain tumbler of water behind. The table edge runs as one calm horizontal line across the frame, the rest of the stone bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A closed laptop, a linen-bound notebook and a fountain pen on a dark stone table.
**Alt NL:** Een dichtgeklapte laptop, een linnen notitieboek en een vulpen op een donkere stenen tafel.
**Alt AR:** حاسوب محمول مغلق ودفتر بغلاف من الكتان وقلم حبر على طاولة من الحجر الداكن.

### adv-specialist

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Jordanië · **Komt op:** `public/photos/pages/adv-specialist.jpg`

```
Create a photorealistic editorial photograph. A view at standing eye level with a 50mm lens into a bright meeting room with walls clad in pale honed limestone, where a woman in a long tailored coat with a silk headscarf stands at a long pale oak table on the left third, reviewing a document before her, her back to the camera, seen from behind, the face turned away and out of view. Tall windows beyond look out on a dense hillside city of pale limestone apartment buildings with flat roofs and rooftop water tanks, far away in soft haze. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A woman in a long coat and headscarf, seen from behind, reviews a document by windows over a limestone city.
**Alt NL:** Een vrouw in een lange jas met hoofddoek, van achteren gezien, leest een document bij ramen met uitzicht op een kalkstenen stad.
**Alt AR:** امرأة بمعطف طويل وحجاب حريري، تُرى من الخلف، تراجع وثيقة أمام نوافذ تطلّ على مدينة من الحجر الجيري.

### how-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/how-hero.jpg`

```
Create a photorealistic editorial photograph. A wide interior at seated eye level with a 35mm lens: a long pale oak table runs through an office in a brick warehouse with steel-framed windows, set with a clear carafe of water, plain tumblers and one closed oxblood leather folder on the right third. Beyond the tall steel windows a wide river with plain quay cranes lies in soft haze, and the window sill draws one clean horizontal line across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A long oak table with a water carafe and an oxblood folder, before steel windows onto a river with cranes.
**Alt NL:** Een lange eiken tafel met een karaf water en een oxblood map, voor stalen ramen op een rivier met kranen.
**Alt AR:** طاولة طويلة من خشب البلوط عليها إبريق ماء وحافظة عنابية، أمام نوافذ فولاذية تطلّ على نهر ورافعات.

### how-tea

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Algerije · **Komt op:** `public/photos/pages/how-tea.jpg`

```
Create a photorealistic editorial photograph. A close still life at low-table height with an 85mm lens: a low table of pale ash in a white-walled room holds, on its right third, pale green mint tea in small decorated glasses beside a polished nickel-silver teapot, with a sprig of fresh mint on a small white earthenware saucer. The tall window at the left has pale blue wooden shutters folded half open. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Mint tea in small decorated glasses beside a polished teapot on a low table, by a window with blue shutters.
**Alt NL:** Muntthee in kleine versierde glaasjes naast een glanzende theepot op een lage tafel, bij een raam met blauwe luiken.
**Alt AR:** شاي بالنعناع في كؤوس صغيرة مزخرفة بجانب إبريق لامع على طاولة منخفضة، قرب نافذة بمصاريع زرقاء.

### ver-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/ver-hero.jpg`

```
Create a photorealistic editorial photograph. A tight detail at table height with a 100mm lens: a hand turns a page in a company file bound in oxblood leather on the left third of a dark oak table, the page at a low, oblique angle, its lines of type softened into pale grey bands by the shallow focus. A pair of folded reading glasses and a brass-rimmed loupe rest beside it. Only one hand and its shirt cuff are in frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** One hand turns a page in an oxblood leather company file, with reading glasses and a brass loupe beside it.
**Alt NL:** Eén hand slaat een pagina om in een oxblood leren bedrijfsdossier, met een leesbril en een messing loep ernaast.
**Alt AR:** يد واحدة تقلّب صفحة في ملف شركة بغلاف جلدي عنابي، وبجانبه نظارة قراءة وعدسة مكبّرة نحاسية.

### fees-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/fees-hero.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with a 50mm lens: a contract on heavy natural linen seen at a low, oblique angle, every line of type including the heading softened into pale grey bands by the shallow focus, the signature lines still bare, two capped pens parallel across it. Two small stemless tulip-shaped tea glasses with thin gold rims, each on its own saucer with a small spoon, the tea light and clear, flank it. The two sides mirror each other across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A contract with two capped fountain pens between two tea glasses on saucers, on a linen-covered table.
**Alt NL:** Een contract met twee dichte vulpennen tussen twee theeglaasjes op schoteltjes, op een tafel met naturel linnen.
**Alt AR:** عقد عليه قلما حبر مغلقان بين كأسي شاي على صحنين، فوق طاولة مغطاة بالكتان الطبيعي.

### bnd-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (buiten, na de regen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/bnd-hero.jpg`

```
Create a photorealistic editorial photograph. A close view at standing eye level with a 50mm lens of the closed doors of a single plain oxblood container on the left third, standing on a quiet quay, its vertical locking bars and handles latched, the corrugated steel plain, unmarked and beaded with rain. The wet concrete of the quay reflects the doors softly, and a plain grey container stands out of focus beside it, the quay still and quiet. Composed with a little calm space above and below the subject. Soft, even daylight falls from a low grey sky just after rain, the paving and every surface wet and softly reflective, the air clear and cool, with gentle short shadows. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** The closed, rain-beaded doors of a plain oxblood container on a wet, quiet quay.
**Alt NL:** De gesloten deuren van een effen oxblood container, nat van de regen, aan een stille kade.
**Alt AR:** الأبواب المغلقة لحاوية عنابية سادة تغطيها قطرات المطر على رصيف هادئ.

### faq-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/faq-hero.jpg`

```
Create a photorealistic editorial photograph. An interior at seated eye level with a 50mm lens: a quiet salon where two dark brown leather armchairs stand angled toward each other on the left third, beside a low walnut table on a single large hand-knotted wool carpet in indigo and sand. On one chair rests a linen cushion crossed by one narrow sadu band in indigo, black and cream, and the walnut table stands bare and freshly polished. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Two dark brown leather armchairs angled toward each other by a walnut table on an indigo and sand carpet.
**Alt NL:** Twee donkerbruine leren fauteuils naar elkaar toe gedraaid bij een notenhouten tafel op een tapijt in indigo en zand.
**Alt AR:** مقعدان جلديان بنيّان داكنان متقابلان بجانب طاولة من خشب الجوز على سجادة بلونَي النيلي والرملي.

### market-hero

**Formaat:** 21:9 · **Licht:** Reportage, helder hedendaags (binnen) · **Wereld:** Golf · **Komt op:** `public/photos/pages/market-hero.jpg`

```
Create a photorealistic editorial photograph. A documentary view at standing eye level with a 35mm lens down a carpeted aisle of a trade fair in a hall of pale limestone and glass, between pavilion stands of dark-stained oak and honed stone with plain fascia panels and softly lit samples on stone counters. Visitors in white thobes and ghutras, dark suits and a black abaya with a loose black shayla walk the aisle, the people are seen from behind or at a distance, absorbed in the moment, the faces in the background small and soft, and nobody looks toward the camera. Real, lived-in details: a jacket over an armchair, a cable run neatly along the carpet. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Visitors seen from behind walk down a carpeted aisle between oak and stone stands in a limestone exhibition hall.
**Alt NL:** Bezoekers van achteren in een gangpad met tapijt tussen stands van eiken en steen, in een kalkstenen beurshal.
**Alt AR:** زوّار يُرَون من الخلف في ممرّ مفروش بين أجنحة من البلوط والحجر داخل قاعة معارض من الحجر الجيري.

### prod-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/prod-hero.jpg`

```
Create a photorealistic editorial photograph. A close still life at table height with an 85mm lens: three small plain, unmarked glass perfume flacons with cut-glass stoppers, each holding a pale, clear perfume, stand beside a small dark block of agarwood on an aged brass tray on the right third of a pale honed travertine table. A soft fold of oxblood velvet lies beneath the edge of the tray, the rest of the stone bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Small unmarked perfume flacons and a block of agarwood on a brass tray over oxblood velvet on travertine.
**Alt NL:** Kleine blanco parfumflacons en een stukje oud-hout op een messing blad boven oxblood fluweel op travertin.
**Alt AR:** قوارير عطر صغيرة بلا علامات وقطعة من خشب العود على صينية نحاسية فوق قماش مخملي عنابي.

### prod-showroom

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Egypte · **Komt op:** `public/photos/pages/prod-showroom.jpg`

```
Create a photorealistic editorial photograph. An upright view at standing eye level with a 50mm lens into a quiet showroom of glass and pale stone, where an unbadged motorcycle in matte charcoal grey stands on a low plinth of honed stone on the right third, its tank and side panels plain. A carved wooden mashrabiya screen of finely turned spindles fills the wall behind it, and the polished stone floor draws one calm line across the frame. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** An unbadged charcoal grey motorcycle on a low stone plinth in a showroom with a wooden mashrabiya wall.
**Alt NL:** Een motor zonder merk in antraciet op een lage stenen sokkel in een showroom met een houten mashrabiya.
**Alt AR:** درّاجة نارية رمادية فحمية بلا شعار على قاعدة حجرية منخفضة في صالة عرض بجدار من المشربية الخشبية.

### br-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/br-hero.jpg`

```
Create a photorealistic editorial photograph. A wide still life at standing eye level with a 35mm lens along a long pale oak sample table in a brick warehouse with steel-framed windows, set ready for an inspection with plain glass bowls of red lentils, chickpeas, pistachios and whole almonds, small plain sample bags tied with string, a plain tin of olive oil and two closed notebooks. The table edge draws one clean horizontal line across the frame, the hall swept and quiet. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A long oak sample table with glass bowls of lentils, chickpeas, pistachios and almonds, sample bags and olive oil.
**Alt NL:** Een lange eiken monstertafel met glazen schalen linzen, kikkererwten, pistachenoten en amandelen, monsterzakjes en olijfolie.
**Alt AR:** طاولة عيّنات طويلة من خشب البلوط عليها أوعية زجاجية من العدس والحمّص والفستق واللوز وأكياس عيّنات وزيت زيتون.

### stk-hero

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Libië · **Komt op:** `public/photos/pages/stk-hero.jpg`

```
Create a photorealistic editorial photograph. A calm warehouse interior at standing eye level with a 35mm lens: tall rolls of plain white and kraft paper stand on end on the left third beside pallets wrapped in clear shrink film, between whitewashed walls. Through a high open door at the far end, palm groves lie in bright haze, and the clean concrete floor catches the daylight. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Tall rolls of paper and shrink-wrapped pallets in a whitewashed warehouse, with palm groves beyond an open door.
**Alt NL:** Hoge papierrollen en pallets in krimpfolie in een witgekalkt magazijn, met palmbossen achter een open deur.
**Alt AR:** لفائف ورق طويلة ومنصّات مغلّفة في مستودع مطليّ بالجير، وخلف باب مفتوح بساتين نخيل.

### stk-lots

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/stk-lots.jpg`

```
Create a photorealistic editorial photograph. A medium view at standing eye level with a 50mm lens across a clean warehouse floor, where pallets of stacked plain kraft cartons stand in a loose row on the right third, one of them wrapped tight in clear shrink film, a plain steel pallet jack parked beside them. An oxblood-painted steel door stays closed in the pale wall behind, and the swept concrete floor holds a calm, warm grey. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Pallets of plain cardboard cartons and a pallet jack in a clean warehouse with an oxblood steel door.
**Alt NL:** Pallets met blanco kartonnen dozen en een palletwagen in een schoon magazijn met een oxblood stalen deur.
**Alt AR:** منصّات من الكراتين الورقية السادة ورافعة منصّات يدوية في مستودع نظيف بباب فولاذي عنابي.

### mach-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/mach-hero.jpg`

```
Create a photorealistic editorial photograph. A long side view at standing eye level with a 50mm lens: a clean sheet-fed printing press stands at rest in a bright, empty print hall, its row of printing units in pale grey paint, its control panel dark and its steel plates plain. At its delivery end a squared stack of plain white paper waits on a pallet, the concrete floor swept clean beneath a band of high windows. Its long base draws one calm horizontal line across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A clean printing press at rest in a bright, empty hall, a stack of blank paper at its end.
**Alt NL:** Een schone drukpers in rust in een lichte, lege hal, met een stapel blanco papier aan het eind.
**Alt AR:** مطبعة نظيفة متوقفة في قاعة مضيئة وخالية، وفي طرفها رزمة من الورق الأبيض.

### mach-cnc

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Golf · **Komt op:** `public/photos/pages/mach-cnc.jpg`

```
Create a photorealistic editorial photograph. An upright view at standing eye level with a 35mm lens into a quiet machine hall in a bright contemporary building of pale limestone and glass, a CNC machining centre in white and pale grey paint standing on the left third, its control panel dark and its steel plates plain, its sliding door closed. A steel workbench beside it holds a single precision-milled aluminium block, the pale floor is spotless, and beyond the tall glass wall stands a facade of perforated bronze. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A CNC machining centre at rest in a bright hall of pale stone and glass, a bronze screen facade beyond.
**Alt NL:** Een CNC-bewerkingscentrum in rust in een lichte hal van kalksteen en glas, met daarachter een gevel van geperforeerd brons.
**Alt AR:** مركز تشغيل آلي متوقف في قاعة مضيئة من الحجر الفاتح والزجاج، وخلفه واجهة من البرونز المثقب.

### membership-hero

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Golf · **Komt op:** `public/photos/pages/membership-hero.jpg`

```
Create a photorealistic editorial photograph. A wide interior at seated eye level with a 35mm lens: a contemporary majlis before anyone arrives, low seating in sand-coloured linen along flat lime-plastered walls with straight openings, each cushion crossed by one narrow sadu band in oxblood, black and cream. The window's perforated bronze screen casts a soft geometric pattern across a single large plain hand-knotted wool carpet and a bare oak table. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** An empty contemporary majlis with low linen seating, cushions with narrow woven bands and patterned light from a bronze screen.
**Alt NL:** Een lege, hedendaagse majlis met lage linnen zitbanken, kussens met smalle geweven banden en een lichtpatroon van een bronzen scherm.
**Alt AR:** مجلس معاصر خالٍ بمقاعد منخفضة من الكتان ووسائد بأشرطة منسوجة ضيقة، ونقش من الضوء عبر ستارة برونزية.

### lvl-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/lvl-hero.jpg`

```
Create a photorealistic editorial photograph. A view at seated eye level with a 50mm lens along a long oak table laid for ten as the last daylight falls through the window, set with white linen, one plain straight-sided tumbler at every place and clear carafes of water and pale green mint lemonade. Aged-brass candlesticks hold a few lit candles beside a slender glass rose-water sprinkler, and the empty chairs wait in a row, one pulled back slightly. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A long oak table laid for ten with white linen, water carafes, mint lemonade and lit candles in brass candlesticks.
**Alt NL:** Een lange eiken tafel gedekt voor tien, met wit linnen, karaffen water en muntlimonade en brandende kaarsen in messing kandelaars.
**Alt AR:** طاولة طويلة من خشب البلوط معدّة لعشرة أشخاص، بمفارش كتان بيضاء وأباريق ماء وليموناضة بالنعناع وشموع مضاءة في شمعدانات نحاسية.

### lvl-breakfast

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/lvl-breakfast.jpg`

```
Create a photorealistic editorial photograph. A room view from the doorway at standing eye level with a 35mm lens: a long pale oak table in a restored canal-house room with plain white walls is set for a business breakfast, with white coffee cups, carafes of water and fresh orange juice and closed linen-bound notebooks. An oxblood leather folder lies at the head of the table. At the far window a man in a charcoal wool suit stands holding a cup, his back to the camera, seen from behind, the face turned away and out of view. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A pale oak table set for breakfast in a canal-house room, a man at the far window seen from behind.
**Alt NL:** Een lichte eiken tafel gedekt voor het ontbijt in een grachtenpand, met bij het verste raam een man, van achteren gezien.
**Alt AR:** طاولة من البلوط الفاتح معدّة للإفطار في غرفة بمنزل على القناة، ورجل عند النافذة البعيدة يُرى من الخلف.

### lvl-tea

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Irak · **Komt op:** `public/photos/pages/lvl-tea.jpg`

```
Create a photorealistic editorial photograph. A close still life at low-table height with an 85mm lens: an aged brass tray on a walnut table holds strong deep amber tea in two small tulip-shaped istikan glasses, each on its own saucer with a small spoon, beside a small bowl of sugar and a plate of small round date-filled pastries. A wooden shanasheel with fine latticework patterns the light across the tray. The two sides mirror each other across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Strong amber tea in two istikan glasses on a brass tray, with sugar and date pastries, in latticed light.
**Alt NL:** Sterke amberkleurige thee in twee istikan-glaasjes op een messing blad, met suiker en dadelgebakjes, in licht door houten latwerk.
**Alt AR:** شاي كهرماني قوي في كوبي استكان على صينية نحاسية، مع السكر ومعجنات التمر، في ضوء يتسلل عبر شناشيل خشبية.

### gua-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/gua-hero.jpg`

```
Create a photorealistic editorial photograph. A desk-height detail with a 100mm lens: a closed ledger bound in oxblood leather lies on the left third of a dark oak table, a narrow border of girih geometry blind-tooled into its cover, a slim capped pen laid across it. Beside it stand a small aged brass inkwell and a short stack of cream laid paper, the front edge of the table drawing one clean horizontal line. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A closed oxblood leather ledger with a pen across it, a brass inkwell and cream paper on dark oak.
**Alt NL:** Een gesloten grootboek in oxblood leer met een pen erop, een messing inktpot en crèmekleurig papier op donker eiken.
**Alt AR:** دفتر حسابات مغلق بجلد أحمر داكن عليه قلم، ومحبرة نحاسية وأوراق كريمية على خشب بلوط داكن.

### who-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/who-hero.jpg`

```
Create a photorealistic editorial photograph. A view at standing eye level with a 50mm lens along a modern glass greenhouse, raised benches of young plants in plain black trays running in rows toward the far glass wall. On the right third a woman in a long dark tailored coat, her hair tied back, walks away down an aisle between the rows, her back to the camera, seen from behind, the face turned away and out of view. The bench tops draw one clean horizontal line across the frame. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A woman in a long dark coat, seen from behind, walks between rows of young plants in a glass greenhouse.
**Alt NL:** Een vrouw in een lange donkere jas loopt, van achteren gezien, tussen rijen jonge planten in een glazen kas.
**Alt AR:** امرأة بمعطف طويل داكن تسير بين صفوف من النباتات الصغيرة في دفيئة زجاجية، وتظهر من الخلف.

### f100-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/f100-hero.jpg`

```
Create a photorealistic editorial photograph. A still life at seated eye level with an 85mm lens: an open folder of oxblood leather lies on the right third of a pale ash table, holding a single heavy cream card with a softly deckled edge, entirely blank. A capped fountain pen rests parallel beside the folder with a plain cream envelope, and a little behind stands a small white earthenware jug holding one white tulip, the rest of the table bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A blank cream card in an open oxblood leather folder beside a fountain pen and a white tulip.
**Alt NL:** Een blanco crèmekleurige kaart in een geopende oxblood leren map, naast een vulpen en een witte tulp.
**Alt AR:** بطاقة كريمية فارغة في ملف جلدي مفتوح بلون أحمر داكن، بجانب قلم حبر وزهرة توليب بيضاء.

### network-hero

**Formaat:** 21:9 · **Licht:** Reportage (koopmanslicht, raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/network-hero.jpg`

```
Create a photorealistic editorial photograph. A documentary view at standing eye level with a 35mm lens across an evening reception in a grand restored merchant's hall with dark oak panelling, linen-dressed tables holding low white and deep garnet tulips. Guests stand in small groups, dark suits mixing with a few white thobes and ghutras and a woman in a charcoal trouser suit, the people are seen from behind or at a distance, absorbed in the moment, the faces in the background small and soft, and nobody looks toward the camera. A few candles burn as the last daylight falls through the tall windows. Real, lived-in details: a coat over a chair back, a half-finished tumbler of mint lemonade. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** An evening reception in an oak-panelled hall, small groups of guests seen from behind among linen tables and candles.
**Alt NL:** Een avondreceptie in een zaal met eiken lambrisering, kleine groepjes gasten van achteren gezien tussen linnen tafels en kaarsen.
**Alt AR:** حفل استقبال مسائي في قاعة مكسوّة بألواح البلوط، ومجموعات صغيرة من الضيوف تُرى من الخلف بين طاولات مفروشة بالكتان وشموع.

### dir-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/dir-hero.jpg`

```
Create a photorealistic editorial photograph. A wide interior at standing eye level with a 35mm lens: a calm open-plan tech office in a brick warehouse with steel-framed windows, rows of pale oak desks carrying closed laptops, plain white mugs and neat desk lamps, and on the left third a single large monitor showing only soft abstract light. Grey felt acoustic panels line one brick wall, the pale oak floor is clear, and the desk tops draw a long horizontal line across the room. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A calm open-plan office in a brick warehouse, closed laptops on pale oak desks and one softly lit screen.
**Alt NL:** Een rustige kantoortuin in een bakstenen pakhuis, met dichtgeklapte laptops op lichte eiken bureaus en één zacht oplichtend scherm.
**Alt AR:** مكتب مفتوح هادئ في مستودع من الطوب، وحواسيب محمولة مغلقة على مكاتب من البلوط الفاتح وشاشة واحدة بضوء خافت.

### dir-profile

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Golf · **Komt op:** `public/photos/pages/dir-profile.jpg`

```
Create a photorealistic editorial photograph. A side view at standing eye level with a 50mm lens: an unbadged saloon car in dark metallic grey stands in clean side profile on the left third of a quiet showroom of pale limestone and glass, its nose and tail softly out of focus at the edges and its body entirely plain. The honed limestone floor holds a soft reflection of the car, and beyond the tall glass wall a single date palm stands in a pale stone planter in bright haze. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A dark grey saloon car without badges in a bright showroom of pale limestone and glass, a date palm outside.
**Alt NL:** Een donkergrijze sedan zonder merktekens in een lichte showroom van kalksteen en glas, met buiten een dadelpalm.
**Alt AR:** سيارة سيدان رمادية داكنة بلا شعارات في صالة عرض مضيئة من الحجر الجيري والزجاج، وفي الخارج نخلة.

### sec-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Jordanië · **Komt op:** `public/photos/pages/sec-hero.jpg`

```
Create a photorealistic editorial photograph. An outdoor view with a 50mm lens at standing eye level across a stone yard, tall slabs of cream marble and pale travertine standing in steel A-frame racks, the nearest on the right third, their sawn surfaces catching the light. The swept yard of pale gravel runs to a low boundary wall that draws one clean horizontal line across the frame, and far behind rises a dense hillside city of pale limestone apartment buildings with flat roofs and rooftop water tanks. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Tall slabs of marble and travertine on steel racks in a stone yard, a hillside city of pale limestone behind.
**Alt NL:** Hoge platen marmer en travertin in stalen rekken op een steenwerf, met daarachter een heuvelstad van lichte kalksteen.
**Alt AR:** ألواح طويلة من الرخام والترافرتين على رفوف فولاذية في ساحة حجر، وخلفها مدينة على التلال من الحجر الجيري الفاتح.

### sec-dates

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Golf · **Komt op:** `public/photos/pages/sec-dates.jpg`

```
Create a photorealistic editorial photograph. A close view at table height with an 85mm lens along a stainless-steel sorting table in a bright, contemporary date-packing house, shallow pale wooden crates of glossy dark-amber dates set in a neat row on the left third, a few loose dates resting on the brushed steel. Behind, smooth lime-plastered walls with deep window openings hold the soft daylight, and a stack of plain kraft cartons waits at the end of the table, the steel edge drawing one clean horizontal line. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Shallow wooden crates of glossy dates on a steel sorting table in a bright date-packing house.
**Alt NL:** Ondiepe houten kratten met glanzende dadels op een stalen sorteertafel in een lichte dadelpakkerij.
**Alt AR:** صناديق خشبية ضحلة من التمر اللامع على طاولة فرز فولاذية في مصنع مضيء لتعبئة التمور.

### sec-pack

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/sec-pack.jpg`

```
Create a photorealistic editorial photograph. A medium interior view at standing eye level with a 50mm lens: a flatbed die-cutting machine stands at rest on the right third of a bright packaging workshop, painted pale grey, its control panel dark and its steel plates plain. Beside it on a low pallet wait squared stacks of plain folded kraft cartons, and a large roll of kraft paper lies on a steel cradle in the foreground, the concrete floor swept clean beneath high steel-framed windows. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A die-cutting machine at rest beside stacks of plain kraft cartons and a large roll of kraft paper.
**Alt NL:** Een stansmachine in rust naast stapels blanco kraftdozen en een grote rol kraftpapier, in een lichte werkplaats.
**Alt AR:** آلة قصّ متوقفة بجانب رزم من علب الكرتون الخالية من الطباعة ولفافة كبيرة من ورق الكرافت.

### sec-energy

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/sec-energy.jpg`

```
Create a photorealistic editorial photograph. A long-lens view at standing eye level with a 135mm lens along a single white wind turbine blade resting on steel transport cradles on a wide concrete quay, its root end on the left third and its slender length receding toward the water. Beyond the quay edge, which draws one clean horizontal line across the frame, plain quay cranes stand as pale layered silhouettes in the haze, the quay still and quiet. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A long white wind turbine blade on steel cradles on a quiet quay, cranes faint in the haze beyond.
**Alt NL:** Een lang wit rotorblad van een windturbine op stalen bokken op een stille kade, met kranen vaag in de nevel.
**Alt AR:** شفرة توربين رياح بيضاء طويلة على مساند فولاذية فوق رصيف هادئ، ورافعات باهتة في الضباب خلفها.

### sec-seeds

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/sec-seeds.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with a 100mm lens: on a table dressed in heavy natural linen, a few blank seed packets of plain kraft paper lean together on the left third beside a shallow white earthenware dish of pale seeds and a young seedling in a small clay pot. An oxblood linen napkin lies folded at the table edge, and the light enters through a deep, straight-edged opening in a smooth lime-plastered wall. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Blank kraft seed packets, a white dish of seeds and a seedling in a clay pot on natural linen.
**Alt NL:** Blanco zaadzakjes van kraftpapier, een wit schaaltje zaden en een kiemplantje in een kleipotje op naturel linnen.
**Alt AR:** أكياس بذور فارغة من ورق الكرافت، وطبق أبيض من البذور، وشتلة صغيرة في أصيص فخاري على كتان طبيعي.

### sto-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Libië · **Komt op:** `public/photos/pages/sto-hero.jpg`

```
Create a photorealistic editorial photograph. An interior at seated eye level with a 50mm lens: in a whitewashed oasis room with red geometric motifs painted on the walls, a low walnut table on the right third holds strong tea with a thick pale foam in small glasses, served from a polished stainless-steel tea set, with a small dish of roasted almonds. A low bench along the wall carries one cushion in oxblood wool, the rest of the room bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Foamed tea in small glasses, a steel tea set and roasted almonds on a low table in a whitewashed room.
**Alt NL:** Thee met een dikke schuimkraag in kleine glaasjes, een rvs-theeservies en geroosterde amandelen op een lage tafel in een witgekalkte kamer.
**Alt AR:** شاي برغوة كثيفة في كؤوس صغيرة مع طقم شاي من الفولاذ ولوز محمص على طاولة منخفضة في غرفة مطلية بالجير الأبيض.

### amb-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Jemen · **Komt op:** `public/photos/pages/amb-hero.jpg`

```
Create a photorealistic editorial photograph. A view at standing eye level with a 35mm lens from a stone rooftop terrace across a cluster of tall tower houses of stone and mud brick with white gypsum-trimmed windows and small arched fanlights of coloured glass, whole and well kept, the tallest on the left third. The terrace parapet draws one clean horizontal line across the foreground, and beyond the houses terraced green highland slopes rise into the morning haze. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Tall stone and mud-brick tower houses with white-trimmed windows, terraced green highland slopes behind in morning light.
**Alt NL:** Hoge torenhuizen van steen en leem met wit omlijste ramen, met daarachter groene terrasvormige hellingen in het ochtendlicht.
**Alt AR:** بيوت برجية عالية من الحجر والطوب الطيني بنوافذ مؤطرة بالجص الأبيض، وخلفها مدرجات جبلية خضراء في ضوء الصباح.

### amb-facade

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Golf · **Komt op:** `public/photos/pages/amb-facade.jpg`

```
Create a photorealistic editorial photograph. An upright facade study at standing eye level with a 50mm lens: carved wooden bay windows on a coral-stone facade, the restored house of an old merchant, the nearest bay on the right third with its fine latticed panels in weathered teak. The coral stone is smoothly rendered in warm sand and cream, a plain wooden door stands closed below, and a straight stone cornice draws one clean horizontal line across the top of the frame. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Carved wooden bay windows with fine latticework on the pale coral-stone facade of an old merchant's house.
**Alt NL:** Gesneden houten erkers met fijn latwerk op de lichte koraalstenen gevel van een oud koopmanshuis.
**Alt AR:** نوافذ بارزة من الخشب المنحوت بشبك دقيق على واجهة من الحجر المرجاني الفاتح لبيت تاجر قديم.

### par-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/par-hero.jpg`

```
Create a photorealistic editorial photograph. An interior view from the side of the room at standing eye level with a 35mm lens: the ballroom of a heritage hotel on the water, with tall windows and pale plastered walls, prepared before anyone arrives, round tables dressed in heavy white linen with clear water carafes and plain tumblers, chairs upholstered in sand-coloured bouclé tucked in around them. Low arrangements of white and deep garnet tulips sit at the centre of each table, and beyond the tall windows lies calm grey water. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A hotel ballroom by the water set with round white-linen tables, sand bouclé chairs and low tulip arrangements.
**Alt NL:** Een hotelbalzaal aan het water met ronde tafels in wit linnen, stoelen in zandkleurig bouclé en lage tulpenstukken.
**Alt AR:** قاعة احتفالات في فندق على الماء بطاولات مستديرة مفروشة بالكتان الأبيض وكراسٍ رملية اللون وتنسيقات توليب منخفضة.

### events-hero

**Formaat:** 21:9 · **Licht:** Reportage (helder hedendaags, binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/events-hero.jpg`

```
Create a photorealistic editorial photograph. A documentary view from the back of the room at seated eye level with a 35mm lens across a full conference in a restored brick warehouse fitted out as an event venue, the audience in rows of upholstered armchairs in deep oxblood wool. Dark suits mix with a few white thobes and ghutras and a woman in a long dark tailored coat, her hair tied back, the people are seen from behind or at a distance, absorbed in the moment, the faces in the background small and soft, and nobody looks toward the camera. A speaker stands small and out of focus beside a screen showing only soft pale light. Real, lived-in details: a coat over a chair arm, a notebook open on a knee. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A full conference seen from the back of a brick event hall, rows of oxblood armchairs facing a pale screen.
**Alt NL:** Een volle conferentie vanaf de achterkant van een bakstenen evenementenhal, met rijen oxblood fauteuils voor een licht scherm.
**Alt AR:** مؤتمر ممتلئ يُرى من مؤخرة قاعة فعاليات من الطوب، وصفوف من المقاعد الحمراء الداكنة أمام شاشة مضيئة.

### cal-hero

**Formaat:** 4:5 · **Licht:** Reportage (helder hedendaags, buiten, na de regen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/cal-hero.jpg`

```
Create a photorealistic editorial photograph. A wide outdoor reportage frame at standing eye level with a 35mm lens toward the entrance of a modern exhibition building of glass and steel, plain banners along its facade. Visitors in dark coats walk toward the glass doors, one in a white thobe and ghutra beneath a dark overcoat, the people are seen from behind or at a distance, absorbed in the moment, the faces in the background small and soft, and nobody looks toward the camera. Real, lived-in details: puddles mirroring the facade, a folded umbrella. Composed with a little calm space above and below the subject. Soft, even daylight falls from a low grey sky just after rain, the paving and every surface wet and softly reflective, the air clear and cool, with gentle short shadows. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Visitors in dark coats, seen from behind, walk across wet paving to the glass entrance of an exhibition building.
**Alt NL:** Bezoekers in donkere jassen lopen, van achteren gezien, over nat plaveisel naar de glazen ingang van een beursgebouw.
**Alt AR:** زوار بمعاطف داكنة يسيرون على رصيف مبلل نحو المدخل الزجاجي لمبنى معارض، ويظهرون من الخلف.

### cal-fair

**Formaat:** 3:2 · **Licht:** Reportage (helder hedendaags, binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/cal-fair.jpg`

```
Create a photorealistic editorial photograph. A documentary view at standing eye level with a 35mm lens down a pale grey carpeted aisle of an international trade fair, lined with custom-built architectural pavilion stands with seamless walls in matte white and pale grey lacquer, large softly backlit fabric walls and fine champagne-bronze trims, their fascia panels plain, a floating fabric ceiling element glowing softly above each stand. The nearest stand shows a compact stainless-steel packaging machine, its control panel dark and its steel plates plain, beside lounge chairs in cognac leather. Visitors in dark suits and a few white thobes and ghutras move through the aisle, the people are seen from behind or at a distance, absorbed in the moment, the faces in the background small and soft, and nobody looks toward the camera. Real, lived-in details: a coat over a lounge chair, a cable run neatly along the carpet edge. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Visitors walk a trade fair aisle past lacquered stands, with a packaging machine and cognac leather chairs in front.
**Alt NL:** Bezoekers in het gangpad van een beurs langs gelakte stands, met vooraan een verpakkingsmachine en cognacleren fauteuils.
**Alt AR:** زوار في ممر معرض تجاري بين أجنحة مطلية، وفي المقدمة آلة تعبئة ومقاعد من الجلد بلون الكونياك.

### cal-pavilion

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Golf · **Komt op:** `public/photos/pages/cal-pavilion.jpg`

```
Create a photorealistic editorial photograph. An interior at standing eye level with a 50mm lens: a custom-built pavilion stand after closing time, its fascia panel plain, in a hall of pale limestone and glass with a perforated bronze screen along one wall. A counter of dark-stained oak holds a single sample display of folded woollen cloth in sand, indigo and charcoal, and beside it two armchairs in deep oxblood velvet stand turned toward each other across a low honed stone table, the carpeted aisle beyond empty and still. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** An empty trade fair stand after closing, a dark oak counter with cloth samples and two oxblood velvet armchairs.
**Alt NL:** Een lege beursstand na sluitingstijd, met een donkere eiken balie met stofmonsters en twee oxblood fluwelen fauteuils.
**Alt AR:** جناح معرض خالٍ بعد الإغلاق، بمنضدة من البلوط الداكن عليها عينات قماش ومقعدين من المخمل الأحمر الداكن.

### mis-hero

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Egypte · **Komt op:** `public/photos/pages/mis-hero.jpg`

```
Create a photorealistic editorial photograph. A wide view at standing eye level with a 35mm lens down the central aisle of a modern citrus-packing plant, stainless-steel sorting lines running quietly on both sides carrying bright oranges, their control panels dark and their steel plates plain. Two figures walk away side by side, a man in a dark wool suit and a woman in a tailored trouser suit with a silk headscarf, their backs to the camera, both seen from behind, their faces turned away and out of view. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** Two people seen from behind walk down the aisle of a citrus-packing plant between sorting lines full of oranges.
**Alt NL:** Twee mensen lopen, van achteren gezien, door het middenpad van een citruspakhuis tussen sorteerlijnen vol sinaasappels.
**Alt AR:** شخصان يسيران في الممر الأوسط لمصنع تعبئة حمضيات بين خطوط فرز مليئة بالبرتقال، ويظهران من الخلف.

### mis-nl

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/mis-nl.jpg`

```
Create a photorealistic editorial photograph. A long quayside view at standing eye level with a 50mm lens along a quiet quay of brick and stone on a wide river, a row of restored brick warehouses with tall steel-framed windows rising on the left third. A long plain river barge, its hull painted one even dark colour from bow to stern with a plain, unlettered bow, lies moored along the quay edge, which draws one clean horizontal line across the frame, and the far bank sinks into a flat, pale polder horizon. Composed with a little calm space above and below the subject. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A plain barge moored at a quiet river quay beside brick warehouses, a flat polder horizon in morning light.
**Alt NL:** Een effen binnenvaartschip afgemeerd aan een stille rivierkade bij bakstenen pakhuizen, met een vlakke polderhorizon in het ochtendlicht.
**Alt AR:** مركب نهري بسيط راسٍ عند رصيف هادئ بجانب مستودعات من الطوب، وأفق منبسط لأرض مستصلحة في ضوء الصباح.

### mis-dubai

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, blauw uur) · **Wereld:** Golf · **Komt op:** `public/photos/pages/mis-dubai.jpg`

```
Create a photorealistic editorial photograph. An architectural view at standing eye level with a 35mm lens across a still reflecting pool toward a bright contemporary building of pale limestone and glass, its long facade veiled by perforated bronze screens, the nearest bay on the left third. Warm light glows through the screens from the rooms within, the verticals stand straight, and the pool edge draws one clean horizontal line across the frame. Composed with a little calm space above and below the subject. The soft light of the blue hour just after sunset lies over the scene, the sky a deep, even blue-grey, warm interior lights glowing softly in the windows, calm and low in contrast. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A pale limestone and glass building veiled by perforated bronze screens at dusk, warm light behind the screens.
**Alt NL:** Een gebouw van lichte kalksteen en glas achter geperforeerde bronzen schermen in het blauwe uur, met warm licht erachter.
**Alt AR:** مبنى من الحجر الجيري الفاتح والزجاج تكسوه ستائر برونزية مثقبة عند الغسق، ويتوهج خلفها ضوء دافئ.

### mis-saudi

**Formaat:** 4:5 · **Licht:** Helder hedendaags (buiten, ochtend) · **Wereld:** Golf · **Komt op:** `public/photos/pages/mis-saudi.jpg`

```
Create a photorealistic editorial photograph. A view from the street at standing eye level with a 50mm lens along restored mud-brick walls with triangular crenellations, their smooth earthen render glowing warm on the right third, and just beyond them a contemporary building of pale limestone with deep, straight window openings. The crenellated parapet draws one clean horizontal line across the frame against a pale sky, and a swept stone pavement runs quietly along the foot of the wall. Composed with a little calm space above and below the subject. Low, clear morning daylight comes from one side, soft and pale honey in tone, with long gentle shadows and a light haze still lying in the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Restored mud-brick walls with triangular crenellations beside a modern pale limestone building in low morning light.
**Alt NL:** Gerestaureerde lemen muren met driehoekige kantelen naast een modern gebouw van lichte kalksteen, in laag ochtendlicht.
**Alt AR:** جدران مرممة من الطوب الطيني بشرفات مثلثة بجانب مبنى حديث من الحجر الجيري الفاتح في ضوء الصباح المنخفض.

### mis-reverse

**Formaat:** 4:5 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/mis-reverse.jpg`

```
Create a photorealistic editorial photograph. A deep view at standing eye level with a 50mm lens down a bright contract-packing hall, a stainless-steel filling line paused along the left wall, its control panel dark and its steel plates plain. Two figures stand side by side beside a finished pallet of plain kraft bags, one in a white thobe and ghutra and one in a charcoal wool suit, looking down the hall toward an oxblood-painted steel door at the far end, their backs to the camera, both seen from behind, their faces turned away and out of view. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** Two people seen from behind stand in a bright packing hall, looking toward an oxblood steel door at the end.
**Alt NL:** Twee mensen staan, van achteren gezien, in een lichte verpakkingshal en kijken naar een oxblood stalen deur aan het eind.
**Alt AR:** شخصان يقفان في صالة تعبئة مضيئة وينظران نحو باب فولاذي أحمر داكن في آخرها، ويظهران من الخلف.

### aca-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/aca-hero.jpg`

```
Create a photorealistic editorial photograph. A corner view at standing eye level with a 35mm lens into a small seminar room on the upper floor of a restored canal house with plain white walls, upholstered chairs in sand-coloured wool set in a neat horseshoe around pale oak tables, turned toward a large screen on the right third showing only soft pale light. The tables are bare and freshly wiped, and a light rain streaks the tall windows along the left wall. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A small seminar room with sand-coloured chairs in a horseshoe before a softly lit screen, rain on the windows.
**Alt NL:** Een kleine seminarruimte met zandkleurige stoelen in hoefijzervorm voor een zacht oplichtend scherm, met regen op de ramen.
**Alt AR:** قاعة ندوات صغيرة بكراسٍ رملية اللون على شكل حدوة حصان أمام شاشة بضوء خافت، والمطر على النوافذ.

### aca-notes

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/aca-notes.jpg`

```
Create a photorealistic editorial photograph. A view along a pale ash seminar table at seated eye level with a 50mm lens, places laid ready down its length, each with a closed notebook, a capped pen and a small stemless tulip-shaped tea glass with a thin gold rim, on its own saucer with a small spoon, the tea light and clear. The nearest notebook on the left third is bound in oxblood leather, and a carafe of water stands midway. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A seminar table laid with notebooks, pens and small tea glasses, one notebook bound in oxblood leather.
**Alt NL:** Een seminartafel gedekt met notitieboeken, pennen en kleine theeglaasjes, één notitieboek in oxblood leer gebonden.
**Alt AR:** طاولة ندوات معدّة بدفاتر وأقلام وأكواب شاي صغيرة، وأحد الدفاتر مجلّد بجلد أحمر داكن.

### int-hero

**Formaat:** 4:5 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Egypte · **Komt op:** `public/photos/pages/int-hero.jpg`

```
Create a photorealistic editorial photograph. A close still life at desk height with a 100mm lens: a printed report lies open at a low, oblique angle on the right third of a walnut desk, its lines of type softened into pale grey bands by the shallow focus. Beside it rest folded reading glasses and dark coffee in a small porcelain cup on its saucer, and the light falls through a carved wooden mashrabiya screen, laying a lattice across the desk. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 3:4
```

**Alt EN:** A printed report on a walnut desk beside reading glasses and a small cup of dark coffee, in latticed light.
**Alt NL:** Een geprint rapport op een notenhouten bureau naast een leesbril en een kopje donkere koffie, in licht door een mashrabiya.
**Alt AR:** تقرير مطبوع على مكتب من خشب الجوز بجانب نظارة قراءة وفنجان قهوة داكنة، في ضوء يتسلل عبر مشربية.

### int-band

**Formaat:** 21:9 · **Licht:** Helder hedendaags (buiten, nevel) · **Wereld:** Libië · **Komt op:** `public/photos/pages/int-band.jpg`

```
Create a photorealistic editorial photograph. A long telephoto view at standing eye level with a 135mm lens from a stone jetty across still water toward a seafront of pale arcaded buildings from the Italian era, lined with palms, their arcades and shuttered upper windows running in an even rhythm. The low sea wall draws one clean horizontal line across the frame just above the water, and the promenade along it lies quiet and swept. Composed as a slim panorama, the subject held in the middle band of the frame with calm space above and below. Bright, soft, diffused daylight through a high, pale haze lies evenly over the scene, with clean whites, gentle short shadows and a light haze softening the distance. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 16:9
```

**Alt EN:** A calm seafront of pale arcaded buildings lined with palms, seen across still water in soft haze.
**Alt NL:** Een rustige boulevard met lichte gebouwen met arcades en palmen, gezien over stil water in zachte nevel.
**Alt AR:** واجهة بحرية هادئة من مبانٍ فاتحة ذات أروقة تصطف على جانبها أشجار النخيل، تُرى عبر مياه ساكنة في ضباب خفيف.

### legal-hero

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/legal-hero.jpg`

```
Create a photorealistic editorial photograph. A detail at standing eye level with an 85mm lens: a row of plain linen-bound folders in stone, sand and slate blue stands on an oak shelf, one folder bound in oxblood leather among them on the right third, their spines plain. In front of the row one folder lies flat with a capped fountain pen resting parallel to its edge, and the shelf edge draws one clean horizontal line across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** Plain linen-bound folders on an oak shelf, one in oxblood leather, another lying flat with a fountain pen.
**Alt NL:** Effen linnen mappen op een eiken plank, één in oxblood leer, en een liggende map met een vulpen.
**Alt AR:** ملفات بسيطة مجلّدة بالكتان على رف من البلوط، أحدها بجلد أحمر داكن، وملف آخر مسطّح عليه قلم حبر.

### leg-privacy

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/leg-privacy.jpg`

```
Create a photorealistic editorial photograph. A quiet still life at table height with a 90mm lens: a closed folder of dark brown leather lies on the left third of a table of honed charcoal stone, tied shut with a narrow sadu-woven band in black, cream and indigo knotted once at its edge. A small brass key on a plain ring rests beside it, the rest of the table bare, its front edge drawing one clean horizontal line across the frame. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A closed dark brown leather folder tied with a narrow woven band, a small brass key beside it.
**Alt NL:** Een gesloten donkerbruine leren map, dichtgebonden met een smalle geweven band, met een klein messing sleuteltje ernaast.
**Alt AR:** ملف جلدي بني داكن مغلق ومربوط بشريط منسوج ضيق، وبجانبه مفتاح نحاسي صغير.

### leg-cookies

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/leg-cookies.jpg`

```
Create a photorealistic editorial photograph. A calm view at seated eye level with a 50mm lens across a pale ash table in a bright room with plain white walls: a closed laptop in pale grey aluminium lies on the right third with a plain tumbler of water beside it. The rest of the table is bare, a pale oak chair stands tucked in, and the tall windows behind glow softly. The table edge draws one clean horizontal line across the frame. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A closed laptop and a tumbler of water on a bare pale ash table in a bright white room.
**Alt NL:** Een dichtgeklapte laptop en een glas water op een lege tafel van licht essenhout in een lichte, witte kamer.
**Alt AR:** حاسوب محمول مغلق وكوب ماء على طاولة فارغة من خشب الدردار الفاتح في غرفة بيضاء مضيئة.

### leg-terms

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/leg-terms.jpg`

```
Create a photorealistic editorial photograph. A close view at desk height with an 85mm lens: a contract lies on an oxblood leather desk blotter on the right third of a dark oak desk, its pages fanned at a low, oblique angle, its lines of type softened into pale grey bands by the shallow focus, the signature lines bare. A capped fountain pen rests parallel to its edge, and the window's perforated bronze screen lays a geometric pattern across the pages. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A contract with bare signature lines on an oxblood leather blotter, a fountain pen beside it, in patterned light.
**Alt NL:** Een contract met lege handtekeningregels op een oxblood leren onderlegger, met een vulpen ernaast, in licht door een geperforeerd scherm.
**Alt AR:** عقد بخانات توقيع فارغة على لوح مكتب من الجلد الأحمر الداكن، وبجانبه قلم حبر، في ضوء يتسلل عبر ستارة مثقبة.

### leg-disclaimer

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/leg-disclaimer.jpg`

```
Create a photorealistic editorial photograph. A tight still life at table height with a 100mm lens: a brass-rimmed loupe with a dark wooden handle rests on a closed folder of pale grey card, which lies squared on the left third of a table dressed in heavy natural linen. A plain pewter dish holding a single sharpened pencil stands beside it, the rest of the linen bare, its soft folds catching the light. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A brass-rimmed loupe resting on a closed grey folder on natural linen, a pewter dish with a pencil beside it.
**Alt NL:** Een loep met messing rand op een gesloten grijze map op naturel linnen, met een tinnen schaaltje en een potlood ernaast.
**Alt AR:** عدسة مكبّرة بإطار نحاسي على ملف رمادي مغلق فوق كتان طبيعي، وبجانبها طبق من القصدير وقلم رصاص.

### leg-company

**Formaat:** 3:2 · **Licht:** Helder hedendaags (buiten, na de regen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/leg-company.jpg`

```
Create a photorealistic editorial photograph. A frontal view at standing eye level with a 50mm lens across a quiet street toward the entrance of a restored brick warehouse converted into offices, an oxblood-painted steel-framed glass door set on the right third within a deep brick reveal, tall steel-framed windows repeating along the facade. The wet clinker paving in front reflects the door and the brick, a low stone step draws one clean horizontal line across the frame, and the street lies quiet. Composed with a little calm space above and below the subject. Soft, even daylight falls from a low grey sky just after rain, the paving and every surface wet and softly reflective, the air clear and cool, with gentle short shadows. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** The entrance of a restored brick warehouse with an oxblood steel-framed glass door, wet paving after rain.
**Alt NL:** De ingang van een gerestaureerd bakstenen pakhuis met een oxblood stalen glazen deur, en nat plaveisel na de regen.
**Alt AR:** مدخل مستودع مرمم من الطوب بباب زجاجي بإطار فولاذي أحمر داكن، ورصيف مبلل بعد المطر.

### leg-member-data

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/leg-member-data.jpg`

```
Create a photorealistic editorial photograph. A still life at seated eye level with an 85mm lens: a wooden card-index drawer in pale oak is pulled open on the right third of a walnut desk, rows of plain blank cards standing inside, their top edges catching the light. Beside it stands a small stemless tulip-shaped tea glass with a thin gold rim, on its own saucer with a small spoon, the tea light and clear, the rest of the desk bare. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** An open wooden card-index drawer with blank cards on a walnut desk, a small tea glass beside it.
**Alt NL:** Een geopende houten kaartenbak met blanco kaarten op een notenhouten bureau, met een klein theeglaasje ernaast.
**Alt AR:** درج بطاقات خشبي مفتوح فيه بطاقات فارغة على مكتب من خشب الجوز، وبجانبه كوب شاي صغير.

### leg-transfers

**Formaat:** 3:2 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/leg-transfers.jpg`

```
Create a photorealistic editorial photograph. A close view at table height with a 100mm lens: a plain parcel wrapped in kraft paper tied with string sits on the left third of a pale honed travertine table, sealed at the knot with an oxblood wax seal pressed with a plain ring of fine engraved lines. A closed linen-bound notebook lies beside it, and through the window at the right the fronds of a date palm stand soft and out of focus. Composed with a little calm space above and below the subject. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A kraft-paper parcel tied with string and sealed with oxblood wax on pale travertine, a notebook beside it.
**Alt NL:** Een pakketje in kraftpapier, dichtgebonden met touw en verzegeld met oxblood lak, op licht travertin, met een notitieboek ernaast.
**Alt AR:** طرد ملفوف بورق الكرافت ومربوط بخيط ومختوم بشمع أحمر داكن على ترافرتين فاتح، وبجانبه دفتر.

### contact-hero

**Formaat:** 3:2 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/contact-hero.jpg`

```
Create a photorealistic editorial photograph. A quiet corner view at seated eye level with a 50mm lens: a small round oak table with two plain oak chairs stands by a tall window on the left third of a restored canal-house room with plain white walls, set with a clear carafe of water and two plain tumblers, ready for a meeting. Through the glass the gables of the canal houses opposite stand soft in the daylight, and the wide oak floorboards run bare toward the window. Composed with a little calm space above and below the subject. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 4:3
```

**Alt EN:** A round oak table with two chairs by a tall canal-house window, set with a water carafe and two tumblers.
**Alt NL:** Een ronde eiken tafel met twee stoelen bij een hoog raam in een grachtenpand, met een karaf water en twee glazen.
**Alt AR:** طاولة مستديرة من البلوط بكرسيين بجانب نافذة طويلة في منزل على القناة، وعليها إبريق ماء وكوبان.

---

## Brede banden voor de masthead (1 oktober 2026)

Dezelfde taferelen als hun staande of liggende origineel, opnieuw gecomponeerd voor de 21:9-band bovenaan de pagina (onderwerp in de onderste middenstrook, de bovenkant rustig onder de gouden lijn). De alt-tekst is die van het origineel, omdat het hetzelfde tafereel is.

### story-tulip-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Beide · **Komt op:** `public/photos/pages/story-tulip-band.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with a 50mm lens: a single deep garnet tulip leans from a plain white earthenware jug on the left third of a pale ash table set close to the window. Beside the jug a single hand-painted tile with a cobalt and deep red tulip motif, patterned with flowers only, stands propped against the plastered wall, and the table edge runs as one calm horizontal line across the frame. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** A single deep red tulip in a white earthenware jug beside a hand-painted tulip tile on a pale ash table.
**Alt NL:** Eén donkerrode tulp in een witte aardewerken kan naast een beschilderde tulpentegel op een lichte essenhouten tafel.
**Alt AR:** زهرة توليب واحدة حمراء داكنة في إبريق فخاري أبيض بجانب بلاطة مرسومة يدويًا بزخرفة التوليب على طاولة فاتحة من خشب الدردار.


### values-value-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/values-value-band.jpg`

```
Create a photorealistic editorial photograph. A wide still life at worktable height with a 50mm lens: a precision-milled steel part with clean bores and bright machined edges rests on a folded linen cloth on the left third of a table of honed charcoal stone. Beside it lie a slim steel caliper, its fine scale soft beyond the plane of focus, and a small aged brass oil can with a long thin spout, the rest of the stone bare. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** A milled steel part on a folded linen cloth, with a steel caliper and a small brass oil can.
**Alt NL:** Een gefreesd stalen onderdeel op een gevouwen linnen doek, met een schuifmaat en een klein messing oliekannetje.
**Alt AR:** قطعة فولاذية مصنّعة بدقة على قطعة كتان مطوية، مع قدمة قياس فولاذية وعلبة زيت نحاسية صغيرة.


### why-hero-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Beide · **Komt op:** `public/photos/pages/why-hero-band.jpg`

```
Create a photorealistic editorial photograph. A view at seated eye level with a 50mm lens of a round oak table set for two, with two small stemless tulip-shaped tea glasses with thin gold rims, each on its own saucer with a small spoon, the tea light and clear, facing each other on white linen, a carafe of water between them. Two oak chairs stand on either side, one pulled back slightly. The two sides mirror each other across the frame. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** Two tea glasses on saucers face each other on a small round oak table, with a carafe of water between.
**Alt NL:** Twee theeglaasjes op schoteltjes tegenover elkaar op een kleine ronde eiken tafel, met een karaf water ertussen.
**Alt AR:** كأسا شاي متقابلتان على صحنيهما فوق طاولة مستديرة من خشب البلوط، وبينهما إبريق ماء زجاجي.


### sto-hero-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Libië · **Komt op:** `public/photos/pages/sto-hero-band.jpg`

```
Create a photorealistic editorial photograph. An interior at seated eye level with a 50mm lens: in a whitewashed oasis room with red geometric motifs painted on the walls, a low walnut table on the right third holds strong tea with a thick pale foam in small glasses, served from a polished stainless-steel tea set, with a small dish of roasted almonds. A low bench along the wall carries one cushion in oxblood wool, the rest of the room bare. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** Foamed tea in small glasses, a steel tea set and roasted almonds on a low table in a whitewashed room.
**Alt NL:** Thee met een dikke schuimkraag in kleine glaasjes, een rvs-theeservies en geroosterde amandelen op een lage tafel in een witgekalkte kamer.
**Alt AR:** شاي برغوة كثيفة في كؤوس صغيرة مع طقم شاي من الفولاذ ولوز محمص على طاولة منخفضة في غرفة مطلية بالجير الأبيض.


### how-tea-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Algerije · **Komt op:** `public/photos/pages/how-tea-band.jpg`

```
Create a photorealistic editorial photograph. A wide still life at low-table height with a 50mm lens: a low table of pale ash in a white-walled room holds, on its right third, pale green mint tea in small decorated glasses beside a polished nickel-silver teapot, with a sprig of fresh mint on a small white earthenware saucer. The tall window at the left has pale blue wooden shutters folded half open. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** Mint tea in small decorated glasses beside a polished teapot on a low table, by a window with blue shutters.
**Alt NL:** Muntthee in kleine versierde glaasjes naast een glanzende theepot op een lage tafel, bij een raam met blauwe luiken.
**Alt AR:** شاي بالنعناع في كؤوس صغيرة مزخرفة بجانب إبريق لامع على طاولة منخفضة، قرب نافذة بمصاريع زرقاء.


### adv-hero-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/adv-hero-band.jpg`

```
Create a photorealistic editorial photograph. A still life at table height with a 50mm lens: a closed linen-bound notebook rests squared on a closed laptop in matte grey aluminium on the left third of a table of honed charcoal stone, a capped fountain pen laid parallel beside them and a plain tumbler of water behind. The table edge runs as one calm horizontal line across the frame, the rest of the stone bare. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** A closed laptop, a linen-bound notebook and a fountain pen on a dark stone table.
**Alt NL:** Een dichtgeklapte laptop, een linnen notitieboek en een vulpen op een donkere stenen tafel.
**Alt AR:** حاسوب محمول مغلق ودفتر بغلاف من الكتان وقلم حبر على طاولة من الحجر الداكن.


### stk-hero-band

**Formaat:** 21:9 · **Licht:** Helder hedendaags (binnen) · **Wereld:** Libië · **Komt op:** `public/photos/pages/stk-hero-band.jpg`

```
Create a photorealistic editorial photograph. A calm warehouse interior at standing eye level with a 35mm lens: tall rolls of plain white and kraft paper stand on end on the left third beside pallets wrapped in clear shrink film, between whitewashed walls. Through a high open door at the far end, palm groves lie in bright haze, and the clean concrete floor catches the daylight. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Bright, soft, diffused daylight from large clear windows fills the space evenly, with clean whites, gentle short shadows and a sense of open, orderly calm. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** Tall rolls of paper and shrink-wrapped pallets in a whitewashed warehouse, with palm groves beyond an open door.
**Alt NL:** Hoge papierrollen en pallets in krimpfolie in een witgekalkt magazijn, met palmbossen achter een open deur.
**Alt AR:** لفائف ورق طويلة ومنصّات مغلّفة في مستودع مطليّ بالجير، وخلف باب مفتوح بساتين نخيل.


### ver-hero-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam rechts) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/ver-hero-band.jpg`

```
Create a photorealistic editorial photograph. A wide detail at table height with a 50mm lens: a hand turns a page in a company file bound in oxblood leather on the left third of a dark oak table, the page at a low, oblique angle, its lines of type softened into pale grey bands by the shallow focus. A pair of folded reading glasses and a brass-rimmed loupe rest beside it. Only one hand and its shirt cuff are in frame. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the right falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** One hand turns a page in an oxblood leather company file, with reading glasses and a brass loupe beside it.
**Alt NL:** Eén hand slaat een pagina om in een oxblood leren bedrijfsdossier, met een leesbril en een messing loep ernaast.
**Alt AR:** يد واحدة تقلّب صفحة في ملف شركة بغلاف جلدي عنابي، وبجانبه نظارة قراءة وعدسة مكبّرة نحاسية.


### docs-desk-band

**Formaat:** 21:9 · **Licht:** Koopmanslicht (raam links) · **Wereld:** Nederland · **Komt op:** `public/photos/pages/docs-desk-band.jpg`

```
Create a photorealistic editorial photograph. A wide still life at table height with a 50mm lens: a neat stack of shipping documents squared at the edges lies at a low, oblique angle on the right third of a pale honed travertine table, its lines of type softened into pale grey bands by the shallow focus, the signature lines still bare. A capped fountain pen lies beside a pair of folded reading glasses and a small plain brass paperweight. Composed as a slim panorama: the subject sits in the lower middle band of the frame and the table or floor runs calmly across the full width, while the upper part of the frame stays quiet, open and uncluttered. Soft daylight from a single tall window at the left falls across the scene at a low side angle, warm and still, modelling every material with a long, gentle falloff into deep, warm, transparent shadow, the background receding into a calm, darker tone. Natural, rich colour with a restrained grade: softly lifted blacks, warm honey midtones, highlights held at a soft warm white, very fine grain, every colour coming from the real materials and the light. Any writing stays soft and unreadable, and every object is unbranded. Calm editorial composition with generous negative space and a natural, gently shallow depth of field. Photorealistic, shot on a medium-format camera, with the honest look of a real photograph. Aspect ratio 21:9
```

**Alt EN:** A squared stack of shipping documents beside a fountain pen, reading glasses and a brass paperweight on travertine.
**Alt NL:** Een nette stapel verzenddocumenten naast een vulpen, een leesbril en een messing presse-papier op travertin.
**Alt AR:** رزمة مرتّبة من مستندات الشحن بجانب قلم حبر ونظارة قراءة وثقّالة ورق نحاسية على طاولة من الترافرتين.

