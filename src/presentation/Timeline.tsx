import { motion } from "framer-motion";

export interface TimelinePoint {
  year: string;
  caption: string;
  image: string;
  alt: string;
}

interface TimelineProps {
  points: TimelinePoint[];
  step: number;
}

// Keep endpoint points inset from the container edges so their cards
// (wider than the gap between the last dot and the edge) never overflow
// past the slide's visible area.
const EDGE_INSET = 9;
const TRACK_SPAN = 100 - EDGE_INSET * 2;

/** Horizontal timeline: a line draws in as points alternate above/below it. */
export function Timeline({ points, step }: TimelineProps) {
  const lastRevealed = Math.min(step, points.length) - 1;
  const progressFraction = lastRevealed <= 0 ? 0 : lastRevealed / (points.length - 1);

  return (
    <div className="timeline">
      <div className="timeline-track" style={{ left: `${EDGE_INSET}%`, right: `${EDGE_INSET}%` }} />
      <motion.div
        className="timeline-progress"
        initial={false}
        animate={{ width: `${progressFraction * TRACK_SPAN}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ left: `${EDGE_INSET}%` }}
      />

      {points.map((point, i) => {
        const revealed = i < step;
        const above = i % 2 === 0;
        const x = EDGE_INSET + (i / (points.length - 1)) * TRACK_SPAN;

        const dot = (
          <span className={revealed ? "timeline-dot timeline-dot-active" : "timeline-dot"} key="dot" />
        );
        const stem = <span className="timeline-stem" key="stem" />;
        const card = (
          <motion.div
            className="timeline-card"
            key="card"
            initial={false}
            animate={{
              opacity: revealed ? 1 : 0,
              y: revealed ? 0 : above ? 12 : -12,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ visibility: revealed ? "visible" : "hidden" }}
          >
            <img className="timeline-image" src={point.image} alt={point.alt} />
            <div className="timeline-year">{point.year}</div>
            <div className="timeline-caption">{point.caption}</div>
          </motion.div>
        );

        return (
          <div
            key={point.year}
            className={above ? "timeline-point timeline-point-above" : "timeline-point timeline-point-below"}
            style={{ left: `${x}%` }}
          >
            {above ? [card, stem, dot] : [dot, stem, card]}
          </div>
        );
      })}
    </div>
  );
}
