import { notFound } from "next/navigation";
import { HeroStage } from "@/components/HeroStage";
import { Behind, Correspondence, Kruising, Membership, Name, Steps, Why } from "@/components/Sections";
import { getDict, isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
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
      <Kruising />
      <Steps how={d.how} />
      <Why why={d.why} />
      <Kruising />
      <Name name={d.name} />
      <Membership membership={d.membership} />
      <Behind behind={d.behind} />
      <Correspondence c={d.correspondence} />
    </>
  );
}
