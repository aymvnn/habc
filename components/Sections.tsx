import { Fragment } from "react";
import Link from "next/link";
import { Arrow } from "./Arrow";
import Image from "next/image";
import type { Dict, Locale } from "@/content/types";
import { EMAIL } from "@/content/contact-details";
import { homeMore, hrefOf, legal } from "@/lib/site";
import { Form } from "./Form";
import { Rich } from "./Rich";
import { TwinLine } from "./Twin";
import { NameFilm } from "./NameFilm";
import { Mash } from "./Licht";
import { FooterTulip } from "./FooterTulip";

/* eslint-disable @next/next/no-img-element -- the brand SVGs are served as-is; next/image adds nothing to vector art */

/**
 * the bottom of the homepage (source 1.6): the further sections of the site, in two rows.
 * Muntregister a2-6: a modest register — the label held in columns 1–3, the two rows of the source as two columns of
 * four (the DOM order, and so the reading order, is the source's), numbers 01–08 drawn by CSS (the text is unchanged).
 */
export function More({ locale, more }: { locale: Locale; more: Dict["more"] }) {
  return (
    <section className="block more-sx" aria-labelledby="mx-h">
      <div className="wrap mx-grid">
        <h2 id="mx-h" className="label rv">{more.heading}</h2>
        <div className="mx-cols">
          {homeMore.map((row, r) => (
            <ul className="mx-row" key={r}>
              {row.map((path, i) => (
                <li key={path}>
                  <Link href={hrefOf(locale, path)} prefetch={false}>{more.rows[r][i]}<Arrow /></Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- extras the owner kept on 30 Sep 2026 (not in the source; texts from commit 2336702) ---------- */

/* Muntregister g1: the three claims no longer carry a thumbnail each (no photos in lists); the photographs stay in
   public/photos/home/why-*.jpg for the lead's photo work. */
// stand-ins for the founders' portraits: hands at each craft, never a face
const FOUNDER_STANDINS = ["/photos/home/founder-1-craft.jpg", "/photos/home/founder-2-craft.jpg"];

type MoreLinkT = { href: string; label: string };
/** "Read more" to the full page — only on the home page, where each section is a summary */
function MoreLink({ more, className = "" }: { more?: MoreLinkT; className?: string }) {
  if (!more) return null;
  return <Link className={`more ${className}`} href={more.href} prefetch={false}>{more.label} <Arrow /></Link>;
}

/** a claim's text: one paragraph, or several separated by a blank line, the first then being the line that sums them up */
function ClaimBody({ text }: { text: string }) {
  const paras = text.split("\n\n");
  return (
    <>
      {paras.map((p, i) => (
        <p key={i} className={paras.length > 1 && i === 0 ? "claim-sum" : undefined}>{p}</p>
      ))}
    </>
  );
}

export function Why({ why, more, twin, twinLang }: { why: Dict["extra"]["why"]; more?: MoreLinkT; twin?: string; twinLang?: Locale }) {
  return (
    <section className="block" id="why" aria-labelledby="why-h">
      <div className="wrap split">
        <div className="sticky">
          <span className="label rv">{why.label}</span>
          <TwinLine twin={twin} lang={twinLang ?? "ar"}><h2 id="why-h" className="rv"><Rich text={why.heading} words /></h2></TwinLine>
          <p className="lede">{why.lede}</p>
          <MoreLink more={more} />
        </div>
        <div className="claims">
          {why.claims.map((c) => (
            <article className="claim" key={c.roman}>
              <span className="roman">{c.roman}</span>
              <div>
                <h3><Rich text={c.title} /></h3>
                <ClaimBody text={c.body} />
              </div>
            </article>
          ))}
          <p className="mechanism">{why.mechanism}</p>
        </div>
      </div>
    </section>
  );
}

/** Muntregister a2-6/a6-5: the Name as a full-width band on --paper-deep; the film runs to the start edge of the
 *  screen and carries no reveal fade of its own (it draws itself; components/NameFilm.tsx decides when). */
export function Name({ name, more, twin, twinLang }: { name: Dict["extra"]["name"]; more?: MoreLinkT; twin?: string; twinLang?: Locale }) {
  return (
    <section className="block" id="name" aria-labelledby="name-h">
      <div className="wrap split">
        <div className="film"><NameFilm /></div>
        <div className="story">
          <span className="label rv">{name.label}</span>
          <TwinLine twin={twin} lang={twinLang ?? "ar"}><h2 id="name-h" className="rv"><Rich text={name.heading} words /></h2></TwinLine>
          <p className="big">{name.body}</p>
          <p className="keystone">{name.keystone}</p>
          <MoreLink more={more} />
        </div>
      </div>
    </section>
  );
}

/** a value still to come is written between square brackets, e.g. "[Founder 1 — entrepreneur]" */
const isPending = (s: string) => /^\[[^\]]*\]$/.test(s.trim());

export function Behind({ behind, more, twin, twinLang }: { behind: Dict["extra"]["behind"]; more?: MoreLinkT; twin?: string; twinLang?: Locale }) {
  return (
    <section className="block" id="behind" aria-labelledby="behind-h">
      <div className="wrap">
        <div className="head">
          <span className="label rv">{behind.label}</span>
          <TwinLine twin={twin} lang={twinLang ?? "ar"}><h2 id="behind-h" className="rv"><Rich text={behind.heading} words /></h2></TwinLine>
          <p className="lede">{behind.lede}</p>
        </div>
        <div className="founders">
          {behind.founders.map((f, i) => (
            <article className="founder" key={f.role}>
              <div className="portrait portrait--standin" role="img" aria-label={f.portraitAlt}>
                <Image src={FOUNDER_STANDINS[i]} alt="" width={880} height={1100} sizes="220px" />
              </div>
              {/* round 2: name, role and credentials beside the picture; the voice runs underneath across the full width */}
              <div className="founder-id">
                {/* a name still to come ([…]) stays small and quiet (a2-7); a real name takes the founder's full size */}
                <h3 className={isPending(f.name) ? "is-pending" : undefined}>
                  {isPending(f.name) ? <span className="pending-mark">{f.name}</span> : f.name}
                </h3>
                <p className="role">{f.role}</p>
                {/* UI-12 (owner, 4 Oct 2026): the "|" between the two credentials is set as a small gold separator that
                    stays with the word before it (a no-break space), so it never starts a line; the words are the same */}
                {f.credentials && (
                  <p className="creds">
                    {f.credentials.split(" | ").map((part, k) => (
                      <Fragment key={k}>
                        {k > 0 && <>{"\u00A0"}<span className="creds-sep">|</span>{" "}</>}
                        {part}
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>
              {/* a voice may run over several paragraphs, separated by a blank line */}
              <blockquote>{f.voice.split("\n\n").map((p, k) => <p key={k}>{p}</p>)}</blockquote>
            </article>
          ))}
        </div>
        <MoreLink more={more} />
      </div>
    </section>
  );
}

export function Seal({ text }: { text: string }) {
  return (
    <div className="seal-wrap" aria-hidden="true">
      <svg className="ring" viewBox="0 0 132 132">
        <defs>
          <path id="ringPath" d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0" />
        </defs>
        <text><textPath href="#ringPath">{text}</textPath></text>
      </svg>
      <img className="tulip" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
    </div>
  );
}

/**
 * the close of the homepage: nomination, where to write, the slogan in two languages and the seal (static since the
 * Muntregister repair). Muntregister a2-6: the homepage's finale in the system of the inner pages' end (.pe, slice 5):
 * dark by default, light under html[data-slot="licht"], the foil edge on top and the seal on that boundary on a paper
 * disc (lying still; its one press per visit only under the extra motion). The order of the text is unchanged.
 */
export function Correspondence({ c, tagline, locale, contact }: { c: Dict["extra"]["correspondence"]; tagline: string; locale: Locale; contact: string }) {
  const ar = /[؀-ۿ]/.test(c.taglineEcho);
  return (
    <section className="block pe rv-rule has-seal" id="correspondence" aria-labelledby="corr-h">
      <span className="pe-edge" aria-hidden="true" />
      <span className="pe-flap" aria-hidden="true" />
      <Mash />
      <div className="wrap">
        <div className="close">
          <h2 id="corr-h" className="rv"><Rich text={c.heading} words /></h2>
          <div className="contact">
            <figure className="close-photo" aria-hidden="true">
              <Image src="/photos/pages/p-closing.jpg" alt="" width={1800} height={1200} sizes="(max-width: 1100px) 90vw, 30vw" />
            </figure>
            <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p className="where">{c.where}</p>
            {/* UX-21 (owner, 4 Oct 2026): "write to us" now leads somewhere — the contact form, in the menu's own words */}
            <Link className="act-a corr-go" href={`/${locale}/contact#contact-form`} prefetch={false}>{contact} <Arrow /></Link>
          </div>
        </div>
        <div className="signoff">
          <p className="tag">
            {tagline}
            <span className={`echo ${ar ? "ar" : ""}`} lang={ar ? "ar" : "en"} dir={ar ? "rtl" : "ltr"}>{c.taglineEcho}</span>
          </p>
          <div className="pe-seal">
            <Seal text={c.sealText} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * source 21: the short description, brand values, slogan, the footer links in the source's order, newsletter, copyright.
 * Kept extras beside it: the foundation behind DUKAAT (Anno 2018), the line on funds and guarantees, the further legal pages.
 */
export function Footer({ locale, d }: { locale: Locale; d: Dict }) {
  const { footer, site } = d;
  const n = footer.newsletter;
  /* One compact band (owner, 4 Oct 2026: "veel korter en kleiner, niet dubbel"): who we are, the signature and the
     newsletter side by side; then the links of the source (21) on one line; then one closing line. The bottom line no
     longer repeats "Stichting … · Anno 2018": the colophon sentence beside the copyright already says it in full. */
  return (
    <footer>
      <FooterTulip />
      <Mash />
      {/* Muntregister a5-4/a7-4: one still guilloche rosette from the hero, reused as it is (b3), very faint; decorative */}
      <img className="f-rosette" src="/ornament/guilloche-b.svg" alt="" aria-hidden="true" width={500} height={500} loading="lazy" decoding="async" />
      <div className="wrap f-top">
        <div className="colophon">
          {/* the wordmark in paper on the dark footer (its own file); the ink one on the light variant. Both lazy. */}
          {/* the emblem as in the browser tab (the tulip in its gold ring, the dark-background version) beside the name */}
          <div className="f-brand">
            <img className="f-emblem" src="/brand/dukaat-embleem-licht.svg" alt="" aria-hidden="true" width={32} height={32} loading="lazy" decoding="async" />
            <img className="wordmark wm-paper" src="/brand/dukaat-woordmerk-licht.svg" alt="DUKAAT" width={748} height={120} loading="lazy" decoding="async" />
            <img className="wordmark wm-ink" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} loading="lazy" decoding="async" />
          </div>
          <p className="f-about">{footer.about}</p>
        </div>
        <div className="f-sig">
          <p className="values">{footer.values}</p>
          <p className="slogan">{footer.slogan}</p>
        </div>
        <div className="f-news">
          <h2 className="f-news-t">{n.title}</h2>
          <p className="f-news-text">{n.text}</p>
          <Form
            id="newsletter"
            locale={locale}
            fields={[{ name: "email", label: n.field, type: "email", required: true }]}
            submit={n.button}
            success={n.success}
            consent={false}
            msgs={d.forms}
            inline
            mark={<img className="tulip" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />}
          />
          <p className="f-news-note">{n.note}</p>
        </div>
      </div>
      {/* only the legal pages: the menu's pages are already in the header (owner, 4 Oct 2026) */}
      <nav className="wrap f-links" aria-label={site.ui.mainNav}>
        {legal.children.map((c) => (
          <Link key={c.path} href={hrefOf(locale, c)} prefetch={false}>{site.pages[c.path].title}</Link>
        ))}
      </nav>
      {/* the only dark part of the page's end: the closing line, edge to edge (owner, 4 Oct 2026) */}
      <div className="f-base">
        <div className="wrap bottom">
          <span>{footer.copyright}</span>
          <span className="f-colophon">{d.extra.colophon}</span>
        </div>
      </div>
    </footer>
  );
}
