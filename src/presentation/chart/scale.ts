/** Rounds a max value up to a "nice" number for axis ticks (1/2/5 × 10^n). */
export function niceMax(value: number): number {
  if (value <= 0) return 1;
  const exponent = Math.floor(Math.log10(value));
  const magnitude = Math.pow(10, exponent);
  const fraction = value / magnitude;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * magnitude;
}

export function tickValues(max: number, count = 4): number[] {
  const step = max / count;
  return Array.from({ length: count + 1 }, (_, i) => Math.round(step * i));
}

/** SVG path for a bar with only its top corners rounded, anchored flat to the baseline. */
export function roundedTopBarPath(x: number, y: number, w: number, h: number, r: number): string {
  const radius = Math.min(r, w / 2, h);
  const yBase = y + h;
  if (radius <= 0) {
    return `M${x},${yBase} L${x},${y} L${x + w},${y} L${x + w},${yBase} Z`;
  }
  return `M${x},${yBase} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + w - radius},${y} Q${x + w},${y} ${x + w},${y + radius} L${x + w},${yBase} Z`;
}
