// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Removed basePath and assetPrefix as per previous discussion

  images: {
    unoptimized: true,
  },
};

export default nextConfig;