import { createFileRoute } from "@tanstack/react-router";
import { MaterialsPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/materials")({
  component: MaterialsPage,
  head: () =>
    pageHead(
      "Materials — Ace Spaces",
      "Explore a working collection of solid-surface material directions, finishes and applications from Ace Spaces.",
    ),
});
