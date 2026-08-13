import { motion } from "framer-motion";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { ReactElement } from "react";

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

export type RoleIcon = "browser" | "server" | "shield" | "cog" | "chain";

function BrowserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 9h18" strokeLinecap="round" />
      <path d="M6.5 6.5h.01M9 6.5h.01" strokeLinecap="round" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3.5" width="18" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="13.5" width="18" height="7" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 7h.01M6.5 17h.01" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.5l7.5 3v6c0 5-3.2 8.3-7.5 10-4.3-1.7-7.5-5-7.5-10v-6l7.5-3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.7 12.2l2.2 2.2 4.4-4.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CogIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2.5 12h3M18.5 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChainIcon() {
  return (
    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3L12 2.5z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ROLE_ICONS: Record<RoleIcon, () => ReactElement> = {
  browser: BrowserIcon,
  server: ServerIcon,
  shield: ShieldIcon,
  cog: CogIcon,
  chain: ChainIcon,
};

export interface RoleNodeData extends Record<string, unknown> {
  label: string;
  sublabel?: string;
  color: string;
  icon: RoleIcon;
  /** The larger, central node in a hub-and-spoke mesh (e.g. the chain in the architecture diagram). */
  hub?: boolean;
  revealed: boolean;
}

/** A circular role badge with a sublabel — the hub-and-spoke sibling of DeviceNode, used by ArchitectureMesh. */
export function RoleNode({ data }: NodeProps & { data: RoleNodeData }) {
  const Icon = ROLE_ICONS[data.icon];
  return (
    <>
      <NodeHandles />
      <motion.div
        className={data.hub ? "rf-device rf-device-hub" : "rf-device"}
        initial={false}
        animate={{ opacity: data.revealed ? 1 : 0, scale: data.revealed ? 1 : 0.85 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className={data.hub ? "rf-device-badge rf-device-badge-hub" : "rf-device-badge"} style={{ background: data.color }}>
          <Icon />
        </div>
        <div className="rf-device-label">{data.label}</div>
        {data.sublabel && <div className="rf-device-sublabel">{data.sublabel}</div>}
      </motion.div>
    </>
  );
}
