"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

export type ExpectedRes = {
  qr: string;
  userAgentObject: globalThis.UserAgent;
  ua: string;
  ip: string;
  tz: string;
  city: string;
  lat: string;
  lng: string;
  flag: string;
};

export function fetcher<const T extends ExpectedRes | undefined>(
  input: RequestInfo,
  init?: RequestInit
) {
  return fetch(input, init).then(res => res.json() as Promise<T>);
}

export function UseSwrSync({ hasData }: { hasData: boolean }) {
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

export function UseGetMeta() {
  const [hasData, setHasData] = useState(false);
  const { data } = UseSwrSync({ hasData });

  useEffect(() => {
    if (data) {
      setHasData(true);
    }
  }, [data]);

  if (data) {
    return {
      ua: data.ua,
      ip: data.ip,
      city: data.city,
      flag: data.flag,
      lat: data.lat,
      lng: data.lng,
      tz: data.tz
    };
  } else
    return {
      ua: "null",
      ip: "null",
      city: "null",
      flag: "null",
      lat: "null",
      lng: "null",
      tz: "null"
    };
}
