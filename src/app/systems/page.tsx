import type { Metadata } from "next";
import { SystemsPageClient } from "./SystemsPageClient";

export const metadata: Metadata = {
  title: "Systems — Waaridh Borpujari",
  description:
    "AI systems built to solve real operational problems. Infrastructure, automation, LLM integration, and retrieval systems.",
};

export default function SystemsPage() {
  return <SystemsPageClient />;
}
