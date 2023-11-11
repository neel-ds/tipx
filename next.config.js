/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
