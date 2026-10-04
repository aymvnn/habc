import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    /* Muntregister a9-1: widths tuned to the site's frames — a 21:9 band at 1442px on a 2x screen takes the 2880 file,
       not the default 3840; 1280 and 1440 cover the half-width photographs and laptop bands. */
    deviceSizes: [640, 828, 1080, 1280, 1440, 1920, 2560, 2880],
  },
  // the forms may carry one optional attachment (app/actions/forms.ts caps it at 5 MB)
  // UX-12 (owner, 4 Oct 2026): globalNotFound — every unknown address gets the house 404 (app/global-not-found.tsx)
  experimental: { serverActions: { bodySizeLimit: "6mb" }, globalNotFound: true },
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
  async headers() {
    return [
      {
        // brand videos and logos never change without a new filename
        source: "/:folder(video|logo)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
