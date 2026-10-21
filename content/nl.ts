import type { Dict } from "./types";
import { siteNl } from "./site.nl";

/**
 * Dutch copy, verbatim from the translation (owntext/vertalingen/DUKAAT_Website_Copy_NL_uit_AR.md):
 * the homepage (1.1–1.6), the footer, newsletter and form messages (21), the shared form fields (10).
 * Words marked UI in content/types.ts are interface words the source does not give.
 */
export const nl: Dict = {
  locale: "nl",
  meta: {
    title: "DUKAAT — Nederlands-Arabische Businessclub",
    description:
      "Wij verbinden bedrijven en ondernemers met kennis, partners en kansen tussen Nederland en de Arabische wereld via training, het verbinden van ondernemingen, bijeenkomsten en diensten.",
    ogImageAlt: "Het DUKAAT-beeldmerk en woordmerk op linnen papier",
  },
  nav: {
    home: "Home",
    descriptor: "Nederlands-Arabische Businessclub",
    toHome: "DUKAAT — naar de homepage",
    menuOpen: "Navigatie openen",
    menuClose: "Navigatie sluiten",
    skip: "Ga naar de inhoud",
    langLabel: "Taal",
  },
  hero: {
    title: "Waar waarde grenzen oversteekt",
    intro: "Wij verbinden bedrijven en ondernemers met kennis, partners en kansen tussen Nederland en de Arabische wereld.",
    pillars: "Relaties – Kennis – Handel – Investering",
    knowHeading: "Maak kennis met DUKAAT",
    know: [
      { title: "Over ons", text: "Wij verbinden handelaren, ondernemers en bedrijven tussen Nederland en de Arabische wereld." },
      { title: "Onze visie", text: "Een zakelijke community die perspectieven opent voor samenwerking over grenzen heen." },
      { title: "Onze missie", text: "Relaties omzetten in waarde en zakelijke kansen." },
      { title: "Onze doelen", text: "Bedrijven verbinden, kennis uitwisselen en markttoetreding vergemakkelijken." },
    ],
    networkHeading: "Ontdek het DUKAAT-ecosysteem",
    network: [
      { title: "Bedrijven en ondernemers verbinden", text: "Wij helpen u de juiste partij voor uw onderneming te bereiken." },
      { title: "Academie en trainingscursussen" },
      { title: "Workshops, evenementen en beurzen" },
      { title: "Zakelijke diensten en advies" },
      { title: "Markt en handelskansen" },
      { title: "Investering en handelsdelegaties" },
      { title: "Lidmaatschap en de DUKAAT-community" },
    ],
    pause: "Animatie pauzeren",
    play: "Animatie afspelen",
  },
  more: {
    heading: "Onderdelen van de website",
    rows: [
      ["Bedrijvengids", "Zakelijke matchmaking", "Inkoopaanvragen", "Restpartijen en gebruikte apparatuur"],
      ["Studies en rapporten", "Sectorcommunity’s", "Succesverhalen", "Partnerschappen en sponsoring"],
    ],
  },
  footer: {
    about:
      "DUKAAT — Nederlands-Arabische Businessclub. Wij verbinden bedrijven en ondernemers met kennis, partners en kansen tussen Nederland en de Arabische wereld.",
    values: "Waarde • Vertrouwen • Leiderschap",
    slogan: "Waar waarde grenzen oversteekt.",
    copyright: "© 2026 DUKAAT. Alle rechten voorbehouden.",
    languages: "Talen",
    newsletter: {
      title: "Blijf dicht bij kennis en kansen",
      text: "Meld u aan om nieuws te ontvangen over de programma’s, bijeenkomsten, content en kansen die verbonden zijn aan de DUKAAT-community.",
      field: "Uw e-mailadres",
      button: "Aanmelden",
      note: "U kunt zich op elk moment afmelden. Lees in het privacybeleid hoe uw gegevens worden verwerkt.",
      success: "Uw aanmeldingsverzoek is verzonden. Als u een bevestigingsmail ontvangt, open deze dan om uw aanmelding te voltooien.",
    },
  },
  forms: {
    common: {
      name: "Volledige naam",
      company: "Bedrijfs- of projectnaam (indien van toepassing)",
      role: "Functie",
      country: "Woonland of vestigingsland van het bedrijf",
      email: "E-mailadres",
      phone: "Telefoon (optioneel)",
      language: "Voorkeurstaal voor communicatie",
      details: "Aanvullende beschrijving",
      attachment: "Optionele bijlage",
    },
    note: "Wij verzoeken u bij de eerste aanvraag geen identiteitsdocumenten, bankgegevens of vertrouwelijke stukken bij te voegen.",
    privacy: "Ik heb kennisgenomen van het privacybeleid met betrekking tot de verwerking van deze aanvraag.",
    optIn: "Ik ontvang graag het nieuws, de programma’s en de kansen van DUKAAT, en ik kan mij op elk moment afmelden.",
    success:
      "Uw aanvraag is ontvangen. Wij bekijken deze en nemen contact met u op via de gegevens die u heeft doorgegeven, om de volgende stap toe te lichten.",
    successNote:
      "Het versturen van de aanvraag betekent niet dat een betaalde dienst start; de omvang van elke dienst en de vergoeding daarvoor worden vóór de uitvoering afgesproken.",
    required: "Vul dit veld in.",
    invalidEmail: "Voer een geldig e-mailadres in.",
    sending: "Uw aanvraag wordt verzonden…",
    failed: "De aanvraag kon op dit moment niet worden verzonden. Probeer het opnieuw.",
    attachmentHint: "Voeg desgewenst een document toe dat ons helpt uw aanvraag te begrijpen.",
    choose: "Kies…",
  },
  notFound: {
    text: "Wij konden deze pagina niet vinden. U kunt teruggaan naar de homepage of contact met ons opnemen.",
    back: "Terug naar de homepage.",
  },
  /** extras the owner kept on 30 Sep 2026 (report 9pZxu4Jeprq9yqE3KkNu5V) — not in the source; texts from commit 2336702 */
  extra: {
    "anno": "Anno 2018",
    "annoTitle": "Stichting Nederlands-Arabische Handelskamer, opgericht in 2018",
    "byNomination": "Op voordracht",
    "byNominationTitle": "Lidmaatschap op voordracht of uitnodiging, na beoordeling",
    "nominated": "Ik ben voorgedragen",
    "why": {
      "label": "Waarom DUKAAT",
      "heading": "Drie dingen zijn *alleen van ons.*",
      "lede": "Een zoekmachine geeft u namen. Een relatie bouwt zij niet.",
      "claims": [
        {
          "roman": "I",
          "title": "Wij zijn *ondernemers en adviseurs.*",
          "body": "Wij combineren academische kennis met praktijkervaring.\n\nWij zijn een team van ondernemers en adviseurs die een universitaire opleiding combineren met praktijkervaring in bedrijfsvoering en projectontwikkeling. Op basis van onze studie en onze ervaring in onderwijs, handel en diensten bieden wij een beter inzicht in de uitdagingen en praktisch advies waarmee bedrijven en ondernemers weloverwogen beslissingen nemen, partnerschappen opbouwen en groeikansen verkennen tussen Nederland en de Arabische wereld."
        },
        {
          "roman": "II",
          "title": "Wij zitten naast *Rotterdam,* de grootste haven van Europa.",
          "body": "De toegangspoort waardoor goederen Europa binnenkomen is onze omgeving, geen stip op de kaart. Eén uur van de markt die onze leden willen bereiken."
        },
        {
          "roman": "III",
          "title": "Wij worden aan *beide kanten* vertrouwd, in beide talen.",
          "body": "Ons netwerk begon niet met een database. Het begon met mensen die ons al kenden — in het Arabisch en in het Nederlands."
        }
      ],
      "mechanism": "De actuele aanvragen van leden circuleren binnen het netwerk, geverifieerd en gekoppeld door een mens. Zij worden niet op deze pagina gepubliceerd."
    },
    "name": {
      "label": "De naam",
      "heading": "Een munt die beide kanten *al kenden.*",
      "body": "Sinds 4 augustus 1586 is de Nederlandse gouden dukaat een handelsmunt onder de Muntwet: 3,494 gram goud van 983/1000, en de Koninklijke Nederlandse Munt in Utrecht slaat hem vandaag nog. Zijn kracht lag niet in het goud alleen. Een koopman die hem zag, wist precies wat hij waard was. De Ottomaanse sultani van 1477–78 werd geslagen op de dukaatstandaard; Marokkaanse gouden dinars heetten bunduqi, naar Venetië, omdat de munt tot daar was gereisd.",
      "keystone": "De dukaat was een taal die beide kanten al spraken."
    },
    "behind": {
      "label": "Achter DUKAAT",
      "heading": "Twee oprichters, *twee vakken.*",
      "lede": "De een is ondernemer in onderwijs, handel en diensten. De ander adviseert over structuur, contracten en controles.",
      "founders": [
        {
          "name": "Ghassan Salma",
          "role": "Oprichter en ondernemer",
          "credentials": "MBA, specialisatie Financiën en Investeringen | Ondernemer in onderwijs, handel en diensten",
          "voice": "“Het idee voor DUKAAT ontstond vanuit mijn visie als ondernemer die academische kennis en praktijkervaring combineert. Door mijn studie bedrijfskunde, met specialisatie in financiën en investeringen, en mijn ervaring in onderwijs, handel en diensten, raakte ik ervan overtuigd dat bedrijfsgroei begint met heldere kennis, betrouwbare relaties en het vermogen om kansen om te zetten in praktische stappen.\n\nVanuit die overtuiging ontstond mijn visie om DUKAAT op te richten: een zakelijke gemeenschap die bedrijven en ondernemers tussen Nederland en de Arabische wereld verbindt, en training, uitwisseling van ervaring, het bouwen van partnerschappen en de ontwikkeling van commerciële en investeringskansen samenbrengt in één ecosysteem.\n\nMijn ambitie is dat iedereen die zich bij DUKAAT aansluit kennis vindt die de eigen vaardigheden ontwikkelt, een verbinding die de horizon verbreedt, en een ruimte om ervaring te delen en waarde te creëren voor anderen.”",
          "portraitAlt": "Het vak van de oprichter-ondernemer: een graanprikker in een zak kikkererwten"
        },
        {
          "name": "Ayman Ebdul",
          "role": "Oprichter · Fiscaal recht",
          "voice": "“Een goede introductie strandt vaker op het papierwerk dan op de mensen. Mijn achtergrond is het fiscale recht, en mijn rol bij DUKAAT is adviserend: zorgen dat de juiste vragen op tijd worden gesteld — welke entiteit tekent, wat er in het contract staat, waar de fiscale en douanevragen liggen, en of de tegenpartij is wie zij zegt te zijn. Die ervaring maakt een deal helderder. Het is geen garantie; de beslissing blijft bij het lid. Het is wat een handdruk waarde geeft.”",
          "portraitAlt": "Het vak van de oprichter-fiscalist: een pen boven een contract"
        }
      ]
    },
    "correspondence": {
      "heading": "Lidmaatschap is op voordracht of uitnodiging.\nWilt u ons schrijven, *schrijf.*",
      "mailPending": "[e-mailadres — domein in afwachting]",
      "mailPendingTitle": "Adres op eigen domein volgt na het domeinbesluit",
      "where": "Regio Rotterdam, uitsluitend op afspraak.",
      "taglineEcho": "حيث تعبر القيمة الحدود",
      "sealText": "DUKAAT · DUTCH–ARAB BUSINESS CLUB · ANNO 2018 · "
    },
    "colophon": "Een initiatief van Stichting Nederlands-Arabische Handelskamer, Anno 2018, gevestigd in Nederland, KvK 73318205.",
    "legalLine": "Wij nemen geen gelden van leden in bewaring, wij treden niet op als bank of betaaldienstverlener, en wij garanderen geen enkele transactie tussen leden.",
    "foundation": "Stichting Nederlands-Arabische Handelskamer"
  },
  /** interface words approved on 4 Oct 2026 (UX assessment, see content/types.ts) — not in the source */
  ux: {
    moreDetails: "Meer details toevoegen (optioneel)",
    moreInfo: "Meer gegevens (optioneel)",
    respondingTo: "U reageert op: {ref}",
    checkFields: "Controleer deze velden:",
    direct: "Liever direct contact?",
    after: "Na verzenden",
    afterSteps: ["U ontvangt direct een kopie per e-mail.", "Wij bekijken uw vraag.", "Wij stellen het passende traject voor."],
    copyHeading: "Kopie van uw aanvraag",
    onThisPage: "Op deze pagina",
    backToTop: "Terug naar boven",
    serviceGroups: ["Begeleiding", "Markt en netwerk", "Goed om te weten"],
  },
  site: siteNl,
};
