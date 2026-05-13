import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

interface LandingAnimationProps {
  onComplete: () => void;
}

const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

type Stage = "video" | "logo";

const LandingAnimation = ({ onComplete }: LandingAnimationProps) => {
  const [stage, setStage] = useState<Stage>("video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);

  // Reduced motion: skip straight through
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      completedRef.current = true;
      onComplete();
    }
  }, [onComplete]);

  // Safety: if video can't autoplay or fails, advance after 8s max
  useEffect(() => {
    if (stage !== "video") return;
    const failsafe = setTimeout(() => {
      if (stage === "video") setStage("logo");
    }, 8000);
    return () => clearTimeout(failsafe);
  }, [stage]);

  // Logo stage -> hero after 1s, then complete
  useEffect(() => {
    if (stage !== "logo") return;
    const t = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete();
      }
    }, 1400);
    return () => clearTimeout(t);
  }, [stage, onComplete]);

  const handleVideoEnd = () => setStage("logo");

  const handleSkip = () => {
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: EASE_SMOOTH }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-50 text-[10px] tracking-[0.25em] uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors font-mono"
        aria-label="Skip intro"
      >
        Skip
      </button>

      {/* Video layer — fades out when stage transitions */}
      <AnimatePresence>
        {stage === "video" && (
          <motion.div
            key="video-layer"
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          >
            <video
              ref={videoRef}
              src="/door_opening.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
              onError={() => setStage("logo")}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo layer — fades in as video fades out */}
      <AnimatePresence>
        {stage === "logo" && (
          <motion.div
            key="logo-layer"
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          >
            <motion.img
              src={logo}
              alt="INARCON"
              className="h-40 sm:h-52 md:h-64 lg:h-72 w-auto"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE_SMOOTH, delay: 0.1 }}
              style={{
                filter: "drop-shadow(0 0 30px hsl(38 60% 50% / 0.5))",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LandingAnimation;
