import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead(
      "Start a project — Ace Spaces",
      "Share your project brief, request samples or talk with Ace Spaces about a material and fabrication challenge.",
    ),
});
