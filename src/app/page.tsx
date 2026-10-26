import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
      <section id="locations" className="px-6 pt-20 pb-10 sm:px-10 lg:px-16 md:pt-28 md:pb-12 bg-background border-b border-border/40">
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

      {/* Reusable Footer */}
      <Footer />
    </main>
  );
}
