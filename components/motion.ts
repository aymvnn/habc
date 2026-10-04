/* === Muntregister: the motion default, in one place (g4, a6-1, a6-2) ===
   "rustig" = only the motion repair ships; "extra" = the typed reveals, the lines that draw themselves, the struck
   coins, the seal's press and the living gold line (app/muntregister.css "SLICE 9", components/FoilLight.tsx).
   The layout writes it on <html data-beweging> on the server (so it also holds in production, without the review
   panel); in development the review panel ("Proef") can override it per browser. Flip this one constant to make the
   extra motion the default everywhere. */
export type Beweging = "rustig" | "extra";
export const DEFAULT_BEWEGING: Beweging = "extra";

/* UI-11 (owner, 4 Oct 2026): the page transitions are on by default (components/PageTransition.tsx: only from one inner
   page to another in the same language, never from or to the homepage, so the docking is never part of one). Written
   on <html data-overgang> by the layout, like the motion default; the review panel can still switch it per browser. */
export type Overgang = "uit" | "aan";
export const DEFAULT_OVERGANG: Overgang = "aan";
