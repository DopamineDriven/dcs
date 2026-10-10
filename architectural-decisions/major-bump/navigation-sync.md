src/navigation/routes.ts
```ts
const CONVERSATION_PATH = /^\/chat\/([^/]+)\/?$/;

export function conversationIdFromUrl(url: URL) {
  if (url.pathname === "/") return "home";
  const match = CONVERSATION_PATH.exec(url.pathname);
  const encoded = match?.[1];
  return encoded === undefined ? undefined : decodeURIComponent(encoded);
}
const ATTACHMENT_PATH = /^\/attachment\/([^/]+)\/?$/;

export function attachmentIdFromUrl(url: URL) {
  const id = ATTACHMENT_PATH.exec(url.pathname)?.[1];
  return id === undefined ? undefined : decodeURIComponent(id);
}
```


src/navigation/transition-store.ts
```ts
import type {
  RouterTransitionPrefetchIntent,
  RouterTransitionStartEvent,
  RouterTransitionType
} from "next";

export type RouterTransition = {
  readonly id: string;
  readonly url: URL;
  readonly type: RouterTransitionType;
  readonly startedAt: number;
  readonly fromRoutes: readonly string[];
  readonly prefetchIntent: RouterTransitionPrefetchIntent | null;
};

type TransitionListener = (transition: RouterTransition) => void;

const listeners = new Set<TransitionListener>();
let latest: RouterTransition | undefined;
let fallbackSequence = 0;

export function publishRouterTransitionStart(
  url: string,
  type: RouterTransitionType,
  event: RouterTransitionStartEvent | null
) {
  // Next passes the raw href for push/replace ("/chat/abc") but an absolute
  // location.href for traverse; resolving against the document normalizes both.
  const transition = {
    id: event?.id ?? `local-${(++fallbackSequence).toString(36)}`,
    url: new URL(url, window.location.href),
    type,
    startedAt: event?.timestamp ?? Date.now(),
    fromRoutes: event?.fromRoutes ?? [],
    prefetchIntent: event?.prefetchIntent ?? null
  } satisfies RouterTransition;

  latest = transition;
  for (const listener of listeners) listener(transition);
}

export function subscribeRouterTransitionStart(
  listener: TransitionListener
) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLatestRouterTransition() {
  return latest;
}
```

src/instrumentation-client.ts
```ts
import type { RouterTransitionStartEvent, RouterTransitionType } from "next";
import { publishRouterTransitionStart } from "@/navigation/transition-store";


export function onRouterTransitionStart(
  url: string,
  navigationType: RouterTransitionType,
  event: RouterTransitionStartEvent | null
) {
  publishRouterTransitionStart(url, navigationType, event);
}
```

src/ui/navigation-sync/index.tsx
```tsx
"use client";

import type { RouterTransition } from "@/navigation/transition-store";
import { Suspense, useEffect } from "react";
import { useParams } from "next/navigation";
import { useAttachmentRegistryCtx } from "@/context/attachment-registry-context";
import { attachmentIdFromUrl, conversationIdFromUrl } from "@/navigation/routes";
import {
  getLatestRouterTransition,
  subscribeRouterTransitionStart
} from "@/navigation/transition-store";

/**
 * Two childless leaves inside AttachmentRegistryProvider. Route hooks live
 * here, never in the provider, so its context value is stable across
 * navigations and consumers never re-render for a route change.
 */
export function NavigationSync() {
  return (
    <>
      <TransitionWarmer />
      <Suspense fallback={null}>
        <CommittedRouteWarmer />
      </Suspense>
    </>
  );
}

/**
 * Pre-commit. No route hooks, so it never suspends: it mounts with the shell
 * and the subscription is live before any route data streams in. A transition
 * can start before this effect runs (a click during hydration) — replay the
 * latest one so it is not lost.
 */
function TransitionWarmer() {
  const { warm, warmAttachment } = useAttachmentRegistryCtx();
  useEffect(() => {
    const onTransition = (transition: RouterTransition) => {
      const conversationId = conversationIdFromUrl(transition.url);
      if (conversationId !== undefined) warm(conversationId);
      const attachmentId = attachmentIdFromUrl(transition.url);
      if (attachmentId !== undefined) warmAttachment(attachmentId);
    };
    const latest = getLatestRouterTransition();
    if (latest !== undefined) onTransition(latest);
    return subscribeRouterTransitionStart(onTransition);
  }, [warm, warmAttachment]);
  return null;
}

/**
 * Committed truth. useParams() already reflects the "/" → "/chat/home"
 * rewrite; it is a dynamic read, hence its own Suspense boundary above. Also
 * the only warm a hard load gets, since a hard load has no transition.
 */
function CommittedRouteWarmer() {
  const { warm, warmAttachment } = useAttachmentRegistryCtx();
  const params = useParams<{ conversationId?: string; id?: string }>();
  const conversationId = params.conversationId;
  const attachmentId = params.id;
  useEffect(() => {
    if (conversationId !== undefined) warm(conversationId);
  }, [conversationId, warm]);
  useEffect(() => {
    if (attachmentId !== undefined) warmAttachment(attachmentId);
  }, [attachmentId, warmAttachment]);
  return null;
}
```

use in root src/app/layout.tsx file with no children: 

```tsx
<NavigationSync />
```
