import type { BaseSVGProps } from "@/icons/index";

export function CircleCheck({
  role = "img",
  strokeWidth = 1,
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
      <path d="m16 9-5.5 5.5L8 12" />
    </svg>
  );
}
