export interface DiagramNodeData {
  id: string;
  label: string;
  sublabel?: string;
  /** percent position (0-100) within the diagram canvas */
  x: number;
  y: number;
  /** groups nodes into a color-coded layer; omit for a neutral node */
  layer?: string;
}

export type DiagramBeat =
  | { type: "node"; id: string }
  | { type: "edge"; from: string; to: string; label?: string };
