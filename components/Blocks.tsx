import { Fragment } from "react";
import Link from "next/link";
import { Arrow } from "./Arrow";
import type { Dict, Locale } from "@/content/types";
import type { Block, PageDef, T } from "@/content/pages/types";
import { pageDefs } from "@/content/pages";
import { groups, hrefOf, type SiteGroup } from "@/lib/site";
import { Rich } from "./Rich";
import { TwinLine, twinOf } from "./Twin";
import { TierLight } from "./TierLight";
import { FoilRose } from "./FoilRose";
import { RoseEngine } from "./RoseEngine";
import { Photo } from "./Photo";
import { Form, FormSet, type Channel } from "./Form";
import { ListingSearch } from "./Listing";
import { fieldsOf, type LocalField } from "@/lib/forms";
import type { Field, FormDef } from "@/content/pages/types";
import { hiddenFormOptions, hiddenListings } from "@/content/visibility";
import { Seal } from "./Sections";

/* eslint-disable @next/next/no-img-element -- brand SVGs are served as-is */

/**
 * The inner pages, block by block (schema: content/pages/types.ts, styles: app/blocks.css).
 * Every block is its own <section>; headings inside are h2, items h3. Photos come from content/photos.ts.
 */

/* === Muntregister: three paces (a2-2) ===
   The space above a block depends on what comes before it (computed in Blocks()): dense runs stay tight, a statement
   or a band gets room to breathe, the rest takes the normal step. app/muntregister.css turns data-pace into padding. */
type Pace = "tight" | "pace" | "breath";
type Ctx = { l: Locale; d: Dict; group: SiteGroup; path: string; pace?: Pace; last?: boolean; xrule?: boolean };
const pz = (c: Ctx) => ({ "data-pace": c.pace, "data-last": c.last ? "" : undefined });

/** the few words the blocks need themselves */
const UI = {
  contents: { en: "Contents", nl: "Inhoud", ar: "المحتويات" },
  article: { en: "Article", nl: "Artikel", ar: "المادة" },
} satisfies Record<string, T>;

const pad = (i: number) => String(i + 1).padStart(2, "0");
/* === Waardepapier v9 (owner approved 9 Oct 2026): two numerals ===
   Where the site numbers, both numerals stand: the page's own leads, the other follows small in gold (.n2,
   app/waardepapier.css). On /ar the Arabic-Indic numeral leads. Every numeral here is already aria-hidden. */
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const arDigits = (s: string) => s.replace(/\d/g, (d) => AR_DIGITS[+d]);
const twinNum = (s: string, l: Locale) =>
  l === "ar" ? (<><span className="n1">{arDigits(s)}</span><span className="n2">{s}</span></>) : (<>{s}<span className="n2">{arDigits(s)}</span></>);
/* Muntregister g4: a stagger of at most three steps (60 / 120 / 180 ms), only on photographs in a row */
const lag = (i: number) => (i % 4 ? ` lag${Math.min(i % 4, 3)}` : "");

/* === Muntregister: twin labels NL | AR (a7-5, b10) ===
   On these pages only (the owner's trial), a section label is followed by the source's own label in the other script:
   the Arabic one on /nl and /en, the English one on /ar (as the masthead's twin). The words are the source's own, in
   the same entry; decorative (aria-hidden) and hidden on phones (app/muntregister.css). No label, no twin. */
const TWIN_PAGES = new Set(["about", "membership", "academy"]);
function Label({ label, l, path, className = "label rv" }: { label: T; l: Locale; path?: string; className?: string }) {
  const tl = l === "ar" ? "en" : "ar";
  const twin = path && TWIN_PAGES.has(path) ? label[tl] : undefined;
  return (
    <span className={className}>
      {label[l]}
      {twin && twin !== label[l] && (
        <span className="label-twin" lang={tl} dir={tl === "ar" ? "rtl" : "ltr"} aria-hidden="true">{twin}</span>
      )}
    </span>
  );
}

function Head({ label, heading, intro, l, path, className = "" }: { label?: T; heading?: T; intro?: T; l: Locale; path?: string; className?: string }) {
  if (!label && !heading && !intro) return null;
  return (
    <div className={`b-head ${className}`}>
      {label && <Label label={label} l={l} path={path} />}
      {heading && (
        /* Signature 4: on the twin pages the heading shares its line with its own text in the other script */
        <TwinLine twin={path && TWIN_PAGES.has(path) ? heading[twinOf(l)] : undefined} lang={twinOf(l)}>
          <h2 className="rv"><Rich text={heading[l]} words /></h2>
        </TwinLine>
      )}
      {intro && <p className="lede"><Rich text={intro[l]} /></p>}
    </div>
  );
}

function Paras({ body, l, className = "" }: { body: T[]; l: Locale; className?: string }) {
  return (
    <>
      {body.map((p, i) => (
        <p className={className || undefined} key={i}><Rich text={p[l]} /></p>
      ))}
    </>
  );
}

/* === Muntregister: the one crossing line (a6-2, g7) ===
   A chapter divider, at most one per page and only before the tiers or the dark block (never in the page's end):
   a 1px rule across the full width with a 3px piece of foil that draws in from the page's edge and then catches the
   light (components/FoilLight.tsx). Decorative, no text. It only shows under html[data-beweging="extra"]; without it
   the element is display:none, so the page looks exactly as before. Styles: app/muntregister.css, "SLICE 9". */
function XRule({ before }: { before?: boolean }) {
  return <div className={`x-rule rv-rule${before ? " is-before" : ""}`} aria-hidden="true"><span /></div>;
}

/* ---------- the blocks ---------- */

function Lead({ b, c }: { b: Extract<Block, { kind: "lead" }>; c: Ctx }) {
  return (
    <section className={`b b-lead${b.photo ? " has-photo" : ""}`} {...pz(c)}>
      <div className="wrap b-grid">
        <p className="b-lead-t rv-rule"><Rich text={b.text[c.l]} /></p>
        {b.photo && <Photo id={b.photo} locale={c.l} className="b-lead-ph rv-ph lag1" sizes="(max-width: 900px) 70vw, 24vw" />}
      </div>
    </section>
  );
}

function Prose({ b, c }: { b: Extract<Block, { kind: "prose" }>; c: Ctx }) {
  const size = b.size ?? "half";
  const side = b.side ?? "end";
  const cls = b.photo ? `with-ph ph-${size} side-${side}` : b.heading ? "split" : "single";
  /* Muntregister a9-1: sizes as measured (1442: half 700px, tall 418px; 390: 331px); the column stops growing at 1624px */
  const sizes = size === "half" ? "(max-width: 900px) 92vw, 50vw" : size === "tall" ? "(max-width: 900px) 90vw, (min-width: 1624px) 440px, 30vw" : "(max-width: 900px) 70vw, (min-width: 1624px) 360px, 24vw";
  return (
    <section className={`b b-prose ${cls}`} {...pz(c)}>
      <div className="wrap b-grid">
        {(b.label || b.heading) && (
          <div className="b-prose-head">
            {b.label && <Label label={b.label} l={c.l} path={c.path} />}
            {b.heading && (
              <TwinLine twin={c.path && TWIN_PAGES.has(c.path) ? b.heading[twinOf(c.l)] : undefined} lang={twinOf(c.l)}>
                <h2 className="rv"><Rich text={b.heading[c.l]} words /></h2>
              </TwinLine>
            )}
          </div>
        )}
        <div className="b-prose-body"><Paras body={b.body} l={c.l} /></div>
        {b.photo && <Photo id={b.photo} locale={c.l} className="b-prose-ph rv-ph" sizes={sizes} />}
      </div>
    </section>
  );
}

function Band({ b, c }: { b: Extract<Block, { kind: "band" }>; c: Ctx }) {
  return (
    <section className="b b-band" {...pz(c)}>
      <Photo id={b.photo} locale={c.l} className="b-band-ph" sizes="100vw" />
      {b.caption && (
        <div className="wrap">
          <p className="b-band-cap rv-rule"><Rich text={b.caption[c.l]} /></p>
        </div>
      )}
    </section>
  );
}

function Duo({ b, c }: { b: Extract<Block, { kind: "duo" }>; c: Ctx }) {
  return (
    <section className="b b-duo" {...pz(c)}>
      <div className="wrap b-grid">
        <Photo id={b.photos[0]} locale={c.l} className="duo-a rv-ph" sizes="(max-width: 900px) 92vw, (min-width: 1624px) 780px, 53vw" />
        <Photo id={b.photos[1]} locale={c.l} className="duo-b rv-ph lag2" sizes="(max-width: 900px) 64vw, (min-width: 1624px) 440px, 30vw" />
        {(b.label || b.heading || b.body) && (
          <div className="duo-t">
            <Head label={b.label} heading={b.heading} l={c.l} path={c.path} />
            {b.body && <Paras body={b.body} l={c.l} />}
          </div>
        )}
      </div>
    </section>
  );
}

function Mosaic({ b, c }: { b: Extract<Block, { kind: "mosaic" }>; c: Ctx }) {
  return (
    <section className="b b-mosaic" {...pz(c)}>
      <div className="wrap">
        <div className="mosaic">
          {b.photos.map((p, i) => (
            <Photo key={p} id={p} locale={c.l} className={`mosaic-ph rv-ph${lag(i)}`} sizes="(max-width: 900px) 46vw, (min-width: 1624px) 330px, 22vw" />
          ))}
        </div>
        {b.caption && <p className="b-note mosaic-cap"><Rich text={b.caption[c.l]} /></p>}
      </div>
    </section>
  );
}

function Register({ b, c, closing }: { b: Extract<Block, { kind: "register" }>; c: Ctx; closing?: T[] }) {
  const head = b.label || b.heading || b.intro;
  /* === Muntregister: the business card (a2-8, b9) ===
     The contact details as a <dl>, the loose line under them (the bare prose block that follows, see Blocks())
     as the card's closing line, and beside it the one seal of the page: static, 132px, decorative. */
  if (b.layout === "card") {
    return (
      <section className="b b-register is-card" {...pz(c)}>
        <div className="wrap b-grid">
          <div className="card-seal"><Seal text={c.d.extra.correspondence.sealText} /></div>
          <div className="card">
            {head && <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} />}
            <dl className="card-dl">
              {b.items.map((it, i) => (
                <div className="card-row" key={i}>
                  <dt><Rich text={it.title[c.l]} /></dt>
                  {it.body && <dd><Rich text={it.body[c.l]} /></dd>}
                </div>
              ))}
            </dl>
            {closing?.map((p, i) => <p className="card-close" key={i}><Rich text={p[c.l]} /></p>)}
          </div>
        </div>
      </section>
    );
  }
  /* === Muntregister: the coin certificate (a7-3) ===
     variant "spec": the facts of the coin as a two-column <dl>, legend over value, the values in the serif. */
  // UX-19: without a heading of its own the register's items are the page's sections (h2), so no level is skipped
  const ItemH = b.heading ? "h3" : "h2";
  const list =
    b.variant === "spec" ? (
      <dl className="spec-reg">
        {b.items.map((it, i) => (
          <div className="spec-row" key={i}>
            <dt><Rich text={it.title[c.l]} /></dt>
            {it.body && <dd><Rich text={it.body[c.l]} /></dd>}
          </div>
        ))}
      </dl>
    ) : (
      <ol className={`reg cols-${b.cols ?? 1}${b.numbered ? " numbered" : ""}`}>
        {b.items.map((it, i) => (
          <li className="reg-i" key={i}>
            {b.numbered && <span className="reg-n" aria-hidden="true">{twinNum(pad(i), c.l)}</span>}
            <div>
              <ItemH><Rich text={it.title[c.l]} /></ItemH>
              {it.body && (() => {
                // a blank line splits the text into paragraphs; the first one then sums the rest up
                const paras = it.body[c.l].split("\n\n");
                return paras.map((p, k) => <p key={k} className={paras.length > 1 && k === 0 ? "reg-sum" : undefined}><Rich text={p} /></p>);
              })()}
            </div>
          </li>
        ))}
      </ol>
    );
  /* === Muntregister: the register as a split (a2-1, g7) ===
     The heading held in columns 1–4, the list in 6–12 (also without a heading, so every list starts on the same
     line). A register of titles only is set as a two-column specimen ("is-terms"). */
  const bare = b.variant !== "spec" && b.items.every((it) => !it.body);
  const reg = (
    <section className={`b b-register is-split${bare ? " is-terms" : ""}${b.variant === "spec" ? " is-spec" : ""}`} {...pz({ ...c, last: c.last && !b.photo })}>
      <div className="wrap b-grid">
        {head && (
          <div className="reg-head">
            <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} />
            {/* Werkplaatsen w3: the coin certificate's rosette, engraved in front of you */}
            {b.variant === "spec" && <RoseEngine />}
          </div>
        )}
        <div className="reg-body">{list}</div>
      </div>
    </section>
  );
  if (!b.photo) return reg;
  /* === Muntregister: no photographs in lists (g1, a3-2) ===
     The register's one photograph no longer stands beside the list: it follows it as its own plate (4:5, four
     columns, hanging from the list's first column), so no narrow photo sits beside a heading. */
  return (
    <>
      {reg}
      <section className="b b-plate" {...pz({ ...c, pace: "tight" })}>
        <div className="wrap b-grid">
          <Photo id={b.photo} locale={c.l} className="plate-ph rv-ph" sizes="(max-width: 480px) 92vw, (max-width: 900px) 400px, (min-width: 1624px) 440px, 30vw" />
        </div>
      </section>
    </>
  );
}

function Terms({ b, c }: { b: Extract<Block, { kind: "terms" }>; c: Ctx }) {
  return (
    <section className="b b-terms" {...pz(c)}>
      <div className="wrap b-grid">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} className="terms-head" />
        <ul className="terms">
          {b.items.map((x, i) => (
            <li key={i}><Rich text={x[c.l]} /></li>
          ))}
        </ul>
        {b.note && <p className="b-note terms-note"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Steps({ b, c }: { b: Extract<Block, { kind: "steps" }>; c: Ctx }) {
  return (
    <section className="b b-steps" {...pz(c)}>
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} className="head" />
        {/* Muntregister g6/a7-2: struck coins on the line (static); --i and data-n drive the strike under data-beweging="extra" (≤6 steps) */}
        <ol className={`bsteps${b.items.length <= 6 ? " is-struck" : ""}`} data-n={b.items.length} style={{ ["--n" as string]: b.items.length }}>
          {b.items.map((s, i) => (
            <li className="bstep" key={i} style={{ ["--i" as string]: i }}>
              <span className="bstep-n" aria-hidden="true">{twinNum(String(i + 1), c.l)}</span>
              <h3><Rich text={s.title[c.l]} /></h3>
              {s.body && <p><Rich text={s.body[c.l]} /></p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Statement({ b, c }: { b: Extract<Block, { kind: "statement" }>; c: Ctx }) {
  return (
    <section className="b b-statement" {...pz(c)}>
      <div className="wrap">
        <div className="stmt-mark" aria-hidden="true">
          <svg viewBox="0 0 140 44" fill="none"><path d="M2 42 C 40 42, 60 2, 138 2" /><path d="M2 2 C 40 2, 60 42, 138 42" /></svg>
        </div>
        <p className={`stmt${b.text.en.length > 90 ? " is-long" : ""}`}><Rich text={b.text[c.l]} /></p>
        {b.note && <p className="stmt-note"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Chapter({ b, c }: { b: Extract<Block, { kind: "chapter" }>; c: Ctx }) {
  const ItemH = b.heading ? "h3" : "h2"; // UX-19
  return (
    <section className="b b-chapter" {...pz(c)}>
      <div className="wrap b-grid">
        <div className="ch-head">
          <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} />
        </div>
        <div className="ch-items">
          {b.items.map((it, i) => (
            /* Muntregister g1: no photographs in lists — the items' photos are no longer shown (content keeps them) */
            <article className="ch-i" key={i}>
              <span className="ch-n" aria-hidden="true">{twinNum(pad(i), c.l)}</span>
              <div>
                <ItemH><Rich text={it.title[c.l]} /></ItemH>
                <p><Rich text={it.body[c.l]} /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Notice({ b, c }: { b: Extract<Block, { kind: "notice" }>; c: Ctx }) {
  return (
    <section className="b b-notice" {...pz(c)}>
      <div className="wrap">
        <aside className="notice-box">
          {b.label && <Label label={b.label} l={c.l} path={c.path} className="label" />}
          {b.heading && <h2><Rich text={b.heading[c.l]} /></h2>}
          {b.body.map((p, i) => (
            <p key={i}><Rich text={p[c.l]} /></p>
          ))}
        </aside>
      </div>
    </section>
  );
}

function Dark({ b, c }: { b: Extract<Block, { kind: "dark" }>; c: Ctx }) {
  return (
    <>
    {c.xrule && <XRule before />}
    <section className={`b b-dark${b.photo ? " has-photo" : ""}`} {...pz(c)}>
      {b.photo && <Photo id={b.photo} locale={c.l} className="dark-ph" sizes="100vw" decorative />}
      {/* Muntregister a7-4: no watermark tulip in the dark block — plain bordeaux under its foil edge */}
      <div className="wrap b-grid">
        <div className="dark-head">
          {b.label && <Label label={b.label} l={c.l} path={c.path} />}
          <h2 className="rv"><Rich text={b.heading[c.l]} words /></h2>
        </div>
        <div className="dark-body"><Paras body={b.body} l={c.l} /></div>
        {b.items && (
          <ul className="dark-items">
            {b.items.map((x, i) => (
              <li key={i}><Rich text={x[c.l]} /></li>
            ))}
          </ul>
        )}
      </div>
    </section>
    </>
  );
}

function Legal({ b, c }: { b: Extract<Block, { kind: "legal" }>; c: Ctx }) {
  return (
    <section className="b b-legal" {...pz(c)}>
      <div className="wrap b-grid">
        <nav className="lg-toc" aria-label={UI.contents[c.l]}>
          <p className="label">{UI.contents[c.l]}</p>
          <ol>
            {b.articles.map((a, i) => (
              <li key={i}><a href={`#art-${i + 1}`}><span>{i + 1}</span>{a.title[c.l]}</a></li>
            ))}
          </ol>
        </nav>
        <div className="lg-body">
          <p className="lg-updated">{b.updated[c.l]}</p>
          {b.intro && b.intro.map((p, i) => <p className="lg-intro" key={i}><Rich text={p[c.l]} /></p>)}
          {b.articles.map((a, i) => (
            <article className="lg-art" id={`art-${i + 1}`} key={i}>
              <h2><span className="lg-n">{UI.article[c.l]} {i + 1}</span><Rich text={a.title[c.l]} /></h2>
              {a.body.map((p, k) => (
                <p key={k}><Rich text={p[c.l]} /></p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* === Muntregister: the index as one text register (g1) ===
   Every page of the group as an equal row 01–12: number (serif, ink-soft), title (grotesk 700), the page's line
   (serif), and the round arrow coin. No featured card, no thumbnails: photographs live in the pages themselves.
   The arrow stays in the same place in the reading order (after the title); CSS sets it in the last column. */
function Index({ b, c }: { b: Extract<Block, { kind: "index" }>; c: Ctx }) {
  const kids = c.group.children.map((k) => ({
    href: hrefOf(c.l, k),
    title: c.d.site.pages[k.path].title,
    blurb: c.d.site.pages[k.path].blurb,
  }));
  return (
    <section className="b b-index" {...pz(c)}>
      <div className="wrap">
        <Head label={b.label} heading={b.heading} l={c.l} path={c.path} className="head" />
        <ol className="idx-reg">
          {kids.map((k, i) => (
            <li key={k.href}>
              <Link prefetch={false} href={k.href}>
                <span className="idx-n" aria-hidden="true">{pad(i)}</span>
                <span className="idx-t">{k.title}</span>
                <span className="idx-go" aria-hidden="true"><Arrow /></span>
                <span className="idx-b">{k.blurb}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** a link of the source: a page of the site, the contact form with a subject, or an anchor on this page */
export const hrefIn = (l: Locale, h: string) => (h.startsWith("#") ? h : `/${l}/${h}`);
/** links to an overview that is not public (content/visibility.ts) are left out */
export const shown = (h: string) => !(h.includes("#") && hiddenListings.has(h.slice(h.indexOf("#") + 1)));

function Tiers({ b, c }: { b: Extract<Block, { kind: "tiers" }>; c: Ctx }) {
  const NameH = b.heading ? "h3" : "h2"; // UX-19
  return (
    <section className="b b-tiers" {...pz(c)}>
      {c.xrule && <XRule />}
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} path={c.path} className="head" />
        <div className="tiers" style={{ ["--n" as string]: b.tiers.length }}>
          <TierLight />
          {b.tiers.map((tr, i) => (
            <article className="tier" key={tr.name}>
              {/* Signature 9: the membership card itself — paper, Bordeaux leather, dark with gold foil — carrying only
                  what was already there: the roman numeral and the level's name (ID-1 card proportion, 1.586:1) */}
              <div className="tier-card" data-tier={i + 1}>
                <span className="tier-n" aria-hidden="true">{["I", "II", "III", "IV"][i]}<span className="n2">{arDigits(String(i + 1))}</span></span>
                {/* Werkplaatsen w4: the Executive card's security foil, a petal per angle round its tulip */}
                {i === 2 && <FoilRose />}
                <span className="tc-mark" aria-hidden="true" />
                <NameH className="tier-name">{tr.name}</NameH>
              </div>
              <p className="tier-sub">{tr.subtitle[c.l]}</p>
              <p className="tier-tag"><Rich text={tr.tagline[c.l]} /></p>
              <p className="tier-for"><Rich text={tr.forWhom[c.l]} /></p>
              <p className="tier-il">{tr.itemsLabel[c.l]}</p>
              <ul className="tier-items">
                {tr.items.map((x, k) => (
                  <li key={k}><Rich text={x[c.l]} /></li>
                ))}
              </ul>
              <Link prefetch={false} className="act-a tier-go" href={hrefIn(c.l, tr.action.href)}>
                {tr.action.label[c.l]} <Arrow />
              </Link>
            </article>
          ))}
        </div>
        {b.note && <p className="b-note"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

/* === UX-18 (owner, 4 Oct 2026): the questions in themes ===
   The questions are grouped by the menu group they belong to; the groups' own labels (content/site.*.ts) are the
   headings, in the menu's order, with a line of links to them on top. Every question keeps its own words and its
   order within its theme. Questions without a theme stay in one list, as before. */
function Faq({ b, c }: { b: Extract<Block, { kind: "faq" }>; c: Ctx }) {
  const item = (f: (typeof b.items)[number], i: number) => (
    <details key={i}>
      <summary>{f.q[c.l]}</summary>
      <p><Rich text={f.a[c.l]} /></p>
    </details>
  );
  const themes = groups.map((g) => g.key).filter((k) => b.items.some((f) => f.theme === k));
  if (!themes.length) {
    return (
      <section className="b b-faq" {...pz(c)}>
        <div className="wrap">
          <Head label={b.label} heading={b.heading} l={c.l} path={c.path} className="head" />
          <div className="faq faq-list">{b.items.map(item)}</div>
        </div>
      </section>
    );
  }
  return (
    <section className="b b-faq is-themed" {...pz(c)}>
      <div className="wrap">
        <Head label={b.label} heading={b.heading} l={c.l} path={c.path} className="head" />
        <nav className="faq-themes" aria-label={c.d.ux.onThisPage}>
          <ul>
            {themes.map((k) => (
              <li key={k}><a href={`#faq-${k}`}>{c.d.site.groups[k].label}</a></li>
            ))}
          </ul>
        </nav>
        {themes.map((k) => (
          <div className="faq-group" id={`faq-${k}`} key={k}>
            <h2 className="faq-theme">{c.d.site.groups[k].label}</h2>
            <div className="faq faq-list">{b.items.map((f, i) => (f.theme === k ? item(f, i) : null))}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Actions({ b, c }: { b: Extract<Block, { kind: "actions" }>; c: Ctx }) {
  const links = b.links.filter((k) => shown(k.href));
  if (!links.length && !b.heading && !b.body) return null;
  return (
    <section className="b b-actions" {...pz(c)}>
      <div className="wrap">
        {(b.heading || b.body) && (
          <div className="act-head">
            {b.heading && <h2 className="rv"><Rich text={b.heading[c.l]} words /></h2>}
            {b.body && <p className="lede"><Rich text={b.body[c.l]} /></p>}
          </div>
        )}
        <ul className="act-links">
          {links.map((k, i) => (
            <li key={k.href + i}>
              <Link prefetch={false} href={hrefIn(c.l, k.href)} className={i === 0 ? "act-a is-first" : "act-a"}>
                <span><Rich text={k.label[c.l]} /></span>
                <Arrow />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const local = (fs: Field[], l: Locale): LocalField[] =>
  fs.map((f) => ({ ...f, label: f.label[l], options: f.options?.map((o) => o[l]), placeholder: f.placeholder?.[l] }));

function Listing({ b, c }: { b: Extract<Block, { kind: "listing" }>; c: Ctx }) {
  // not public (content/visibility.ts): only the overview's other buttons remain
  if (hiddenListings.has(b.id)) return b.links?.length ? <Actions b={{ kind: "actions", links: b.links }} c={c} /> : null;
  return (
    <section className="b b-listing" id={b.id} {...pz(c)}>
      <div className="wrap">
        <div className="head">
          <h2 className="rv"><Rich text={b.heading[c.l]} words /></h2>
          {b.intro && <p className="lede"><Rich text={b.intro[c.l]} /></p>}
        </div>
        <div className="ls">
          {b.search ? (
            <ListingSearch id={b.id} fields={local(b.search, c.l)} label={b.searchLabel?.[c.l] ?? ""} empty={b.empty[c.l]} choose={c.d.forms.choose} />
          ) : (
            <p className="ls-empty on">{b.empty[c.l]}</p>
          )}
          {b.links && b.links.length > 0 && (
            <ul className="ls-links">
              {b.links.map((k, i) => (
                <li key={k.href + i}>
                  <Link prefetch={false} className="act-a" href={hrefIn(c.l, k.href)}>{k.label[c.l]} <Arrow /></Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/** the contact page's business card (contact 19): its rows in this language — a value still to come stays in brackets */
type CardBlock = Extract<Block, { kind: "register" }>;
const isCard = (b?: Block): b is CardBlock => !!b && b.kind === "register" && b.layout === "card";
function cardChannels(l: Locale): Channel[] {
  const card = pageDefs.contact?.blocks.find(isCard);
  return (card?.items ?? []).slice(0, 2).map((it) => ({ label: it.title[l], value: it.body?.[l] ?? "" }));
}

/** the props of one form in one language, with the source's default confirmation (10) when the form has none */
function formProps(f: FormDef, c: Ctx) {
  const d = c.d;
  const desk = f.layout === "desk";
  return {
    id: f.id,
    locale: c.l,
    fields: fieldsOf(f, c.l, d),
    submit: f.submit[c.l],
    success: f.success ? f.success[c.l] : d.forms.success,
    successNote: f.success ? f.successNote?.[c.l] : d.forms.successNote,
    option: hiddenFormOptions.has(f.id) ? undefined : f.option?.[c.l],
    msgs: d.forms,
    // the UX assessment's interface words (owner, 4 Oct 2026): UX-04 / R1, UX-07, UX-09
    ux: { more: desk ? d.ux.moreInfo : d.ux.moreDetails, checkFields: d.ux.checkFields, respondingTo: d.ux.respondingTo, direct: d.ux.direct },
    channels: cardChannels(c.l),
    // R1: on the contact page the newsletter consent waits for the confirmation (the footer newsletter's button)
    optInAfter: desk ? { button: d.footer.newsletter.button, success: d.footer.newsletter.success } : undefined,
    /* Muntregister a4-8: the seal is pressed beside the confirmation — except on the contact page, whose business card
       already carries the page's one seal (b9) */
    mark: c.path === "contact" ? undefined : <Seal text={d.extra.correspondence.sealText} />,
  };
}

/* === R1 (owner, 4 Oct 2026): the contact form at a desk ===
   A form with layout "desk" takes the page's introduction (the lead block before it) and its business card (the card
   register after it, with its closing line) into one section: the form in the first screen, beside it the source's
   introduction, the direct channels under the heading "Prefer direct contact?" and what happens after sending. On
   phones: introduction, form, then the rest. The words of the lead, the card and the form are the source's own. */
function DeskForm({ b, c, lead, card, closing }: { b: Extract<Block, { kind: "form" }>; c: Ctx; lead?: Extract<Block, { kind: "lead" }>; card?: CardBlock; closing?: T[] }) {
  const id = `${b.form.id}-direct`;
  return (
    <section className="b b-form is-desk" id={b.form.id} {...pz(c)}>
      <div className="wrap desk">
        {lead && <p className="desk-lead"><Rich text={lead.text[c.l]} /></p>}
        <div className="desk-form"><Form {...formProps(b.form, c)} /></div>
        <aside className="desk-aside">
          {card && (
            <div className="desk-card" aria-labelledby={id}>
              <h2 className="desk-h" id={id}>{c.d.ux.direct}</h2>
              <dl className="card-dl">
                {card.items.map((it, i) => (
                  <div className="card-row" key={i}>
                    <dt><Rich text={it.title[c.l]} /></dt>
                    {it.body && <dd><Rich text={it.body[c.l]} /></dd>}
                  </div>
                ))}
              </dl>
              {closing?.map((p, i) => <p className="card-close" key={i}><Rich text={p[c.l]} /></p>)}
            </div>
          )}
          <div className="desk-after">
            <h2 className="desk-h">{c.d.ux.after}</h2>
            <ol className="desk-steps">
              {c.d.ux.afterSteps.map((s, i) => (
                <li key={i}><span className="desk-n" aria-hidden="true">{i + 1}</span><span>{s}</span></li>
              ))}
            </ol>
          </div>
          {card && <div className="card-seal desk-seal"><Seal text={c.d.extra.correspondence.sealText} /></div>}
        </aside>
      </div>
    </section>
  );
}

function FormBlock({ b, c }: { b: Extract<Block, { kind: "form" }>; c: Ctx }) {
  return (
    <section className="b b-form" id={b.form.id} {...pz(c)}>
      <div className="wrap b-grid">
        <div className="fm-head">
          {b.label && <Label label={b.label} l={c.l} path={c.path} />}
          {b.form.title && <h2 className="rv"><Rich text={b.form.title[c.l]} words /></h2>}
          {b.form.intro && <p className="lede"><Rich text={b.form.intro[c.l]} /></p>}
        </div>
        <div className="fm-body"><Form {...formProps(b.form, c)} /></div>
      </div>
    </section>
  );
}

function FormSetBlock({ b, c }: { b: Extract<Block, { kind: "formset" }>; c: Ctx }) {
  return (
    <section className="b b-formset" {...pz(c)}>
      <div className="wrap">
        {(b.heading || b.intro) && (
          <div className="head">
            {b.heading && <h2 className="rv"><Rich text={b.heading[c.l]} words /></h2>}
            {b.intro && <p className="lede"><Rich text={b.intro[c.l]} /></p>}
          </div>
        )}
        <FormSet
          id={b.id}
          headingLevel={b.heading ? 3 : 2}
          forms={b.forms.map((f) => ({ ...formProps(f, c), choice: (f.choice ?? f.title ?? { en: f.id, nl: f.id, ar: f.id })[c.l], title: f.title?.[c.l], intro: f.intro?.[c.l] }))}
        />
      </div>
    </section>
  );
}

/** the kind a block renders as (null: it renders nothing), so the pace sees the page as the visitor does */
function shownKind(b: Block): Block["kind"] | null {
  if (b.kind === "listing" && hiddenListings.has(b.id)) return b.links?.length ? "actions" : null;
  if (b.kind === "actions" && !b.links.some((k) => shown(k.href)) && !b.heading && !b.body) return null;
  return b.kind;
}
/** a bare line of prose (no label, heading or photo): the contact card takes it as its closing line */
const bareProse = (b?: Block): b is Extract<Block, { kind: "prose" }> => !!b && b.kind === "prose" && !b.label && !b.heading && !b.photo;

/* === Muntregister: the reverse of the coin (g2, a5-3) ===
   When a page's last visible block is a row of actions (or a hidden listing that shows only its buttons), that block
   moves into the page's end (components/PageEnd.tsx): same heading, text and links, in the same reading order, now
   set as the slot's opening. Everything else stays in the page. A page with a form (or the contact page) is a
   "form page": its end carries no seal, since a sent form shows one (b9). */
export type EndActions = Extract<Block, { kind: "actions" }>;
export function splitEnd(def: PageDef): { def: PageDef; end?: EndActions; formPage: boolean } {
  const formPage = def.blocks.some((b) => b.kind === "form" || b.kind === "formset");
  let k = def.blocks.length - 1;
  while (k >= 0 && !shownKind(def.blocks[k])) k--; // blocks that render nothing do not count
  const last = def.blocks[k];
  if (!last || shownKind(last) !== "actions") return { def, formPage };
  const end: EndActions = last.kind === "actions" ? last : { kind: "actions", links: last.kind === "listing" ? last.links ?? [] : [] };
  return { def: { ...def, blocks: def.blocks.filter((_, i) => i !== k) }, end, formPage };
}

const TIGHT = new Set(["register>register", "lead>register", "register>notice", "chapter>register"]);
const BREATH = new Set(["statement", "band"]);
function paceOf(prev: string | undefined, cur: string): Pace {
  if (!prev) return "pace";
  if (BREATH.has(prev) || BREATH.has(cur)) return "breath";
  return TIGHT.has(`${prev}>${cur}`) ? "tight" : "pace";
}

/** UX-24: the plain words of a block's own heading (emphasis marks removed), when it has one */
export function headingOf(b: Block, l: Locale): string | undefined {
  const t = b.kind === "form" ? b.form.title : "heading" in b ? b.heading : undefined;
  return t ? t[l].replace(/\*/g, "").replace(/\s+/g, " ").trim() : undefined;
}
/** UX-24: the page's sections, as the section index under the masthead lists them (anchors #s-<block index>) */
export function sectionIndex(def: PageDef, l: Locale): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = [];
  def.blocks.forEach((b, i) => {
    const text = shownKind(b) ? headingOf(b, l) : undefined;
    if (text) out.push({ id: `s-${i}`, text });
  });
  return out;
}

export function Blocks({ def, locale, d, group, path }: { def: PageDef; locale: Locale; d: Dict; group: SiteGroup; path: string }) {
  const base: Ctx = { l: locale, d, group, path };
  // the blocks as they will show: the contact card swallows the bare line after it, blocks that render nothing drop out;
  // R1: a form at a desk takes the lead before it and the card (with its closing line) after it
  type Item = { b: Block; i: number; kind: string; closing?: T[]; lead?: Extract<Block, { kind: "lead" }>; card?: CardBlock };
  const items: Item[] = [];
  def.blocks.forEach((b, i) => {
    const prev = items[items.length - 1];
    const deskPrev = prev && prev.b.kind === "form" && prev.b.form.layout === "desk";
    if (deskPrev && isCard(b) && !prev.card) {
      prev.card = b;
      return;
    }
    if (deskPrev && prev.card && !prev.closing && bareProse(b)) {
      prev.closing = b.body;
      return;
    }
    if (prev && prev.b.kind === "register" && prev.b.layout === "card" && !prev.closing && bareProse(b)) {
      prev.closing = b.body;
      return;
    }
    if (b.kind === "form" && b.form.layout === "desk" && prev && prev.b.kind === "lead") {
      items.pop();
      items.push({ b, i, kind: "form", lead: prev.b });
      return;
    }
    const kind = shownKind(b);
    if (kind) items.push({ b, i, kind });
  });
  // a6-2: the one crossing line goes before the first tiers or dark block — never the page's first block
  const xAt = items.findIndex((x, n) => n > 0 && (x.kind === "tiers" || x.kind === "dark"));
  return (
    <>
      {items.map(({ b, i, closing, lead, card }, n) => {
        // a register followed by its own photo plate ends on the plate, so the next block follows a "register" all the same
        const c: Ctx = { ...base, pace: paceOf(items[n - 1]?.kind, items[n].kind), last: n === items.length - 1, xrule: n === xAt };
        // UX-24: a headed block can be reached from the section index (an empty anchor before it, no text)
        const anchor = headingOf(b, locale) ? <span className="sec-anchor" id={`s-${i}`} aria-hidden="true" /> : null;
        const block = (() => { switch (b.kind) {
          case "lead": return <Lead key={i} b={b} c={c} />;
          case "prose": return <Prose key={i} b={b} c={c} />;
          case "band": return <Band key={i} b={b} c={c} />;
          case "duo": return <Duo key={i} b={b} c={c} />;
          case "mosaic": return <Mosaic key={i} b={b} c={c} />;
          case "register": return <Register key={i} b={b} c={c} closing={closing} />;
          case "terms": return <Terms key={i} b={b} c={c} />;
          case "steps": return <Steps key={i} b={b} c={c} />;
          case "statement": return <Statement key={i} b={b} c={c} />;
          case "tiers": return <Tiers key={i} b={b} c={c} />;
          case "chapter": return <Chapter key={i} b={b} c={c} />;
          case "faq": return <Faq key={i} b={b} c={c} />;
          case "notice": return <Notice key={i} b={b} c={c} />;
          case "dark": return <Dark key={i} b={b} c={c} />;
          case "legal": return <Legal key={i} b={b} c={c} />;
          case "index": return <Index key={i} b={b} c={c} />;
          case "actions": return <Actions key={i} b={b} c={c} />;
          case "listing": return <Listing key={i} b={b} c={c} />;
          case "form": return b.form.layout === "desk" ? <DeskForm key={i} b={b} c={c} lead={lead} card={card} closing={closing} /> : <FormBlock key={i} b={b} c={c} />;
          case "formset": return <FormSetBlock key={i} b={b} c={c} />;
        } })();
        return anchor ? <Fragment key={i}>{anchor}{block}</Fragment> : block;
      })}
    </>
  );
}

/**
 * The top of every inner page, identical on all of them — "the crossing":
 * the page's name and its twin in the other script (Arabic on the Dutch and English site, English on the Arabic one)
 * rest on the logo's gold A-bar, which runs from edge to edge; under the bar the source's title line and introduction;
 * then the page's photograph, which unrolls downward from under the bar. Value crossing borders, on every page.
 */
export function Masthead({
  def,
  locale,
  crumbs,
  label,
  title,
  blurb,
  twin,
}: {
  def?: PageDef;
  locale: Locale;
  crumbs: React.ReactNode;
  label: string;
  title: string;
  blurb: string;
  twin?: string;
}) {
  const m = def?.masthead ?? { variant: "type" as const };
  // UX-03 (owner, 4 Oct 2026): a task page keeps its photograph as its share image, not as a band under the name
  const compact = m.variant !== "type" && !!m.compact;
  const photo = m.variant !== "type" && !compact ? m.photo : undefined;
  const eyebrow = def?.eyebrow ? def.eyebrow[locale] : label;
  // UX-19: a standfirst that only repeats the page's name ("What are you looking for?" twice) is left out
  const plain = (s: string) => s.toLocaleLowerCase(locale).replace(/[\s.,:;!?؟،]+/g, " ").trim();
  const stand0 = def?.headline ? def.headline[locale] : blurb;
  const stand = stand0 && plain(stand0) !== plain(title) ? stand0 : undefined;
  const lede = def?.lede?.[locale];
  const twinLang = locale === "ar" ? "en" : "ar";
  /* Round 2 (owner, 1 Oct evening: "titel, foto eronder — dit is een standaard template; strakker op elkaar"):
     one composition instead of a stack. A legend line (crumbs ·· the twin name at the far end, two languages on one
     line), then the name and its standfirst side by side, then the living gold line, with the photograph hanging
     straight from it. Same texts, same order for a screen reader (crumbs, eyebrow, name, standfirst, lede). */
  return (
    <header className={`mh${photo ? " has-photo" : ""}${compact ? " is-compact" : ""}${stand || lede ? " has-sub" : ""}`}>
      <div className="wrap mh-top">
        <div className="mh-meta">
          {crumbs}
          {twin && twin !== title && (
            <p className="mh-twin" lang={twinLang} dir={twinLang === "ar" ? "rtl" : "ltr"} aria-hidden="true">{twin}</p>
          )}
        </div>
        <div className="mh-row">
          <div className="mh-name">
            {eyebrow && eyebrow !== title && <span className="label mh-label">{eyebrow}</span>}
            <h1 className="mh-title"><Rich text={title} words /></h1>
          </div>
        </div>
      </div>
      <span className="mh-bar" aria-hidden="true" />
      {photo && <Photo id={photo} locale={locale} className="mh-band" preload sizes="100vw" />}
      {/* owner, 5 Oct 2026: "titles always as high on the page as possible" — the standfirst no longer stands beside
          the name (a long one pushed the name down); it follows the line (and the photograph), where it opens the page */}
      {(stand || lede) && (
        <div className="wrap mh-after">
          <div className={`mh-sub${lede ? " has-lede" : ""}`}>
            {stand && <p className="mh-stand">{stand}</p>}
            {lede && <p className="mh-lede">{lede}</p>}
          </div>
        </div>
      )}
    </header>
  );
}
