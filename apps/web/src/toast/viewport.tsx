"use client";

import type { FocusEvent } from "react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import type { ToastRecord } from "@/toast/types";
import { useDocumentHidden } from "@dcs/ui";
import { ToastItem } from "@/toast/item";

interface ToastViewportProps {
  toasts: ToastRecord[];
  maxVisible: number;
  onDismiss: (id: string) => void;
}

export function ToastViewport({
  toasts,
  maxVisible,
  onDismiss
}: ToastViewportProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const hidden = useDocumentHidden();

  const paused = hovered || focused || hidden;
  const visible = toasts.slice(0, maxVisible);

  function handleBlur(event: FocusEvent<HTMLOListElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocused(false);
    }
  }

  return (
    <section
      aria-label="Notifications"
      tabIndex={-1}
      className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center p-4 outline-none sm:right-20 sm:left-auto sm:w-96 sm:p-6">
      <ol
        className="flex w-full flex-col gap-2"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}>
        <AnimatePresence initial={false} mode="popLayout" anchorY="bottom">
          {visible.map(toast => (
            <ToastItem
              key={toast.id}
              toast={toast}
              paused={paused}
              onDismiss={onDismiss}
            />
          ))}
        </AnimatePresence>
      </ol>
    </section>
  );
}
