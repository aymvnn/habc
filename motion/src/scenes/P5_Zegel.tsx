import React from "react";
import { useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { Stage, LogoLayer, about, Grain, MARK_T_PORTRAIT, L } from "../logo/Layers";
import { COLORS, MARK, WORD } from "../logo/paths";
import { DebossFilter } from "../logo/fx";
import { Caption, useBrandFonts, uy } from "../logo/text";
import { BRAND } from "../brand";
import { seg, sp, easeOut, easeInOut, mix } from "../util";

/**
 * P5 — Zegel
 * A struck ducat falls through the tall frame, spinning and slowing, until
 * it lands face-on: gold rim, ring inscription, the tulip engraved in the
 * centre, "1586" on the reverse. Then the coin dissolves and the engraving
 * becomes the living mark. The wordmark rises from below, the bar locks,
 * and the ring inscription re-appears as a straight line beneath.
 */

const C: [number, number] = [1578, 131]; // coin centre = mark centre in the lockup
const R = 660;
const LAND = 96;
const DISSOLVE = 104;
const WORD_IN = 132;
const BAR = 164;

const RING_TEXT = `${BRAND.name}  ·  ${BRAND.descriptor}  ·  ${BRAND.anno}  ·  `;

export const P5_Zegel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fonts = useBrandFonts();

  // fall and spin
  const fall = seg(frame, 0, LAND, Easing.out(Easing.cubic));
  const y = mix(-3600, C[1], fall);
  const spin = seg(frame, 0, LAND, Easing.out(Easing.quad));
  const theta = Math.PI * 2 * 3 * spin; // three full turns, ends face-on
  const cos = Math.cos(theta);
  const sx = Math.max(0.03, Math.abs(cos));
  const front = cos >= 0;
  const sway = Math.sin(frame * 0.11) * 40 * (1 - fall);

  // shadow on the paper grows as the coin approaches
  const shadowO = 0.16 * seg(frame, LAND - 40, LAND);

  // dissolve into the mark
  const dis = seg(frame, DISSOLVE, DISSOLVE + 26, easeInOut);
  const coinO = 1 - dis;
  const coinS = mix(1, 1.28, dis);
  const grow = sp(frame, fps, DISSOLVE + 2, { damping: 14, stiffness: 60 });
  const markS = mix(0.52, 1, grow);
  const engravedO = 1 - seg(frame, DISSOLVE + 4, DISSOLVE + 20);
  const colourO = seg(frame, DISSOLVE + 4, DISSOLVE + 22);

  // wordmark rises
  const letterT = (i: number) => sp(frame, fps, WORD_IN + i * 5, { damping: 15, stiffness: 90 });
  const barP = seg(frame, BAR, BAR + 16, easeInOut);
  const bar = L.bar.bbox;
  const barCx = bar.x + bar.w / 2;

  // inscription re-appears as a line
  const descO = seg(frame, 186, 210);
  const descY = mix(14, 0, seg(frame, 186, 216, easeOut));

  const coinT = `translate(${sway} ${y - C[1]}) ${about(C[0], C[1], `scale(${sx * coinS} ${coinS})`)}`;

  return (
    <Stage
      layout="portrait-full"
      background={COLORS.paper}
      overlay={
        <>
          <Grain opacity={0.06} seed={6} />
          <Caption top={uy(1650) + 76} opacity={descO} dy={descY} family={fonts.latin} size={20} tracking="0.36em">
            {BRAND.descriptor} &nbsp;·&nbsp; {BRAND.anno}
          </Caption>
        </>
      }
    >
      <defs>
        <radialGradient id="p5-face" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#F0D6A6" />
          <stop offset="0.55" stopColor={COLORS.goldLight} />
          <stop offset="1" stopColor="#A67F48" />
        </radialGradient>
        <radialGradient id="p5-back" cx="0.6" cy="0.62" r="0.7">
          <stop offset="0" stopColor="#E6C48E" />
          <stop offset="0.6" stopColor="#C9A263" />
          <stop offset="1" stopColor="#95713F" />
        </radialGradient>
        <linearGradient id="p5-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A1F08" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#3A1F08" stopOpacity="0" />
          <stop offset="1" stopColor="#3A1F08" stopOpacity="0.55" />
        </linearGradient>
        <DebossFilter id="p5-engrave" depth={10} blur={7} shadow={0.45} highlight={0.7} />
        <filter id="p5-soft" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation={50} />
        </filter>
        <path id="p5-ring" d={`M ${C[0] - (R - 118)} ${C[1]} a ${R - 118} ${R - 118} 0 1 1 ${(R - 118) * 2} 0 a ${R - 118} ${R - 118} 0 1 1 ${-(R - 118) * 2} 0`} />
        <clipPath id="p5-bar">
          <rect x={barCx - (bar.w / 2 + 20) * barP} y={bar.y - 40} width={(bar.w + 40) * barP} height={bar.h + 80} />
        </clipPath>
        <clipPath id="p5-baseline">
          <rect x={-400} y={-400} width={4000} height={1650 + 400} />
        </clipPath>
      </defs>

      {/* shadow on the paper */}
      <ellipse cx={C[0]} cy={C[1] + R + 120} rx={R * 0.95 * sx} ry={70} fill="#2A1206" opacity={shadowO * coinO} filter="url(#p5-soft)" />

      {/* the coin */}
      {coinO > 0 && (
        <g transform={coinT} opacity={coinO}>
          {front ? (
            <>
              <circle cx={C[0]} cy={C[1]} r={R} fill="url(#p5-face)" />
              <circle cx={C[0]} cy={C[1]} r={R - 16} fill="none" stroke="#8E6B3C" strokeWidth={10} strokeOpacity={0.7} />
              <circle cx={C[0]} cy={C[1]} r={R - 34} fill="none" stroke="#FFF1D2" strokeWidth={3} strokeOpacity={0.6} />
              <circle cx={C[0]} cy={C[1]} r={R - 196} fill="none" stroke="#8E6B3C" strokeWidth={4} strokeOpacity={0.55} />
              <text fontFamily={fonts.latin} fontWeight={600} fontSize={52} letterSpacing={9} fill="#6B4E26" opacity={0.9}>
                <textPath href="#p5-ring" startOffset="0">
                  {RING_TEXT}
                </textPath>
              </text>
              {/* engraved tulip */}
              <g transform={about(C[0], C[1], `scale(${markS})`)} opacity={engravedO} filter="url(#p5-engrave)">
                {MARK.map((n) => (
                  <LogoLayer key={n} name={n} transform={MARK_T_PORTRAIT} fill="#B08A52" />
                ))}
              </g>
            </>
          ) : (
            <>
              <circle cx={C[0]} cy={C[1]} r={R} fill="url(#p5-back)" />
              <circle cx={C[0]} cy={C[1]} r={R - 16} fill="none" stroke="#8E6B3C" strokeWidth={10} strokeOpacity={0.7} />
              <circle cx={C[0]} cy={C[1]} r={R - 196} fill="none" stroke="#8E6B3C" strokeWidth={4} strokeOpacity={0.55} />
              <text x={C[0]} y={C[1] + 105} textAnchor="middle" fontFamily={fonts.latin} fontWeight={800} fontSize={320} fill="#6B4E26" opacity={0.9} filter="url(#p5-engrave)">
                {BRAND.ducatYear}
              </text>
              <text x={C[0]} y={C[1] + 250} textAnchor="middle" fontFamily={fonts.latin} fontWeight={600} fontSize={44} letterSpacing={12} fill="#6B4E26" opacity={0.75}>
                GOUDEN DUKAAT
              </text>
            </>
          )}
          {/* edge shading while turning */}
          <circle cx={C[0]} cy={C[1]} r={R} fill="url(#p5-shade)" opacity={1 - sx} />
        </g>
      )}

      {/* the living mark */}
      {colourO > 0 && (
        <g transform={about(C[0], C[1], `scale(${markS})`)} opacity={colourO}>
          {MARK.map((n) => (
            <LogoLayer key={n} name={n} transform={MARK_T_PORTRAIT} />
          ))}
        </g>
      )}

      {/* wordmark rises from behind its baseline */}
      <g clipPath="url(#p5-baseline)">
        {WORD.map((n, i) => {
          const t = letterT(i);
          return <LogoLayer key={n} name={n} transform={`translate(0 ${mix(520, 0, t)})`} opacity={t > 0.02 ? 1 : 0} />;
        })}
      </g>
      <LogoLayer name="bar" clipPath="url(#p5-bar)" />
    </Stage>
  );
};

export const P5_DURATION = 260;
