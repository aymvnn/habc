import { Easing, interpolate, spring } from "remotion";

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Linear 0..1 progress between two frames, clamped. */
export const seg = (frame: number, from: number, to: number, easing?: (t: number) => number) =>
  interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

export const easeOut = Easing.out(Easing.cubic);
export const easeIn = Easing.in(Easing.cubic);
export const easeInOut = Easing.inOut(Easing.cubic);
export const easeOutExpo = Easing.bezier(0.16, 1, 0.3, 1);
export const easeBrand = Easing.bezier(0.32, 0.72, 0, 1);

/** Spring that starts at `delay` frames and settles to 1. */
export const sp = (
  frame: number,
  fps: number,
  delay: number,
  opts: { damping?: number; stiffness?: number; mass?: number; durationInFrames?: number } = {},
) =>
  spring({
    frame: frame - delay,
    fps,
    config: {
      damping: opts.damping ?? 14,
      stiffness: opts.stiffness ?? 110,
      mass: opts.mass ?? 1,
    },
    durationInFrames: opts.durationInFrames,
  });

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;
