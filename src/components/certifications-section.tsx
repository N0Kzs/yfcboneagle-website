"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Book } from "@/components/ui/book";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers } from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  badge: string;
  level: string;
  excerpt: string;
  color: string;
  logo: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "aem-copper",
    title: "AEM Test Professional Copper",
    badge: "AEM Testing",
    level: "Yellow Track",
    excerpt: "Master high-frequency Cat 6A/7/8 channel certification, return loss margin analysis, and Tier-1 automated testing audits.",
    color: "#f6b14d",
    logo: "/Certifications & Courses/AEM Test Professional Copper - Yellow.png",
  },
  {
    id: "aem-fiber",
    title: "AEM Test Professional Fiber",
    badge: "AEM Testing",
    level: "Green Track",
    excerpt: "Comprehensive Tier-1 & Tier-2 optical fiber certification, bi-directional loss verification, and OTDR trace inspection.",
    color: "#16a34a",
    logo: "/Certifications & Courses/AEM Test Professional Fiber - Green.png",
  },
  {
    id: "copper-designer",
    title: "Copper SCS Designer",
    badge: "Copper SCS",
    level: "Blue Track",
    excerpt: "Enterprise structured cabling engineering, pathway and space sizing, backbone architectures, and ANSI/TIA-568 compliance.",
    color: "#2563eb",
    logo: "/Certifications & Courses/Copper SCS Designer - Blue.png",
  },
  {
    id: "copper-expert",
    title: "Copper SCS Expert",
    badge: "Copper SCS",
    level: "Yellow Track",
    excerpt: "Advanced 10G/40GBASE-T channel validation, alien crosstalk mitigation, high-power PoE++ thermal rise, and shielding.",
    color: "#f6b14d",
    logo: "/Certifications & Courses/Copper SCS Expert - Yellow.png",
  },
  {
    id: "copper-installer",
    title: "Copper SCS Installer",
    badge: "Copper SCS",
    level: "Red Track",
    excerpt: "Hands-on field installation, modular jack terminations, patch field dressing, cable pulling tension, and wiremap diagnostics.",
    color: "#9D2127",
    logo: "/Certifications & Courses/Copper SCS Installer - Red.png",
  },
  {
    id: "foc-designer",
    title: "FOC SCS Designer",
    badge: "Fiber Optics",
    level: "Blue Track",
    excerpt: "Single-mode and multimode optical distribution system planning, link attenuation loss budgets, and campus topology.",
    color: "#2563eb",
    logo: "/Certifications & Courses/FOC SCS Designer - Blue.png",
  },
  {
    id: "foc-expert",
    title: "FOC SCS Expert",
    badge: "Fiber Optics",
    level: "Yellow Track",
    excerpt: "High-density MPO/MTP multi-fiber trunking, polarity schemes, optical dispersion compensation, and datacenter fabrics.",
    color: "#f6b14d",
    logo: "/Certifications & Courses/FOC SCS Expert - Yellow.png",
  },
  {
    id: "foc-installer",
    title: "FOC SCS Installer",
    badge: "Fiber Optics",
    level: "Red Track",
    excerpt: "Field optical cable handling, breakout assembly, mechanical connectors, splice tray dressing, and VFL inspection.",
    color: "#9D2127",
    logo: "/Certifications & Courses/FOC SCS Installer - Red.png",
  },
  {
    id: "fusion-splicer",
    title: "Fusion Splicer Professional",
    badge: "Fiber Splicing",
    level: "Red Track",
    excerpt: "Precision core-alignment arc fusion splicing, cleave angle validation, heat shrink protection, and micro-loss joint verification.",
    color: "#9D2127",
    logo: "/Certifications & Courses/Fusion Splicer Professional - Red.png",
  },
  {
    id: "gpon-designer",
    title: "GPON FTTX SCS Designer",
    badge: "GPON / FTTx",
    level: "Blue Track",
    excerpt: "Optical Distribution Network (ODN) split ratio optimization, OLT-to-ONT feeder architecture, and carrier GPON rollout.",
    color: "#2563eb",
    logo: "/Certifications & Courses/GPON FTTX SCS Designer - Blue.png",
  },
  {
    id: "gpon-expert",
    title: "GPON FTTX SCS Expert",
    badge: "GPON / FTTx",
    level: "Yellow Track",
    excerpt: "Wavelength Division Multiplexing (WDM), XGS-PON 10G transmission, optical link budgets, and telco-grade FTTx audits.",
    color: "#f6b14d",
    logo: "/Certifications & Courses/GPON FTTX SCS Expert - Yellow.png",
  },
  {
    id: "gpon-installer",
    title: "GPON FTTX SCS Installer",
    badge: "GPON / FTTx",
    level: "Red Track",
    excerpt: "FTTx drop cable routing, optical drop terminal (ODT) field splicing, PLC splitter mounting, and subscriber ONT turn-up.",
    color: "#9D2127",
    logo: "/Certifications & Courses/GPON FTTX SCS Installer - Red.png",
  },
];

const TRACK_SHORTCUTS = [
  { name: "All Tracks", startIndex: 0 },
  { name: "AEM Testing", startIndex: 0 },
  { name: "Copper SCS", startIndex: 2 },
  { name: "Fiber Optics", startIndex: 5 },
  { name: "Fiber Splicing", startIndex: 8 },
  { name: "GPON / FTTx", startIndex: 9 },
];

export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll parallax reference
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ambientGlowY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const auraScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.2, 0.9]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.2, 0.65, 0.65, 0.2]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  // Gentle auto-slide (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const getVisibleCerts = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % CERTIFICATIONS.length;
      list.push({ item: CERTIFICATIONS[idx], index: i });
    }
    return list;
  };

  const activeCert = CERTIFICATIONS[currentIndex];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="certifications"
      className="w-full max-w-[1600px] mx-auto px-4 md:px-10 pt-10 pb-20 space-y-10 relative overflow-hidden"
    >
      {/* Dynamic Ambient Color Aura (Shifts color with the active module) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[140px] pointer-events-none -z-10 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeCert.color}28 0%, transparent 70%)`,
          y: ambientGlowY,
          scale: auraScale,
          opacity: auraOpacity,
        }}
      />

      {/* Header with entrance animation & module count */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/50 pb-8 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-1">
            <Sparkles className="size-3.5 animate-pulse text-primary" />
            Curriculum Modules
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            Certifications & Courses
          </h3>
          <p className="text-muted-foreground font-medium text-xs sm:text-sm">
            YFC Academy • Professional Training • Technical Certification Modules
          </p>
        </motion.div>

        {/* Live Track Position Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 shrink-0"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-muted/40 border border-border/80 shadow-xs backdrop-blur-md">
            <Layers className="size-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Module {String(currentIndex + 1).padStart(2, "0")} / {CERTIFICATIONS.length}
            </span>
            <span
              className="size-2 rounded-full shadow-xs"
              style={{ backgroundColor: activeCert.color }}
            />
          </div>
        </motion.div>
      </div>

      {/* Quick Category Track Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-wrap gap-2 items-center"
      >
        <span className="text-xs font-semibold text-muted-foreground mr-1">Filter Track:</span>
        {TRACK_SHORTCUTS.map((track) => {
          const isActive =
            track.name === "All Tracks"
              ? currentIndex === 0
              : CERTIFICATIONS[currentIndex].badge.toLowerCase().includes(track.name.toLowerCase().split(" ")[0]);

          return (
            <motion.button
              key={track.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDirection(track.startIndex > currentIndex ? 1 : -1);
                setCurrentIndex(track.startIndex);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {track.name}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Dynamic Progress Bar */}
      <div className="w-full h-1 bg-border/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-yellow-500 to-emerald-500 rounded-full"
          animate={{ width: `${((currentIndex + 1) / CERTIFICATIONS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* 3D Book Slider Track */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group/slider flex items-center justify-center pt-2"
      >
        {/* Navigation Buttons - Desktop */}
        <div className="absolute left-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            aria-label="Previous Course"
            className="p-4 rounded-full bg-background/85 backdrop-blur-md border border-border/80 text-foreground transition-all hover:bg-muted/90 shadow-xl cursor-pointer hover:border-primary/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="absolute right-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            aria-label="Next Course"
            className="p-4 rounded-full bg-background/85 backdrop-blur-md border border-border/80 text-foreground transition-all hover:bg-muted/90 shadow-xl cursor-pointer hover:border-primary/50"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="absolute inset-x-0 top-[35%] -translate-y-1/2 z-30 flex justify-between px-2 lg:hidden">
          <button
            onClick={prevSlide}
            aria-label="Previous Course"
            className="p-3 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-foreground shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Course"
            className="p-3 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-foreground shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards presentation */}
        <div className="overflow-visible w-full lg:max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="flex gap-8 md:gap-20 justify-center pt-6 pb-12 min-h-[580px] items-start relative">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleCerts().map(({ item: cert, index }) => (
                <motion.div
                  key={`${cert.id}-${currentIndex}`}
                  layout
                  initial={{ opacity: 0, x: direction * 60, scale: 0.88, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: direction * -60, scale: 0.88, filter: "blur(10px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                  }}
                  className="group relative w-[200px] md:w-[260px] flex-shrink-0"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4.5 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="block relative z-10 group/book cursor-pointer"
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square -z-10 blur-[80px] opacity-0 group-hover/book:opacity-75 group-hover/book:scale-110 transition-all duration-700 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${cert.color} 0%, transparent 70%)`,
                      }}
                    />

                    {/* 3D Book Component */}
                    <Book
                      title={cert.title}
                      color={cert.color}
                      variant={index % 2 === 0 ? "stripe" : "simple"}
                      illustration={
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                          <Image
                            src={cert.logo}
                            alt={cert.title}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain drop-shadow-md rounded-2xl"
                          />
                        </div>
                      }
                      textured
                      width={{ sm: 180, md: 220, lg: 250 }}
                    />

                    {/* Course Details (Retained below each book) */}
                    <div className="mt-6 space-y-2 transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-md bg-muted/80 border border-border/80 text-foreground shadow-2xs">
                          {cert.badge}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {cert.level}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground group-hover/book:text-foreground font-medium leading-relaxed line-clamp-2 transition-colors">
                        {cert.excerpt}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Interactive 12 Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {CERTIFICATIONS.map((cert, i) => (
          <button
            key={cert.id}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            aria-label={`Jump to ${cert.title}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === i
                ? "w-8 shadow-sm"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            style={{
              backgroundColor: currentIndex === i ? cert.color : undefined,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
