import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundPage } from "@/components/NotFoundPage";
import { getDict, isLocale } from "@/lib/i18n";

/* UI-03 (owner, 4 Oct 2026): the house 404 inside the site, in the language of the address. proxy.ts rewrites every
   unknown address under /nl, /en and /ar to this page with status 404 (the browser keeps the address it asked for).
   A visit to this address itself is answered the same way. Never indexed. */
export const metadata: Metadata = { title: "404", robots: { index: false, follow: true } };

export default async function NotFound404({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <NotFoundPage locale={locale} d={getDict(locale)} />;
}
