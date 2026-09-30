import type { Metadata, Viewport } from "next";
import { Almarai, Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Sections";
import { RevealObserver } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { alternatesFor, dirOf, getDict, isLocale, locales } from "@/lib/i18n";
import "lenis/dist/lenis.css";
import "../globals.css";
import "../hero.css";
import "../nav.css";
import "../pages.css";
import "../blocks.css";

const display = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const text = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-text",
  display: "swap",
});
const arabic = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EDEAE1",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: { default: d.meta.title, template: "%s — DUKAAT" },
    description: d.meta.description,
    alternates: { canonical: `/${locale}`, ...alternatesFor("") },
    openGraph: {
      type: "website",
      siteName: "DUKAAT",
      title: d.meta.title,
      description: d.meta.description,
      locale: locale === "en" ? "en_GB" : locale === "nl" ? "nl_NL" : "ar_AE",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: d.meta.ogImageAlt }],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <html lang={locale} dir={dirOf(locale)} className={`${display.variable} ${text.variable} ${arabic.variable}`} suppressHydrationWarning>
      <body>
        <a className="skiplink" href="#main">{d.nav.skip}</a>
        <TopBar locale={locale} nav={d.nav} site={d.site} extra={d.extra} />
        <main id="main">{children}</main>
        <Footer locale={locale} d={d} />
        <RevealObserver />
        <SmoothScroll />
      </body>
    </html>
  );
}
