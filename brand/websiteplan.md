# DUKAAT — websiteplan: echte tekst en foto's op elke pagina

Versie 29 september 2026. Dit plan is het contract voor de volledige invulling van de site: elke pagina krijgt definitieve tekst in het Engels, Nederlands en Arabisch, eigen foto's in de huisstijl "Known Weight", en een eigen opbouw. Twijfelpunten worden bijgehouden en staan in het verslag aan het eind van het werk.

**Bijgewerkt na uw besluiten in het verslag (29 september 2026).** Waar dit plan en de besluiten verschillen, gaan de besluiten voor; ze staan samengevat in hoofdstuk 7.

---

## 1. Uitgangspunten voor de tekst

1. **Beschrijven, niet verantwoorden.** De site beschrijft wat DUKAAT doet en waar zij voor staat, in de tegenwoordige tijd: "DUKAAT organiseert handelsmissies naar…", niet "wij hebben … georganiseerd" en niet "binnenkort". Nergens aantallen (leden, events, deals, jaren ervaring behalve Anno 2018), nergens "in voorbereiding", "fase 2", "de eerste sectorclub", "te zijner tijd", "zodra er leden zijn".
2. **Geen verzonnen bewijs.** Geen ledenlijsten, logo's, testimonials, echte of nep-aanvragen, cases of cijfers. Waar een voorbeeld verduidelijkt (hoe een inkoopaanvraag eruitziet), staan de voorbeeldregels zonder label: dat ze voorbeelden zijn, spreekt voor zich.
3. **Op voordracht of uitnodiging.** Toelating is op voordracht of uitnodiging; bedrijven kunnen zich ook aanmelden (intake-optie "Ik wil mij aanmelden als lid"), maar een aanmelding garandeert geen lidmaatschap: elk bedrijf wordt eerst beoordeeld. Nooit iets over meer of minder leden per sector of markt. De acht routes blijven; de achtste is "Ik ben voorgedragen".
4. **Geen prijzen.** Alleen het verdienmodel: jaarabonnement, projectwerk vooraf schriftelijk geoffreerd, geen verborgen commissies.
5. **Vaste zinnen letterlijk:** de juridische regel ("Wij nemen geen gelden van leden in bewaring…"), de investeringsdisclaimer, de kernzin "The ducat was a language both sides already spoke", de dukaatfeiten (4 augustus 1586 · 3,494 g · 983/1000 · sultani 1477–78 · bunduqi = Venetië), "Technology narrows the search; people verify".
6. **Geen Syrië**, geen "AI finds". Corridors algemeen: Nederland en Europa, de Golf, de bredere Arabische wereld. Programmanamen uit de bron (Discover Dubai, Discover Saudi Arabia) mogen.
7. **Openstaande waarden blijven tussen haken** en worden zichtbaar als "nog te bevestigen" gemarkeerd: reactietermijnen, garantiecijfers, adres, KvK, btw, e-mail, namen van de oprichters. Die vult alleen u in.
8. **Toon:** ingetogen zelfvertrouwen, mechanisme boven belofte, precies, warm maar nooit verkoperig. Engels: Brits, geen uitroeptekens. Nederlands: u-vorm, sober zakelijk. Arabisch: formeel modern standaard-Arabisch, zakelijk register, westerse cijfers, waar mogelijk de eigen formuleringen van uw compagnon.

## 2. Ontwerp: een blokbibliotheek, elke pagina anders

Elke binnenpagina wordt opgebouwd uit blokken (`content/pages/types.ts`). De opbouw staat één keer vast per pagina, de tekst per taal ernaast, zodat de drie talen nooit uit elkaar lopen.

**Koppen (masthead), vier varianten die rouleren:**
- **band** — titel en lede, daaronder een brede foto (21:9) over de volle breedte: de grote foto.
- **portrait** — titel links, een staande foto (4:5) rechts die boven de gouden lijn uitsteekt.
- **plate** — titel en lede met een kleine foto (3:2) naast de lede.
- **type** — alleen typografie (juridische teksten krijgen daarnaast één klein beeld).

**Blokken:** lead (openingszin groot) · prose (tekst naast foto: klein, half of staand, links of rechts) · band (foto over de volle breedte) · duo (grote en kleine foto verspringend) · mosaic (vier kleine foto's) · register (grootboekregels, 1 of 2 kolommen, genummerd, of als uitgesproken zinnen) · terms (typografische lijst van categorieën) · steps · sequence (Zoeken → Introductie → Vertrouwen → Samenwerking → Zaken) · statement (één grote zin op de gouden lijn) · quote (stem van een oprichter) · contrast (voor wie / niet voor wie) · facts (specificatieblad, bijvoorbeeld de dukaat) · tiers (de drie niveaus) · specimen (de vorm van een profiel of aanvraag, getypografeerd als formulier) · chapter (vaste kop links, items rechts met kleine foto's) · faq · notice (juridische kaders) · dark (het ene donkere blok per pagina) · legal (artikelen met inhoudsopgave) · index (overzichtspagina's: de onderliggende pagina's met hun eigen foto's) · routes · home (een homepagesectie hergebruiken) · next (de afsluitende volgende stap).

**Ritme:** elke pagina wisselt groot en klein af; hooguit één donker blok; nooit twee brede foto's direct na elkaar; overzichtspagina's tonen hun onderliggende pagina's als redactionele index met foto's (eerste groot, de rest kleiner). Onder elke pagina blijven "In deze rubriek" en "Verder op de site" staan.

## 3. Foto's

- Stijlboek: `brand/fotostijl/DUKAAT-fotostijl.md` ("Known Weight"): koopmanslicht en helder hedendaags, handel als stilleven, clubleven als de ruimte vlak voordat iemand binnenkomt, reportage voor beurzen en conferenties, geen gezichten, geen tekst, geen clichés.
- Gemaakt met de generator die we hebben ingericht (`npm run photos`: Nano Banana 2 via de Gemini-API, dezelfde modellen als Google Flow), twee varianten per beeld, automatische controle op tekst, randen, handen, en daarna mijn eigen beoordeling van elke variant.
- Ongeveer 88 nieuwe beelden, in drie hoofdformaten: 21:9 (banden), 3:2 (half en plaatjes), 4:5 (staand). Variatie over de hele site: wereld (Nederland, zeven Arabische regio's, kruising), licht (koopmanslicht met het raam om en om links en rechts, helder binnen, helder buiten in wisselend weer), hoofdvoorwerp, tafelblad en oxblood om en om.
- De 20 homepagefoto's blijven waar ze staan; waar een homepagesectie op een pagina terugkomt, komen haar foto's mee.
- Prompts komen in `brand/fotostijl/paginas-fotos.md`, keuzes in `flow-export/keuze.json`, export naar `public/photos/pages/`.

## 4. Nieuwe pagina's

De bron-PDF beschrijft drie onderdelen die nog geen pagina hadden. Omdat de site "alles wat wij doen" beschrijft, komen erbij:
- **Wat wij doen → Specialistisch advies** (`services/advisory`): juridisch, fiscaal, financieel, marketing, PR, structurering — door onafhankelijke specialisten uit het netwerk.
- **Netwerk → Ambassadeurs** (`network/ambassadors`): ambassadeurs in verschillende markten en steden (nooit "één per markt", nooit "exclusief").
- **Netwerk → Partners** (`network/partners`): samenwerking, sponsoring en de Golden Ten.

Daarnaast verandert **"Sectorclub Food & Agriculture"** in **"Sectorclubs"** (alle acht sectoren, neutraal beschreven).

## 5. Pagina voor pagina

Notatie: blok · inhoud · `foto-id` (formaat). Bronverwijzingen: p.N = bron-PDF, AR = Arabische versie van uw compagnon.

### Over DUKAAT (`about`, overzicht)
Masthead band · `about-hero` (21:9) entree: wollen overjas en bisht naast elkaar.
1. lead — wie wij zijn (p.3–4).
2. register, genummerd, foto `about-maker` (4:5) — "Kansen zijn overal": de vier situaties van p.4.
3. statement — "Hier komt DUKAAT in beeld: wij bouwen de omgeving waarin de juiste mensen elkaar vinden."
4. duo `about-room` (3:2) + `about-coffee` (4:5) — Meer dan een businessclub: van "Ik zoek…" tot "Ik heb gevonden" (p.5, AR).
5. band `about-port` (21:9) — "Nederland is het beginpunt, de wereld de richting" (alleen in AR-bron).
6. facts — Anno 2018: stichting, jaar, vestiging, talen, toelating.
7. index · 8. next → De naam, Zo werken wij.

### De naam (`about/story`)
Masthead portrait · `story-balance` (4:5) messing weegschaal met gewichten, schaal leeg.
1. lead — de naam komt van de Nederlandse handelsdukaat.
2. facts met de naamfilm — de munt: 1586, 3,494 g, 983/1000, Koninklijke Nederlandse Munt, sultani, bunduqi.
3. prose — de kracht zat nooit in het goud alleen.
4. statement — de kernzin.
5. prose half `story-tulip` (3:2) — de tulp stak ook over: het beeldmerk, de gekruiste banden, de gouden balk.
6. band `story-river` (21:9) — waarde van markt naar markt, en vandaag van mens tot mens.
7. next → Visie, missie & waarden.

### Waarom DUKAAT (`about/why`)
Masthead plate · `why-hero` (3:2) tafel voor twee.
1. lead — een zoekmachine geeft namen, geen relatie.
2. register 2 kolommen — wat je werkelijk moet weten (p.23).
3. home: de drie claims (met hun foto's).
4. contrast — technologie / menselijke verbinding (AR).
5. statement — kwaliteit van de relatie boven het aantal namen (AR).
6. next → Zo werken wij, Voor wie.

### Visie, missie & waarden (`about/values`)
Masthead band · `values-court` (21:9) Golf-binnenplaats.
1. terms — visie: waar bedrijven naar zoeken (p.7).
2. sequence — missie: zoeken → introductie → vertrouwen → samenwerking → zaken.
3. chapter met drie plaatjes — Value `values-value`, Trust `values-trust`, Access `values-access` (4:5).
4. register genummerd — de tien doelstellingen (p.8).
5. terms — voor wie wij er zijn (AR).
6. next → Achter DUKAAT.

### Achter DUKAAT (`about/founders`)
Masthead band · `founders-table` (21:9) de twee vakken op één tafel.
1. lead · 2. home: de twee oprichters.
3. quote oprichter 1, lange versie (p.24) met `founders-store` (4:5).
4. quote oprichter 2 met `founders-desk` (4:5) — tekst is een voorstel, oprichter 2 keurt goed.
5. facts — waar wij zitten · 6. next → Contact.

### Wat wij doen (`services`, overzicht)
Masthead band · `services-hero` (21:9) distributiecentrum in bedrijf.
1. lead · 2. register 2 kolommen genummerd — de zestien dingen die wij doen (AR "ماذا نفعل؟").
3. routes — de acht routes · 4. index.
5. contrast — Ik bied / Ik zoek (DUKAAT Connect, p.18) · 6. register als uitgesproken zinnen — Business Concierge (p.18).
7. next.

### Inkoop & distributie (`services/trade`)
Masthead portrait · `trade-samples` (4:5) stofstalen en stoelpoot.
1. lead · 2. chapter — leverancier `trade-supplier`, distributeur `trade-distributor`, koper `trade-buyer` (4:5).
3. steps — zo loopt een zoektocht · 4. terms — sectoren · 5. next → intake leverancier/distributeur.

### Markttoetreding (`services/market-entry`)
Masthead band · `me-hero` (21:9) zakendistrict aan een brede rivier.
1. lead · 2. contrast — twee richtingen · 3. steps — structuur, partner, eerste order.
4. prose half `me-culture` (3:2) — zakencultuur · 5. register — wat erbij kan horen · 6. next → intake markttoetreding, handelsmissies.

### Vertegenwoordiging (`services/representation`)
Masthead plate · `rep-hero` (3:2) lichte vergaderkamer.
1. lead · 2. register — wat vertegenwoordiging omvat · 3. prose staand `rep-window` (4:5) — verschilt per regio · 4. notice — reikwijdte schriftelijk · 5. next.

### Documenten, douane & logistiek (`services/documents`)
Masthead portrait · `docs-desk` (4:5) verzenddocumenten.
1. lead · 2. register 2 kolommen — wat wij met u regelen · 3. band `docs-dock` (21:9) · 4. notice — betalingen lopen nooit via DUKAAT · 5. statement — tot de eerste zending landt · 6. next.

### Investeringskansen (`services/investment`)
Masthead band · `inv-hero` (21:9) kalksteen en glas.
1. lead · 2. terms — sectoren · 3. register — vormen (Meet the Developer, Meet the Project Owner) · 4. notice — de investeringsdisclaimer, letterlijk · 5. prose half `inv-meeting` (3:2) · 6. next → intake investeren/investeringskans.

### Specialistisch advies (`services/advisory`, nieuw)
Masthead plate · `adv-hero` (3:2).
1. lead · 2. register 2 kolommen — de disciplines · 3. notice — wij introduceren, de specialist adviseert · 4. prose staand `adv-specialist` (4:5) · 5. next.

### Zo werken wij (`how-we-work`, overzicht)
Masthead band · `how-hero` (21:9) pakhuiskantoor aan de rivier.
1. lead · 2. steps — de vijf stappen, volledig · 3. facts met `how-tea` (4:5) — werken met ons: talen, reactietijden, kantooruren, waar, hoe wij factureren · 4. index · 5. next → Lidmaatschap.

### Verificatie & toelating (`how-we-work/verification`)
Masthead portrait · `ver-hero` (4:5) één hand slaat een bedrijfsdossier om.
1. lead · 2. register genummerd — wat wij controleren · 3. steps — toelating · 4. specimen — het verificatiedossier (blijft bij DUKAAT) · 5. statement · 6. next.

### Hoe wij factureren (`how-we-work/fees`)
Masthead plate · `fees-hero` (3:2) contract met twee pennen.
1. lead — het verdienmodel · 2. contrast — inbegrepen / per opdracht geoffreerd · 3. register — principes · 4. prose — waarom geen prijzen op de site · 5. next.

### Wat wij niet doen (`how-we-work/boundaries`)
Masthead plate · `bnd-hero` (3:2) verzegelde containerdeur.
1. lead — de juridische regel · 2. register genummerd — grenzen · 3. prose — hoe betalingen wél lopen · 4. notice · 5. next → FAQ.

### Veelgestelde vragen (`faq`)
Masthead plate · `faq-hero` (3:2) stille salon.
1. faq in vijf groepen (de club, lidmaatschap, werken met ons, geld en aansprakelijkheid, gegevens) · 2. next → Contact.

### DUKAAT Market (`market`, overzicht)
Masthead band · `market-hero` (21:9) Golfbeurs, reportage.
1. lead · 2. index — de vier ingangen · 3. register — zo werkt een aanbieding · 4. notice — vertrouwensprofiel is geen garantie · 5. prose — DUKAAT Deal Alert · 6. next.

### Producten (`market/products`)
Masthead portrait · `prod-hero` (4:5) flacons en oud-hout.
1. lead · 2. specimen — een productprofiel · 3. register met `prod-showroom` (4:5) — vier verzoeken · 4. next → intake verkopen.

### Inkoopaanvragen (`market/buyer-requests`)
Masthead band · `br-hero` (21:9) monstertafel klaar voor keuring.
1. lead · 2. specimen — zo leest een aanvraag, met voorbeeldregels gemarkeerd als voorbeeld · 3. steps — van aanvraag tot aanbod · 4. next → intake inkopen.

### Partijen (`market/stocklots`)
Masthead portrait · `stk-hero` (4:5) papierrollen en pallets.
1. lead · 2. terms — tien soorten partijen · 3. prose half `stk-lots` (3:2) — DUKAAT Deal Alert · 4. register — wat wij van een partij vragen · 5. next.

### Machines (`market/machinery`)
Masthead band · `mach-hero` (21:9) drukpers in rust.
1. lead · 2. terms — elf categorieën · 3. register met `mach-cnc` (4:5) — voordat een machine van eigenaar wisselt · 4. next.

### Lidmaatschap (`membership`, overzicht)
Masthead band · `membership-hero` (21:9) majlis voordat iemand binnenkomt.
1. lead · 2. steps — zo werkt een voordracht · 3. tiers kort · 4. home: het donkere lidmaatschapsblok · 5. index · 6. next → Ik ben voorgedragen.

### De drie niveaus (`membership/levels`)
Masthead plate · `lvl-hero` (3:2) diner voor tien.
1. lead · 2. tiers volledig (p.11–13) · 3. duo `lvl-breakfast` (3:2) + `lvl-tea` (4:5) — Business Concierge, Circle, diners · 4. prose — Founding 100 naast de niveaus · 5. next → Toezeggingen.

### Onze toezeggingen (`membership/guarantees`)
Masthead portrait · `gua-hero` (4:5) leren grootboek.
1. lead · 2. tiers met toezeggingen (cijfers tussen haken) · 3. statement — de inspanning is er altijd, de uitkomst is aan de partijen · 4. prose · 5. next.

### Voor wie — en voor wie niet (`membership/who-for`)
Masthead band · `who-hero` (21:9) vakvrouw in een kas.
1. lead · 2. contrast — voor u als / niet voor · 3. statement — elk bedrijf wordt vóór toelating beoordeeld · 4. register — met wie wij werken · 5. next → Verificatie.

### Founding 100 (`membership/founding-100`)
Masthead portrait · `f100-hero` (4:5) crèmekaart in leren map.
1. lead · 2. facts — wat een founding member krijgt · 3. statement — "Lid nr. 017, sinds de oprichting" · 4. prose · 5. next → Ik ben voorgedragen.

### Netwerk (`network`, overzicht)
Masthead band · `network-hero` (21:9) avondontvangst, reportage.
1. lead · 2. index · 3. contrast — Ik bied / Ik zoek · 4. next.

### Ledenregister (`network/directory`)
Masthead plate · `dir-hero` (3:2).
1. lead · 2. specimen — een ledenprofiel · 3. register met `dir-profile` (4:5) — zichtbaarheid per niveau · 4. notice — alleen wat u goedkeurt · 5. next.

### Sectorclubs (`network/sector-clubs`)
Masthead band · `sec-hero` (21:9) natuursteenwerf.
1. lead · 2. register 2 kolommen — de acht sectoren · 3. mosaic `sec-dates` `sec-pack` `sec-energy` `sec-seeds` · 4. statement · 5. next.

### Verhalen (`network/stories`)
Masthead portrait · `sto-hero` (4:5) thee voor twee.
1. lead · 2. register — vormen (Deal of the Month, Member Spotlight, Success Stories) · 3. register — het soort verhaal · 4. notice — alleen met toestemming · 5. next.

### Ambassadeurs (`network/ambassadors`, nieuw)
Masthead band · `amb-hero` (21:9) torenhuizen in de hooglanden.
1. lead · 2. register — wat een ambassadeur doet · 3. prose staand `amb-facade` (4:5) — hoe ambassadeurs worden gekozen · 4. next.

### Partners (`network/partners`, nieuw)
Masthead plate · `par-hero` (3:2) zaal klaar voor gasten.
1. lead · 2. terms — met wie wij samenwerken · 3. terms — sponsoring · 4. register — de Golden Ten · 5. prose — hoe wij partners kiezen · 6. next.

### Events & kennis (`events`, overzicht)
Masthead band · `events-hero` (21:9) conferentie, reportage.
1. lead · 2. index · 3. next.

### Evenementen (`events/calendar`)
Masthead portrait · `cal-hero` (4:5) ingang van een beursgebouw.
1. lead · 2. chapter — de tien vormen · 3. duo `cal-fair` (3:2) + `cal-pavilion` (4:5) — het gedeelde paviljoen · 4. prose — hoe uitnodigingen gaan · 5. next.

### Handelsmissies (`events/missions`)
Masthead band · `mis-hero` (21:9) twee figuren op een fabrieksvloer.
1. lead · 2. register 2 kolommen — wat een missie omvat · 3. chapter — Discover Netherlands `mis-nl`, Discover Dubai `mis-dubai`, Discover Saudi Arabia `mis-saudi`, Reverse Buyer Missions `mis-reverse` (4:5) · 4. statement · 5. next → intake markttoetreding.

### Academy (`events/academy`)
Masthead plate · `aca-hero` (3:2) seminarzaal.
1. lead · 2. terms — onderwerpen · 3. register met `aca-notes` (4:5) — vormen · 4. next.

### Marktrapporten (`events/intelligence`)
Masthead portrait · `int-hero` (4:5) rapport en leesbril.
1. lead · 2. register — wat leden ontvangen · 3. band `int-band` (21:9) · 4. prose · 5. next.

### Juridisch (`legal`, overzicht) en de zeven juridische pagina's
Overzicht: masthead plate `legal-hero` (3:2); lead met de juridische regel; index; notice over de taalversies.
Elke juridische pagina: masthead plate met een eigen klein beeld (`leg-privacy`, `leg-cookies`, `leg-terms`, `leg-disclaimer`, `leg-company`, `leg-member-data`, `leg-transfers`), daarna het legal-blok: datum, inleiding, genummerde artikelen, inhoudsopgave. Volledige concepten op basis van AVG en Nederlands recht, met ontbrekende gegevens tussen haken. Advies: laat ze toetsen door een Nederlandse advocaat vóór publicatie.

### Contact
Het intakeformulier blijft; erbij komt één foto `contact-hero` (3:2) en de correspondentiegegevens.

### Homepage
Blijft zoals goedgekeurd; alleen gecontroleerd op de nieuwe regels.

## 6. Werkwijze

1. Schema en blokcomponenten (ontwerp, CSS, rechts-naar-links, mobiel).
2. Tekst per rubriek, in drie talen tegelijk geschreven, daarna per rubriek drie controles: regels en feiten, Arabisch, Nederlands.
3. Fotoprompts volgens het stijlboek, automatisch gecontroleerd op de vaste zinnen en verboden woorden; genereren; elke variant beoordelen; herhalen waar nodig; exporteren.
4. Alles samenvoegen, bouwen, elke pagina bekijken op desktop, telefoon en in het Arabisch; bijschaven.
5. Verslag met twijfelpunten.

---

## 7. Uw besluiten uit het verslag (29 september 2026), zoals verwerkt

- **Vestiging:** Rotterdam. Over DUKAAT noemt "2018, Rotterdam"; de juridische teksten zeggen "gevestigd in de regio Rotterdam", omdat de statutaire zetel in het KvK-uittreksel staat.
- **Toelating:** op voordracht of uitnodiging; aanmelden kan (eigen optie in de intake) en garandeert niets; elk lid mag voordragen; niets over aantallen leden per sector of markt.
- **Founding 100:** de honderd meest invloedrijke leden, op uitnodiging. Voorrechten: vast nummer 001–100, oprichterstarief, Founding 100-kaart en -kenmerk, een stem bij nieuwe programma's, sectorclubs en markten, en het jaarlijkse Founding 100 Forum. Geen muur, geen "eerste 100", geen voordrachtsrecht als voorrecht.
- **Golden Ten:** tien hoofdsponsors met een eigen plek op de site, hun verhaal op de site, nauwere begeleiding en zichtbaarheid bij programma's; het bedrag staat niet op de site. Sponsoring levert zichtbaarheid op, nooit invloed.
- **Toezeggingen:** reactietijden Member 5, Professional 3, Executive 1 werkdag; toelatingsbesluit binnen 10 werkdagen; profiel binnen 10 werkdagen. Geen oplossing of verlenging "als wij tekortschieten"; de inspanning is er altijd, de uitkomst niet.
- **Ambassadeurs:** in verschillende markten en steden; geen exclusiviteit. **Vertegenwoordiging:** generiek, verschilt per regio.
- **Advies:** DUKAAT adviseert zelf; specialistisch advies is altijd mogelijk; hoe meer opties, hoe meer het kost. Geen persoonlijke verwijzingen naar de oprichter-fiscalist op de dienstenpagina's; zijn eigen tekst is algemeen en adviserend, zonder garanties.
- **Business Trust Profile:** vervalt als profiel dat leden inzien; wat DUKAAT controleert, blijft in het eigen dossier.
- **Ledenregister:** leden zoeken er niet zelf in; het team koppelt.
- **Partijen en machines:** aanbevelingen, geen harde voorwaarden.
- **Vergoedingen:** helder gecommuniceerd, alles open; geen tekst over het verkopen van ledengegevens.
- **Voorwaarden:** geen wettelijke handelsrente; lidmaatschap altijd per jaar.
- **Investeringen:** "projecten aan investeerders presenteren", overal de volledige disclaimer.
- **Doorgifte buiten de EU:** minder detail. **Bedrijfsgegevens:** Handelskamer heet in het Engels "Dutch–Arab Business Club".
- **Logo:** tulp, mensen die elkaar vinden, een hoofd in het midden (het lid centraal), de gouden lijn door de AA als brug tussen twee werelden.
- **Arabisch:** الدوقات mannelijk, السوق vrouwelijk, «لقاءات فطور الأعمال», «البعثات التجارية», overal «للاطلاع فقط», genderneutraal «أصحاب الأعمال».

