import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
