import type { MouseEvent } from "react";

interface FullscreenToggleProps {
  fullscreen: boolean;
  onToggle: () => void;
}

export function FullscreenToggle({ fullscreen, onToggle }: FullscreenToggleProps) {
  function handleClick(e: MouseEvent) {
    e.stopPropagation();
    onToggle();
  }

  return (
    <button
      type="button"
      className="icon-toggle"
      onClick={handleClick}
      aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      title={fullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
    >
      {fullscreen ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 4v3a2 2 0 0 1-2 2H4M20 9h-3a2 2 0 0 1-2-2V4M15 20v-3a2 2 0 0 1 2-2h3M4 15h3a2 2 0 0 1 2 2v3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
