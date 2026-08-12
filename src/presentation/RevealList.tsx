import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealListProps {
  items: ReactNode[];
  /** how many items are currently revealed */
  step: number;
  className?: string;
}

/** Renders items that fade/slide in one at a time as `step` increases. */
export function RevealList({ items, step, className }: RevealListProps) {
  return (
    <ul className={className}>
      {items.map((item, i) => {
        const revealed = i < step;
        return (
          <motion.li
            key={i}
            initial={false}
            animate={{
              opacity: revealed ? 1 : 0,
              y: revealed ? 0 : 16,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ visibility: revealed ? "visible" : "hidden" }}
          >
            {item}
          </motion.li>
        );
      })}
    </ul>
  );
}
