import type { Metadata } from "next";
import { ContactPage } from "@/ui/contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Send Drisdell Consulting Services a message about your Human Capital and Workforce Management needs."
} satisfies Metadata;

export default function ContactUsPage() {
  return <ContactPage />;
}
