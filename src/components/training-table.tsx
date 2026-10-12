"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarDays, Users, BookOpen, MapPin, Search, GraduationCap, Award, Sparkles } from "lucide-react";

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

export function TrainingTable() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Metro Manila", "Luzon", "Visayas", "Mindanao", "Enterprise", "Government"];

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
    <div className="w-full mx-auto rounded-3xl p-6 sm:p-10 border border-border/70 bg-card/60 backdrop-blur-2xl shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header and Live Metric Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <GraduationCap className="size-3.5" />
            YFC Academy Training
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Training & Seminars Directory
          </h3>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed">
            A comprehensive regional record of our certification programs, hands-on structured cabling workshops, and industry seminars.
          </p>
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-3 bg-muted/40 border border-border/80 px-5 py-3 rounded-2xl shrink-0">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Users className="size-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              Recorded Attendees
            </p>
            <p className="text-2xl font-black text-foreground tabular-nums">
              {totalAttendees} <span className="text-xs font-normal text-muted-foreground">in selection</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
        {/* Region Pills */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedRegion === region
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search seminar or client..."
            className="w-full bg-background/80 border border-border rounded-full pl-9 pr-4 py-2 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      {/* Interactive Table Container */}
      <div className="rounded-2xl border border-border/70 bg-background/50 backdrop-blur-md overflow-hidden shadow-inner">
        <div className="max-h-[550px] overflow-y-auto custom-scrollbar">
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
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
                      className="transition-colors hover:bg-primary/5 border-b border-border/40 group cursor-pointer"
                    >
                      <TableCell className="font-medium py-3.5">
                        <div className="flex flex-col gap-1">
                          <span className="text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm font-semibold">
                            {row.courses.split("--")[0]}
                          </span>
                          {row.courses.includes("--") && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full w-fit">
                              <Sparkles className="size-2.5" />
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
                        <span className="px-2.5 py-1 rounded-md bg-muted/50 border border-border/50">
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
      </div>
    </div>
  );
}
