import type { BaseSVGProps } from "@/icons/index";

export function ChevronLeft({
  strokeWidth = "2",
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
