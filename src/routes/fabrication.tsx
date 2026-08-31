import { createFileRoute } from "@tanstack/react-router";
import { FabricationPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/fabrication")({
  component: FabricationPage,
  head: () =>
    pageHead(
      "Fabrication — Ace Spaces",
      "Precision cutting, forming, seamless joining and finishing for architectural solid-surface applications.",
    ),
});
