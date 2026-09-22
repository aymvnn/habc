# DUKAAT — Dutch–Arab Business Club

Website of DUKAAT, the private business club connecting companies between the Netherlands and the Arab world
(Stichting Nederlands–Arabische Handelskamer, Anno 2018). Tagline: **Where Value Crosses Borders** · حيث تعبر القيمة الحدود.

## Stack

- **Next.js 16** (App Router, Turbopack), React 19, TypeScript. No CSS framework: one hand-written design system in `app/globals.css`.
- Three language versions with their own URLs: `/en` (default; `/` redirects there), `/nl`, `/ar` (`dir="rtl"`). Full `hreflang` alternates.
- Fonts via `next/font`: Schibsted Grotesk (display), Source Serif 4 (text), Almarai (Arabic).
- Intake behind the eight routers: `app/actions/intake.ts` (Server Action → Resend REST API). See `.env.example`.
- Hosted on Vercel (auto-detected Next.js build).

## Structure

```
app/[locale]/layout.tsx     html lang/dir, fonts, top bar, footer, metadata
app/[locale]/page.tsx       homepage (hero · routers · how we work · why · the name · membership · behind · correspondence)
app/[locale]/contact/       intake + FAQ (?intent=distributor|supplier|sell|buy|market-entry|opportunity|invest|nominated)
app/actions/intake.ts       Server Action for the intake
app/globals.css             design tokens + all component styles (bordeaux #6F0A25 · gold #DCB17A→#9E7946 · bar #B39455 · paper #EDEAE1)
components/                 TopBar, Hero, Sections (Routers, Steps, Why, Name, Membership, Behind, Correspondence, Footer), IntakeForm, Reveal
content/{en,nl,ar}.ts       every string on the site, keyed; edit copy here, never in components
lib/i18n.ts                 locales, dictionaries, alternates
public/logo/                the Affinity logo SVGs (lockup, mark, wordmark, inline variants with named layers)
public/video/               web-encoded Remotion renders (hero breathing loop, the crossing film, portrait tulip loop)
motion/                     Remotion project with the logo animations (separate package, see motion/README.md)
legacy/                     the previous static site, kept for reference only
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 → /en
npm run build      # production build (also type-checks)
```

Add `?audit=1` to a page URL to flatten the 100svh hero for full-page screenshots.

## Content rules that are enforced in the copy

No join/apply call to action (membership is by nomination — router 8 is "I have been nominated"), no prices (only the charging model),
no fabricated numbers or members, no Syria on the public site, "people verify" instead of "AI finds", Anno 2018 present,
ducat facts as verified (4 Aug 1586 · 3.494 g at 983/1000 · sultani 1477–78 · bunduqi = Venice), and the legal line about members' funds.
Bracketed values such as `[2–3] working days` are pending founders' decisions.
