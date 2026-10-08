import { ROSE_REST, SEAL_ANGLES, SEAL_PETALS, roseLight } from "@/lib/foil";

/* === Waardepapier v6: the foil wreath of a seal (owner approved 9 Oct 2026) ===
   Drawn at rest in the window's light (top left); components/SealLight.tsx moves the light with the hand, or on a
   touch screen with the seal's place on the screen. Decorative. Styles: app/waardepapier.css. */
export function SealFoil({ className = "" }: { className?: string }) {
  return (
    <svg className={`seal-foil ${className}`} viewBox="0 0 132 132" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sf-hi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFF4D6" />
          <stop offset="1" stopColor="#C9A062" />
        </linearGradient>
      </defs>
      <g className="sf-b">{SEAL_PETALS.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="sf-h" fill="url(#sf-hi)">
        {SEAL_PETALS.map((d, i) => <path key={i} d={d} opacity={roseLight(SEAL_ANGLES[i], ROSE_REST, 0.7).toFixed(3)} />)}
      </g>
    </svg>
  );
}
