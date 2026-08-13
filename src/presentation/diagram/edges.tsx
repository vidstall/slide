import { EdgeLabelRenderer, getStraightPath, getSmoothStepPath, Position, type EdgeProps } from "@xyflow/react";
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
  /** Route as a right-angle (Manhattan) path instead of a straight diagonal
   *  line. Degenerates to a plain straight segment when source/target already
   *  share an axis, so it's safe to set on every edge in a mesh/topology
   *  diagram uniformly — only genuinely diagonal pairs get a bend. */
  orthogonal?: boolean;
  /** Label position along the straight source→target line (0..1, default
   *  midpoint). Ignored for orthogonal edges, whose bend point makes the
   *  path-computed label position the right one. */
  labelT?: number;
  /** Vertical label offset in flow px (positive = down), applied after
   *  labelT. Lifts a label clear of a horizontal edge's node row. */
  labelDy?: number;
}

/** Exit/entry side for a right-angle path, picked from which axis dominates
 *  the source→target offset — e.g. a mostly-horizontal pair exits left/right
 *  rather than top/bottom, so the bend (if any) reads as one clean corner. */
function orthogonalPositions(dx: number, dy: number): { source: Position; target: Position } {
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? { source: Position.Right, target: Position.Left } : { source: Position.Left, target: Position.Right };
  }
  return dy >= 0 ? { source: Position.Bottom, target: Position.Top } : { source: Position.Top, target: Position.Bottom };
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
  const [path, midX, midY] = data.orthogonal
    ? (() => {
        const { source, target } = orthogonalPositions(targetX - sourceX, targetY - sourceY);
        return getSmoothStepPath({
          sourceX,
          sourceY,
          sourcePosition: source,
          targetX,
          targetY,
          targetPosition: target,
          borderRadius: 0,
        });
      })()
    : getStraightPath({ sourceX, sourceY, targetX, targetY });
  const t = data.orthogonal ? undefined : data.labelT;
  const labelX = t === undefined ? midX : sourceX + (targetX - sourceX) * t;
  const labelY = (t === undefined ? midY : sourceY + (targetY - sourceY) * t) + (data.labelDy ?? 0);

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
