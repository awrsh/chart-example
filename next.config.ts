/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gw.ashena.ir",
        pathname: "/iam/file/get/**",
      },
    ],
  },
};

module.exports = nextConfig;
