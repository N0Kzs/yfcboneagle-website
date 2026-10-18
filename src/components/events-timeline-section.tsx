"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion, useMotionValueEvent, useSpring } from "motion/react";
import Stack from "@/components/ui/stack";
import { Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { TrainingTable } from "@/components/training-table";

interface EventItem {
  title: string;
  period: string;
  location?: string;
  description: string;
  images: string[];
}

const EVENTS_DATA: EventItem[] = [
  {
    title: "Smart City Convention 2026",
    period: "June 1-2, 2026",
    location: "Metro Manila",
    description: "Advancing urban connectivity and high-throughput optical backbone infrastructure for smart municipal grids.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/Smart%20City%20Convention%202026/${n}.jpg`),
  },
  {
    title: "WORLDBEX",
    period: "March 12-15, 2026",
    location: "World Trade Center, Pasay",
    description: "Showcasing premier structured cabling systems, fire-rated industrial cords, and building-wide LAN solutions.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/WORLDBEX/${n}.jpg`),
  },
  {
    title: "Baguio Smart City Convergence 2025",
    period: "November 26 - 27, 2026",
    location: "Baguio City",
    description: "Deploying robust networks in high-altitude environments and mountainous terrain for emergency responder channels.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/Baguio%20Smart%20City%20Convergence%202025/${n}.jpg`),
  },
  {
    title: "NICP National ICT Summit",
    period: "August 12-13, 2026",
    location: "Iloilo City",
    description: "Empowering regional countryside development through robust ICT distribution hubs and channel partner alliances.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/NICP%20National%20ICT%20Summit/${n}.jpg`),
  },
  {
    title: "ClickConex",
    period: "June 19-21, 2026",
    location: "SMX Convention Center",
    description: "Engaging system integrators with enterprise cabling accessories and smart data center patch management.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/ClickConex/${n}.jpg`),
  },
  {
    title: "IECEP MIDCON",
    period: "June 11-12, 2026",
    location: "Cebu City",
    description: "Gathering premier electronics and communications engineers for deep dives into SCS standards and transmission fidelity.",
    images: [1, 2, 3, 4, 5, 6].map((n) => `/events/IECEP%20MIDCON/${n}.jpg`),
  },
];

export function EventsTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Overall scroll tracking across horizontal timeline + slide-up card cover
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.5,
  });

  const [scrollWidth, setScrollWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const updateDimensions = () => {
        if (scrollRef.current) {
          setScrollWidth(scrollRef.current.scrollWidth);
          setViewportWidth(window.innerWidth);
        }
      };

      updateDimensions();

      const resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });

      resizeObserver.observe(scrollRef.current);
      window.addEventListener("resize", updateDimensions);

      return () => {
        if (scrollRef.current) {
          resizeObserver.unobserve(scrollRef.current);
        }
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only track timeline items during the horizontal panning phase (0 to 0.60)
    const normalized = Math.min(1, Math.max(0, latest / 0.60));
    const tip = normalized * window.innerWidth;

    let current = -1;
    for (let i = 0; i < EVENTS_DATA.length; i++) {
      const el = itemRefs.current[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        const start = rect.left;
        const nextEl = itemRefs.current[i + 1];
        const end = nextEl ? nextEl.getBoundingClientRect().left : rect.left + rect.width;

        if (tip >= start && tip < end) {
          current = i;
          break;
        }
      }
    }
    setActiveIndex(current);
  });

  // Phase 1: Horizontal timeline panning (0 -> 0.60)
  const xTransform = useTransform(
    smoothProgress,
    [0, 0.60],
    [0, -Math.max(0, scrollWidth - viewportWidth + 300)]
  );
  const opacityTransform = useTransform(smoothProgress, [0, 0.05], [0, 1]);
  const progressWidth = useTransform(smoothProgress, [0, 0.60], ["0%", "100%"]);

  // Phase 2: Curved card slides UP and covers timeline (0.62 -> 0.84)
  const cardY = useTransform(
    smoothProgress,
    [0.62, 0.84],
    ["105vh", "0vh"]
  );

  // Timeline parallax and exit when card covers it
  const timelineScale = useTransform(smoothProgress, [0.62, 0.84], [1, 0.92]);
  const timelineOpacity = useTransform(smoothProgress, [0.62, 0.82], [1, 0.15]);
  const timelineBlur = useTransform(smoothProgress, [0.62, 0.84], [0, 6]);

  return (
    <div
      className="w-full bg-background font-sans relative border-b border-border/40"
      ref={containerRef}
      style={{ height: "620vh" }}
      id="events"
    >
      {/* Invisible anchor target for Academy navbar / CTA links */}
      <div id="academy" className="absolute top-[78%] left-0 w-1 h-1 pointer-events-none opacity-0" />

      {/* Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-30">
        
        {/* Layer 1: Timeline Plane (Scales & Dims as Card Covers It) */}
        <motion.div
          style={{
            scale: timelineScale,
            opacity: timelineOpacity,
            filter: useTransform(timelineBlur, (b) => `blur(${b}px)`),
          }}
          className="relative w-full h-full flex flex-col justify-center overflow-hidden origin-center"
        >
          {/* Header Area */}
          <div className="absolute top-12 md:top-20 inset-x-0 px-6 sm:px-10 lg:px-16 z-20 w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                In the field
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-4 mb-3 tracking-tight text-foreground">
                Recent Events & Conventions
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
                Showcasing our latest regional industry collaborations and structured cabling demonstrations across Asia Pacific.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Track & Items */}
          <div className="relative w-full flex items-center justify-center h-full">
            {/* Background Track Line */}
            <div className="absolute left-0 w-full top-1/2 -translate-y-1/2 overflow-hidden h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Glowing Animated Progress Line */}
            <motion.div
              style={{
                width: progressWidth,
                opacity: opacityTransform,
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-primary via-blue-500 to-transparent rounded-full z-10 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            />

            {/* Horizontal Scrolling Items */}
            <motion.div
              ref={scrollRef}
              style={{ x: xTransform }}
              className="flex flex-row items-center px-12 md:px-32 w-max gap-16 md:gap-28 absolute left-0 top-1/2 -translate-y-1/2 z-20"
            >
              {EVENTS_DATA.map((item, index) => {
                const isEven = index % 2 === 0;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={item.title}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="relative w-[340px] md:w-[480px] shrink-0 h-0 group cursor-pointer"
                  >
                    {/* Circle marker on line */}
                    <div
                      className={cn(
                        "absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center border-2 border-border z-30 transition-transform duration-500 shadow-lg",
                        isActive ? "scale-125 border-primary" : "group-hover:scale-125 group-hover:border-primary"
                      )}
                    >
                      <div
                        className={cn(
                          "h-4 w-4 rounded-full transition-colors duration-500",
                          isActive ? "bg-primary" : "bg-muted group-hover:bg-primary"
                        )}
                      />
                    </div>

                    {/* Title Preview (fades out smoothly on active or hover) */}
                    <div
                      className={cn(
                        "absolute left-8 w-[280px] md:w-[380px] transition-all duration-300 z-20 pointer-events-none",
                        !isEven ? "bottom-6" : "top-6",
                        isActive ? "opacity-0 scale-95" : "group-hover:opacity-0 group-hover:scale-95 opacity-100"
                      )}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-foreground/70 font-semibold mt-1 flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" />
                        {item.period}
                      </p>
                    </div>

                    {/* Date Badge on opposite side */}
                    <div
                      className={cn(
                        "absolute left-8 transition-all duration-300 z-20 pointer-events-none",
                        !isEven ? "top-6" : "bottom-6",
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                      )}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-sm">
                        <Calendar className="size-3 text-primary" />
                        <span className="text-xs font-mono font-semibold text-foreground">{item.period}</span>
                      </div>
                    </div>

                    {/* Expandable Rich Event Card with ReactBits Stack */}
                    <div
                      className={cn(
                        "absolute left-8 w-full pr-4 transition-all duration-500 ease-out z-30",
                        !isEven ? "bottom-4" : "top-4",
                        isActive
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                      )}
                    >
                      <div className="p-6 rounded-3xl bg-card border border-border shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                        {/* Left: Info */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                            <Sparkles className="size-3.5" />
                            <span>{item.period}</span>
                          </div>
                          <h4 className="text-xl font-extrabold text-foreground tracking-tight">{item.title}</h4>
                          <p className="text-sm text-foreground/85 dark:text-foreground/80 font-medium leading-relaxed">
                            {item.description}
                          </p>
                          {item.location && (
                            <div className="flex items-center gap-1.5 text-xs text-foreground/75 font-semibold pt-1">
                              <MapPin className="size-3.5 text-primary" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Right: ReactBits Interactive Stack Photo Deck */}
                        <div className="w-[180px] h-[210px] shrink-0 relative">
                          <Stack
                            cards={item.images.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`${item.title} photo ${i + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ))}
                            layout="fan"
                            visible={4}
                            spread={0.6}
                            depth={0.4}
                            radius={16}
                            shadow={true}
                            sendToBackOnClick={true}
                            autoplay={true}
                            autoplayDelay={4000}
                            pauseOnHover={true}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 2: CURVED OVERLAY CARD - Slides UP and covers the timeline with TrainingTable */}
        <motion.div
          style={{
            y: cardY,
          }}
          className="absolute inset-0 z-40 bg-background dark:bg-zinc-950 rounded-t-[48px] sm:rounded-t-[64px] md:rounded-t-[80px] border-t-2 border-x-2 border-border/80 shadow-[0_-25px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_-35px_90px_rgba(0,0,0,0.85)] overflow-y-auto overflow-x-hidden flex flex-col justify-start sm:justify-center py-6 sm:py-10 md:py-12 px-4 sm:px-8 lg:px-16"
        >
          {/* Top Grab Handle Pill */}
          <div className="mx-auto w-14 h-1.5 rounded-full bg-muted-foreground/30 mb-4 shrink-0" />

          {/* Training Table Container */}
          <div className="w-full max-w-7xl mx-auto">
            <TrainingTable />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
