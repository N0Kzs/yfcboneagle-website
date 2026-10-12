"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Book } from "@/components/ui/book";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    color: "#eab308",
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
    color: "#eab308",
    logo: "/Certifications & Courses/Copper SCS Expert - Yellow.png",
  },
  {
    id: "copper-installer",
    title: "Copper SCS Installer",
    badge: "Copper SCS",
    level: "Red Track",
    excerpt: "Hands-on field installation, modular jack terminations, patch field dressing, cable pulling tension, and wiremap diagnostics.",
    color: "#dc2626",
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
    color: "#eab308",
    logo: "/Certifications & Courses/FOC SCS Expert - Yellow.png",
  },
  {
    id: "foc-installer",
    title: "FOC SCS Installer",
    badge: "Fiber Optics",
    level: "Red Track",
    excerpt: "Field optical cable handling, breakout assembly, mechanical connectors, splice tray dressing, and VFL inspection.",
    color: "#dc2626",
    logo: "/Certifications & Courses/FOC SCS Installer - Red.png",
  },
  {
    id: "fusion-splicer",
    title: "Fusion Splicer Professional",
    badge: "Fiber Splicing",
    level: "Red Track",
    excerpt: "Precision core-alignment arc fusion splicing, cleave angle validation, heat shrink protection, and micro-loss joint verification.",
    color: "#dc2626",
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
    color: "#eab308",
    logo: "/Certifications & Courses/GPON FTTX SCS Expert - Yellow.png",
  },
  {
    id: "gpon-installer",
    title: "GPON FTTX SCS Installer",
    badge: "GPON / FTTx",
    level: "Red Track",
    excerpt: "FTTx drop cable routing, optical drop terminal (ODT) field splicing, PLC splitter mounting, and subscriber ONT turn-up.",
    color: "#dc2626",
    logo: "/Certifications & Courses/GPON FTTX SCS Installer - Red.png",
  },
];

export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  };

  const getVisibleCerts = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % CERTIFICATIONS.length;
      list.push({ item: CERTIFICATIONS[idx], index: i });
    }
    return list;
  };

  return (
    <div id="academy" className="w-full max-w-[1600px] mx-auto px-4 md:px-10 pt-10 pb-20 space-y-14 relative">
      {/* Header exactly matching reference-blog Latest Stories */}
      <div className="flex items-center justify-between border-b border-border/50 pb-8">
        <div className="space-y-1.5">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
            Certifications & Courses
          </h3>
          <p className="text-muted-foreground/70 font-semibold uppercase tracking-widest text-xs">
            YFC Academy • Professional Training • Technical Certification Modules
          </p>
        </div>
        <a
          href="#academy"
          className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-foreground transition-colors group"
        >
          Browse Full Curriculum
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* 3D Book Slider Track matching reference-blog */}
      <div className="relative group/slider flex items-center justify-center">
        {/* Navigation Buttons - Desktop */}
        <div className="absolute left-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
          <button
            onClick={prevSlide}
            aria-label="Previous Course"
            className="p-4 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-foreground transition-all hover:bg-muted/80 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute right-0 top-[35%] -translate-y-1/2 z-30 hidden lg:block">
          <button
            onClick={nextSlide}
            aria-label="Next Course"
            className="p-4 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-foreground transition-all hover:bg-muted/80 hover:scale-110 active:scale-95 shadow-md cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="absolute inset-x-0 top-[35%] -translate-y-1/2 z-30 flex justify-between px-2 lg:hidden">
          <button
            onClick={prevSlide}
            aria-label="Previous Course"
            className="p-3 rounded-full bg-background/90 backdrop-blur-md border border-border/60 text-foreground shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Course"
            className="p-3 rounded-full bg-background/90 backdrop-blur-md border border-border/60 text-foreground shadow-md cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Cards presentation */}
        <div className="overflow-visible w-full lg:max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="flex gap-8 md:gap-20 justify-center pt-8 pb-16 min-h-[580px] items-start relative">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleCerts().map(({ item: cert, index }) => (
                <motion.div
                  key={`${cert.id}-${currentIndex}`}
                  layout
                  initial={{ opacity: 0, x: direction * 50, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: direction * -50, scale: 0.9, filter: "blur(10px)" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  className="group relative w-[200px] md:w-[260px] flex-shrink-0"
                >
                  <div className="block relative z-10 group/book cursor-pointer">
                    {/* Hover Glow Effect from reference-blog */}
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
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                          <Image
                            src={cert.logo}
                            alt={cert.title}
                            width={112}
                            height={112}
                            className="w-full h-full object-contain drop-shadow-md"
                          />
                        </div>
                      }
                      textured
                      width={{ sm: 160, md: 220, lg: 260 }}
                    />

                    {/* Revealed Course Details on Hover (Exact reference-blog Pop-up Effect) */}
                    <div className="mt-8 space-y-3 opacity-0 group-hover/book:opacity-100 transition-all duration-500 translate-y-4 group-hover/book:translate-y-0 pointer-events-none group-hover/book:pointer-events-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-md bg-muted border border-border text-foreground">
                          {cert.badge}
                        </span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {cert.level}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 dark:text-foreground/75 font-medium leading-relaxed line-clamp-2">
                        {cert.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Footer Link */}
      <div className="flex justify-center md:hidden pt-4">
        <a
          href="#academy"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/70 hover:text-foreground transition-colors group"
        >
          Browse Full Curriculum
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
