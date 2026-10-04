import type { GroupKey, Locale } from "../types";

/**
 * The inner pages are built from blocks. Every word on them comes from the compagnon's text
 * (owntext/DUKAAT_محتوى كتابة الموقع حديد _AR.md): the Arabic verbatim, Dutch and English as faithful translations
 * (owntext/vertalingen/). One file per part of the source holds every page of that part in all three languages at once,
 * so the layout is defined once and the languages cannot drift.
 *
 *   T      one string per language. "\n" = line break. [bracketed] text is shown as pending (components/Rich.tsx).
 *   Photo  an id from content/photos.ts (files in public/photos/pages/<id>.jpg).
 *
 * Titles and one-line blurbs of every page (menu, breadcrumb) stay in content/site.{en,nl,ar}.ts.
 */
export type T = Record<Locale, string>;
export type Photo = string;
/** a link inside the site: a path under /{locale}/ such as "services/connect", "contact?subject=membership#form" or "#offers" */
export type Href = string;

export type Item = { title: T; body?: T };
export type PhotoItem = { title: T; body: T; photo?: Photo };
export type Link = { href: Href; label: T };

/** one field of a form. The label is the source's wording; type and required are how the form works, not text */
export type Field = {
  name: string;
  label: T;
  type?: "text" | "email" | "tel" | "url" | "number" | "date" | "textarea" | "select" | "file";
  required?: boolean;
  options?: T[];
  /** stable values for the options (e.g. the contact subjects, so a link can preselect one with ?subject=) */
  values?: string[];
  /** the source's example text inside the field */
  placeholder?: T;
  /** span both columns */
  wide?: boolean;
  /**
   * UX-04 (owner, 4 Oct 2026): one of the few questions the form shows at once. Every other optional field waits behind
   * one "add more details" button. Without any core flag in a request form, its first three own fields are core.
   * Required fields are always shown. A design flag, no text.
   */
  core?: boolean;
};

/**
 * A form. Every form sends its fields by e-mail (app/actions/forms.ts); nothing is stored on the site.
 * common: which shared fields follow the form's own fields —
 *   "request" = the shared fields of the six "What are you looking for?" forms (source 10)
 *   "none"    = the form lists its own contact fields (contact 19, partnership 18)
 */
export type FormDef = {
  id: string;
  /** in a formset: the name of the choice (the source's heading, e.g. "Ik zoek een leverancier") */
  choice?: T;
  /** the heading above the form; omitted where the source gives none (the page title already says it) */
  title?: T;
  intro?: T;
  fields: Field[];
  common: "request" | "none";
  /** UX-05: shared fields left out because the form already asks the same question itself (e.g. "company", "country") */
  omit?: string[];
  /**
   * R1 (owner, 4 Oct 2026): "desk" sets the form beside its page's introduction and business card — the lead block
   * before it and the card register after it join the form in one section, the form in the first screen. Design flag.
   */
  layout?: "desk";
  submit: T;
  /** a consent line the source gives for this form (e.g. the publication option of a purchase request) */
  option?: T;
  /** confirmation after sending; default: the confirmation of source 10 */
  success?: T;
  successNote?: T;
};

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
  /**
   * a ledger of items. cols 1 or 2; numbered 01, 02… only when the source numbers them; photo = the register's one
   * photograph, set as its own plate after the list (never beside it).
   * Design flags only (no text): layout "card" = the contact details as a business card (takes the bare line of prose
   * that follows it as its closing line, with the seal beside it); variant "spec" = the coin certificate (title over value).
   */
  | { kind: "register"; label?: T; heading?: T; intro?: T; items: Item[]; cols?: 1 | 2; numbered?: boolean; photo?: Photo; layout?: "card"; variant?: "spec" }
  /** a compact list of short terms (sectors, topics) set in columns */
  | { kind: "terms"; label?: T; heading?: T; intro?: T; items: T[]; note?: T }
  /** a numbered process (the source numbers it) */
  | { kind: "steps"; label?: T; heading?: T; intro?: T; items: Item[] }
  /** one large sentence on the gold rule */
  | { kind: "statement"; text: T; note?: T }
  /** the membership levels side by side */
  | { kind: "tiers"; label?: T; heading?: T; intro?: T; tiers: { name: string; subtitle: T; tagline: T; forWhom: T; itemsLabel: T; items: T[]; action: Link }[]; note?: T }
  /** sticky heading on one side, items flowing on the other (an item's photo is kept in the content but not shown: no photographs in lists) */
  | { kind: "chapter"; label?: T; heading?: T; intro?: T; items: PhotoItem[] }
  /** questions and answers; theme (UX-18): the menu group a question belongs to — the groups' own labels become its headings */
  | { kind: "faq"; label?: T; heading?: T; items: { q: T; a: T; theme?: GroupKey }[] }
  /** a framed notice: the source's clarifications ("Toelichting") */
  | { kind: "notice"; label?: T; heading?: T; body: T[] }
  /** the one dark bordeaux block of a page */
  | { kind: "dark"; label?: T; heading: T; body: T[]; items?: T[]; photo?: Photo }
  /** long-form legal text: numbered articles with a table of contents */
  | { kind: "legal"; updated: T; intro?: T[]; articles: { title: T; body: T[] }[] }
  /** overview pages only: every page in the group as one text register 01, 02… */
  | { kind: "index"; label?: T; heading?: T }
  /** the source's buttons, in the source's order */
  | { kind: "actions"; heading?: T; body?: T; links: Link[] }
  /** where published items appear ("Bekijk het aanbod"): optional search fields, and the source's text for when nothing is published */
  | { kind: "listing"; id: string; heading: T; intro?: T; search?: Field[]; searchLabel?: T; empty: T; links?: Link[] }
  /** a form on the page, reachable at #<form.id> */
  | { kind: "form"; form: FormDef; label?: T }
  /** several forms behind one choice (the six "What are you looking for?" forms) */
  | { kind: "formset"; id: string; heading?: T; intro?: T; forms: FormDef[] };

/**
 * compact (UX-03, owner 4 Oct 2026): a task page (contact, "What are you looking for?", partnerships) shows its masthead
 * without the photograph band, so the form starts in the first screen; the photo stays the page's share image.
 */
export type Masthead =
  /** a wide photograph under the title (the big one) */
  | { variant: "band"; photo: Photo; compact?: boolean }
  /** a tall photograph beside the title */
  | { variant: "portrait"; photo: Photo; compact?: boolean }
  /** a small photograph beside the lede */
  | { variant: "plate"; photo: Photo; compact?: boolean }
  /** type only (legal texts) */
  | { variant: "type" };

/**
 * eyebrow  the source's "supporting name" (DUKAAT Connect …); default: the menu group
 * headline the source's title of the section; default: the page title from content/site.*.ts
 * lede     the source's introduction line, when it has one
 */
export type PageDef = { masthead: Masthead; eyebrow?: T; headline?: T; lede?: T; blocks: Block[] };
export type PageSet = Record<string, PageDef>;
