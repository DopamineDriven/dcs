"use client";

import type { SyntheticEvent } from "react";
import { useCallback, useRef, useState } from "react";
import useSWR from "swr";

export type ExpectedRes = { qr: string; userAgentObject: globalThis.UserAgent };

function fetcher<const T extends ExpectedRes | undefined>(
  input: RequestInfo,
  init?: RequestInit
) {
  return fetch(input, init).then(res => res.json() as Promise<T>);
}

function UseSwrSync({ hasData }: { hasData: boolean }) {
  const { data, isValidating, isLoading, error } = useSWR<
    ExpectedRes | undefined,
    unknown
  >(hasData === false ? "/api?code=yes" : null, fetcher, {
    refreshInterval: 100000,
    fetcher: fetcher
  });

  return {
    data,
    error,
    isLoading,
    isValidating
  };
}

export function MetaHandler() {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [hasData, setHasData] = useState(false);
  const [hasQr, setHasQr] = useState(false);
  const [_device, setDevice] = useState<string | undefined>();
  const [_browser, setBrowser] = useState<string | undefined>();
  const { data } = UseSwrSync({ hasData });

  const dataCb = useCallback((props: ExpectedRes) => {
    const data = props.userAgentObject;
    const qr = props.qr;
    try {
      if (data?.browser?.name && data?.device?.type) {
        setBrowser(data.browser.name);
        setDevice(data.device.type);
        return data;
      } else if (!data?.device?.type && data.browser.name) {
        setBrowser(data.browser.name);
        return data;
      } else if (!data.browser.name && data.device.type) {
        setDevice(data.device.type);
        return data;
      } else {
        return data;
      }
    } catch (err) {
      console.error(
        typeof err === "string" ? err : JSON.stringify(err, null, 2)
      );
    } finally {
      if (/true/gi.test(qr) === true) {
        setHasQr(true);
        return data;
      } else {
        return data;
      }
    }
  }, []);

  const useOnLoadCb = useCallback(
    (e: SyntheticEvent<HTMLPreElement, Event>) => {
      e.preventDefault();
      if (typeof data !== "undefined") {
        setHasData(true);
        dataCb(data);
      } else {
        return;
      }
    },
    [data, dataCb]
  );

  const writeHTML = useCallback((props: HTMLPreElement | null) => {
    if (!props) {
      console.log("no props");
    }
    preRef.current = props;
    // props.style.width = "100%";
    // props.style.height = props?.contentWindow?.document?.body?.scrollHeight ? props.contentWindow.document.body.scrollHeight?.toString() : "100%"
    // if (
    //   typeof device !== "undefined" &&
    //   device.includes("mobile") &&
    //   props.contentDocument?.getElementById("303")
    // ) {
    //   props.contentDocument?.getElementById("303")?.remove();
    //   return props;
    // }
    console.log(props);
  }, []);

  return (
    <pre
      onLoad={useOnLoadCb}
      ref={writeHTML}
      className='font-basis-grotesque-pro-regular text-red-800'>
      {data
        ? JSON.stringify(
            {
              hasQr,
              data
            },
            null,
            2
          )
        : "No data."}
    </pre>
  );
}
