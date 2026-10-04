"use client";

import { useEffect, useRef, useState } from "react";
import { DEFAULT_BEWEGING, DEFAULT_OVERGANG } from "./motion";

/* === Muntregister: review toggle (development only) ===
   A small "Proef" button bottom-left, above the Next dev badge. It switches three switches on <html> so the owner can
   judge the proposals on localhost: data-beweging (rustig | extra), data-slot (donker | licht), data-overgang (uit | aan),
   data-kader (haarlijn | rol: the photo frames per role of a3-4, for after the grading; slice 8).
   The choice is kept in localStorage and put back before paint by the inline script in app/[locale]/layout.tsx.
   Never rendered in production (layout.tsx checks NODE_ENV, and so does this file). */

type Key = "beweging" | "slot" | "overgang" | "kader" | "brief";
const TOGGLES: { key: Key; label: string; options: [string, string]; def: string }[] = [
  // slice 9: the motion default comes from one constant (components/motion.ts), shared with the layout
  { key: "beweging", label: "Beweging", options: ["rustig", "extra"], def: DEFAULT_BEWEGING },
  { key: "slot", label: "Paginaslot", options: ["donker", "licht"], def: "licht" },
  { key: "overgang", label: "Overgang", options: ["uit", "aan"], def: DEFAULT_OVERGANG },
  { key: "kader", label: "Fotokader", options: ["haarlijn", "rol"], def: "haarlijn" },
  /* signature 6: "proef" lets a sent form fold into the sealed letter even while e-mail (Resend) is not configured */
  { key: "brief", label: "Brief", options: ["echt", "proef"], def: "echt" },
];
const store = (k: Key) => `dukaat-proef-${k}`;

const CSS = `
.rvw{ position:fixed; left:16px; bottom:72px; z-index:70; font-family:var(--display); font-size:12px; color:var(--ink) }
.rvw-btn{ display:inline-flex; align-items:center; gap:8px; min-height:32px; padding:0 12px; border:1px solid var(--line-strong); border-radius:2px; background:var(--paper-lift); color:var(--ink); font:inherit; font-weight:700; letter-spacing:.08em; text-transform:uppercase; cursor:pointer; box-shadow:0 8px 24px -16px rgba(36,20,24,.5); transition:background-color 200ms ease, scale 140ms cubic-bezier(0.23,1,0.32,1) }
.rvw-btn:active{ scale:.97 }
.rvw-btn i{ width:6px; height:6px; border-radius:50%; background:var(--wine); font-style:normal }
.rvw-btn:focus-visible,.rvw-opt:focus-visible{ outline:2px solid var(--wine); outline-offset:3px }
.rvw-card{ position:absolute; left:0; bottom:calc(100% + 8px); width:232px; padding:12px; background:var(--paper-lift); border:1px solid var(--line-strong); border-radius:2px; box-shadow:0 16px 40px -24px rgba(36,20,24,.55); display:grid; gap:10px }
.rvw-card[hidden]{ display:none }
.rvw-g{ display:grid; gap:6px; margin:0; padding:0; border:0 }
.rvw-l{ font-weight:600; letter-spacing:.12em; text-transform:uppercase; font-size:10.5px; color:var(--muted) }
.rvw-seg{ display:grid; grid-template-columns:1fr 1fr; border:1px solid var(--line-strong); border-radius:2px; overflow:hidden }
.rvw-opt{ min-height:32px; border:0; background:transparent; color:var(--ink-soft); font:inherit; font-weight:600; cursor:pointer; transition:background-color 200ms ease, color 200ms ease }
.rvw-opt + .rvw-opt{ border-inline-start:1px solid var(--line-strong) }
.rvw-opt[aria-pressed="true"]{ background:var(--wine); color:var(--paper) }
@media (hover:hover) and (pointer:fine){ .rvw-opt:not([aria-pressed="true"]):hover{ background:var(--paper-deep); color:var(--ink) } }
@media print{ .rvw{ display:none } }
`;

export function ReviewPanel() {
  const [open, setOpen] = useState(false);
  const [vals, setVals] = useState<Record<Key, string>>({ beweging: DEFAULT_BEWEGING, slot: "licht", overgang: DEFAULT_OVERGANG, kader: "haarlijn", brief: "echt" });
  const btn = useRef<HTMLButtonElement>(null);

  // read back what the pre-paint script already put on <html>
  useEffect(() => {
    const h = document.documentElement;
    setVals((v) => {
      const n = { ...v };
      for (const t of TOGGLES) n[t.key] = h.getAttribute(`data-${t.key}`) ?? t.def;
      return n;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btn.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (process.env.NODE_ENV === "production") return null;

  const choose = (k: Key, v: string) => {
    document.documentElement.setAttribute(`data-${k}`, v);
    try { localStorage.setItem(store(k), v); } catch {}
    setVals((p) => ({ ...p, [k]: v }));
  };

  const changed = TOGGLES.some((t) => vals[t.key] !== t.def);

  return (
    <div className="rvw" data-lenis-prevent>
      <style>{CSS}</style>
      <div className="rvw-card" id="rvw-card" role="group" aria-label="Proefinstellingen" hidden={!open}>
        {TOGGLES.map((t) => (
          <div className="rvw-g" key={t.key} role="group" aria-label={t.label}>
            <span className="rvw-l" aria-hidden="true">{t.label}</span>
            <div className="rvw-seg">
              {t.options.map((o) => (
                <button
                  key={o}
                  type="button"
                  className="rvw-opt"
                  aria-pressed={vals[t.key] === o}
                  aria-label={`${t.label}: ${o}`}
                  onClick={() => choose(t.key, o)}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        ref={btn}
        type="button"
        className="rvw-btn"
        aria-expanded={open}
        aria-controls="rvw-card"
        aria-label="Proefinstellingen openen of sluiten"
        onClick={() => setOpen((o) => !o)}
      >
        Proef{changed && <i aria-hidden="true" />}
      </button>
    </div>
  );
}
