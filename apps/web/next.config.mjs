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
        hostname: "drisdell-headless.com",
        protocol: "https"
      },
      {
        hostname: "www.drisdell-headless.com",
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
        hostname: "futurebot-search-eu-standard1.azurewebsites.net",
        protocol: "https"
      }
    ]
  },
  productionBrowserSourceMaps: true
});
