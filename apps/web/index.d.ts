/// <reference types="google.analytics" />
/// <reference types="gtag.js" />

type SafariAudioSessionType =
  | "auto"
  | "playback"
  | "transient"
  | "transient-solo"
  | "ambient"
  | "play-and-record";

type SafariAudioSessionState = "inactive" | "active" | "interrupted";

interface SafariAudioSessionEventMap {
  statechange: Event;
}

declare global {
  interface Window {
    dataLayer?: object[];
  }
  interface JSON {
    parse<T = unknown>(
      text: string,
      reviver?: (this: any, key: string, value: any) => any
    ): T;
  }
  interface Body {
    json<T = unknown>(): Promise<T>;
  }
  interface ObjectConstructor {
    // PropertyKey -> string and number allowed, symbol disallowed (symbol can't be enumerable)
    keys<T = object>(
      o: T
    ): (keyof T extends infer K
      ? K extends string
        ? K
        : K extends number
          ? `${K}`
          : never
      : never)[];
  }
  namespace NodeJS {
    interface ProcessEnv {
      readonly VERCEL_ENV: "development" | "production" | "preview";
    }
  }
  /**
   * Web Audio Session API
   *
   * Spec surface:
   * - type
   * - readonly state
   * - onstatechange
   *
   * Safari/WebKit shipped this behind partial support first, so this is a
   * pragmatic ambient declaration for app code.
   */
  interface AudioSession extends EventTarget {
    type: SafariAudioSessionType;
    readonly state: SafariAudioSessionState;
    onstatechange: ((this: AudioSession, ev: Event) => any) | null;

    addEventListener<K extends keyof SafariAudioSessionEventMap>(
      type: K,
      listener: (this: AudioSession, ev: SafariAudioSessionEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;

    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;

    removeEventListener<K extends keyof SafariAudioSessionEventMap>(
      type: K,
      listener: (this: AudioSession, ev: SafariAudioSessionEventMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;

    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
  }

  interface Navigator {
    readonly audioSession?: AudioSession;
  }
}
declare module "http" {
  interface IncomingHttpHeaders {
    "x-vercel-ip-country"?: string;
    "x-vercel-ip-city"?: string;
    "x-vercel-ip-continent"?: string;
    "x-vercel-forwarded-for"?: string;
    "x-real-ip"?: string;
    "x-vercel-ip-country-region"?: string;
    "x-vercel-ip-postal-code"?: string;
    "x-vercel-signature"?: string;
    "x-vercel-ip-timezone"?: string;
    "x-vercel-ip-latitude"?: string;
    "x-vercel-ip-longitude"?: string;
  }
}
export {};
