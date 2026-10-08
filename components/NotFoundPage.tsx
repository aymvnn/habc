import Link from "next/link";
import { Arrow } from "./Arrow";
import { Rich } from "./Rich";
import type { Dict, Locale } from "@/content/types";
import { groups, hrefOf } from "@/lib/site";
import { SealFoil } from "./SealFoil";

/**
 * UI-03 (owner, 4 Oct 2026): the 404 as an ordinary page of the house, in the language of the address. The same
 * masthead as every inner page (the markup of Blocks' Masthead, written out so this also renders in the client-side
 * not-found boundary): "Home / 404", the name on the gold line, the source's own sentence (21) as the standfirst. The
 * existing 404 coin (Muntregister a7-6) lies on the line and turns over once. Then the way home and the menu's
 * "Contact us", and the site's sections as the homepage's register. Only existing words; the button says "Home" (the
 * breadcrumb's word) instead of the sentence "Return to the homepage." with its full stop.
 */
export function NotFoundPage({ locale, d }: { locale: Locale; d: Dict }) {
  const list = groups.filter((g) => g.key !== "contact").map((g) => ({ href: hrefOf(locale, g), label: d.site.groups[g.key].label }));
  list.push({ href: `/${locale}/contact`, label: d.site.groups.contact.label });
  const half = Math.ceil(list.length / 2);
  return (
    <div className="page sp nf404">
      <header className="mh has-sub">
        <div className="wrap mh-top">
          <div className="mh-meta">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href={`/${locale}`}>{d.site.ui.home}</Link>
              <i aria-hidden="true">/</i>
              <span aria-current="page">404</span>
            </nav>
          </div>
          <div className="mh-row">
            <div className="mh-name">
              <h1 className="mh-title"><Rich text="404" words /></h1>
            </div>
            <div className="mh-sub">
              <p className="mh-stand">{d.notFound.text}</p>
            </div>
          </div>
        </div>
        <span className="mh-bar" aria-hidden="true" />
      </header>
      <div className="wrap nf404-coin" aria-hidden="true">
        <div className="nf-coin">
          <div className="nf-turn">
            <span className="nf-face nf-obv"><span className="nf-mark" /></span>
            <p className="nf-code nf-face nf-rev"><SealFoil />404</p>
          </div>
        </div>
      </div>
      <div className="wrap nf404-acts">
        <Link className="btn" href={`/${locale}`}>{d.site.ui.home} <Arrow /></Link>
        <Link className="act-a" href={`/${locale}/contact`}>{d.site.groups.contact.label} <Arrow /></Link>
      </div>
      <section className="block more-sx nf404-idx" aria-labelledby="nf-idx-h">
        <div className="wrap mx-grid">
          <h2 id="nf-idx-h" className="label">{d.more.heading}</h2>
          <div className="mx-cols">
            {[list.slice(0, half), list.slice(half)].map((col, c) => (
              <ul className="mx-row" key={c}>
                {col.map((x) => (
                  <li key={x.href}>
                    <Link href={x.href} prefetch={false}>{x.label}<Arrow /></Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
