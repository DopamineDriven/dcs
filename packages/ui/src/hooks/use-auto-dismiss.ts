"use client";

import { useEffect, useEffectEvent, useRef } from "react";

export interface AutoDismissOptions {
  duration: number;
  paused: boolean;
  resetKey: number;
  onExpire: () => void;
}

export function useAutoDismiss({
  duration,
  paused,
  resetKey,
  onExpire
}: AutoDismissOptions) {
  const expire = useEffectEvent(onExpire);
  const remainingRef = useRef(duration);

  useEffect(() => {
    remainingRef.current = duration;
  }, [duration, resetKey]);

  useEffect(() => {
    if (paused || !Number.isFinite(duration)) return;

    const startedAt = Date.now();
    const timer = setTimeout(() => expire(), remainingRef.current);

    return () => {
      clearTimeout(timer);
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedAt)
      );
    };
  }, [duration, paused, resetKey]);
}
