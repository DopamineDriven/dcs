export type FocusLabel = {
  label: string;
  left: number;
  top: number;
};

export const sidebarCursorZone = "section-sidebar:";

export function getFocusLabel<const T extends HTMLElement = HTMLElement>(
  target: T
) {
  const zone = target.dataset.cursorZone;
  const rect = target.getBoundingClientRect();
  if (!zone?.startsWith(sidebarCursorZone) || !rect.width || !rect.height)
    return;

  return {
    label: zone.slice(sidebarCursorZone.length),
    left: rect.right + 12,
    top: Math.max(
      40,
      Math.min(rect.top + rect.height / 2, window.innerHeight - 40)
    )
  } satisfies FocusLabel;
}
