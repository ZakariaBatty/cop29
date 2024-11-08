/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cop29',
  assetPrefix: '/cop29/',
  trailingSlash: true,
  // Configure rewrites to handle direct URL access
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/cop29/:path*',
          destination: '/:path*',
        },
      ],
    }
  },
};

export default nextConfig;
