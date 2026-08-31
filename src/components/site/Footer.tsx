import { Link } from "@tanstack/react-router";
import { brand } from "@/content/site";

const columns = [
  {
    heading: "Practice",
    links: [
      { to: "/materials", label: "Materials" },
      { to: "/fabrication", label: "Fabrication" },
      { to: "/applications", label: "Applications" },
      { to: "/projects", label: "Projects" },
    ],
  },
  {
    heading: "Brands",
    links: [
      { to: "/about", label: "About Ace Spaces" },
      { to: "/coro-collective", label: "Coro Collective" },
      { to: "/journal", label: "Journal" },
    ],
  },
  {
    heading: "Professionals",
    links: [
      { to: "/resources", label: "Technical resources" },
      { to: "/contact", label: "Request samples" },
      { to: "/contact", label: "Start a project" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-lg text-stone">{brand.parent}</div>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-mute text-pretty">
              {brand.descriptor} {brand.child} is its specialist brand for bespoke architectural
              surfaces.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="label font-mono text-mute">{col.heading}</h2>
              <ul className="mt-4 space-y-2 text-sm text-stone">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="u transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="label text-mute">
            {brand.parent} · {brand.child} — a material practice
          </p>
          <p className="label text-mute">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
