import type { MetadataRoute } from "next";

export default function manifest() {
  return <MetadataRoute.Manifest>{
    short_name: "Drisdell Consulting",
    description: "Since 1995, we have provided quality services and custom application development solutions to our customers.  And as hard as it is to accomplish in this day and age, we have realized a 100% on time, on budget project completion record on all of our client projects. We successfully manage projects, implement systems and solve business problems—just ask any of our clients!",
    background_color: "#FFFFFF",
    name: "Drisdell Consulting Services",
    theme_color: "#d9e2ec",
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
