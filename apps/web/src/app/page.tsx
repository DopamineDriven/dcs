import type { Metadata } from "next";
import { Home } from "@/ui/home";

export const metadata = {
  title: "Drisdell Consulting Services"
} satisfies Metadata;

export default function HomePage() {
  return <Home />;
}
