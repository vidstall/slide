import { SlideLayout } from "./Slide";
import { GeometryBackground } from "./GeometryBackground";
import { RevealList } from "./RevealList";
import { Timeline, type TimelinePoint } from "./Timeline";
import { FlowDiagram } from "./diagram/FlowDiagram";
import { DeviceMesh } from "./DeviceMesh";
import { ArchitectureMesh } from "./ArchitectureMesh";
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

const lifecycleNodes: DiagramNodeData[] = [
  { id: "register", label: "Register & Role Vote", sublabel: "Stake → CP quorum (2/3) votes role → apply_voted_role", x: 6, y: 15, layer: "worker" },
  { id: "room", label: "Create Room", sublabel: "RoomInfo only — pending, no relay yet", x: 6, y: 85, layer: "client" },
  { id: "escrow", label: "Fund Escrow", sublabel: "create_escrow — a separate tx, required before assignment", x: 82, y: 85, layer: "client" },
  { id: "assign", label: "Assignment", sublabel: "cp-daemon quorum (≥2/3 active CPs) ratifies pairing proposal on-chain", x: 110, y: 50, layer: "lifecycle" },
  { id: "setup", label: "Client ↔ Relay Setup", sublabel: "ICE/DTLS-SRTP negotiation; relay fetches TURN credential from cp-daemon", x: 138, y: 15, layer: "lifecycle" },
  { id: "running", label: "Media Running", sublabel: "SFU forwarding — standby warm pipe & canary probing run alongside", x: 166, y: 85, layer: "lifecycle" },
  { id: "close", label: "Close", sublabel: "Creator-only close_room — escrow left untouched", x: 194, y: 15, layer: "lifecycle" },
  { id: "settlement", label: "Settlement", sublabel: "distribute_rewards / pay_slash — see Economic Layer", x: 222, y: 85, layer: "lifecycle" },
];

const lifecycleBeats: DiagramBeat[] = [
  { type: "node", id: "register" },
  { type: "node", id: "room" },
  { type: "edge", from: "room", to: "escrow", label: "create_escrow — separate tx" },
  { type: "node", id: "escrow" },
  { type: "node", id: "assign" },
  { type: "edge", from: "register", to: "assign", label: "registered worker pool" },
  { type: "edge", from: "escrow", to: "assign", label: "cp-daemon scores the funded room" },
  { type: "node", id: "setup" },
  { type: "edge", from: "assign", to: "setup", label: "RoomAssigned: relay + signaling resolved" },
  { type: "node", id: "running" },
  { type: "edge", from: "setup", to: "running", label: "producers/consumers live" },
  { type: "node", id: "close" },
  { type: "edge", from: "running", to: "close", label: "creator closes, or cp-daemon expiry sweep" },
  { type: "node", id: "settlement" },
  { type: "edge", from: "close", to: "settlement", label: "distribute_rewards / pay_slash" },
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
  { id: "escrow", label: "Client: create_escrow", sublabel: "Funds locked before session starts", x: 6, y: 20, layer: "client" },
  { id: "session", label: "Session Runs", sublabel: "Relay serves; each validator measures independently", x: 38, y: 80, layer: "relay" },
  { id: "proof", label: "submit_session_proof", sublabel: "Dual-signed — permanent wallet + one-time session wallet", x: 70, y: 20, layer: "chain" },
  { id: "median", label: "Per-Relay Median", sublabel: "≥2 distinct validators required — bytes, loss bps, RTT", x: 102, y: 80, layer: "chain" },
  { id: "quality", label: "Quality Multiplier", sublabel: "Packet-loss tiers: 100% / 80% / 50% / 0%", x: 134, y: 20, layer: "chain" },
  { id: "distribute", label: "distribute_rewards", sublabel: "base_rate × median_bytes × quality — capped at escrow", x: 166, y: 80, layer: "reward" },
];

const economyBeats: DiagramBeat[] = [
  { type: "node", id: "escrow" },
  { type: "node", id: "session" },
  { type: "edge", from: "escrow", to: "session" },
  { type: "node", id: "proof" },
  { type: "edge", from: "session", to: "proof", label: "measured independently per validator" },
  { type: "node", id: "median" },
  { type: "edge", from: "proof", to: "median", label: "coverage + liveness gated" },
  { type: "node", id: "quality" },
  { type: "edge", from: "median", to: "quality", label: "median packet-loss bps" },
  { type: "node", id: "distribute" },
  { type: "edge", from: "quality", to: "distribute", label: "scarcity-weighted split: relay / validator / CP" },
];

const slashingColumns = ["Dimension", "Escrow QoS Slash", "Canary-Fraud Slash", "Liveness Ejection"];
const slashingRows: ComparisonRow[] = [
  {
    criteria: "Trigger",
    values: [
      "Session quality score = 0 (median packet-loss > 10%)",
      "2+ validators produce cryptographic tamper/drop proof",
      "2/3 of active validators vote the node unreachable",
    ],
  },
  {
    criteria: "Nature",
    values: ["Punitive — QoS failure", "Punitive — proven fraud", "Non-punitive — liveness only"],
    highlight: 2,
  },
  {
    criteria: "Stake impact",
    values: ["10% of stake, via pay_slash", "Fixed % cut (canary-audit)", "None — full stake returned"],
    highlight: 2,
  },
  {
    criteria: "Payout destination",
    values: ["Split: room creator + other assigned relays", "100% to room creator", "N/A — no payout, just ejection"],
  },
  {
    criteria: "Applies to",
    values: ["Relay only", "Relay only", "Any role"],
  },
];

const failoverNodes: DiagramNodeData[] = [
  { id: "primary", label: "Primary Relay", sublabel: "Serving session media", x: 10, y: 50, layer: "relay" },
  { id: "standby", label: "Standby Relay", sublabel: "Warm mediasoup pipe, Consumer paused", x: 10, y: 15, layer: "relay" },
  { id: "client", label: "Client", sublabel: "Pre-warmed, paused connection to standby", x: 10, y: 85, layer: "client" },
  { id: "localPromote", label: "Relay: Local Self-Promotion", sublabel: "Resume paused Consumer, flip role — ~3s, no chain tx", x: 72, y: 15, layer: "relay" },
  { id: "clientCutover", label: "Client: Independent Cutover", sublabel: "Un-pause pre-warmed stream — no chain tx", x: 72, y: 85, layer: "client" },
  { id: "onchain", label: "cp-daemon: Promote Relay (on-chain)", sublabel: "Epoch-stale >3 epochs (days-scale) OR health-alert quorum — ~30s+ poll", x: 116, y: 50, layer: "chain" },
  { id: "promoted", label: "RelayPromoted", sublabel: "On-chain record — audit trail & late joiners, trails the already-recovered call", x: 182, y: 50, layer: "chain" },
];

const failoverBeats: DiagramBeat[] = [
  { type: "node", id: "primary" },
  { type: "node", id: "standby" },
  { type: "edge", from: "primary", to: "standby", label: "/healthz probe, 1000ms interval (relay-local)" },
  { type: "node", id: "client" },
  { type: "edge", from: "primary", to: "client", label: "primary media stream (normal state)" },
  { type: "edge", from: "standby", to: "client", label: "pre-warmed, paused (receive-only)" },
  { type: "node", id: "localPromote" },
  { type: "edge", from: "standby", to: "localPromote", label: "3 misses (~3s) → resume & flip role" },
  { type: "node", id: "clientCutover" },
  { type: "edge", from: "client", to: "clientCutover", label: "silence or WS-close detected → un-pause standby" },
  { type: "node", id: "onchain" },
  { type: "edge", from: "primary", to: "onchain", label: "cp-daemon polling — independent of both fast paths above" },
  { type: "node", id: "promoted" },
  { type: "edge", from: "onchain", to: "promoted", label: "on-chain commit ~1.6–2.0s" },
];

const huddle01TradeoffColumns = ["Dimension", "Traditional Cloud VC", "Huddle01"];
const huddle01TradeoffRows: ComparisonRow[] = [
  {
    criteria: "Reliability / SLA",
    values: ["99.9%+ SLA-backed uptime", "Node uptime market-driven — no formal SLA"],
    highlight: 0,
  },
  {
    criteria: "Infrastructure cost",
    values: ["High fixed cost — paid even when idle", "Spare-capacity node economics — lower marginal cost"],
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
          <p className="cover-authors">Le Quoc Van — 22125119 &nbsp;·&nbsp; Duong Minh Quang — 22125081</p>
          <p className="cover-supervisor">Supervisor: Assoc. Prof. Nguyen Dinh Thuc</p>
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
              <li>Real-time, two-way audio and video between distant participants</li>
              <li>Two-way is what makes it "conferencing" — the 1927 first call was one-way</li>
              <li>A conference of participants, not a point-to-point link</li>
              <li>Mechanical origins to cloud services — the definition never changed</li>
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
          DePIN for RTC: spare-bandwidth nodes, token rewards, a purpose-built dRTC chain — and the same mediasoup SFU as this work.
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
    stepsCount: 0,
    render: () => (
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
        <ArchitectureMesh />
      </SlideLayout>
    ),
  },
  {
    id: "session-lifecycle",
    stepsCount: lifecycleBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="System Architecture" title="Session Lifecycle" wide>
        <p className="slide-subtitle">
          Worker registration and client room-creation run on independent tracks — Assignment is where they
          first meet.
        </p>
        <FlowDiagram nodes={lifecycleNodes} beats={lifecycleBeats} step={step} canvasWidth={1400} canvasHeight={460} />
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
      <SlideLayout eyebrow="Trust Model" title="Economic Layer: Funding, Measurement &amp; Rewards" wide>
        <FlowDiagram nodes={economyNodes} beats={economyBeats} step={step} canvasWidth={1300} canvasHeight={460} />
        <div className="stat-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="stat-card">
            <div className="stat-value">100% / 80% / 50% / 0%</div>
            <div className="stat-label">Quality multiplier by median packet-loss: ≤200 / ≤500 / ≤1000 bps, else zero</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">≥2 validators</div>
            <div className="stat-label">Minimum distinct attestations per relay before any payout</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">500–8,000 bps</div>
            <div className="stat-label">Dynamic scarcity clamp per role pool (relay / validator / CP) — not a fixed split</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Equal vs. accuracy-scored</div>
            <div className="stat-label">Qualifying relays split their pool evenly; validators split theirs by closeness to the median</div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: "economic-layer-slashing",
    stepsCount: slashingRows.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Trust Model" title="Three Distinct Ways to Lose Stake" wide>
        <p className="slide-subtitle">
          Self-reported degradation is advisory only and never touches stake — these three on-chain mechanisms
          are the only ones that do, and they differ in trigger, actor, and consequence.
        </p>
        <ComparisonTable columns={slashingColumns} rows={slashingRows} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "failover",
    stepsCount: failoverBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Trust Model" title="Self-Healing: Local Recovery, Chain Confirms Later" wide>
        <p className="slide-subtitle">
          Relay and client each cut over independently in seconds — on-chain promote_relay trails behind, for
          audit and late joiners only.
        </p>
        <FlowDiagram nodes={failoverNodes} beats={failoverBeats} step={step} canvasWidth={1400} canvasHeight={460} />
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
            { value: "Fee", label: "Per-function gas + one full K=2, N=4 session — pinned localnet only" },
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
      <SlideLayout eyebrow="Evaluation" title="Latency: Wide-Area One-Way Component-Sum">
        <div style={{ maxWidth: 560 }}>
          <BarChart
            data={[
              { label: "p50", value: 64.8 },
              { label: "p95", value: 70.9 },
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
      <SlideLayout eyebrow="Evaluation" title="On-Chain Fee per Session" wide>
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
            <div className="stat-value">0.017 SUI</div>
            <div className="stat-label">Irreversible cost — full K=2, N=4 session (13 transactions)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">0.035 SUI</div>
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
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">5 Azure regions</div>
            <div className="stat-label">eastus · westus2 · centralus · westeurope · eastus2 — each: 1 relay + 2 cp-daemon + 2 validator-daemon</div>
          </div>
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">25 infra workers</div>
            <div className="stat-label">5 services × 5 VMs — infra processes, not users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">2 scripted bots + 1 real</div>
            <div className="stat-label">bot1 creates the room, bot2 joins 5s later, both streaming</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">10-minute session</div>
            <div className="stat-label">Author joined live from Vietnam mid-call — a 3rd, real participant</div>
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
            "Healthy overall: stable bitrate and frame rate for the whole session",
            "The one rough patch traces to the live Vietnam join — a genuine cross-continental path — and self-resolves within 1–2 minutes",
            "No instability, resource exhaustion, or degradation across the 10 minutes",
            "A real, geographically distant participant handled gracefully — a signal beyond bot-to-bot traffic",
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
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">5 Azure regions</div>
            <div className="stat-label">eastus · westus2 · centralus · westeurope · eastus2 — each: 1 relay + 1 cp-daemon + 1 validator-daemon</div>
          </div>
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">15 infra workers</div>
            <div className="stat-label">3 services × 5 VMs — infra processes, not users</div>
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
            "Both relay kills recovered — no dropped participants",
            "Whole-run quality stayed healthy: 7.20ms avg jitter",
            "695.25 kbps avg download — light load at 2 concurrent viewers",
            "Smallest resilience scenario — the failover-recovery baseline for the 10-bot run in 3.4",
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
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">5 Azure regions</div>
            <div className="stat-label">eastus · westus2 · centralus · westeurope · eastus2 — each: 1 relay + 1 cp-daemon + 1 validator-daemon</div>
          </div>
        </div>
        <div className="stat-grid" style={{ marginTop: 12 }}>
          <div className="stat-card">
            <div className="stat-value">15 infra workers</div>
            <div className="stat-label">3 services × 5 VMs — infra processes, not users</div>
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
            "All four relay kills recovered — at 5x the concurrency of 3.3",
            "No degradation as load scales — whole-run latency lower than the 2-bot run",
            "1880.99 kbps avg download at 10 concurrent viewers",
            "Largest scenario measured — failover recovery holds without user-visible collapse",
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
            "Fee figures are localnet-only — no mainnet cross-check yet",
            "Latency and failover numbers are reduced-fidelity lower bounds — no real-camera, capture-to-paint measurement",
          ]}
        />
        <h3 className="slide-subtitle">Forward</h3>
        <RevealList
          className="bullet-list"
          step={Math.max(0, step - 3)}
          items={[
            "Designed for idle, high-churn nodes — yet every experiment ran on reliable infrastructure",
            "Next step: validate under real volunteer churn, not controlled kill-tests",
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
        <p className="slide-subtitle">DVConf — decentralised evidence and settlement over an operator-run media plane</p>
      </SlideLayout>
    ),
  },
];
