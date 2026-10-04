import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks, Masthead, sectionIndex, splitEnd } from "@/components/Blocks";
import { PageEnd } from "@/components/PageEnd";
import { pageDef } from "@/content/pages";
import { photos } from "@/content/photos";
import { alternatesFor, getDict, isLocale, locales } from "@/lib/i18n";
import { hrefOf, pagePaths, resolve } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string[] }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => pagePaths().map((p) => ({ locale, slug: p.split("/") })));
}
/* only the pages of the site map exist; any other address is unmatched and answered by the house 404 in three
   languages (UX-12, owner 4 Oct 2026: app/global-not-found.tsx, enabled in next.config.ts) */
export const dynamicParams = false;

/** UX-03 / UX-30: the pages where the visitor mainly fills in a form */
const TASK = new Set(["contact", "looking-for", "partnerships"]);

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
  const full = pageDef(path);
  const gi = group.key === "legal" ? null : group;
  // Muntregister g2: the page's last row of actions moves into its end (the reverse of the coin)
  const split = full ? splitEnd(full) : undefined;
  const def = split?.def;

  /* UX-24 (owner, 4 Oct 2026): a long page opens with a small index of its own sections (their headings, as links).
     Not on the legal texts (they have their contents list) and not on the task pages (the form comes first). */
  const index = def && gi && !TASK.has(path) ? sectionIndex(def, locale) : [];
  /* UX-30: on task pages and legal texts the page scrolls natively (no glide), read by components/SmoothScroll.tsx */
  const native = TASK.has(path) || group.key === "legal" || !!split?.formPage;

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
    <div className={`page sp${TASK.has(path) ? " is-task" : ""}`} data-scroll={native ? "native" : undefined}>
      <Masthead
        def={def}
        locale={locale}
        crumbs={crumbs}
        label={d.site.groups[group.key].label}
        title={title}
        blurb={blurb}
        twin={resolve(getDict(locale === "ar" ? "en" : "ar"), path)?.title}
      />

      {index.length >= 4 && (
        <nav className="sec-index" aria-label={d.ux.onThisPage}>
          <div className="wrap">
            <p className="label">{d.ux.onThisPage}</p>
            <ol>
              {index.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.text}</a></li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {def && <Blocks def={def} locale={locale} d={d} group={group} path={path} />}

      <PageEnd locale={locale} d={d} actions={split?.end} seal={path !== "contact" && !split?.formPage} />
    </div>
  );
}
