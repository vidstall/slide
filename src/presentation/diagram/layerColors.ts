import type { DiagramNodeData } from "./types";

const SERIES_VARS = ["--series-1", "--series-2", "--series-3", "--series-4"];

/** Assigns each distinct layer a fixed categorical color, in first-seen order. */
export function buildLayerColorMap(nodes: DiagramNodeData[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const node of nodes) {
    if (!node.layer || map.has(node.layer)) continue;
    const varName = SERIES_VARS[map.size % SERIES_VARS.length];
    map.set(node.layer, `var(${varName})`);
  }
  return map;
}
