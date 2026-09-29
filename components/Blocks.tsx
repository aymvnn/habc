import Link from "next/link";
import type { Dict, Locale } from "@/content/types";
import type { Block, PageDef, T } from "@/content/pages/types";
import { pageDefs } from "@/content/pages";
import { hrefOf, type SiteGroup } from "@/lib/site";
import { Rich } from "./Rich";
import { Photo } from "./Photo";
import { NameFilm } from "./NameFilm";
import { Behind, Membership, Name, Routers, Why } from "./Sections";

/* eslint-disable @next/next/no-img-element -- brand SVGs are served as-is */

/**
 * The inner pages, block by block (schema: content/pages/types.ts, styles: app/blocks.css).
 * Every block is its own <section>; headings inside are h2, items h3. Photos come from content/photos.ts.
 */

type Ctx = { l: Locale; d: Dict; group: SiteGroup; path: string };

/** the few words the blocks need themselves */
const UI = {
  promise: { en: "In writing", nl: "Schriftelijk", ar: "كتابةً" },
  contents: { en: "Contents", nl: "Inhoud", ar: "المحتويات" },
  article: { en: "Article", nl: "Artikel", ar: "المادة" },
  next: { en: "Next", nl: "Verder", ar: "التالي" },
} satisfies Record<string, T>;

const pad = (i: number) => String(i + 1).padStart(2, "0");
const lag = (i: number) => (i % 4 ? ` lag${i % 4}` : "");

function Head({ label, heading, intro, l, className = "" }: { label?: T; heading?: T; intro?: T; l: Locale; className?: string }) {
  if (!label && !heading && !intro) return null;
  return (
    <div className={`b-head ${className}`}>
      {label && <span className="label rv">{label[l]}</span>}
      {heading && <h2 className="rv"><Rich text={heading[l]} /></h2>}
      {intro && <p className="lede rv lag1"><Rich text={intro[l]} /></p>}
    </div>
  );
}

function Paras({ body, l, className = "" }: { body: T[]; l: Locale; className?: string }) {
  return (
    <>
      {body.map((p, i) => (
        <p className={`${className} rv${i ? " lag1" : ""}`} key={i}><Rich text={p[l]} /></p>
      ))}
    </>
  );
}

/* ---------- the blocks ---------- */

function Lead({ b, c }: { b: Extract<Block, { kind: "lead" }>; c: Ctx }) {
  return (
    <section className={`b b-lead${b.photo ? " has-photo" : ""}`}>
      <div className="wrap b-grid">
        <p className="b-lead-t rv"><Rich text={b.text[c.l]} /></p>
        {b.photo && <Photo id={b.photo} locale={c.l} className="b-lead-ph rv lag2" sizes="(max-width: 900px) 70vw, 24vw" />}
      </div>
    </section>
  );
}

function Prose({ b, c }: { b: Extract<Block, { kind: "prose" }>; c: Ctx }) {
  const size = b.size ?? "half";
  const side = b.side ?? "end";
  const cls = b.photo ? `with-ph ph-${size} side-${side}` : b.heading ? "split" : "single";
  const sizes = size === "half" ? "(max-width: 900px) 100vw, 48vw" : size === "tall" ? "(max-width: 900px) 90vw, 34vw" : "(max-width: 900px) 70vw, 24vw";
  return (
    <section className={`b b-prose ${cls}`}>
      <div className="wrap b-grid">
        {(b.label || b.heading) && (
          <div className="b-prose-head">
            {b.label && <span className="label rv">{b.label[c.l]}</span>}
            {b.heading && <h2 className="rv"><Rich text={b.heading[c.l]} /></h2>}
          </div>
        )}
        <div className="b-prose-body"><Paras body={b.body} l={c.l} /></div>
        {b.photo && <Photo id={b.photo} locale={c.l} className="b-prose-ph rv" sizes={sizes} />}
      </div>
    </section>
  );
}

function Band({ b, c }: { b: Extract<Block, { kind: "band" }>; c: Ctx }) {
  return (
    <section className="b b-band">
      <Photo id={b.photo} locale={c.l} className="b-band-ph" sizes="100vw" />
      {b.caption && (
        <div className="wrap">
          <p className="b-band-cap rv"><Rich text={b.caption[c.l]} /></p>
        </div>
      )}
    </section>
  );
}

function Duo({ b, c }: { b: Extract<Block, { kind: "duo" }>; c: Ctx }) {
  return (
    <section className="b b-duo">
      <div className="wrap b-grid">
        <Photo id={b.photos[0]} locale={c.l} className="duo-a rv" sizes="(max-width: 900px) 100vw, 56vw" />
        <Photo id={b.photos[1]} locale={c.l} className="duo-b rv lag2" sizes="(max-width: 900px) 64vw, 28vw" />
        {(b.label || b.heading || b.body) && (
          <div className="duo-t">
            <Head label={b.label} heading={b.heading} l={c.l} />
            {b.body && <Paras body={b.body} l={c.l} />}
          </div>
        )}
      </div>
    </section>
  );
}

function Mosaic({ b, c }: { b: Extract<Block, { kind: "mosaic" }>; c: Ctx }) {
  return (
    <section className="b b-mosaic">
      <div className="wrap">
        <div className="mosaic">
          {b.photos.map((p, i) => (
            <Photo key={p} id={p} locale={c.l} className={`mosaic-ph rv${lag(i)}`} sizes="(max-width: 900px) 46vw, 22vw" />
          ))}
        </div>
        {b.caption && <p className="b-note mosaic-cap rv"><Rich text={b.caption[c.l]} /></p>}
      </div>
    </section>
  );
}

function Register({ b, c }: { b: Extract<Block, { kind: "register" }>; c: Ctx }) {
  const quotes = b.variant === "quotes";
  const list = (
    <ol className={`reg cols-${b.cols ?? 1}${quotes ? " quotes" : ""}${b.numbered ? " numbered" : ""}`}>
      {b.items.map((it, i) => (
        <li className={`reg-i rv${lag(i % (b.cols ?? 1) === 0 ? 0 : 1)}`} key={i}>
          {b.numbered && <span className="reg-n" aria-hidden="true">{pad(i)}</span>}
          <div>
            <h3><Rich text={it.title[c.l]} /></h3>
            {it.body && <p><Rich text={it.body[c.l]} /></p>}
          </div>
        </li>
      ))}
    </ol>
  );
  if (b.photo) {
    return (
      <section className="b b-register has-photo">
        <div className="wrap b-grid">
          <div className="reg-ph"><Photo id={b.photo} locale={c.l} className="rv" sizes="(max-width: 900px) 90vw, 34vw" /></div>
          <div className="reg-main">
            <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} />
            {list}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className={`b b-register${quotes ? " is-quotes" : ""}`}>
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} className="head" />
        {list}
      </div>
    </section>
  );
}

function Terms({ b, c }: { b: Extract<Block, { kind: "terms" }>; c: Ctx }) {
  return (
    <section className="b b-terms">
      <div className="wrap b-grid">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} className="terms-head" />
        <ul className="terms">
          {b.items.map((x, i) => (
            <li className={`rv${lag(i % 3)}`} key={i}><Rich text={x[c.l]} /></li>
          ))}
        </ul>
        {b.note && <p className="b-note terms-note rv"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Steps({ b, c }: { b: Extract<Block, { kind: "steps" }>; c: Ctx }) {
  return (
    <section className="b b-steps">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} className="head" />
        <ol className="bsteps" style={{ ["--n" as string]: b.items.length }}>
          {b.items.map((s, i) => (
            <li className={`bstep rv${lag(i)}`} key={i}>
              <span className="bstep-n" aria-hidden="true">{i + 1}</span>
              <h3><Rich text={s.title[c.l]} /></h3>
              {s.body && <p><Rich text={s.body[c.l]} /></p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sequence({ b, c }: { b: Extract<Block, { kind: "sequence" }>; c: Ctx }) {
  return (
    <section className="b b-sequence">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} l={c.l} className="head" />
        <ol className="seq">
          {b.items.map((x, i) => (
            <li className={`rv${lag(i)}`} key={i}><Rich text={x[c.l]} /></li>
          ))}
        </ol>
        {b.body && <p className="seq-body rv"><Rich text={b.body[c.l]} /></p>}
      </div>
    </section>
  );
}

function Statement({ b, c }: { b: Extract<Block, { kind: "statement" }>; c: Ctx }) {
  return (
    <section className="b b-statement">
      <div className="wrap">
        <div className="stmt-mark" aria-hidden="true">
          <svg viewBox="0 0 140 44" fill="none"><path d="M2 42 C 40 42, 60 2, 138 2" /><path d="M2 2 C 40 2, 60 42, 138 42" /></svg>
        </div>
        <p className={`stmt rv${b.text.en.length > 90 ? " is-long" : ""}`}><Rich text={b.text[c.l]} /></p>
        {b.note && <p className="stmt-note rv lag1"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Quote({ b, c, flip }: { b: Extract<Block, { kind: "quote" }>; c: Ctx; flip: boolean }) {
  return (
    <section className={`b b-quote${b.photo ? " has-photo" : ""}${flip ? " flip" : ""}`}>
      <div className="wrap b-grid">
        {b.photo && <Photo id={b.photo} locale={c.l} className="q-ph rv" sizes="(max-width: 900px) 80vw, 30vw" />}
        <figure className="q">
          <blockquote>
            {b.text.map((p, i) => (
              <p className={`rv${i ? " lag1" : ""}`} key={i}><Rich text={p[c.l]} /></p>
            ))}
          </blockquote>
          <figcaption className="rv">
            <span className="q-by"><Rich text={b.by[c.l]} /></span>
            {b.role && <span className="q-role">{b.role[c.l]}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contrast({ b, c }: { b: Extract<Block, { kind: "contrast" }>; c: Ctx }) {
  return (
    <section className="b b-contrast">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} className="head" />
        <div className="ctr">
          {[b.a, b.b].map((col, k) => (
            <div className={`ctr-col ${k ? "is-b" : "is-a"} rv${k ? " lag1" : ""}`} key={k}>
              <h3><Rich text={col.title[c.l]} /></h3>
              <ul>
                {col.items.map((x, i) => (
                  <li key={i}><Rich text={x[c.l]} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {b.note && <p className="b-note rv"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Facts({ b, c }: { b: Extract<Block, { kind: "facts" }>; c: Ctx }) {
  const media = b.media === "film" ? (
    <div className="facts-media is-film rv"><div className="film"><NameFilm /></div></div>
  ) : b.photo ? (
    <div className="facts-media rv"><Photo id={b.photo} locale={c.l} sizes="(max-width: 900px) 90vw, 36vw" /></div>
  ) : null;
  return (
    <section className={`b b-facts${media ? " has-media" : ""}`}>
      <div className="wrap b-grid">
        {media}
        <div className="facts-body">
          <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} />
          <dl className="facts">
            {b.items.map((it, i) => (
              <div className={`fact rv${lag(i % 2)}`} key={i}>
                <dt>{it.term[c.l]}</dt>
                <dd><Rich text={it.value[c.l]} /></dd>
              </div>
            ))}
          </dl>
          {b.note && <p className="b-note rv"><Rich text={b.note[c.l]} /></p>}
        </div>
      </div>
    </section>
  );
}

function Tiers({ b, c }: { b: Extract<Block, { kind: "tiers" }>; c: Ctx }) {
  return (
    <section className="b b-tiers">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} className="head" />
        <div className="tiers" style={{ ["--n" as string]: b.tiers.length }}>
          {b.tiers.map((tr, i) => (
            <article className={`tier rv${lag(i)}`} key={tr.name}>
              <span className="tier-n" aria-hidden="true">{["I", "II", "III", "IV"][i]}</span>
              <h3 className="tier-name">{tr.name}</h3>
              <p className="tier-tag"><Rich text={tr.tagline[c.l]} /></p>
              {tr.items.length > 0 && (
                <ul className="tier-items">
                  {tr.items.map((x, k) => (
                    <li key={k}><Rich text={x[c.l]} /></li>
                  ))}
                </ul>
              )}
              {tr.promise && tr.promise.length > 0 && (
                <div className="tier-promise">
                  <span className="tier-promise-l">{UI.promise[c.l]}</span>
                  <ul>
                    {tr.promise.map((x, k) => (
                      <li key={k}><Rich text={x[c.l]} /></li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
        {b.note && <p className="b-note rv"><Rich text={b.note[c.l]} /></p>}
      </div>
    </section>
  );
}

function Specimen({ b, c }: { b: Extract<Block, { kind: "specimen" }>; c: Ctx }) {
  return (
    <section className="b b-specimen">
      <div className="wrap b-grid">
        <div className="spec-head">
          <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} />
          {b.note && <p className="b-note rv lag2"><Rich text={b.note[c.l]} /></p>}
        </div>
        <div className="spec-card rv lag1">
          <div className="spec-top">
            <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} aria-hidden="true" />
            <p className="spec-title"><Rich text={b.title[c.l]} /></p>
          </div>
          <dl className="spec-fields">
            {b.fields.map((f, i) => (
              <div className="spec-f" key={i}>
                <dt>{f.label[c.l]}</dt>
                <dd>{f.hint ? <Rich text={f.hint[c.l]} /> : <span className="spec-line" aria-hidden="true" />}</dd>
              </div>
            ))}
          </dl>
          {b.examples && b.examples.length > 0 && (
            <div className="spec-ex">
              {b.examplesLabel && <span className="spec-ex-l">{b.examplesLabel[c.l]}</span>}
              <ul>
                {b.examples.map((e, i) => (
                  <li key={i}><Rich text={e[c.l]} /></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Chapter({ b, c }: { b: Extract<Block, { kind: "chapter" }>; c: Ctx }) {
  return (
    <section className="b b-chapter">
      <div className="wrap b-grid">
        <div className="ch-head">
          <Head label={b.label} heading={b.heading} intro={b.intro} l={c.l} />
        </div>
        <div className="ch-items">
          {b.items.map((it, i) => (
            <article className={`ch-i rv${it.photo ? " has-photo" : ""}`} key={i}>
              <span className="ch-n" aria-hidden="true">{pad(i)}</span>
              <div>
                <h3><Rich text={it.title[c.l]} /></h3>
                <p><Rich text={it.body[c.l]} /></p>
              </div>
              {it.photo && <Photo id={it.photo} locale={c.l} className="ch-ph" sizes="(max-width: 640px) 100vw, 200px" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ b, c }: { b: Extract<Block, { kind: "faq" }>; c: Ctx }) {
  return (
    <section className="b b-faq">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} l={c.l} className="head" />
        {b.groups.map((g, gi) => (
          <div className="faq-g b-grid" key={gi}>
            <div className="faq-gt">{g.title && <h2 className="label rv">{g.title[c.l]}</h2>}</div>
            <div className="faq faq-list">
              {g.items.map((f, i) => (
                <details key={i} className="rv">
                  <summary>{f.q[c.l]}</summary>
                  <p><Rich text={f.a[c.l]} /></p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Notice({ b, c }: { b: Extract<Block, { kind: "notice" }>; c: Ctx }) {
  return (
    <section className="b b-notice">
      <div className="wrap">
        <aside className="notice-box rv">
          {b.label && <span className="label">{b.label[c.l]}</span>}
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
    <section className={`b b-dark${b.photo ? " has-photo" : ""}`}>
      {b.photo && <Photo id={b.photo} locale={c.l} className="dark-ph" sizes="100vw" decorative />}
      <img className="watermark" src="/logo/dukaat-beeldmerk.svg" alt="" aria-hidden="true" width={859} height={998} />
      <div className="wrap b-grid">
        <div className="dark-head">
          {b.label && <span className="label rv">{b.label[c.l]}</span>}
          <h2 className="rv"><Rich text={b.heading[c.l]} /></h2>
        </div>
        <div className="dark-body"><Paras body={b.body} l={c.l} /></div>
        {b.items && (
          <ul className="dark-items">
            {b.items.map((x, i) => (
              <li className={`rv${lag(i)}`} key={i}><Rich text={x[c.l]} /></li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Legal({ b, c }: { b: Extract<Block, { kind: "legal" }>; c: Ctx }) {
  return (
    <section className="b b-legal">
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

/** the photo that stands for a page elsewhere (the index of its group): its masthead photograph */
function photoOfPage(p: string): { id?: string; src?: string } {
  const m = pageDefs[p]?.masthead;
  return m && m.variant !== "type" ? { id: m.photo } : {};
}

function Index({ b, c }: { b: Extract<Block, { kind: "index" }>; c: Ctx }) {
  const kids = c.group.children.map((k) => ({
    href: hrefOf(c.l, k),
    title: c.d.site.pages[k.path].title,
    blurb: c.d.site.pages[k.path].blurb,
    key: !!k.href,
    ph: k.href ? { src: "/routes/nominated.jpg" } : photoOfPage(k.path),
  }));
  const [first, ...rest] = kids;
  return (
    <section className="b b-index">
      <div className="wrap">
        <Head label={b.label} heading={b.heading} l={c.l} className="head" />
        <div className="idx b-grid">
          <Link href={first.href} className="idx-first rv">
            <Photo {...first.ph} locale={c.l} className="idx-ph" sizes="(max-width: 900px) 100vw, 56vw" decorative />
            <span className="idx-n">01</span>
            <span className="idx-t">{first.title}<span className="arrow" aria-hidden="true">→</span></span>
            <span className="idx-b">{first.blurb}</span>
          </Link>
          <ul className="idx-rest">
            {rest.map((k, i) => (
              <li className={`rv${lag(i)}`} key={k.href}>
                <Link href={k.href} className={k.key ? "is-key" : undefined}>
                  <Photo {...k.ph} locale={c.l} className="idx-thumb" sizes="112px" decorative />
                  <span className="idx-n">{pad(i + 1)}</span>
                  <span className="idx-t">{k.title}<span className="arrow" aria-hidden="true">→</span></span>
                  <span className="idx-b">{k.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Next({ b, c }: { b: Extract<Block, { kind: "next" }>; c: Ctx }) {
  return (
    <section className="b b-next">
      <div className="wrap b-grid">
        <div className="next-head">
          <span className="label rv">{UI.next[c.l]}</span>
          <h2 className="rv"><Rich text={b.heading[c.l]} /></h2>
          {b.body && <p className="rv lag1"><Rich text={b.body[c.l]} /></p>}
        </div>
        <ul className="next-links">
          {b.links.map((k, i) => (
            <li className={`rv${lag(i)}`} key={k.href}>
              <Link href={`/${c.l}/${k.href}`}>
                <span><Rich text={k.label[c.l]} /></span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HomeSection({ b, c }: { b: Extract<Block, { kind: "home" }>; c: Ctx }) {
  switch (b.section) {
    case "why":
      return <Why why={c.d.why} />;
    case "name":
      return <Name name={c.d.name} />;
    case "behind":
      return <Behind behind={c.d.behind} />;
    case "membership":
      return <Membership membership={c.d.membership} />;
  }
}

export function Blocks({ def, locale, d, group, path }: { def: PageDef; locale: Locale; d: Dict; group: SiteGroup; path: string }) {
  const c: Ctx = { l: locale, d, group, path };
  let quotes = 0;
  return (
    <>
      {def.blocks.map((b, i) => {
        switch (b.kind) {
          case "lead": return <Lead key={i} b={b} c={c} />;
          case "prose": return <Prose key={i} b={b} c={c} />;
          case "band": return <Band key={i} b={b} c={c} />;
          case "duo": return <Duo key={i} b={b} c={c} />;
          case "mosaic": return <Mosaic key={i} b={b} c={c} />;
          case "register": return <Register key={i} b={b} c={c} />;
          case "terms": return <Terms key={i} b={b} c={c} />;
          case "steps": return <Steps key={i} b={b} c={c} />;
          case "sequence": return <Sequence key={i} b={b} c={c} />;
          case "statement": return <Statement key={i} b={b} c={c} />;
          case "quote": return <Quote key={i} b={b} c={c} flip={quotes++ % 2 === 1} />;
          case "contrast": return <Contrast key={i} b={b} c={c} />;
          case "facts": return <Facts key={i} b={b} c={c} />;
          case "tiers": return <Tiers key={i} b={b} c={c} />;
          case "specimen": return <Specimen key={i} b={b} c={c} />;
          case "chapter": return <Chapter key={i} b={b} c={c} />;
          case "faq": return <Faq key={i} b={b} c={c} />;
          case "notice": return <Notice key={i} b={b} c={c} />;
          case "dark": return <Dark key={i} b={b} c={c} />;
          case "legal": return <Legal key={i} b={b} c={c} />;
          case "index": return <Index key={i} b={b} c={c} />;
          case "routes": return <Routers key={i} locale={locale} routes={d.routes} />;
          case "home": return <HomeSection key={i} b={b} c={c} />;
          case "next": return <Next key={i} b={b} c={c} />;
        }
      })}
    </>
  );
}

/** the top of an inner page: breadcrumb, title, one-line lede and the page's photograph */
export function Masthead({
  def,
  locale,
  crumbs,
  label,
  title,
  blurb,
}: {
  def?: PageDef;
  locale: Locale;
  crumbs: React.ReactNode;
  label: string;
  title: string;
  blurb: string;
}) {
  const m = def?.masthead ?? { variant: "type" as const };
  const photo = m.variant !== "type" ? m.photo : undefined;
  return (
    <header className={`mh mh-${m.variant}`}>
      <div className="wrap">
        {crumbs}
        <div className="mh-grid">
          <span className="label mh-label">{label}</span>
          <h1 className="mh-title">{title}</h1>
          <p className="lede mh-lede">{blurb}</p>
          {photo && m.variant !== "band" && (
            <Photo
              id={photo}
              locale={locale}
              className="mh-ph"
              priority
              sizes={m.variant === "portrait" ? "(max-width: 900px) 100vw, 30vw" : "(max-width: 900px) 80vw, 26vw"}
            />
          )}
        </div>
      </div>
      {photo && m.variant === "band" && <Photo id={photo} locale={locale} className="mh-bandph" priority sizes="100vw" />}
    </header>
  );
}
