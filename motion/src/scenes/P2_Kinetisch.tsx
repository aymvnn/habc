import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Stage, LogoLayer, about, Grain, MARK_T_PORTRAIT, L, FULL_C } from "../logo/Layers";
import { COLORS, MARK, LayerName } from "../logo/paths";
import { shake } from "../logo/fx";
import { useBrandFonts, uy } from "../logo/text";
import { BRAND } from "../brand";
import { seg, sp, easeOutExpo, easeInOut, mix } from "../util";

/**
 * P2 — Kinetisch
 * Six letters cut in huge, one after the other, each filling the phone
 * screen, then fly into their slot in the wordmark. The tulip drops in on
 * top. The tagline runs word by word through a window, then flips to Arabic.
 */

// K | A | A live in one path; two diagonal seams along the A's outer legs split them
// Outer left leg of each A, extended to y = 1000 and y = 1800, then pushed 6 units
// into the letter on the left so the flying K / A₁ never carry a hairline of the next leg.
const SEAM1 = { top: 1962.8 - 6, bottom: 1631.9 - 6 }; // K | A₁
const SEAM2 = { top: 2472.4 - 6, bottom: 2141.5 - 6 }; // A₁ | A₂

interface Letter {
  key: string;
  layer: LayerName;
  clip?: string;
  c: [number, number];
  rot: number;
}

const LETTERS: Letter[] = [
  { key: "D", layer: "D", c: [278, 1404], rot: -3 },
  { key: "U", layer: "U", c: [848, 1411], rot: 2.5 },
  { key: "K", layer: "KAA", clip: "url(#p2-K)", c: [1480, 1400], rot: -2 },
  { key: "A1", layer: "KAA", clip: "url(#p2-A1)", c: [1960, 1400], rot: 3 },
  { key: "A2", layer: "KAA", clip: "url(#p2-A2)", c: [2395, 1400], rot: -2.5 },
  { key: "T", layer: "T", c: [2917, 1404], rot: 2 },
];

const SCREEN_C: [number, number] = [FULL_C[0], FULL_C[1] + 60];
const BIG = 5;
const STEP = 9;
const FIRST = 6;
const LANDED = FIRST + STEP * 6 + 40; // every letter spring has settled
const TULIP = FIRST + STEP * 6 + 6; // after the last letter has left the centre
const BAR = TULIP + 22;
const WORDS = BAR + 14;
const WORD_STEP = 21;

export const P2_Kinetisch: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const fonts = useBrandFonts();

  // small kick on every letter entrance
  let kick = { x: 0, y: 0, r: 0 };
  for (let i = 0; i < 6; i++) {
    const s = shake(frame, FIRST + i * STEP, 7, 8, 10 + i);
    kick = { x: kick.x + s.x, y: kick.y + s.y, r: kick.r + s.r };
  }

  // tulip drop
  const drop = sp(frame, fps, TULIP, { damping: 11, stiffness: 95, mass: 1.1 });
  const tulipY = mix(-3200, 0, drop);
  const land = shake(frame, TULIP + 14, 10, 14, 20);

  // bar
  const barP = seg(frame, BAR, BAR + 14, easeInOut);
  const bar = L.bar.bbox;

  // tagline window
  const words = BRAND.taglineEn.toUpperCase().split(" ");
  const wordTop = uy(1650) + 96;
  const winH = 150;

  const arIn = seg(frame, WORDS + WORD_STEP * 4 + 2, WORDS + WORD_STEP * 4 + 16, easeOutExpo);

  return (
    <Stage
      layout="portrait-full"
      background={COLORS.paper}
      svgStyle={{ transform: `translate(${kick.x + land.x}px, ${kick.y + land.y}px) rotate(${kick.r}deg)` }}
      overlay={
        <>
          <Grain opacity={0.05} seed={8} />
          <AbsoluteFill style={{ alignItems: "center" }}>
            <div style={{ position: "absolute", top: wordTop, height: winH, width: 1000, overflow: "hidden" }}>
              {words.map((w, i) => {
                const t0 = WORDS + i * WORD_STEP;
                const isLast = i === words.length - 1;
                const enter = seg(frame, t0, t0 + 13, easeOutExpo);
                const exit = isLast ? arIn : seg(frame, t0 + WORD_STEP, t0 + WORD_STEP + 13, easeOutExpo);
                const y = mix(winH, 0, enter) - exit * winH;
                if (enter <= 0 || exit >= 1) return null;
                return (
                  <div
                    key={w}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      height: winH,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.latin,
                      fontWeight: 800,
                      fontSize: 104,
                      letterSpacing: "-0.01em",
                      color: COLORS.wine,
                      transform: `translateY(${y}px)`,
                    }}
                  >
                    {w}
                  </div>
                );
              })}
              <div
                dir="rtl"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: winH,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.arabic,
                  fontWeight: 800,
                  fontSize: 92,
                  color: COLORS.wine,
                  transform: `translateY(${mix(winH, 0, arIn)}px)`,
                  opacity: arIn > 0 ? 1 : 0,
                }}
              >
                {BRAND.taglineAr}
              </div>
            </div>
          </AbsoluteFill>
        </>
      }
    >
      <defs>
        <clipPath id="p2-K">
          <polygon points={`-600,1000 ${SEAM1.top + 1},1000 ${SEAM1.bottom + 1},1800 -600,1800`} />
        </clipPath>
        <clipPath id="p2-A1">
          <polygon points={`${SEAM1.top - 1},1000 ${SEAM2.top + 1},1000 ${SEAM2.bottom + 1},1800 ${SEAM1.bottom - 1},1800`} />
        </clipPath>
        <clipPath id="p2-A2">
          <polygon points={`${SEAM2.top - 1},1000 3800,1000 3800,1800 ${SEAM2.bottom - 1},1800`} />
        </clipPath>
        <clipPath id="p2-bar">
          <rect x={bar.x - 20} y={bar.y - 40} width={(bar.w + 40) * barP} height={bar.h + 80} />
        </clipPath>
      </defs>

      {/* letters */}
      {frame >= LANDED && <LogoLayer name="KAA" />}
      {LETTERS.map((ltr, i) => {
        const tIn = FIRST + i * STEP;
        if (frame < tIn) return null;
        if (frame >= LANDED && ltr.layer === "KAA") return null;
        const cut = seg(frame, tIn, tIn + 5, easeOutExpo); // hard cut-in
        const fly = sp(frame, fps, tIn + STEP, { damping: 18, stiffness: 150, mass: 0.8 }); // 0 = big, 1 = in slot
        const s = mix(BIG * mix(1.22, 1, cut), 1, fly);
        const dx = mix(SCREEN_C[0] - ltr.c[0], 0, fly);
        const dy = mix(SCREEN_C[1] - ltr.c[1], 0, fly);
        const rot = mix(ltr.rot, 0, fly);
        return (
          <g key={ltr.key} transform={`translate(${dx} ${dy}) ${about(ltr.c[0], ltr.c[1], `scale(${s}) rotate(${rot})`)}`} opacity={cut > 0 ? 1 : 0}>
            <LogoLayer name={ltr.layer} clipPath={ltr.clip} />
          </g>
        );
      })}

      {/* tulip drops on top */}
      {frame >= TULIP && (
        <g transform={`translate(0 ${tulipY})`}>
          {MARK.map((n) => (
            <LogoLayer key={n} name={n} transform={MARK_T_PORTRAIT} />
          ))}
        </g>
      )}

      {/* bar */}
      <LogoLayer name="bar" clipPath="url(#p2-bar)" />
    </Stage>
  );
};

export const P2_DURATION = WORDS + WORD_STEP * 4 + 70;
