"use client";

import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) =>
    decimals > 0
      ? latest.toFixed(decimals)
      : Math.floor(latest).toLocaleString()
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ProfessionalStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  interface StatItem {
    value: number;
    decimals: number;
    suffix: string;
    label: string;
    href: string;
    cta: string;
  }

  const stats: StatItem[] = [
    {
      value: 10000,
      decimals: 0,
      suffix: "+",
      label: "Trained Individuals",
      href: "#academy",
      cta: "Explore Academy",
    },
    {
      value: 1000,
      decimals: 0,
      suffix: "+",
      label: "Channel Partners",
      href: "#solutions",
      cta: "Partner Network",
    },
    {
      value: 30,
      decimals: 0,
      suffix: "+",
      label: "Industry Partners",
      href: "#about",
      cta: "Our Alliances",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-20 sm:py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Badge: Regional ICT Distribution Hub */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-muted/80 dark:bg-zinc-900 border border-border/80 text-foreground px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60"
              />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </span>
            Regional ICT Distribution Hub
          </div>
        </div>

        {/* Main Heading with Block Reveal Animation */}
        <div className="text-center max-w-5xl mx-auto relative text-foreground px-4 space-y-2 md:space-y-3">
          {[
            { text: "We connect businesses, communities,", color: "#1b3073", delay: 0 },
            { text: "and possibilities through", color: "#10b981", delay: 0.15 },
            { text: "trusted ICT infrastructure and", color: "#f59e0b", delay: 0.3 },
            { text: "a stronger regional channel network.", color: "#ef4444", delay: 0.45 },
          ].map((line, i) => (
            <div key={i} className="relative block overflow-hidden py-1.5">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: line.delay + 0.35,
                  duration: 0.01,
                }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-black leading-tight tracking-tighter"
              >
                {line.text}
              </motion.h2>

              {/* The Revealer Block */}
              <motion.div
                initial={{ clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{
                  clipPath:
                    i % 2 === 0
                      ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"]
                      : ["inset(0 0 0 100%)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"],
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.75,
                  times: [0, 0.45, 0.55, 1],
                  delay: line.delay,
                  ease: [0.85, 0, 0.15, 1],
                }}
                className="absolute inset-0 z-10"
                style={{ backgroundColor: line.color }}
              />
            </div>
          ))}
        </div>

        {/* Glassmorphic Stats Bar (3 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-card/60 backdrop-blur-xl mt-14 sm:mt-16 w-full mx-auto px-8 py-10 border rounded-3xl border-border/70 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow inside the bar */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-primary/10 blur-[100px] pointer-events-none" />

          {stats.map((stat, index) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="flex-1 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center justify-center relative h-full group py-2">
                {index !== 0 && (
                  <div className="hidden sm:block w-0.5 h-14 border border-dashed border-border absolute -left-4" />
                )}

                <div className="flex flex-col items-center text-center transition-all duration-300 group-hover:opacity-40">
                  <span className="text-[11px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tighter flex items-baseline">
                    <Counter value={stat.value} decimals={stat.decimals} />
                    <span className="text-xl sm:text-3xl font-bold ml-0.5 text-primary">
                      {stat.suffix}
                    </span>
                  </div>
                </div>

                {/* Smoky / Foggy Hover Reveal */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-[-20px] flex items-center justify-center z-20 pointer-events-none"
                    >
                      <div
                        className="absolute inset-0 bg-background/95 backdrop-blur-[50px]"
                        style={{
                          maskImage: "radial-gradient(circle, black 45%, transparent 95%)",
                          WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 95%)",
                        }}
                      />

                      <span className="relative text-xs font-bold text-foreground flex items-center gap-1.5 drop-shadow-md z-30">
                        {stat.cta}
                        <ExternalLink className="w-3.5 h-3.5 text-primary" />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
