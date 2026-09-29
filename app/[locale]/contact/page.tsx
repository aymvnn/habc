import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntakeForm } from "@/components/IntakeForm";
import { Photo } from "@/components/Photo";
import { Rich } from "@/components/Rich";
import { alternatesFor, getDict, isLocale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ intent?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return { title: d.nav.contact, description: d.contact.intro, alternates: { canonical: `/${locale}/contact`, ...alternatesFor("/contact") } };
}

export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { intent } = await searchParams;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  const known = intent === "apply" || d.routes.items.some((r) => r.intent === intent);
  return (
    <div className="page">
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap intake">
          <div className="intro">
            <span className="label">{d.nav.contact}</span>
            <h1>{d.contact.heading}</h1>
            <p className="lede"><Rich text={d.contact.intro} /></p>
            <p className="where" style={{ marginTop: "var(--s-xl)", color: "var(--muted)" }}>
              <span className="pending-mark">{d.correspondence.mailPending}</span> · {d.correspondence.where}
            </p>
            <Photo id="contact-hero" locale={locale} className="intake-ph" sizes="(max-width: 1100px) 90vw, 36vw" />
          </div>
          <IntakeForm locale={locale} contact={d.contact} routes={d.routes} initialIntent={known ? (intent as string) : "other"} mailPending={d.correspondence.mailPending} />
        </div>
        <div className="wrap faq" id="faq">
          <h2>{d.contact.faqHeading}</h2>
          {d.contact.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
