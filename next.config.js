/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors:true,
  },
  reactStrictMode: true,
  images: {
    domains: ['image.shutterstock.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
