/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cop29',
  assetPrefix: '/cop29/',
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/documents/:path*',
        destination: '/cop29/documents/:path*',
      },
    ];
  },
};

export default nextConfig;