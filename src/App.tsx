import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { slides, sections } from "./presentation/slides";
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
  const [hoverSide, setHoverSide] = useState<"left" | "right">("right");
  const animatingRef = useRef(false);

  const currentSlide = slides[slideIndex];
  const currentSection = sections.reduce<(typeof sections)[number] | null>((acc, s) => {
    const idx = slides.findIndex((sl) => sl.id === s.startId);
    return idx !== -1 && slideIndex >= idx ? s : acc;
  }, null);
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
      className={`stage ${hoverSide === "left" ? "stage-nav-back" : "stage-nav-fwd"}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const side = e.clientX - rect.left < rect.width / 2 ? "left" : "right";
        setHoverSide((prev) => (prev === side ? prev : side));
      }}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (e.clientX - rect.left < rect.width / 2) retreat();
        else advance();
      }}
      onContextMenu={(e) => e.preventDefault()}
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

      <div className="deck-progress" onClick={(e) => e.stopPropagation()}>
        <div className="deck-sections">
          {sections.map((s) => {
            const active = currentSection?.num === s.num;
            return (
              <span
                key={s.num}
                className={active ? "deck-section deck-section-active" : "deck-section"}
                title={`Part ${s.num} — ${s.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(slides.findIndex((sl) => sl.id === s.startId));
                }}
              >
                <span className="deck-section-num">{s.num}</span>
                {active && <span className="deck-section-label">{s.label}</span>}
              </span>
            );
          })}
        </div>
        <span className="deck-count">
          {slideIndex + 1} / {slides.length}
        </span>
      </div>

      <div className="nav-hint">
        {isFirst && "Click the right side or press → to begin"}
        {isLast && "End of deck"}
      </div>
    </div>
  );
}

export default App;
