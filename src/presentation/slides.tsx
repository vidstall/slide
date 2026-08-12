import { SlideLayout } from "./Slide";
import { RevealList } from "./RevealList";
import { Diagram } from "./diagram/Diagram";
import { LineChart } from "./chart/LineChart";
import { ComparisonTable, type ComparisonRow } from "./ComparisonTable";
import { SectionDivider } from "./SectionDivider";
import type { DiagramBeat, DiagramNodeData } from "./diagram/types";
import type { SlideDef } from "./types";

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

export const slides: SlideDef[] = [
  {
    id: "title",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="A Demo Deck" title="Presentations, Rebuilt in React">
        <p className="slide-subtitle">
          Click anywhere, press space, or use the arrow keys to move through the deck.
        </p>
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
        <Diagram nodes={archNodes} beats={archBeats} step={step} />
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
    id: "closing",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Thanks" title="Questions?">
        <p className="slide-subtitle">Press ← to go back and replay the deck.</p>
      </SlideLayout>
    ),
  },
];
