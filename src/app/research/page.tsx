import type { Metadata } from "next";
import { ResearchPageClient } from "./ResearchPageClient";

export const metadata: Metadata = {
  title: "Research — Waaridh Borpujari",
  description:
    "Research on dynamic animations, user engagement, and the intersection of design and technology.",
};

export default function ResearchPage() {
  return <ResearchPageClient />;
}
