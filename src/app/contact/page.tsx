import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Waaridh Borpujari",
  description: "Get in touch to discuss AI systems, collaboration, or ideas.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
