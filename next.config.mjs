/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        pathname: "/id/**"
      }
    ],
  },

  env: {
    API_URL: process.env.API_URL,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
