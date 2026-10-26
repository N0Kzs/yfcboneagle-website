"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Factory,
  ShieldCheck,
  Award,
  Globe2,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  X,
  FileText,
  MapPin,
  CheckCircle2,
  Users,
  Compass,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  GraduationCap
} from "lucide-react";

// 44 Slides from public/company-profile/slides/slide-[1..44].jpg
const TOTAL_SLIDES = 44;
const SLIDE_CHAPTERS = [
  { start: 1, name: "Company Introduction", desc: "Vision, Mission & Leadership" },
  { start: 8, name: "Manufacturing & Facilities", desc: "Bataan Plant & Advanced Production" },
  { start: 18, name: "Solutions & Product Portfolio", desc: "Cabling, Data Center & Active Gear" },
  { start: 30, name: "Quality Assurance & Standards", desc: "UL, ETL, ISO & International Compliance" },
  { start: 38, name: "Key Deployments & Partners", desc: "Regional Track Record & Support" }
];

const CORPORATE_PILLARS = [
  {
    icon: Factory,
    title: "Direct Manufacturing Precision",
    subtitle: "Bataan Ecozone Manufacturing Hub",
    description:
      "Operating high-capacity automated extrusion, twisting, and fiber termination lines with stringent ISO9001 and ISO14001 quality audits. We maintain direct control over copper purity, jacketing integrity, and optical tolerances.",
    points: [
      "UL & ETL third-party certified manufacturing",
      "Rigorous flammability & RoHS environmental compliance",
      "Custom OEM/ODM length and labeling capability"
    ],
    tag: "Factory Direct"
  },
  {
    icon: Globe2,
    title: "Regional Distribution Network",
    subtitle: "Manila & Cebu Strategic Hubs",
    description:
      "Guaranteed multi-tier inventory availability across the Philippine archipelago. With warehouse depots in Ermita, Manila and Mandaue City, Cebu, enterprise project rollouts avoid weeks of overseas shipping lead times.",
    points: [
      "Same-day dispatch for high-demand structured cabling",
      "Visayas & Mindanao dedicated technical support branch",
      "Complete logistics handling from factory dock to site"
    ],
    tag: "Zero-Lag Logistics"
  },
  {
    icon: GraduationCap,
    title: "YFC Academy & Technical Mastery",
    subtitle: "Engineering-First Professional Backing",
    description:
      "We do not merely supply hardware; we certify and empower the engineers who deploy it. YFC Academy provides BICSI-aligned hands-on training for optical fusion, OTDR certification, and modular data center commissioning.",
    points: [
      "Industry-recognized installer & designer certificates",
      "Comprehensive warranty backing for certified installs",
      "Hands-on optical splicing and test equipment workshops"
    ],
    tag: "Knowledge Transfer"
  }
];

const FACILITIES = [
  {
    name: "Main Distribution Hub & Corporate Office",
    city: "Ermita, Manila",
    address: "5th Flr, New Gold Bldg, #1579 F.T Benitez St., Ermita, Manila, Philippines",
    phone: "+63 (02) 8524-7890",
    role: "Corporate HQ, Project Quotations & Primary Metro Manila Stock Warehouse",
    status: "Active Depot"
  },
  {
    name: "Visayas & Mindanao Extension Office",
    city: "Mandaue City, Cebu",
    address: "2nd Flr, Norkis Cyberpark, A.S Fortuna St., Mandaue City, Cebu, Philippines",
    phone: "+63 (32) 345-6789",
    role: "VisMin Distribution Hub, Technical Consultation & Certified Testing Lab",
    status: "Regional Hub"
  },
  {
    name: "Advanced Manufacturing Complex",
    city: "Hermosa, Bataan",
    address: "Hermosa Ecozone Industrial Park (HEIP), Hermosa, Bataan, Philippines",
    phone: "+63 (47) 244-1234",
    role: "High-Volume Optical & Copper Cabling Extrusion, Patch Cord Assembly & Quality Labs",
    status: "Manufacturing Plant"
  }
];

const MILESTONES = [
  {
    year: "Foundation",
    title: "Pioneering Asia Pacific Telecom Growth",
    description:
      "Established as a dedicated manufacturer of precision copper communication cables, quickly gaining recognition for zero-defect standards."
  },
  {
    year: "Bataan Expansion",
    title: "Ecozone Industrial Manufacturing Facility",
    description:
      "Commissioned state-of-the-art automated manufacturing plants in Hermosa Ecozone, Bataan to meet nationwide enterprise fiber and copper demand."
  },
  {
    year: "Solutions Evolution",
    title: "Modular Micro Data Center & Smart Active Gear",
    description:
      "Expanded beyond passive structured cabling into end-to-end active networking, fusion splicing technology, and modular edge data centers."
  },
  {
    year: "YFC Academy",
    title: "National ICT Upskilling & Certification",
    description:
      "Launched specialized training programs in conjunction with global telecom bodies to train thousands of Filipino network engineers."
  }
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Auto-play slideshow controller
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveSlide((prev) => (prev >= TOTAL_SLIDES ? 1 : prev + 1));
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Keep thumbnail in view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[activeSlide - 1] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeSlide]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev <= 1 ? TOTAL_SLIDES : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev >= TOTAL_SLIDES ? 1 : prev + 1));
  };

  // Keyboard navigation for presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevSlide();
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* =========================================================================
            1. HERO SECTION: Heritage, Vision & Quick Highlights
        ========================================================================= */}
        <section className="relative px-6 sm:px-10 lg:px-16 py-12 md:py-20 overflow-hidden border-b border-border/40">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
            <div className="absolute top-0 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-sky-500/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  <span>About YFC-BonEagle International Inc.</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                  Powering Critical <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
                    Connectivity & Infrastructure
                  </span>{" "}
                  Across Asia Pacific
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Founded on precision engineering and strict international standards, YFC-BonEagle is a leading
                  regional manufacturer and end-to-end distributor of structured cabling, modular edge data centers,
                  and enterprise ICT active hardware.
                </p>

                {/* Quick Call to Action Badges */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#presentation-deck">
                    <Button className="rounded-full shadow-lg shadow-primary/20 gap-2">
                      <FileText className="size-4" />
                      View 44-Slide Deck
                    </Button>
                  </a>
                  <a href="/YFC Company Profile.pdf" download="YFC Company Profile.pdf" target="_blank" rel="noreferrer">
                    <Button variant="outline" className="rounded-full gap-2">
                      <Download className="size-4" />
                      Download Profile PDF (11MB)
                    </Button>
                  </a>
                  <a href="#facilities">
                    <Button variant="ghost" className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
                      <MapPin className="size-4 text-primary" />
                      Regional Hubs
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-border/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">30+ Yrs</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Manufacturing Heritage</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">3 Hubs</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Manila • Cebu • Bataan</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">9 Brands</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Tier-1 Global ICT Lines</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-foreground">100% QA</p>
                    <p className="text-xs text-muted-foreground mt-0.5">UL, ETL & ISO Standards</p>
                  </div>
                </div>
              </div>

              {/* Hero Graphic Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl border border-border/80 bg-gradient-to-br from-card/80 to-card p-6 shadow-2xl backdrop-blur-xl space-y-5">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 bg-muted">
                    <Image
                      src="/company-profile/slides/slide-1.jpg"
                      alt="YFC-BonEagle Company Profile Cover"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/20 px-2 py-0.5 rounded backdrop-blur">
                          Official Profile
                        </span>
                        <p className="text-white font-bold text-base mt-1">YFC-BonEagle Corporate Dossier</p>
                        <p className="text-white/70 text-xs">Comprehensive Capabilities, Facilities & Compliance</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Document Size</span>
                      <span className="font-semibold text-foreground">44 Slides (Full PDF Deck)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Corporate Accreditations</span>
                      <span className="font-semibold text-foreground">ISO9001 / ISO14001 / UL / ETL</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Logistics Coverage</span>
                      <span className="font-semibold text-emerald-600 font-medium">Nationwide Philippine Dispatches</span>
                    </div>
                  </div>

                  <a
                    href="#presentation-deck"
                    className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/20 text-xs font-semibold text-primary transition-colors"
                  >
                    <span>Click to open digital slide presenter</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE 3 CORPORATE PILLARS
        ========================================================================= */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                <Compass className="size-3.5 text-primary" />
                <span>Our Core Operating Model</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Built on Three Uncompromising Pillars
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Unlike mere trading companies, YFC-BonEagle unites factory-floor manufacturing, regional inventory
                readiness, and engineering education under one roof.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {CORPORATE_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="relative rounded-3xl border border-border/80 bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <IconComponent className="size-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase bg-muted px-2.5 py-1 rounded-full">
                          {pillar.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
                        <p className="text-xs font-semibold text-primary mt-1">{pillar.subtitle}</p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>

                      <div className="space-y-2.5 pt-4 border-t border-border/50">
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. INTERACTIVE 44-SLIDE PRESENTATION VIEWER
        ========================================================================= */}
        <section id="presentation-deck" className="px-6 sm:px-10 lg:px-16 py-20 bg-muted/20 border-b border-border/40">
          <div className="mx-auto max-w-7xl">
            {/* Header with Download & Chapter Selector */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                  <FileText className="size-3.5" />
                  <span>Interactive Slide Viewer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Official Corporate Presentation
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Flip through our comprehensive 44-page corporate profile detailing plant capabilities, factory certifications,
                  product lines, and Asia Pacific deployments.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full text-xs font-semibold"
                >
                  {isPlaying ? "Pause Auto-play" : "Auto-Play Slides"}
                </Button>
                <a href="/YFC Company Profile.pdf" download="YFC Company Profile.pdf" target="_blank" rel="noreferrer">
                  <Button size="sm" className="rounded-full gap-2 text-xs font-semibold">
                    <Download className="size-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Chapter Fast-Jump Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0 mr-2">
                Jump To:
              </span>
              {SLIDE_CHAPTERS.map((ch, idx) => {
                const isActive = activeSlide >= ch.start && (idx === SLIDE_CHAPTERS.length - 1 || activeSlide < SLIDE_CHAPTERS[idx + 1].start);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSlide(ch.start);
                      setIsPlaying(false);
                    }}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-foreground text-background shadow-md font-semibold"
                        : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                    }`}
                  >
                    {ch.name}
                  </button>
                );
              })}
            </div>

            {/* Slide Viewport Card */}
            <div className="relative rounded-3xl border border-border/80 bg-black/95 shadow-2xl overflow-hidden">
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60 backdrop-blur text-white text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/10 font-bold">
                    Slide {activeSlide} of {TOTAL_SLIDES}
                  </span>
                  <span className="hidden sm:inline text-white/60">
                    Use keyboard arrow keys (← / →) to navigate
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs px-3"
                    title="Fullscreen"
                  >
                    <Maximize2 className="size-3.5" />
                    <span>Expand</span>
                  </button>
                </div>
              </div>

              {/* Main Slide Display Area */}
              <div className="relative aspect-[16/9] w-full flex items-center justify-center p-4 sm:p-8 bg-zinc-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full max-w-5xl"
                  >
                    <Image
                      src={`/company-profile/slides/slide-${activeSlide}.jpg`}
                      alt={`YFC-BonEagle Profile Slide ${activeSlide}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left / Right Nav Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 grid place-items-center backdrop-blur shadow-xl hover:scale-105 transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 grid place-items-center backdrop-blur shadow-xl hover:scale-105 transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>

              {/* Slide Thumbnail Scroller */}
              <div className="p-4 border-t border-white/10 bg-zinc-900/90 overflow-hidden">
                <div
                  ref={thumbnailContainerRef}
                  className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20"
                >
                  {Array.from({ length: TOTAL_SLIDES }).map((_, i) => {
                    const slideNum = i + 1;
                    const isSelected = activeSlide === slideNum;
                    return (
                      <button
                        key={slideNum}
                        onClick={() => {
                          setActiveSlide(slideNum);
                          setIsPlaying(false);
                        }}
                        className={`relative shrink-0 w-20 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${
                          isSelected
                            ? "border-primary scale-105 shadow-md shadow-primary/30"
                            : "border-white/20 opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={`/company-profile/slides/slide-${slideNum}.jpg`}
                          alt={`Thumbnail ${slideNum}`}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute bottom-0 right-0 bg-black/80 text-[9px] font-mono font-bold text-white px-1">
                          {slideNum}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. REGIONAL HUBS & STRATEGIC FACILITIES
        ========================================================================= */}
        <section id="facilities" className="px-6 sm:px-10 lg:px-16 py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <MapPin className="size-3.5" />
                <span>Geographic Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Our Strategic Facilities & Regional Hubs
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connecting clients across Luzon, Visayas, and Mindanao with localized inventory, fast replacement guarantees,
                and direct factory technical support.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {FACILITIES.map((fac, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/80 bg-card p-7 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                        {fac.status}
                      </span>
                      <Building2 className="size-5 text-muted-foreground" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground">{fac.name}</h3>
                      <p className="text-xs font-semibold text-muted-foreground mt-0.5">{fac.city}</p>
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p className="leading-relaxed">{fac.address}</p>
                      <p className="font-mono text-foreground font-medium">{fac.phone}</p>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-border/50 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Operational Role: </span>
                    {fac.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CORPORATE MILESTONES & HISTORY
        ========================================================================= */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 border-b border-border/40">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                <TrendingUp className="size-3.5 text-primary" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Decades of ICT Infrastructure Evolution
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                From high-precision copper extrusion to next-generation modular data centers, our roadmap reflects continuous
                investment in Philippine and Asia Pacific engineering.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

              <div className="space-y-12">
                {MILESTONES.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Timeline Center Badge */}
                      <div className="hidden sm:grid absolute left-1/2 top-4 -translate-x-1/2 size-10 rounded-full bg-primary text-primary-foreground place-items-center shadow-lg font-mono text-xs font-bold z-10">
                        {index + 1}
                      </div>

                      {/* Content Card */}
                      <div className="w-full sm:w-[45%]">
                        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:shadow-md transition-shadow space-y-2">
                          <span className="text-xs font-bold font-mono text-primary uppercase tracking-wider">
                            {item.year}
                          </span>
                          <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CTA BANNER
        ========================================================================= */}
        <section className="px-6 sm:px-10 lg:px-16 pt-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-14 shadow-xl overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <ShieldCheck className="size-3.5" />
                  <span>Enterprise Distribution & Technical Support</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to specify YFC-BonEagle products in your next infrastructure deployment?
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Connect with our systems engineering team in Manila or Cebu to request comprehensive bill of materials (BOM),
                  project discount pricing, or factory compliance documentation.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/solutions">
                    <Button className="rounded-full shadow-lg shadow-primary/20 gap-2">
                      <span>Explore Products & Solutions</span>
                      <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="rounded-full gap-2">
                      <span>View Exhibition Galleries</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FULLSCREEN MODAL FOR SLIDESHOW
      ========================================================================= */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm">YFC-BonEagle Corporate Profile Deck</span>
                <span className="text-xs text-white/60 font-mono">
                  Slide {activeSlide} of {TOTAL_SLIDES}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a href="/YFC Company Profile.pdf" download="YFC Company Profile.pdf" target="_blank" rel="noreferrer">
                  <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-xs">
                    <Download className="size-3.5 mr-1.5" />
                    Download PDF
                  </Button>
                </a>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Slide Body */}
            <div className="relative flex-1 flex items-center justify-center p-4">
              <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
                <Image
                  src={`/company-profile/slides/slide-${activeSlide}.jpg`}
                  alt={`Slide ${activeSlide}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev / Next in Fullscreen */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 grid place-items-center transition-all"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 size-14 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 grid place-items-center transition-all"
              >
                <ChevronRight className="size-7" />
              </button>
            </div>

            {/* Bottom Mini Thumbnails */}
            <div className="px-6 py-3 border-t border-white/10 bg-black/80 flex items-center justify-center gap-2 overflow-x-auto">
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setActiveSlide(i + 1)}
                  className={`size-2.5 rounded-full transition-all ${
                    activeSlide === i + 1 ? "bg-primary w-6" : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
