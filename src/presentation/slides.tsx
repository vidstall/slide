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

import r2Participants from "../assets/evaluation/result02/2-participants-per-room.png";
import r2Ice from "../assets/evaluation/result02/15-ice-success-rate-all-users.png";
import r2Latency from "../assets/evaluation/result02/4-latency-all-users.png";
import r2Jitter from "../assets/evaluation/result02/5-jitter-all-users.png";
import r2PacketLoss from "../assets/evaluation/result02/6-packet-loss-all-users.png";
import r2Failover from "../assets/evaluation/result02/17-relay-failover-downtime-all-users.png";
import r2Bitrate from "../assets/evaluation/result02/7-bitrate-up-down-all-users.png";
import r2Resolution from "../assets/evaluation/result02/8-resolution-all-users.png";
import r2FrameRate from "../assets/evaluation/result02/9-frame-rate-all-users.png";
import r2EncodeDecode from "../assets/evaluation/result02/10-encode-decode-latency-all-users.png";

import r4Participants from "../assets/evaluation/result04/2-participants-per-room.png";
import r4Ice from "../assets/evaluation/result04/15-ice-success-rate-all-users.png";
import r4Latency from "../assets/evaluation/result04/4-latency-all-users.png";
import r4Jitter from "../assets/evaluation/result04/5-jitter-all-users.png";
import r4PacketLoss from "../assets/evaluation/result04/6-packet-loss-all-users.png";
import r4Failover from "../assets/evaluation/result04/17-relay-failover-downtime-all-users.png";
import r4Bitrate from "../assets/evaluation/result04/7-bitrate-up-down-all-users.png";
import r4Resolution from "../assets/evaluation/result04/8-resolution-all-users.png";
import r4FrameRate from "../assets/evaluation/result04/9-frame-rate-all-users.png";
import r4EncodeDecode from "../assets/evaluation/result04/10-encode-decode-latency-all-users.png";

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

const gapColumns = ["Criteria", "Data-center cloud", "Idle & spare capacity"];
const gapRows: ComparisonRow[] = [
  { criteria: "Node reliability", values: ["High — SLA-backed uptime", "Low — high churn, no SLA"], highlight: 1 },
  { criteria: "Marginal cost", values: ["High — dedicated, paid whether idle or not", "Low — otherwise unused"], highlight: 1 },
  { criteria: "Trust model", values: ["Single operator", "Untrusted, permissionless"], highlight: 1 },
  { criteria: "Real-time media support", values: ["Mature — Zoom, Meet, LiveKit", "Unaddressed — this gap"], highlight: 1 },
];

const archNodes: DiagramNodeData[] = [
  { id: "client", label: "Client", sublabel: "Browser · WebRTC peer", x: 2, y: 50, layer: "client" },
  { id: "relay", label: "Relay", sublabel: "mediasoup SFU + coturn TURN", x: 32, y: 12, layer: "offchain" },
  { id: "validator", label: "Validator Daemon", sublabel: "Canary probe · STUN/relay-latency probe", x: 32, y: 88, layer: "offchain" },
  { id: "cpdaemon", label: "cp-daemon", sublabel: "Control-plane: pairing quorum, TURN issuance, failover", x: 80, y: 6, layer: "control" },
  { id: "chain", label: "Sui Chain", sublabel: "Registry · RoomAssignment · SessionProof · Settlement (Move)", x: 116, y: 50, layer: "chain" },
];

const archBeats: DiagramBeat[] = [
  { type: "node", id: "client" },
  { type: "node", id: "relay" },
  { type: "edge", from: "client", to: "relay", label: "media + signaling (single WS)" },
  { type: "node", id: "validator" },
  { type: "edge", from: "validator", to: "relay", label: "canary probe" },
  { type: "node", id: "cpdaemon" },
  { type: "edge", from: "cpdaemon", to: "relay", label: "TURN credentials (HTTP)" },
  { type: "node", id: "chain" },
  { type: "edge", from: "relay", to: "chain", label: "register · heartbeat (relay_registry)" },
  { type: "edge", from: "validator", to: "chain", label: "register · dual-signed SessionProof" },
  { type: "edge", from: "cpdaemon", to: "chain", label: "pairing quorum (≥2/3) · promote_relay · CapToken" },
  { type: "edge", from: "client", to: "chain", label: "register/create_room/create_escrow ↔ read room+relay assignment" },
];

const lifecycleNodes: DiagramNodeData[] = [
  { id: "register", label: "Register", sublabel: "Node enrollment: stake, capability", x: 6, y: 22, layer: "lifecycle" },
  { id: "room", label: "Create Room", sublabel: "Room + escrow object", x: 21, y: 68, layer: "lifecycle" },
  { id: "assign", label: "Assignment", sublabel: "cp-daemon quorum (≥2/3 active CPs) ratifies pairing proposal on-chain", x: 36, y: 22, layer: "lifecycle" },
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
  { type: "edge", from: "room", to: "assign", label: "cp-daemon scoring" },
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
  { id: "watcher", label: "cp-daemon: Heartbeat Watcher", sublabel: "Staleness check: primary heartbeat > 3 epochs", x: 48, y: 50, layer: "watcher" },
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

const huddle01TradeoffColumns = ["Dimension", "Traditional Cloud VC", "Huddle01"];
const huddle01TradeoffRows: ComparisonRow[] = [
  {
    criteria: "Reliability / SLA",
    values: ["99.9%+ SLA-backed uptime, data-center hosted", "Node uptime market-driven — no formal SLA"],
    highlight: 0,
  },
  {
    criteria: "Infrastructure cost",
    values: ["High fixed cost — dedicated capacity, paid whether idle or not", "Spare-capacity node economics — lower marginal cost"],
    highlight: 1,
  },
  {
    criteria: "Control & data custody",
    values: ["Single vendor controls admission, data, and billing", "Permissionless node network — no single custodian"],
    highlight: 1,
  },
  {
    criteria: "QoS maturity",
    values: ["Years of global routing optimization — Zoom, Meet, Teams", "Early-stage DePIN network — node density still growing"],
    highlight: 0,
  },
  {
    criteria: "Accountability evidence",
    values: ["Vendor-published SLAs and compliance audits", "Node-level QoS not publicly documented"],
    highlight: 0,
  },
];

const huddle01Columns = ["Dimension", "Huddle01", "DVConf (this work)"];
const huddle01Rows: ComparisonRow[] = [
  { criteria: "SFU / media layer", values: ["mediasoup", "mediasoup — inherited choice"], highlight: 1 },
  { criteria: "Coordination chain", values: ["Custom dRTC Chain (Arbitrum Orbit)", "General-purpose Sui / Move"], highlight: 1 },
  {
    criteria: "Node incentive model",
    values: ["Uptime/bandwidth-based PoS rewards", "Dual-signed SessionProof — per-session quality evidence"],
    highlight: 1,
  },
  { criteria: "Accountability evidence", values: ["Not publicly documented", "Explicit, hedged, measured vs. designed"], highlight: 1 },
  { criteria: "Maturity", values: ["Funded, mainnet, commercial", "Academic prototype, rigorously evaluated"] },
];

// azure-devnet-sample (docs/evaluation/result01) — 11 minute-buckets over the ~10-minute
// session. Values are read off the Grafana panel screenshots at each visible inflection point
// (baseline, the manual Vietnam-join spike/dip around minute 2-4, recovery, steady-state) —
// a faithful visual approximation of the real run, not exported per-second telemetry.
const r1XLabels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const r1Participants = [1, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2];

const r1IceAvg = [0, 100, 100, 65, 65, 100, 100, 100, 100, 100, 100];
const r1IceMin = [0, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100];
const r1IceMax = [0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

const r1LatencyAvg = [0, 25, 25, 100, 100, 75, 75, 75, 78, 78, 78];
const r1LatencyMin = [0, 10, 10, 40, 40, 60, 60, 60, 65, 65, 65];
const r1LatencyMax = [0, 35, 35, 200, 200, 90, 90, 90, 90, 90, 90];

const r1JitterAvg = [0, 8, 7, 10, 8, 6, 7, 6, 7, 7, 7];
const r1JitterMin = [0, 5, 4, 2, 1, 0, 0, 0, 0, 0, 0];
const r1JitterMax = [0, 11, 10, 15, 12, 9, 11, 10, 13, 14, 13];

const r1PacketLoss = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const r1BitrateUp = [0, 0.6, 0.9, 1.0, 1.1, 1.0, 0.9, 1.0, 0.9, 1.0, 0.9];
const r1BitrateDown = [0, 0.6, 0.9, 1.0, 1.2, 1.1, 0.9, 1.0, 0.9, 1.0, 0.9];

const r1ResolutionAvg = [0, 900, 900, 900, 620, 620, 500, 500, 500, 500, 500];
const r1ResolutionMin = [0, 900, 900, 900, 100, 80, 80, 80, 80, 80, 80];
const r1ResolutionMax = [0, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900];

const r1FpsAvg = [0, 28, 29, 28, 27, 26, 28, 29, 28, 27, 29];
const r1FpsMin = [0, 25, 27, 23, 22, 24, 26, 27, 25, 24, 28];
const r1FpsMax = [0, 30, 31, 30, 29, 29, 30, 31, 30, 29, 31];

const r1EncodeAvg = [0, 5, 6, 7, 7, 6, 7, 8, 7, 7, 7];
const r1DecodeAvg = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
    id: "intro-video-conferencing",
    stepsCount: 5,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="01 Motivation — Introduction"
        title={
          <>
            Nearly a Century of Video Calling <sup className="citation-mark">[001]</sup>
          </>
        }
        wide
      >
        <p className="slide-subtitle">Why revisit video conferencing</p>
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
    id: "idle-capacity-gap",
    stepsCount: gapRows.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="The Status Quo → The Opportunity"
        title={
          <>
            The Cost Problem, Meet the Idle-Capacity Opportunity <sup className="citation-mark">[003]</sup>
          </>
        }
        wide
      >
        <ComparisonTable columns={gapColumns} rows={gapRows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "huddle01-tradeoffs",
    stepsCount: huddle01TradeoffRows.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="The Opportunity"
        title={
          <>
            Huddle01: The Closest Existing Attempt <sup className="citation-mark">[004,011]</sup>
          </>
        }
        wide
      >
        <p className="slide-subtitle">
          DePIN for RTC: node operators contribute spare bandwidth for $HUDL token rewards, coordinated on a
          purpose-built Arbitrum Orbit dRTC Chain — running the same mediasoup SFU as this work. Funded and
          production-stage: $37M node sale, 840M+ minutes served, mainnet and $HUDL TGE live since Q1 2026.
        </p>
        <ComparisonTable columns={huddle01TradeoffColumns} rows={huddle01TradeoffRows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "inheritance-advantages",
    stepsCount: huddle01Rows.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="The Opportunity"
        title={
          <>
            What We Inherit — and Where We Differ <sup className="citation-mark">[004]</sup>
          </>
        }
        wide
      >
        <ComparisonTable columns={huddle01Columns} rows={huddle01Rows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "architecture",
    stepsCount: archBeats.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="02 Proposed Architecture — System Architecture"
        title={
          <>
            Client, Relay, and Sui Chain <sup className="citation-mark">[007,008]</sup>
          </>
        }
        wide
      >
        <p className="slide-subtitle">DVConf: off-chain data plane (Relay), off-chain control plane (cp-daemon + Validator), on-chain settlement</p>
        <FlowDiagram nodes={archNodes} beats={archBeats} step={step} canvasWidth={1300} canvasHeight={480} />
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
    id: "evaluation-methodology",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="03 Evaluation — 3.1 Origin Test" title="Four Dimensions">
        <p className="slide-subtitle">
          What was measured, projected, and left open — localnet & synthetic baseline measurements
        </p>
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
    id: "divider-4-2",
    stepsCount: 0,
    render: () => (
      <SectionDivider
        kicker="Evaluation"
        variant="sub"
        index="3.2"
        title="Quality Baseline"
        subtitle="azure-devnet-sample — 25 workers · 5 Azure VMs · 2 bots + 1 real join"
      >
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {["eastus", "westus2", "centralus", "westeurope", "eastus2"].map((region) => (
            <div key={region} className="stat-card">
              <div className="stat-value">{region}</div>
              <div className="stat-label">1 relay + 2 cp-daemon + 2 validator-daemon</div>
            </div>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">25 infra workers</div>
            <div className="stat-label">5 services × 5 VMs, Standard_D2als_v7 (2 vCPU), under a 3-vCPU/region quota</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2 scripted bots + 1 real</div>
            <div className="stat-label">bot1 creates the room, bot2 joins 5s later, both stream media_mode=both</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">10-minute session</div>
            <div className="stat-label">Author manually joined live from Vietnam mid-call as a 3rd, real participant</div>
          </div>
        </div>
      </SectionDivider>
    ),
  },
  {
    id: "eval-r1-session-health",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.2" title="Session & Network Health" wide>
        <div className="eval-chart-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            {
              title: "Participants per room",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[{ name: "participants", values: r1Participants, colorVar: "--series-1" }]}
                  height={140}
                />
              ),
              caption: "Steps 1→2→3→2: bot1 creates, bot2 joins, the manual VN join, then VN leaving.",
            },
            {
              title: "ICE Success Rate",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "avg", values: r1IceAvg, colorVar: "--series-1" },
                    { name: "min", values: r1IceMin, colorVar: "--series-3" },
                    { name: "max", values: r1IceMax, colorVar: "--series-2" },
                  ]}
                  unit="%"
                  height={140}
                />
              ),
              caption: "Steady 100%, dipping only during the VN join window, fully recovering.",
            },
            {
              title: "Latency",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "avg", values: r1LatencyAvg, colorVar: "--series-1" },
                    { name: "min", values: r1LatencyMin, colorVar: "--series-3" },
                    { name: "max", values: r1LatencyMax, colorVar: "--series-2" },
                  ]}
                  unit=" ms"
                  height={140}
                />
              ),
              caption: "~20–30ms baseline, spikes to ~200ms during the VN join, settles ~70–80ms.",
            },
            {
              title: "Jitter",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "avg", values: r1JitterAvg, colorVar: "--series-1" },
                    { name: "min", values: r1JitterMin, colorVar: "--series-3" },
                    { name: "max", values: r1JitterMax, colorVar: "--series-2" },
                  ]}
                  unit=" ms"
                  height={140}
                />
              ),
              caption: "Noisy 5–14ms band; elevated max coincides with the VN join window.",
            },
            {
              title: "Packet Loss",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[{ name: "loss", values: r1PacketLoss, colorVar: "--series-1" }]}
                  unit="%"
                  height={140}
                />
              ),
              caption: "Flat 0% for the entire 10-minute session.",
            },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              {cell.chart}
              <p className="eval-chart-cell-caption">{cell.caption}</p>
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r1-media-quality",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.2" title="Media Quality" wide>
        <div className="eval-chart-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {[
            {
              title: "Bitrate Up/Down",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "upload avg", values: r1BitrateUp, colorVar: "--series-1" },
                    { name: "download avg", values: r1BitrateDown, colorVar: "--series-2" },
                  ]}
                  unit=" Mb/s"
                  height={150}
                />
              ),
              caption: "Ramps to ~1–2 Mb/s, noisy but stable — no collapse.",
            },
            {
              title: "Resolution",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "avg", values: r1ResolutionAvg, colorVar: "--series-1" },
                    { name: "min", values: r1ResolutionMin, colorVar: "--series-3" },
                    { name: "max", values: r1ResolutionMax, colorVar: "--series-2" },
                  ]}
                  unit="K"
                  height={150}
                />
              ),
              caption: "Jumps to ~900K early; average settles ~500–620K as one participant downgrades.",
            },
            {
              title: "Frame Rate",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "avg", values: r1FpsAvg, colorVar: "--series-1" },
                    { name: "min", values: r1FpsMin, colorVar: "--series-3" },
                    { name: "max", values: r1FpsMax, colorVar: "--series-2" },
                  ]}
                  unit=" fps"
                  height={150}
                />
              ),
              caption: "Ramps to and holds ~28–30fps, with occasional dips to ~22fps.",
            },
            {
              title: "Encode/Decode Latency",
              chart: (
                <LineChart
                  xLabels={r1XLabels}
                  series={[
                    { name: "encode avg", values: r1EncodeAvg, colorVar: "--series-1" },
                    { name: "decode avg", values: r1DecodeAvg, colorVar: "--series-2" },
                  ]}
                  unit=" ms"
                  height={150}
                />
              ),
              caption: "Low and stable throughout — encode ~4–8ms, decode ~1ms.",
            },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              {cell.chart}
              <p className="eval-chart-cell-caption">{cell.caption}</p>
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r1-summary",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="Evaluation — 3.2" title="Summary & Conclusion">
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "Deployment is healthy overall: 0% packet loss and stable bitrate/frame rate for the whole session",
            "The one rough patch — the ICE/latency/jitter blip — is attributable to the author's manual Vietnam join, a genuine cross-continental path, not a scripted-bot artifact; it self-resolves within 1–2 minutes",
            "No evidence of instability, resource exhaustion, or degradation over the 10-minute session — a passing/healthy result suitable to cite in the thesis evaluation",
            "The topology also handled a real, geographically distant participant gracefully — a useful signal beyond scripted bot-to-bot traffic",
          ]}
        />
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">0% packet loss</div>
            <div className="stat-label">Flat all session</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">~70–80ms latency</div>
            <div className="stat-label">Steady-state, post-VN-join</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100% ICE recovery</div>
            <div className="stat-label">Within 1–2 min of VN join</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "divider-4-3",
    stepsCount: 0,
    render: () => (
      <SectionDivider
        kicker="Evaluation"
        variant="sub"
        index="3.3"
        title="2-Bot Resilience Test"
        subtitle="15 workers · 5 hosts · 2 relay-failover events (5.8–7.0s downtime)"
      >
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {["eastus", "westus2", "centralus", "westeurope", "eastus2"].map((region) => (
            <div key={region} className="stat-card">
              <div className="stat-value">{region}</div>
              <div className="stat-label">1 relay + 1 cp-daemon + 1 validator-daemon</div>
            </div>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">15 infra workers</div>
            <div className="stat-label">3 services × 5 VMs, Standard_D2als_v7 (2 vCPU), under a 3-vCPU/region quota</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2 scripted bots</div>
            <div className="stat-label">Both join one room, held for ~400s (~6.7 min)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2 relay kills</div>
            <div className="stat-label">Applied manually, out-of-band — not scripted in scenario.toml; evidenced by the relay-failover-downtime panel</div>
          </div>
        </div>
      </SectionDivider>
    ),
  },
  {
    id: "eval-r2-session-health",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.3" title="Session & Network Health" wide>
        <div className="eval-room-image-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { title: "Participants per Room", src: r2Participants },
            { title: "ICE Success Rate", src: r2Ice },
            { title: "Latency", src: r2Latency },
            { title: "Jitter", src: r2Jitter },
            { title: "Packet Loss", src: r2PacketLoss },
            { title: "Relay Failover Downtime", src: r2Failover },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              <img className="eval-room-image" src={cell.src} alt={cell.title} />
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r2-media-quality",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.3" title="Media Quality" wide>
        <div className="eval-room-image-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {[
            { title: "Bitrate Up/Down", src: r2Bitrate },
            { title: "Resolution", src: r2Resolution },
            { title: "Frame Rate", src: r2FrameRate },
            { title: "Encode/Decode Latency", src: r2EncodeDecode },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              <img className="eval-room-image" src={cell.src} alt={cell.title} />
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r2-summary",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="Evaluation — 3.3" title="Summary & Conclusion">
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "2 relay-kill events, downtime 5.82s and 6.96s — the room recovered both times with no dropped participants",
            "Whole-run quality stayed healthy: 50.15ms avg latency, 7.20ms avg jitter, 0.00% avg packet loss",
            "695.25 kbps avg download bitrate — light load at 2 concurrent viewers",
            "Smallest of the resilience scenarios — establishes the failover-recovery baseline before scaling to 5 and 10 bots",
          ]}
        />
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">2 failover events</div>
            <div className="stat-label">5.82s–6.96s downtime</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">50.15ms avg latency</div>
            <div className="stat-label">Whole-run average</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0.00% packet loss</div>
            <div className="stat-label">Whole-run average</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "divider-4-5",
    stepsCount: 0,
    render: () => (
      <SectionDivider
        kicker="Evaluation"
        variant="sub"
        index="3.4"
        title="10-Bot Resilience Test"
        subtitle="15 workers · 5 hosts · 4 relay-failover events (7.6–19.6s downtime)"
      >
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {["eastus", "westus2", "centralus", "westeurope", "eastus2"].map((region) => (
            <div key={region} className="stat-card">
              <div className="stat-value">{region}</div>
              <div className="stat-label">1 relay + 1 cp-daemon + 1 validator-daemon</div>
            </div>
          ))}
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">15 infra workers</div>
            <div className="stat-label">3 services × 5 VMs, Standard_D2als_v7 (2 vCPU), under a 3-vCPU/region quota</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">10 scripted bots</div>
            <div className="stat-label">2 concurrent sessions per bot worker, all join one room, held for ~400s (~6.7 min)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4 relay kills</div>
            <div className="stat-label">Applied manually, out-of-band — not scripted in scenario.toml; evidenced by the relay-failover-downtime panel</div>
          </div>
        </div>
      </SectionDivider>
    ),
  },
  {
    id: "eval-r4-session-health",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.4" title="Session & Network Health" wide>
        <div className="eval-room-image-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
            { title: "Participants per Room", src: r4Participants },
            { title: "ICE Success Rate", src: r4Ice },
            { title: "Latency", src: r4Latency },
            { title: "Jitter", src: r4Jitter },
            { title: "Packet Loss", src: r4PacketLoss },
            { title: "Relay Failover Downtime", src: r4Failover },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              <img className="eval-room-image" src={cell.src} alt={cell.title} />
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r4-media-quality",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation — 3.4" title="Media Quality" wide>
        <div className="eval-room-image-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {[
            { title: "Bitrate Up/Down", src: r4Bitrate },
            { title: "Resolution", src: r4Resolution },
            { title: "Frame Rate", src: r4FrameRate },
            { title: "Encode/Decode Latency", src: r4EncodeDecode },
          ].map((cell) => (
            <div key={cell.title}>
              <h4 className="eval-chart-cell-title">{cell.title}</h4>
              <img className="eval-room-image" src={cell.src} alt={cell.title} />
            </div>
          ))}
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "eval-r4-summary",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="Evaluation — 3.4" title="Summary & Conclusion">
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "4 relay-kill events, downtime 7.61s–19.6s — the room recovered every time despite 5x the concurrency of 3.3",
            "Whole-run avg latency actually drops to 31.68ms — no evidence of degradation as load scales to 10 bots",
            "Packet loss stays low: 0.03% avg, 0.14% p95; 1880.99 kbps avg download bitrate at 10 concurrent viewers",
            "Largest scenario measured so far — failover recovery holds without user-visible collapse",
          ]}
        />
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">4 failover events</div>
            <div className="stat-label">7.61s–19.6s downtime</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">31.68ms avg latency</div>
            <div className="stat-label">Whole-run average</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0.03% packet loss</div>
            <div className="stat-label">Whole-run average (p95 0.14%)</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "limitations",
    stepsCount: 5,
    render: ({ step }) => (
      <SlideLayout eyebrow="04 Discussion" title="Limitations &amp; Future Work">
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
          <li>
            <span className="reference-mark">[003]</span>
            <span>
              L. F. G. Sarmenta, "Sabotage-Tolerance Mechanisms for Volunteer Computing Systems," in Proc. IEEE/ACM Int. Symp.
              on Cluster Computing and the Grid (CCGrid), Brisbane, Australia, May 2001, pp. 337–346.
            </span>
          </li>
          <li>
            <span className="reference-mark">[004]</span>
            <span>
              Huddle01, "dRTC Chain: Decentralized Real-Time Communication Infrastructure." Available:
              https://huddle01.com/media-node/documentation/drtc-network/drtc-chain.
            </span>
          </li>
          <li>
            <span className="reference-mark">[005]</span>
            <span>
              D. McGrew and E. Rescorla, "Datagram Transport Layer Security (DTLS) Extension to Establish Keys for the Secure
              Real-Time Transport Protocol (SRTP)," IETF, RFC 5764, May 2010.
            </span>
          </li>
          <li>
            <span className="reference-mark">[006]</span>
            <span>E. Rescorla, "WebRTC Security Architecture," IETF, RFC 8827, Jan. 2021.</span>
          </li>
          <li>
            <span className="reference-mark">[007]</span>
            <span>mediasoup contributors, "Mediasoup: Cutting-Edge WebRTC Video Conferencing." Available: https://mediasoup.org.</span>
          </li>
          <li>
            <span className="reference-mark">[008]</span>
            <span>
              coturn contributors, "Coturn: Free Open Source Implementation of TURN and STUN Server." Available:
              https://github.com/coturn/coturn.
            </span>
          </li>
          <li>
            <span className="reference-mark">[009]</span>
            <span>
              E. Buchman, "Tendermint: Byzantine Fault Tolerance in the Age of Blockchains," M.Sc. thesis, Dept. of Computer
              Science, University of Guelph, Guelph, ON, Canada, Jun. 2016.
            </span>
          </li>
          <li>
            <span className="reference-mark">[010]</span>
            <span>
              M. Castro and B. Liskov, "Practical Byzantine Fault Tolerance," in Proc. 3rd USENIX Symp. on Operating Systems
              Design and Implementation (OSDI), New Orleans, LA, USA, Feb. 1999, pp. 173–186.
            </span>
          </li>
          <li>
            <span className="reference-mark">[011]</span>
            <span>
              B. Allison, "Huddle01: Blockchain-Based Video Conferencing Platform Built on Arbitrum Orbit, Targets $37M Node
              Sale," CoinDesk, Sept. 2024.
            </span>
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
