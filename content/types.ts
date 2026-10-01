export type Locale = "en" | "nl" | "ar";

export type GroupKey = "about" | "academy" | "services" | "membership" | "events" | "contact" | "legal";

/**
 * copy for the site map (lib/site.ts): menu groups, every page's title and one-line blurb, and the few interface
 * words around them. Group ledes are the source's search descriptions (21); page titles are the source's section
 * names; blurbs are the source's own title line of each section.
 */
export type SiteCopy = {
  /** label = the menu word (1.1); lede = the search description (21); seo = the full search title (21) */
  groups: Record<GroupKey, { label: string; lede: string; seo?: string }>;
  pages: Record<string, { title: string; blurb: string }>;
  ui: {
    home: string;
    inSection: string;
    otherSections: string;
    more: string;
    submenu: string; // "{group}" placeholder
    mainNav: string;
  };
};

/**
 * Everything outside the inner pages: the homepage (source 1), the footer, newsletter and form messages (source 21),
 * and the shared fields of the forms (source 10). Words marked UI are interface words the source does not give.
 */
export type Dict = {
  locale: Locale;
  /** search title and description of the homepage (21) */
  meta: { title: string; description: string; ogImageAlt: string };
  nav: {
    home: string; // 1.1
    descriptor: string; // 1.2, without "DUKAAT |"
    toHome: string; // UI
    menuOpen: string; // UI
    menuClose: string; // UI
    skip: string; // UI
    langLabel: string; // UI
  };
  hero: {
    title: string; // 1.2 main headline
    intro: string; // 1.2 introduction
    pillars: string; // 1.2 the line below it
    knowHeading: string; // 1.3
    know: { title: string; text: string }[]; // 1.3, in the order of homeKnow (lib/site.ts)
    networkHeading: string; // 1.4
    network: { title: string; text?: string }[]; // 1.4, in the order of homeNetwork
    pause: string; // UI
    play: string; // UI
  };
  /** 1.6: the two rows of links at the bottom of the homepage, labels in the order of homeMore */
  more: { heading: string; rows: string[][] };
  footer: {
    about: string; // 21 short description
    values: string; // 21 brand values
    slogan: string; // 21
    copyright: string; // 21
    languages: string; // UI
    newsletter: { title: string; text: string; field: string; button: string; note: string; success: string };
  };
  forms: {
    /** 10: the shared fields of the six forms (also used by the other request forms) */
    common: { name: string; company: string; role: string; country: string; email: string; phone: string; language: string; details: string; attachment: string };
    note: string; // 10 note under the form
    privacy: string; // 10 acknowledgement
    optIn: string; // 10 separate, optional consent
    success: string; // 10 confirmation
    successNote: string; // 10 clarification under the confirmation
    required: string; // 21
    invalidEmail: string; // 21
    sending: string; // 21
    failed: string; // 21
    attachmentHint: string; // 21
    choose: string; // UI: the empty choice of a select
  };
  /** 21 */
  notFound: { text: string; back: string };
  /** extras the owner kept on 30 Sep 2026 (report 9pZxu4Jeprq9yqE3KkNu5V): not in the source, texts from commit 2336702 */
  extra: {
    anno: string;
    annoTitle: string;
    byNomination: string;
    byNominationTitle: string;
    nominated: string;
    why: { label: string; heading: string; lede: string; claims: { roman: string; title: string; body: string }[]; mechanism: string };
    name: { label: string; heading: string; body: string; keystone: string };
    behind: { label: string; heading: string; lede: string; founders: { name: string; role: string; credentials?: string; voice: string; portraitAlt: string }[] };
    correspondence: { heading: string; mailPending: string; mailPendingTitle: string; where: string; taglineEcho: string; sealText: string };
    colophon: string;
    legalLine: string;
    foundation: string;
  };
  site: SiteCopy;
};
