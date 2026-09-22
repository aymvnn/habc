import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage, LogoLayer, about, Grain, MARK_T_PORTRAIT, L } from "../logo/Layers";
import { COLORS, MARK, WORD, LAYERS } from "../logo/paths";
import { DebossFilter, Burst, shake, LiveGoldDefs } from "../logo/fx";
import { Caption, useBrandFonts, uy } from "../logo/text";
import { BRAND } from "../brand";
import { seg, sp, easeOut, easeOutExpo, easeInOut, mix } from "../util";

/**
 * P1 — Muntslag
 * The logo is blind-debossed into the paper. A strike hits: flash, shake,
 * shock ring, and gold floods the tulip from the point of impact while gold
 * dust bursts and falls. The wordmark stamps in with a second, smaller hit.
 * The bar is laid in as foil. Descriptor and year settle underneath.
 */

const MARK_C: [number, number] = [1578, 131]; // mark centre after the portrait lockup
const WORD_C: [number, number] = [1581, 1408];
const STRIKE = 48;
const STAMP = 88;
const BAR = 104;

export const P1_Muntslag: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fonts = useBrandFonts();

  // slow push-in for the whole piece
  const zoom = mix(1.1, 1.0, seg(frame, 0, 200, easeInOut));

  // strike
  const flash = (1 - seg(frame, STRIKE, STRIKE + 12, easeOut)) * (frame >= STRIKE ? 0.75 : 0);
  const sh = shake(frame, STRIKE, 26, 28, 1);
  const sh2 = shake(frame, STAMP, 12, 18, 2);
  const floodR = mix(0, 2400, seg(frame, STRIKE, STRIKE + 40, easeOut));
  const ringR = mix(40, 1900, seg(frame, STRIKE, STRIKE + 34, easeOut));
  const ringO = (1 - seg(frame, STRIKE, STRIKE + 34)) * 0.7;

  // wordmark stamp
  const stampP = seg(frame, STAMP, STAMP + 14, easeOutExpo);
  const stampS = mix(1.35, 1, stampP);
  const stampO = seg(frame, STAMP, STAMP + 4);

  // bar as foil
  const barP = seg(frame, BAR, BAR + 16, easeInOut);
  const bar = L.bar.bbox;

  // live gold
  const goldPhase = ((frame - STRIKE) / 110) % 1;
  const settle = sp(frame, fps, STRIKE + 2, { damping: 10, stiffness: 160 });
  const impactScale = 1 - 0.035 * Math.sin(Math.min(1, settle) * Math.PI);

  // captions
  const descO = seg(frame, 128, 150);
  const descY = mix(14, 0, seg(frame, 128, 156, easeOut));
  const annoO = seg(frame, 144, 166);
  const annoY = mix(14, 0, seg(frame, 144, 172, easeOut));

  return (
    <Stage
      layout="portrait-full"
      background={COLORS.paper}
      svgStyle={{ transform: `translate(${sh.x + sh2.x}px, ${sh.y + sh2.y}px) rotate(${sh.r + sh2.r}deg)` }}
      overlay={
        <>
          <Grain opacity={0.07} seed={4} />
          <AbsoluteFill style={{ background: "#FFF6E6", opacity: flash, pointerEvents: "none" }} />
          <Caption top={uy(1650) + 70} opacity={descO} dy={descY} family={fonts.latin}>
            {BRAND.descriptor}
          </Caption>
          <Caption top={uy(1650) + 118} opacity={annoO} dy={annoY} family={fonts.latin} size={17} tracking="0.42em" color={COLORS.goldDark}>
            {BRAND.anno}
          </Caption>
        </>
      }
    >
      <defs>
        <DebossFilter id="p1-deboss" depth={16} blur={12} shadow={0.24} highlight={0.85} />
        <LiveGoldDefs id="p1-gold" phase={goldPhase} />
        <radialGradient id="p1-floodg" gradientUnits="userSpaceOnUse" cx={MARK_C[0]} cy={MARK_C[1]} r={Math.max(1, floodR)}>
          <stop offset="0.7" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="p1-flood">
          <rect x={-800} y={-3000} width={5000} height={7000} fill="url(#p1-floodg)" />
        </mask>
        <clipPath id="p1-bar">
          <rect x={bar.x - 20} y={bar.y - 40} width={(bar.w + 40) * barP} height={bar.h + 80} />
        </clipPath>
        <radialGradient id="p1-ring">
          <stop offset="0.86" stopColor={COLORS.goldLight} stopOpacity="0" />
          <stop offset="0.96" stopColor={COLORS.goldLight} stopOpacity="1" />
          <stop offset="1" stopColor={COLORS.goldLight} stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform={about(1580, 600, `scale(${zoom})`)}>
        {/* blind deboss of the whole lockup */}
        <g filter="url(#p1-deboss)">
          {LAYERS.map((l) => (
            <LogoLayer
              key={l.name}
              name={l.name}
              fill={COLORS.paperDeep}
              transform={(MARK as readonly string[]).includes(l.name) ? MARK_T_PORTRAIT : undefined}
            />
          ))}
        </g>

        {/* shock ring */}
        {frame >= STRIKE && <circle cx={MARK_C[0]} cy={MARK_C[1]} r={ringR} fill="url(#p1-ring)" opacity={ringO} />}

        {/* gold floods the tulip from the impact point */}
        <g mask="url(#p1-flood)">
          <g transform={about(MARK_C[0], MARK_C[1], `scale(${impactScale})`)}>
            {MARK.map((n) => (
              <LogoLayer key={n} name={n} transform={MARK_T_PORTRAIT} goldId="p1-gold" />
            ))}
          </g>
        </g>

        {/* gold dust */}
        <Burst frame={frame} start={STRIKE} origin={MARK_C} count={140} speed={[16, 95]} gravity={2.4} life={85} seed="p1" size={[5, 20]} />
        <Burst frame={frame} start={STAMP} origin={WORD_C} count={50} speed={[10, 50]} gravity={2.0} life={60} seed="p1b" size={[4, 12]} spread={[Math.PI, Math.PI * 2]} />

        {/* wordmark stamps in */}
        {frame >= STAMP && (
          <g transform={about(WORD_C[0], WORD_C[1], `scale(${stampS})`)} opacity={stampO}>
            {WORD.map((n) => (
              <LogoLayer key={n} name={n} />
            ))}
          </g>
        )}

        {/* bar laid in as foil */}
        <g clipPath="url(#p1-bar)">
          <LogoLayer name="bar" />
          <LogoLayer name="bar" fill="#FFF2D8" opacity={0.35 * (1 - seg(frame, BAR + 10, BAR + 30))} />
        </g>
      </g>
    </Stage>
  );
};

export const P1_DURATION = 220;
