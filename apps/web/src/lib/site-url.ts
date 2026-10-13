export const getProductionUrl = "https://drisdell.com" as const;

export const getPreviewUrl = "https://drisdell-dev.vercel.app" as const;

export const getLocalUrl = "http://localhost:3001" as const;

export const getSiteUrl = (env?: typeof process.env.VERCEL_ENV) => {
  if (!env) return getLocalUrl;
  else if (env === "production") return getProductionUrl;
  else if (env === "preview") return getPreviewUrl;
  else return getLocalUrl;
};
