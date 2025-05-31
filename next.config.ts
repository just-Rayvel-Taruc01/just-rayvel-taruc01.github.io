import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export

  reactStrictMode: true, // Enable React strict mode for better error handling
  transpilePackages: ['@geist-ui/react', '@geist-ui/icons'], // Transpile Geist UI packages
  // basePath: '/my-portfolio',
  // assetPrefix: '/my-portfolio/',

  images: {
    unoptimized: true, // Crucial for static export to GitHub Pages
  },
};

export default nextConfig;
