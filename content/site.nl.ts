import type { SiteCopy } from "./types";

/**
 * Menu copy, Dutch, verbatim from the translation (owntext/vertalingen/DUKAAT_Website_Copy_NL_uit_AR.md).
 * group label = 1.1 · lede and seo = 21 (search titles and descriptions) · page title = the section's name · blurb = its title line.
 */
export const siteNl: SiteCopy = {
  groups: {
    about: {
      label: "Over ons",
      lede: "Maak kennis met het verhaal, de visie, de missie, de waarden en de doelen van DUKAAT bij het opbouwen van relaties, het uitwisselen van kennis en het vergemakkelijken van samenwerking over grenzen heen.",
      seo: "Over ons — DUKAAT",
    },
    academy: {
      label: "Academie",
      lede: "Maak kennis met de praktijkgerichte trainingstrajecten voor ondernemers, professionals, studenten en afgestudeerden, en met de cursussen, workshops en programma’s voor bedrijven.",
      seo: "DUKAAT Academy — Cursussen en training",
    },
    services: {
      label: "Zakelijke diensten",
      lede: "Geef aan of u een leverancier, distributeur, partner of kennis van een nieuwe markt nodig hebt, en verken de diensten op het gebied van zoeken, kennismaking en advies.",
      seo: "Zakelijke diensten en het verbinden van bedrijven — DUKAAT",
    },
    membership: {
      label: "Lidmaatschap",
      lede: "Ontdek de trajecten voor zakelijk lidmaatschap, commerciële groei en executive lidmaatschap, en kies het niveau van deelname dat past bij uw doelen.",
      seo: "Lidmaatschap en de DUKAAT-community — DUKAAT",
    },
    events: {
      label: "Evenementen",
      lede: "Volg de bijeenkomsten van de DUKAAT-community, haar gespecialiseerde programma’s, de workshops en beurzen, en de kansen voor professionele en zakelijke kennismaking.",
      seo: "Evenementen, workshops en beurzen — DUKAAT",
    },
    contact: {
      label: "Neem contact op",
      lede: "Vertel ons wat u wilt bereiken op het gebied van zakendoen, training of partnerschappen, en geef aan welke markt en welke dienst u interesseren.",
      seo: "Neem contact op — DUKAAT",
    },
    legal: { label: "Juridisch", lede: "" },
  },
  pages: {
    "about/name": {
      title: "Het verhaal van de naam",
      blurb: "Van waarde die markten oversteekt naar relaties die grenzen oversteken",
    },
    "about/vision": {
      title: "Onze visie",
      blurb: "Een zakelijke community die perspectieven opent voor samenwerking over grenzen heen",
    },
    "about/mission": { title: "Onze missie", blurb: "Relaties omzetten in waarde en zakelijke kansen" },
    "about/goals": {
      title: "Onze doelen",
      blurb: "Bedrijven verbinden, kennis uitwisselen en markttoetreding vergemakkelijken.",
    },

    "services/connect": {
      title: "Bedrijven en ondernemers verbinden",
      blurb: "De juiste partij begint bij het begrijpen van uw behoefte",
    },
    "services/matchmaking": { title: "Zakelijke matchmaking", blurb: "Wat biedt u aan? En wat heeft u nodig?" },
    "services/advisory": {
      title: "Zakelijke diensten en advies",
      blurb: "Meer duidelijkheid voor de volgende stap in uw onderneming",
    },
    "services/market": {
      title: "Markt en handelskansen",
      blurb: "Laat zien wat u aanbiedt en ontdek wat uw markt nodig heeft",
    },
    "services/purchase-requests": { title: "Inkoopaanvragen", blurb: "Laat de markt weten wat u nodig hebt" },
    "services/stocklots-machinery": {
      title: "Restpartijen en gebruikte apparatuur",
      blurb: "Commerciële kansen die om duidelijke informatie en weloverwogen snelheid vragen",
    },
    "services/invest": {
      title: "Investering",
      blurb: "Een ontmoeting die projecteigenaren en geïnteresseerden in investeringen samenbrengt",
    },
    "services/directory": {
      title: "Bedrijvengids",
      blurb: "Maak kennis met bedrijven aan de hand van wat zij bieden en wat zij zoeken",
    },
    "services/intelligence": { title: "Studies en rapporten", blurb: "Begrijp de markt voordat u erin stapt" },

    "membership/sector-networks": { title: "Sectorcommunity’s", blurb: "Ontmoet wie uw sector begrijpt" },
    "membership/stories": {
      title: "Succesverhalen",
      blurb: "Relaties die een stap tot stand brachten die het vertellen waard is",
    },

    "events/missions": { title: "Handelsdelegaties", blurb: "Leer de markt kennen via zijn mensen en zijn bedrijven" },

    "looking-for": {
      title: "Wat zoekt u?",
      blurb: "Elke nuttige relatie begint met een duidelijke vraag. Deel met ons wat u nodig heeft en op welke markt u zich richt, zodat wij uw aanvraag kunnen bekijken en het passende traject voorstellen.",
    },
    partnerships: { title: "Partnerschappen en sponsoring", blurb: "Laten we samen bredere waarde opbouwen" },
    faq: { title: "Veelgestelde vragen", blurb: "" },

    // extras the owner kept on 30 Sep 2026 (not in the source)
    "about/why": { title: "Waarom DUKAAT", blurb: "Drie dingen die alleen van ons zijn." },
    "about/founders": { title: "Achter DUKAAT", blurb: "Twee oprichters, twee vakken: de ondernemer en de fiscalist." },
    "membership/admission": { title: "Verificatie & toelating", blurb: "Wat wij controleren voordat iemand een tegenpartij ontmoet — en waarom niet iedereen wordt toegelaten." },
    "membership/fees": { title: "Hoe wij factureren", blurb: "Een jaarabonnement, projectwerk schriftelijk geoffreerd, geen verborgen commissies." },
    "membership/ambassadors": { title: "Ambassadeurs", blurb: "Gevestigde ondernemers in verschillende markten en steden, die deuren openen en bezoekende leden ontvangen." },
    "membership/nominated": { title: "Ik ben voorgedragen", blurb: "Een lid heeft uw naam genoemd. Laat ons weten wie." },
    "services/representation": { title: "Vertegenwoordiging", blurb: "Aanwezig aan de andere kant, voordat u daar een kantoor hebt." },
    "services/documents": { title: "Documenten, douane & logistiek", blurb: "Certificaten, vracht, douane en betalingscondities — tot de eerste zending is geland." },
    "services/boundaries": { title: "Wat wij niet doen", blurb: "Geen gelden in bewaring, geen bankzaken, geen garanties op transacties tussen leden." },
    "legal/privacy": { title: "Privacybeleid", blurb: "Hoe wij persoonsgegevens verwerken onder de AVG." },
    "legal/terms": { title: "Gebruiksvoorwaarden", blurb: "De voorwaarden voor lidmaatschap en projectwerk." },
    "legal/cookies": { title: "Cookie-instellingen", blurb: "Wat deze site in uw browser bewaart — geen tracking, geen advertentiecookies." },
    "legal/disclaimer": { title: "Disclaimer", blurb: "De grenzen van wat deze site en haar informatie beloven." },
    "legal/company": { title: "Bedrijfsgegevens", blurb: "Statutaire naam, KvK- en btw-nummer, vestigingsadres." },
    "legal/member-data": { title: "Publicatie van ledengegevens", blurb: "Wat wij over leden publiceren, alleen met toestemming, en hoe u die intrekt." },
    "legal/data-transfers": { title: "Doorgifte buiten de EU", blurb: "Hoe gegevens veilig reizen naar partners in de Golf en de bredere regio." },
  },
  ui: {
    home: "Home",
    inSection: "In deze rubriek",
    otherSections: "Verder op de site",
    more: "Lees meer",
    submenu: "Toon de pagina’s onder {group}",
    mainNav: "Hoofdmenu",
  },
};
