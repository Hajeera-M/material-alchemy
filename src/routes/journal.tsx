import { createFileRoute } from "@tanstack/react-router";
import { JournalPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () =>
    pageHead(
      "Journal — Ace Spaces",
      "Notes on solid surfaces, architectural details, fabrication and the work of making.",
    ),
});
