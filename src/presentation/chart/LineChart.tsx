import { motion } from "framer-motion";
import { niceMax, tickValues } from "./scale";

export interface LineChartSeries {
  name: string;
  values: number[];
  /** one of the fixed categorical token names, e.g. "--series-1" */
  colorVar: string;
}

interface LineChartProps {
  xLabels: string[];
  series: LineChartSeries[];
  unit?: string;
  height?: number;
}

const W = 640;
const MARGIN = { top: 24, right: 16, bottom: 36, left: 48 };

export function LineChart({ xLabels, series, unit = "", height = 320 }: LineChartProps) {
  const plotW = W - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;
  const max = niceMax(Math.max(...series.flatMap((s) => s.values), 1));
  const ticks = tickValues(max);

  const xFor = (i: number) => MARGIN.left + (i / (xLabels.length - 1)) * plotW;
  const yFor = (v: number) => MARGIN.top + plotH - (v / max) * plotH;

  return (
    <div className="chart">
      {series.length > 1 && (
        <div className="chart-legend">
          {series.map((s) => (
            <div key={s.name} className="chart-legend-item">
              <span className="chart-legend-swatch" style={{ background: `var(${s.colorVar})` }} />
              {s.name}
            </div>
          ))}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${height}`} width="100%" role="img" aria-label="Line chart">
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
        {xLabels.map((label, i) => (
          <text key={label} x={xFor(i)} y={MARGIN.top + plotH + 20} textAnchor="middle" className="chart-tick">
            {label}
          </text>
        ))}

        {series.map((s) => {
          const points = s.values.map((v, i) => `${xFor(i)},${yFor(v)}`).join(" ");
          const length = s.values.length * 200;
          return (
            <g key={s.name}>
              <motion.polyline
                points={points}
                fill="none"
                stroke={`var(${s.colorVar})`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: length, strokeDashoffset: length }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {s.values.map((v, i) => (
                <circle key={i} cx={xFor(i)} cy={yFor(v)} r={4} fill={`var(${s.colorVar})`} />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
