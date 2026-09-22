import React, { useMemo } from "react";
import { useCurrentFrame, random, Easing } from "remotion";
import { evolvePath } from "@remotion/paths";
import { Stage, LogoLayer, Grain, Vignette, Glow, Layout, LAYOUTS } from "../logo/Layers";
import { COLORS, LAYERS, LayerName, MARK } from "../logo/paths";
import { seg, easeInOut, mix } from "../util";

/**
 * Concept 3 — Ambachtelijke lijn
 * A gold line engraves the contours like a die-cutter. When the contour
 * closes the fill floods upward and colour arrives. Gold dust drifts along.
 * The stroke stays faintly as an engraved edge.
 * `light` puts the same choreography on paper instead of deep burgundy.
 */

const ORDER: { name: LayerName; from: number; len: number }[] = [
  { name: "petalL", from: 0, len: 42 },
  { name: "petalR", from: 6, len: 42 },
  { name: "bandLong", from: 14, len: 40 },
  { name: "bandShort", from: 22, len: 30 },
  { name: "leafMid", from: 26, len: 30 },
  { name: "flame", from: 32, len: 30 },
  { name: "D", from: 40, len: 34 },
  { name: "U", from: 48, len: 34 },
  { name: "KAA", from: 56, len: 46 },
  { name: "T", from: 70, len: 30 },
  { name: "bar", from: 92, len: 14 },
];

const FLOOD_FROM = 84;
const FLOOD_TO = 130;

export interface LijnProps {
  layout?: Layout;
  light?: boolean;
}

export const Lijn: React.FC<LijnProps> = ({ layout = "landscape", light = false }) => {
  const frame = useCurrentFrame();
  const markT = LAYOUTS[layout].markT || undefined;
  const isMark = (n: LayerName) => (MARK as readonly LayerName[]).includes(n);
  const portrait = layout !== "landscape";

  const dust = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        x: random(`dx${i}`) * (portrait ? 3600 : 3600) - 200,
        y: random(`dy${i}`) * (portrait ? 3200 : 1900) - (portrait ? 900 : 100),
        r: 3 + random(`dr${i}`) * 9,
        v: 0.4 + random(`dv${i}`) * 1.2,
        ph: random(`dp${i}`) * Math.PI * 2,
        drift: (random(`dd${i}`) - 0.5) * 0.8,
      })),
    [portrait],
  );

  const flood = seg(frame, FLOOD_FROM, FLOOD_TO, easeInOut);
  const floodY = mix(portrait ? 1750 : 1700, portrait ? -800 : -100, flood); // rising water line
  const strokeFade = mix(1, light ? 0.5 : 0.45, seg(frame, FLOOD_TO, FLOOD_TO + 20));
  const dustO = 1 - seg(frame, 120, 150);

  const strokeColor = light ? COLORS.goldDark : COLORS.goldLight;
  const dustColor = light ? COLORS.goldDark : COLORS.goldLight;
  const wrapH = portrait ? 3200 : 2000;
  const wrapOff = portrait ? 900 : 150;

  return (
    <Stage
      background={light ? COLORS.paper : COLORS.wineNight}
      width={1400}
      layout={layout}
      behind={light ? <Glow opacity={0.5} color="#F1E6D0" y="45%" size="60% 55%" /> : <Glow opacity={0.28} color="#7A4E1E" y="40%" size="45% 60%" />}
      overlay={
        light ? (
          <Grain opacity={0.06} seed={7} />
        ) : (
          <>
            <Grain opacity={0.14} seed={7} />
            <Vignette strength={0.75} />
          </>
        )
      }
    >
      <defs>
        <clipPath id="lijn-flood">
          <rect x={-400} y={floodY} width={4000} height={3600} />
        </clipPath>
      </defs>

      {/* gold dust */}
      <g opacity={dustO * (light ? 0.7 : 1)}>
        {dust.map((d, i) => {
          const y = d.y - frame * d.v * 2.2;
          const x = d.x + Math.sin(frame * 0.05 + d.ph) * 18 + frame * d.drift;
          const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(frame * 0.18 + d.ph));
          return <circle key={i} cx={x} cy={((y % wrapH) + wrapH) % wrapH - wrapOff} r={d.r} fill={dustColor} opacity={0.5 * tw} />;
        })}
      </g>

      {/* flooded fills */}
      <g clipPath="url(#lijn-flood)">
        {LAYERS.map((l) => (
          <LogoLayer key={l.name} name={l.name} transform={isMark(l.name) ? markT : undefined} />
        ))}
      </g>

      {/* engraved strokes */}
      {ORDER.map(({ name, from, len }) => {
        const p = seg(frame, from, from + len, Easing.inOut(Easing.sin));
        if (p <= 0) return null;
        const layer = LAYERS.find((x) => x.name === name)!;
        const ev = evolvePath(p, layer.d);
        return (
          <LogoLayer
            key={name}
            name={name}
            transform={isMark(name) ? markT : undefined}
            fill="none"
            stroke={strokeColor}
            strokeWidth={4.2}
            strokeOpacity={strokeFade}
            strokeDasharray={ev.strokeDasharray}
            strokeDashoffset={ev.strokeDashoffset}
          />
        );
      })}
    </Stage>
  );
};

export const LIJN_DURATION = 160;
