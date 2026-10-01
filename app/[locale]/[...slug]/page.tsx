import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks, Masthead } from "@/components/Blocks";
import { OtherGroups } from "@/components/SiteMap";
import { pageDef } from "@/content/pages";
import { photos } from "@/content/photos";
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
  // the page's own photograph is its share image
  const m = pageDef(path)?.masthead;
  const photo = m && m.variant !== "type" ? m.photo : undefined;
  const images = photo ? [{ url: `/photos/pages/${photo}.jpg`, alt: photos[photo]?.alt[locale] || r.title }] : undefined;
  return {
    title: r.seo ? { absolute: r.seo } : r.title,
    description: r.blurb,
    alternates: { canonical: `/${locale}/${path}`, ...alternatesFor(`/${path}`) },
    ...(images ? { openGraph: { title: r.seo ?? `${r.title} — DUKAAT`, description: r.blurb, images } } : {}),
  };
}

export default async function SitePage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const path = slug.join("/");
  const r = resolve(d, path);
  if (!r) notFound();
  const { group, title, blurb, isOverview } = r;
  const def = pageDef(path);
  const gi = group.key === "legal" ? null : group;

  const crumbs = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href={`/${locale}`}>{d.site.ui.home}</Link>
      <i aria-hidden="true">/</i>
      {isOverview || !gi ? (
        <span aria-current="page">{title}</span>
      ) : (
        <>
          <Link href={hrefOf(locale, group)}>{d.site.groups[group.key].label}</Link>
          <i aria-hidden="true">/</i>
          <span aria-current="page">{title}</span>
        </>
      )}
    </nav>
  );

  return (
    <div className="page sp">
      <Masthead
        def={def}
        locale={locale}
        crumbs={crumbs}
        label={d.site.groups[group.key].label}
        title={title}
        blurb={blurb}
        twin={resolve(getDict(locale === "ar" ? "en" : "ar"), path)?.title}
      />

      {def && <Blocks def={def} locale={locale} d={d} group={group} path={path} />}

      {group.children.length > 0 && (
        <nav className="wrap sp-sib" aria-label={d.site.ui.inSection}>
          <p className="label">{d.site.ui.inSection} · {gi ? <Link href={hrefOf(locale, group)}>{d.site.groups[group.key].label}</Link> : d.site.groups.legal.label}</p>
          <ul>
            {[...(gi ? [{ path: group.path }] : []), ...group.children].map((c) => {
              const here = c.path === path;
              return (
                <li key={c.path}>
                  <Link href={hrefOf(locale, c)} aria-current={here ? "page" : undefined}>
                    {c.path === group.path ? d.site.groups[group.key].label : d.site.pages[c.path].title}
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
