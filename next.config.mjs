/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.itm.ac.in',
      },
    ],
  },
}

export default nextConfig
