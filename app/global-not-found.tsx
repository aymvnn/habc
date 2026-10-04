import type { Metadata } from "next";
import { Arrow } from "@/components/Arrow";
import { Rich } from "@/components/Rich";
import { en } from "@/content/en";
import { nl } from "@/content/nl";
import { ar } from "@/content/ar";
import { arabic, display, text } from "./site-fonts";
import "./site-styles"; // the site's own list, in the same order (a different list splits the CSS and breaks its order)

/* eslint-disable @next/next/no-img-element -- the brand SVGs are served as-is */

/**
 * UX-12 (owner, 4 Oct 2026): an address whose first part is not one of the site's languages (/xx/…) has no layout
 * and no language to borrow, so it is answered here, in all three. Addresses under /nl, /en and /ar get the 404 inside
 * the site instead (proxy.ts → app/[locale]/niet-gevonden). UI-03: the same composition as that page — "404" on the
 * gold line, the existing coin lying on it — and the three languages side by side, each with the source's own sentence
 * (21), the way home ("Home", the breadcrumb's word) and the menu's "Contact us". Enabled by experimental.globalNotFound.
 */
export const metadata: Metadata = {
  title: "404 — DUKAAT",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" data-slot="licht" className={`${display.variable} ${text.variable} ${arabic.variable}`}>
      <body>
        <header className="gnf-top">
          <a className="brand" href="/en" aria-label={en.nav.toHome}>
            <img className="mark" src="/logo/dukaat-beeldmerk.svg" alt="" width={859} height={998} />
            <img className="wordmark" src="/logo/dukaat-woordmerk.svg" alt="DUKAAT" width={748} height={120} />
          </a>
        </header>
        <main id="main" className="gnf">
          <div className="page sp nf404">
            <header className="mh">
              <div className="wrap mh-top">
                <div className="mh-row">
                  <div className="mh-name">
                    <h1 className="mh-title"><Rich text="404" words /></h1>
                  </div>
                </div>
              </div>
              <span className="mh-bar" aria-hidden="true" />
            </header>
            <div className="wrap nf404-coin" aria-hidden="true">
              <div className="nf-coin">
                <div className="nf-turn">
                  <span className="nf-face nf-obv"><span className="nf-mark" /></span>
                  <p className="nf-code nf-face nf-rev">404</p>
                </div>
              </div>
            </div>
            <div className="wrap gnf-langs">
              {[en, nl, ar].map((d) => (
                <section className="gnf-l" key={d.locale} lang={d.locale} dir={d.locale === "ar" ? "rtl" : "ltr"}>
                  <p className="nf-text">{d.notFound.text}</p>
                  <p className="nf-links">
                    <a className="btn" href={`/${d.locale}`}>{d.site.ui.home} <Arrow /></a>
                    <a className="act-a" href={`/${d.locale}/contact`}>{d.site.groups.contact.label} <Arrow /></a>
                  </p>
                </section>
              ))}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
