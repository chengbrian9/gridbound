/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optimize for production deployment
  output: 'standalone',
  // Enable image optimization
  images: {
    domains: [],
    remotePatterns: [],
  },
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
