"use client";

import { useEffect } from "react";

/* === UX-09 (owner, 4 Oct 2026): a form knows which button the visitor came from ===
   A click on a link inside the page's content (never the menu or the footer) is remembered for this tab: the words of
   the button, the page it was on, and where it leads. The form at that address shows those words once ("You are
   responding to: …") and sends them along, so "Join as a trainer" and "Request a training for your company" no longer
   arrive as the same "Training". Remembered for half an hour, taken by one form, then forgotten. */

const KEY = "dukaat-arrival";
const TTL = 30 * 60 * 1000;
type Stored = { label: string; from: string; path: string; hash: string; at: number };
export type Arrival = { label: string; from: string };

// what a form has taken in this page load: StrictMode mounts twice, and a form re-renders
const taken = new Map<string, Arrival>();

/** the arrival meant for this form (its id is the anchor the link pointed to, or the link pointed to the page itself) */
export function takeArrival(id: string): Arrival | null {
  if (typeof window === "undefined" || id === "newsletter") return null;
  const had = taken.get(id);
  if (had) return had;
  let s: Stored | null = null;
  try {
    const raw = sessionStorage.getItem(KEY);
    s = raw ? (JSON.parse(raw) as Stored) : null;
  } catch {}
  if (!s || Date.now() - s.at > TTL || s.path !== window.location.pathname) return null;
  if (s.hash && s.hash !== `#${id}` && s.hash !== `#${id}-form`) return null;
  const a = { label: s.label, from: s.from };
  taken.set(id, a);
  try { sessionStorage.removeItem(KEY); } catch {}
  return a;
}

// the button's own words as written (textContent: innerText would return them in the capitals some buttons wear in CSS)
const words = (a: HTMLAnchorElement) =>
  (a.textContent || "").replace(/[→←↗↘]/g, " ").replace(/\s+/g, " ").trim().slice(0, 120);

export function ArrivalTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !a.closest("main") || a.origin !== window.location.origin) return;
      const label = words(a);
      if (!label) return;
      try {
        sessionStorage.setItem(KEY, JSON.stringify({ label, from: window.location.pathname, path: a.pathname, hash: a.hash, at: Date.now() } satisfies Stored));
      } catch {}
      // a form on this same page (an anchor such as #product) hears it at once
      window.setTimeout(() => window.dispatchEvent(new Event("dukaat-arrival")), 0);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
