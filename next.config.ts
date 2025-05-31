const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'just-rayvel-taruc01.github.io'; // ✅ your repo name
const baseUrl = isGhPages && isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  trailingSlash: true,
  env: {
    baseUrl, // ✅ now this works
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  output: 'export',
  basePath: baseUrl,
  assetPrefix: baseUrl + '/',
};

module.exports = nextConfig; // ✅ CommonJS for compatibility with Next.js
