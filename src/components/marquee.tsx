"use client";

import React from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = "left", speed = 40, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden flex relative w-full ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        <div className="flex gap-16 px-8 items-center shrink-0">
          {items.map((item, i) => (
            <div key={`first-${i}`}>{item}</div>
          ))}
        </div>
        <div className="flex gap-16 px-8 items-center shrink-0">
          {items.map((item, i) => (
            <div key={`second-${i}`}>{item}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
