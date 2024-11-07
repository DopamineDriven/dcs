"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "dcs_qr";

export const useAcceptCookies = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    Cookies.set(COOKIE_NAME, "accepted", {
      expires: 365,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "development" ? false : true
    });
  };
  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies
  };
};
