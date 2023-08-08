/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {

    config.resolve.fallback = {
      ...config.resolve.fallback,
      os: false,
      fs: false,
      stream: false,
      crypto: false,
      tls: false,
      net: false,
      path: false,
    };

    return config;
  },
}

module.exports = nextConfig
