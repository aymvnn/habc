import Link from "next/link";
import type { Dict, Locale } from "@/content/types";
import { groups, hrefOf, type SiteGroup } from "@/lib/site";
import { Rich } from "./Rich";

/* eslint-disable @next/next/no-img-element -- brand SVGs are served as-is */

/** One card per group: the group, its line, and every page under it. */
function GroupCard({ locale, site, g, n }: { locale: Locale; site: Dict["site"]; g: SiteGroup; n: number }) {
  return (
    <article className="gx">
      <span className="gx-n">{String(n).padStart(2, "0")}</span>
      <h3><Link href={hrefOf(locale, g)}>{site.groups[g.key].label}<span className="arrow" aria-hidden="true">→</span></Link></h3>
      <p className="gx-lede">{site.groups[g.key].lede}</p>
      <ul>
        {g.children.map((c) => (
          <li key={c.path}><Link href={hrefOf(locale, c)} className={c.href ? "is-key" : undefined}>{site.pages[c.path].title}</Link></li>
        ))}
      </ul>
    </article>
  );
}

/** Home, straight under the hero: the whole club on one screen, every page one click away. */
export function SiteIndex({ locale, d }: { locale: Locale; d: Dict }) {
  return (
    <section className="block site-index" aria-labelledby="sx-h">
      <div className="wrap">
        <div className="head">
          <span className="label rv">{d.site.ui.indexLabel}</span>
          <h2 id="sx-h" className="rv"><Rich text={d.site.ui.indexHeading} /></h2>
        </div>
        <div className="gx-grid">
          {groups.map((g, i) => (
            <div className={`rv${i % 4 ? ` lag${i % 4}` : ""}`} key={g.key}><GroupCard locale={locale} site={d.site} g={g} n={i + 1} /></div>
          ))}
          <div className="rv lag3">
            <article className="gx gx-contact">
              <span className="gx-n">{String(groups.length + 1).padStart(2, "0")}</span>
              <h3><Link href={`/${locale}/contact`}>{d.nav.contact}<span className="arrow" aria-hidden="true">→</span></Link></h3>
              <p className="gx-lede">{d.contact.heading}</p>
              <ul>
                <li><Link href={`/${locale}/contact`}>{d.site.ui.intake}</Link></li>
                <li><Link href={`/${locale}/faq`}>{d.site.pages.faq.title}</Link></li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Under every inner page: the other groups, so no page is a dead end. */
export function OtherGroups({ locale, site, current }: { locale: Locale; site: Dict["site"]; current: string }) {
  return (
    <nav className="og" aria-label={site.ui.otherSections}>
      <div className="wrap">
        <p className="label">{site.ui.otherSections}</p>
        <ul>
          {groups.filter((g) => g.key !== current).map((g) => (
            <li key={g.key}>
              <Link href={hrefOf(locale, g)}>
                <span className="og-t">{site.groups[g.key].label}<span className="arrow" aria-hidden="true">→</span></span>
                <span className="og-b">{site.groups[g.key].lede}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
