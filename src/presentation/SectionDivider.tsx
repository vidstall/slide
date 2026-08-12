interface SectionDividerProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionDivider({ index, title, subtitle }: SectionDividerProps) {
  return (
    <div className="section-divider">
      <div className="section-divider-index">{index}</div>
      <h1 className="section-divider-title">{title}</h1>
      {subtitle && <p className="section-divider-subtitle">{subtitle}</p>}
    </div>
  );
}
