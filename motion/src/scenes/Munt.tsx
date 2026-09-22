import React from "react";
import { useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { Stage, LogoLayer, about, pt, Grain, L, Layout, LAYOUTS } from "../logo/Layers";
import { COLORS, WORD } from "../logo/paths";
import { seg, sp, easeIn, easeOut, mix } from "../util";

/**
 * Concept 1 — De Munt
 * A gold ducat drops in, spins, lands with a flash and becomes the flame.
 * The petals spring open from the landing point, the bands sweep over,
 * the letters rise from behind the baseline and the gold bar draws last.
 */

const FLAME_C: [number, number] = [1575, 200]; // where the coin lands (flame centre)
const COIN_R = 205;

export interface MuntProps {
  layout?: Layout;
  /** Only the tulip, no wordmark. */
  markOnly?: boolean;
}

export const Munt: React.FC<MuntProps> = ({ layout = "landscape", markOnly = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const markT = LAYOUTS[layout].markT || undefined;

  /* ---------------- coin drop 0..30 ---------------- */
  const LAND = 30;
  const drop = seg(frame, 0, LAND, easeIn);
  const coinY = mix(-700, FLAME_C[1], drop);
  // 4 half-turns in the air, ends face-on
  const spinAngle = mix(0, Math.PI * 4, seg(frame, 0, LAND, Easing.out(Easing.quad)));
  const cosA = Math.cos(spinAngle);
  const coinVisible = frame <= LAND + 12;
  const coinFade = 1 - seg(frame, LAND + 2, LAND + 12);
  const coinScale = mix(1, 0.6, seg(frame, LAND, LAND + 12, easeOut));

  /* ---------------- landing flash ---------------- */
  const flashP = seg(frame, LAND, LAND + 22, easeOut);
  const flashR = mix(60, 900, flashP);
  const flashO = (1 - flashP) * 0.55;

  /* ---------------- flame morph in ---------------- */
  const flameS = sp(frame, fps, LAND + 2, { damping: 11, stiffness: 120 });
  const flameO = seg(frame, LAND + 2, LAND + 10);

  /* ---------------- petals spring open ---------------- */
  const petalDelay = LAND + 6;
  const pL = sp(frame, fps, petalDelay, { damping: 12, stiffness: 90 });
  const pR = sp(frame, fps, petalDelay + 3, { damping: 12, stiffness: 90 });
  const petalPivotL = pt("petalL", 1, 1); // bottom-right tip of left petal
  const petalPivotR = pt("petalR", 0, 1); // bottom-left tip of right petal

  /* ---------------- gold bands sweep ---------------- */
  const bLong = sp(frame, fps, petalDelay + 10, { damping: 13, stiffness: 80 });
  const bShort = sp(frame, fps, petalDelay + 16, { damping: 13, stiffness: 90 });
  const leaf = sp(frame, fps, petalDelay + 14, { damping: 14, stiffness: 100 });

  /* ---------------- letters rise ---------------- */
  const LETTERS = 68;
  const letterT = (i: number) => sp(frame, fps, LETTERS + i * 6, { damping: 15, stiffness: 95 });

  /* ---------------- bar draws ---------------- */
  const BAR = 100;
  const barP = seg(frame, BAR, BAR + 16, Easing.inOut(Easing.cubic));
  const bar = L.bar.bbox;
  // mark-only: the "click" lands when the petals settle instead of on the bar
  const clickAt = markOnly ? petalDelay + 34 : BAR + 14;
  const click = sp(frame, fps, clickAt, { damping: 9, stiffness: 200 });
  const clickScale = 1 + 0.012 * Math.sin(Math.min(1, click) * Math.PI);

  const baseline = 1650; // letters hide below this line
  const groundY = 996;

  return (
    <Stage background={COLORS.paper} width={1420} layout={layout} overlay={<Grain opacity={0.05} />}>
      <defs>
        <clipPath id="munt-baseline">
          <rect x={-400} y={-400} width={4000} height={baseline + 400} />
        </clipPath>
        <clipPath id="munt-bar">
          <rect x={bar.x - 20} y={bar.y - 40} width={(bar.w + 40) * barP} height={bar.h + 80} />
        </clipPath>
        <radialGradient id="munt-flash">
          <stop offset="0" stopColor="#FFF4DC" stopOpacity="1" />
          <stop offset="0.5" stopColor={COLORS.goldLight} stopOpacity="0.5" />
          <stop offset="1" stopColor={COLORS.goldLight} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="munt-coin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9C892" />
          <stop offset="0.55" stopColor={COLORS.goldLight} />
          <stop offset="1" stopColor={COLORS.goldDark} />
        </linearGradient>
        <linearGradient id="munt-coin-back" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D2A96F" />
          <stop offset="1" stopColor="#8E6B3C" />
        </linearGradient>
      </defs>

      <g transform={markT}>
        {/* landing flash */}
        {frame >= LAND && flashO > 0 && (
          <circle cx={FLAME_C[0]} cy={FLAME_C[1]} r={flashR} fill="url(#munt-flash)" opacity={flashO} />
        )}

        {/* the tulip */}
        <g transform={about(1578, groundY, `scale(${clickScale})`)}>
          <LogoLayer
            name="petalL"
            transform={about(petalPivotL[0], petalPivotL[1], `rotate(${mix(42, 0, pL)}) scale(${mix(0.7, 1, pL)})`)}
            opacity={seg(frame, petalDelay, petalDelay + 8)}
          />
          <LogoLayer
            name="petalR"
            transform={about(petalPivotR[0], petalPivotR[1], `rotate(${mix(-42, 0, pR)}) scale(${mix(0.7, 1, pR)})`)}
            opacity={seg(frame, petalDelay + 3, petalDelay + 11)}
          />
          <LogoLayer
            name="leafMid"
            transform={about(1651, groundY, `scale(1 ${mix(0.1, 1, leaf)})`)}
            opacity={seg(frame, petalDelay + 14, petalDelay + 22)}
          />
          <LogoLayer
            name="bandLong"
            transform={about(1440, groundY, `rotate(${mix(-28, 0, bLong)}) scale(${mix(0.85, 1, bLong)})`)}
            opacity={seg(frame, petalDelay + 10, petalDelay + 18)}
          />
          <LogoLayer
            name="bandShort"
            transform={about(1567, 485, `rotate(${mix(30, 0, bShort)}) scale(${mix(0.6, 1, bShort)})`)}
            opacity={seg(frame, petalDelay + 16, petalDelay + 24)}
          />
          <LogoLayer
            name="flame"
            transform={about(FLAME_C[0], FLAME_C[1], `scale(${mix(0.55, 1, flameS)})`)}
            opacity={flameO}
          />
        </g>

        {/* the coin */}
        {coinVisible && (
          <g
            transform={about(FLAME_C[0], coinY, `scale(${coinScale * Math.abs(cosA)} ${coinScale})`)}
            opacity={coinFade}
          >
            <circle cx={FLAME_C[0]} cy={coinY} r={COIN_R} fill={cosA >= 0 ? "url(#munt-coin)" : "url(#munt-coin-back)"} />
            <circle cx={FLAME_C[0]} cy={coinY} r={COIN_R - 18} fill="none" stroke="#8E6B3C" strokeWidth={5} strokeOpacity={0.55} />
            {cosA >= 0 ? (
              // engraved flame on the face
              <g transform={`translate(${FLAME_C[0]} ${coinY}) scale(0.42) translate(${-1575} ${-185})`}>
                <LogoLayer name="flame" fill="#8E6B3C" fillOpacity={0.75} />
              </g>
            ) : (
              <text
                x={FLAME_C[0]}
                y={coinY + 22}
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize={96}
                fill="#7A5A30"
                fillOpacity={0.8}
                letterSpacing={6}
              >
                1586
              </text>
            )}
          </g>
        )}
      </g>

      {!markOnly && (
        <>
          {/* wordmark rising from behind the baseline */}
          <g clipPath="url(#munt-baseline)">
            {WORD.map((n, i) => {
              const t = letterT(i);
              return (
                <LogoLayer key={n} name={n} transform={`translate(0 ${mix(500, 0, t)})`} opacity={t > 0.02 ? 1 : 0} />
              );
            })}
          </g>

          {/* gold bar drawing left → right */}
          <LogoLayer name="bar" clipPath="url(#munt-bar)" />
        </>
      )}
    </Stage>
  );
};

export const MUNT_DURATION = 140;
export const MUNT_MARK_DURATION = 110;
