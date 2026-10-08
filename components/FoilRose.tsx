import { ROSE_ANGLES, ROSE_PETALS, ROSE_REST, roseLight } from "@/lib/foil";

/* === Werkplaatsen w4: the foil rosette on the Executive card (owner approved 8 Oct 2026) ===
   Rendered at rest in the window's light (top left); components/TierLight.tsx moves the light with the hand, or on a
   touch screen with the card's place on the screen. Styles: app/werkplaatsen.css. Decorative. */
export function FoilRose() {
  return (
    <svg className="tc-rose" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fr-hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF7E4" />
          <stop offset="1" stopColor="#E9C88E" />
        </linearGradient>
      </defs>
      <g className="fr-b">{ROSE_PETALS.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="fr-h" fill="url(#fr-hi)">
        {ROSE_PETALS.map((d, i) => <path key={i} d={d} opacity={roseLight(ROSE_ANGLES[i], ROSE_REST, 0.75).toFixed(3)} />)}
      </g>
    </svg>
  );
}
