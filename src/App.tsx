import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { slides } from "./presentation/slides";
import { Landing } from "./presentation/Landing";
import { useTheme } from "./presentation/theme/useTheme";
import { ThemeToggle } from "./presentation/theme/ThemeToggle";
import { useFullscreen } from "./presentation/theme/useFullscreen";
import { FullscreenToggle } from "./presentation/theme/FullscreenToggle";

const TRANSITION_MS = 450;

const slideVariants: Variants = {
  enter: (dir: 1 | -1) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

function App() {
  const { theme, toggleTheme } = useTheme();
  const { fullscreen, toggleFullscreen } = useFullscreen();
  const [started, setStarted] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const animatingRef = useRef(false);

  const currentSlide = slides[slideIndex];
  const isFirst = slideIndex === 0 && stepIndex === 0;
  const isLast =
    slideIndex === slides.length - 1 && stepIndex === currentSlide.stepsCount;

  const lockAnimation = useCallback(() => {
    animatingRef.current = true;
    window.setTimeout(() => {
      animatingRef.current = false;
    }, TRANSITION_MS);
  }, []);

  const advance = useCallback(() => {
    if (animatingRef.current) return;
    if (stepIndex < currentSlide.stepsCount) {
      setStepIndex(stepIndex + 1);
      return;
    }
    if (slideIndex < slides.length - 1) {
      lockAnimation();
      setDirection(1);
      setSlideIndex(slideIndex + 1);
      setStepIndex(0);
    }
  }, [stepIndex, currentSlide.stepsCount, slideIndex, lockAnimation]);

  const goToSlide = useCallback(
    (index: number) => {
      if (animatingRef.current || index === slideIndex) return;
      lockAnimation();
      setDirection(index > slideIndex ? 1 : -1);
      setSlideIndex(index);
      setStepIndex(0);
    },
    [slideIndex, lockAnimation]
  );

  const retreat = useCallback(() => {
    if (animatingRef.current) return;
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
      return;
    }
    if (slideIndex > 0) {
      lockAnimation();
      setDirection(-1);
      const prevSlide = slides[slideIndex - 1];
      setSlideIndex(slideIndex - 1);
      setStepIndex(prevSlide.stepsCount);
    }
  }, [stepIndex, slideIndex, lockAnimation]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "d" || e.key === "D") {
        toggleTheme();
        return;
      }
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
        return;
      }
      if (!started) return;
      if (["ArrowRight", " ", "Enter", "PageDown"].includes(e.key)) {
        e.preventDefault();
        advance();
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        retreat();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [started, advance, retreat, toggleTheme, toggleFullscreen]);

  const handleStart = useCallback(() => {
    document.documentElement.requestFullscreen?.().catch(() => {
      // fullscreen may be denied/unsupported; still enter the deck
    });
    setStarted(true);
  }, []);

  if (!started) {
    return (
      <>
        <Landing onStart={handleStart} />
        <div className="toolbar">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <FullscreenToggle fullscreen={fullscreen} onToggle={toggleFullscreen} />
        </div>
      </>
    );
  }

  return (
    <div
      className="stage"
      onClick={advance}
      onContextMenu={(e) => {
        e.preventDefault();
        retreat();
      }}
    >
      <div className="toolbar">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <FullscreenToggle fullscreen={fullscreen} onToggle={toggleFullscreen} />
      </div>
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          className="slide"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: TRANSITION_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentSlide.render({ step: stepIndex, stepsCount: currentSlide.stepsCount })}
        </motion.div>
      </AnimatePresence>

      <div className="progress-dots">
        {slides.map((s, i) => (
          <span
            key={s.id}
            className={i === slideIndex ? "dot dot-active" : "dot"}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(i);
            }}
          >
            {i === slideIndex && <span className="dot-number">{i + 1}</span>}
          </span>
        ))}
      </div>

      <div className="nav-hint">
        {isFirst && "Click or press → to begin"}
        {isLast && "End of deck"}
      </div>
    </div>
  );
}

export default App;
