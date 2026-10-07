"use client";

import type { Easing, PanInfo } from "motion/react";
import type { JSX, KeyboardEvent } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import type { BaseSVGProps } from "@/icons/index";
import type { ToastRecord, ToastVariant } from "@/toast/types";
import { useAutoDismiss } from "@/hooks/use-auto-dismiss";
import { CircleAlert } from "@/icons/circle-alert";
import { CircleCheck } from "@/icons/circle-check";
import { Info } from "@/icons/info";
import { X } from "@/icons/x";
import { cn } from "@/lib/utils";

const EXIT_EASE = [0.215, 0.61, 0.355, 1] as const satisfies Easing;
const SWIPE_DISMISS_OFFSET = 72;
const SWIPE_DISMISS_VELOCITY = 400;
type IconType = ({ role, strokeWidth, ...svg }: BaseSVGProps) => JSX.Element;

const variantIcon = {
  default: null,
  success: CircleCheck,
  error: CircleAlert,
  info: Info
} satisfies Record<ToastVariant, IconType | null>;

const variantIconClass = {
  default: "",
  success: "text-success",
  error: "text-destructive",
  info: "text-muted-foreground"
} satisfies Record<ToastVariant, string>;

interface ToastItemProps {
  toast: ToastRecord;
  paused: boolean;
  onDismiss: (id: string) => void;
}
export function ToastItem({ toast, paused, onDismiss }: ToastItemProps) {
  const x = useMotionValue(0);
  const dismiss = () => onDismiss(toast.id);

  useAutoDismiss({
    duration: toast.duration,
    paused,
    resetKey: toast.revision,
    onExpire: dismiss
  });

  function handleDragEnd(_: unknown, info: PanInfo) {
    const swipedOut =
      info.offset.x > SWIPE_DISMISS_OFFSET ||
      info.velocity.x > SWIPE_DISMISS_VELOCITY;

    if (swipedOut) {
      animate(x, 400, { duration: 0.2, ease: "easeIn" });
      dismiss();
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 30 });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === "Escape") {
      event.stopPropagation();
      dismiss();
    }
  }

  const Icon = variantIcon[toast.variant];
  const isError = toast.variant === "error";

  return (
    <motion.li
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      aria-atomic
      tabIndex={0}
      layout
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.18, ease: EXIT_EASE }
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ left: 0, right: 1 }}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      onKeyDown={handleKeyDown}
      style={{ x }}
      className="border-border bg-popover text-popover-foreground focus-visible:ring-ring pointer-events-auto flex w-full items-start gap-3 rounded-lg border p-4 shadow-lg outline-none focus-visible:ring-2">
      {Icon && (
        <Icon
          aria-hidden
          className={cn(
            "mt-0.5 size-5 shrink-0",
            variantIconClass[toast.variant]
          )}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-sm leading-5 font-medium">{toast.title}</p>
        {toast.description && (
          <p className="text-muted-foreground text-sm leading-5">
            {toast.description}
          </p>
        )}
      </div>

      {toast.action && (
        <button
          type="button"
          onClick={() => {
            toast.action?.onClick();
            dismiss();
          }}
          className="border-border hover:bg-muted focus-visible:ring-ring shrink-0 rounded-md border px-2 py-1 text-xs font-medium focus-visible:ring-2 focus-visible:outline-none">
          {toast.action.label}
        </button>
      )}

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss notification"
        className="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring -m-1 shrink-0 rounded-md p-1 focus-visible:ring-2 focus-visible:outline-none">
        <X aria-hidden className="size-4" />
      </button>
    </motion.li>
  );
}
