import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  getLatestRouterTransition,
  publishRouterTransitionStart,
  resetRouterTransitions,
  subscribeRouterTransitionStart
} from "@/navigation/transition-store";

// The store resolves hrefs against the document; give Node a location.
(globalThis as { window?: unknown }).window = {
  location: { href: "https://www.drisdell.com/about-us" }
};

const event = {
  id: "t1",
  timestamp: 1700000000000,
  fromRoutes: ["/about-us"],
  prefetchIntent: "auto" as const
};

describe("transition store", () => {
  beforeEach(() => resetRouterTransitions());

  it("resolves a relative push href against the current document", () => {
    publishRouterTransitionStart("/consultants", "push", event);
    assert.equal(getLatestRouterTransition()?.url.pathname, "/consultants");
    assert.equal(
      getLatestRouterTransition()?.url.origin,
      "https://www.drisdell.com"
    );
  });

  it("accepts the absolute href Next passes for traverse", () => {
    publishRouterTransitionStart(
      "https://www.drisdell.com/contact-us?x=1",
      "traverse",
      null
    );
    const latest = getLatestRouterTransition();
    assert.equal(latest?.type, "traverse");
    assert.equal(latest?.url.pathname, "/contact-us");
    assert.equal(latest?.url.search, "?x=1");
  });

  it("fills in a local id, timestamp, and empty routes when Next sends no event", () => {
    publishRouterTransitionStart("/", "replace", null);
    const latest = getLatestRouterTransition();
    assert.match(latest?.id ?? "", /^local-/);
    assert.ok(typeof latest?.startedAt === "number");
    assert.deepEqual(latest?.fromRoutes, []);
    assert.equal(latest?.prefetchIntent, null);
  });

  it("delivers transitions to subscribers until they unsubscribe", () => {
    const seen: string[] = [];
    const unsubscribe = subscribeRouterTransitionStart(t =>
      seen.push(t.url.pathname)
    );
    publishRouterTransitionStart("/about-us/our-mission", "push", event);
    unsubscribe();
    publishRouterTransitionStart("/consultants", "push", event);
    assert.deepEqual(seen, ["/about-us/our-mission"]);
  });

  it("exposes the latest transition so late subscribers can replay it", () => {
    publishRouterTransitionStart("/qr", "push", event);
    assert.equal(getLatestRouterTransition()?.url.pathname, "/qr");
    resetRouterTransitions();
    assert.equal(getLatestRouterTransition(), undefined);
  });
});
