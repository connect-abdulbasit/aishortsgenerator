import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },
  experimental: {
    // appDir: true, // Enables the app directory features
    serverComponentsExternalPackages: ["playht"], // Marks "playht" as an external package
  },
};

export default nextConfig;
