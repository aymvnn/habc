import Link from "next/link";
import Image from "next/image";
import type { Dict, Locale } from "@/content/types";
import { Rich } from "./Rich";
import { NameFilm } from "./NameFilm";
import { groups, hrefOf, legal } from "@/lib/site";

/* eslint-disable @next/next/no-img-element -- the brand SVGs are served as-is; next/image adds nothing to vector art */

type More = { href: string; label: string };

/* photographs (brand/fotostijl/homepage-fotos.md); decorative, the copy beside them carries the meaning */
const WHY_PHOTOS = ["/photos/home/why-1-traders.jpg", "/photos/home/why-2-rotterdam.jpg", "/photos/home/why-3-both-sides.jpg"];
// AI stand-ins for the founders' portraits: hands at each craft, never a face; the "portrait to follow" label stays
const FOUNDER_STANDINS = ["/photos/home/founder-1-craft.jpg", "/photos/home/founder-2-craft.jpg"];
/** "Read more" to the full page — only on the home page, where each section is a summary */
function MoreLink({ more, className = "" }: { more?: More; className?: string }) {
  if (!more) return null;
  return <Link className={`more ${className}`} href={more.href}>{more.label} <span className="arrow" aria-hidden="true">→</span></Link>;
}

export function Kruising() {
  return (
    <div className="kruising" aria-hidden="true">
      <svg viewBox="0 0 140 44" fill="none">
        <path d="M2 42 C 40 42, 60 2, 138 2" />
        <path d="M2 2 C 40 2, 60 42, 138 42" />
      </svg>
    </div>
  );
}

export function Routers({ locale, routes }: { locale: Locale; routes: Dict["routes"] }) {
  const lags = ["", "", " lag1", " lag1", " lag2", " lag2", " lag3", " lag3"];
  return (
    <section className="block" id="routes" aria-labelledby="routes-h">
      <div className="wrap">
        <div className="head">
          <span className="label rv">{routes.label}</span>
          <h2 id="routes-h" className="rv"><Rich text={routes.heading} /></h2>
          <p className="lede rv lag1">{routes.lede}</p>
        </div>
        <div className="register">
          {routes.items.map((r, i) => {
            const nominated = r.intent === "nominated";
            return (
              <Link
                key={r.intent}
                className={`router${nominated ? " nominated" : ""} rv${lags[i]}`}
                href={`/${locale}/contact?intent=${r.intent}#intake`}
                aria-label={routes.ariaPattern.replace("{label}", r.label)}
              >
                <span className="router-idx">
                  {nominated ? <img className="seal" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} /> : String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="router-label">{r.label}</span>
                  <p className="router-hint">{r.hint}</p>
                </span>
                <span className="router-arrow" aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
        <p className="routes-foot rv">
          {routes.foot} <Link href={`/${locale}/contact`}>{routes.footLink}</Link>
        </p>
      </div>
    </section>
  );
}

export function Why({ why, more }: { why: Dict["why"]; more?: More }) {
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
                <p>{c.body}</p>
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

export function Name({ name, more }: { name: Dict["name"]; more?: More }) {
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

export function Membership({ membership, more }: { membership: Dict["membership"]; more?: More }) {
  return (
    <section className="block" id="membership" aria-labelledby="member-h">
      {/* the page's one large photograph: the prepared room, fading into the bordeaux under the heading */}
      <figure className="m-room" aria-hidden="true">
        <Image src="/photos/home/membership-room.jpg" alt="" width={2560} height={1097} sizes="100vw" />
      </figure>
      <img className="watermark" src="/logo/dukaat-beeldmerk.svg" alt="" aria-hidden="true" width={859} height={998} />
      <div className="wrap grid">
        <span className="label rv">{membership.label}</span>
        <h2 id="member-h" className="rv"><Rich text={membership.heading} /></h2>
        <p className="text rv lag1">{membership.text}</p>
        <div className="charge rv lag2"><p>{membership.charge}</p></div>
        <p className="note rv lag2">{membership.note}</p>
        <MoreLink more={more} className="rv lag2" />
      </div>
    </section>
  );
}

export function Behind({ behind, more }: { behind: Dict["behind"]; more?: More }) {
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
              <div className={`portrait${FOUNDER_STANDINS[i] ? " portrait--standin" : ""}`} role="img" aria-label={f.portraitAlt}>
                {/* TODO: replace with the real portrait once the photographer has been (brief in homepage-fotos.md) */}
                {FOUNDER_STANDINS[i] ? (
                  <Image src={FOUNDER_STANDINS[i]} alt="" width={880} height={1100} sizes="220px" />
                ) : (
                  <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
                )}
                <span>{behind.portraitLabel}</span>
              </div>
              <div>
                <h3><span className="pending-mark">{f.name}</span></h3>
                <p className="role">{f.role}</p>
                <blockquote>{f.voice}</blockquote>
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

export function Correspondence({ c }: { c: Dict["correspondence"] }) {
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
            {c.tagline}
            <span className={`echo ${/[؀-ۿ]/.test(c.taglineEcho) ? "ar" : ""}`} lang={/[؀-ۿ]/.test(c.taglineEcho) ? "ar" : "en"} dir={/[؀-ۿ]/.test(c.taglineEcho) ? "rtl" : "ltr"}>
              {c.taglineEcho}
            </span>
          </p>
          <Seal text={c.sealText} />
        </div>
      </div>
    </section>
  );
}

export function Footer({ locale, nav, footer, site }: { locale: Locale; nav: Dict["nav"]; footer: Dict["footer"]; site: Dict["site"] }) {
  const langs: { code: Locale; name: string }[] = [
    { code: "en", name: "English" },
    { code: "nl", name: "Nederlands" },
    { code: "ar", name: "العربية" },
  ];
  return (
    <footer>
      <div className="wrap grid">
        <div className="colophon">
          <img className="wordmark" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} />
          <p>{footer.colophon}</p>
          <p className="legal">{footer.legal}</p>
          <p className="f-langs">
            {langs.map((l) => (
              <Link key={l.code} href={`/${l.code}`} hrefLang={l.code} lang={l.code} aria-current={l.code === locale ? "page" : undefined}>{l.name}</Link>
            ))}
          </p>
        </div>
        {/* the whole site map: every page is linked from every page */}
        <nav className="f-map" aria-label={footer.pages}>
          {groups.map((g) => (
            <div className="col" key={g.key}>
              <h4><Link href={hrefOf(locale, g)}>{site.groups[g.key].label}</Link></h4>
              {g.children.map((c) => (
                <Link key={c.path} href={hrefOf(locale, c)}>{site.pages[c.path].title}</Link>
              ))}
            </div>
          ))}
          <div className="col">
            <h4><Link href={`/${locale}/contact`}>{nav.contact}</Link></h4>
            <Link href={`/${locale}/contact`}>{site.ui.intake}</Link>
            <Link href={`/${locale}/faq`}>{site.pages.faq.title}</Link>
          </div>
        </nav>
      </div>
      <div className="wrap f-legal">
        <h4><Link href={hrefOf(locale, legal)}>{site.groups.legal.label}</Link></h4>
        {legal.children.map((c) => (
          <Link key={c.path} href={hrefOf(locale, c)}>{site.pages[c.path].title}</Link>
        ))}
      </div>
      <div className="wrap bottom">
        <span>{footer.copyright}</span>
        <span className="values">{footer.values}</span>
      </div>
    </footer>
  );
}
