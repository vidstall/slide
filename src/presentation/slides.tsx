import { SlideLayout } from "./Slide";
import { RevealList } from "./RevealList";
import type { SlideDef } from "./types";

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
    id: "closing",
    stepsCount: 0,
    render: () => (
      <SlideLayout eyebrow="Thanks" title="Questions?">
        <p className="slide-subtitle">Press ← to go back and replay the deck.</p>
      </SlideLayout>
    ),
  },
];
