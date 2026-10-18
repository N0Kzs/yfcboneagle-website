"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, animate, useInView } from "motion/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, Users, BookOpen, MapPin, Search, GraduationCap, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";

const tableData = [
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer -- FREE CERTIFICATION", event: "DLSU- Dasmariñas Certification Training", date: "September 12-13, 2025", attended: 14, region: "Luzon" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer -- FREE CERTIFICATION", event: "TUP Certification Training", date: "August 13-14, 2025", attended: 52, region: "Metro Manila" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "EARIST Certification Training", date: "July 29-30, 2025", attended: 24, region: "Metro Manila" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Cebu Certification Training", date: "July 24-25, 2025", attended: 10, region: "Visayas" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "YFC BONEAGLE INTERNATIONAL INC. Certification Training", date: "July 2-3, 2025", attended: 12, region: "Metro Manila" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Koronadal Certification", date: "June 23-24, 2025", attended: 36, region: "Mindanao" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "2nd Batch Manila Certification Training", date: "June 10-11, 2025", attended: 50, region: "Metro Manila" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Davao Certification / YFC Academy Certification", date: "May 2-3, 2025", attended: 26, region: "Mindanao" },
  { courses: "GPON FTTX, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Cagayan De Oro Certification / YFC Academy Certification", date: "April 29-30, 2025", attended: 27, region: "Mindanao" },
  { courses: "AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Cagayan De Oro Certification - USTP / YFC Academy Certification", date: "April 28, 2025", attended: 17, region: "Mindanao" },
  { courses: "AEM, Fiber Optics, Copper Cabling", event: "Philippine Economic Zone Authority (PEZA)", date: "April 25, 2025", attended: 31, region: "Government" },
  { courses: "Copper Cabling, Fiber Optics Cabling - Customized Training", event: "One Commerce / Structured Cabling Certification", date: "April 15, 2025", attended: 3, region: "Enterprise" },
  { courses: "Copper Cabling, Fiber Optics Cabling - Customized Training", event: "DBP", date: "April 10, 2025", attended: 19, region: "Enterprise" },
  { courses: "Copper Cabling, Fiber Optics Cabling - Customized Training", event: "Symmetric Intercontinental / Structured Cabling Certification", date: "February 28, 2025", attended: 5, region: "Enterprise" },
  { courses: "GPON FTTx, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Cebu Certification Training / YFC Academy Certification", date: "February 25, 2025", attended: 18, region: "Visayas" },
  { courses: "GPON FTTx Certificate of Attendance", event: "Boracay IT Association / Product Presentation", date: "February 20, 2025", attended: 28, region: "Visayas" },
  { courses: "GPON FTTx, AEM, Fiber Optics, Copper Cabling, Fusion Splicer", event: "Manila Certification Training / YFC Academy Certification", date: "January 30-31, 2025", attended: 87, region: "Metro Manila" },
  { courses: "GPON FTTx, AEM Certificate of Attendance", event: "Cebu Hotel IT Association / Product Presentation", date: "January 24, 2025", attended: 30, region: "Visayas" },
  { courses: "GPON FTTx, AEM, Fiber Optics, Copper Cabling, Fusion Splicer - Customized Training", event: "University of San Carlos - Cebu / Structured Cabling Certification", date: "December 16-17, 2024", attended: 9, region: "Visayas" }
];

function AnimatedCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function TrainingTable() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Metro Manila", "Luzon", "Visayas", "Mindanao", "Enterprise", "Government"];

  // Page Scroll Parallax
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ambientGlowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const ambientGlowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.3, 0.85, 0.85, 0.3]);

  // Internal Table Scroll Tracking
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleTableScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollTop > 20) {
      setHasScrolled(true);
    }
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)));
    }
  };

  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const matchesSearch =
        item.courses.toLowerCase().includes(search.toLowerCase()) ||
        item.event.toLowerCase().includes(search.toLowerCase()) ||
        item.date.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [search, selectedRegion]);

  const totalAttendees = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.attended, 0);
  }, [filteredData]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mx-auto rounded-3xl p-6 sm:p-10 border border-border/70 bg-card/60 backdrop-blur-2xl shadow-xl relative overflow-hidden"
    >
      {/* Background ambient lighting with parallax scroll */}
      <motion.div
        style={{
          y: ambientGlowY,
          opacity: ambientGlowOpacity,
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[110px] pointer-events-none"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Header and Live Metric Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-3 shadow-sm">
            <GraduationCap className="size-3.5 animate-pulse text-primary" />
            YFC Academy Training
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Training & Seminars Directory
          </h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
            A comprehensive regional record of our certification programs, hands-on structured cabling workshops, and industry seminars.
          </p>
        </motion.div>

        {/* Stats Pill with Animated Live Count */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-3.5 bg-muted/40 hover:bg-muted/60 transition-colors border border-border/80 px-5 py-3 rounded-2xl shrink-0 shadow-sm backdrop-blur-md"
        >
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Users className="size-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Recorded Attendees
            </p>
            <p className="text-2xl font-black text-foreground tabular-nums flex items-baseline gap-1.5">
              <AnimatedCounter key={totalAttendees} value={totalAttendees} />
              <span className="text-xs font-normal text-muted-foreground">in selection</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Filter and Search Controls */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 relative z-10"
      >
        {/* Region Pills with Micro-animations */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {regions.map((region) => (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedRegion === region
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {region}
            </motion.button>
          ))}
        </div>

        {/* Search Input with Focus Animation */}
        <div className="relative w-full sm:w-72">
          <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search seminar or client..."
            className="w-full bg-background/80 border border-border rounded-full pl-9 pr-4 py-2 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
          />
        </div>
      </motion.div>

      {/* Interactive Table Container with Scroll Progress Line & Visual Depth */}
      <div className="rounded-2xl border border-border/70 bg-background/50 backdrop-blur-md overflow-hidden shadow-inner relative">
        {/* Dynamic Scroll Progress Bar */}
        <div className="h-[2px] w-full bg-border/30 overflow-hidden relative z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"
            style={{ width: `${scrollProgress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>

        {/* Scrollable Container */}
        <div
          ref={tableContainerRef}
          onScroll={handleTableScroll}
          className="max-h-[360px] sm:max-h-[420px] overflow-y-auto custom-scrollbar relative"
        >
          <Table>
            <TableHeader className="bg-muted/30 sticky top-0 backdrop-blur-xl z-10 shadow-sm border-b border-border/60">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[42%] text-foreground font-bold py-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <BookOpen className="size-3.5 text-primary" />
                    Courses & Certifications
                  </div>
                </TableHead>
                <TableHead className="w-[30%] text-foreground font-bold">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <MapPin className="size-3.5 text-primary" />
                    Event Location & Client
                  </div>
                </TableHead>
                <TableHead className="w-[18%] text-foreground font-bold">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <CalendarDays className="size-3.5 text-primary" />
                    Date
                  </div>
                </TableHead>
                <TableHead className="w-[10%] text-right text-foreground font-bold">
                  <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <Users className="size-3.5 text-primary" />
                    Attended
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                      No training sessions found matching your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((row, index) => (
                    <motion.tr
                      key={row.event + index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
                      className="transition-all duration-200 hover:bg-primary/5 hover:translate-x-1 border-b border-border/40 group cursor-pointer border-l-2 border-l-transparent hover:border-l-primary"
                    >
                      <TableCell className="font-medium py-3.5">
                        <div className="flex flex-col gap-1">
                          <span className="text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm font-semibold">
                            {row.courses.split("--")[0]}
                          </span>
                          {row.courses.includes("--") && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full w-fit shadow-xs">
                              <Sparkles className="size-2.5 animate-pulse" />
                              {row.courses.split("--")[1].trim()}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors text-xs sm:text-sm">
                        {row.event}
                      </TableCell>
                      <TableCell className="text-muted-foreground tabular-nums whitespace-nowrap text-xs">
                        {row.date}
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground tabular-nums text-xs sm:text-sm">
                        <span className="px-2.5 py-1 rounded-md bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-colors border border-border/50">
                          {row.attended}
                        </span>
                      </TableCell>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>

        {/* Floating Scroll Cue (Fades out when user begins scrolling) */}
        <AnimatePresence>
          {!hasScrolled && filteredData.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-background/90 border border-border/80 shadow-md backdrop-blur-md text-[11px] font-medium text-muted-foreground"
            >
              <ChevronDown className="size-3 animate-bounce text-primary" />
              <span>Scroll to view {filteredData.length} recorded sessions</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
