/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = !!process.env.VERCEL;

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd && !isVercel ? '/just-rayvel-taruc01' : '',
  assetPrefix: isProd && !isVercel ? '/just-rayvel-taruc01/' : '',
};

module.exports = nextConfig;
