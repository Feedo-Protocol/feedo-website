const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Protocol",
    links: [
      { label: "Architecture", href: "/#architecture" },
      { label: "Identity", href: "/identity" },
      { label: "Roadmap", href: "/#roadmap" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://github.com/Ashixi/feedo" },
      { label: "TypeScript SDK", href: "https://github.com/Ashixi/feedo#readme" },
      { label: "Python SDK", href: "https://github.com/Ashixi/feedo#readme" },
      { label: "CLI", href: "https://github.com/Ashixi/feedo#readme" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Farcaster", href: "https://warpcast.com/shumko" },
      { label: "hello@feedo.ink", href: "mailto:hello@feedo.ink" },
      { label: "GitHub", href: "https://github.com/Ashixi/feedo" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-feedo py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-mono text-sm text-foreground">feedo</span>
            <p className="mt-3 max-w-[22ch] text-sm text-muted-foreground">
              Storage, search, and identity for the decentralized web.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="label-mono">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => {
                  const external = l.href.startsWith("http") || l.href.startsWith("mailto:");
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {l.label}
                        {external && l.href.startsWith("http") ? (
                          <span aria-hidden="true" className="ml-1 text-[10px]">
                            ↗
                          </span>
                        ) : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          © 2026 Feedo Protocol · Apache-2.0
        </p>
      </div>
    </footer>
  );
}
