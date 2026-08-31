import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/site/Pages";
import { projects } from "@/content/site";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectRoute,
  head: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    return pageHead(
      project ? `${project.title} — Ace Spaces` : "Project study — Ace Spaces",
      project?.outcome ?? "A project study from the Ace Spaces material archive.",
    );
  },
});

function ProjectRoute() {
  const { slug } = Route.useParams();
  return <ProjectDetailPage slug={slug} />;
}
