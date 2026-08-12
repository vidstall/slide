import { ReactFlow, MarkerType, type Node, type Edge, type Viewport } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { DeviceNode, type DeviceNodeData } from "./diagram/nodes";
import { RevealEdge, type RevealEdgeData } from "./diagram/edges";

const nodeTypes = { device: DeviceNode };
const edgeTypes = { reveal: RevealEdge };

const SCALE = 10;

// Must match `.rf-device`'s fixed width/height in index.css exactly — see
// the equivalent constant in diagram/FlowDiagram.tsx for why.
const NODE_WIDTH = 220;
const NODE_HEIGHT = 236;

interface MeshUser {
  id: string;
  label: string;
  device: "computer" | "phone";
  x: number;
  y: number;
  colorVar: string;
}

// Diamond layout: top, right, bottom, left. Device type alternates by
// position (top/bottom = computer, left/right = phone).
const users: MeshUser[] = [
  { id: "top", label: "User A", device: "computer", x: 50, y: 12, colorVar: "--series-1" },
  { id: "right", label: "User B", device: "phone", x: 88, y: 50, colorVar: "--series-2" },
  { id: "bottom", label: "User C", device: "computer", x: 50, y: 88, colorVar: "--series-3" },
  { id: "left", label: "User D", device: "phone", x: 12, y: 50, colorVar: "--series-4" },
];

// The full mesh: all 6 pairs among the 4 users.
const pairs: [string, string][] = [
  ["top", "right"],
  ["top", "bottom"],
  ["top", "left"],
  ["right", "bottom"],
  ["right", "left"],
  ["bottom", "left"],
];

// `.device-mesh-canvas` in index.css is a FIXED pixel square (not vh/grid
// relative), specifically so the viewport below can be a hardcoded constant
// instead of relying on React Flow's `fitView` — which races container
// measurement (grid layout, vh units, ResizeObserver timing) and kept
// producing a stale fit that clipped the diamond's top/bottom nodes. With a
// fixed-size container and a layout we fully control, the correct zoom/pan
// is knowable in advance, so we just compute and hardcode it.
const CANVAS_SIZE = 640;
const VIEWPORT_PADDING = 0.1;

const contentMinX = 12 * SCALE - NODE_WIDTH / 2;
const contentMaxX = 88 * SCALE + NODE_WIDTH / 2;
const contentMinY = 12 * SCALE - NODE_HEIGHT / 2;
const contentMaxY = 88 * SCALE + NODE_HEIGHT / 2;
const contentWidth = contentMaxX - contentMinX;
const contentHeight = contentMaxY - contentMinY;
const contentCenterX = (contentMinX + contentMaxX) / 2;
const contentCenterY = (contentMinY + contentMaxY) / 2;

const zoom = Math.min(CANVAS_SIZE / contentWidth, CANVAS_SIZE / contentHeight) * (1 - VIEWPORT_PADDING);
const viewport: Viewport = {
  zoom,
  x: CANVAS_SIZE / 2 - zoom * contentCenterX,
  y: CANVAS_SIZE / 2 - zoom * contentCenterY,
};

/** The naive full-mesh view of an N-person call: every device directly, bidirectionally connected to every other. Everything renders at once — no progressive reveal. */
export function DeviceMesh() {
  const posById = new Map(users.map((u) => [u.id, { x: u.x * SCALE, y: u.y * SCALE }]));

  const nodes: Node[] = users.map((u) => {
    const center = posById.get(u.id)!;
    return {
      id: u.id,
      type: "device",
      position: { x: center.x - NODE_WIDTH / 2, y: center.y - NODE_HEIGHT / 2 },
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      data: {
        label: u.label,
        device: u.device,
        color: `var(${u.colorVar})`,
        revealed: true,
      } satisfies DeviceNodeData,
      draggable: false,
      selectable: false,
    };
  });

  const edges: Edge[] = pairs.map(([from, to]) => ({
    id: `${from}-${to}`,
    source: from,
    target: to,
    type: "reveal",
    markerStart: { type: MarkerType.ArrowClosed, color: "var(--chart-axis)" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "var(--chart-axis)" },
    style: { stroke: "var(--chart-axis)", strokeWidth: 4.5 },
    selectable: false,
    data: {
      revealed: true,
      sourcePoint: posById.get(from)!,
      targetPoint: posById.get(to)!,
    } satisfies RevealEdgeData,
  }));

  return (
    <div className="flow-canvas device-mesh-canvas">
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
