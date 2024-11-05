const productionUrl = "https://drisdell.com";

const previewUrl = "https://drisdell-dev.vercel.app";

const localUrl = "http://localhost:3001";

/**
 * @param {"development" | "production" | "test" | undefined} env
 */
const getSiteUrl = env =>
  process.env.VERCEL_ENV === "development"
    ? previewUrl
    : !env || env === "development"
      ? localUrl
      : process.env.VERCEL_ENV === "production"
        ? productionUrl
        : previewUrl;
 
/**
 * @param {ReturnType<typeof getSiteUrl>} siteUrl
 * @returns {"https://drisdell-dev.vercel.app" | "https://drisdell.com" | "http://localhost:3001" | `https://${string}`}
 */
const flexiUrl = siteUrl =>
  process.env.VERCEL_URL && process.env.VERCEL_URL !== siteUrl
    ? `https://${process.env.VERCEL_URL}`
    : siteUrl;

// @ts-check
/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: flexiUrl(getSiteUrl(process.env.NODE_ENV)),
  changefreq: "daily",
  priority: 0.9,
  exclude: ["/_*"],
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: ["/*"]
      },
      {
        userAgent: "*",
        disallow: ["/_*"]
      }
    ]
  }
};
