import { useId, useState, type ReactNode } from "react";
import { CopyButton } from "./CopyButton";

type Lang = "python" | "typescript" | "bash";

const KEYWORDS: Record<Lang, string[]> = {
  python: ["from", "import", "await", "async", "def", "return"],
  typescript: ["import", "from", "const", "await", "async", "new", "let", "export"],
  bash: ["npm", "pip", "feedo", "i", "install", "login", "deploy", "-g"],
};

/** Minimal, dependency-free tokenizer for the short snippets shown on the site. */
function highlight(line: string, lang: Lang): ReactNode {
  const parts: ReactNode[] = [];
  const regex = /("[^"]*"|'[^']*'|#.*$|\/\/.*$|[A-Za-z_][\w.]*|\s+|.)/g;
  const matches = line.match(regex) ?? [];
  matches.forEach((token, i) => {
    let cls = "";
    if (/^["']/.test(token)) cls = "tok-str";
    else if (/^(#|\/\/)/.test(token)) cls = "tok-com";
    else if (KEYWORDS[lang].includes(token)) cls = "tok-key";
    else if (/^[A-Z]/.test(token)) cls = "tok-fn";
    parts.push(
      cls ? (
        <span key={i} className={cls}>
          {token}
        </span>
      ) : (
        <span key={i}>{token}</span>
      ),
    );
  });
  return parts;
}

export type Snippet = { id: string; label: string; lang: Lang; code: string };

export function CodeTabs({ snippets }: { snippets: Snippet[] }) {
  const first = snippets[0]!;
  const [active, setActive] = useState(first.id);
  const baseId = useId();
  const current = snippets.find((s) => s.id === active) ?? first;

  return (
    <div className="border border-border bg-surface rounded-md overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-surface-2">
        <div role="tablist" aria-label="Code examples" className="flex">
          {snippets.map((s) => {
            const selected = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                id={`${baseId}-tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${s.id}`}
                type="button"
                onClick={() => setActive(s.id)}
                className={`font-mono text-xs px-4 py-3 border-r border-border transition-colors ${
                  selected
                    ? "text-accent bg-surface"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
        <div className="px-3">
          <CopyButton value={current.code} />
        </div>
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${current.id}`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="overflow-x-auto"
      >
        <pre className="font-mono text-[13px] leading-6 p-5 text-foreground">
          <code>
            {current.code.split("\n").map((line, i) => (
              <span key={i} className="block whitespace-pre">
                {line ? highlight(line, current.lang) : "\u00a0"}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
