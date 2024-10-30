export const wpApiUrl = process.env.WORDPRESS_API_URL ?? "";

export const wpAuthToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? "";

export const wpHeaders = {
  "Content-Type": "application/json",
  Accept: "*/*",
  "Cache-Control": "no-cache",
  "Accept-Encoding": "gzip, deflate, br",
  Connection: "keep-alive",
  Authorization: `Bearer ${wpAuthToken}`
} as const;

