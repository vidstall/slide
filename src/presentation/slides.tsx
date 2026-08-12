import { SlideLayout } from "./Slide";
import { GeometryBackground } from "./GeometryBackground";
import { RevealList } from "./RevealList";
import { Timeline, type TimelinePoint } from "./Timeline";
import { FlowDiagram } from "./diagram/FlowDiagram";
import { DeviceMesh } from "./DeviceMesh";
import { LineChart } from "./chart/LineChart";
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

const comparisonColumns = ["Criteria", "Existing Tool A", "Existing Tool B", "This Work"];
const comparisonRows: ComparisonRow[] = [
  { criteria: "TURN relay fallback", values: ["No", "Manual", "Automatic"], highlight: 2 },
  { criteria: "Load-testing harness", values: ["No", "No", "Built-in"], highlight: 2 },
  { criteria: "Real-time quality metrics", values: ["Limited", "Yes", "Yes"], highlight: 2 },
  { criteria: "Open source", values: ["No", "Yes", "Yes"], highlight: 2 },
];

const archNodes: DiagramNodeData[] = [
  { id: "client", label: "Client", sublabel: "Browser / WebRTC", x: 12, y: 30, layer: "client" },
  { id: "worker", label: "Worker", sublabel: "Media SFU", x: 45, y: 30, layer: "worker" },
  { id: "coturn", label: "coturn", sublabel: "TURN / STUN", x: 45, y: 78, layer: "network" },
  { id: "eval", label: "Eval Harness", sublabel: "Scenario bots", x: 85, y: 30, layer: "eval" },
];

const archBeats: DiagramBeat[] = [
  { type: "node", id: "client" },
  { type: "node", id: "worker" },
  { type: "edge", from: "client", to: "worker", label: "offer / answer" },
  { type: "node", id: "coturn" },
  { type: "edge", from: "worker", to: "coturn", label: "relayed media" },
  { type: "node", id: "eval" },
  { type: "edge", from: "eval", to: "client", label: "synthetic load" },
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
    id: "webrtc-framework",
    stepsCount: webrtcBeats.length,
    render: ({ step }) => (
      <SlideLayout
        eyebrow="Introduction"
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
    id: "agenda",
    stepsCount: 4,
    render: ({ step }) => (
      <SlideLayout eyebrow="Agenda" title="What We'll Cover">
        <RevealList
          className="bullet-list"
          step={step}
          items={[
            "Why build a presentation as a web app",
            "How click / keyboard navigation drives state",
            "Animating slide transitions with Framer Motion",
            "Progressive reveal of content within a slide",
          ]}
        />
      </SlideLayout>
    ),
  },
  {
    id: "stats",
    stepsCount: 3,
    render: ({ step }) => (
      <SlideLayout eyebrow="Why It Works" title="Built on Familiar Tools">
        <div className="stat-grid">
          {[
            { value: "React", label: "Component-driven slide content" },
            { value: "Vite", label: "Instant dev server & fast builds" },
            { value: "Framer Motion", label: "Physics-based, interruptible animation" },
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
    id: "divider-architecture",
    stepsCount: 0,
    render: () => <SectionDivider index="01" title="Architecture" subtitle="How the system is put together" />,
  },
  {
    id: "architecture",
    stepsCount: archBeats.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="System Architecture" title="Client, Worker, and TURN Relay" wide>
        <FlowDiagram nodes={archNodes} beats={archBeats} step={step} />
      </SlideLayout>
    ),
  },
  {
    id: "divider-evaluation",
    stepsCount: 0,
    render: () => <SectionDivider index="02" title="Evaluation" subtitle="How the system holds up under load" />,
  },
  {
    id: "evaluation",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Evaluation" title="Quality Score vs. Concurrent Viewers" wide>
        <LineChart
          xLabels={["500", "1k", "2k", "4k", "8k", "16k"]}
          unit=""
          series={[
            { name: "Direct P2P", values: [98, 95, 84, 61, 30, 12], colorVar: "--series-2" },
            { name: "Relayed via coturn", values: [99, 98, 96, 93, 88, 79], colorVar: "--series-1" },
          ]}
        />
      </SlideLayout>
    ),
  },
  {
    id: "divider-related-work",
    stepsCount: 0,
    render: () => <SectionDivider index="03" title="Related Work" subtitle="How this compares to existing tools" />,
  },
  {
    id: "comparison",
    stepsCount: comparisonRows.length,
    render: ({ step }) => (
      <SlideLayout eyebrow="Related Work" title="Where This Work Fits" wide>
        <ComparisonTable columns={comparisonColumns} rows={comparisonRows} step={step} />
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
