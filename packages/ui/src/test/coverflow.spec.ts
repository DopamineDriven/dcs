import { describe, expect, it } from "vitest";
import {
  coverflowRotateY,
  coverflowScale,
  coverflowX,
  coverflowZIndex
} from "@/carousel/coverflow";

describe("coverflow mappers", () => {
  it("leaves the centered item flat, full size, unshifted, and on top", () => {
    expect(coverflowRotateY(0)).toBe(0);
    expect(coverflowScale(0)).toBe(1);
    expect(coverflowX(0)).toBe("0%");
    expect(coverflowZIndex(0)).toBe(1000);
  });

  it("turns and shrinks items 200px from center", () => {
    expect(coverflowRotateY(-200)).toBe(20);
    expect(coverflowRotateY(200)).toBe(-20);
    expect(coverflowScale(-200)).toBeCloseTo(0.7);
    expect(coverflowScale(200)).toBeCloseTo(0.7);
  });

  it("clamps rotation and scale beyond the edge instead of over-rotating", () => {
    expect(coverflowRotateY(500)).toBe(-20);
    expect(coverflowScale(-900)).toBeCloseTo(0.7);
  });

  it("pulls far items a full width toward the center so they stack", () => {
    expect(coverflowX(-800)).toBe("100%");
    expect(coverflowX(800)).toBe("-100%");
    expect(coverflowX(500)).toBe("-50%");
  });

  it("drops far items beneath nearer ones", () => {
    expect(coverflowZIndex(300)).toBe(700);
    expect(coverflowZIndex(-300)).toBe(700);
    expect(coverflowZIndex(1500)).toBe(0);
  });
});
