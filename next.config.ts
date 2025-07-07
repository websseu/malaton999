import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marvelrunkorea.com',
      },
    ],
  },
}

export default nextConfig
