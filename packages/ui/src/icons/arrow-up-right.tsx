import type { BaseSVGProps } from "@/icons/index";

export function ArrowUpRight({
  role = "img",
  strokeWidth = "2",
  ...svg
}: BaseSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svg}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
