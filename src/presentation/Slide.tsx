import type { ReactNode } from "react";

interface SlideLayoutProps {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  /** widen the content column, for diagrams/charts/tables that need more horizontal room */
  wide?: boolean;
}

/** Shared layout chrome for a slide's content (not the transition itself). */
export function SlideLayout({ eyebrow, title, children, wide }: SlideLayoutProps) {
  return (
    <div className={wide ? "slide-content slide-content-wide" : "slide-content"}>
      {eyebrow && <p className="slide-eyebrow">{eyebrow}</p>}
      <h1 className="slide-title">{title}</h1>
      {children}
    </div>
  );
}
