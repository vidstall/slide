import { motion } from "framer-motion";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface LabeledNodeData extends Record<string, unknown> {
  label: string;
  sublabel?: string;
  color?: string;
  revealed: boolean;
}

/**
 * Node size is fixed (see `NODE_WIDTH`/`NODE_HEIGHT` etc. in `FlowDiagram.tsx`
 * / `DeviceMesh.tsx`) and matches the CSS below exactly, with `position` set
 * to that box's top-left corner by the caller. This keeps React Flow's own
 * `fitView`/bounds math exactly in sync with what's actually rendered — an
 * earlier version tried to visually re-center nodes with a CSS transform
 * instead, which desynced from React Flow's layout model and caused nodes to
 * render partly outside the fitted viewport (looked like cropping).
 *
 * The two Handles are invisible/non-interactive (dragging/connecting is
 * disabled at the <ReactFlow> level) — they exist only so React Flow doesn't
 * warn about edges with no handle to attach to. Edge geometry itself is
 * computed independently from authored coordinates (see `edges.tsx`), not
 * from these handles' measured position.
 */
function NodeHandles() {
  return (
    <>
      <Handle type="source" position={Position.Top} className="rf-handle" />
      <Handle type="target" position={Position.Top} className="rf-handle" />
    </>
  );
}

/** A card node — label + optional sublabel, colored top border. Used by architecture/framework diagrams. */
export function LabeledNode({ data }: NodeProps & { data: LabeledNodeData }) {
  return (
    <>
      <NodeHandles />
      <motion.div
        className="rf-node"
        style={{ borderTopColor: data.color ?? "var(--border)" }}
        initial={false}
        animate={{ opacity: data.revealed ? 1 : 0, scale: data.revealed ? 1 : 0.9 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="rf-node-label">{data.label}</div>
        {data.sublabel && <div className="rf-node-sublabel">{data.sublabel}</div>}
      </motion.div>
    </>
  );
}

export interface DeviceNodeData extends Record<string, unknown> {
  label: string;
  color: string;
  device: "computer" | "phone";
  revealed: boolean;
}

function ComputerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="2" width="10" height="20" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  );
}

/** A circular device badge — used by the low-tech call-mesh diagram. */
export function DeviceNode({ data }: NodeProps & { data: DeviceNodeData }) {
  return (
    <>
      <NodeHandles />
      <motion.div
        className="rf-device"
        initial={false}
        animate={{ opacity: data.revealed ? 1 : 0, scale: data.revealed ? 1 : 0.85 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="rf-device-badge" style={{ background: data.color }}>
          {data.device === "computer" ? <ComputerIcon /> : <PhoneIcon />}
        </div>
        <div className="rf-device-label">{data.label}</div>
      </motion.div>
    </>
  );
}
