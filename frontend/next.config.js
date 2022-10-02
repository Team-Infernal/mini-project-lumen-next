/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${process.env.BACKEND_URL}/api/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
