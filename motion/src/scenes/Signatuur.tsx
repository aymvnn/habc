import React from "react";
import { useCurrentFrame, AbsoluteFill } from "remotion";
import { Stage, LogoLayer, Grain, Vignette, Glow, L, Layout, LAYOUTS, yPx } from "../logo/Layers";
import { COLORS, MARK, WORD, LayerName } from "../logo/paths";
import { seg, easeInOut, easeOut, easeOutExpo, mix } from "../util";

/**
 * Concept 5 — Signatuur
 * The logo is already there, hidden. A soft light sweeps diagonally and
 * reveals the mark as candlelight on a coin. A specular highlight travels
 * over the gold, the letters come out of a blur one by one, the bar ends as
 * a short flare. A hairline gold rule opens beneath.
 * `light` runs the same reveal on paper instead of night.
 */

const SWEEP_FROM = 0;
const SWEEP_TO = 70;
const LETTERS = 26;
const BAR = 74;
const RULE = 88;

export interface SignatuurProps {
  layout?: Layout;
  light?: boolean;
}

export const Signatuur: React.FC<SignatuurProps> = ({ layout = "landscape", light = false }) => {
  const frame = useCurrentFrame();
  const portrait = layout !== "landscape";
  const markT = LAYOUTS[layout].markT || undefined;

  // reveal edge travels across the mark, slanted 22°
  const sweep = seg(frame, SWEEP_FROM, SWEEP_TO, easeInOut);
  const edgeX = mix(1050, 2650, sweep);
  // specular band trails the reveal edge
  const spec = seg(frame, 14, 96, easeInOut);
  const specX = mix(600, 2700, spec);

  const barFlare = (1 - seg(frame, BAR, BAR + 26, easeOut)) * 1;
  const barIn = seg(frame, BAR - 6, BAR + 6);
  const ruleW = seg(frame, RULE, RULE + 30, easeOutExpo);

  const letterStyle = (i: number): { opacity: number; blur: number; dy: number } => {
    const p = seg(frame, LETTERS + i * 8, LETTERS + i * 8 + 26, easeOut);
    return { opacity: p, blur: mix(34, 0, p), dy: mix(24, 0, p) };
  };

  const bar = L.bar.bbox;
  const canvasH = portrait ? 1920 : 1080;
  const ruleTop = portrait ? yPx(layout, canvasH, 1650) + 70 : canvasH - 150;
  const flareColor = light ? COLORS.goldLight : "#FFE9BF";
  const specColor = light ? "#FFFBF2" : "#FFF3DC";

  return (
    <Stage
      background={light ? COLORS.paper : "#120306"}
      width={1320}
      layout={layout}
      behind={
        light ? (
          <>
            <Glow opacity={0.55 * Math.max(0.4, sweep)} color="#F3E7CF" y="42%" size="55% 50%" />
          </>
        ) : (
          <>
            <AbsoluteFill style={{ background: `linear-gradient(180deg, #1B0409 0%, #120306 55%, #0B0204 100%)` }} />
            <Glow opacity={0.22 * Math.max(0.35, sweep)} color="#8A5A26" y="40%" size="40% 55%" />
            <Glow opacity={0.16 * seg(frame, LETTERS, LETTERS + 40)} color="#7A3A2A" y="74%" size="55% 30%" />
          </>
        )
      }
      overlay={
        <>
          <Grain opacity={light ? 0.05 : 0.12} seed={11} />
          {!light && <Vignette strength={0.8} />}
          <AbsoluteFill style={{ alignItems: "center" }}>
            <div
              style={{
                position: "absolute",
                top: ruleTop,
                width: 640 * ruleW,
                height: 1,
                background: light ? COLORS.bar : COLORS.goldLight,
                opacity: 0.85,
              }}
            />
          </AbsoluteFill>
        </>
      }
    >
      <defs>
        {/* reveal mask: white = visible, soft slanted edge */}
        <linearGradient
          id="sig-reveal"
          gradientUnits="userSpaceOnUse"
          x1={edgeX - 900}
          y1={0}
          x2={edgeX + 260}
          y2={0}
          gradientTransform={`rotate(-22 ${edgeX} 500)`}
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.72" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id="sig-mask">
          <rect x={-400} y={-400} width={4000} height={2500} fill="url(#sig-reveal)" />
        </mask>

        {/* specular band */}
        <linearGradient
          id="sig-spec"
          gradientUnits="userSpaceOnUse"
          x1={specX - 260}
          y1={0}
          x2={specX + 260}
          y2={0}
          gradientTransform={`rotate(-22 ${specX} 500)`}
        >
          <stop offset="0" stopColor="#000" />
          <stop offset="0.5" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id="sig-spec-mask">
          <rect x={-400} y={-400} width={4000} height={2500} fill="url(#sig-spec)" />
        </mask>

        <filter id="sig-blur-bar" x="-20%" y="-300%" width="140%" height="700%">
          <feGaussianBlur stdDeviation={28} />
        </filter>
        <filter id="sig-flare" x="-50%" y="-800%" width="200%" height="1700%">
          <feGaussianBlur stdDeviation={60} />
        </filter>
      </defs>

      {/* the mark, revealed by the sweep (mask applied in mark space, then laid out) */}
      <g transform={markT}>
        <g mask="url(#sig-mask)">
          {MARK.map((n) => (
            <LogoLayer key={n} name={n} />
          ))}
        </g>

        {/* specular highlight over the gold */}
        <g mask="url(#sig-spec-mask)" opacity={light ? 0.7 : 0.55}>
          {["bandShort", "leafMid", "bandLong", "flame"].map((n) => (
            <LogoLayer key={n} name={n as LayerName} fill={specColor} />
          ))}
        </g>
      </g>

      {/* letters out of a blur */}
      {WORD.map((n, i) => {
        const s = letterStyle(i);
        return (
          <LogoLayer
            key={n}
            name={n}
            opacity={s.opacity}
            transform={`translate(0 ${s.dy})`}
            style={{ filter: s.blur > 0.5 ? `blur(${s.blur}px)` : undefined }}
          />
        );
      })}

      {/* bar: flare that settles */}
      {frame >= BAR - 6 && (
        <>
          <rect
            x={bar.x - 120}
            y={bar.y + 10}
            width={bar.w + 240}
            height={bar.h - 20}
            fill={flareColor}
            opacity={barFlare * 0.9}
            filter="url(#sig-flare)"
          />
          <LogoLayer name="bar" fill={light ? "#EBCB98" : "#FFF3DC"} opacity={barFlare} filter="url(#sig-blur-bar)" />
          <LogoLayer name="bar" opacity={barIn} />
        </>
      )}
    </Stage>
  );
};

export const SIGNATUUR_DURATION = 130;
