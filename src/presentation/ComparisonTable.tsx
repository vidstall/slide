import { motion } from "framer-motion";

export interface ComparisonRow {
  criteria: string;
  values: string[];
  /** index into `values` to visually call out as this work's advantage */
  highlight?: number;
}

interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
  step: number;
}

export function ComparisonTable({ columns, rows, step }: ComparisonTableProps) {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const revealed = i < step;
          return (
            <motion.tr
              key={row.criteria}
              initial={false}
              animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ visibility: revealed ? "visible" : "hidden" }}
            >
              <td>{row.criteria}</td>
              {row.values.map((value, vi) => (
                <td key={vi} className={vi === row.highlight ? "highlight" : undefined}>
                  {value}
                </td>
              ))}
            </motion.tr>
          );
        })}
      </tbody>
    </table>
  );
}
