// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/just-rayvel-taruc01.github.io',
  assetPrefix: '/just-rayvel-taruc01.github.io',
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;