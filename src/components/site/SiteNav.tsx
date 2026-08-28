import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Product", href: "/#product" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Docs", href: "https://github.com/Ashixi/feedo", external: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "GitHub", href: "https://github.com/Ashixi/feedo", external: true },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-background/95 backdrop-blur-sm border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-feedo flex h-14 items-center justify-between gap-4"
      >
        <Link to="/" className="font-mono text-sm tracking-tight text-foreground">
          feedo
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/identity"
          className="font-mono text-xs px-3 py-1.5 rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get an identity
        </Link>
      </nav>
    </header>
  );
}
