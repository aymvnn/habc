import type { Dict } from "./types";
import { siteEn } from "./site.en";

/**
 * English copy, verbatim from the translation (owntext/vertalingen/DUKAAT_Website_Copy_EN_uit_AR.md):
 * the homepage (1.1–1.6), the footer, newsletter and form messages (21), the shared form fields (10).
 * Words marked UI in content/types.ts are interface words the source does not give.
 */
export const en: Dict = {
  locale: "en",
  meta: {
    title: "DUKAAT — Dutch–Arab Business Club",
    description:
      "We connect companies and entrepreneurs with knowledge, partners and opportunities between the Netherlands and the Arab world through training, business connections, gatherings and services.",
    ogImageAlt: "The DUKAAT tulip mark and wordmark on linen paper",
  },
  nav: {
    home: "Home",
    descriptor: "Dutch–Arab Business Club",
    toHome: "DUKAAT — to the homepage",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    skip: "Skip to content",
    langLabel: "Language",
  },
  hero: {
    title: "Where value crosses borders",
    intro: "We connect companies and entrepreneurs with knowledge, partners and opportunities between the Netherlands and the Arab world.",
    pillars: "Relationships – Knowledge – Trade – Investment",
    knowHeading: "Get to know DUKAAT",
    know: [
      { title: "About us", text: "We connect traders, entrepreneurs and companies between the Netherlands and the Arab world." },
      { title: "Our vision", text: "A business community that opens up horizons of cooperation across borders." },
      { title: "Our mission", text: "Turning relationships into value and business opportunities." },
      { title: "Our goals", text: "Connecting companies, exchanging knowledge and facilitating market entry." },
    ],
    networkHeading: "Discover the DUKAAT ecosystem",
    network: [
      { title: "Connecting companies and entrepreneurs", text: "We help you reach the right party for your business." },
      { title: "The Academy and training courses" },
      { title: "Workshops, events and exhibitions" },
      { title: "Business services and consultancy" },
      { title: "The market and trade opportunities" },
      { title: "Investment and trade delegations" },
      { title: "Membership and the DUKAAT community" },
    ],
    pause: "Pause animation",
    play: "Play animation",
  },
  more: {
    heading: "Site sections",
    rows: [
      ["Company directory", "Business matchmaking", "Purchase requests", "Clearances and used equipment"],
      ["Studies and reports", "Sector communities", "Success stories", "Partnerships and sponsorship"],
    ],
  },
  footer: {
    about:
      "DUKAAT — Dutch–Arab Business Club. We connect companies and entrepreneurs with knowledge, partners and opportunities between the Netherlands and the Arab world.",
    values: "Value • Trust • Leadership",
    slogan: "Where value crosses borders.",
    copyright: "© 2026 DUKAAT. All rights reserved.",
    languages: "Languages",
    newsletter: {
      title: "Stay close to knowledge and opportunities",
      text: "Subscribe to receive news of the programmes, gatherings, content and opportunities connected with the DUKAAT community.",
      field: "Your email address",
      button: "Subscribe",
      note: "You can unsubscribe at any time. Find out how your data is processed in the privacy policy.",
      success: "Your subscription request has been sent. If you receive a confirmation email, open it to complete your subscription.",
    },
  },
  forms: {
    common: {
      name: "Full name",
      company: "Company or project name (if any)",
      role: "Professional title",
      country: "Country of residence or company headquarters",
      email: "Email address",
      phone: "Phone (optional)",
      language: "Preferred language of communication",
      details: "Additional description",
      attachment: "Optional attachment",
    },
    note: "Please do not attach identity documents, banking information or confidential documents to the initial request.",
    privacy: "I have read the privacy policy regarding the processing of this request.",
    optIn: "I would like to receive news, programmes and opportunities from DUKAAT, and I can unsubscribe at any time.",
    success: "Your request has been received. We will review it and contact you using the details you provided, to clarify the next step.",
    successNote:
      "Submitting a request does not mean the start of a paid service; the scope of any service and its fees are agreed before implementation.",
    required: "Please fill in this field.",
    invalidEmail: "Please enter a valid email address.",
    sending: "Sending your request…",
    failed: "The request could not be sent at the moment. Please try again.",
    attachmentHint: "Attach a document that helps us understand your request, if you wish.",
    choose: "Choose…",
  },
  notFound: {
    text: "We could not find this page. You can return to the homepage or contact us.",
    back: "Return to the homepage.",
  },
  /** extras the owner kept on 30 Sep 2026 (report 9pZxu4Jeprq9yqE3KkNu5V) — not in the source; texts from commit 2336702 */
  extra: {
    "anno": "Anno 2018",
    "annoTitle": "Stichting Nederlands–Arabische Handelskamer, founded 2018",
    "byNomination": "By nomination",
    "byNominationTitle": "Membership by nomination or invitation, after review",
    "nominated": "I have been nominated",
    "why": {
      "label": "Why DUKAAT",
      "heading": "Three things are *ours alone.*",
      "lede": "A search engine gives you names. It does not build the relationship.",
      "claims": [
        {
          "roman": "I",
          "title": "We are *entrepreneurs and advisers.*",
          "body": "We combine academic knowledge with practical experience.\n\nWe are a team of entrepreneurs and advisers who combine a university education with practical experience in business management and project development. Drawing on our studies and our experience in education, trade and services, we offer a deeper understanding of the challenges, and practical advice that helps companies and entrepreneurs make considered decisions, build partnerships and explore opportunities for growth between the Netherlands and the Arab world."
        },
        {
          "roman": "II",
          "title": "We sit next to *Rotterdam,* Europe’s largest port.",
          "body": "The gateway through which goods enter Europe is our neighbourhood, not a reference on a map. One hour from the market our members want to reach."
        },
        {
          "roman": "III",
          "title": "We are trusted on *both sides,* in both languages.",
          "body": "Our network did not start with a database. It started with people who already knew us — in Arabic and in Dutch."
        }
      ],
      "mechanism": "Members’ current requests circulate inside the network, verified and matched by a person. They are not published on this page."
    },
    "name": {
      "label": "The name",
      "heading": "A coin both sides *already knew.*",
      "body": "Since 4 August 1586 the Dutch gold ducat has been a trade coin under the Dutch Mint Act: 3.494 grams of gold at 983/1000, and the Royal Dutch Mint in Utrecht still strikes it today. Its strength was not the gold alone. A merchant who saw it knew exactly what it represented. The Ottoman sultani of 1477–78 was struck on the ducat standard; Moroccan gold dinars were called bunduqi, after Venice, because the coin had travelled that far.",
      "keystone": "The ducat was a language both sides already spoke."
    },
    "behind": {
      "label": "Behind DUKAAT",
      "heading": "Two founders, *two trades.*",
      "lede": "One is an entrepreneur in education, trade and services. The other advises on structure, contracts and checks.",
      "founders": [
        {
          "name": "[Founder 1 — entrepreneur]",
          "role": "Founder and Entrepreneur",
          "credentials": "MBA, specialising in Finance and Investment | Entrepreneur in education, trade and services",
          "voice": "“The idea for DUKAAT grew out of my vision as an entrepreneur who combines academic knowledge with practical experience. Through my studies in business administration, specialising in finance and investment, and my experience in education, trade and services, I became convinced that business growth begins with clear knowledge, trusted relationships, and the ability to turn opportunities into practical steps.\n\nFrom that conviction came my vision of founding DUKAAT: a business community that connects companies and entrepreneurs between the Netherlands and the Arab world, and brings training, the exchange of experience, partnership-building and the development of commercial and investment opportunities together in one ecosystem.\n\nMy ambition is that everyone who joins DUKAAT finds knowledge that develops their abilities, a connection that widens their horizons, and a space in which to share their experience and create value for others.”",
          "portraitAlt": "The founding entrepreneur’s craft: a sampling probe in a sack of chickpeas"
        },
        {
          "name": "[Founder 2 — fiscal law]",
          "role": "Founder · Fiscal law",
          "voice": "“A good introduction fails on the paperwork more often than on the people. My background is fiscal law, and my role at DUKAAT is an advisory one: making sure the right questions are asked early — which entity signs, what the contract says, where the tax and customs questions lie, and whether the other party is who they say they are. That experience makes a deal clearer. It is not a guarantee; the decision stays with the member. It is what makes the handshake worth something.”",
          "portraitAlt": "The fiscal-law founder’s craft: a pen over a contract"
        }
      ]
    },
    "correspondence": {
      "heading": "Membership is by nomination or invitation.\nShould you wish to write, *write.*",
      "mailPending": "[enquiries@ — domain pending]",
      "mailPendingTitle": "Own-domain address follows the domain decision",
      "where": "Rotterdam area, meetings by appointment.",
      "taglineEcho": "حيث تعبر القيمة الحدود",
      "sealText": "DUKAAT · DUTCH–ARAB BUSINESS CLUB · ANNO 2018 · "
    },
    "colophon": "An initiative of Stichting Nederlands–Arabische Handelskamer, Anno 2018, registered in the Netherlands.",
    "legalLine": "We do not take custody of members’ funds, we do not act as a bank or payment provider, and we do not guarantee any transaction between members.",
    "foundation": "Stichting Nederlands–Arabische Handelskamer"
  },
  /** interface words approved on 4 Oct 2026 (UX assessment, see content/types.ts) — not in the source */
  ux: {
    moreDetails: "Add more details (optional)",
    moreInfo: "More details (optional)",
    respondingTo: "You are responding to: {ref}",
    checkFields: "Please check these fields:",
    direct: "Prefer direct contact?",
    after: "After you send",
    afterSteps: ["You receive a copy by email straight away.", "We review your request.", "We propose the right path."],
    copyHeading: "Copy of your request",
    onThisPage: "On this page",
    backToTop: "Back to top",
    serviceGroups: ["Guidance", "Market and network", "Good to know"],
  },
  site: siteEn,
};
