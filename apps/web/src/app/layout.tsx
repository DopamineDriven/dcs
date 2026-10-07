import type { Metadata, Viewport } from "next";
import React from "react";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import { CookieProvider } from "@/context/cookie-context";
import { getSiteUrl } from "@/lib/site-url";
import "./global.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/ui/sections/Footer";
import { Nav } from "@/ui/sections/Nav";
import * as myGtag from "@/utils/analytics";
import "@dcs/ui/globals.css";
import { ToastProvider } from "@dcs/ui";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"]
});

export const viewport = {
  colorScheme: "normal",
  userScalable: false,
  themeColor: "#234670",
  viewportFit: "cover",
  initialScale: 1,
  maximumScale: 1,
  width: "device-width"
} satisfies Viewport;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl(process.env.VERCEL_ENV)),
  title: {
    default: "Drisdell Consulting Services",
    template: "%s | DCS"
  },
  // Since 1995, we have provided quality services and custom application development solutions to our customers.  And as hard as it is to accomplish in this day and age, we have realized a 100% on time, on budget project completion record on all of our client projects. We successfully manage projects, implement systems and solve business problems—just ask any of our clients!
  description:
    "Exceptional Human Capital and Workforce Management IT System Support",
  manifest: new URL(
    "/meta/site.webmanifest",
    getSiteUrl(process.env.VERCEL_ENV)
  ),
  appleWebApp: {
    capable: true,
    title: "Drisdell Consulting Services",
    statusBarStyle: "black-translucent",
    startupImage: [{ url: "/apple-icon.png" }]
  },
  authors: [{ name: "Andrew Ross", url: "https://github.com/DopamineDriven" }],
  verification: {
    google: "6_NmtOALI6hPXwpk9CJpLaFcVUqzxBVv56tYxFYqGvA",
    yandex: "b77e0eafbd48ddd5"
  },
  icons: [
    {
      type: "image/png",
      rel: "apple-touch-icon",
      url: new URL(
        "/meta/apple-touch-icon.png",
        getSiteUrl(process.env.VERCEL_ENV)
      ),
      sizes: "180x180"
    },
    {
      type: "image/svg+xml",
      rel: "mask-icon",
      url: new URL(
        "/meta/safari-pinned-tab.svg",
        getSiteUrl(process.env.VERCEL_ENV)
      )
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL(
        "/meta/favicon-32x32.png",
        getSiteUrl(process.env.VERCEL_ENV)
      ),
      sizes: "32x32"
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL(
        "/meta/favicon-16x16.png",
        getSiteUrl(process.env.VERCEL_ENV)
      ),
      sizes: "16x16"
    }
  ],
  robots: {
    googleBot: {
      follow: true,
      index: true,
      indexifembedded: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    },
    follow: true,
    index: true,
    indexifembedded: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
} satisfies Metadata;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-scroll-behavior="smooth"
      className={`h-full ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}>
      <head>
        <Script
          async
          strategy="beforeInteractive"
          id="prevent-flash-of-wrong-theme"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body className="antialiased">
        <CookieProvider>
          <ToastProvider>
            <div className="m-0 flex min-h-full flex-col justify-between bg-white p-0">
              <Nav />
              <main className="">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </CookieProvider>
      </body>
      <Script
        async
        strategy="afterInteractive"
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${myGtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
         `
        }}
      />
      <Script
        async
        id={myGtag.GA_TRACKING_ID}
        data-test={myGtag.GA_TRACKING_ID}
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${myGtag.GA_TRACKING_ID}`}
      />
    </html>
  );
}
