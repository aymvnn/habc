import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Behind, Membership, Name, Routers, Why } from "@/components/Sections";
import { Building, OtherGroups } from "@/components/SiteMap";
import { Rich } from "@/components/Rich";
import type { Dict, Locale } from "@/content/types";
import { alternatesFor, getDict, isLocale, locales } from "@/lib/i18n";
import { hrefOf, pagePaths, resolve } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string[] }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => pagePaths().map((p) => ({ locale, slug: p.split("/") })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const path = slug.join("/");
  const r = resolve(getDict(locale), path);
  if (!r) return {};
  return { title: r.title, description: r.blurb, alternates: { canonical: `/${locale}/${path}`, ...alternatesFor(`/${path}`) } };
}

/** Pages that already have approved copy on the home page show it here in full; the rest say they are being built. */
function bodyFor(path: string, d: Dict, locale: Locale): React.ReactNode {
  switch (path) {
    case "about/story":
      return <Name name={d.name} />;
    case "about/why":
      return <Why why={d.why} />;
    case "about/founders":
      return <Behind behind={d.behind} />;
    case "membership":
      return <Membership membership={d.membership} />;
    case "services":
      return <Routers locale={locale} routes={d.routes} />;
    case "how-we-work":
      return (
        <section className="block" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <div className="head">
              <span className="label">{d.how.label}</span>
              <h2 id="how-h"><Rich text={d.how.heading} /></h2>
              <p className="lede">{d.how.lede}</p>
            </div>
            <ol className="ledger">
              {d.how.steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <span className="step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );
    case "how-we-work/fees":
      return <div className="wrap sp-prose"><p>{d.membership.charge}</p><Building site={d.site} /></div>;
    case "how-we-work/boundaries":
      return <div className="wrap sp-prose"><p>{d.footer.legal}</p><p>{d.contact.investNotice}</p><Building site={d.site} /></div>;
    case "faq":
      return (
        <div className="wrap faq sp-faq">
          {d.contact.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default async function SitePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const path = slug.join("/");
  const r = resolve(d, path);
  if (!r) notFound();
  const { group, title, blurb, isOverview } = r;
  const body = bodyFor(path, d, locale);
  const gi = group.key === "legal" ? null : group;

  return (
    <div className="page sp">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={`/${locale}`}>{d.site.ui.home}</Link>
          <i aria-hidden="true">/</i>
          {isOverview ? (
            <span aria-current="page">{title}</span>
          ) : (
            <>
              <Link href={hrefOf(locale, group)}>{d.site.groups[group.key].label}</Link>
              <i aria-hidden="true">/</i>
              <span aria-current="page">{title}</span>
            </>
          )}
        </nav>
        <header className="sp-head">
          <span className="label">{isOverview ? d.site.ui.overview : d.site.groups[group.key].label}</span>
          <h1>{title}</h1>
          <p className="lede">{blurb}</p>
        </header>
      </div>

      {/* an overview lists every page in its group first; a page lists its neighbours after its content */}
      {isOverview && (
        <div className="wrap">
          <ul className="sp-cards">
            {group.children.map((c, i) => (
              <li key={c.path}>
                <Link href={hrefOf(locale, c)} className={c.href ? "is-key" : undefined}>
                  <span className="sp-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sp-t">{d.site.pages[c.path].title}<span className="arrow" aria-hidden="true">→</span></span>
                  <span className="sp-b">{d.site.pages[c.path].blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {body ?? (!isOverview && <div className="wrap"><Building site={d.site} /></div>)}

      {!isOverview && (
        <nav className="wrap sp-sib" aria-label={d.site.ui.inSection}>
          <p className="label">{d.site.ui.inSection} · <Link href={hrefOf(locale, group)}>{d.site.groups[group.key].label}</Link></p>
          <ul>
            {group.children.map((c) => {
              const here = c.path === path;
              return (
                <li key={c.path}>
                  <Link href={hrefOf(locale, c)} aria-current={here ? "page" : undefined} className={c.href ? "is-key" : undefined}>
                    {d.site.pages[c.path].title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <OtherGroups locale={locale} site={d.site} current={gi ? gi.key : "legal"} />
    </div>
  );
}
