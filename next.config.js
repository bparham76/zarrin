/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.billboardzarin.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },}

module.exports = nextConfig
