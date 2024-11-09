/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cop29',
  assetPrefix: '/cop29/',

};

export default nextConfig;
