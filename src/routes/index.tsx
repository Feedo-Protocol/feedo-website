import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CodeTabs, type Snippet } from "@/components/site/CodeBlock";
import { KeyTable } from "@/components/site/KeyTable";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { Reveal } from "@/components/site/Reveal";
import { useCopy } from "@/components/site/CopyButton";

const TITLE = "Feedo Protocol — Storage, search, and identity for AI agents";
const DESCRIPTION =
  "Feedo is a peer-to-peer network with encrypted storage, native vector search, and wallet-based identity. Agent memory and semantic search over Nostr and Farcaster, today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const GITHUB = "https://github.com/Ashixi/feedo";

const SNIPPETS: Snippet[] = [
  {
    id: "python",
    label: "Python",
    lang: "python",
    code: `from feedo import FeedoMemory

memory = FeedoMemory(usage_key="0x...")
memory.add_long("User prefers dark mode", {"topic": "ui"})
memory.search_long("dark mode")`,
  },
  {
    id: "typescript",
    label: "TypeScript",
    lang: "typescript",
    code: `import { FeedoClient } from "feedo-protocol-sdk";

const feedo = new FeedoClient({ usageKey: "0x..." });
await feedo.memory.addLong("User prefers dark mode", { topic: "ui" });
const results = await feedo.memory.searchLong("dark mode");`,
  },
  {
    id: "cli",
    label: "CLI",
    lang: "bash",
    code: `npm i -g feedo-sdk
feedo login
feedo deploy ./dist`,
  },
];

const TODAY = [
  {
    n: "01",
    title: "Agent memory",
    body: "A drop-in memory backend for AI agents. Short-term and long-term recall over semantic search, encrypted, owned by the wallet that wrote it. Ships as a PraisonAI memory provider.",
  },
  {
    n: "02",
    title: "Semantic search over decentralized social",
    body: "Feedo bridges Nostr relays and Farcaster hubs into its index, so you can search existing content by meaning instead of exact keywords — from day one, not after the network fills up.",
  },
  {
    n: "03",
    title: "Encrypted file storage",
    body: "AES-256-GCM client-side, ECIES key sharing. Upload, index, and grant another DID access without either of you trusting a server.",
  },
];

const LAYERS = [
  {
    label: "Consensus layer",
    plain: "Agrees on who owns what.",
    detail: "PBFT consensus, DID identity, .feedo name resolution, EVM settlement contract.",
  },
  {
    label: "Storage layer",
    plain: "Holds the bytes, in pieces, everywhere.",
    detail: "Kademlia DHT, erasure-coded shards, Merkle anti-entropy sync, self-healing.",
  },
  {
    label: "Search layer",
    plain: "Finds things by meaning, not spelling.",
    detail:
      "384-dim sentence embeddings, CLIP image embeddings, LanceDB, federated query routing via KMeans centroids.",
  },
];

const SDKS = [
  {
    name: "feedo-protocol-sdk",
    heading: "TypeScript / JavaScript",
    install: "npm i feedo-protocol-sdk",
    body: "dApps, Node backends, React and React Native.",
  },
  {
    name: "feedo-sdk",
    heading: "Python",
    install: "pip install feedo-sdk",
    body: "Async, built on httpx. For AI agents, pipelines, and backends.",
  },
  {
    name: "feedo-sdk (cli)",
    heading: "CLI",
    install: "npm i -g feedo-sdk",
    body: "Deploy static sites, manage .feedo domains, check credits.",
  },
];

const PRICING = [
  {
    name: "Testnet",
    price: "Free",
    body: "500,000 credits with every new identity. No card, no KYC.",
    tag: "AVAILABLE NOW",
  },
  { name: "Storage", price: "$20 / TB", body: "Planned mainnet rate." },
  { name: "Vector search", price: "$5 / 10k queries", body: "Planned mainnet rate." },
];

const ROADMAP = [
  {
    phase: "Phase 1",
    name: "Core protocol",
    status: "DONE" as const,
    body: "Rust P2P core, Kademlia DHT, PBFT consensus, cryptography.",
  },
  {
    phase: "Phase 2",
    name: "Product layer",
    status: "IN PROGRESS" as const,
    body: "SDKs, CLI, browser explorer, public API.",
  },
  {
    phase: "Phase 3",
    name: "Network scaling",
    status: "NOT STARTED" as const,
    body: "Public testnet, validator onboarding, tokenomics.",
  },
];

function StatusDot({ status }: { status: (typeof ROADMAP)[number]["status"] }) {
  if (status === "DONE")
    return <span aria-hidden="true" className="mt-1.5 block size-3 rounded-full bg-accent" />;
  if (status === "IN PROGRESS")
    return (
      <span
        aria-hidden="true"
        className="mt-1.5 block size-3 rounded-full border-2 border-accent bg-background"
      />
    );
  return (
    <span
      aria-hidden="true"
      className="mt-1.5 block size-3 rounded-full border-2 border-border bg-background"
    />
  );
}

function SectionHeading({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
}

function Home() {
  const { copied, copy } = useCopy();

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* HERO */}
        <section className="container-feedo pt-20 pb-16 sm:pt-28">
          <Reveal>
            <p className="label-mono">APACHE-2.0 · PUBLIC TESTNET</p>
            <h1 className="mt-6 max-w-[19ch] text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight">
              Storage, search, and identity for agents that don&apos;t want a landlord.
            </h1>
            <p className="mt-6 max-w-[64ch] text-base sm:text-lg leading-relaxed text-muted-foreground">
              Feedo is a peer-to-peer network with encrypted storage, native vector search, and
              wallet-based identity. No accounts. No API keys. No server you have to trust.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs px-4 py-2.5 rounded-sm bg-accent text-accent-foreground transition-opacity hover:opacity-90"
              >
                Read the docs
              </a>
              <button
                type="button"
                onClick={() => copy("pip install feedo-sdk")}
                className={`font-mono text-xs px-4 py-2.5 rounded-sm border transition-colors ${
                  copied
                    ? "border-accent text-accent"
                    : "border-border text-foreground hover:border-muted-foreground"
                }`}
              >
                {copied ? "copied to clipboard" : "pip install feedo-sdk"}
              </button>
            </div>
          </Reveal>

          <Reveal className="mt-14" delay={80}>
            <CodeTabs snippets={SNIPPETS} />
          </Reveal>
        </section>

        {/* WHAT WORKS TODAY */}
        <section id="product" className="container-feedo scroll-mt-20 py-16 border-t border-border">
          <SectionHeading index="01">What works today</SectionHeading>
          <div className="mt-10 grid gap-px bg-border border border-border rounded-md overflow-hidden md:grid-cols-3">
            {TODAY.map((c, i) => (
              <article key={c.n} className="bg-surface p-6">
                <Reveal delay={i * 60}>
                  <span className="font-mono text-xs text-accent">{c.n}</span>
                  <h3 className="mt-3 text-base font-medium">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section
          id="architecture"
          className="container-feedo scroll-mt-20 py-16 border-t border-border"
        >
          <SectionHeading index="02">Architecture</SectionHeading>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {LAYERS.map((l, i) => (
              <Reveal key={l.label} delay={i * 60}>
                <div className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                  <h3 className="font-mono text-sm text-accent">{l.label}</h3>
                  <div>
                    <p className="text-base text-foreground">{l.plain}</p>
                    <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                      {l.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ArchitectureDiagram />
          </Reveal>
          <p className="mt-6 max-w-[70ch] text-sm text-muted-foreground">
            The stated ambition is a search layer for the decentralized web that nobody controls.
            That is a direction, not a shipped feature — what runs today is the agent memory and
            semantic search described above.
          </p>
        </section>

        {/* IDENTITY */}
        <section id="identity" className="container-feedo scroll-mt-20 py-16 border-t border-border">
          <SectionHeading index="03">Your wallet is your account.</SectionHeading>
          <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-muted-foreground">
            Your DID is <code className="font-mono text-accent">did:feedo:0x&lt;your address&gt;</code>.
            Register once with a signature and receive 500,000 testnet credits. Then generate a
            usage key — a separate key that signs requests but can never move funds — so your
            wallet key never touches a server.
          </p>
          <div className="mt-8 max-w-3xl">
            <KeyTable />
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Works with any EIP-6963 wallet — MetaMask, Rabby, Coinbase Wallet, Trust, Brave,
            Phantom, OKX.
          </p>
          <Link
            to="/identity"
            className="mt-8 inline-block font-mono text-xs px-4 py-2.5 rounded-sm border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Create an identity
          </Link>
        </section>

        {/* SDKS */}
        <section className="container-feedo py-16 border-t border-border">
          <SectionHeading index="04">SDKs</SectionHeading>
          <div className="mt-10 grid gap-px bg-border border border-border rounded-md overflow-hidden md:grid-cols-3">
            {SDKS.map((s, i) => (
              <article key={s.name} className="bg-surface p-6">
                <Reveal delay={i * 60}>
                  <h3 className="text-base font-medium">{s.heading}</h3>
                  <p className="mt-3 font-mono text-xs text-accent break-all">{s.install}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <a
                    href={`${GITHUB}#readme`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
                  >
                    README ↗
                  </a>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="container-feedo scroll-mt-20 py-16 border-t border-border">
          <SectionHeading index="05">Pricing</SectionHeading>
          <div className="mt-10 grid gap-px bg-border border border-border rounded-md overflow-hidden md:grid-cols-3">
            {PRICING.map((p, i) => (
              <article key={p.name} className="bg-surface p-6">
                <Reveal delay={i * 60}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-mono text-sm text-foreground">{p.name}</h3>
                    {p.tag ? <span className="label-mono text-accent">{p.tag}</span> : null}
                  </div>
                  <p className="mt-5 font-mono text-2xl text-foreground">{p.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Mainnet pricing is a target, not a live rate. On-chain tokenomics are not shipped yet.
          </p>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="container-feedo scroll-mt-20 py-16 border-t border-border">
          <SectionHeading index="06">Roadmap</SectionHeading>
          <ol className="mt-10 border-l border-border pl-6 space-y-10">
            {ROADMAP.map((r, i) => (
              <li key={r.phase} className="relative">
                <Reveal delay={i * 60}>
                  <span className="absolute -left-[31px]">
                    <StatusDot status={r.status} />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{r.phase}</span>
                    <h3 className="text-base font-medium">{r.name}</h3>
                    <span
                      className={`font-mono text-[11px] tracking-[0.14em] ${
                        r.status === "NOT STARTED" ? "text-muted-foreground" : "text-accent"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* OPEN SOURCE */}
        <section className="border-y border-border bg-surface-2">
          <div className="container-feedo flex flex-wrap items-center justify-between gap-4 py-10">
            <p className="text-base text-foreground">
              Apache 2.0. Every layer, every SDK, in the open.
            </p>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent transition-opacity hover:opacity-80"
            >
              github.com/Ashixi/feedo ↗
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
