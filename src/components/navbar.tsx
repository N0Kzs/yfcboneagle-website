"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "YFC Academy", href: "/#academy" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out flex justify-center">
      <motion.div
        layout
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`transition-all duration-500 ease-out flex items-center justify-between ${
          isScrolled
            ? "mx-auto w-[92%] max-w-7xl mt-4 rounded-full border border-border/80 bg-background/80 px-6 py-3 shadow-xl backdrop-blur-xl"
            : "w-full rounded-none border-b border-border/50 bg-background/90 px-6 sm:px-12 py-5 backdrop-blur-md shadow-sm"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3.5 group" aria-label="YFC-BonEagle Home">
          <Image
            src="/logo/YFC.webp"
            alt="YFC-BonEagle Logo"
            width={300}
            height={240}
            className="h-9 w-auto object-contain group-hover:opacity-85 transition-opacity"
            priority
          />
          <span className="hidden text-sm font-bold tracking-tight sm:block text-foreground">
            YFC-BonEagle <span className="font-semibold text-foreground/90">International Inc.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                  ? false
                  : pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-bold transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-primary"
                    : isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Link href="/#contact">
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground px-5 shadow-sm hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Contact Us <ArrowRight className="size-3.5 ml-1" />
            </Button>
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden fixed inset-x-4 top-20 bg-background/95 backdrop-blur-2xl border border-border rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-50"
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground font-semibold text-lg py-2 border-b border-border/40"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="rounded-full w-full mt-2 cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
