/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Important for GH Pages static export to work with relative paths
  assetPrefix: './',
  basePath: '',
};

module.exports = nextConfig;
