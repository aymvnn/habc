export type Locale = "en" | "nl" | "ar";

export type HeroLine = { text: string; crossed?: boolean };

export type RouteItem = { intent: string; label: string; hint: string };

export type Claim = { roman: string; title: string; body: string };

export type Founder = { name: string; role: string; voice: string; portraitAlt: string };

export type Faq = { q: string; a: string };

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
    legalPending: string;
    languages: string;
    copyright: string;
    values: string;
  };
  contact: {
    title: string;
    heading: string;
    intro: string;
    intentLabel: string;
    intentOther: string;
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
