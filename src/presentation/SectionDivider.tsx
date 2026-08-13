interface SectionDividerProps {
  index: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  variant?: "section" | "sub";
}

export function SectionDivider({ index, title, subtitle, kicker, variant = "section" }: SectionDividerProps) {
  return (
    <div className={variant === "sub" ? "section-divider section-divider-sub" : "section-divider"}>
      {kicker && <p className="slide-eyebrow">{kicker}</p>}
      <div className="section-divider-index">{index}</div>
      <h1 className="section-divider-title">{title}</h1>
      {subtitle && <p className="section-divider-subtitle">{subtitle}</p>}
    </div>
  );
}
