"use client";

import { startTransition, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/* === Muntregister: page transitions, a prototype (a6-7, b12) ===
   Only when html[data-overgang="aan"] (review switch "Overgang"; default "uit", so nothing here runs) and only from
   one inner page to another inner page of the same language: never from or to the homepage (so the docking is never
   part of a transition), never across languages, never for same-page anchors, new tabs, downloads or modified clicks.
   How: the browser's own View Transitions API, no library and no experimental Next flag. A click on such a link is
   taken over in the capture phase (next/link sees defaultPrevented and steps aside; its own onClick, e.g. closing the
   menu, still runs), then document.startViewTransition() wraps router.push() and is released once the new pathname
   has committed (or after 3s, so a slow first compile in development never holds the page).
   During the transition <html data-vt="inner"> names the header "dukaat-chrome": it is captured on its own and does
   not animate, so the bar stands still while the page under it changes — the old page fades out (160ms), the new one
   arrives (280ms, 8px, 60ms later). Title and photograph do not morph into each other. Styles: app/muntregister.css,
   "SLICE 9". Back/forward and reduced motion: an ordinary, instant page change. */

const isInner = (segs: string[]) => segs.length >= 2; // "/nl/about" — "/nl" is the homepage

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const release = useRef<(() => void) | null>(null);

  // the new page has committed: let the browser capture it and play the transition
  useEffect(() => {
    const r = release.current;
    release.current = null;
    r?.();
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const html = document.documentElement;
      if (html.dataset.overgang !== "aan" || typeof document.startViewTransition !== "function") return;
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || "vt" in html.dataset) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download") || a.origin !== location.origin) return;
      if (a.pathname === location.pathname) return; // same page: anchors glide (SmoothScroll), nothing to change
      const from = location.pathname.split("/").filter(Boolean);
      const to = a.pathname.split("/").filter(Boolean);
      if (!isInner(from) || !isInner(to) || from[0] !== to[0]) return;

      e.preventDefault();
      const href = a.pathname + a.search + a.hash;
      html.dataset.vt = "inner";
      const vt = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            const done = () => { window.clearTimeout(timer); resolve(); };
            const timer = window.setTimeout(() => { if (release.current === done) release.current = null; resolve(); }, 3000);
            release.current = done;
            startTransition(() => router.push(href));
          }),
      );
      // a skipped transition (hidden tab, a second click) still runs the update; only clean up, never throw
      const clear = () => { delete html.dataset.vt; };
      vt.ready.catch(() => {});
      vt.finished.then(clear, clear);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
