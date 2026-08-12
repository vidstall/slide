import { EdgeLabelRenderer, getStraightPath, type EdgeProps } from "@xyflow/react";
import { motion } from "framer-motion";

export interface RevealEdgeData extends Record<string, unknown> {
  revealed: boolean;
  justRevealed?: boolean;
  label?: string;
  /** Fixed endpoints in flow-coordinate space, authored by the caller — not
   *  derived from React Flow's handle measurement, since our custom nodes
   *  have no visible handles and layout is fixed/hand-placed anyway. */
  sourcePoint: { x: number; y: number };
  targetPoint: { x: number; y: number };
}

/**
 * A straight, animated-dashed edge that fades in once revealed, with an
 * optional one-shot "flow dot" pulse the moment it's revealed and an
 * optional midpoint label. Arrowheads come from the edge definition's
 * markerStart/markerEnd (resolved by React Flow into ready-to-use marker
 * props) — one component serves both the single-arrow architecture diagrams
 * and the mesh slide's double-arrowhead bidirectional edges.
 */
export function RevealEdge({ markerStart, markerEnd, style, data }: EdgeProps & { data: RevealEdgeData }) {
  const { x: sourceX, y: sourceY } = data.sourcePoint;
  const { x: targetX, y: targetY } = data.targetPoint;
  const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });

  return (
    <>
      <motion.path
        d={path}
        className="rf-edge-path"
        fill="none"
        markerStart={markerStart}
        markerEnd={markerEnd}
        initial={false}
        style={style}
        animate={{ opacity: data.revealed ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
      {data.justRevealed && (
        <motion.circle
          r={5}
          className="rf-edge-flow-dot"
          initial={{ cx: sourceX, cy: sourceY, opacity: 0 }}
          animate={{ cx: targetX, cy: targetY, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.7, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
        />
      )}
      {data.label && data.revealed && (
        <EdgeLabelRenderer>
          <div
            className="rf-edge-label"
            style={{ transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)` }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
