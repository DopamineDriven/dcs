import type { ReactNode } from "react";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, expect, it } from "vitest";
import { Brand } from "@/ui/nav/brand";
import { BrandButtonLink } from "@/ui/nav/button";
import { TextLink } from "@/ui/nav/text-link";

(
  globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

function render(node: ReactNode) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(node));
  return container;
}

describe("brand primitives", () => {
  it("renders the primary button as a link with brand colors", () => {
    const el = render(
      <BrandButtonLink href="/contact-us">Contact Us</BrandButtonLink>
    );
    const a = el.querySelector("a");
    expect(a?.getAttribute("href")).toBe("/contact-us");
    expect(a?.className).toContain("bg-dcs-800");
    expect(a?.className).toContain("text-white");
  });

  it("keeps a visible focus ring (outline-none would cancel focus-visible:outline-*)", () => {
    const el = render(<BrandButtonLink href="/x">Go</BrandButtonLink>);
    const a = el.querySelector("a");
    expect(a?.className).not.toContain("outline-none");
    expect(a?.className).toContain("focus-visible:outline-2");
  });

  it("renders the light variant on a background surface", () => {
    const el = render(
      <BrandButtonLink href="/x" variant="light">
        Go
      </BrandButtonLink>
    );
    expect(el.querySelector("a")?.className).toContain("bg-white");
  });

  it("renders a text link in primary color", () => {
    const el = render(<TextLink href="/about-us">More</TextLink>);
    expect(el.querySelector("a")?.className).toContain("text-dcs-800");
  });

  it("renders the brand lockup as a home link with the wordmark", () => {
    const el = render(<Brand />);
    const a = el.querySelector("a");
    expect(a?.getAttribute("href")).toBe("/");
    expect(a?.getAttribute("aria-label")).toBe(
      "Drisdell Consulting Services home"
    );
    expect(a?.textContent).toContain("Drisdell");
    expect(a?.textContent).toContain("Consulting Services");
    expect(a?.querySelector("svg")).not.toBeNull();
  });
});
