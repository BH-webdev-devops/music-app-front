import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1.sndcdn.com", // Allow images from this domain
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Allow images from this domain
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com", // Allow images from this domain
      }
    ],
  },
  /* config options here */
};

// eslint-disable-next-line
export default nextConfig;
