import { motion } from "framer-motion";
import type { DiagramNodeData } from "./types";

interface DiagramNodeProps {
  node: DiagramNodeData;
  color?: string;
  visible: boolean;
}

export function DiagramNode({ node, color, visible }: DiagramNodeProps) {
  return (
    <motion.div
      className="diagram-node"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        borderTopColor: color ?? "var(--border)",
      }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.9,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="diagram-node-label">{node.label}</div>
      {node.sublabel && <div className="diagram-node-sublabel">{node.sublabel}</div>}
    </motion.div>
  );
}
