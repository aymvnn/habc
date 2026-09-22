import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, L, Layer, LayerName, VIEWBOX } from "./paths";
export { L, COLORS };

/* ------------------------------------------------------------------ */
/* Geometry helpers (all in viewBox units, 0 0 3160 1650)              */
/* ------------------------------------------------------------------ */

/** Uniform scale factor of a layer's own matrix (used to size strokes). */
export const scaleOf = (layer: Layer): number => {
  const [a, b, c, d] = layer.matrix;
  return Math.sqrt(Math.abs(a * d - b * c));
};

/** Wrap an SVG transform so that it happens around a pivot point. */
export const about = (ox: number, oy: number, t: string): string =>
  `translate(${ox} ${oy}) ${t} translate(${-ox} ${-oy})`;

export const matrixStr = (layer: Layer): string =>
  `matrix(${layer.matrix.join(",")})`;

export const center = (name: LayerName): [number, number] => {
  const b = L[name].bbox;
  return [b.x + b.w / 2, b.y + b.h / 2];
};

/** A point inside a layer's bbox given as fractions (0..1). */
export const pt = (name: LayerName, fx: number, fy: number): [number, number] => {
  const b = L[name].bbox;
  return [b.x + b.w * fx, b.y + b.h * fy];
};

/* ------------------------------------------------------------------ */
/* Gradient definition shared by all gold layers                        */
/* ------------------------------------------------------------------ */

/**
 * The gold gradient in the source file is defined in userSpaceOnUse from
 * x=0 to x=1, and every gold path lives in a local space spanning x 0..1.
 * One definition therefore serves all four gold layers.
 */
export const GoldDefs: React.FC<{ id?: string; light?: string; dark?: string }> = ({
  id = "dukaat-gold",
  light = COLORS.goldLight,
  dark = COLORS.goldDark,
}) => (
  <defs>
    <linearGradient
      id={id}
      x1="0"
      y1="0"
      x2="1"
      y2="0"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(1,0,0,-1,0,0)"
    >
      <stop offset="0" stopColor={light} />
      <stop offset="1" stopColor={dark} />
    </linearGradient>
  </defs>
);

/* ------------------------------------------------------------------ */
/* Single layer                                                          */
/* ------------------------------------------------------------------ */

export interface LayerProps {
  name: LayerName;
  /** Transform applied in viewBox space, e.g. about(x, y, "rotate(20)") */
  transform?: string;
  opacity?: number;
  /** Override the fill. "none" for outline-only. Defaults to brand colour. */
  fill?: string;
  goldId?: string;
  stroke?: string;
  /** Stroke width in viewBox units (independent of the layer's own scale). */
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeDashoffset?: string | number;
  strokeOpacity?: number;
  fillOpacity?: number;
  style?: React.CSSProperties;
  clipPath?: string;
  filter?: string;
}

export const LogoLayer: React.FC<LayerProps> = ({
  name,
  transform,
  opacity = 1,
  fill,
  goldId = "dukaat-gold",
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeDashoffset,
  strokeOpacity,
  fillOpacity,
  style,
  clipPath,
  filter,
}) => {
  const layer = L[name];
  const defaultFill =
    layer.kind === "gold"
      ? `url(#${goldId})`
      : layer.kind === "bar"
        ? COLORS.bar
        : COLORS.wine;
  const s = scaleOf(layer);
  return (
    <g
      transform={transform}
      opacity={opacity}
      style={style}
      clipPath={clipPath}
      filter={filter}
    >
      <g transform={matrixStr(layer)}>
        <path
          d={layer.d}
          fill={fill ?? defaultFill}
          fillOpacity={fillOpacity}
          stroke={stroke}
          strokeWidth={strokeWidth !== undefined ? strokeWidth / s : undefined}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeOpacity={strokeOpacity}
          strokeLinejoin="round"
          strokeLinecap="round"
          fillRule={layer.kind === "gold" || name === "petalL" || name === "petalR" ? "nonzero" : "evenodd"}
        />
      </g>
    </g>
  );
};

/* ------------------------------------------------------------------ */
/* Stage: centres the logo SVG on a coloured canvas                     */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Layouts                                                               */
/* ------------------------------------------------------------------ */

export type Layout = "landscape" | "portrait" | "portrait-mark" | "portrait-full";

/** Portrait lockup: the mark is enlarged 1.45× and lifted above the wordmark. */
export const MARK_T_PORTRAIT = `translate(0 -150) ${about(1578, 996, "scale(1.45)")}`;

export interface LayoutSpec {
  viewBox: { x: number; y: number; w: number; h: number };
  width: number;
  /** transform for every mark-related element ("" for none) */
  markT: string;
}

export const LAYOUTS: Record<Layout, LayoutSpec> = {
  landscape: { viewBox: { x: -200, y: -200, w: 3560, h: 2050 }, width: 1400 * (3560 / 3160), markT: "" },
  portrait: { viewBox: { x: -80, y: -720, w: 3320, h: 2480 }, width: 960 * (3320 / 3160), markT: MARK_T_PORTRAIT },
  "portrait-mark": { viewBox: { x: 1000, y: -130, w: 1160, h: 1280 }, width: 900, markT: "" },
  /** the SVG covers the whole 1080×1920 canvas; 1 px = 3.519 units; lockup (y −584…1650) centred on screen */
  "portrait-full": { viewBox: { x: -320, y: -2845, w: 3800, h: 6756 }, width: 1080, markT: MARK_T_PORTRAIT },
};

/** Pixel y on the canvas for a viewBox y, given canvas height and layout. */
export const yPx = (layout: Layout, canvasH: number, unitY: number): number => {
  const s = LAYOUTS[layout];
  const h = (s.width * s.viewBox.h) / s.viewBox.w;
  const top = (canvasH - h) / 2;
  return top + ((unitY - s.viewBox.y) / s.viewBox.h) * h;
};

/** Full-canvas viewBox for the portrait-full layout, handy for full-bleed drawing. */
export const FULL = LAYOUTS["portrait-full"].viewBox;
/** centre of the phone screen in portrait-full units */
export const FULL_C: [number, number] = [FULL.x + FULL.w / 2, FULL.y + FULL.h / 2];

export interface StageProps {
  /** Explicit layout; overrides width/pad when set to portrait variants. */
  layout?: Layout;
  background?: string;
  /** Rendered width of the logo in px (of a 1920 canvas). */
  width?: number;
  /** Extra viewBox padding so effects can overflow the logo bounds. */
  pad?: number;
  children?: React.ReactNode;
  /** Vertical shift of the SVG in px, e.g. to leave room for a tagline. */
  shiftY?: number;
  svgStyle?: React.CSSProperties;
  /** Content rendered before the svg (backdrops) */
  behind?: React.ReactNode;
  /** Content rendered after the svg (HTML overlays) */
  overlay?: React.ReactNode;
}

export const Stage: React.FC<StageProps> = ({
  background = COLORS.paper,
  width = 1400,
  pad = 200,
  children,
  shiftY = 0,
  svgStyle,
  behind,
  overlay,
  layout = "landscape",
}) => {
  const isPortrait = layout !== "landscape";
  const spec = LAYOUTS[layout];
  const vx = isPortrait ? spec.viewBox.x : -pad;
  const vy = isPortrait ? spec.viewBox.y : -pad;
  const vw = isPortrait ? spec.viewBox.w : VIEWBOX.w + pad * 2;
  const vh = isPortrait ? spec.viewBox.h : VIEWBOX.h + pad * 2;
  const w = isPortrait ? spec.width : (width * vw) / VIEWBOX.w;
  return (
    <AbsoluteFill style={{ background }}>
      {behind}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <svg
          viewBox={`${vx} ${vy} ${vw} ${vh}`}
          width={w}
          height={(w * vh) / vw}
          style={{ overflow: "visible", transform: `translateY(${shiftY}px)`, ...svgStyle }}
        >
          <GoldDefs />
          {children}
        </svg>
      </AbsoluteFill>
      {overlay}
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* Backdrops                                                             */
/* ------------------------------------------------------------------ */

/** Soft paper grain using an SVG turbulence filter. */
export const Grain: React.FC<{ opacity?: number; seed?: number }> = ({ opacity = 0.08, seed = 3 }) => (
  <AbsoluteFill style={{ opacity, mixBlendMode: "multiply", pointerEvents: "none" }}>
    <svg width="100%" height="100%">
      <filter id={`grain-${seed}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
    </svg>
  </AbsoluteFill>
);

/** Dark vignette for the night-mode scenes. */
export const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.7 }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(ellipse 70% 65% at 50% 48%, rgba(0,0,0,0) 0%, rgba(0,0,0,${strength}) 100%)`,
      pointerEvents: "none",
    }}
  />
);

/** Warm glow behind the mark. */
export const Glow: React.FC<{ opacity?: number; color?: string; y?: string; size?: string }> = ({
  opacity = 0.35,
  color = "#B3894A",
  y = "38%",
  size = "38% 55%",
}) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(ellipse ${size} at 50% ${y}, ${color} 0%, rgba(0,0,0,0) 70%)`,
      opacity,
      pointerEvents: "none",
    }}
  />
);
