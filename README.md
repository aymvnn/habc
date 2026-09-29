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
content/{en,nl,ar}.ts       home page, menu and contact copy, keyed; edit copy here, never in components
content/site.{en,nl,ar}.ts  the site map's titles and one-line blurbs (menu, footer, page mastheads)
content/pages/*.ts          every inner page, one file per menu group, EN + NL + AR side by side (schema: content/pages/types.ts)
content/photos.ts           the inner pages' photographs (generated from brand/fotostijl/paginas-fotos.md)
components/Blocks.tsx       masthead + block library for the inner pages (styles: app/blocks.css)
lib/i18n.ts                 locales, dictionaries, alternates
public/logo/                the Affinity logo SVGs (lockup, mark, wordmark, inline variants with named layers)
public/video/               web-encoded Remotion renders (hero breathing loop, the crossing film, portrait tulip loop)
motion/                     Remotion project with the logo animations (separate package, see motion/README.md)
legacy/                     the previous static site, kept for reference only
```

## Photographs

House style "Known Weight": `brand/fotostijl/DUKAAT-fotostijl.md`. Prompt sheets: `homepage-fotos.md` and `paginas-fotos.md`.

```bash
npm run photos -- --sheet brand/fotostijl/paginas-fotos.md --n 2 --check   # generate (Gemini API, key in .env.local)
python scripts/export-photos.py [id …]                                     # chosen variants (flow-export/keuze.json) -> public/photos
python scripts/build-photo-registry.py                                     # alt texts and formats -> content/photos.ts
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 → /en
npm run build      # production build (also type-checks)
```

Add `?audit=1` to a page URL to flatten the 100svh hero for full-page screenshots.

## Content rules that are enforced in the copy

Admission by nomination or invitation; companies may also apply through the intake (option "apply"), which never guarantees membership
(router 8 is "I have been nominated"); no counts of members per sector or market; no prices (only the charging model),
no fabricated numbers or members, no Syria on the public site, "people verify" instead of "AI finds", Anno 2018 present,
ducat facts as verified (4 Aug 1586 · 3.494 g at 983/1000 · sultani 1477–78 · bunduqi = Venice), and the legal line about members' funds.
Bracketed values such as `[48] newsletters` are pending founders' decisions; reply times are Member 5, Professional 3, Executive 1 working day(s).
