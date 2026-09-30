import type { SiteCopy } from "./types";

/**
 * Menu copy, English, verbatim from the translation (owntext/vertalingen/DUKAAT_Website_Copy_EN_uit_AR.md).
 * group label = 1.1 · lede and seo = 21 (search titles and descriptions) · page title = the section's name · blurb = its title line.
 */
export const siteEn: SiteCopy = {
  groups: {
    about: {
      label: "About us",
      lede: "Get to know DUKAAT’s story, vision, mission, values and goals in building relationships, exchanging knowledge and facilitating cooperation across borders.",
      seo: "About us — DUKAAT",
    },
    academy: {
      label: "Academy",
      lede: "Get to know the applied training tracks for entrepreneurs, professionals, students and graduates, as well as the courses, workshops and corporate programmes.",
      seo: "DUKAAT Academy — Courses and training",
    },
    services: {
      label: "Business services",
      lede: "Specify your need for a supplier, a distributor, a partner or knowledge of a new market, and explore the search, introduction and consultancy services.",
      seo: "Business services and connecting companies — DUKAAT",
    },
    membership: {
      label: "Membership",
      lede: "Discover the business membership, commercial growth and executive membership tracks, and choose the level of participation that suits your goals.",
      seo: "Membership and the DUKAAT community — DUKAAT",
    },
    events: {
      label: "Events",
      lede: "Follow the gatherings and specialised programmes of the DUKAAT community, the workshops and exhibitions, and the opportunities for professional and business introductions.",
      seo: "Events, workshops and exhibitions — DUKAAT",
    },
    contact: {
      label: "Contact us",
      lede: "Tell us what you want to achieve in business, training or partnerships, and specify the market and the service that interest you.",
      seo: "Contact us — DUKAAT",
    },
    legal: { label: "Legal", lede: "" },
  },
  pages: {
    "about/name": {
      title: "The story behind the name",
      blurb: "From value that crosses markets to relationships that cross borders",
    },
    "about/vision": {
      title: "Our vision",
      blurb: "A business community that opens horizons for cooperation across borders",
    },
    "about/mission": { title: "Our mission", blurb: "Turning relationships into value and business opportunities" },
    "about/goals": {
      title: "Our goals",
      blurb: "Connecting companies, exchanging knowledge and facilitating market entry.",
    },

    "services/connect": {
      title: "Connecting companies and entrepreneurs",
      blurb: "Finding the right party starts with understanding your needs",
    },
    "services/matchmaking": { title: "Business matchmaking", blurb: "What do you offer? And what do you need?" },
    "services/advisory": {
      title: "Business services and consultancy",
      blurb: "Greater clarity for the next step in your business",
    },
    "services/market": {
      title: "Market and trade opportunities",
      blurb: "Present what you offer, and discover what your market needs",
    },
    "services/purchase-requests": { title: "Purchase requests", blurb: "Let the market know what you need" },
    "services/stocklots-machinery": {
      title: "Clearances and used equipment",
      blurb: "Trade opportunities that call for clear information and considered speed",
    },
    "services/invest": {
      title: "Investment",
      blurb: "A meeting that brings together project owners and those interested in investment",
    },
    "services/directory": {
      title: "Company directory",
      blurb: "Get to know companies through what they offer and what they are looking for",
    },
    "services/intelligence": { title: "Studies and reports", blurb: "Understand the market before you step into it" },

    "membership/sector-networks": { title: "Sector communities", blurb: "Meet those who understand your sector" },
    "membership/stories": { title: "Success stories", blurb: "Relationships that led to a step worth recounting" },

    "events/missions": { title: "Trade delegations", blurb: "Get to know the market through its people and its companies" },

    "looking-for": {
      title: "What are you looking for?",
      blurb: "Every worthwhile relationship begins with a clear request. Share with us what you need and the market you are targeting, so that we can review your request and suggest the right path.",
    },
    partnerships: { title: "Partnerships and sponsorship", blurb: "Let us build broader value together" },
    faq: { title: "Frequently asked questions", blurb: "" },

    // extras the owner kept on 30 Sep 2026 (not in the source)
    "about/why": { title: "Why DUKAAT", blurb: "Three things that are ours alone." },
    "about/founders": { title: "Behind DUKAAT", blurb: "Two founders, two trades: the entrepreneur and the tax lawyer." },
    "membership/admission": { title: "Verification & admission", blurb: "What we check before anyone meets a counterparty — and why not everyone is admitted." },
    "membership/fees": { title: "How we charge", blurb: "An annual subscription, project work quoted in writing, no hidden commissions." },
    "membership/ambassadors": { title: "Ambassadors", blurb: "Established business figures in various markets and cities, who open doors and host visiting members." },
    "membership/nominated": { title: "I have been nominated", blurb: "A member gave us your name. Tell us who." },
    "services/representation": { title: "Representation", blurb: "A presence on the other side before you have an office there." },
    "services/documents": { title: "Documents, customs & logistics", blurb: "Certificates, freight, customs and payment terms — until the first shipment lands." },
    "services/boundaries": { title: "What we do not do", blurb: "No custody of funds, no banking, no guarantees on transactions between members." },
    "legal/privacy": { title: "Privacy policy", blurb: "How we process personal data under the GDPR." },
    "legal/terms": { title: "Terms of use", blurb: "The terms that apply to membership and project work." },
    "legal/cookies": { title: "Cookie settings", blurb: "What this site stores in your browser — no tracking, no advertising cookies." },
    "legal/disclaimer": { title: "Disclaimer", blurb: "The limits of what this site and its information promise." },
    "legal/company": { title: "Company details", blurb: "Legal name, Chamber of Commerce and VAT numbers, registered address." },
    "legal/member-data": { title: "Publication of member data", blurb: "What we publish about members, only with consent, and how to withdraw it." },
    "legal/data-transfers": { title: "Transfers outside the EU", blurb: "How data travels safely to partners in the Gulf and the wider region." },
  },
  ui: {
    home: "Home",
    inSection: "In this section",
    otherSections: "Elsewhere on the site",
    more: "Read more",
    submenu: "Show the pages under {group}",
    mainNav: "Main menu",
  },
};
