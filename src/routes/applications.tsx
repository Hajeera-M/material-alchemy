import { createFileRoute } from "@tanstack/react-router";
import { ApplicationsPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/applications")({
  component: ApplicationsPage,
  head: () =>
    pageHead(
      "Applications — Ace Spaces",
      "Architectural surface applications across residential, hospitality, commercial, retail, healthcare and public interiors.",
    ),
});
