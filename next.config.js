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
    return config;
  },
  async headers() {
    return [
      {
        source: '/api/(.*)', // CORS를 적용할 경로 지정
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 모든 도메인을 허용하려면 '*'를 사용
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // 허용할 HTTP 메서드 지정
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Authorization, Content-Type', // 허용할 헤더 지정
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
