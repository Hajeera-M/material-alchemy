import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand, navigation } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-tight text-stone">{brand.parent}</span>
          <span className="h-3 w-px bg-line transition-colors group-hover:bg-primary" />
          <span className="label text-mute">{brand.child}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="u label text-mute transition-colors hover:text-stone"
              activeProps={{ className: "text-stone" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center border border-line px-4 py-2 label text-stone transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-mute transition-colors hover:text-stone xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line xl:hidden">
          <div className="mx-auto max-w-[1440px] px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 font-display text-lg text-stone last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block border border-line px-4 py-2 label text-stone"
            >
              Start a project
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
