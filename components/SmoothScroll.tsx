"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Weight: wheel and trackpad scrolling glide to a stop instead of stepping. Touch keeps the
 * device's own momentum (phones and tablets already scroll with weight, and faking it there
 * only adds lag). The page still scrolls natively underneath, so every scroll listener works.
 *
 * === Muntregister: Lenis untouched, only anchors and navigation made safe (a9-2) ===
 * lerp .085 and wheelMultiplier .9 stay (they carry the feel of the protected docking). New: the menu, the group
 * panels and [data-lenis-prevent] scroll natively; same-page anchors glide for a time that follows the distance and
 * stop clear of the measured nav (--nav-h); a route change halts a running glide without scrollTo(0), so Next
 * restores the scroll position itself; switching reduced motion on or off takes effect at once.
 *
 * === UX-30 (owner, 4 Oct 2026): the glide where it helps, native scrolling where the visitor works ===
 * The homepage keeps its glide exactly as it was (lerp .085, the docking rides on it). Other pages glide lighter
 * (lerp .15: less lag behind the wheel). Pages that mark themselves data-scroll="native" — the task pages with a form
 * and the legal texts (app/[locale]/[...slug]/page.tsx) — scroll natively, with no glide at all.
 */
const HOME = /^\/(nl|en|ar)\/?$/;
const LERP_HOME = 0.085;
const LERP_PAGE = 0.15;

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const ctl = useRef<{ create: () => void; destroy: () => void } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const navH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 72;

    // same-page anchors (#how, #membership …) glide there too, clear of the fixed nav. Capture phase, so this
    // runs before next/link, which then sees the click handled and leaves the scroll to us
    const onClick = (e: MouseEvent) => {
      const lenis = lenisRef.current;
      if (!lenis) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      // the skip link keeps its native jump, which also moves keyboard focus
      if (!a || a.target || a.classList.contains("skiplink") || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return;
      const el = document.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", a.hash);
      lenis.start(); // a link in the open menu: the menu is closing, so release the lock first
      const dist = Math.abs(el.getBoundingClientRect().top);
      lenis.scrollTo(el, {
        offset: -(navH() + 16),
        duration: Math.min(1.1, 0.5 + dist / 4000),
        easing: (t) => 1 - Math.pow(1 - t, 4),
        force: true,
      });
    };

    // the menu locks the page by hiding body overflow: hold the glide while it is open
    const sync = () => {
      const lenis = lenisRef.current;
      if (!lenis) return;
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    };
    const mo = new MutationObserver(sync);

    const native = () => !!document.querySelector('[data-scroll="native"]');
    const create = () => {
      if (mq.matches || native()) return destroy();
      const lerp = HOME.test(location.pathname) ? LERP_HOME : LERP_PAGE;
      if (lenisRef.current) {
        lenisRef.current.options.lerp = lerp;
        return;
      }
      lenisRef.current = new Lenis({
        lerp,
        wheelMultiplier: 0.9,
        autoRaf: true,
        prevent: (n) => !!(n as Element).closest?.(".veil,.mp,[data-lenis-prevent]"),
      });
      sync();
    };
    const destroy = () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
    ctl.current = { create, destroy };
    const onMotion = () => (mq.matches ? destroy() : create());

    create();
    mq.addEventListener("change", onMotion);
    document.addEventListener("click", onClick, true);
    mo.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      mq.removeEventListener("change", onMotion);
      document.removeEventListener("click", onClick, true);
      mo.disconnect();
      destroy();
      ctl.current = null;
    };
  }, []);

  // a new page: halt a glide that is still running, but leave the position to Next (no scrollTo(0)); then choose the
  // glide for this page (UX-30) — none on a native page, the homepage's own, or the lighter one
  useEffect(() => {
    const l = lenisRef.current;
    if (l && document.body.style.overflow !== "hidden") {
      l.stop();
      l.start();
    }
    ctl.current?.create();
  }, [pathname]);

  return null;
}
