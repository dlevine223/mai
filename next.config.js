const { withAtlasConfig } = require("@wpengine/atlas-next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mairebuilddev1.wpenginepowered.com",
      },
      {
        protocol: "https",
        hostname: "*.wpenginepowered.com",
      },
    ],
  },
};

module.exports = withAtlasConfig(nextConfig);
