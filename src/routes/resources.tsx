import { createFileRoute } from "@tanstack/react-router";
import { ResourcesPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () =>
    pageHead(
      "Resources — Ace Spaces",
      "Technical resources and specification support for architects, designers, contractors and fabricators.",
    ),
});
