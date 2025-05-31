/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/just-rayvel-taruc01.github.io' : '',
  assetPrefix: isProd ? '/just-rayvel-taruc01.github.io/' : '',
};

module.exports = nextConfig;
