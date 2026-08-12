import { AnimatePresence } from "framer-motion";
import { DiagramNode } from "./DiagramNode";
import { DiagramArrow } from "./DiagramArrow";
import { FlowDot } from "./FlowDot";
import { buildLayerColorMap } from "./layerColors";
import type { DiagramBeat, DiagramNodeData } from "./types";

interface DiagramProps {
  nodes: DiagramNodeData[];
  beats: DiagramBeat[];
  step: number;
}

export function Diagram({ nodes, beats, step }: DiagramProps) {
  const nodeById = new Map(nodes.map((n) => [n.id, n]));
  const layerColors = buildLayerColorMap(nodes);

  const nodeRevealIndex = new Map<string, number>();
  beats.forEach((beat, i) => {
    if (beat.type === "node" && !nodeRevealIndex.has(beat.id)) {
      nodeRevealIndex.set(beat.id, i);
    }
  });

  const edgeBeats = beats
    .map((beat, i) => ({ beat, i }))
    .filter((b): b is { beat: Extract<DiagramBeat, { type: "edge" }>; i: number } => b.beat.type === "edge");

  return (
    <div className="diagram-canvas">
      <svg className="diagram-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <marker
            id="diagram-arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--chart-axis)" />
          </marker>
        </defs>
        {edgeBeats.map(({ beat, i }) => {
          const from = nodeById.get(beat.from);
          const to = nodeById.get(beat.to);
          if (!from || !to) return null;
          return (
            <DiagramArrow
              key={`${beat.from}-${beat.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              completed={i < step}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <DiagramNode
          key={node.id}
          node={node}
          color={node.layer ? layerColors.get(node.layer) : undefined}
          visible={(nodeRevealIndex.get(node.id) ?? -1) < step}
        />
      ))}

      <AnimatePresence>
        {edgeBeats
          .filter(({ i }) => i === step - 1)
          .map(({ beat }) => {
            const from = nodeById.get(beat.from);
            const to = nodeById.get(beat.to);
            if (!from || !to) return null;
            return (
              <FlowDot
                key={`${beat.from}-${beat.to}-flow`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
      </AnimatePresence>

      {edgeBeats.map(({ beat, i }) => {
        if (i >= step) return null;
        const from = nodeById.get(beat.from);
        const to = nodeById.get(beat.to);
        if (!from || !to || !beat.label) return null;
        return (
          <div
            key={`${beat.from}-${beat.to}-label`}
            className="diagram-edge-label"
            style={{ left: `${(from.x + to.x) / 2}%`, top: `${(from.y + to.y) / 2}%` }}
          >
            {beat.label}
          </div>
        );
      })}
    </div>
  );
}
