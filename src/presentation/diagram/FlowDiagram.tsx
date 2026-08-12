import { ReactFlow, MarkerType, type Node, type Edge, type Viewport } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { LabeledNode, type LabeledNodeData } from "./nodes";
import { RevealEdge, type RevealEdgeData } from "./edges";
import { buildLayerColorMap } from "./layerColors";
import type { DiagramBeat, DiagramNodeData } from "./types";

const nodeTypes = { labeled: LabeledNode };
const edgeTypes = { reveal: RevealEdge };

// Hand-authored positions are percent (0-100); React Flow needs a pixel-ish
// coordinate space.
const SCALE = 10;

// Must match `.rf-node`'s fixed width/height in index.css exactly — React
// Flow positions nodes by top-left corner, so node.position is computed by
// offsetting the authored center point by half this box (see `posById`
// usage below).
const NODE_WIDTH = 320;
const NODE_HEIGHT = 130;

// The canvas is a FIXED pixel box (see `.flow-canvas` in index.css), and the
// viewport (zoom/pan) below is a hardcoded constant computed once from the
// authored node layout — same technique as `DeviceMesh.tsx`. This replaced
// React Flow's `fitView`, which races container measurement (grid layout,
// vh units, ResizeObserver timing) and produced stale fits that clipped
// outer nodes. With a fixed-size container and a fully-known layout, the
// correct zoom/pan can just be computed directly — no runtime measurement.
const VIEWPORT_PADDING = 0.12;

interface FlowDiagramProps {
  nodes: DiagramNodeData[];
  beats: DiagramBeat[];
  step: number;
  /** Fixed canvas size in px — defaults to a wide, full-slide diagram. Pass a
   *  smaller/squarer size when the diagram sits in a narrower column. */
  canvasWidth?: number;
  canvasHeight?: number;
}

/** Renders {nodes, beats} as a React Flow diagram, revealing nodes/edges as `step` advances. */
export function FlowDiagram({
  nodes: nodeData,
  beats,
  step,
  canvasWidth = 1100,
  canvasHeight = 460,
}: FlowDiagramProps) {
  const layerColors = buildLayerColorMap(nodeData);

  const nodeRevealIndex = new Map<string, number>();
  beats.forEach((beat, i) => {
    if (beat.type === "node" && !nodeRevealIndex.has(beat.id)) {
      nodeRevealIndex.set(beat.id, i);
    }
  });

  const posById = new Map(nodeData.map((n) => [n.id, { x: n.x * SCALE, y: n.y * SCALE }]));

  const nodes: Node[] = nodeData.map((n) => {
    const center = posById.get(n.id)!;
    return {
      id: n.id,
      type: "labeled",
      position: { x: center.x - NODE_WIDTH / 2, y: center.y - NODE_HEIGHT / 2 },
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      data: {
        label: n.label,
        sublabel: n.sublabel,
        color: n.layer ? layerColors.get(n.layer) : undefined,
        revealed: (nodeRevealIndex.get(n.id) ?? -1) < step,
      } satisfies LabeledNodeData,
      draggable: false,
      selectable: false,
    };
  });

  const edges: Edge[] = beats
    .map((beat, i) => ({ beat, i }))
    .filter((b): b is { beat: Extract<DiagramBeat, { type: "edge" }>; i: number } => b.beat.type === "edge")
    .map(({ beat, i }) => ({
      id: `${beat.from}-${beat.to}`,
      source: beat.from,
      target: beat.to,
      type: "reveal",
      markerEnd: { type: MarkerType.ArrowClosed, color: "var(--chart-axis)" },
      style: { stroke: "var(--chart-axis)", strokeWidth: 2 },
      selectable: false,
      data: {
        revealed: i < step,
        justRevealed: i === step - 1,
        label: beat.label,
        sourcePoint: posById.get(beat.from)!,
        targetPoint: posById.get(beat.to)!,
      } satisfies RevealEdgeData,
    }));

  const xs = nodeData.map((n) => n.x * SCALE);
  const ys = nodeData.map((n) => n.y * SCALE);
  const contentMinX = Math.min(...xs) - NODE_WIDTH / 2;
  const contentMaxX = Math.max(...xs) + NODE_WIDTH / 2;
  const contentMinY = Math.min(...ys) - NODE_HEIGHT / 2;
  const contentMaxY = Math.max(...ys) + NODE_HEIGHT / 2;
  const contentWidth = contentMaxX - contentMinX;
  const contentHeight = contentMaxY - contentMinY;
  const contentCenterX = (contentMinX + contentMaxX) / 2;
  const contentCenterY = (contentMinY + contentMaxY) / 2;

  const zoom = Math.min(canvasWidth / contentWidth, canvasHeight / contentHeight) * (1 - VIEWPORT_PADDING);
  const viewport: Viewport = {
    zoom,
    x: canvasWidth / 2 - zoom * contentCenterX,
    y: canvasHeight / 2 - zoom * contentCenterY,
  };

  return (
    <div className="flow-canvas" style={{ width: canvasWidth, height: canvasHeight }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultViewport={viewport}
        minZoom={zoom}
        maxZoom={zoom}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
