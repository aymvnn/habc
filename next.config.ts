import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 80] },
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
