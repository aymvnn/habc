/* === Muntregister: one drawn arrow (a4-3) ===
   The one arrow of the site: a hairline shaft with an open head, drawn in the text colour, so it is the same in every
   language and on every system (the "→" glyph fell back to a system font in /ar). Decorative only (aria-hidden): the
   link's own words carry the meaning. Mirrored in right-to-left pages through --dir (app/muntregister.css, .arw).
   Since the UI assessment (UI-05, owner 4 Oct 2026) the hero's two keys use it too: one arrow everywhere. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className ? `arw ${className}` : "arw"}
      viewBox="0 0 22 10"
      width="22"
      height="10"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 5H20M15.5 1 20 5l-4.5 4" fill="none" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
