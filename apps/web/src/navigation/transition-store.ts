import type { ClientInstrumentationHooks } from "next/dist/client/router-transition-types";

// Next 16.4.0 does not re-export these from the package entry; derive them
// from the hook signature so a future re-export is a one-line swap.
type OnRouterTransitionStart = NonNullable<
  ClientInstrumentationHooks["onRouterTransitionStart"]
>;
type TransitionType = Parameters<OnRouterTransitionStart>[1];
type TransitionStartEvent = Parameters<OnRouterTransitionStart>[2];

export type RouterTransition = {
  readonly id: string;
  readonly url: URL;
  readonly type: TransitionType;
  readonly startedAt: number;
  readonly fromRoutes: readonly string[];
  readonly prefetchIntent: NonNullable<TransitionStartEvent>["prefetchIntent"];
};

type TransitionListener = (transition: RouterTransition) => void;

const listeners = new Set<TransitionListener>();
let latest: RouterTransition | undefined;
let fallbackSequence = 0;

export function publishRouterTransitionStart(
  url: string,
  type: TransitionType,
  event: TransitionStartEvent
) {
  // Next passes a raw href for push/replace ("/consultants") but an absolute
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

export function subscribeRouterTransitionStart(listener: TransitionListener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLatestRouterTransition() {
  return latest;
}

/** Test-only: forget the latest transition and drop every subscriber. */
export function resetRouterTransitions() {
  latest = undefined;
  listeners.clear();
}
