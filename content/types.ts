export type Locale = "en" | "nl" | "ar";

export type HeroLine = { text: string; crossed?: boolean };

export type RouteItem = { intent: string; label: string; hint: string };

export type Claim = { roman: string; title: string; body: string };

export type Founder = { name: string; role: string; voice: string; portraitAlt: string };

export type Faq = { q: string; a: string };

export type GroupKey = "about" | "services" | "how" | "market" | "membership" | "network" | "events" | "legal";

/** copy for the site map (lib/site.ts): menu groups, every page's title and one-line blurb, and the UI words around them */
export type SiteCopy = {
  groups: Record<GroupKey, { label: string; lede: string }>;
  pages: Record<string, { title: string; blurb: string }>;
  ui: {
    home: string;
    overview: string;
    inSection: string;
    otherSections: string;
    indexLabel: string;
    indexHeading: string; // *word* = emphasised
    more: string;
    intake: string;
    faq: string;
    submenu: string; // "{group}" placeholder
    mainNav: string;
    utilNav: string;
  };
};

export type Dict = {
  locale: Locale;
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogImageAlt: string };
  nav: {
    toHome: string;
    about: string;
    how: string;
    membership: string;
    behind: string;
    contact: string;
    routes: string;
    menuOpen: string;
    menuClose: string;
    skip: string;
    langLabel: string;
    descriptor: string;
  };
  hero: {
    eyebrow: string;
    lines: HeroLine[];
    echo: string;
    echoLang: Locale;
    sentence: string;
    chip1: string;
    chip1Title: string;
    chip2: string;
    chip2Title: string;
    pause: string;
    play: string;
    scrollcue: string;
    groupA: string;
    groupB: string;
    heading: string; // the hero line above the routes; *word* = emphasised
    caption: string;
    other: string;
    otherLink: string;
  };
  routes: {
    label: string;
    heading: string; // *word* = emphasised
    lede: string;
    items: RouteItem[];
    ariaPattern: string; // "{label}" placeholder
    foot: string;
    footLink: string;
  };
  how: { label: string; heading: string; lede: string; steps: { title: string; body: string }[] };
  why: { label: string; heading: string; lede: string; claims: Claim[]; mechanism: string };
  name: { label: string; heading: string; body: string; keystone: string };
  membership: { label: string; heading: string; text: string; charge: string; note: string };
  behind: { label: string; heading: string; lede: string; founders: Founder[]; portraitLabel: string };
  correspondence: {
    heading: string;
    routePrefix: string;
    mailPending: string;
    mailPendingTitle: string;
    where: string;
    tagline: string;
    taglineEcho: string;
    sealText: string;
  };
  footer: {
    colophon: string;
    legal: string;
    pages: string;
    legalGroup: string;
    languages: string;
    copyright: string;
    values: string;
  };
  site: SiteCopy;
  contact: {
    title: string;
    heading: string;
    intro: string;
    intentLabel: string;
    intentOther: string;
    /** the intake option for a company that applies for membership itself */
    intentApply: string;
    fields: { company: string; name: string; email: string; country: string; message: string; messageHint: string };
    submit: string;
    sending: string;
    note: string;
    investNotice: string;
    success: string;
    errorGeneric: string;
    errorUnconfigured: string;
    faqHeading: string;
    faq: Faq[];
  };
};
