import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { KeyTable } from "@/components/site/KeyTable";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Identity — Feedo Protocol";
const DESCRIPTION =
  "How Feedo identity works: connect an EIP-6963 wallet, sign once to register a did:feedo DID, then use a usage key that signs requests but cannot move funds.";

export const Route = createFileRoute("/identity")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: IdentityPage,
});

const STEPS = [
  {
    n: "01",
    title: "Connect",
    body: "Open the identity app and connect any EIP-6963 wallet — MetaMask, Rabby, Coinbase Wallet, Trust, Brave, Phantom, OKX. Nothing is sent anywhere yet.",
  },
  {
    n: "02",
    title: "Sign",
    body: "Sign a registration message. Your DID becomes did:feedo:0x<your address> and the identity receives 500,000 testnet credits. No email, no password, no KYC.",
  },
  {
    n: "03",
    title: "Use",
    body: "Generate a usage key. It signs SDK and API requests but can never move funds, so your wallet key never has to sit in a server environment.",
  },
];

function IdentityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <section className="container-feedo pt-20 pb-16 sm:pt-28">
          <Reveal>
            <p className="label-mono">IDENTITY</p>
            <h1 className="mt-5 max-w-[20ch] text-3xl sm:text-4xl font-semibold tracking-tight">
              Your wallet is your account.
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
              Feedo identity is a DID derived from an Ethereum address. Registration takes one
              signature, and the key that signs your day-to-day requests is deliberately not the
              key that holds your credits.
            </p>
          </Reveal>
        </section>

        <section className="container-feedo pb-16" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="label-mono">
            The flow
          </h2>
          <ol className="mt-8 grid gap-px border border-border rounded-md overflow-hidden bg-border sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.n} className="bg-surface p-6">
                <Reveal delay={i * 60}>
                  <span className="font-mono text-xs text-accent">{s.n}</span>
                  <h3 className="mt-3 text-base font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="container-feedo pb-16" aria-labelledby="keys-heading">
          <h2 id="keys-heading" className="label-mono">
            Two keys
          </h2>
          <div className="mt-6">
            <KeyTable />
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Works with any EIP-6963 wallet — MetaMask, Rabby, Coinbase Wallet, Trust, Brave,
            Phantom, OKX.
          </p>
        </section>

        <section className="container-feedo pb-24">
          <div className="border border-border rounded-md bg-surface p-8">
            <p className="label-mono">Wallet flow</p>
            <h2 className="mt-4 text-xl font-medium">Create your identity</h2>
            <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
              The wallet connection and signature happen on the Feedo identity app. This site does
              not ask for a signature and never touches your keys.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://feedo.ink/identity.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs px-4 py-2.5 rounded-sm bg-accent text-accent-foreground transition-opacity hover:opacity-90"
              >
                Open feedo.ink/identity.html ↗
              </a>
              <Link
                to="/"
                className="font-mono text-xs px-4 py-2.5 rounded-sm border border-border text-foreground transition-colors hover:border-muted-foreground"
              >
                Back to overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
