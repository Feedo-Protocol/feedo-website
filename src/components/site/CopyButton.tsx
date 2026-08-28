import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useCopy() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard may be unavailable; still surface the copied affordance state.
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return { copied, copy };
}

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={copied ? "Copied to clipboard" : "Copy code to clipboard"}
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.14em] px-2 py-1 rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground",
        copied && "text-accent border-accent/50",
        className,
      )}
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}
