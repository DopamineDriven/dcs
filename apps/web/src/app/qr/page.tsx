import type { Metadata } from "next";
import { QrPage } from "@/ui/qr";

export const metadata = {
  title: "Welcome to Drisdell Consulting Services",
  description:
    "Connect with Drisdell Consulting Services to discuss your HCM needs and goals.",
  robots: { index: false, follow: false }
} satisfies Metadata;

export default function Qr() {
  return <QrPage />;
}
