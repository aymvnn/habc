import React, { useMemo } from "react";
import { random } from "remotion";
import { noise2D } from "@remotion/noise";
import { COLORS } from "./paths";

/* ------------------------------------------------------------------ */
/* Deboss / emboss filter                                               */
/* ------------------------------------------------------------------ */

/**
 * Letterpress look: an inner shadow on the bottom-right and an inner
 * highlight on the top-left of whatever it is applied to.
 * `depth` in viewBox units.
 */
export const DebossFilter: React.FC<{
  id: string;
  depth?: number;
  blur?: number;
  shadow?: number;
  highlight?: number;
}> = ({ id, depth = 14, blur = 10, shadow = 0.28, highlight = 0.9 }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
    {/* inner shadow */}
    <feGaussianBlur in="SourceAlpha" stdDeviation={blur} result="b1" />
    <feOffset in="b1" dx={depth} dy={depth * 1.2} result="o1" />
    <feComposite in="SourceAlpha" in2="o1" operator="arithmetic" k2="1" k3="-1" result="in1" />
    <feFlood floodColor="#2A1206" floodOpacity={shadow} />
    <feComposite in2="in1" operator="in" result="sh" />
    {/* inner highlight */}
    <feGaussianBlur in="SourceAlpha" stdDeviation={blur} result="b2" />
    <feOffset in="b2" dx={-depth * 0.7} dy={-depth * 0.8} result="o2" />
    <feComposite in="SourceAlpha" in2="o2" operator="arithmetic" k2="1" k3="-1" result="in2" />
    <feFlood floodColor="#FFFFFF" floodOpacity={highlight} />
    <feComposite in2="in2" operator="in" result="hl" />
    <feMerge>
      <feMergeNode in="SourceGraphic" />
      <feMergeNode in="sh" />
      <feMergeNode in="hl" />
    </feMerge>
  </filter>
);

/** Soft drop shadow for material scenes. */
export const ShadowFilter: React.FC<{ id: string; dy?: number; blur?: number; opacity?: number }> = ({
  id,
  dy = 26,
  blur = 26,
  opacity = 0.22,
}) => (
  <filter id={id} x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx={0} dy={dy} stdDeviation={blur} floodColor="#3A1A08" floodOpacity={opacity} />
  </filter>
);

/* ------------------------------------------------------------------ */
/* Animated gold                                                         */
/* ------------------------------------------------------------------ */

/**
 * A gold gradient whose light band travels, for a live foil feel.
 * Same user-space convention as the static gold (x 0..1 in layer space),
 * so it is a drop-in `goldId` for <LogoLayer>.
 * `phase` 0..1 moves the highlight from left to right.
 */
export const LiveGoldDefs: React.FC<{ id: string; phase: number; strength?: number }> = ({ id, phase, strength = 1 }) => {
  const p = Math.max(0.02, Math.min(0.98, phase));
  const hi = mixHex(COLORS.goldLight, "#FFF2D8", 0.7 * strength);
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1,0,0,-1,0,0)">
      <stop offset="0" stopColor={COLORS.goldLight} />
      <stop offset={Math.max(0, p - 0.18)} stopColor={COLORS.goldLight} />
      <stop offset={p} stopColor={hi} />
      <stop offset={Math.min(1, p + 0.16)} stopColor={COLORS.goldDark} />
      <stop offset="1" stopColor={COLORS.goldDark} />
    </linearGradient>
  );
};

/** Brushed-metal texture to overlay on gold shapes (use with a clipPath). */
export const BrushFilter: React.FC<{ id: string; seed?: number }> = ({ id, seed = 5 }) => (
  <filter id={id}>
    <feTurbulence type="fractalNoise" baseFrequency="0.004 0.6" numOctaves="2" seed={seed} result="t" />
    <feColorMatrix type="saturate" values="0" />
    <feComponentTransfer>
      <feFuncA type="linear" slope="0.35" />
    </feComponentTransfer>
  </filter>
);

/* ------------------------------------------------------------------ */
/* Camera shake                                                          */
/* ------------------------------------------------------------------ */

/** Decaying noise-based shake starting at `start`. Returns px offsets. */
export const shake = (frame: number, start: number, amp: number, decayFrames: number, seed = 1): { x: number; y: number; r: number } => {
  if (frame < start) return { x: 0, y: 0, r: 0 };
  const t = (frame - start) / decayFrames;
  if (t > 1) return { x: 0, y: 0, r: 0 };
  const env = Math.pow(1 - t, 2.2);
  const f = frame * 0.9;
  return {
    x: noise2D(`sx${seed}`, f, 0) * amp * env,
    y: noise2D(`sy${seed}`, 0, f) * amp * env,
    r: noise2D(`sr${seed}`, f, f) * 0.6 * env,
  };
};

/* ------------------------------------------------------------------ */
/* Particle burst                                                        */
/* ------------------------------------------------------------------ */

export interface BurstProps {
  frame: number;
  start: number;
  origin: [number, number];
  count?: number;
  /** initial speed range in units/frame */
  speed?: [number, number];
  gravity?: number;
  life?: number;
  color?: string;
  color2?: string;
  size?: [number, number];
  seed?: string;
  /** limit directions to an angular range (radians), default all around */
  spread?: [number, number];
}

/** Gold dust burst with gravity and air drag. Deterministic per seed. */
export const Burst: React.FC<BurstProps> = ({
  frame,
  start,
  origin,
  count = 90,
  speed = [18, 70],
  gravity = 1.6,
  life = 70,
  color = COLORS.goldLight,
  color2 = COLORS.goldDark,
  size = [4, 16],
  seed = "b",
  spread = [0, Math.PI * 2],
}) => {
  const parts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = spread[0] + random(`${seed}a${i}`) * (spread[1] - spread[0]);
        const v = speed[0] + random(`${seed}v${i}`) * (speed[1] - speed[0]);
        return {
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          r: size[0] + random(`${seed}r${i}`) * (size[1] - size[0]),
          dark: random(`${seed}c${i}`) > 0.5,
          spin: (random(`${seed}s${i}`) - 0.5) * 30,
          delay: random(`${seed}d${i}`) * 4,
        };
      }),
    [count, seed, speed, size, spread],
  );
  const t = frame - start;
  if (t < 0 || t > life) return null;
  const drag = 0.955;
  return (
    <g>
      {parts.map((p, i) => {
        const tt = Math.max(0, t - p.delay);
        // closed form with drag: x = v * (1 - drag^t) / (1 - drag)
        const k = (1 - Math.pow(drag, tt)) / (1 - drag);
        const x = origin[0] + p.vx * k;
        const y = origin[1] + p.vy * k + 0.5 * gravity * tt * tt;
        const fade = 1 - Math.pow(tt / life, 3);
        const rr = p.r * (0.6 + 0.4 * fade);
        return (
          <rect
            key={i}
            x={x - rr / 2}
            y={y - rr / 2}
            width={rr}
            height={rr * 0.55}
            rx={rr * 0.15}
            fill={p.dark ? color2 : color}
            opacity={Math.max(0, fade)}
            transform={`rotate(${p.spin * tt} ${x} ${y})`}
          />
        );
      })}
    </g>
  );
};

/* ------------------------------------------------------------------ */
/* helpers                                                               */
/* ------------------------------------------------------------------ */

export function mixHex(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (s: number) => {
    const x = (pa >> s) & 255;
    const y = (pb >> s) & 255;
    return Math.round(x + (y - x) * t);
  };
  return `#${((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, "0")}`;
}
