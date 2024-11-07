import type { MetadataRoute } from "next";

export default function manifest() {
  return <MetadataRoute.Manifest>{
    short_name: "DCS",
    description: "Exceptional Human Capital and Workforce Management IT System Support",
    background_color: "#FFFFFF",
    name: "Drisdell Consulting Services",
    theme_color: "#234670",
    start_url: "/",
    display: "fullscreen",
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
