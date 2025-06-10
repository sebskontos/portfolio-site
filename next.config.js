/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sebskontos.github.io',
  assetPrefix: '/sebskontos.github.io/',
};

module.exports = nextConfig;
