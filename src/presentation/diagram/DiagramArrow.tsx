import { motion } from "framer-motion";

interface DiagramArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  completed: boolean;
}

export function DiagramArrow({ x1, y1, x2, y2, completed }: DiagramArrowProps) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--chart-axis)"
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
      markerEnd="url(#diagram-arrowhead)"
      initial={false}
      animate={{ opacity: completed ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    />
  );
}
