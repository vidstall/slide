import { GeometryBackground } from "./GeometryBackground";

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="landing">
      <GeometryBackground />
      <div className="landing-content">
        <div className="cover-institution">
          <p>VNU-HCMUS — Ho Chi Minh University of Science</p>
          <p>Faculty of Information Technology</p>
        </div>
        <p className="slide-eyebrow">Bachelor Thesis · Advanced Program in Computer Science</p>
        <h1 className="slide-title">Innovating Video Conferencing Systems Through Blockchain</h1>
        <p className="cover-authors">Le Quoc Van &nbsp;·&nbsp; Duong Minh Quang</p>
        <button type="button" className="start-button" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
}
