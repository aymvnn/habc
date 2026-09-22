import React from "react";
import { useCurrentFrame, useVideoConfig, Easing, AbsoluteFill } from "remotion";
import { evolvePath } from "@remotion/paths";
import { loadFont as loadArchivo } from "@remotion/google-fonts/Archivo";
import { loadFont as loadAlmarai } from "@remotion/google-fonts/Almarai";
import { Stage, LogoLayer, about, pt, Grain, center, Layout, LAYOUTS, yPx } from "../logo/Layers";
import { COLORS } from "../logo/paths";
import { seg, sp, easeOut, easeInOut, mix } from "../util";

/**
 * Concept 4 — Kruising
 * Two gold lines travel in from opposite sides, meet, pulse, and grow into the
 * two crossing bands. The petals cup around them, the flame ignites above the
 * crossing point. "DUK" slides in from the left, "AAT" from the right, locked
 * by the shared gold bar. The tagline follows in English, then Arabic.
 */

const CROSS: [number, number] = [1560, 400]; // where the bands cross
const GROUND_Y = 996;
// Seam between K and the first A: the outer left edge of that A, extended.
// x(y) = 1930 - 0.411 * (y - 1080)  →  (1963,1000) … (1634,1800)
const SEAM_TOP = 1963;
const SEAM_BOTTOM = 1634;

// the two approaching lines (viewBox units)
const LINE_L = `M -300 760 C 500 720, 1100 560, ${CROSS[0]} ${CROSS[1]}`;
const LINE_R = `M 3460 760 C 2660 720, 2060 560, ${CROSS[0]} ${CROSS[1]}`;
// portrait: the lines come in steeper, from the sides of a narrow screen
const LINE_L_P = `M 400 1500 C 700 1100, 1100 700, ${CROSS[0]} ${CROSS[1]}`;
const LINE_R_P = `M 2760 1500 C 2460 1100, 2060 700, ${CROSS[0]} ${CROSS[1]}`;

export interface KruisingProps {
  layout?: Layout;
}

export const Kruising: React.FC<KruisingProps> = ({ layout = "landscape" }) => {
  // fonts are fetched only when this scene renders, so the other compositions never wait on them
  const archivo = loadArchivo("normal", { weights: ["600"], subsets: ["latin"] });
  const almarai = loadAlmarai("normal", { weights: ["700"], subsets: ["arabic"] });
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const portrait = layout !== "landscape";
  const markT = LAYOUTS[layout].markT || undefined;
  const lineL = portrait ? LINE_L_P : LINE_L;
  const lineR = portrait ? LINE_R_P : LINE_R;

  /* -------- 0..40 lines travel -------- */
  const MEET = 40;
  const lineP = seg(frame, 0, MEET, Easing.inOut(Easing.cubic));
  const evL = evolvePath(lineP, lineL);
  const evR = evolvePath(lineP, lineR);
  const lineO = 1 - seg(frame, MEET + 8, MEET + 30);

  /* -------- pulse at the crossing -------- */
  const pulseP = seg(frame, MEET, MEET + 34, easeOut);
  const pulseR = mix(20, 640, pulseP);
  const pulseO = (1 - pulseP) * 0.7;
  const pulse2P = seg(frame, MEET + 6, MEET + 44, easeOut);

  /* -------- bands grow from the crossing point -------- */
  const bLong = sp(frame, fps, MEET + 2, { damping: 13, stiffness: 70 });
  const bShort = sp(frame, fps, MEET + 6, { damping: 13, stiffness: 80 });

  /* -------- petals cup around -------- */
  const PET = MEET + 16;
  const pL = sp(frame, fps, PET, { damping: 15, stiffness: 70 });
  const pR = sp(frame, fps, PET + 2, { damping: 15, stiffness: 70 });
  const leaf = sp(frame, fps, PET + 10, { damping: 15, stiffness: 90 });

  /* -------- flame ignites -------- */
  const FLAME = PET + 22;
  const fl = sp(frame, fps, FLAME, { damping: 9, stiffness: 120 });
  const flameGlow = (1 - seg(frame, FLAME, FLAME + 30, easeOut)) * 0.6;
  const flameC = center("flame");

  /* -------- wordmark halves -------- */
  const WORDIN = FLAME + 12;
  const wL = sp(frame, fps, WORDIN, { damping: 200, stiffness: 55, mass: 1.2 });
  const wR = sp(frame, fps, WORDIN + 2, { damping: 200, stiffness: 55, mass: 1.2 });
  const dxL = mix(-620, 0, wL);
  const dxR = mix(620, 0, wR);
  const wordO = seg(frame, WORDIN, WORDIN + 14);

  /* -------- bar locks from the centre outward -------- */
  const BAR = WORDIN + 26;
  const barP = seg(frame, BAR, BAR + 18, easeInOut);
  const barCx = 2188;
  const barHalf = 430 * barP;

  /* -------- tagline -------- */
  const TAG = BAR + 16;
  const tagEnO = seg(frame, TAG, TAG + 20) * (1 - seg(frame, TAG + 44, TAG + 58));
  const tagArO = seg(frame, TAG + 50, TAG + 68);
  const tagY = mix(18, 0, seg(frame, TAG, TAG + 24, easeOut));
  const tagArY = mix(18, 0, seg(frame, TAG + 50, TAG + 74, easeOut));
  const ruleW = seg(frame, TAG + 4, TAG + 30, easeInOut);

  const pivotL = pt("petalL", 1, 1);
  const pivotR = pt("petalR", 0, 1);

  // tagline block sits just under the wordmark baseline
  const canvasH = portrait ? 1920 : 1080;
  const tagTop = portrait ? yPx(layout, canvasH, 1650) + 70 : canvasH - 118 - 90;
  const tagScale = portrait ? 1.15 : 1;

  return (
    <Stage
      background={COLORS.paper}
      width={1280}
      shiftY={portrait ? 0 : -70}
      layout={layout}
      overlay={
        <>
          <Grain opacity={0.05} />
          <AbsoluteFill style={{ alignItems: "center" }}>
            <div
              style={{
                position: "absolute",
                top: tagTop,
                height: 90,
                width: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  height: 1.5,
                  width: 420 * ruleW,
                  background: COLORS.bar,
                  opacity: 0.9,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 30,
                  fontFamily: archivo.fontFamily,
                  fontWeight: 600,
                  fontSize: 22 * tagScale,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: COLORS.wine,
                  opacity: tagEnO,
                  transform: `translateY(${tagY}px)`,
                  whiteSpace: "nowrap",
                }}
              >
                Where value crosses borders
              </div>
              <div
                dir="rtl"
                style={{
                  position: "absolute",
                  top: 24,
                  fontFamily: almarai.fontFamily,
                  fontWeight: 700,
                  fontSize: 30 * tagScale,
                  color: COLORS.wine,
                  opacity: tagArO,
                  transform: `translateY(${tagArY}px)`,
                  whiteSpace: "nowrap",
                }}
              >
                حيث تعبر القيمة الحدود
              </div>
            </div>
          </AbsoluteFill>
        </>
      }
    >
      <defs>
        <clipPath id="kr-left">
          <polygon points={`-600,1000 ${SEAM_TOP + 2},1000 ${SEAM_BOTTOM + 2},1800 -600,1800`} />
        </clipPath>
        <clipPath id="kr-right">
          <polygon points={`${SEAM_TOP - 2},1000 3800,1000 3800,1800 ${SEAM_BOTTOM - 2},1800`} />
        </clipPath>
        <clipPath id="kr-bar">
          <rect x={barCx - barHalf} y={1350} width={barHalf * 2} height={200} />
        </clipPath>
        <radialGradient id="kr-pulse">
          <stop offset="0" stopColor={COLORS.goldLight} stopOpacity="0" />
          <stop offset="0.8" stopColor={COLORS.goldLight} stopOpacity="0.9" />
          <stop offset="1" stopColor={COLORS.goldLight} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="kr-glow">
          <stop offset="0" stopColor="#FFF1D6" stopOpacity="0.9" />
          <stop offset="1" stopColor={COLORS.goldLight} stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform={markT}>
        {/* travelling lines */}
        <g opacity={lineO} fill="none" stroke={COLORS.bar} strokeWidth={portrait ? 7 : 9} strokeLinecap="round">
          <path d={lineL} strokeDasharray={evL.strokeDasharray} strokeDashoffset={evL.strokeDashoffset} />
          <path d={lineR} strokeDasharray={evR.strokeDasharray} strokeDashoffset={evR.strokeDashoffset} />
        </g>

        {/* pulse rings */}
        {frame >= MEET && (
          <>
            <circle cx={CROSS[0]} cy={CROSS[1]} r={pulseR} fill="url(#kr-pulse)" opacity={pulseO} />
            <circle
              cx={CROSS[0]}
              cy={CROSS[1]}
              r={mix(10, 420, pulse2P)}
              fill="none"
              stroke={COLORS.bar}
              strokeWidth={mix(6, 1, pulse2P)}
              opacity={(1 - pulse2P) * 0.8}
            />
          </>
        )}

        {/* bands growing out of the crossing */}
        <LogoLayer name="bandLong" transform={about(CROSS[0], CROSS[1], `scale(${mix(0.02, 1, bLong)})`)} opacity={seg(frame, MEET, MEET + 6)} />
        <LogoLayer name="bandShort" transform={about(CROSS[0], CROSS[1], `scale(${mix(0.02, 1, bShort)})`)} opacity={seg(frame, MEET + 4, MEET + 10)} />

        {/* petals cupping */}
        <LogoLayer
          name="petalL"
          transform={about(pivotL[0], pivotL[1], `translate(${mix(-420, 0, pL)} 0) rotate(${mix(-18, 0, pL)})`)}
          opacity={seg(frame, PET, PET + 12)}
        />
        <LogoLayer
          name="petalR"
          transform={about(pivotR[0], pivotR[1], `translate(${mix(420, 0, pR)} 0) rotate(${mix(18, 0, pR)})`)}
          opacity={seg(frame, PET + 2, PET + 14)}
        />
        <LogoLayer name="leafMid" transform={about(1651, GROUND_Y, `scale(1 ${mix(0.1, 1, leaf)})`)} opacity={seg(frame, PET + 10, PET + 18)} />

        {/* flame */}
        {frame >= FLAME && <circle cx={flameC[0]} cy={flameC[1]} r={420} fill="url(#kr-glow)" opacity={flameGlow} />}
        <LogoLayer name="flame" transform={about(flameC[0], flameC[1] + 175, `scale(${mix(0.2, 1, fl)})`)} opacity={seg(frame, FLAME, FLAME + 6)} />
      </g>

      {/* DUK from the left */}
      <g transform={`translate(${dxL} 0)`} opacity={wordO}>
        <LogoLayer name="D" />
        <LogoLayer name="U" />
        <LogoLayer name="KAA" clipPath="url(#kr-left)" />
      </g>
      {/* AAT from the right */}
      <g transform={`translate(${dxR} 0)`} opacity={wordO}>
        <LogoLayer name="KAA" clipPath="url(#kr-right)" />
        <LogoLayer name="T" />
      </g>

      {/* the shared bar locks both A's */}
      <LogoLayer name="bar" clipPath="url(#kr-bar)" />
    </Stage>
  );
};

export const KRUISING_DURATION = 40 + 16 + 22 + 12 + 26 + 16 + 74 + 30; // ≈ 236 frames ≈ 7.9 s
