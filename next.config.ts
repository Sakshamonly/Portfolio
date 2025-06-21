import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💥 disables blocking builds on ESLint errors
  },
  // Add your other config here if any
}

export default nextConfig
