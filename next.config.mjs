/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.hive.blog" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
}

export default nextConfig
