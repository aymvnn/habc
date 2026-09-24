import Link from "next/link";
import type { Dict, Locale } from "@/content/types";
import { Rich } from "./Rich";
import { NameFilm } from "./NameFilm";

/* eslint-disable @next/next/no-img-element -- the brand SVGs are served as-is; next/image adds nothing to vector art */

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

export function Why({ why }: { why: Dict["why"] }) {
  return (
    <section className="block" id="why" aria-labelledby="why-h">
      <div className="wrap split">
        <div className="sticky">
          <span className="label rv">{why.label}</span>
          <h2 id="why-h" className="rv"><Rich text={why.heading} /></h2>
          <p className="lede rv lag1">{why.lede}</p>
        </div>
        <div className="claims">
          {why.claims.map((c) => (
            <article className="claim rv" key={c.roman}>
              <span className="roman">{c.roman}</span>
              <div>
                <h3><Rich text={c.title} /></h3>
                <p>{c.body}</p>
              </div>
            </article>
          ))}
          <p className="mechanism rv">{why.mechanism}</p>
        </div>
      </div>
    </section>
  );
}

export function Name({ name }: { name: Dict["name"] }) {
  return (
    <section className="block" id="name" aria-labelledby="name-h">
      <div className="wrap split">
        <div className="film rv"><NameFilm /></div>
        <div className="story">
          <span className="label rv">{name.label}</span>
          <h2 id="name-h" className="rv"><Rich text={name.heading} /></h2>
          <p className="big rv lag1">{name.body}</p>
          <p className="keystone rv lag2">{name.keystone}</p>
        </div>
      </div>
    </section>
  );
}

export function Membership({ membership }: { membership: Dict["membership"] }) {
  return (
    <section className="block" id="membership" aria-labelledby="member-h">
      <img className="watermark" src="/logo/dukaat-beeldmerk.svg" alt="" aria-hidden="true" width={859} height={998} />
      <div className="wrap grid">
        <span className="label rv">{membership.label}</span>
        <h2 id="member-h" className="rv"><Rich text={membership.heading} /></h2>
        <p className="text rv lag1">{membership.text}</p>
        <div className="charge rv lag2"><p>{membership.charge}</p></div>
        <p className="note rv lag2">{membership.note}</p>
      </div>
    </section>
  );
}

export function Behind({ behind }: { behind: Dict["behind"] }) {
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
              <div className="portrait" role="img" aria-label={f.portraitAlt}>
                <img src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
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

export function Footer({ locale, nav, footer }: { locale: Locale; nav: Dict["nav"]; footer: Dict["footer"] }) {
  const home = `/${locale}`;
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
        </div>
        <div className="col">
          <h4>{footer.pages}</h4>
          <Link href={`${home}#name`}>{nav.about}</Link>
          <Link href={`${home}#how`}>{nav.how}</Link>
          <Link href={`${home}#membership`}>{nav.membership}</Link>
          <Link href={`${home}#behind`}>{nav.behind}</Link>
          <Link href={`${home}/contact`}>{nav.contact}</Link>
        </div>
        <div className="col">
          <h4>{footer.legalGroup}</h4>
          <span className="pending-mark">{footer.legalPending}</span>
        </div>
        <div className="col">
          <h4>{footer.languages}</h4>
          {langs.map((l) => (
            <Link key={l.code} href={`/${l.code}`} hrefLang={l.code} lang={l.code} aria-current={l.code === locale ? "page" : undefined}>{l.name}</Link>
          ))}
        </div>
      </div>
      <div className="wrap bottom">
        <span>{footer.copyright}</span>
        <span className="values">{footer.values}</span>
      </div>
    </footer>
  );
}
