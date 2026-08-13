import { ReactFlow, MarkerType, type Node, type Edge, type Viewport } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { RoleNode, type RoleIcon, type RoleNodeData } from "./diagram/nodes";
import { RevealEdge, type RevealEdgeData } from "./diagram/edges";

const nodeTypes = { role: RoleNode };
const edgeTypes = { reveal: RevealEdge };

const SCALE = 10;

// Must match the hub/spoke `.rf-device`/`.rf-device-hub` fixed width/height
// in index.css exactly — see the equivalent constant in DeviceMesh.tsx for why.
const NODE_WIDTH = 220;
const NODE_HEIGHT = 272;
const HUB_WIDTH = 260;
const HUB_HEIGHT = 312;

interface MeshRole {
  id: string;
  label: string;
  sublabel: string;
  icon: RoleIcon;
  x: number;
  y: number;
  colorVar: string;
  hub?: boolean;
}

// Sui Chain sits at the center; Client + the three worker daemons form a
// diamond around it (top/right/bottom/left) — the shared on-chain ledger
// every party independently reads/writes, not a message bus.
const roles: MeshRole[] = [
  { id: "chain", label: "Sui Chain", sublabel: "Registry · RoomAssignment · SessionProof · Settlement (Move)", icon: "chain", x: 50, y: 50, colorVar: "--accent", hub: true },
  { id: "client", label: "Client", sublabel: "Browser · WebRTC peer", icon: "browser", x: 50, y: 10, colorVar: "--series-1" },
  { id: "relay", label: "Relay", sublabel: "mediasoup SFU", icon: "server", x: 90, y: 50, colorVar: "--series-2" },
  { id: "validator", label: "Validator Daemon", sublabel: "Canary probe · STUN/relay-latency probe", icon: "shield", x: 50, y: 90, colorVar: "--series-3" },
  { id: "cpdaemon", label: "cp-daemon", sublabel: "Control-plane: pairing quorum, TURN issuance, failover", icon: "cog", x: 10, y: 50, colorVar: "--series-4" },
];

// Every worker/client independently registers on-chain (spokes); Relay is
// also the one off-chain hub the other two worker roles talk to directly
// (rim edges) — cp-daemon's TURN-credential issuance to Relay is called out
// in its own label instead of a fifth line, since cp-daemon sits opposite
// Relay in the diamond and a direct edge would cut through the chain node.
const edges: { from: string; to: string; label: string }[] = [
  { from: "client", to: "chain", label: "register · create_room" },
  { from: "relay", to: "chain", label: "register · heartbeat" },
  { from: "validator", to: "chain", label: "register · SessionProof" },
  { from: "cpdaemon", to: "chain", label: "pairing quorum" },
  { from: "client", to: "relay", label: "media + signaling" },
  { from: "relay", to: "validator", label: "canary probe" },
];

// Fixed-size canvas + hardcoded viewport for the same reason as DeviceMesh:
// `fitView` races container measurement and clips the diamond's top/bottom
// nodes, so we compute zoom/pan ourselves from the known layout.
const CANVAS_SIZE = 700;
const VIEWPORT_PADDING = 0.08;

const contentMinX = 10 * SCALE - NODE_WIDTH / 2;
const contentMaxX = 90 * SCALE + NODE_WIDTH / 2;
const contentMinY = 10 * SCALE - NODE_HEIGHT / 2;
const contentMaxY = 90 * SCALE + NODE_HEIGHT / 2;
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

/** Sui Chain as the hub, Client + the three worker daemons as a diamond of icon badges around it — the icon-badge sibling of DeviceMesh, for the architecture slide. */
export function ArchitectureMesh() {
  const posById = new Map(roles.map((r) => [r.id, { x: r.x * SCALE, y: r.y * SCALE }]));

  const nodes: Node[] = roles.map((r) => {
    const center = posById.get(r.id)!;
    const w = r.hub ? HUB_WIDTH : NODE_WIDTH;
    const h = r.hub ? HUB_HEIGHT : NODE_HEIGHT;
    return {
      id: r.id,
      type: "role",
      position: { x: center.x - w / 2, y: center.y - h / 2 },
      width: w,
      height: h,
      data: {
        label: r.label,
        sublabel: r.sublabel,
        icon: r.icon,
        color: `var(${r.colorVar})`,
        hub: r.hub,
        revealed: true,
      } satisfies RoleNodeData,
      draggable: false,
      selectable: false,
    };
  });

  const flowEdges: Edge[] = edges.map(({ from, to, label }) => ({
    id: `${from}-${to}`,
    source: from,
    target: to,
    type: "reveal",
    markerEnd: { type: MarkerType.ArrowClosed, color: "var(--chart-axis)" },
    style: { stroke: "var(--chart-axis)", strokeWidth: 3 },
    selectable: false,
    data: {
      revealed: true,
      label,
      sourcePoint: posById.get(from)!,
      targetPoint: posById.get(to)!,
      orthogonal: true,
    } satisfies RevealEdgeData,
  }));

  return (
    <div className="flow-canvas device-mesh-canvas architecture-mesh-canvas">
      <ReactFlow
        nodes={nodes}
        edges={flowEdges}
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
