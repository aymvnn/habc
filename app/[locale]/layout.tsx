import type { Metadata, Viewport } from "next";
import { arabic, display, text } from "../site-fonts";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Sections";
import { RevealObserver } from "@/components/Reveal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ReviewPanel } from "@/components/ReviewPanel";
import { FoilLight } from "@/components/FoilLight";
import { Licht } from "@/components/Licht";
import { GoldThread } from "@/components/GoldThread";
import { PageTransition } from "@/components/PageTransition";
import { ArrivalTracker } from "@/components/Arrival";
import { Calm } from "@/components/Calm";
import { PageBar } from "@/components/PageBar";
import { SITE_URL } from "@/lib/site-url";
import { DEFAULT_BEWEGING, DEFAULT_OVERGANG } from "@/components/motion";
import { alternatesFor, dirOf, getDict, isLocale, locales } from "@/lib/i18n";
import "../site-styles"; // every stylesheet, in cascade order (one list, shared with the global 404)

/* the three faces live in app/site-fonts.ts, shared with the global 404 (app/global-not-found.tsx) */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  /* Muntregister a9-7: the browser's own bar in paper, or in the footer's wine-night under a dark system theme */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDEAE1" },
    { media: "(prefers-color-scheme: dark)", color: "#24050C" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
/* UX-12: only /en, /nl and /ar exist; any other first segment is an unmatched address (app/global-not-found.tsx) */
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDict(locale);
  return {
    metadataBase: new URL(SITE_URL),
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

/* === Muntregister: pre-paint state on <html> (a6-3, review toggle) ===
   Runs first in <body>, before the first paint. It only ever writes data-mh (the masthead's full entrance has played this
   session), data-seal (the page end's seal has been pressed this session, slice 5) and, in development, the four
   review toggles. It never reads or writes data-dock (the protected dock).
   Slice 9: <html data-beweging> is written on the server from DEFAULT_BEWEGING (components/motion.ts), so the default
   holds in production too; the review script below only overrides it with a choice stored in this browser. */
const MH_SCRIPT = `try{if(sessionStorage.getItem("dukaat-mh")==="1")document.documentElement.dataset.mh="seen";if(sessionStorage.getItem("dukaat-seal")==="1")document.documentElement.dataset.seal="seen"}catch(e){}`;
const REVIEW_SCRIPT = `try{var h=document.documentElement,k=["beweging","slot","overgang","kader","brief"];for(var i=0;i<k.length;i++){var v=localStorage.getItem("dukaat-proef-"+k[i]);if(v)h.setAttribute("data-"+k[i],v)}}catch(e){}`;
const PREPAINT = process.env.NODE_ENV !== "production" ? MH_SCRIPT + REVIEW_SCRIPT : MH_SCRIPT;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDict(locale);
  return (
    <html lang={locale} dir={dirOf(locale)} data-beweging={DEFAULT_BEWEGING} data-overgang={DEFAULT_OVERGANG} data-slot="licht" className={`${display.variable} ${text.variable} ${arabic.variable}`} suppressHydrationWarning>
      <body>
        {/* first thing in <body>, not in <head>: still runs before anything paints, and security software that injects
            its own script into <head> (Kaspersky does) can no longer shift it and cause a hydration mismatch */}
        <script dangerouslySetInnerHTML={{ __html: PREPAINT }} suppressHydrationWarning />
        <a className="skiplink" href="#main">{d.nav.skip}</a>
        <TopBar locale={locale} nav={d.nav} site={d.site} extra={d.extra} ux={d.ux} />
        <main id="main">{children}<GoldThread /></main>
        <Footer locale={locale} d={d} />
        <RevealObserver />
        <SmoothScroll />
        <FoilLight />
        <Licht />
        <PageTransition />
        <ArrivalTracker />
        <Calm />
        <PageBar locale={locale} contact={d.site.groups.contact.label} back={d.ux.backToTop} />
        {process.env.NODE_ENV !== "production" && <ReviewPanel />}
      </body>
    </html>
  );
}
