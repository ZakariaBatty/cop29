/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cop29',
  assetPrefix: '/cop29/',
  trailingSlash: true,
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
};

export default nextConfig;