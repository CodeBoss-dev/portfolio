import type { Metadata } from "next";
import { CyberPageClient } from "./CyberPageClient";

export const metadata: Metadata = {
  title: "Cyber Projects — Waaridh Borpujari",
  description:
    "Cybersecurity research, penetration testing, and network hardening work.",
};

export default function CyberProjectsPage() {
  return <CyberPageClient />;
}
