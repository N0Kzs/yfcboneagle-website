"use client";

import React from "react";
import Link from "next/link";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { ArrowUpRight } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/veiwEvents/middle.avif",
    alt: "YFC-BonEagle Featured Events & Conventions Highlight",
  },
  {
    src: "/veiwEvents/1.png",
    alt: "YFC-BonEagle Exhibition Showcase",
  },
  {
    src: "/veiwEvents/2.jpg",
    alt: "YFC-BonEagle Industry Summit",
  },
  {
    src: "/veiwEvents/3.jpg",
    alt: "YFC-BonEagle Technology Convergence",
  },
  {
    src: "/veiwEvents/4.png",
    alt: "YFC-BonEagle Regional ICT Pavilion",
  },
  {
    src: "/veiwEvents/5.png",
    alt: "YFC-BonEagle Solutions Exposition",
  },
  {
    src: "/veiwEvents/6.jpg",
    alt: "YFC-BonEagle Technology Demonstration",
  },
];

export function EventsGallerySection() {
  return (
    <section className="relative z-20 bg-background overflow-visible flex flex-col items-center">
      <div className="w-full">
        <ZoomParallax images={GALLERY_IMAGES}>
          <Link
            href="#events"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold uppercase tracking-widest text-xs border border-white/60 hover:border-white hover:scale-105 active:scale-95 transition-all drop-shadow-lg"
          >
            <span>View events</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </ZoomParallax>
      </div>
    </section>
  );
}
