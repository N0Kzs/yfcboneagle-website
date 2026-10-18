import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/navbar";
import { HeroCoverSection } from "@/components/hero-cover-section";
import { EventsTimelineSection } from "@/components/events-timeline-section";
import { CertificationsSection } from "@/components/certifications-section";
import { EventsGallerySection } from "@/components/events-gallery-section";
import { CompanyProfileSection } from "@/components/company-profile-section";
import { MapSection } from "@/components/map-section";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      {/* Dynamic Navbar: Full-width at top, morphs to floating pill on scroll */}
      <Navbar />

      {/* 1, 2 & 3. Hero + Sticky Curved Card with Regional Hub (Panel 1) and Products Loop (Panel 2) */}
      <HeroCoverSection />

      {/* 4. In the field: Recent Events & Conventions + Scroll Card Cover with Training & Seminars Directory */}
      <EventsTimelineSection />

      {/* 5. Professional Certifications & Course Tracks */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 md:py-32 bg-background border-b border-border/40">
        <div className="mx-auto max-w-7xl">
          <CertificationsSection />
        </div>
      </section>

      {/* 6. Events Picture Showcase Gallery (Zoom Parallax from Journal & Insights) */}
      <EventsGallerySection />

      {/* 7. Introduction of the Company Profile (2 Columns: Overview & Deck + 3 Pillars) */}
      <CompanyProfileSection />

      {/* 8. Regional Hubs & Factory Locations (MapLibre Interactive Map) */}
      <section id="locations" className="px-6 py-24 sm:px-10 lg:px-16 md:py-32 bg-background border-b border-border/40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              Regional Presence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-4">
              Our Offices & Manufacturing Facilities
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Strategic distribution centers and state-of-the-art production hubs serving the Philippines and Southeast Asia.
            </p>
          </div>
          <div className="mx-auto max-w-[1400px]">
            <MapSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground px-6 py-16 text-background sm:px-10 lg:px-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/YFC.webp"
                  alt="YFC-BonEagle Logo"
                  width={300}
                  height={240}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <span className="text-sm font-bold tracking-tight">YFC-BonEagle International Inc.</span>
              </div>
              <p className="mt-6 max-w-xs text-sm leading-6 text-background/60">
                Empowering connections through trusted ICT products, solutions, and regional manufacturing expertise across the Asia Pacific.
              </p>
              <div className="mt-7 flex gap-2">
                {["in", "f", "ig"].map((social) => (
                  <a
                    key={social}
                    aria-label={`YFC-BonEagle ${social} social link`}
                    href="#contact"
                    className="grid size-9 place-items-center rounded-full border border-background/20 text-xs font-semibold transition-colors hover:bg-background hover:text-foreground"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {[
              ["Manila", "Main Hub", "5th Flr, New Gold Bldg, #1579 F.T Benitez St., Ermita, Manila"],
              ["Cebu", "Extension Office", "2nd Flr, Norkis Cyberpark, A.S Fortuna St., Mandaue City, Cebu"],
              ["Bataan", "Manufacturing Facility", "Lot 1-4, Blk 15, Hermosa Ecozone Industrial Park, Hermosa, Bataan"],
            ].map(([city, label, address]) => (
              <div key={city}>
                <p className="text-sm font-semibold">{city}</p>
                <p className="mt-1 text-xs text-background/50">{label}</p>
                <p className="mt-4 max-w-[200px] text-xs leading-5 text-background/70">{address}</p>
                <a
                  href="#locations"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-background/80 hover:text-white transition-colors"
                >
                  View on map <ArrowRight className="size-3" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-background/15 pt-6 text-xs text-background/50 sm:flex-row">
            <span>© 2026 YFC-BonEagle International Inc. All rights reserved.</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-3.5" /> Built on trust. Connected by expertise.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
