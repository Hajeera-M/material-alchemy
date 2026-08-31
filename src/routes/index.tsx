import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    pageHead(
      "Ace Spaces — Surfaces that become architecture",
      "Ace Spaces turns premium solid-surface material into considered architectural surfaces, bespoke fabrication and finished spaces.",
    ),
});
