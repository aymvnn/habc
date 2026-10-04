"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/* === Muntregister: one motion grammar, played once (g4 repair, a6-3, a6-6) ===
   - Reveals: elements get the class "in" once, when they first enter the viewport (never reversed, never tied to
     the scroll position). Only labels and h2 (.rv) and photographs (.rv-ph) carry a reveal; running text, lists,
     forms, FAQ, notices and listings are simply there. Under reduced motion everything is shown at once.
   - The masthead's full entrance plays once per session: after it, sessionStorage "dukaat-mh" = 1 and <html> gets
     data-mh="seen" (before paint on a fresh load via the inline script in layout.tsx, and here before the next page
     paints on a client-side navigation), which plays the short version. data-dock is never touched.
   - Keyboard: while the visitor works with the keyboard, <html data-kbd> makes every transition outside the hero
     instant (app/muntregister.css); the first pointer move or press clears it. Typing in a field does not set it. */

const REVEAL = ".rv:not(.in), .rv-ph:not(.in), .rv-rule:not(.in), .stmt-mark:not(.in), .bsteps:not(.in), .seal-wrap:not(.in)";
const MH_KEY = "dukaat-mh";

const mhSeen = () => {
  try { return sessionStorage.getItem(MH_KEY) === "1"; } catch { return false; }
};
const markMhSeen = () => {
  try { sessionStorage.setItem(MH_KEY, "1"); } catch {}
};
/* Muntregister g2: the page end's seal is pressed in once per visit, and only under the extra motion. When it has
   played, sessionStorage "dukaat-seal" = 1; from the next page on <html data-seal="seen"> keeps every seal still. */
const SEAL_KEY = "dukaat-seal";
const sealSeen = () => {
  try { return sessionStorage.getItem(SEAL_KEY) === "1"; } catch { return false; }
};
const markSealSeen = () => {
  try { sessionStorage.setItem(SEAL_KEY, "1"); } catch {}
};

// useLayoutEffect warns during server rendering; this component only renders in the browser after hydration anyway
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function RevealObserver() {
  const pathname = usePathname();

  // a client-side navigation after the full entrance: switch to the short entrance before the new page paints
  useIsoLayoutEffect(() => {
    const h = document.documentElement;
    if (h.dataset.mh !== "seen" && mhSeen()) h.dataset.mh = "seen";
    if (h.dataset.seal !== "seen" && sealSeen()) h.dataset.seal = "seen";
  }, [pathname]);

  useEffect(() => {
    // ?audit=1 flattens the 100svh hero so a full-page screenshot shows the page as one strip
    if (new URLSearchParams(window.location.search).get("audit") === "1") document.documentElement.classList.add("audit");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // the masthead: remember once its full entrance has drawn the bar (at once when nothing moves)
    // (WAAPI, so an entrance that already finished before hydration counts too; a page left mid-entrance does not)
    const bar = document.querySelector<HTMLElement>(".mh .mh-bar");
    if (bar && !mhSeen()) {
      const anims = reduce || !bar.getAnimations ? [] : bar.getAnimations();
      if (!anims.length) markMhSeen();
      else Promise.all(anims.map((a) => a.finished)).then(markMhSeen, () => {});
    }

    // UI-07 (owner, 4 Oct 2026): a heading set word by word (Rich words) comes up line by line — before it is shown,
    // each word learns the number of its line (--l), from where the browser has wrapped it
    // (all positions are read first and written after, so the browser lays the page out once, not once per word)
    const marks: [HTMLElement, number][] = [];
    document.querySelectorAll<HTMLElement>("h2.rv:not(.in)").forEach((h) => {
      let line = -1, top = -Infinity;
      h.querySelectorAll<HTMLElement>(".w").forEach((w) => {
        const t = w.offsetTop;
        if (t > top + 2) { line++; top = t; }
        marks.push([w, line]);
      });
    });
    marks.forEach(([w, line]) => w.style.setProperty("--l", String(line)));

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
    if (!els.length) return;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            if (!reduce && en.target.closest(".pe-seal") && document.documentElement.dataset.beweging === "extra") markSealSeen();
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // keyboard never animates: mark keyboard NAVIGATION on <html> (Tab always; Enter, Space, Escape and the arrow keys
  // when they are not typing in a field), clear it as soon as a pointer moves or presses. Typing in a form is not
  // navigation, so it never switches the hover transitions off for the mouse that follows.
  useEffect(() => {
    const h = document.documentElement;
    const NAV = new Set(["Tab", "Enter", " ", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"]);
    const typing = (t: EventTarget | null) =>
      t instanceof HTMLElement && (t.isContentEditable || t.matches("input:not([type=checkbox],[type=radio],[type=button],[type=submit],[type=file]), textarea, select"));
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || !NAV.has(e.key)) return;
      if (e.key !== "Tab" && typing(e.target)) return;
      if (!("kbd" in h.dataset)) h.dataset.kbd = "";
    };
    const onPointer = (e: PointerEvent) => {
      if (!("kbd" in h.dataset)) return;
      if (e.type === "pointermove" && !e.movementX && !e.movementY) return;
      delete h.dataset.kbd;
    };
    document.addEventListener("keydown", onKey, true);
    document.addEventListener("pointerdown", onPointer, true);
    document.addEventListener("pointermove", onPointer, { capture: true, passive: true });
    return () => {
      document.removeEventListener("keydown", onKey, true);
      document.removeEventListener("pointerdown", onPointer, true);
      document.removeEventListener("pointermove", onPointer, true);
    };
  }, []);

  return null;
}
