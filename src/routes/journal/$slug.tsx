import { createFileRoute } from "@tanstack/react-router";
import { JournalDetailPage } from "@/components/site/Pages";
import { journal } from "@/content/site";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/journal/$slug")({
  component: JournalRoute,
  head: ({ params }) => {
    const entry = journal.find((item) => item.slug === params.slug);
    return pageHead(
      entry ? `${entry.title} — Ace Spaces Journal` : "Journal note — Ace Spaces",
      entry?.excerpt ?? "A material note from the Ace Spaces journal.",
    );
  },
});

function JournalRoute() {
  const { slug } = Route.useParams();
  return <JournalDetailPage slug={slug} />;
}
