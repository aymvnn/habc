import React from "react";
import { loadFont as loadArchivo } from "@remotion/google-fonts/Archivo";
import { loadFont as loadAlmarai } from "@remotion/google-fonts/Almarai";
import { COLORS } from "./paths";
import { FULL } from "./Layers";

/** Loads the two brand text faces. Call inside the component that uses them. */
export const useBrandFonts = () => {
  const archivo = loadArchivo("normal", { weights: ["600", "800"], subsets: ["latin"] });
  const almarai = loadAlmarai("normal", { weights: ["700", "800"], subsets: ["arabic"] });
  return { latin: archivo.fontFamily, arabic: almarai.fontFamily };
};

/** viewBox unit → canvas px (y) for the portrait-full layout on a 1080×1920 canvas. */
export const uy = (unit: number) => (unit - FULL.y) / (FULL.w / 1080);
/** viewBox unit → canvas px (x) */
export const ux = (unit: number) => (unit - FULL.x) / (FULL.w / 1080);

export interface CaptionProps {
  top: number;
  opacity?: number;
  dy?: number;
  latin?: boolean;
  size?: number;
  weight?: number;
  tracking?: string;
  color?: string;
  family: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  blur?: number;
}

/** Centred one-line caption on the canvas. */
export const Caption: React.FC<CaptionProps> = ({
  top,
  opacity = 1,
  dy = 0,
  latin = true,
  size = 26,
  weight = 600,
  tracking = "0.34em",
  color = COLORS.wine,
  family,
  children,
  style,
  blur = 0,
}) => (
  <div
    dir={latin ? "ltr" : "rtl"}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top,
      textAlign: "center",
      fontFamily: family,
      fontWeight: weight,
      fontSize: size,
      letterSpacing: latin ? tracking : 0,
      textTransform: latin ? "uppercase" : "none",
      color,
      opacity,
      transform: `translateY(${dy}px)`,
      filter: blur > 0.3 ? `blur(${blur}px)` : undefined,
      whiteSpace: "nowrap",
      // compensate the trailing letter-spacing so the line is optically centred
      paddingLeft: latin ? tracking : 0,
      ...style,
    }}
  >
    {children}
  </div>
);
