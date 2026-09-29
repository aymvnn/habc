import type { Locale } from "../types";

/**
 * The inner pages are built from blocks. One file per menu group (content/pages/<group>.ts) holds every page
 * of that group in all three languages at once, so the layout is defined once and the languages cannot drift.
 *
 *   T      one string per language. *word* = emphasised (bordeaux in headings), "\n" = line break.
 *   Photo  an id from content/photos.ts (files in public/photos/pages/<id>.jpg).
 *
 * Titles and one-line blurbs of every page stay in content/site.{en,nl,ar}.ts (they feed the menu too).
 */
export type T = Record<Locale, string>;
export type Photo = string;
/** a link inside the site: a path under /{locale}/ such as "how-we-work" or "contact?intent=supplier#intake" */
export type Href = string;

export type Item = { title: T; body?: T };
export type PhotoItem = { title: T; body: T; photo?: Photo };

export type Block =
  /** opening statement in large type, straight under the masthead; optional small photo plate beside it */
  | { kind: "lead"; text: T; photo?: Photo }
  /** text beside a photo. size: plate = small, half = half the width (3:2), tall = portrait (4:5). side: where the photo sits */
  | { kind: "prose"; label?: T; heading?: T; body: T[]; photo?: Photo; size?: "plate" | "half" | "tall"; side?: "start" | "end" }
  /** full-bleed wide photograph (21:9) with an optional caption line on the gold rule */
  | { kind: "band"; photo: Photo; caption?: T }
  /** two photographs, one large (3:2) and one small (4:5) offset beside it, with text under the small one */
  | { kind: "duo"; photos: [Photo, Photo]; label?: T; heading?: T; body?: T[] }
  /** four small photographs in a staggered row */
  | { kind: "mosaic"; photos: [Photo, Photo, Photo, Photo]; caption?: T }
  /** a ledger of items. cols 1 or 2; numbered 01, 02…; variant "quotes" sets the titles as spoken lines; photo = sticky portrait beside */
  | { kind: "register"; label?: T; heading?: T; intro?: T; items: Item[]; cols?: 1 | 2; numbered?: boolean; variant?: "quotes"; photo?: Photo }
  /** a compact list of short terms (categories, topics) set as a typographic specimen in columns */
  | { kind: "terms"; label?: T; heading?: T; intro?: T; items: T[]; note?: T }
  /** a numbered process, three to five steps */
  | { kind: "steps"; label?: T; heading?: T; intro?: T; items: Item[] }
  /** a horizontal chain of words with arrows (Search → Introduction → Trust …) */
  | { kind: "sequence"; label?: T; heading?: T; items: T[]; body?: T }
  /** one large sentence on the gold rule */
  | { kind: "statement"; text: T; note?: T }
  /** a quotation in the first person, with who says it; optional photo */
  | { kind: "quote"; text: T[]; by: T; role?: T; photo?: Photo }
  /** two columns set against each other: for / not for, included / quoted */
  | { kind: "contrast"; label?: T; heading?: T; intro?: T; a: { title: T; items: T[] }; b: { title: T; items: T[] }; note?: T }
  /** a specification sheet: term … value, with an optional photo, or the name film (media: "film") */
  | { kind: "facts"; label?: T; heading?: T; intro?: T; items: { term: T; value: T }[]; photo?: Photo; media?: "film"; note?: T }
  /** the membership levels side by side; `promise` holds the written commitments of a level */
  | { kind: "tiers"; label?: T; heading?: T; intro?: T; tiers: { name: string; tagline: T; items: T[]; promise?: T[] }[]; note?: T }
  /** a typeset specimen of a form or profile: its fields, and optionally sample lines (a label only when one is given) */
  | { kind: "specimen"; label?: T; heading?: T; intro?: T; title: T; fields: { label: T; hint?: T }[]; examplesLabel?: T; examples?: T[]; note?: T }
  /** sticky heading on one side, items flowing on the other; items may carry a small photo plate */
  | { kind: "chapter"; label?: T; heading: T; intro?: T; items: PhotoItem[] }
  /** questions and answers, optionally grouped */
  | { kind: "faq"; label?: T; heading?: T; groups: { title?: T; items: { q: T; a: T }[] }[] }
  /** a framed notice: disclaimers, legal lines */
  | { kind: "notice"; label?: T; heading?: T; body: T[] }
  /** the one dark bordeaux block of a page */
  | { kind: "dark"; label?: T; heading: T; body: T[]; items?: T[]; photo?: Photo }
  /** long-form legal text: numbered articles with a table of contents */
  | { kind: "legal"; updated: T; intro?: T[]; articles: { title: T; body: T[] }[] }
  /** overview pages only: every page in the group as an editorial index, with the pages' own photographs */
  | { kind: "index"; label?: T; heading?: T }
  /** the eight routes from the home page */
  | { kind: "routes" }
  /** reuse a section from the home page as it is */
  | { kind: "home"; section: "why" | "name" | "behind" | "membership" }
  /** the close of a page: where to go next. Links go to other pages or to the intake with an intent — never "join" */
  | { kind: "next"; heading: T; body?: T; links: { href: Href; label: T }[] };

export type Masthead =
  /** a wide photograph under the title (the big one) */
  | { variant: "band"; photo: Photo }
  /** a tall photograph beside the title */
  | { variant: "portrait"; photo: Photo }
  /** a small photograph beside the lede */
  | { variant: "plate"; photo: Photo }
  /** type only (legal texts) */
  | { variant: "type" };

export type PageDef = { masthead: Masthead; blocks: Block[] };
export type PageSet = Record<string, PageDef>;
