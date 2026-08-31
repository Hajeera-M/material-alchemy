import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead(
      "About Ace Spaces",
      "Ace Spaces brings material selection, design thinking, fabrication and site execution into one conversation.",
    ),
});
