"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground px-6 py-8 text-background sm:px-10 lg:px-16 md:py-10 border-t border-background/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src="/logo/YFC.webp"
                alt="YFC-BonEagle Logo"
                width={300}
                height={240}
                className="h-10 w-auto object-contain brightness-0 invert group-hover:opacity-85 transition-opacity"
              />
              <span className="text-sm font-bold tracking-tight">YFC-BonEagle International Inc.</span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-6 text-background/60">
              Empowering connections through premier ICT products, high-speed connectivity solutions, and regional manufacturing expertise across the Asia Pacific.
            </p>
            <div className="mt-7 flex gap-2">
              {[
                { name: "LinkedIn", label: "in", href: "https://linkedin.com" },
                { name: "Facebook", label: "f", href: "https://facebook.com" },
                { name: "Instagram", label: "ig", href: "https://instagram.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  aria-label={`YFC-BonEagle ${social.name}`}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-full border border-background/20 text-xs font-semibold transition-colors hover:bg-background hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              city: "Manila",
              label: "Main Distribution Hub",
              address: "5th Flr, New Gold Bldg, #1579 F.T Benitez St., Ermita, Manila",
            },
            {
              city: "Cebu",
              label: "Extension Office",
              address: "2nd Flr, Norkis Cyberpark, A.S Fortuna St., Mandaue City, Cebu",
            },
            {
              city: "Bataan",
              label: "Manufacturing Facility",
              address: "Lot 1-4, Blk 15, Hermosa Ecozone Industrial Park, Hermosa, Bataan",
            },
          ].map((loc) => (
            <div key={loc.city}>
              <p className="text-sm font-semibold flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" /> {loc.city}
              </p>
              <p className="mt-1 text-xs text-background/50">{loc.label}</p>
              <p className="mt-4 max-w-[200px] text-xs leading-5 text-background/70">{loc.address}</p>
              <Link
                href="/#locations"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-background/80 hover:text-white transition-colors"
              >
                View on map <ArrowRight className="size-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-background/15 pt-4 text-xs text-background/50 sm:flex-row">
          <span>© 2026 YFC-BonEagle International Inc. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-primary" /> Built on trust. Connected by expertise.
          </span>
        </div>
      </div>
    </footer>
  );
}
