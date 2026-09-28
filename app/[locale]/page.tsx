import { notFound } from "next/navigation";
import { HeroStage } from "@/components/HeroStage";
import { Behind, Correspondence, Kruising, Membership, Name, Why } from "@/components/Sections";
import { Steps } from "@/components/Steps";
import { SiteIndex } from "@/components/SiteMap";
import { getDict, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const more = (path: string) => ({ href: `/${locale}/${path}`, label: d.site.ui.more });
  return (
    <>
      <HeroStage
        locale={locale}
        title={d.meta.title}
        descriptor={d.nav.descriptor}
        hero={d.hero}
        routes={d.routes}
        tagline={d.correspondence.tagline}
        taglineEcho={d.correspondence.taglineEcho}
      />
      <SiteIndex locale={locale} d={d} />
      <Kruising />
      <Steps how={d.how} more={more("how-we-work")} />
      <Why why={d.why} more={more("about/why")} />
      <Kruising />
      <Name name={d.name} more={more("about/story")} />
      <Membership membership={d.membership} more={more("membership")} />
      <Behind behind={d.behind} more={more("about/founders")} />
      <Correspondence c={d.correspondence} />
    </>
  );
}
