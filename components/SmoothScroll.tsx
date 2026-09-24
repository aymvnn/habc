"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Weight: wheel and trackpad scrolling glide to a stop instead of stepping. Touch keeps the
 * device's own momentum (phones and tablets already scroll with weight, and faking it there
 * only adds lag). The page still scrolls natively underneath, so every scroll listener works.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, autoRaf: true });

    // same-page anchors (#how, #membership …) glide there too, clear of the fixed nav. Capture phase, so this
    // runs before next/link, which then sees the click handled and leaves the scroll to us
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      // the skip link keeps its native jump, which also moves keyboard focus
      if (!a || a.target || a.classList.contains("skiplink") || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return;
      const el = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", a.hash);
      lenis.start(); // a link in the open menu: the menu is closing, so release the lock first
      lenis.scrollTo(el, { offset: -72, duration: 1.4, force: true });
    };
    document.addEventListener("click", onClick, true);

    // the menu locks the page by hiding body overflow: hold the glide while it is open
    const sync = () => (document.body.style.overflow === "hidden" ? lenis.stop() : lenis.start());
    const mo = new MutationObserver(sync);
    mo.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => { document.removeEventListener("click", onClick, true); mo.disconnect(); lenis.destroy(); };
  }, []);
  return null;
}
