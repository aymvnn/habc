/* === Werkplaatsen w4: the foil rosette of the Executive card — geometry and light (shared by FoilRose and TierLight) ===
   32 narrow petals round the card's tulip, each a facet with its own angle, as in real security foil: a facet flares
   when the light comes along its own direction (or the opposite one), so two opposite petals flare and the flare
   turns round the tulip as the light moves. Angles in radians, on screen (y runs down). */
export const ROSE_N = 32;
/** the window's light, from the top left: the resting light when no hand moves it */
export const ROSE_REST = -2.36;
const R0 = 47, R1 = 98, HALF = 0.075;

export const ROSE_ANGLES = Array.from({ length: ROSE_N }, (_, i) => (i / ROSE_N) * Math.PI * 2);

export const ROSE_PETALS = ROSE_ANGLES.map((t) => {
  const rm = ((R0 + R1) / 2) * 1.04;
  const P = (r: number, a: number) => `${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`;
  return `M${P(R0, t)}Q${P(rm, t + HALF)} ${P(R1, t)}Q${P(rm, t - HALF)} ${P(R0, t)}Z`;
});

/** how bright one petal is: angle of the petal, direction of the light, strength of the light (0..1) */
export const roseLight = (petal: number, light: number, power: number) =>
  Math.pow(Math.abs(Math.cos(petal - light)), 14) * power * 0.95 + 0.04;

/* === Waardepapier v6 (owner approved 9 Oct 2026): the same foil in every seal ===
   A wreath of 40 narrow petals between the seal's tulip and its ring text, in the seal's own 132×132 box. */
export const SEAL_N = 40;
export const SEAL_ANGLES = Array.from({ length: SEAL_N }, (_, i) => (i / SEAL_N) * Math.PI * 2);
export const SEAL_PETALS = SEAL_ANGLES.map((t) => {
  const r0 = 30, r1 = 43, half = 0.05, rm = ((r0 + r1) / 2) * 1.03;
  const P = (r: number, a: number) => `${(66 + r * Math.cos(a)).toFixed(2)},${(66 + r * Math.sin(a)).toFixed(2)}`;
  return `M${P(r0, t)}Q${P(rm, t + half)} ${P(r1, t)}Q${P(rm, t - half)} ${P(r0, t)}Z`;
});
