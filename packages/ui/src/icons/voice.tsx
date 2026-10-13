import type { BaseSVGProps } from "@/icons/index.ts";

export function Voice({
  role = "img",
  strokeWidth = "2",
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
      {...svg}>
      <path d="M10 3.1a.9.9 0 0 1 .9.9v16a.9.9 0 0 1-1.8 0V4a.9.9 0 0 1 .9-.9M15 5.6a.9.9 0 0 1 .9.9v10a.9.9 0 0 1-1.8 0v-10a.9.9 0 0 1 .9-.9M5 8.6a.9.9 0 0 1 .9.9v5a.9.9 0 0 1-1.8 0v-5a.9.9 0 0 1 .9-.9M20 9.1a.9.9 0 0 1 .9.9v4a.9.9 0 0 1-1.8 0v-4a.9.9 0 0 1 .9-.9" />
    </svg>
  );
}
