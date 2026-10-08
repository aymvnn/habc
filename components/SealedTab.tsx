"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* === Waardepapier v21: the seal in the tab (owner approved 9 Oct 2026) ===
   Once a letter has been sent (components/WaxSeal.tsx calls sealTab()), the icon in the browser's tab becomes a wax
   seal for the rest of the visit (sessionStorage "dukaat-sealed"); a new visit has the tulip again. Nothing in the
   tab's title changes. Next.js writes its own icon links into <head> (also after this has run, and again on a
   navigation), so every icon link is pointed at the seal, and a watch on <head> points any later one there too. */
const KEY = "dukaat-sealed";
const ICON = "/icon-sealed.svg";

const sealed = () => {
  try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; }
};

function apply() {
  if (!sealed()) return;
  document.head.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]').forEach((l) => {
    if (l.getAttribute("href") !== ICON) {
      l.setAttribute("href", ICON);
      l.setAttribute("type", "image/svg+xml");
      l.removeAttribute("sizes");
    }
  });
}

let watch: MutationObserver | null = null;
function keep() {
  apply();
  if (watch || !sealed()) return;
  watch = new MutationObserver(apply);
  watch.observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
}

export function sealTab() {
  try { sessionStorage.setItem(KEY, "1"); } catch {}
  keep();
}

export function SealedTab() {
  const pathname = usePathname();
  useEffect(() => { keep(); }, [pathname]);
  return null;
}
