# DUKAAT — logo-animaties (Remotion)

Vijf animatieconcepten van het DUKAAT-logo, gebouwd met [Remotion](https://www.remotion.dev).
Bron: `05-Media/logoconcept/DKTONLY1.svg`, opgesplitst in 11 benoemde lagen in `src/logo/paths.ts`.

## Composities

| ID | Concept | Duur | Achtergrond |
|---|---|---|---|
| `01-Munt` | dukaat valt, wordt de vlam, tulp klapt open, letters stijgen, balk tekent | 4,7 s | papier |
| `02-Bloei` | knop opent, woordmerk trekt strak, daarna ademende loop met glans | 11 s | papier |
| `02-Bloei-Loop` | alleen de naadloze ademloop (website-hero) | 6 s | papier |
| `03-Lijn` | gouden gravurelijn tekent contouren, vulling vloeit omhoog, goudstof | 5,3 s | donker bordeaux |
| `04-Kruising` | twee lijnen kruisen, banden groeien, DUK/AAT vergrendelen, tagline EN → AR | 7,9 s | papier |
| `05-Signatuur` | lichtsweep onthult het merk, letters uit onscherpte, balk-flare, gouden lijn | 4,3 s | nacht |

Alle composities hierboven zijn 1920 × 1080 bij 30 fps.

## Telefoonset V1 (1080 × 1920, papier)

| ID | Inhoud | Concept | Duur |
|---|---|---|---|
| `V1-01-Tulp-Munt` | alleen de tulp | dukaat valt en wordt de tulp | 3,7 s |
| `V1-02-Tulp-Bloei` | alleen de tulp | knop opent, daarna ademende loop | 10 s |
| `V1-03-Lijn` | compleet logo | gravurelijn in goud op papier, vulling vloeit omhoog | 5,3 s |
| `V1-04-Kruising` | compleet logo | lijnen kruisen, DUK/AAT vergrendelen, tagline EN → AR | 7,9 s |
| `V1-05-Signatuur` | compleet logo | lichtsweep op papier, letters uit onscherpte, gouden lijn | 4,3 s |

In portret staat het beeldmerk 1,45× vergroot boven het woordmerk (`MARK_T_PORTRAIT` in `Layers.tsx`).
Elke scène accepteert `layout` (`landscape` | `portrait` | `portrait-mark`), en waar relevant `markOnly` of `light`.

## Telefoonset V2 (1080 × 1920, papier) — de creatieve ronde

| ID | Concept | Duur |
|---|---|---|
| `V2-01-Muntslag` | blind-gedebost logo in het papier; één slag: flits, schok, goud vloeit vanuit het inslagpunt, goudstof; woordmerk stempelt, balk als folie | 7,3 s |
| `V2-02-Kinetisch` | zes letters snijden schermvullend in en vliegen naar hun plek; tulp valt erop; tagline woord-voor-woord door een venster, dan Arabisch | 7,9 s |
| `V2-03-Goudfolie` | macro in het goud, geborsteld folie met lopend licht, camera trekt terug met parallax; woordmerk letterpress → inkt; balk als folie | 8,3 s |
| `V2-04-TweeWerelden` | papier boven, zand onder, gouden haarlijn ertussen; tulp daalt uit Nederland, woordmerk stijgt uit de Arabische wereld; haarlijn wordt de A-balk | 8,3 s |
| `V2-05-Zegel` | geslagen dukaat valt draaiend door het beeld (randtekst, tulp gegraveerd, 1586 achterop), landt, en de gravure wordt het levende merk | 8,7 s |

Gedeelde effecten staan in `src/logo/fx.tsx` (deboss/emboss-filter, live goud, geborsteld folie, camera-shake, deeltjesburst) en de copy in `src/brand.ts`.

## Gebruik

```bash
npm install
npm run studio          # interactieve preview op http://localhost:3000
npm run render:all      # alle composities naar out/<id>.mp4
node render-all.mjs --set=v1         # telefoonset V1
node render-all.mjs --set=v2         # telefoonset V2 (de creatieve ronde)
node render-all.mjs --ids=V1-04-Kruising,05-Signatuur
npx remotion render 05-Signatuur out/signatuur.mp4          # één compositie
npx remotion render 02-Bloei-Loop out/loop.webm --codec=vp8 # transparant/webm
npx remotion still 01-Munt out/munt.png --frame=60          # stilstaand beeld
```

## Structuur

```
src/
  index.ts          registerRoot
  Root.tsx          de zes composities
  util.ts           seg / spring / easing-helpers
  logo/paths.ts     gegenereerde laagdata (paden, matrices, bounding boxes, kleuren)
  logo/Layers.tsx   <LogoLayer>, <Stage>, gouden gradient, grain/vignet/glow
  scenes/*.tsx      één bestand per concept
```

`<LogoLayer name="…">` tekent één laag op zijn originele plek in het 3160 × 1650 viewBox.
Animaties gebeuren in viewBox-eenheden met `about(x, y, "rotate(…) scale(…)")` rond een draaipunt.

## Kleuren (uit de SVG)

bordeaux `#6F0A25` · goudverloop `#DCB17A → #9E7946` · dwarsbalk `#B39455` · papier `#EDEAE1`
