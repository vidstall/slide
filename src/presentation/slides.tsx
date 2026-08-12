import { SlideLayout } from "./Slide";
import { GeometryBackground } from "./GeometryBackground";
import { RevealList } from "./RevealList";
import { Timeline, type TimelinePoint } from "./Timeline";
import { FlowDiagram } from "./diagram/FlowDiagram";
import { DeviceMesh } from "./DeviceMesh";
import { LineChart } from "./chart/LineChart";
import { BarChart } from "./chart/BarChart";
import { ComparisonTable, type ComparisonRow } from "./ComparisonTable";
import { SectionDivider } from "./SectionDivider";
import type { DiagramBeat, DiagramNodeData } from "./diagram/types";
import type { SlideDef } from "./types";

import timeline1927 from "../assets/timeline/timeline-1927.png";
import timeline1964 from "../assets/timeline/timeline-1964.png";
import timeline1990s from "../assets/timeline/timeline-1990s.png";
import timeline2000s from "../assets/timeline/timeline-2000s.png";
import timeline2020 from "../assets/timeline/timeline-2020.png";

const historyPoints: TimelinePoint[] = [
  {
    year: "1927",
    caption: "AT&T demos the first public video call, scanning images with a mechanical Nipkow disk",
    image: timeline1927,
    alt: "Walter Gifford demonstrating the first public video call in 1927",
  },
  {
    year: "1964",
    caption: "Bell Labs' Picturephone debuts at the World's Fair — a commercial flop that never reaches 1% of its projected 100,000 units",
    image: timeline1964,
    alt: "A woman using the Picturephone in 1964",
  },
  {
    year: "1990s",
    caption: "Consumer PC video-calling kits arrive — plug a card and camera in for a few hundred dollars",
    image: timeline1990s,
    alt: "A 1997 PC video conferencing kit box and camera",
  },
  {
    year: "2000s",
    caption: "Telepresence hardware boom — life-size, dedicated rooms like HP's Halo Collaboration Studio",
    image: timeline2000s,
    alt: "A corporate telepresence conference room",
  },
  {
    year: "2020",
    caption: "COVID-19 makes video calling universal overnight — Zoom's meeting minutes grow 2,500× in three months",
    image: timeline2020,
    alt: "An Apple Group FaceTime call on an iPhone",
  },
];

const webrtcNodes: DiagramNodeData[] = [
  { id: "browser", label: "Browser APIs", sublabel: "getUserMedia · MediaStream", x: 50, y: 8, layer: "capture" },
  { id: "peer", label: "RTCPeerConnection", sublabel: "Core WebRTC engine", x: 50, y: 32, layer: "core" },
  { id: "signaling", label: "Signaling Server", sublabel: "SDP offer/answer (app-defined)", x: 12, y: 60, layer: "establish" },
  { id: "ice", label: "ICE Agent", sublabel: "STUN · TURN — NAT traversal", x: 88, y: 60, layer: "establish" },
  { id: "security", label: "DTLS-SRTP", sublabel: "Mandatory end-to-end encryption", x: 50, y: 60, layer: "transport" },
  { id: "media", label: "RTP/RTCP + SCTP", sublabel: "Media & data channels, direct P2P", x: 50, y: 90, layer: "transport" },
];

const webrtcBeats: DiagramBeat[] = [
  { type: "node", id: "browser" },
  { type: "node", id: "peer" },
  { type: "edge", from: "browser", to: "peer", label: "capture media" },
  { type: "node", id: "signaling" },
  { type: "edge", from: "peer", to: "signaling", label: "SDP offer/answer" },
  { type: "node", id: "ice" },
  { type: "edge", from: "peer", to: "ice", label: "gather & negotiate candidates" },
  { type: "node", id: "security" },
  { type: "edge", from: "peer", to: "security", label: "DTLS handshake" },
  { type: "node", id: "media" },
  { type: "edge", from: "ice", to: "media", label: "negotiated P2P path" },
  { type: "edge", from: "security", to: "media", label: "encrypt every packet" },
];

const gapColumns = ["Criteria", "Data-center cloud", "Idle & spare capacity"];
const gapRows: ComparisonRow[] = [
  { criteria: "Node reliability", values: ["High — SLA-backed uptime", "Low — high churn, no SLA"], highlight: 1 },
  { criteria: "Marginal cost", values: ["High — dedicated, paid whether idle or not", "Low — otherwise unused"], highlight: 1 },
  { criteria: "Trust model", values: ["Single operator", "Untrusted, permissionless"], highlight: 1 },
  { criteria: "Real-time media support", values: ["Mature — Zoom, Meet, LiveKit", "Unaddressed — this gap"], highlight: 1 },
];

const archNodes: DiagramNodeData[] = [
  { id: "client", label: "Client", sublabel: "Browser · WebRTC peer", x: 12, y: 50, layer: "client" },
  { id: "relay", label: "Relay", sublabel: "mediasoup SFU + coturn TURN", x: 45, y: 28, layer: "offchain" },
  { id: "validator", label: "Validator Daemon", sublabel: "Composite STUN + relay-counter probe", x: 45, y: 78, layer: "offchain" },
  { id: "chain", label: "Sui Chain", sublabel: "Registry · SessionProof · Settlement (Move)", x: 85, y: 50, layer: "chain" },
];

const archBeats: DiagramBeat[] = [
  { type: "node", id: "client" },
  { type: "node", id: "relay" },
  { type: "edge", from: "client", to: "relay", label: "media (SRTP)" },
  { type: "node", id: "validator" },
  { type: "edge", from: "validator", to: "relay", label: "probe" },
  { type: "node", id: "chain" },
  { type: "edge", from: "relay", to: "chain", label: "registration · heartbeat" },
  { type: "edge", from: "validator", to: "chain", label: "dual-signed SessionProof" },
  { type: "edge", from: "chain", to: "client", label: "room + relay assignment" },
];

const lifecycleNodes: DiagramNodeData[] = [
  { id: "register", label: "Register", sublabel: "Node enrollment: stake, capability", x: 6, y: 22, layer: "lifecycle" },
  { id: "room", label: "Create Room", sublabel: "Room + escrow object", x: 21, y: 68, layer: "lifecycle" },
  { id: "assign", label: "Assignment", sublabel: "Score-gated relay + validator pick", x: 36, y: 22, layer: "lifecycle" },
  { id: "setup", label: "Client Setup", sublabel: "ICE, DTLS-SRTP, TURN credentials", x: 51, y: 68, layer: "lifecycle" },
  { id: "running", label: "Media Running", sublabel: "SFU forwarding, heartbeats", x: 66, y: 22, layer: "lifecycle" },
  { id: "close", label: "Close", sublabel: "Session ends", x: 81, y: 68, layer: "lifecycle" },
  { id: "settlement", label: "Settlement", sublabel: "Reward or slash obligation", x: 96, y: 22, layer: "lifecycle" },
];

const lifecycleBeats: DiagramBeat[] = [
  { type: "node", id: "register" },
  { type: "node", id: "room" },
  { type: "edge", from: "register", to: "room", label: "escrow funded" },
  { type: "node", id: "assign" },
  { type: "edge", from: "room", to: "assign", label: "score ranking" },
  { type: "node", id: "setup" },
  { type: "edge", from: "assign", to: "setup", label: "TURN credentials issued" },
  { type: "node", id: "running" },
  { type: "edge", from: "setup", to: "running", label: "media begins" },
  { type: "node", id: "close" },
  { type: "edge", from: "running", to: "close", label: "session ends" },
  { type: "node", id: "settlement" },
  { type: "edge", from: "close", to: "settlement", label: "reward or slash" },
];

const proofNodes: DiagramNodeData[] = [
  { id: "walletA", label: "Wallet A", sublabel: "Validator identity", x: 25, y: 10, layer: "wallet" },
  { id: "walletB", label: "Wallet B", sublabel: "Session wallet (mapped to A)", x: 75, y: 10, layer: "wallet" },
  {
    id: "message",
    label: "BCS Measurement Message",
    sublabel: "9 fields: room · relay · packets · bytes · peers · duration · latency · loss · jitter",
    x: 50,
    y: 38,
    layer: "message",
  },
  { id: "txargs", label: "Transaction Arguments", sublabel: "2 public keys + 2 Ed25519 signatures", x: 50, y: 66, layer: "chain" },
  { id: "proof", label: "Stored SessionProof", sublabel: "Measurement fields only — signatures discarded", x: 50, y: 92, layer: "chain" },
];

const proofBeats: DiagramBeat[] = [
  { type: "node", id: "walletA" },
  { type: "node", id: "walletB" },
  { type: "node", id: "message" },
  { type: "edge", from: "walletA", to: "message", label: "sign" },
  { type: "edge", from: "walletB", to: "message", label: "sign" },
  { type: "node", id: "txargs" },
  { type: "edge", from: "message", to: "txargs", label: "message + signatures" },
  { type: "node", id: "proof" },
  { type: "edge", from: "txargs", to: "proof", label: "verified on-chain, reduced & stored" },
];

const economyNodes: DiagramNodeData[] = [
  { id: "proof2", label: "SessionProof", sublabel: "Quality measurement", x: 6, y: 50, layer: "chain" },
  { id: "quality", label: "Quality Check", sublabel: "Composite QoS score", x: 38, y: 50, layer: "chain" },
  { id: "rewards", label: "distribute_rewards", sublabel: "RewardsDistributed event", x: 70, y: 18, layer: "reward" },
  { id: "slash", label: "RelaySlashed", sublabel: "Penalty obligation recorded", x: 70, y: 82, layer: "penalty" },
  { id: "payslash", label: "pay_slash", sublabel: "Cooperative deduction from StakePosition", x: 102, y: 82, layer: "penalty" },
];

const economyBeats: DiagramBeat[] = [
  { type: "node", id: "proof2" },
  { type: "node", id: "quality" },
  { type: "edge", from: "proof2", to: "quality" },
  { type: "node", id: "rewards" },
  { type: "edge", from: "quality", to: "rewards", label: "quality ≥ threshold" },
  { type: "node", id: "slash" },
  { type: "edge", from: "quality", to: "slash", label: "zero-quality session" },
  { type: "node", id: "payslash" },
  { type: "edge", from: "slash", to: "payslash", label: "relay-authorised transaction" },
];

const failoverNodes: DiagramNodeData[] = [
  { id: "primary", label: "Primary Relay", sublabel: "Serving session media", x: 10, y: 22, layer: "relay" },
  { id: "standby", label: "Standby Relay", sublabel: "Paused DirectTransport, warm pipe", x: 10, y: 78, layer: "relay" },
  { id: "watcher", label: "RelayHeartbeatWatcher", sublabel: "Staleness check: heartbeat > 3 epochs", x: 48, y: 50, layer: "watcher" },
  { id: "promote", label: "promote_relay", sublabel: "Permissionless — no AdminCap", x: 82, y: 22, layer: "chain" },
  { id: "promoted", label: "RelayPromoted", sublabel: "New primary assigned on-chain", x: 82, y: 78, layer: "chain" },
];

const failoverBeats: DiagramBeat[] = [
  { type: "node", id: "primary" },
  { type: "node", id: "standby" },
  { type: "node", id: "watcher" },
  { type: "edge", from: "primary", to: "watcher", label: "heartbeat" },
  { type: "edge", from: "standby", to: "watcher", label: "eligible candidate" },
  { type: "node", id: "promote" },
  { type: "edge", from: "watcher", to: "promote", label: "primary stale (>3 epochs)" },
  { type: "node", id: "promoted" },
  { type: "edge", from: "promote", to: "promoted", label: "on-chain commit ~1.6–2.0s" },
];

const implementedColumns = ["Element", "Designed (proposal / ADR)", "Implemented (measured)"];
const implementedRows: ComparisonRow[] = [
  { criteria: "Validator quorum", values: ["3-of-4 BFT (ADR-0006)", "2 proofs, arithmetic mean"], highlight: 1 },
  { criteria: "Slashing enforcement", values: ["Automatic seizure", "Cooperative pay_slash deduction"], highlight: 1 },
  { criteria: "TURN / coturn deployment", values: ["Operational relay-side coturn", "Issuance + credentials only — never deployed"], highlight: 1 },
  { criteria: "SFU recovery target", values: ["8–15s design budget", "58 / 74 / 80ms mechanism floor (partial phases)"], highlight: 1 },
];

export const slides: SlideDef[] = [
  {
    id: "title",
    stepsCount: 0,
    render: () => (
      <div className="cover-slide">
        <GeometryBackground />
        <SlideLayout
          eyebrow="Bachelor Thesis · Advanced Program in Computer Science"
          title="Innovating Video Conferencing Systems Through Blockchain"
          wide
        >
          <div className="cover-institution">
            <p>VNU-HCMUS — Ho Chi Minh University of Science</p>
            <p>Faculty of Information Technology</p>
          </div>
          <p className="cover-authors">Le Quoc Van &nbsp;·&nbsp; Duong Minh Quang</p>
        </SlideLayout>
      </div>
    ),
  },
  {
    id: "divider-motivation",
    stepsCount: 0,
    render: () => <SectionDivider index="01" title="Motivation" subtitle="Why revisit video conferencing" />,
  },
  {
    id: "intro-video-conferencing",
    stepsCount: 5,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="Introduction"
        title={
          <>
            Nearly a Century of Video Calling <sup className="citation-mark">[001]</sup>
          </>
        }
        wide
      >
        <Timeline points={historyPoints} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "call-mesh",
    stepsCount: 0,
    render: () => (
      <div className="slide-content slide-content-wide">
        <div className="slide-columns">
          <div>
            <p className="slide-eyebrow">Introduction</p>
            <h1 className="slide-title">
              What is Video Conferencing? <sup className="citation-mark">[001]</sup>
            </h1>
            <ul className="bullet-list">
              <li>Real-time, two-way transmission of audio and video between people in different locations</li>
              <li>Two-way is what makes it "conferencing" — the first-ever call in 1927 was one-way, image only</li>
              <li>A conference of participants, not just a single point-to-point link</li>
              <li>The technology moved from mechanical, analog origins in the 1920s to IP-based, cloud-delivered services — the definition never changed</li>
            </ul>
          </div>
          <DeviceMesh />
        </div>
      </div>
    ),
  },
  {
    id: "cost-problem",
    stepsCount: 3,
    render: ({ step }) => (
      <SlideLayout eyebrow="The Status Quo" title="The Infrastructure Cost Problem">
        <div className="stat-grid">
          {[
            { value: "High reliability", label: "SLA-backed uptime on AWS/Azure/GCP — the default assumption for real-time media" },
            { value: "High fixed cost", label: "Dedicated data-center capacity, priced for peak load, paid whether idle or not" },
            { value: "Single-operator trust", label: "One company controls admission, assessment, and billing for the whole call" },
          ].map((stat, i) => (
            <div
              key={stat.value}
              className="stat-card"
              style={{
                opacity: i < step ? 1 : 0,
                transform: i < step ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "idle-capacity-gap",
    stepsCount: gapRows.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="The Opportunity" title="Idle Capacity vs. Data-Center Cloud" wide>
        <ComparisonTable columns={gapColumns} rows={gapRows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "research-gap",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="The Opportunity" title="The Research Gap">
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "Video conferencing has always assumed data-center-grade reliability — because voice/video is uniquely latency- and jitter-intolerant",
            "Emerging decentralized and idle compute (DePIN-style networks) is cheap but high-churn — nobody has targeted real-time media at that regime",
            "Blockchain coordination (post-2008) enables incentive-compatible use of untrusted, unreliable nodes — proven for batch compute, not for RTC",
            "DVConf proposes the coordination architecture this regime needs: chain-anchored assignment, evidence, and settlement around an off-chain SFU",
          ]}
        />
      </SlideLayout>
    ),
  },
  {
    id: "webrtc-framework",
    stepsCount: webrtcBeats.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="Background"
        title={
          <>
            WebRTC: Real-Time Communication in Browsers <sup className="citation-mark">[002]</sup>
          </>
        }
        wide
      >
        <div className="slide-columns">
          <ul className="bullet-list">
            <li>A W3C/IETF standard letting browsers exchange real-time audio, video, and data directly — no plugins, no installs</li>
            <li>Three core JS APIs: MediaStream (capture), RTCPeerConnection (transport), RTCDataChannel (arbitrary data)</li>
            <li>All media is mandatorily encrypted end-to-end via DTLS-SRTP — WebRTC has no unencrypted mode</li>
            <li>Signaling (exchanging SDP offers/answers) is deliberately left undefined by the spec — every app brings its own channel</li>
          </ul>
          <FlowDiagram nodes={webrtcNodes} beats={webrtcBeats} step={step} canvasWidth={640} canvasHeight={640} />
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "divider-architecture",
    stepsCount: 0,
    render: () => <SectionDivider index="02" title="Proposed Architecture" subtitle="DVConf: off-chain media, on-chain control" />,
  },
  {
    id: "architecture",
    stepsCount: archBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="System Architecture" title="Client, Relay, and Sui Chain" wide>
        <FlowDiagram nodes={archNodes} beats={archBeats} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "session-lifecycle",
    stepsCount: lifecycleBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="System Architecture" title="Session Lifecycle" wide>
        <FlowDiagram nodes={lifecycleNodes} beats={lifecycleBeats} step={step} canvasWidth={1100} canvasHeight={420} />
      </SlideLayout>
    ),
  },
  {
    id: "session-proof",
    stepsCount: proofBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Trust Model" title="Dual-Signed SessionProof" wide>
        <FlowDiagram nodes={proofNodes} beats={proofBeats} step={step} canvasWidth={900} canvasHeight={560} />
      </SlideLayout>
    ),
  },
  {
    id: "economic-layer",
    stepsCount: economyBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Trust Model" title="Economic Layer: Rewards &amp; Slashing" wide>
        <FlowDiagram nodes={economyNodes} beats={economyBeats} step={step} canvasWidth={1300} canvasHeight={460} />
      </SlideLayout>
    ),
  },
  {
    id: "failover",
    stepsCount: failoverBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Trust Model" title="Self-Healing: Relay Failover" wide>
        <FlowDiagram nodes={failoverNodes} beats={failoverBeats} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "divider-evaluation",
    stepsCount: 0,
    render: () => <SectionDivider index="03" title="Evaluation" subtitle="What was measured, projected, and left open" />,
  },
  {
    id: "evaluation-methodology",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="Evaluation" title="Four Dimensions">
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { value: "Latency", label: "Wide-area one-way component-sum, n=30 sessions — reduced-fidelity lower bound" },
            { value: "Cost", label: "Per-function gas + one full K=2, N=4 session — pinned localnet only" },
            { value: "Capacity", label: "Relay CPU/egress through N=15 viewers — N=100 is a projection" },
            { value: "Failover", label: "Warm-pipe mechanism floor, 30 cutovers — not full user-visible recovery" },
          ].map((stat, i) => (
            <div
              key={stat.value}
              className="stat-card"
              style={{
                opacity: i < step ? 1 : 0,
                transform: i < step ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-latency",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation" title="Latency: Below the 200ms Ceiling">
        <div style={{ maxWidth: 560 }}>
          <BarChart
            data={[
              { label: "p50", value: 64.8 },
              { label: "p95", value: 70.9 },
              { label: "p99", value: 72.0 },
            ]}
            unit=" ms"
          />
        </div>
        <p className="slide-subtitle">Wide-area one-way component-sum, n=30 — reduced-fidelity lower bound, not capture-to-paint.</p>
      </SlideLayout>
    ),
  },
  {
    id: "eval-cost",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation" title="Cost: Fractions of a Cent per Call" wide>
        <div style={{ maxWidth: 720 }}>
          <BarChart
            data={[
              { label: "create_room", value: 1.161 },
              { label: "create_escrow", value: 1.1 },
              { label: "pairing", value: 1.275 },
              { label: "session_proof", value: 1.327 },
              { label: "close_room", value: 1.173 },
              { label: "rewards", value: 1.367 },
            ]}
            unit="M"
            height={220}
          />
        </div>
        <p className="slide-subtitle" style={{ fontSize: 16, marginTop: 4 }}>
          Per-function gas cost, in millions of MIST (irreversible basis).
        </p>
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="stat-card">
            <div className="stat-value">0.0257 SUI</div>
            <div className="stat-label">Irreversible cost — full K=2, N=4 session (13 transactions)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0.0351 SUI</div>
            <div className="stat-label">Net cost — same session, including refundable storage</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-capacity",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation" title="Capacity: Measured to N=15, Projected to N=100">
        <div style={{ maxWidth: 560 }}>
          <LineChart
            xLabels={["N=5", "N=10", "N=15"]}
            unit="%"
            series={[{ name: "Relay CPU utilization (% of one core)", values: [2.3, 4.0, 5.0], colorVar: "--series-1" }]}
            height={220}
          />
        </div>
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="stat-card">
            <div className="stat-value">≤15 viewers measured</div>
            <div className="stat-label">Relay CPU stayed below saturation (0.05 of one core at N=15)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">~3–6 relays (projected)</div>
            <div className="stat-label">Modeled floor for N=100 users — not an observed ceiling</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-failover",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation" title="Failover: Warm-Pipe Mechanism Floor">
        <div style={{ maxWidth: 560 }}>
          <BarChart
            data={[
              { label: "p50", value: 58 },
              { label: "p95", value: 74 },
              { label: "p99", value: 80 },
            ]}
            unit=" ms"
            height={220}
          />
        </div>
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div className="stat-card">
            <div className="stat-value">1.6–2.0 s</div>
            <div className="stat-label">On-chain promote_relay → RelayPromoted commit (median 1.6s)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Unmeasured</div>
            <div className="stat-label">Full kill-to-rendered-media recovery time — remains future work</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "divider-discussion",
    stepsCount: 0,
    render: () => <SectionDivider index="04" title="Discussion" subtitle="What's implemented vs. what's designed" />,
  },
  {
    id: "designed-vs-implemented",
    stepsCount: implementedRows.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Discussion" title="Designed vs. Implemented" wide>
        <ComparisonTable columns={implementedColumns} rows={implementedRows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "limitations",
    stepsCount: 5,
    render: ({ step }) => (
      <SlideLayout eyebrow="Discussion" title="Limitations &amp; Future Work">
        <h3 className="slide-subtitle">Unresolved</h3>
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "Proof-to-relay binding: a submitted proof doesn't cryptographically verify the relay was assigned to that room",
            "Cost figures are localnet-only — no mainnet gas/price cross-check yet",
            "Latency and failover numbers are reduced-fidelity lower bounds — no real-camera, capture-to-paint measurement",
          ]}
        />
        <h3 className="slide-subtitle">Forward</h3>
        <RevealList
          className="bullet-list"
          step={Math.max(0, step - 3)}
          items={[
            "The architecture is designed for idle/high-churn nodes, but every experiment ran on reliable, single-workstation or data-center infrastructure",
            "Validating DVConf under real volunteer/spare-capacity churn — not controlled kill-tests on reliable infra — is the natural next step",
          ]}
        />
      </SlideLayout>
    ),
  },
  {
    id: "references",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Sources" title="References">
        <ol className="reference-list">
          <li>
            <span className="reference-mark">[001]</span>
            <span>
              J. Joskowicz, "Video Conferencing Technologies: Past, Present and Future,"
              Universidad de la República, Uruguay, Sept. 2023.
            </span>
          </li>
          <li>
            <span className="reference-mark">[002]</span>
            <span>W3C, "WebRTC: Real-Time Communication in Browsers," W3C Recommendation, Mar. 2025.</span>
          </li>
        </ol>
      </SlideLayout>
    ),
  },
  {
    id: "closing",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Thanks" title="Questions?">
        <p className="slide-subtitle">Press ← to go back and replay the deck.</p>
      </SlideLayout>
    ),
  },
];
