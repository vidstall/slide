import { useCallback, useEffect, useState } from "react";

function isFullscreen(): boolean {
  return document.fullscreenElement != null;
}

export function useFullscreen() {
  const [fullscreen, setFullscreen] = useState(isFullscreen);

  useEffect(() => {
    function onChange() {
      setFullscreen(isFullscreen());
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen()) {
      document.exitFullscreen?.().catch(() => {
        // fullscreen exit may be denied/unsupported
      });
    } else {
      document.documentElement.requestFullscreen?.().catch(() => {
        // fullscreen request may be denied/unsupported
      });
    }
  }, []);

  return { fullscreen, toggleFullscreen };
}
