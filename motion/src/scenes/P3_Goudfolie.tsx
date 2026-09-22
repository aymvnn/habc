import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { Stage, LogoLayer, about, Grain, MARK_T_PORTRAIT, L } from "../logo/Layers";
import { COLORS, MARK, WORD, LayerName } from "../logo/paths";
import { DebossFilter, ShadowFilter, LiveGoldDefs, BrushFilter } from "../logo/fx";
import { Caption, useBrandFonts, uy } from "../logo/text";
import { BRAND } from "../brand";
import { seg, easeOut, easeInOut, mix } from "../util";

/**
 * P3 — Goudfolie
 * We start inside the gold, macro. A live highlight travels over brushed
 * foil while the camera pulls back, the layers drifting at different depths
 * so the mark reads as physical. The wordmark is letterpressed into the
 * paper and then inked; the bar is laid in as foil last.
 */

const CROSS_C: [number, number] = [1552, 132]; // the crossing point after the portrait lockup
const DEPTH: Record<string, number> = { petalL: 0, petalR: 0, bandLong: 1, bandShort: 1.5, leafMid: 0.8, flame: 2 };
const PULL_END = 140;
const WORD_IN = 118;
const INK = 140;
const BAR = 178;

export const P3_Goudfolie: React.FC = () => {
  const frame = useCurrentFrame();
  const fonts = useBrandFonts();

  const z = mix(7.5, 1, seg(frame, 0, PULL_END, easeInOut));
  const goldPhase = (frame / 95) % 1;

  const debossO = seg(frame, WORD_IN, WORD_IN + 26);
  const inkP = seg(frame, INK, INK + 46, easeInOut);
  const inkX = mix(-100, 3300, inkP);
  const barP = seg(frame, BAR, BAR + 18, easeInOut);
  const bar = L.bar.bbox;

  const descO = seg(frame, 204, 228);
  const descY = mix(14, 0, seg(frame, 204, 234, easeOut));
  const annoO = seg(frame, 218, 242);
  const annoY = mix(14, 0, seg(frame, 218, 248, easeOut));

  return (
    <Stage
      layout="portrait-full"
      background={COLORS.paper}
      behind={
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 80% 55% at 50% 40%, #F4EDDF 0%, ${COLORS.paper} 60%, #E4DFD2 100%)`,
          }}
        />
      }
      overlay={
        <>
          <Grain opacity={0.06} seed={12} />
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
        <LiveGoldDefs id="p3-gold" phase={goldPhase} strength={1.2} />
        <BrushFilter id="p3-brush" />
        <ShadowFilter id="p3-shadow" dy={22} blur={22} opacity={0.2} />
        <DebossFilter id="p3-deboss" depth={12} blur={10} shadow={0.22} highlight={0.8} />
        <clipPath id="p3-goldclip">
          {(["bandShort", "leafMid", "bandLong", "flame"] as LayerName[]).map((n) => (
            <LogoLayer key={n} name={n} transform={`${parallax(n, z)} ${MARK_T_PORTRAIT}`} />
          ))}
        </clipPath>
        <clipPath id="p3-ink">
          <rect x={-200} y={1000} width={inkX + 200} height={900} />
        </clipPath>
        <clipPath id="p3-bar">
          <rect x={bar.x - 20} y={bar.y - 40} width={(bar.w + 40) * barP} height={bar.h + 80} />
        </clipPath>
      </defs>

      {/* camera */}
      <g transform={about(CROSS_C[0], CROSS_C[1], `scale(${z})`)}>
        {/* the mark with depth */}
        <g filter="url(#p3-shadow)">
          {MARK.map((n) => (
            <LogoLayer key={n} name={n} transform={`${parallax(n, z)} ${MARK_T_PORTRAIT}`} goldId="p3-gold" />
          ))}
        </g>
        {/* brushed texture on the gold */}
        <g clipPath="url(#p3-goldclip)" style={{ mixBlendMode: "multiply" }} opacity={0.5}>
          <rect x={-200} y={-900} width={3600} height={2200} filter="url(#p3-brush)" fill="#fff" />
        </g>

        {/* wordmark: letterpress, then ink */}
        <g opacity={debossO} filter="url(#p3-deboss)">
          {WORD.map((n) => (
            <LogoLayer key={n} name={n} fill={COLORS.paperDeep} />
          ))}
          <LogoLayer name="bar" fill={COLORS.paperDeep} />
        </g>
        <g clipPath="url(#p3-ink)">
          {WORD.map((n) => (
            <LogoLayer key={n} name={n} />
          ))}
        </g>
        <g clipPath="url(#p3-bar)">
          <LogoLayer name="bar" goldId="p3-gold" />
          <LogoLayer name="bar" fill="#FFF2D8" opacity={0.4 * (1 - seg(frame, BAR + 10, BAR + 34))} />
        </g>
      </g>
    </Stage>
  );
};

function parallax(name: string, z: number): string {
  const d = DEPTH[name] ?? 0;
  const k = z - 1;
  return `translate(${d * k * 7} ${d * k * 5})`;
}

export const P3_DURATION = 250;
