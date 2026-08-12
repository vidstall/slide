import { motion } from "framer-motion";

interface FlowDotProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/** A pulse that travels from (x1,y1) to (x2,y2), mounted only while its edge is being revealed. */
export function FlowDot({ x1, y1, x2, y2 }: FlowDotProps) {
  return (
    <motion.div
      className="diagram-flow-dot"
      style={{ left: `${x1}%`, top: `${y1}%` }}
      initial={{ left: `${x1}%`, top: `${y1}%`, opacity: 0 }}
      animate={{ left: `${x2}%`, top: `${y2}%`, opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.7, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
    />
  );
}
