interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="landing">
      <p className="slide-eyebrow">A Demo Deck</p>
      <h1 className="slide-title">Presentations, Rebuilt in React</h1>
      <p className="slide-subtitle">
        Click Start to enter fullscreen presentation mode.
      </p>
      <button type="button" className="start-button" onClick={onStart}>
        Start
      </button>
    </div>
  );
}
