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
  | {
      type: "edge";
      from: string;
      to: string;
      label?: string;
      /** where along the edge the label sits (0 = source, 1 = target);
       *  defaults to the midpoint. Use to stagger labels when several
       *  parallel diagonal edges would otherwise stack their labels on
       *  the same horizontal band. */
      labelT?: number;
      /** vertical offset in flow px (positive = down). Use to lift a label
       *  off a horizontal edge whose label is wider than the node gap —
       *  labelT can't help there, since sliding along a horizontal edge
       *  keeps the label at node height, hidden underneath the nodes. */
      labelDy?: number;
    };
