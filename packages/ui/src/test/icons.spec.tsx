import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { ArrowDown, ArrowUpRight } from "@/icons/index";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: ReactNode) {
  const container = document.createElement("div");
  const root = createRoot(container);
  act(() => root.render(node));
  return container;
}

describe("arrow icons", () => {
  it("renders ArrowUpRight as a 24px stroke icon that accepts className", () => {
    const el = render(<ArrowUpRight className="size-4" aria-hidden />);
    const svg = el.querySelector("svg");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 24 24");
    expect(svg?.getAttribute("stroke")).toBe("currentColor");
    expect(svg?.getAttribute("class")).toBe("size-4");
    expect(svg?.querySelectorAll("path")).toHaveLength(2);
  });

  it("renders ArrowDown with the img role by default", () => {
    const el = render(<ArrowDown />);
    expect(el.querySelector("svg")?.getAttribute("role")).toBe("img");
  });
});
