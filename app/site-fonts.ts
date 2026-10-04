import { Almarai, Schibsted_Grotesk } from "next/font/google";
import localFont from "next/font/local";

/* The site's three faces, declared once: app/[locale]/layout.tsx and app/global-not-found.tsx both use them. */

/* UX-32 (owner, 4 Oct 2026): one variable file per subset instead of four weights in two styles — the site uses the
   weights 500–800 and never an italic grotesk */
export const display = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});
/* === Muntregister: self-hosted serif (a1-1, b5) ===
   "DUKAAT Serif": a subset of Adobe Source Serif 4 (OFL, app/fonts/SourceSerif4-OFL.md) with real small caps (smcp/c2sc),
   oldstyle and tabular figures and the optical-size axis (opsz 8–60, wght 400–600). next/font/local cannot preload one
   file of a family and not the other, so both are preloaded (the default); the italic carries quotes and notes. */
export const text = localFont({
  src: [
    { path: "./fonts/DukaatSerif-Roman.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/DukaatSerif-Italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-text",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
/* === Muntregister: fonts per language (a9-4) ===
   Almarai is no longer preloaded. On /nl and /en it only sets the small Arabic twin of the masthead (and the hero's
   Arabic words), so its three files (≈56 KB) no longer compete with the masthead photograph. next/font ties a preload
   to the layout module, not to the locale, so "preload on /ar only" is not possible without hosting the files twice;
   on /ar the browser asks for the files as soon as the CSS is read, and the fallback is metric-matched
   (adjustFontFallback), so the swap does not move the lines. Measured in the browser: see the slice 8 report. */
export const arabic = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

