"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfessionalStats } from "@/components/ui/professional-stats";
import { ProductsLoopSection } from "@/components/products-loop-section";

export function HeroCoverSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Overall scroll tracking across the multi-phase hijack
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics for buttery smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.5,
  });

  // Phase 1: Hero exit parallax (0.04 -> 0.20) - fully fades to 0 before card fully seats
  const heroScale = useTransform(smoothProgress, [0.04, 0.20], [1, 0.92]);
  const heroOpacity = useTransform(smoothProgress, [0.04, 0.20], [1, 0]);
  const heroY = useTransform(smoothProgress, [0.04, 0.20], [0, -50]);
  const heroDisplay = useTransform(smoothProgress, (val) => (val > 0.22 ? "none" : "flex"));

  // Phase 1: Curved Card Slide-Up (starts completely hidden off-screen at 105vh on landing page)
  const cardY = useTransform(
    smoothProgress,
    [0, 0.04, 0.22],
    ["105vh", "105vh", "0vh"]
  );

  // Phase 3: Horizontal Pan (0.36 -> 0.72) from Panel 1 (0vw) to Panel 2 (-100vw)
  const xShift = useTransform(
    smoothProgress,
    [0.36, 0.72],
    ["0vw", "-100vw"]
  );

  // Spatial transitions: Panel 1 exits with scale, blur, and opacity
  const p1Opacity = useTransform(smoothProgress, [0.38, 0.56], [1, 0.15]);
  const p1Scale = useTransform(smoothProgress, [0.38, 0.56], [1, 0.92]);
  const p1Blur = useTransform(smoothProgress, [0.38, 0.56], [0, 8]);

  // Spatial transitions: Panel 2 enters with scale and opacity
  const p2Opacity = useTransform(smoothProgress, [0.46, 0.68], [0.2, 1]);
  const p2Scale = useTransform(smoothProgress, [0.46, 0.68], [0.93, 1]);

  // Phase 5: Smooth exit into next section (0.88 -> 1.00)
  const exitScale = useTransform(smoothProgress, [0.88, 1.0], [1, 0.90]);
  const exitOpacity = useTransform(smoothProgress, [0.90, 1.0], [1, 0]);
  const exitRadius = useTransform(smoothProgress, [0.88, 1.0], ["0px", "40px"]);

  const handleScrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    if (containerRef.current) {
      const target =
        containerRef.current.offsetTop +
        containerRef.current.clientHeight * 0.75;
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const handleScrollToAcademy = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("academy");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[520vh]">
      {/* Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* 1. STICKY HERO PLANE (Background Layer - completely unmounted/hidden when covered) */}
        <motion.div
          style={{
            opacity: heroOpacity,
            display: heroDisplay,
          }}
          className="absolute inset-0 h-full w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 overflow-hidden z-0 dark bg-[#050915] text-slate-100"
        >
          {/* Looping Video Background with Refined Layering */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover opacity-50 scale-105"
              src="/videoBackground.mp4"
            />
            {/* Multi-stage Contrast Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050915] via-[#050915]/85 to-[#050915]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-transparent to-[#050915]/70" />
            {/* Subtle Tech Grid / Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_30%,#050915_90%)]" />
          </div>

          {/* Ambient Lighting Accents */}
          <div
            className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[520px] w-[700px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[150px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-12 top-1/3 -z-10 h-[400px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]"
            aria-hidden="true"
          />

          {/* 
            MANUAL LEFT ADJUSTMENT:
            To move the text further LEFT, increase the negative value below 
            (e.g., lg:-left-28 xl:-left-36 or arbitrary pixels like lg:-left-[100px] xl:-left-[140px]).
            To move it back to the RIGHT, decrease the negative value (e.g. lg:-left-12 or remove to center).
          */}
          <motion.div
            style={{
              scale: heroScale,
              y: heroY,
            }}
            className="mx-auto max-w-7xl w-full relative left-0 lg:-left-20 xl:-left-28"
          >
            <div className="max-w-5xl">
              <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-7xl lg:text-[100px] xl:text-[112px] leading-[0.93] sm:leading-[0.93] drop-shadow-sm">
                <span className="text-shiny block">Your First Choice</span>
                <span className="text-shiny block">for ICT Products</span>
                <span className="text-shiny inline">in </span>
                <span className="text-shiny-blue inline">ASIA PACIFIC</span>
              </h1>

              <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300/90 font-normal leading-relaxed">
                Empowering carriers, data centers, and enterprise networks with premier optical fiber cables, high-speed connectivity, and end-to-end infrastructure solutions.
              </p>

              <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-5">
                <Button
                  onClick={handleScrollToSolutions}
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-bold shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_45px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white cursor-pointer border border-blue-400/30"
                >
                  Explore Solutions <ArrowRight className="size-4 ml-2" />
                </Button>
                <Button
                  onClick={handleScrollToAcademy}
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-bold bg-white/10 hover:bg-white/20 border-white/20 shadow-lg backdrop-blur-md hover:scale-105 active:scale-95 transition-all text-white cursor-pointer"
                >
                  YFC Academy <ChevronRight className="size-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 2. CURVED OVERLAY CARD - Slides UP and covers the hero, then shifts horizontally */}
        <motion.div
          style={{
            y: cardY,
            scale: exitScale,
            opacity: exitOpacity,
            borderRadius: exitRadius,
          }}
          className="absolute inset-0 z-20 bg-background dark:bg-black rounded-t-[48px] sm:rounded-t-[64px] md:rounded-t-[80px] border-t-2 border-x-2 border-neutral-300/80 dark:border-zinc-800 shadow-[0_-12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_-30px_90px_rgba(0,0,0,0.7)] overflow-hidden origin-center"
        >

          {/* HORIZONTAL PANNING TRACK (200vw width) */}
          <motion.div
            style={{ x: xShift }}
            className="flex h-full w-[200vw]"
          >
            {/* Panel 1: Regional ICT Distribution Hub (Stats & Metrics) */}
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center overflow-hidden">
              <motion.div
                style={{
                  opacity: p1Opacity,
                  scale: p1Scale,
                  filter: useTransform(p1Blur, (b) => `blur(${b}px)`),
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <ProfessionalStats />
              </motion.div>
            </div>

            {/* Panel 2: Products Manufactured and Distributed (LogoLoop) */}
            <div
              id="solutions"
              className="w-screen h-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-muted/10"
            >
              <motion.div
                style={{
                  opacity: p2Opacity,
                  scale: p2Scale,
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <ProductsLoopSection embedded={true} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
