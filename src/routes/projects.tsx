import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/site/Pages";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () =>
    pageHead(
      "Projects — Ace Spaces",
      "Case studies in material, detail and use from Ace Spaces and Coro Collective.",
    ),
});
