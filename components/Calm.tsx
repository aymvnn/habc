"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* === UX-29 (owner, 4 Oct 2026): decorative motion stops by itself ===
   The ambient movement of the site (the turning guilloche, the breathing tulip, the pulse through the hero, the glints
   on the gold lines, the drifting light, the hairline cue) plays for the first seconds of a page and then rests:
   <html data-calm> is set after eight seconds, at once under reduced motion. Everything the visitor does still answers
   (a hover sends the pulse, a scroll draws the thread, the pointer moves the light). Styles: app/ux.css; the loops read
   the flag (HeroStage, FoilLight, GoldThread). A new page starts the count again. */
const AFTER_MS = 8000;

export function Calm() {
  const pathname = usePathname();
  useEffect(() => {
    const html = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      html.dataset.calm = "";
      return;
    }
    delete html.dataset.calm;
    const t = window.setTimeout(() => { html.dataset.calm = ""; }, AFTER_MS);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}
