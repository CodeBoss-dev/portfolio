import type { Metadata } from "next";
import { BooksPageClient } from "./BooksPageClient";

export const metadata: Metadata = {
  title: "Books — Waaridh Borpujari",
  description:
    "Authored works exploring AI's transformation of modern life and the invisible systems shaping our world.",
};

export default function BooksPage() {
  return <BooksPageClient />;
}
