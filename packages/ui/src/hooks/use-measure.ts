"use client";

import { useCallback, useState } from "react";

/** Content-box dimensions in CSS pixels */
export function useMeasure<T extends Element = HTMLDivElement>() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const measure = useCallback((node: T | null) => {
    if (!node) return;

    const observer = new ResizeObserver(entries => {
      for (const { contentRect } of entries) {
        const { width, height } = contentRect;

        setSize(previous => {
          if (previous.width === width && previous.height === height) {
            return previous;
          }

          return { width, height };
        });
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { measure, ...size };
}
