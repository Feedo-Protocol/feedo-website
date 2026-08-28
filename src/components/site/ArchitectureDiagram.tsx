const BANDS = [
  { y: 16, label: "SEARCH LAYER", detail: "embeddings · LanceDB · federated routing" },
  { y: 96, label: "STORAGE LAYER", detail: "Kademlia DHT · erasure-coded shards" },
  { y: 176, label: "CONSENSUS LAYER", detail: "PBFT · DID · EVM settlement" },
];

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 720 250"
      role="img"
      aria-label="Schematic of the Feedo stack: a search layer above a storage layer above a consensus layer, connected by vertical lines."
      className="w-full h-auto"
    >
      {BANDS.map((band, i) => (
        <g key={band.label}>
          <rect
            x="1"
            y={band.y}
            width="718"
            height="58"
            fill="#141416"
            stroke={i === 0 ? "#5FD68A" : "#232326"}
            strokeWidth="1"
            rx="4"
          />
          <text
            x="24"
            y={band.y + 25}
            fill={i === 0 ? "#5FD68A" : "#E8E8E6"}
            fontFamily="ui-monospace, monospace"
            fontSize="12"
            letterSpacing="1.6"
          >
            {band.label}
          </text>
          <text
            x="24"
            y={band.y + 44}
            fill="#8A8A85"
            fontFamily="ui-monospace, monospace"
            fontSize="11"
          >
            {band.detail}
          </text>
        </g>
      ))}
      <line x1="120" y1="74" x2="120" y2="96" stroke="#232326" />
      <line x1="360" y1="74" x2="360" y2="96" stroke="#5FD68A" />
      <line x1="600" y1="74" x2="600" y2="96" stroke="#232326" />
      <line x1="120" y1="154" x2="120" y2="176" stroke="#232326" />
      <line x1="360" y1="154" x2="360" y2="176" stroke="#232326" />
      <line x1="600" y1="154" x2="600" y2="176" stroke="#232326" />
    </svg>
  );
}
