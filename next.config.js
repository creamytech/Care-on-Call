/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // ignoreBuildErrors: true,
  },
  images: {
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    // Allow unoptimized images for development and static images
    unoptimized: process.env.NODE_ENV === 'development',
    // Add allowed domains if you're loading images from external sources
    remotePatterns: [
      // Add patterns here if loading images from external domains
    ],
  },
}

module.exports = nextConfig