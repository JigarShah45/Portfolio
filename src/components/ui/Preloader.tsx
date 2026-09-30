"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Classic } from "@/components/ui/classic-loader";

interface PreloaderProps {
  onComplete: () => void;
}

const MAX_DURATION = 4000;

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete" | "exit">(
    "loading"
  );
  const completedRef = useRef(false);
  const startTimeRef = useRef(Date.now());

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    setProgress(100);

    setTimeout(() => {
      setPhase("complete");
      setTimeout(() => {
        setPhase("exit");
        setTimeout(onComplete, 600);
      }, 300);
    }, 250);
  }, [onComplete]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    const images = Array.from(document.querySelectorAll("img"));
    const totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
      finish();
      return;
    }

    const updateProgress = () => {
      loadedImages++;
      const pct = Math.min(
        Math.round((loadedImages / totalImages) * 100),
        99
      );
      setProgress(pct);
      if (loadedImages >= totalImages) {
        finish();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener("load", updateProgress, { once: true });
        img.addEventListener("error", updateProgress, { once: true });
      }
    });

    const fallbackTimer = setTimeout(() => {
      finish();
    }, MAX_DURATION);

    return () => clearTimeout(fallbackTimer);
  }, [finish, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* Subtle ambient glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                opacity: [0.08, 0.15, 0.08],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[120px]"
            />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            {/* Branding */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight"
            >
              Jigar<span className="text-orange-500">.</span>
            </motion.h1>

            {/* Loading message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-neutral-500 tracking-wide"
            >
              Preparing your experience
            </motion.p>

            {/* Classic spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Classic className="size-6 text-orange-500" />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="w-48 flex flex-col items-center gap-3"
            >
              <div className="w-full h-px bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-orange-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Percentage */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="text-xs font-medium text-neutral-500 tabular-nums"
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
