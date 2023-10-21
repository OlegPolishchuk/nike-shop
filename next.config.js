/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: '127.0.0.1' },
      { hostname: 'nike-shop-cms-production.up.railway.app' },
      { hostname: 'www.nike.com' },
    ],
  },
};

module.exports = nextConfig;
