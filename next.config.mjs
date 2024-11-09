/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  basePath: '/cop29',
  assetPrefix: '/cop29/',
  trailingSlash: true,
};

export default nextConfig;
