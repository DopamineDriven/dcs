"use client";

import type { FocusEvent, PointerEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Cursor, useCursorState } from "motion-plus/react";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
import type { FocusLabel } from "@/ui/sidebar/utils";
import { getFocusLabel, sidebarCursorZone } from "@/ui/sidebar/utils";

const labelStyles =
  "block max-w-64 rounded-xl bg-primary px-3 py-2 text-sm leading-relaxed font-medium text-primary-foreground shadow-md shadow-primary/10";

export function SidebarCursor({
  children,
  className
}: {
  children: ReactNode;
  className: string;
}) {
  const { zone } = useCursorState();
  const [pointerInside, setPointerInside] = useState(false);
  const [dismissedZone, setDismissedZone] = useState<string>();
  const [focusTarget, setFocusTarget] = useState<HTMLElement>();
  const [focusLabel, setFocusLabel] = useState<FocusLabel>();
  const hoverLabel =
    pointerInside &&
    !focusLabel &&
    zone !== dismissedZone &&
    zone?.startsWith(sidebarCursorZone)
      ? zone.slice(sidebarCursorZone.length)
      : undefined;

  function clearFocusLabel() {
    setFocusTarget(undefined);
    setFocusLabel(undefined);
  }

  function dismiss() {
    setDismissedZone(zone ?? undefined);
    clearFocusLabel();
  }

  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    const target = event.target.closest<HTMLElement>("[data-cursor-zone]");
    if (!target || !event.target.matches(":focus-visible")) return;
    setDismissedZone(zone ?? undefined);
    setFocusTarget(target);
    setFocusLabel(getFocusLabel(target));
  }

  function handlePointerOver(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const target =
      event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-cursor-zone]")
        : null;
    setPointerInside(true);
    clearFocusLabel();
    if (target?.dataset.cursorZone !== dismissedZone)
      setDismissedZone(undefined);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Tab" || event.key === "Escape")
        setDismissedZone(zone ?? undefined);
      if (event.key === "Escape") {
        setFocusTarget(undefined);
        setFocusLabel(undefined);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [zone]);

  useEffect(() => {
    if (!focusTarget) return;
    const updatePosition = () => setFocusLabel(getFocusLabel(focusTarget));
    const observer = new ResizeObserver(updatePosition);
    observer.observe(focusTarget);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [focusTarget]);

  return (
    <div
      className={className}
      onFocusCapture={handleFocus}
      onBlurCapture={clearFocusLabel}
      onPointerOverCapture={handlePointerOver}
      onPointerLeave={() => {
        setPointerInside(false);
        setDismissedZone(undefined);
      }}
      onPointerDownCapture={clearFocusLabel}
      onClickCapture={dismiss}>
      {children}
      <Cursor
        follow
        center={{ x: 0, y: 0.5 }}
        offset={{ x: 22, y: 0 }}
        spring={{ stiffness: 600, damping: 42 }}
        matchTextSize={false}
        style={{ width: "auto", height: "auto" }}
        aria-hidden="true"
        className="hidden md:block">
        {hoverLabel && (
          <motion.span
            key="sidebar-cursor-label"
            data-sidebar-cursor-label=""
            className={labelStyles}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.12 }}>
            {hoverLabel}
          </motion.span>
        )}
      </Cursor>
      {focusLabel &&
        createPortal(
          <motion.div
            aria-hidden="true"
            data-sidebar-focus-label=""
            className="pointer-events-none fixed z-50 hidden -translate-y-1/2 md:block"
            style={{ left: focusLabel.left, top: focusLabel.top }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12 }}>
            <span className={labelStyles}>{focusLabel.label}</span>
          </motion.div>,
          document.body
        )}
    </div>
  );
}
