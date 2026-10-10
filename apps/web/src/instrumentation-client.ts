import type {
  RouterTransitionStartEvent,
  RouterTransitionType
} from "next/dist/client/router-transition-types";
import { publishRouterTransitionStart } from "@/navigation/transition-store";

export const onRouterTransitionStart = (
  url: string,
  navigationType: RouterTransitionType,
  event: RouterTransitionStartEvent | null
) => {
  publishRouterTransitionStart(url, navigationType, event);
};
