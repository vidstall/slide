import type { ReactNode } from "react";

export interface SlideProps {
  /** current reveal step for this slide (0 = nothing revealed yet) */
  step: number;
  /** total number of reveal steps this slide declares */
  stepsCount: number;
}

export interface SlideDef {
  id: string;
  stepsCount: number;
  render: (props: SlideProps) => ReactNode;
}
