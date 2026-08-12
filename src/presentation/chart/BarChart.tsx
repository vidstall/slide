import { motion } from "framer-motion";
import { niceMax, tickValues, roundedTopBarPath } from "./scale";

export interface BarChartDatum {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarChartDatum[];
  unit?: string;
  height?: number;
}

const W = 640;
const MARGIN = { top: 24, right: 16, bottom: 36, left: 48 };

export function BarChart({ data, unit = "", height = 320 }: BarChartProps) {
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;
  const max = niceMax(Math.max(...data.map((d) => d.value), 1));
  const ticks = tickValues(max);

  const gap = 16;
  const barW = (plotW - gap * (data.length - 1)) / data.length;

  const yFor = (v: number) => MARGIN.top + plotH - (v / max) * plotH;

  return (
    <div className="chart">
      <svg viewBox={`0 0 ${W} ${height}`} width="100%" role="img" aria-label="Bar chart">
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={MARGIN.left}
              x2={W - MARGIN.right}
              y1={yFor(t)}
              y2={yFor(t)}
              stroke="var(--chart-gridline)"
              strokeWidth={1}
            />
            <text x={MARGIN.left - 10} y={yFor(t)} textAnchor="end" dominantBaseline="middle" className="chart-tick">
              {t}
              {unit}
            </text>
          </g>
        ))}
        <line
          x1={MARGIN.left}
          x2={W - MARGIN.right}
          y1={MARGIN.top + plotH}
          y2={MARGIN.top + plotH}
          stroke="var(--chart-axis)"
          strokeWidth={1}
        />

        {data.map((d, i) => {
          const x = MARGIN.left + i * (barW + gap);
          const barH = (d.value / max) * plotH;
          const y = MARGIN.top + plotH - barH;
          return (
            <g key={d.label}>
              <motion.path
                d={roundedTopBarPath(x, y, barW, barH, 4)}
                fill="var(--series-1)"
                style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <text x={x + barW / 2} y={y - 8} textAnchor="middle" className="chart-value-label">
                {d.value}
                {unit}
              </text>
              <text x={x + barW / 2} y={MARGIN.top + plotH + 20} textAnchor="middle" className="chart-tick">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
