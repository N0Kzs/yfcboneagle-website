"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/ui/logo-loop";
import { Cpu, Network, Cable, Server, ShieldCheck, Zap, Radio, Layers, Wifi, RadioTower, Database, Box } from "lucide-react";

export function ProductsLoopSection({ embedded = false }: { embedded?: boolean }) {
  const manufacturedLogos = [
    { src: "/products%20logo/manufactured/1.png", alt: "Bestlink Netware" },
    { src: "/products%20logo/manufactured/2.png", alt: "Bestlink Uninterruptible Power Supply" },
    { src: "/products%20logo/manufactured/3.png", alt: "Bestlink Smart Datacenter" },
    { src: "/products%20logo/manufactured/4.png", alt: "Prime us Modular Data Center" },
    { src: "/products%20logo/manufactured/5.png", alt: "Premium Line" },
  ];

  const distributedLogos = [
    { src: "/products%20logo/distributed/1.png", alt: "VIVOTEK" },
    { src: "/products%20logo/distributed/2.webp", alt: "AEM" },
    { src: "/products%20logo/distributed/3.png", alt: "PLANET Networking" },
    { src: "/products%20logo/distributed/4.png", alt: "DELTA" },
    { src: "/products%20logo/distributed/5.png", alt: "JOINWIT" },
    { src: "/products%20logo/distributed/6.png", alt: "Lightera" },
    { src: "/products%20logo/distributed/7.png", alt: "Tiandy" },
  ];

  const manufacturedItems: LogoItem[] = manufacturedLogos.map((item, i) => ({
    node: (
      <div
        key={`mfg-${i}`}
        className="flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/95 border border-border/80 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 h-24 sm:h-28 md:h-30 lg:h-32 min-w-[220px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px]"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[180px] sm:max-w-[210px] md:max-w-[240px] object-contain select-none"
          loading="lazy"
        />
      </div>
    ),
  }));

  const distributedItems: LogoItem[] = distributedLogos.map((item, i) => ({
    node: (
      <div
        key={`dist-${i}`}
        className="flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/95 border border-border/80 shadow-md hover:shadow-lg hover:border-blue-500/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 h-24 sm:h-28 md:h-30 lg:h-32 min-w-[220px] sm:min-w-[250px] md:min-w-[280px] lg:min-w-[300px]"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[180px] sm:max-w-[210px] md:max-w-[240px] object-contain select-none"
          loading="lazy"
        />
      </div>
    ),
  }));

  return (
    <section className={`w-full flex flex-col justify-center items-center relative overflow-hidden ${
      embedded ? "h-full pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 bg-transparent justify-center" : "min-h-screen py-24 sm:py-32 bg-background border-b border-border/40"
    }`}>
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-6 w-full text-center relative z-10 ${
        embedded ? "mb-4 sm:mb-6 md:mb-7" : "mb-16 sm:mb-20"
      }`}>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
          Regional Portfolio
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mt-2.5 sm:mt-3 text-balance">
          Products Manufactured and Distributed
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Supplying certified, high-grade structured cabling and telecommunication hardware across the Asia Pacific region.
        </p>
      </div>

      <div className={`w-full flex flex-col relative z-10 ${
        embedded ? "gap-6 sm:gap-7 md:gap-9" : "gap-12 sm:gap-16"
      }`}>
        {/* Products Manufactured - Left Moving */}
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5 px-4">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-foreground/80">
              Products Manufactured
            </p>
          </div>
          <div className="w-full overflow-hidden py-1 sm:py-2">
            <LogoLoop
              logos={manufacturedItems}
              direction="left"
              speed={38}
              gap={36}
              logoHeight={130}
              pauseOnHover={true}
              scaleOnHover={false}
              fadeOut={true}
            />
          </div>
        </div>

        {/* Products Distributed - Right Moving */}
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5 px-4">
            <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-foreground/80">
              Products Distributed
            </p>
          </div>
          <div className="w-full overflow-hidden py-1 sm:py-2">
            <LogoLoop
              logos={distributedItems}
              direction="right"
              speed={38}
              gap={36}
              logoHeight={130}
              pauseOnHover={true}
              scaleOnHover={false}
              fadeOut={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
