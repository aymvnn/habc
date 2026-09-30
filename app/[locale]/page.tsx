import { notFound } from "next/navigation";
import { HeroStage } from "@/components/HeroStage";
import { Behind, Correspondence, More, Name, Why } from "@/components/Sections";
import { getDict, isLocale } from "@/lib/i18n";

/**
 * The homepage of the source (1.2–1.6): the tulip with "Get to know DUKAAT" and "Discover the DUKAAT ecosystem",
 * then "Site sections". After it, the extras the owner kept on 30 Sep 2026: why DUKAAT, the name, the founders, the close.
 */
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const more = (path: string) => ({ href: `/${locale}/${path}`, label: d.site.ui.more });
  return (
    <>
      <HeroStage locale={locale} title={d.meta.title} descriptor={d.nav.descriptor} hero={d.hero} extra={d.extra} />
      <More locale={locale} more={d.more} />
      <Why why={d.extra.why} more={more("about/why")} />
      <Name name={d.extra.name} more={more("about/name")} />
      <Behind behind={d.extra.behind} more={more("about/founders")} />
      <Correspondence c={d.extra.correspondence} tagline={d.hero.title} />
    </>
  );
}
