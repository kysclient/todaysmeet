/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    unoptimized: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    config.exportPathMap = async function () {
      return {
        '/messages/[id]': { page: '/messages/[id]' },
        '/tweet/[id]': { page: '/tweet/[id]' },
        '/user/[id]': { page: '/user/[id]' },
      };
    };

    return config;
  }
};

module.exports = nextConfig;
