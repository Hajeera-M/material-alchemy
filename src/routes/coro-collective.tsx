import { createFileRoute } from "@tanstack/react-router";
import { CoroCollectivePage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/coro-collective")({
  component: CoroCollectivePage,
  head: () =>
    pageHead(
      "Coro Collective — Ace Spaces",
      "Coro Collective is the specialist expression of Ace Spaces: bespoke surfaces, material studies and considered fabrication.",
    ),
});
