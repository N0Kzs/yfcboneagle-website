"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/ui/animated-gallery";
import {
  Calendar,
  MapPin,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowRight,
  Camera,
  CheckCircle2,
  Users,
  Building,
  Layers,
  VideoIcon,
  Eye,
  ExternalLink,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  event: string;
  location: string;
  date: string;
  category: "Smart City" | "Infrastructure & Building" | "Engineering & Telecommunications" | "Regional Summits";
}

const EVENTS_GALLERY_DATA: GalleryPhoto[] = [
  // Smart City Convention 2026
  {
    id: "sc-1",
    src: "/events/Smart%20City%20Convention%202026/1.jpg",
    alt: "Smart City Convention 2026 Pavilion Demonstration",
    event: "Smart City Convention 2026",
    location: "Metro Manila",
    date: "June 1-2, 2026",
    category: "Smart City"
  },
  {
    id: "sc-2",
    src: "/events/Smart%20City%20Convention%202026/2.jpg",
    alt: "High-density optical backbone presentation to municipal planners",
    event: "Smart City Convention 2026",
    location: "Metro Manila",
    date: "June 1-2, 2026",
    category: "Smart City"
  },
  {
    id: "sc-3",
    src: "/events/Smart%20City%20Convention%202026/3.jpg",
    alt: "Municipal surveillance high-speed fiber termination showcase",
    event: "Smart City Convention 2026",
    location: "Metro Manila",
    date: "June 1-2, 2026",
    category: "Smart City"
  },
  {
    id: "sc-4",
    src: "/events/Smart%20City%20Convention%202026/4.jpg",
    alt: "YFC-BonEagle engineering team technical briefing",
    event: "Smart City Convention 2026",
    location: "Metro Manila",
    date: "June 1-2, 2026",
    category: "Smart City"
  },

  // WORLDBEX
  {
    id: "wb-1",
    src: "/events/WORLDBEX/1.jpg",
    alt: "WORLDBEX Building Construction & Structured Cabling Expo",
    event: "WORLDBEX",
    location: "World Trade Center, Pasay",
    date: "March 12-15, 2026",
    category: "Infrastructure & Building"
  },
  {
    id: "wb-2",
    src: "/events/WORLDBEX/2.jpg",
    alt: "Live Tier-1 cable certification demonstration with AEM TestPro",
    event: "WORLDBEX",
    location: "World Trade Center, Pasay",
    date: "March 12-15, 2026",
    category: "Infrastructure & Building"
  },
  {
    id: "wb-3",
    src: "/events/WORLDBEX/3.jpg",
    alt: "Premium Line Cat 8 high-bandwidth trunk demonstrations",
    event: "WORLDBEX",
    location: "World Trade Center, Pasay",
    date: "March 12-15, 2026",
    category: "Infrastructure & Building"
  },
  {
    id: "wb-4",
    src: "/events/WORLDBEX/4.jpg",
    alt: "Contractor and system integrator delegation at YFC booth",
    event: "WORLDBEX",
    location: "World Trade Center, Pasay",
    date: "March 12-15, 2026",
    category: "Infrastructure & Building"
  },

  // Baguio Smart City Convergence 2025
  {
    id: "bg-1",
    src: "/events/Baguio%20Smart%20City%20Convergence%202025/1.jpg",
    alt: "High-altitude ruggedized fiber deployments for mountainous terrain",
    event: "Baguio Smart City Convergence 2025",
    location: "Baguio City",
    date: "November 26-27, 2026",
    category: "Smart City"
  },
  {
    id: "bg-2",
    src: "/events/Baguio%20Smart%20City%20Convergence%202025/2.jpg",
    alt: "Disaster emergency response communication network session",
    event: "Baguio Smart City Convergence 2025",
    location: "Baguio City",
    date: "November 26-27, 2026",
    category: "Smart City"
  },
  {
    id: "bg-3",
    src: "/events/Baguio%20Smart%20City%20Convergence%202025/3.jpg",
    alt: "Outdoor IP68 fiber terminal splice demonstrations",
    event: "Baguio Smart City Convergence 2025",
    location: "Baguio City",
    date: "November 26-27, 2026",
    category: "Smart City"
  },

  // NICP National ICT Summit
  {
    id: "nicp-1",
    src: "/events/NICP%20National%20ICT%20Summit/1.jpg",
    alt: "NICP National ICT Summit Countryside Distribution Alliances",
    event: "NICP National ICT Summit",
    location: "Iloilo City",
    date: "August 12-13, 2026",
    category: "Regional Summits"
  },
  {
    id: "nicp-2",
    src: "/events/NICP%20National%20ICT%20Summit/2.jpg",
    alt: "Regional telecommunications channel partner alliance forum",
    event: "NICP National ICT Summit",
    location: "Iloilo City",
    date: "August 12-13, 2026",
    category: "Regional Summits"
  },
  {
    id: "nicp-3",
    src: "/events/NICP%20National%20ICT%20Summit/3.jpg",
    alt: "Visayas ICT Council leadership roundtable at YFC-BonEagle",
    event: "NICP National ICT Summit",
    location: "Iloilo City",
    date: "August 12-13, 2026",
    category: "Regional Summits"
  },

  // ClickConex
  {
    id: "cc-1",
    src: "/events/ClickConex/1.jpg",
    alt: "ClickConex Datacenter Patch Management & Enterprise Cabling",
    event: "ClickConex",
    location: "SMX Convention Center",
    date: "June 19-21, 2026",
    category: "Infrastructure & Building"
  },
  {
    id: "cc-2",
    src: "/events/ClickConex/2.jpg",
    alt: "System integrators hands-on modular keystone testing",
    event: "ClickConex",
    location: "SMX Convention Center",
    date: "June 19-21, 2026",
    category: "Infrastructure & Building"
  },
  {
    id: "cc-3",
    src: "/events/ClickConex/3.jpg",
    alt: "Interactive datacenter rack cable routing session",
    event: "ClickConex",
    location: "SMX Convention Center",
    date: "June 19-21, 2026",
    category: "Infrastructure & Building"
  },

  // IECEP MIDCON
  {
    id: "iecep-1",
    src: "/events/IECEP%20MIDCON/1.jpg",
    alt: "IECEP Electronics & Communications Engineers Technical Session",
    event: "IECEP MIDCON",
    location: "Cebu City",
    date: "June 11-12, 2026",
    category: "Engineering & Telecommunications"
  },
  {
    id: "iecep-2",
    src: "/events/IECEP%20MIDCON/2.jpg",
    alt: "Structured cabling standards and transmission fidelity workshop",
    event: "IECEP MIDCON",
    location: "Cebu City",
    date: "June 11-12, 2026",
    category: "Engineering & Telecommunications"
  },
  {
    id: "iecep-3",
    src: "/events/IECEP%20MIDCON/3.jpg",
    alt: "Core fusion splicing accuracy verification with IECEP delegates",
    event: "IECEP MIDCON",
    location: "Cebu City",
    date: "June 11-12, 2026",
    category: "Engineering & Telecommunications"
  },

  // Highlight from viewEvents
  {
    id: "ve-mid",
    src: "/veiwEvents/middle.avif",
    alt: "YFC-BonEagle Regional ICT Convention Highlights",
    event: "YFC-BonEagle Regional Keynote Showcase",
    location: "Metro Manila Hub",
    date: "2026 Annual Highlights",
    category: "Regional Summits"
  }
];

const CATEGORIES_FILTER = [
  "All Events",
  "Smart City",
  "Infrastructure & Building",
  "Engineering & Telecommunications",
  "Regional Summits"
] as const;

const GALLERY_IMAGES_1 = [
  "https://cdn.21st.dev/assets/mirror/db/db8e72b6f6e2f325ec74898fdab6a02f3c0ba7962f3cf0b89f0ee3b22aa2a083.jpg",
  "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
  "https://cdn.21st.dev/assets/mirror/f9/f992831c368ea7e12c51417be55fda812d1502e9bb6730d94bc6b1e0c6a2ae57.jpg",
  "https://cdn.21st.dev/assets/mirror/8c/8c0a104646b9b9d6680c2222cf84cfd3e4e10ada11fd0d0759093db9a69cfd3d.jpg",
];

const GALLERY_IMAGES_2 = [
  "https://cdn.21st.dev/assets/mirror/4e/4eb85747c8113c6edcbec2671a5aa4e62d0569488ad75652c16dd7598a1196e1.jpg",
  "https://cdn.21st.dev/assets/mirror/ab/ab1fd4fd007ecad2ad9a5350341b1013589f05f8f30b8fdd4a35728a800e9fce.jpg",
  "https://cdn.21st.dev/assets/mirror/4d/4de1f4952d0420f95ade25fc723d8042ece00762429cdccb79fd3a29ffe5f33d.jpg",
  "https://cdn.21st.dev/assets/mirror/53/53f281293f06536d7f60b1786b0a39404390a55e1675e99e089d2b72234cf8cb.jpg",
];

const GALLERY_IMAGES_3 = [
  "https://cdn.21st.dev/assets/mirror/35/358a63f0c4cb478488bdf1bfb90ed5fd785c28bcddbf058b4a7287fe8ed75fff.jpg",
  "https://cdn.21st.dev/assets/mirror/e8/e81126a3c16766e36ed84d2226b0b11507e86b999d4d07cd7e88c0f04e14c0eb.jpg",
  "https://cdn.21st.dev/assets/mirror/77/777c9bd220f0c47c9eb699ebbd77fb0c6c9a8d8b0cd77f089bab93a18586d578.jpg",
  "https://cdn.21st.dev/assets/mirror/85/85a98f8253097be06cfdaa5a312c644d4df00749aad17dda4468ab8d3dce7bd0.jpg",
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Events");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = EVENTS_GALLERY_DATA.filter((p) => {
    return selectedCategory === "All Events" || p.category === selectedCategory;
  });

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const openLightboxBySrc = (src: string) => {
    const foundIndex = filteredPhotos.findIndex((p) => p.src === src);
    if (foundIndex !== -1) {
      setLightboxIndex(foundIndex);
    } else {
      const globalIndex = EVENTS_GALLERY_DATA.findIndex((p) => p.src === src);
      if (globalIndex !== -1) {
        setSelectedCategory("All Events");
        setLightboxIndex(globalIndex);
      }
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* 3D ANIMATED SCROLL GALLERY HERO SECTION (exact 21st.dev implementation) */}
      <div className="relative bg-background">
        <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-28 text-center max-w-4xl mx-auto">
          <ContainerAnimated>
            <h1 className="font-serif text-4xl font-extralight md:text-5xl text-foreground">
              Your{" "}
              <span className="font-serif font-extralight text-indigo-600 dark:text-indigo-400">
                one source
              </span>
            </h1>
          </ContainerAnimated>
          <ContainerAnimated>
            <h1 className="font-serif text-4xl font-extralight md:text-5xl text-foreground">
              for all your designs
            </h1>
          </ContainerAnimated>

          <ContainerAnimated className="my-4">
            <p className="leading-normal tracking-tight text-muted-foreground text-sm sm:text-base">
              No waste of time and money, we provide you with
              <br /> collection of designs to plan your next project.
            </p>
          </ContainerAnimated>

          <ContainerAnimated className="flex items-center justify-center gap-2">
            <Button
              className="gap-1 bg-indigo-700 hover:bg-indigo-800 text-white cursor-pointer"
            >
              Book free call <VideoIcon className="size-4" />
            </Button>
            <a href="#gallery-grid">
              <Button variant="link" className="text-secondary-foreground hover:text-primary cursor-pointer">
                About Us
              </Button>
            </a>
          </ContainerAnimated>
        </ContainerStagger>

        <div
          className="pointer-events-none absolute z-10 h-[70vh] w-full"
          style={{
            background: "linear-gradient(to right, gray, rebeccapurple, blue)",
            filter: "blur(84px)",
            mixBlendMode: "screen",
          }}
        />

        <ContainerScroll className="relative h-[350vh]">
          <ContainerSticky className="h-svh">
            <GalleryContainer className="">
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {GALLERY_IMAGES_1.map((imageUrl, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    src={imageUrl}
                    alt="gallery item"
                    onClick={() => openLightboxBySrc(imageUrl)}
                  />
                ))}
              </GalleryCol>
              <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
                {GALLERY_IMAGES_2.map((imageUrl, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    src={imageUrl}
                    alt="gallery item"
                    onClick={() => openLightboxBySrc(imageUrl)}
                  />
                ))}
              </GalleryCol>
              <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
                {GALLERY_IMAGES_3.map((imageUrl, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={index}
                    className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    src={imageUrl}
                    alt="gallery item"
                    onClick={() => openLightboxBySrc(imageUrl)}
                  />
                ))}
              </GalleryCol>
            </GalleryContainer>
          </ContainerSticky>
        </ContainerScroll>
      </div>

      {/* Main Gallery Showcase Section */}
      <section id="gallery-grid" className="scroll-mt-20 px-6 pt-16 pb-8 sm:px-10 lg:px-16 md:pt-20 md:pb-10 bg-background">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Filter Pills Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Filter className="size-3.5 text-primary" /> Filter by Category
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES_FILTER.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25 scale-102"
                      : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid Photo Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative h-80 rounded-3xl overflow-hidden border border-border/80 bg-muted/40 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Photo Image */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {photo.category}
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 inset-x-4 z-10 space-y-1.5 text-white">
                    <p className="text-sm font-extrabold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                      {photo.event}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {photo.alt}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-primary" /> {photo.location}
                      </span>
                      <span>•</span>
                      <span>{photo.date}</span>
                    </div>
                  </div>

                  {/* Hover Expand Icon */}
                  <div className="absolute top-4 right-4 z-10 size-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <Maximize2 className="size-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Convention Chronicle Highlights Section */}
          <div className="pt-16 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                On-Site Chronicle
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                Exhibition Case Studies & Collaborations
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                How YFC-BonEagle demonstrates live optical fiber transmission fidelity, Cat 8 field terminations, and enterprise datacenter containment to regional industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Municipal Grid Deployments",
                  event: "Smart City Convention 2026",
                  summary: "Demonstrating high-density optical feeder trunks and IP68 outdoor termination boxes for automated traffic telemetry and municipal security grids.",
                  tag: "Smart City"
                },
                {
                  title: "High-Rise Structured Cabling Standards",
                  event: "WORLDBEX & ClickConex",
                  summary: "Engaging commercial MEP contractors on low-smoke zero-halogen (LSZH) Cat 6A/7/8 riser trunks and tool-less patch panels to minimize installation times.",
                  tag: "Building Infrastructure"
                },
                {
                  title: "Field Splicing & Tier-1 Certifications",
                  event: "IECEP MIDCON & NICP Summit",
                  summary: "Providing hands-on 6-motor arc fusion splicing workshops and AEM TestPro True-PoE 90W load tests with professional electronics engineers.",
                  tag: "Engineering Audits"
                }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl border border-border/80 bg-card space-y-3 shadow-xs hover:border-primary/40 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {item.tag}
                  </span>
                  <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                  <p className="text-xs text-primary font-semibold font-mono">{item.event}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Invitation Banner */}
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-background border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-black text-foreground">
                Hosting an Industry Convention or Seminar?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Invite YFC-BonEagle's technical engineering team for live structured cabling demonstrations, fusion machine workshops, or Tier-1 certification keynotes.
              </p>
            </div>
            <Link href="/#contact">
              <Button
                className="rounded-full px-8 py-6 text-sm font-bold bg-primary text-primary-foreground shadow-lg hover:shadow-primary/40 shrink-0 cursor-pointer"
              >
                Request Live Exhibition Demo <ArrowRight className="size-4 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            >
              <X className="size-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={nextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors cursor-pointer"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              key={activePhoto.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full flex flex-col items-center space-y-4"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Captions */}
              <div className="text-center text-white space-y-1 max-w-xl">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {activePhoto.event}
                </span>
                <p className="text-sm font-medium text-slate-200 pt-1">{activePhoto.alt}</p>
                <div className="flex items-center justify-center gap-3 text-xs text-slate-400 font-mono">
                  <span>{activePhoto.location}</span>
                  <span>•</span>
                  <span>{activePhoto.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
