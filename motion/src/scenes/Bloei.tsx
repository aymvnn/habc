import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Stage, LogoLayer, about, pt, Grain, center, Layout, LAYOUTS } from "../logo/Layers";
import { COLORS, WORD, MARK, L, LayerName } from "../logo/paths";
import { seg, sp, easeInOut, mix } from "../util";

/**
 * Concept 2 — Bloei
 * The mark starts as a closed bud, the petals open with staggered springs,
 * the flame rises last. Afterwards the mark breathes and a shimmer travels
 * over the gold. `loopOnly` renders just the breathing loop (seamless).
 */

const AXIS_X = 1578;
const GROUND_Y = 996;
export const BLOEI_LOOP_FRAMES = 180; // 6 s @ 30 fps, seamless

export interface BloeiProps {
  loopOnly?: boolean;
  layout?: Layout;
  /** Only the tulip, no wordmark. */
  markOnly?: boolean;
}

/** Breathing + shimmer, phase 0..1 (seamless when phase wraps). */
const Idle: React.FC<{ phase: number; enter: number; markT?: string; markOnly: boolean }> = ({
  phase,
  enter,
  markT,
  markOnly,
}) => {
  const breath = 1 + 0.018 * Math.sin(phase * Math.PI * 2) * enter;
  const tilt = 0.6 * Math.sin(phase * Math.PI * 2 + 1.2) * enter;
  // shimmer band sweeps from left to right once per loop
  const sx = mix(700, 2500, phase);
  return (
    <>
      <defs>
        <clipPath id="bloei-shimmer">
          <polygon points={`${sx},-100 ${sx + 260},-100 ${sx - 340},1100 ${sx - 600},1100`} />
        </clipPath>
      </defs>
      <g transform={markT}>
        <g transform={about(AXIS_X, GROUND_Y, `scale(${breath}) rotate(${tilt})`)}>
          {MARK.map((n) => (
            <LogoLayer key={n} name={n} />
          ))}
          <g clipPath="url(#bloei-shimmer)" opacity={0.45 * enter}>
            {["bandShort", "leafMid", "bandLong", "flame"].map((n) => (
              <LogoLayer key={n} name={n as LayerName} fill="#FFF7E6" />
            ))}
          </g>
        </g>
      </g>
      {!markOnly && (
        <>
          {WORD.map((n) => (
            <LogoLayer key={n} name={n} />
          ))}
          <LogoLayer name="bar" />
        </>
      )}
    </>
  );
};

export const Bloei: React.FC<BloeiProps> = ({ loopOnly = false, layout = "landscape", markOnly = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const markT = LAYOUTS[layout].markT || undefined;

  const stage = (children: React.ReactNode) => (
    <Stage background={COLORS.paper} width={1420} layout={layout} overlay={<Grain opacity={0.05} />}>
      {children}
    </Stage>
  );

  if (loopOnly) {
    return stage(<Idle phase={(frame % BLOEI_LOOP_FRAMES) / BLOEI_LOOP_FRAMES} enter={1} markT={markT} markOnly={markOnly} />);
  }

  /* -------- bloom -------- */
  const pL = sp(frame, fps, 0, { damping: 13, stiffness: 60, mass: 1.1 });
  const pR = sp(frame, fps, 4, { damping: 13, stiffness: 60, mass: 1.1 });
  const bLong = sp(frame, fps, 14, { damping: 14, stiffness: 70 });
  const bShort = sp(frame, fps, 22, { damping: 14, stiffness: 75 });
  const leaf = sp(frame, fps, 26, { damping: 15, stiffness: 80 });
  const flame = sp(frame, fps, 36, { damping: 12, stiffness: 70 });

  const pivotL = pt("petalL", 1, 1);
  const pivotR = pt("petalR", 0, 1);
  const flameC = center("flame");

  /* -------- wordmark: tracking tightens -------- */
  const WORDIN = 52;
  const wordO = seg(frame, WORDIN, WORDIN + 30);
  const track = 1 - sp(frame, fps, WORDIN, { damping: 18, stiffness: 60 });
  const wordCx = 1581;
  const spread = (n: LayerName) => {
    const c = L[n].bbox;
    return ((c.x + c.w / 2 - wordCx) * 0.16) * track;
  };

  /* -------- hand-over to idle -------- */
  const IDLE_FROM = markOnly ? 80 : 110;
  const enter = seg(frame, IDLE_FROM, IDLE_FROM + 40, easeInOut);
  const phase = ((frame - IDLE_FROM) / BLOEI_LOOP_FRAMES) % 1;

  if (frame >= IDLE_FROM + 40) {
    return stage(<Idle phase={phase} enter={1} markT={markT} markOnly={markOnly} />);
  }

  return stage(
    <>
      <g transform={markT}>
        <g transform={about(AXIS_X, GROUND_Y, `scale(${1 + 0.018 * Math.sin(phase * Math.PI * 2) * enter})`)}>
          <LogoLayer name="petalL" transform={about(pivotL[0], pivotL[1], `rotate(${mix(40, 0, pL)}) scale(${mix(0.9, 1, pL)})`)} />
          <LogoLayer name="petalR" transform={about(pivotR[0], pivotR[1], `rotate(${mix(-40, 0, pR)}) scale(${mix(0.9, 1, pR)})`)} />
          <LogoLayer
            name="bandLong"
            transform={about(1440, GROUND_Y, `rotate(${mix(-24, 0, bLong)})`)}
            opacity={seg(frame, 14, 26)}
          />
          <LogoLayer
            name="bandShort"
            transform={about(1567, 485, `rotate(${mix(34, 0, bShort)}) scale(${mix(0.5, 1, bShort)})`)}
            opacity={seg(frame, 22, 34)}
          />
          <LogoLayer
            name="leafMid"
            transform={about(1651, GROUND_Y, `scale(${mix(0.6, 1, leaf)} ${mix(0.2, 1, leaf)})`)}
            opacity={seg(frame, 26, 38)}
          />
          <LogoLayer
            name="flame"
            transform={about(flameC[0], flameC[1] + 175, `translate(0 ${mix(220, 0, flame)}) scale(${mix(0.6, 1, flame)})`)}
            opacity={seg(frame, 36, 50)}
          />
        </g>
      </g>
      {!markOnly && (
        <g opacity={wordO}>
          {WORD.map((n) => (
            <LogoLayer key={n} name={n} transform={`translate(${spread(n)} 0)`} />
          ))}
          <LogoLayer name="bar" opacity={seg(frame, WORDIN + 18, WORDIN + 34)} transform={`translate(${spread("KAA")} 0)`} />
        </g>
      )}
    </>,
  );
};

export const BLOEI_DURATION = 110 + 40 + BLOEI_LOOP_FRAMES; // bloom + hand-over + one full loop
export const BLOEI_MARK_DURATION = 80 + 40 + BLOEI_LOOP_FRAMES;
