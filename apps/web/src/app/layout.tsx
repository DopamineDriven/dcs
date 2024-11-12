import type { Metadata, Viewport } from "next";
import React from "react";
import { getSiteUrl } from "@/lib/site-url";
import {
  BasisGrotesqueProBlack,
  BasisGrotesqueProBlackItalic,
  BasisGrotesqueProBold,
  BasisGrotesqueProBoldItalic,
  BasisGrotesqueProItalic,
  BasisGrotesqueProLight,
  BasisGrotesqueProLightItalic,
  BasisGrotesqueProMedium,
  BasisGrotesqueProMediumItalic,
  BasisGrotesqueProRegular
} from "@/styles/fonts";
import "./global.css";
import Script from "next/script";
import { Footer } from "@/ui/sections/Footer";
import { Nav } from "@/ui/sections/Nav";
import * as myGtag from "@/utils/analytics";

export const viewport = {
  colorScheme: "dark light",
  userScalable: true,
  themeColor: "#234670",
  viewportFit: "auto",
  initialScale: 1,
  maximumScale: 1,
  width: "device-width"
} satisfies Viewport;

export const metadata = {
  metadataBase: new URL(getSiteUrl(process.env.NODE_ENV)),
  title: {
    default: "Drisdell Consulting Services",
    template: "%s | Drisdell Consulting Services"
  },
  // Since 1995, we have provided quality services and custom application development solutions to our customers.  And as hard as it is to accomplish in this day and age, we have realized a 100% on time, on budget project completion record on all of our client projects. We successfully manage projects, implement systems and solve business problems—just ask any of our clients!
  description:
    "Exceptional Human Capital and Workforce Management IT System Support",
  manifest: new URL("/meta/site.webmanifest", getSiteUrl(process.env.NODE_ENV)),
  appleWebApp: {
    capable: true,
    title: "Drisdell Consulting Services",
    statusBarStyle: "black-translucent",
    startupImage: [{ url: "/apple-icon.png" }]
  },
  authors: [{ name: "Andrew Ross", url: "https://github.com/DopamineDriven" }],
  verification: {
    google: "6_NmtOALI6hPXwpk9CJpLaFcVUqzxBVv56tYxFYqGvA",
    
  },
  icons: [
    {
      type: "image/png",
      rel: "apple-touch-icon",
      url: new URL(
        "/meta/apple-touch-icon.png",
        getSiteUrl(process.env.NODE_ENV)
      ),
      sizes: "180x180"
    },
    {
      type: "image/svg+xml",
      rel: "mask-icon",
      url: new URL(
        "/meta/safari-pinned-tab.svg",
        getSiteUrl(process.env.NODE_ENV)
      )
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL("/meta/favicon-32x32.png", getSiteUrl(process.env.NODE_ENV)),
      sizes: "32x32"
    },
    {
      type: "image/png",
      rel: "icon",
      url: new URL("/meta/favicon-16x16.png", getSiteUrl(process.env.NODE_ENV)),
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
      lang='en'
      className={`h-full ${BasisGrotesqueProBlack.variable} ${BasisGrotesqueProBlackItalic.variable} ${BasisGrotesqueProBold.variable} ${BasisGrotesqueProBoldItalic.variable} ${BasisGrotesqueProItalic.variable} ${BasisGrotesqueProLight.variable} ${BasisGrotesqueProLightItalic.variable} ${BasisGrotesqueProMedium.variable} ${BasisGrotesqueProMediumItalic.variable} ${BasisGrotesqueProRegular.variable}`}>
      <body className=''>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
      <Script
        async
        strategy='afterInteractive'
        id='gtag-init'
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
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${myGtag.GA_TRACKING_ID}`}
      />
    </html>
  );
}
