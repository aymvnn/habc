import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage, LogoLayer, Grain, MARK_T_PORTRAIT, FULL, FULL_C, L } from "../logo/Layers";
import { COLORS, MARK, WORD } from "../logo/paths";
import { mixHex } from "../logo/fx";
import { Caption, useBrandFonts, uy } from "../logo/text";
import { BRAND } from "../brand";
import { seg, sp, easeOut, easeInOut, mix } from "../util";

/**
 * P4 — Twee werelden
 * The screen is two worlds divided by a gold hairline at its centre: paper
 * above, sand below, each with its name. The tulip descends from the Dutch
 * side, the wordmark rises from the Arab side. When both have arrived the
 * hairline slides down and contracts into the shared gold bar of the two
 * A's. The worlds become one paper, and the tagline appears in both languages.
 */

const SAND = "#E6DAC3";
/** the gap between mark (bottom 846) and wordmark (top 1165) */
const SPLIT_Y = 1005;
/** shift the whole lockup so the split sits exactly on the screen centre */
const OFF = SPLIT_Y - FULL_C[1];
const MOVE = 28;
const LOCK = 92;
const MERGE = 116;
const TAG = 152;

export const P4_TweeWerelden: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fonts = useBrandFonts();

  const lineP = seg(frame, 0, 34, easeInOut);
  const labelO = seg(frame, 22, 46) * (1 - seg(frame, MERGE + 6, MERGE + 30));

  // heavy, slow arrivals
  const down = sp(frame, fps, MOVE, { damping: 18, stiffness: 34, mass: 1.4 });
  const up = sp(frame, fps, MOVE + 4, { damping: 18, stiffness: 34, mass: 1.4 });
  const tulipY = mix(-3800, 0, down);
  const wordY = mix(3400, 0, up);

  // hairline → bar
  const lock = seg(frame, LOCK, LOCK + 22, easeInOut);
  const bar = L.bar.bbox;
  const barCy = bar.y + bar.h / 2;
  const fullW = FULL.w + 400;
  const lineHalf = mix(fullW / 2, bar.w / 2 + 10, lock);
  const lineCx = mix(FULL_C[0], bar.x + bar.w / 2, lock);
  const lineCy = mix(SPLIT_Y, barCy, lock);
  const lineH = mix(6, bar.h - 26, lock);
  const lineO = 1 - seg(frame, LOCK + 20, LOCK + 28);
  const barO = seg(frame, LOCK + 16, LOCK + 24);

  // worlds merge
  const merge = seg(frame, MERGE, MERGE + 44, easeInOut);
  const bottom = mixHex(SAND, COLORS.paper, merge);

  const enO = seg(frame, TAG, TAG + 24);
  const enY = mix(16, 0, seg(frame, TAG, TAG + 30, easeOut));
  const arO = seg(frame, TAG + 18, TAG + 42);
  const arY = mix(16, 0, seg(frame, TAG + 18, TAG + 48, easeOut));

  const splitPx = uy(SPLIT_Y - OFF);

  return (
    <Stage
      layout="portrait-full"
      background={COLORS.paper}
      overlay={
        <>
          <Grain opacity={0.06} seed={9} />
          <AbsoluteFill>
            <div
              style={{
                position: "absolute",
                left: 64,
                top: splitPx - 58,
                fontFamily: fonts.latin,
                fontWeight: 600,
                fontSize: 19,
                letterSpacing: "0.42em",
                color: COLORS.wine,
                opacity: labelO,
              }}
            >
              {BRAND.worldNl}
            </div>
            <div
              dir="rtl"
              style={{
                position: "absolute",
                right: 64,
                top: splitPx + 18,
                fontFamily: fonts.arabic,
                fontWeight: 800,
                fontSize: 32,
                color: COLORS.wine,
                opacity: labelO,
              }}
            >
              {BRAND.worldAr}
            </div>
          </AbsoluteFill>
          <Caption top={uy(1650 - OFF) + 76} opacity={enO} dy={enY} family={fonts.latin}>
            {BRAND.taglineEn}
          </Caption>
          <Caption top={uy(1650 - OFF) + 124} opacity={arO} dy={arY} family={fonts.arabic} latin={false} size={34} weight={700}>
            {BRAND.taglineAr}
          </Caption>
        </>
      }
    >
      <g transform={`translate(0 ${-OFF})`}>
        <defs>
          {/* the tulip only exists above the line, the wordmark only below, until they lock */}
          <clipPath id="p4-top">
            <rect x={FULL.x - 200} y={FULL.y - 400} width={FULL.w + 400} height={SPLIT_Y - FULL.y + 400} />
          </clipPath>
          <clipPath id="p4-bottom">
            <rect x={FULL.x - 200} y={SPLIT_Y} width={FULL.w + 400} height={FULL.h} />
          </clipPath>
        </defs>

        {/* the lower world */}
        <rect x={FULL.x - 200} y={SPLIT_Y} width={FULL.w + 400} height={FULL.h} fill={bottom} />

        {/* tulip from above */}
        <g clipPath={frame < LOCK + 30 ? "url(#p4-top)" : undefined}>
          <g transform={`translate(0 ${tulipY})`}>
            {MARK.map((n) => (
              <LogoLayer key={n} name={n} transform={MARK_T_PORTRAIT} />
            ))}
          </g>
        </g>

        {/* wordmark from below */}
        <g clipPath={frame < LOCK + 30 ? "url(#p4-bottom)" : undefined}>
          <g transform={`translate(0 ${wordY})`}>
            {WORD.map((n) => (
              <LogoLayer key={n} name={n} />
            ))}
          </g>
        </g>

        {/* hairline that becomes the bar */}
        <rect
          x={lineCx - lineHalf * lineP}
          y={lineCy - lineH / 2}
          width={lineHalf * 2 * lineP}
          height={lineH}
          fill={COLORS.bar}
          opacity={lineO}
          transform={`rotate(${-2.6 * lock} ${lineCx} ${lineCy})`}
        />
        <LogoLayer name="bar" opacity={barO} />
      </g>
    </Stage>
  );
};

export const P4_DURATION = 250;
