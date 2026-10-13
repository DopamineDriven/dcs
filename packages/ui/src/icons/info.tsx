import type { BaseSVGProps } from "@/icons/index";

export function Info({
  strokeWidth = 1.5,
  role = "img",
  ...svg
}: BaseSVGProps) {
  return (
    <svg
      role={role}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
