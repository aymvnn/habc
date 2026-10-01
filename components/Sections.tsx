import Link from "next/link";
import Image from "next/image";
import type { Dict, Locale } from "@/content/types";
import { footerLinks, homeMore, hrefOf, legal } from "@/lib/site";
import { Form } from "./Form";
import { Rich } from "./Rich";
import { NameFilm } from "./NameFilm";

/* eslint-disable @next/next/no-img-element -- the brand SVGs are served as-is; next/image adds nothing to vector art */

/** the bottom of the homepage (source 1.6): the further sections of the site, in two rows */
export function More({ locale, more }: { locale: Locale; more: Dict["more"] }) {
  return (
    <section className="block more-sx" aria-labelledby="mx-h">
      <div className="wrap">
        <h2 id="mx-h" className="label rv">{more.heading}</h2>
        {homeMore.map((row, r) => (
          <ul className="mx-row rv" key={r}>
            {row.map((path, i) => (
              <li key={path}>
                <Link href={hrefOf(locale, path)}>{more.rows[r][i]}<span className="arrow" aria-hidden="true">→</span></Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

/* ---------- extras the owner kept on 30 Sep 2026 (not in the source; texts from commit 2336702) ---------- */

/* photographs (brand/fotostijl/homepage-fotos.md); decorative, the copy beside them carries the meaning */
const WHY_PHOTOS = ["/photos/home/why-1-traders.jpg", "/photos/home/why-2-rotterdam.jpg", "/photos/home/why-3-both-sides.jpg"];
// stand-ins for the founders' portraits: hands at each craft, never a face
const FOUNDER_STANDINS = ["/photos/home/founder-1-craft.jpg", "/photos/home/founder-2-craft.jpg"];

type MoreLinkT = { href: string; label: string };
/** "Read more" to the full page — only on the home page, where each section is a summary */
function MoreLink({ more, className = "" }: { more?: MoreLinkT; className?: string }) {
  if (!more) return null;
  return <Link className={`more ${className}`} href={more.href}>{more.label} <span className="arrow" aria-hidden="true">→</span></Link>;
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

export function Why({ why, more }: { why: Dict["extra"]["why"]; more?: MoreLinkT }) {
  return (
    <section className="block" id="why" aria-labelledby="why-h">
      <div className="wrap split">
        <div className="sticky">
          <span className="label rv">{why.label}</span>
          <h2 id="why-h" className="rv"><Rich text={why.heading} /></h2>
          <p className="lede rv lag1">{why.lede}</p>
          <MoreLink more={more} className="rv lag2" />
        </div>
        <div className="claims">
          {why.claims.map((c, i) => (
            <article className="claim rv" key={c.roman}>
              <span className="roman">{c.roman}</span>
              <div>
                <h3><Rich text={c.title} /></h3>
                <ClaimBody text={c.body} />
              </div>
              {WHY_PHOTOS[i] && (
                <figure className="claim-photo" aria-hidden="true">
                  <Image src={WHY_PHOTOS[i]} alt="" width={1200} height={1500} sizes="(max-width: 640px) 100vw, 200px" />
                </figure>
              )}
            </article>
          ))}
          <p className="mechanism rv">{why.mechanism}</p>
        </div>
      </div>
    </section>
  );
}

export function Name({ name, more }: { name: Dict["extra"]["name"]; more?: MoreLinkT }) {
  return (
    <section className="block" id="name" aria-labelledby="name-h">
      <div className="wrap split">
        <div className="film rv"><NameFilm /></div>
        <div className="story">
          <span className="label rv">{name.label}</span>
          <h2 id="name-h" className="rv"><Rich text={name.heading} /></h2>
          <p className="big rv lag1">{name.body}</p>
          <p className="keystone rv lag2">{name.keystone}</p>
          <MoreLink more={more} className="rv lag2" />
        </div>
      </div>
    </section>
  );
}

export function Behind({ behind, more }: { behind: Dict["extra"]["behind"]; more?: MoreLinkT }) {
  return (
    <section className="block" id="behind" aria-labelledby="behind-h">
      <div className="wrap">
        <div className="head">
          <span className="label rv">{behind.label}</span>
          <h2 id="behind-h" className="rv"><Rich text={behind.heading} /></h2>
          <p className="lede rv lag1">{behind.lede}</p>
        </div>
        <div className="founders">
          {behind.founders.map((f, i) => (
            <article className={`founder rv${i ? " lag1" : ""}`} key={f.role}>
              <div className="portrait portrait--standin" role="img" aria-label={f.portraitAlt}>
                <Image src={FOUNDER_STANDINS[i]} alt="" width={880} height={1100} sizes="220px" />
              </div>
              <div>
                <h3><span className="pending-mark">{f.name}</span></h3>
                <p className="role">{f.role}</p>
                {f.credentials && <p className="creds">{f.credentials}</p>}
                {/* a voice may run over several paragraphs, separated by a blank line */}
                <blockquote>{f.voice.split("\n\n").map((p, k) => <p key={k}>{p}</p>)}</blockquote>
              </div>
            </article>
          ))}
        </div>
        <MoreLink more={more} className="rv" />
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

/** the close of the homepage: nomination, where to write, the slogan in two languages and the rotating seal */
export function Correspondence({ c, tagline }: { c: Dict["extra"]["correspondence"]; tagline: string }) {
  const ar = /[؀-ۿ]/.test(c.taglineEcho);
  return (
    <section className="block" id="correspondence" aria-labelledby="corr-h">
      <div className="wrap">
        <div className="close">
          <h2 id="corr-h" className="rv"><Rich text={c.heading} /></h2>
          <div className="contact rv lag1">
            <figure className="close-photo" aria-hidden="true">
              <Image src="/photos/home/closing-letter.jpg" alt="" width={1200} height={800} sizes="(max-width: 1100px) 90vw, 30vw" />
            </figure>
            <span className="mail pending" title={c.mailPendingTitle}>{c.mailPending}</span>
            <p className="where">{c.where}</p>
          </div>
        </div>
        <div className="signoff rv">
          <p className="tag">
            {tagline}
            <span className={`echo ${ar ? "ar" : ""}`} lang={ar ? "ar" : "en"} dir={ar ? "rtl" : "ltr"}>{c.taglineEcho}</span>
          </p>
          <Seal text={c.sealText} />
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
  return (
    <footer>
      <div className="wrap grid">
        <div className="colophon">
          <img className="wordmark" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} />
          <p>{footer.about}</p>
          <p className="values">{footer.values}</p>
          <p className="slogan">{footer.slogan}</p>
          <p className="f-colophon">{d.extra.colophon}</p>
          <p className="legal">{d.extra.legalLine}</p>
        </div>
        <div className="f-news">
          <h2 className="f-news-t">{n.title}</h2>
          <p>{n.text}</p>
          <Form
            id="newsletter"
            locale={locale}
            fields={[{ name: "email", label: n.field, type: "email", required: true }]}
            submit={n.button}
            success={n.success}
            consent={false}
            msgs={d.forms}
          />
          <p className="f-news-note">{n.note}</p>
        </div>
      </div>
      <nav className="wrap f-links" aria-label={site.ui.mainNav}>
        {footerLinks.map((p) => {
          const key = p as keyof typeof site.groups;
          return <Link key={p} href={hrefOf(locale, p)}>{site.groups[key].label}</Link>;
        })}
        {legal.children.map((c) => (
          <Link key={c.path} href={hrefOf(locale, c)}>{site.pages[c.path].title}</Link>
        ))}
      </nav>
      <div className="wrap bottom">
        <span>{footer.copyright}</span>
        <span>{d.extra.foundation} · {d.extra.anno}</span>
      </div>
    </footer>
  );
}
