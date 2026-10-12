"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  Users,
  FileText,
  CheckCircle2,
  Maximize2,
  Download,
  X,
  Play,
  Pause,
  Building2,
} from "lucide-react";

const TOTAL_SLIDES = 44;
const SLIDES = Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
  src: `/company-profile/slides/slide-${i + 1}.jpg`,
  alt: `YFC-BonEagle Company Profile Slide ${i + 1}`,
}));

export function CompanyProfileSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0));
  }, []);

  // Auto-next slide effect (advances every 4.5s, pauses on hover)
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, nextSlide, currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsFullScreen(false);
      if (e.key === " " && isFullScreen) {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, isFullScreen]);

  const pillars = [
    {
      icon: Target,
      title: "Our Focus on Business",
      desc: "Delivering world-class ICT distribution, supply chain dependability, and certified connectivity solutions across Southeast Asia.",
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Award,
      title: "Experience & Expertise",
      desc: "Decades of precision manufacturing excellence backed by publicly-listed YFC Taiwan and tier-1 global certifications.",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: Users,
      title: "Collaboration & Communication",
      desc: "Deep long-term partnerships with leading system integrators, telecom operators, enterprise channels, and consultants.",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 bg-muted/20 relative overflow-hidden border-b border-border/40"
    >
      {/* Subtle backdrop accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Showcase: Company Story (Left) + Interactive Presentation Viewer (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Column 1: Introduction & Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Building2 className="size-3.5" />
                Company Profile
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                Welcome to
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mt-1 text-balance leading-[1.12]">
                YFC-BonEagle <br className="hidden sm:inline" />
                International Inc.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
              <p>
                We are the subsidiary company of publicly listed{" "}
                <a
                  href="http://www.cables.com.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold inline-flex items-center gap-1 group"
                >
                  YFC-BonEagle Electric Co. Inc.
                  <ExternalLink className="size-3.5 inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>{" "}
                of Taiwan. Under the company name YFC-BonEagle Int’l. Inc. here in the Philippines, we are the regional distribution hub for the whole Southeast Asian countries.
              </p>

              <p>
                We also manage our Bataan manufacturing facilities, producing structured copper LAN cabling, power cords, HDMI, and high-speed USB solutions.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/25 group cursor-pointer"
              >
                <span>Know more</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/YFC%20Company%20Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-card border border-border/80 hover:border-primary/50 hover:bg-muted text-foreground hover:scale-105 active:scale-95 transition-all shadow-sm group cursor-pointer"
              >
                <FileText className="size-4 text-primary" />
                <span>View Profile (PDF)</span>
                <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Presentation Deck Viewer (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Interactive Presentation Slide Viewer */}
            <div className="rounded-3xl border border-border/80 bg-card shadow-2xl overflow-hidden relative group">
              <div className="px-5 py-3.5 bg-muted/40 border-b border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-red-400/80" />
                    <span className="size-3 rounded-full bg-amber-400/80" />
                    <span className="size-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-border/60 text-xs font-semibold text-muted-foreground">
                    <FileText className="size-3.5 text-primary" />
                    <span>YFC Company Profile.pdf</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs font-mono font-medium text-muted-foreground hidden sm:inline">
                    Slide {currentSlide + 1} / {TOTAL_SLIDES}
                  </span>

                  {/* Autoplay Toggle Button */}
                  <button
                    onClick={() => setIsAutoPlay((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isAutoPlay
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                    title={isAutoPlay ? "Pause auto-slide" : "Start auto-slide"}
                    aria-label={isAutoPlay ? "Pause auto-slide" : "Start auto-slide"}
                  >
                    {isAutoPlay ? (
                      <>
                        <Pause className="size-3" />
                        <span className="text-[11px]">Auto</span>
                      </>
                    ) : (
                      <>
                        <Play className="size-3 fill-current" />
                        <span className="text-[11px]">Play</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setIsFullScreen(true)}
                    className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    title="View fullscreen"
                    aria-label="View fullscreen"
                  >
                    <Maximize2 className="size-3.5" />
                  </button>

                  <a
                    href="/YFC%20Company%20Profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="YFC Company Profile.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Download className="size-3.5" />
                    <span className="hidden sm:inline">Download</span> PDF
                  </a>
                </div>
              </div>

              {/* Slide Content Display (Exact 16:9 Landscape Frame) */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900/5 dark:bg-black/40 cursor-pointer select-none"
                onClick={nextSlide}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="relative w-full h-full flex items-center justify-center p-1 sm:p-2"
                  >
                    <Image
                      src={SLIDES[currentSlide].src}
                      alt={SLIDES[currentSlide].alt}
                      fill
                      priority={currentSlide === 0}
                      loading={currentSlide === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Sleek Semi-Transparent Hover Slide Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95 shadow-xl z-20 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-9 sm:size-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95 shadow-xl z-20 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5" />
                </button>

                {/* Progress bar along bottom of slide */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-black/10 dark:bg-white/10 z-10">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Showcase: 3 Pillars Full-Width 3-Column Grid */}
        <div className="pt-8 sm:pt-10 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-border/70 hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className={`size-5 ${pillar.accent}`} />
                  </div>
                  <h5 className="font-bold text-base sm:text-lg text-foreground tracking-tight mb-2">
                    {pillar.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <CheckCircle2 className="size-4" />
                  <span>Verified Standards</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between text-white z-10 pb-4">
              <div className="flex items-center gap-3">
                <FileText className="size-5 text-primary" />
                <span className="font-bold text-sm sm:text-base">YFC Company Profile Deck</span>
                <span className="text-xs font-mono text-white/60">
                  Slide {currentSlide + 1} of {TOTAL_SLIDES}
                </span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setIsAutoPlay((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isAutoPlay
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-white/10 text-white/70 hover:text-white"
                  }`}
                  title={isAutoPlay ? "Pause autoplay (Space)" : "Start autoplay (Space)"}
                >
                  {isAutoPlay ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-current" />}
                  <span>{isAutoPlay ? "Auto: On" : "Auto: Paused"}</span>
                </button>
                <a
                  href="/YFC%20Company%20Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="YFC Company Profile.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Download className="size-4" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setIsFullScreen(false)}
                  className="size-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                  aria-label="Close fullscreen"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Modal Slide Area */}
            <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
              <Image
                src={SLIDES[currentSlide].src}
                alt={SLIDES[currentSlide].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95 shadow-2xl z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all backdrop-blur-md hover:scale-110 active:scale-95 shadow-2xl z-20 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="size-7" />
              </button>
            </div>

            {/* Modal Bottom Info */}
            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono text-white/60">
              <span>Press Left / Right arrows to navigate • ESC to exit</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
