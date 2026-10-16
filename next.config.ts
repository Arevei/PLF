import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/campiagns", destination: "/campaigns", permanent: true },
      { source: "/campaign-detail", destination: "/campaigns", permanent: true },
      { source: "/news-detail", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
