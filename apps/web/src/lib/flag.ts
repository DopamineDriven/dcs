const FLAG_HEIGHT = 32;
const SCALE = 2;

/** Normalizes an ISO country code to its asset name under /flags. */
export function flagCode(country: string | undefined) {
  return country && /^[A-Za-z]{2}$/.test(country)
    ? country.toLowerCase()
    : undefined;
}

export function flagImageTag(
  src: string,
  width: number,
  height: number,
  code: string
) {
  return `<img src="${src}" width="${width}" height="${height}" alt="${code.toUpperCase()} flag">`;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement | undefined>(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(undefined);
    img.src = src;
  });
}

/**
 * Rasterizes the visitor's flag from /flags/<cc>.svg in the browser and returns
 * a sized `<img>` with a PNG data url for the submission email. Same approach
 * as capturing a chart: draw the SVG to a canvas, export PNG. Empty string when
 * there is no valid code, no asset, or no canvas.
 */
export async function captureFlag(
  country: string | undefined,
  height = FLAG_HEIGHT
) {
  const code = flagCode(country);
  if (!code || typeof document === "undefined") return "";

  const img = await loadImage(`/flags/${code}.svg`);
  if (!img) return "";

  const ratio =
    img.naturalWidth > 0 && img.naturalHeight > 0
      ? img.naturalWidth / img.naturalHeight
      : 1;
  const width = Math.max(1, Math.round(height * ratio));

  const canvas = document.createElement("canvas");
  canvas.width = width * SCALE;
  canvas.height = height * SCALE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.scale(SCALE, SCALE);
  ctx.drawImage(img, 0, 0, width, height);

  return flagImageTag(canvas.toDataURL("image/png"), width, height, code);
}
