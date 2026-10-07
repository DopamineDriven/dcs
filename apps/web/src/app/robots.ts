import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots() {
  return <MetadataRoute.Robots>{
    rules: [
      {
        userAgent: "*",
        allow: ["/*"]
      }
    ],
    sitemap: `${getSiteUrl(process.env.VERCEL_ENV)}/sitemap.xml` as const,
    host: getSiteUrl(process.env.VERCEL_ENV)
  };
}
