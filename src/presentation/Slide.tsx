import type { ReactNode } from "react";

interface SlideLayoutProps {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}

/** Shared layout chrome for a slide's content (not the transition itself). */
export function SlideLayout({ eyebrow, title, children }: SlideLayoutProps) {
  return (
    <div className="slide-content">
      {eyebrow && <p className="slide-eyebrow">{eyebrow}</p>}
      <h1 className="slide-title">{title}</h1>
      {children}
    </div>
  );
}
