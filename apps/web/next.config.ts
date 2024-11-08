import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

export default withPWAInit({ dest: "public", register: true, scope: "/app" })({
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false, tsconfigPath: "./tsconfig.json" },
  images: {
    loader: "default",
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3001",
        protocol: "http"
      },
      {
        hostname: "drisdell.com",
        protocol: "https"
      },
      {
        hostname: "email-smtp.us-east-1.amazonaws.com",
        protocol: "https"
      },
      { hostname: "d2f904nk7e5fig.cloudfront.net", protocol: "https" },
      {
        hostname: "dcs-headless.com",
        protocol: "https"
      },
      {
        hostname: "www.dcs-headless.com",
        protocol: "https"
      },
      { hostname: "drisdell.org", protocol: "https" },
      { hostname: "images.unsplash.com", protocol: "https" },
      { hostname: "tailwindui.com", protocol: "https" },
      {
        hostname: "secure.gravatar.com",
        protocol: "https"
      },
      {
        hostname: "drisdell-dev.vercel.app",
        protocol: "https"
      },
      { hostname: "dev-to-uploads.s3.amazonaws.com", protocol: "https" },
      {
        hostname: "ypuktmwmnilhirdf.public.blob.vercel-storage.com",
        protocol: "https",
        port: ""
      }
    ]
  },
  productionBrowserSourceMaps: true
} satisfies NextConfig);
