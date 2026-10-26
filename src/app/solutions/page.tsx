"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Download,
  FileText,
  Sparkles,
  Server,
  Cable,
  CheckCircle2,
  Cpu,
  Layers,
  X,
  Plus,
  Send,
  Eye,
  Info,
  Maximize2,
  Box,
  Gauge,
  Wifi,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Table as TableIcon,
  Check,
  Trash2,
  FileSpreadsheet,
  Pause,
  Play,
  RotateCcw,
  SlidersHorizontal,
  FolderOpen,
  ClipboardList
} from "lucide-react";
import { CATALOG_PRODUCTS, type ProductItem } from "@/data/catalog-products";

// ============================================================================
// BRAND & CATEGORY DEFINITIONS WITH LOCAL ASSET PATHS
// ============================================================================

interface BrandInfo {
  id: string;
  name: string;
  logo: string;
  shortName: string;
}

const BRANDS_DATA: BrandInfo[] = [
  { id: "all", name: "All Brands", logo: "", shortName: "ALL" },
  { id: "premium-line", name: "Premium Line", logo: "/ProductSideLogo/Premium Line.png", shortName: "PL" },
  { id: "prime", name: "Prime", logo: "/ProductSideLogo/Prime.jpg", shortName: "PR" },
  { id: "bestlink", name: "Bestlink Netware", logo: "/ProductSideLogo/Bestlink Netware.jpg", shortName: "BN" },
  { id: "aem", name: "AEM TestPro", logo: "/ProductSideLogo/AEM TestPro.webp", shortName: "AEM" },
  { id: "vitec", name: "VITEC", logo: "/ProductSideLogo/VITEC.jpg", shortName: "VT" },
  { id: "joinwit", name: "Joinwit", logo: "/ProductSideLogo/Joinwit.png", shortName: "JW" },
  { id: "shinewaytech", name: "Shinewaytech", logo: "/ProductSideLogo/Shinewaytech.jpg", shortName: "SW" },
  { id: "planet", name: "Planet", logo: "/ProductSideLogo/Planet.png", shortName: "PLT" },
  { id: "iskratel", name: "Skratel / Iskratel", logo: "/ProductSideLogo/Iskratel.png", shortName: "SK" }
];

const CATEGORIES_DATA = [
  "All Categories",
  "Modular Data Center",
  "Test Equipment",
  "Data Cabinet",
  "Structured Cabling",
  "Fusion Machine",
  "Digital Signage Solution",
  "Active Devices"
] as const;

// CATALOG_PRODUCTS is loaded from "@/data/catalog-products" (149 products across 9 brands)

// ============================================================================
// FLAGSHIP SHOWCASE SLIDES DEFINITION (STABLE ZERO-REFRESH SLIDER)
// ============================================================================

interface FlagshipSlideData {
  id: string;
  tabTitle: string;
  badgeTag: string;
  series: string;
  brand: string;
  title: string;
  description: string;
  tagBgClass: string;
  tagDotClass: string;
  metrics: { label: string; value: string; sub: string; colorClass: string }[];
  checkpoints: string[];
  product: ProductItem;
  image: string;
  altText: string;
  rfqButtonText: string;
  badgeDotColor: string;
  badgeTextColor: string;
  badgeSlotTitle: string;
}

const FLAGSHIP_SLIDES: FlagshipSlideData[] = [
  {
    id: "slide-aem",
    tabTitle: "AEM TestPro Certifier",
    badgeTag: "FLAGSHIP TEST & CERTIFICATION • ANSI/TIA LEVEL 2G",
    series: "CV100 SERIES",
    brand: "AEM TestPro Precision Labs",
    title: "AEM TestPro Multifunction Cable Certifier",
    description:
      "Industry-leading dual-ended enterprise cable certifier with a benchmark 6-second Cat 6A Autotest, 3,000 MHz (3GHz) RF engine, and TruePower™ 90W PoE under full load validation.",
    tagBgClass: "bg-blue-100 text-blue-700 border-blue-200",
    tagDotClass: "bg-blue-600",
    metrics: [
      { label: "AUTOTEST SPEED", value: "6 Sec Cat 6A", sub: "Full telemetry", colorClass: "text-blue-700" },
      { label: "RF FREQUENCY", value: "3,000 MHz", sub: "3GHz Matrix Engine", colorClass: "text-slate-900" },
      { label: "POE VALIDATION", value: "90W TruePower", sub: "Class 8 Load", colorClass: "text-emerald-600" },
      { label: "ACCURACY TIER", value: "Level 2G", sub: "ANSI/TIA-1152-A", colorClass: "text-purple-700" }
    ],
    checkpoints: [
      "Dual Smart Handsets — Full touchscreens on both units",
      "Single-Pair Ethernet (SPE) & 10GBASE-T SNR validation",
      "Cat 8 / Class II Certification up to 3,000 MHz sweep",
      "Automated CloudSync PDF certification test submittals"
    ],
    product: CATALOG_PRODUCTS.find((p) => p.name.includes("K61E") && p.brandId === "aem") || CATALOG_PRODUCTS[0],
    image: "/Solutions-Products/AEM TestPro/AEM TestPro K61E.jpg",
    altText: "AEM TestPro K61E",
    rfqButtonText: "Add to RFQ Spec Pack",
    badgeDotColor: "bg-blue-400",
    badgeTextColor: "text-blue-300",
    badgeSlotTitle: "Flagship Showcase Slot"
  },
  {
    id: "slide-prime",
    tabTitle: "Prime Modular Micro DC",
    badgeTag: "EDGE POD DEPLOYMENT • TIER III TOPOLOGY",
    series: "MDC-4200 SERIES",
    brand: "Prime Data Infrastructure",
    title: "Prime US Modular Micro Data Center",
    description:
      "Self-contained all-in-one edge pod engineered with inverter precision cooling, N+1 modular rack UPS, hermetic cold-aisle containment, and sub-1.25 nominal PUE rating.",
    tagBgClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
    tagDotClass: "bg-emerald-600",
    metrics: [
      { label: "PUE EFFICIENCY", value: "< 1.25 Spec", sub: "Micro-climate Pod", colorClass: "text-emerald-600" },
      { label: "RACK DENSITY", value: "42U / 12kW", sub: "Heavy-Duty Frame", colorClass: "text-slate-900" },
      { label: "UPS BACKUP", value: "N+1 Modular", sub: "Zero Downtime", colorClass: "text-blue-700" },
      { label: "INGRESS RATING", value: "IP55 Seal", sub: "Cold Aisle Glass", colorClass: "text-purple-700" }
    ],
    checkpoints: [
      "Integrated Inverter In-Row precision cooling module",
      "Smart metered PDU with remote outlet power cycling",
      "Zero-bend overhead 100G fiber raceway management",
      "Biometric smart access cold aisle door with interlock"
    ],
    product: CATALOG_PRODUCTS.find((p) => p.name.includes("5kW") && p.brandId === "prime") || CATALOG_PRODUCTS[1],
    image: "/Solutions-Products/Prime/PRIME 5kW Enterprise Data Center.jpg",
    altText: "Prime 5kW Data Center",
    rfqButtonText: "Add System to RFQ",
    badgeDotColor: "bg-emerald-400",
    badgeTextColor: "text-emerald-300",
    badgeSlotTitle: "Modular Edge Pod Slot"
  },
  {
    id: "slide-planet",
    tabTitle: "Planet Industrial PoE+ Core",
    badgeTag: "INDUSTRIAL L3 MANAGED • 360W POE+ BUDGET",
    series: "IGS-6325-16P4S",
    brand: "Planet Networking & Switching",
    title: "Planet Industrial 16-Port Managed PoE+ Switch",
    description:
      "Heavy-duty DIN-rail Layer 3 managed industrial switch delivering 360W PoE+ budget, 4x 100/1000X SFP optical uplinks, and sub-20ms ERPS ring self-recovery for mission-critical networks.",
    tagBgClass: "bg-blue-100 text-blue-800 border-blue-200",
    tagDotClass: "bg-blue-600",
    metrics: [
      { label: "POE CAPACITY", value: "360W Budget", sub: "16x 802.3at Ports", colorClass: "text-blue-700" },
      { label: "TEMPERATURE", value: "-40° to +75°C", sub: "Extreme Range", colorClass: "text-slate-900" },
      { label: "RING RECOVERY", value: "< 20ms ERPS", sub: "ITU-T G.8032", colorClass: "text-emerald-600" },
      { label: "FABRIC MATRIX", value: "40 Gbps", sub: "Non-blocking L3", colorClass: "text-purple-700" }
    ],
    checkpoints: [
      "Full IPv6 & IPv4 Layer 3 hardware routing (OSPF, RIP)",
      "Intelligent PoE alive checking and power scheduling",
      "Dual redundant 48~56V DC power inputs with reverse polarity",
      "Heavy-duty IP30 aluminum DIN-rail industrial enclosure"
    ],
    product: CATALOG_PRODUCTS.find((p) => p.name.includes("6325") && p.brandId === "planet") || CATALOG_PRODUCTS[2],
    image: "/Solutions-Products/Planet/Planet IGS-6325-16P4S.jpg",
    altText: "Planet Industrial Switch",
    rfqButtonText: "Add Switch to RFQ",
    badgeDotColor: "bg-blue-400",
    badgeTextColor: "text-blue-300",
    badgeSlotTitle: "Active Switching Slot"
  }
];

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function SolutionsPage() {
  // Navigation & Filtering States (Multi-Select & Toggle Enabled)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCompliance, setSelectedCompliance] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [sortBy, setSortBy] = useState<"featured" | "name" | "sku">("featured");

  // Toggle brand selection (click to select, click again to unselect; 'all' resets)
  const toggleBrand = (brandId: string) => {
    if (brandId === "all") {
      setSelectedBrands([]);
      return;
    }
    setSelectedBrands((prev) =>
      prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
    );
  };

  // Toggle category selection (click to select, click again to unselect; 'All Categories' resets)
  const toggleCategory = (cat: string) => {
    if (cat === "All Categories") {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Filter minimize / collapse states (Default minimized for Categories and Compliance)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState<boolean>(true);
  const [isComplianceOpen, setIsComplianceOpen] = useState<boolean>(false);

  // RFQ Inquiry Basket State (Empty by default)
  const [rfqBasket, setRfqBasket] = useState<{ product: ProductItem; quantity: number }[]>([]);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);
  const [stagedToast, setStagedToast] = useState<string | null>(null);

  // Technical Spec Sheet Modal State
  const [activeSpecProduct, setActiveSpecProduct] = useState<ProductItem | null>(null);

  // Hero Flagship Carousel State (Slides 0: AEM TestPro, 1: Prime Micro DC, 2: Planet Switch)
  const [activeHeroSlide, setActiveHeroSlide] = useState<number>(0);
  const [isHeroPlaying, setIsHeroPlaying] = useState<boolean>(true);

  // Search input ref for ⌘K shortcut
  const searchInputRef = useRef<HTMLInputElement>(null);

  // --------------------------------------------------------------------------
  // Keyboard Shortcut ⌘K / Ctrl+K
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // --------------------------------------------------------------------------
  // Hero Carousel Auto-Advance (Pure 6s interval, no sub-second re-renders)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!isHeroPlaying) return;
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHeroPlaying]);

  const handleHeroTabClick = (index: number) => {
    setActiveHeroSlide(index);
  };

  // --------------------------------------------------------------------------
  // Filtered & Sorted Product Listing (Multi-Select Support)
  // --------------------------------------------------------------------------
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((item) => {
      // 1. Brand filter (multi-select: matches if any selected brand matches, or all if none)
      if (selectedBrands.length > 0 && !selectedBrands.includes(item.brandId)) {
        return false;
      }
      // 2. Category filter (multi-select: matches if any selected category matches, or all if none)
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
        return false;
      }
      // 3. Compliance filter (multi-select)
      if (selectedCompliance.length > 0) {
        const matchesComp = selectedCompliance.some((comp) =>
          item.compliance.some((c) => c.toLowerCase().includes(comp.toLowerCase()))
        );
        if (!matchesComp) return false;
      }
      // 4. Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesText =
          item.name.toLowerCase().includes(q) ||
          item.sku.toLowerCase().includes(q) ||
          item.brand.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.specs.some((s) => s.value.toLowerCase().includes(q));
        if (!matchesText) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "sku") return a.sku.localeCompare(b.sku);
      return a.name.localeCompare(b.name);
    });
  }, [selectedBrands, selectedCategories, searchQuery, selectedCompliance, sortBy]);

  // Brand item counts
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = { all: CATALOG_PRODUCTS.length };
    BRANDS_DATA.forEach((b) => {
      if (b.id !== "all") {
        counts[b.id] = CATALOG_PRODUCTS.filter((p) => p.brandId === b.id).length;
      }
    });
    return counts;
  }, []);

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Categories": CATALOG_PRODUCTS.length };
    CATEGORIES_DATA.forEach((c) => {
      if (c !== "All Categories") {
        counts[c] = CATALOG_PRODUCTS.filter((p) => p.category === c).length;
      }
    });
    return counts;
  }, []);



  // --------------------------------------------------------------------------
  // RFQ Basket Handlers
  // --------------------------------------------------------------------------
  const handleAddToRfq = (product: ProductItem) => {
    setRfqBasket((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { product, quantity: 1 }];
    });
    setStagedToast(`Added ${product.sku} to RFQ Spec Pack`);
    setTimeout(() => setStagedToast(null), 2500);
  };

  const handleRemoveFromRfq = (productId: string) => {
    setRfqBasket((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const handleExportCsv = () => {
    if (rfqBasket.length === 0) return;
    const headers = "Part Number (SKU),Product Description,Brand,Category,Quantity,Compliance Standards\n";
    const rows = rfqBasket
      .map(
        (item) =>
          `"${item.product.sku}","${item.product.name}","${item.product.brand}","${item.product.category}",${item.quantity},"${item.product.compliance.join(" | ")}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `YFC_BonEagle_RFQ_BOM_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSearchQuery("");
    setSelectedCompliance([]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="pt-[72px] sm:pt-[76px]">
        {/* =========================================================================
            SECTION 1: HERO SPOTLIGHT (FLAGSHIP CAROUSEL WITH USER'S MOTION SLOT)
        ========================================================================= */}
        <section
          className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200 pt-4 pb-8 sm:pt-5 sm:pb-10 lg:pt-6 lg:pb-12 relative overflow-hidden"
          id="flagshipHeroSection"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Bar: Quick Slide Tabs & Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-6 gap-4 border-b border-slate-200/80 mb-6">
              {/* Quick Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2" id="heroSlideTabs">
                {FLAGSHIP_SLIDES.map((slide, idx) => (
                  <button
                    type="button"
                    key={slide.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHeroTabClick(idx);
                    }}
                    className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold shadow-xs flex items-center gap-2 transition-all cursor-pointer ${
                      activeHeroSlide === idx
                        ? "bg-blue-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        activeHeroSlide === idx ? "bg-blue-200 animate-pulse" : "bg-slate-400"
                      }`}
                    />
                    <span>{slide.tabTitle}</span>
                  </button>
                ))}
              </div>

              {/* Autoplay & Navigation Controls */}
              <div className="flex items-center gap-3">
                {/* Autoplay Indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/80 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setIsHeroPlaying(!isHeroPlaying)}
                    className="flex items-center justify-center text-blue-700 hover:text-blue-900 transition-colors p-0.5 cursor-pointer"
                    title={isHeroPlaying ? "Pause Autoplay" : "Resume Autoplay"}
                  >
                    {isHeroPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                  </button>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                      <span className="font-mono text-[10px] font-bold text-blue-800 tracking-wide uppercase">
                        {isHeroPlaying ? "Auto-Play Active" : "Paused"}
                      </span>
                    </div>
                    <div className="w-24 h-1 bg-blue-200 rounded-full overflow-hidden relative">
                      <div
                        key={`${activeHeroSlide}-${isHeroPlaying}`}
                        className={`h-full bg-blue-600 rounded-full ${
                          isHeroPlaying ? "w-full transition-all duration-[6000ms] ease-linear" : "w-1/3"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Counter & Arrows */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-700 tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                    0{activeHeroSlide + 1} / 0{FLAGSHIP_SLIDES.length}
                  </span>
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHeroTabClick((activeHeroSlide - 1 + FLAGSHIP_SLIDES.length) % FLAGSHIP_SLIDES.length);
                      }}
                      className="p-1.5 rounded text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                      title="Previous Slide"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHeroTabClick((activeHeroSlide + 1) % FLAGSHIP_SLIDES.length);
                      }}
                      className="p-1.5 rounded text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                      title="Next Slide"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stable Slide Viewport Container (Persistent DOM - No Layout Collapse, Zero Refresh) */}
            <div className="relative min-h-[500px]">
              {FLAGSHIP_SLIDES.map((slide, sIdx) => {
                const isActive = activeHeroSlide === sIdx;
                return (
                  <div
                    key={slide.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 pointer-events-auto relative z-10 translate-x-0"
                        : "opacity-0 pointer-events-none absolute inset-0 z-0 translate-x-3"
                    }`}
                  >
                    <div className="lg:col-span-6 flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold tracking-wide border ${slide.tagBgClass}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${slide.tagDotClass} animate-ping`} />
                          {slide.badgeTag}
                        </span>
                        <span className="font-mono text-xs text-slate-500 font-medium">{slide.series}</span>
                      </div>

                      <div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700">
                          {slide.brand}
                        </span>
                        {sIdx === 0 ? (
                          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                            {slide.title}
                          </h1>
                        ) : (
                          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                            {slide.title}
                          </h2>
                        )}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5">
                          {slide.description}
                        </p>
                      </div>

                      {/* Telemetry Cards */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                        {slide.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col"
                          >
                            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                              {m.label}
                            </span>
                            <span className={`text-base font-bold ${m.colorClass} mt-0.5`}>{m.value}</span>
                            <span className="font-mono text-[10px] text-slate-500">{m.sub}</span>
                          </div>
                        ))}
                      </div>

                      {/* Feature Checkpoints */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 py-3 border-y border-slate-200 text-xs font-medium text-slate-700">
                        {slide.checkpoints.map((cp, cpIdx) => (
                          <div key={cpIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                            <span>{cp}</span>
                          </div>
                        ))}
                      </div>

                      {/* B2B Action Buttons (STRICTLY NO PRICE TAGS) */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => handleAddToRfq(slide.product)}
                          className="px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                        >
                          <Plus className="size-4" />
                          <span>{slide.rfqButtonText}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveSpecProduct(slide.product)}
                          className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <Eye className="size-4 text-slate-500" />
                          <span>View Specifications</span>
                        </button>
                      </div>
                    </div>

                    {/* =============================================================
                        FLAGSHIP 3D / MOTION CONTAINER - RESERVED FOR USER MANUAL INTEGRATION
                    ============================================================= */}
                    <div className="lg:col-span-6 flex justify-center items-center">
                      <div className="relative w-full max-w-xl aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
                        {/* Placeholder Frame for User's 3D/Motion Component */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={slide.image}
                            alt={slide.altText}
                            fill
                            className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                            priority
                            sizes="(max-width: 1024px) 100vw, 600px"
                          />
                        </div>

                        {/* Developer Manual Integration Helper Badge */}
                        <div className="absolute bottom-3 inset-x-3 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-[11px] font-mono">
                          <div className="flex items-center gap-2">
                            <span className={`size-2 rounded-full ${slide.badgeDotColor} animate-ping`} />
                            <span className={`${slide.badgeTextColor} font-semibold`}>{slide.badgeSlotTitle}</span>
                          </div>
                          <span className="text-white/60 text-[10px]">Ready for manual 3D/rd motion integration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PRODUCT CATALOG (SEARCH, FILTERS, GRID & TABLE VIEWS)
        ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pb-10" id="catalogSection">
          <div className="flex flex-col gap-6">
            {/* Top Control Bar: Search Input, SKU Indicator, Grid/Table Toggle */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="relative w-full lg:w-3/5 flex items-center">
                  <Search className="absolute left-3.5 text-blue-600 size-5" />
                  <input
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="Search enterprise PN, cross-reference SKU, or standard (e.g. Cat.6A, 10G, Level 2G, 42U)..."
                    className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white pl-11 pr-24 py-2.5 rounded-lg font-mono text-[13px] text-slate-900 placeholder:text-slate-400 outline-none transition-all border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                  <div className="absolute right-3 flex items-center gap-1.5">
                    <kbd className="font-mono text-[11px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                      ⌘K
                    </kbd>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="text-slate-400 hover:text-slate-700 text-[11px] font-mono tracking-wider uppercase ml-1 cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Repository Indicator + View Toggle */}
                <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-4">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200/80">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[11px] font-semibold text-emerald-800 tracking-tight">
                      CATALOG: {filteredProducts.length} ACTIVE SKUs
                    </span>
                  </div>

                  {/* Grid vs Table View Toggle */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-all cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white shadow-xs font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <LayoutGrid className="size-3.5" />
                      <span>Card Grid</span>
                    </button>
                    <button
                      onClick={() => setViewMode("table")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-all cursor-pointer ${
                        viewMode === "table"
                          ? "bg-blue-600 text-white shadow-xs font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      <TableIcon className="size-3.5" />
                      <span>Dense Spec Table</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-COLUMN CATALOG LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              {/* =============================================================
                  LEFT COLUMN: STICKY FILTER PANEL WITH REAL BRAND LOGOS
              ============================================================= */}
              {isSidebarCollapsed ? (
                <div className="lg:col-span-12 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsSidebarCollapsed(false)}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="size-3.5" />
                      <span>Show Filter Directory</span>
                    </button>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      Filters minimized &bull; Full-width catalog view
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500">
                      Active:{" "}
                      {selectedCategories.length === 0
                        ? "All Categories"
                        : selectedCategories.length === 1
                        ? selectedCategories[0]
                        : `${selectedCategories.length} Categories`}{" "}
                      •{" "}
                      {selectedBrands.length === 0
                        ? "All Brands"
                        : selectedBrands.length === 1
                        ? BRANDS_DATA.find((b) => b.id === selectedBrands[0])?.name
                        : `${selectedBrands.length} Brands`}
                    </span>
                    {(selectedBrands.length > 0 ||
                      selectedCategories.length > 0 ||
                      selectedCompliance.length > 0 ||
                      searchQuery.trim() !== "") && (
                      <button
                        onClick={resetAllFilters}
                        className="font-mono text-xs text-blue-700 hover:underline cursor-pointer"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <aside
                  className="lg:col-span-3 flex flex-col gap-5 bg-white p-5 rounded-xl border border-slate-200 shadow-xs lg:sticky lg:top-24 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto filter-scrollbar"
                >
                  {/* Header & Reset Action & Minimize Entire Sidebar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="size-4 text-blue-700" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900">
                        Directory Filters
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={resetAllFilters}
                        className="font-mono text-[11px] text-blue-700 hover:underline uppercase font-medium cursor-pointer"
                      >
                        Reset All
                      </button>
                      <button
                        onClick={() => setIsSidebarCollapsed(true)}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                        title="Minimize Filter Sidebar"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* 1. BRANDS & OEM PARTNERS WITH LOGOS FROM ProductSideLogo */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                        <ShieldCheck className="size-3.5 text-blue-600" />
                        Brands & OEM Lines
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] text-slate-400">9 Lines</span>
                        <button
                          onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                          className="p-1 rounded text-slate-400 hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
                          title={isBrandsOpen ? "Minimize Brands" : "Expand Brands"}
                        >
                          {isBrandsOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                        </button>
                      </div>
                    </div>

                    {isBrandsOpen && (
                      <div className="flex flex-col gap-1.5">
                        {BRANDS_DATA.map((brand) => {
                          const isAll = brand.id === "all";
                          const isSelected = isAll
                            ? selectedBrands.length === 0
                            : selectedBrands.includes(brand.id);
                          const count = brandCounts[brand.id] || 0;
                          return (
                            <button
                              key={brand.id}
                              type="button"
                              onClick={() => toggleBrand(brand.id)}
                              className={`w-full flex items-center justify-between p-2 rounded-lg font-mono text-xs font-medium transition-all text-left cursor-pointer ${
                                isSelected
                                  ? "bg-slate-900 text-white shadow-xs font-semibold ring-2 ring-blue-600/30"
                                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                {brand.logo ? (
                                  <div className="size-6 rounded bg-white p-0.5 border border-slate-300 flex items-center justify-center shrink-0 overflow-hidden">
                                    <Image
                                      src={brand.logo}
                                      alt={brand.name}
                                      width={24}
                                      height={24}
                                      className="object-contain max-h-full"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className={`size-6 rounded flex items-center justify-center font-bold text-[9px] shrink-0 border ${
                                      isSelected
                                        ? "bg-blue-600 text-white border-blue-500"
                                        : "bg-slate-800 text-blue-400 border-slate-700"
                                    }`}
                                  >
                                    ALL
                                  </div>
                                )}
                                <span className="truncate">{brand.name}</span>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                                <span
                                  className={`text-[11px] font-mono ${
                                    isSelected ? "text-blue-300 font-bold" : "text-slate-400"
                                  }`}
                                >
                                  ({count})
                                </span>
                                {isSelected && !isAll && (
                                  <Check className="size-3.5 text-blue-400 shrink-0" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* 2. THE 7 CATEGORIES (WITH MINIMIZE BUTTON) */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Product Categories
                      </span>
                      <div className="flex items-center gap-1.5">
                        {!isCategoriesOpen && (
                          <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                            {CATEGORIES_DATA.length - 1} Types
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                          className="p-1 rounded text-slate-400 hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
                          title={isCategoriesOpen ? "Minimize Categories" : "Expand Categories"}
                        >
                          {isCategoriesOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                        </button>
                      </div>
                    </div>

                    {isCategoriesOpen && (
                      <div className="flex flex-col gap-1">
                        {CATEGORIES_DATA.map((cat) => {
                          const isAll = cat === "All Categories";
                          const isSelected = isAll
                            ? selectedCategories.length === 0
                            : selectedCategories.includes(cat);
                          const count = categoryCounts[cat] || 0;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => toggleCategory(cat)}
                              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-mono text-xs text-left transition-colors cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50 text-blue-700 border border-blue-300 font-semibold shadow-2xs"
                                  : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                {isSelected && !isAll && (
                                  <Check className="size-3 text-blue-600 shrink-0" />
                                )}
                                <span className="truncate">{cat}</span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-400 shrink-0 ml-1">
                                ({count})
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* 3. COMPLIANCE STANDARDS FILTER (WITH MINIMIZE BUTTON) */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Compliance & Standards
                      </span>
                      <div className="flex items-center gap-1.5">
                        {!isComplianceOpen && (
                          <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                            7 Standards
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => setIsComplianceOpen(!isComplianceOpen)}
                          className="p-1 rounded text-slate-400 hover:text-blue-700 hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
                          title={isComplianceOpen ? "Minimize Compliance" : "Expand Compliance"}
                        >
                          {isComplianceOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                        </button>
                      </div>
                    </div>

                    {isComplianceOpen && (
                      <div className="flex flex-wrap gap-1.5">
                        {["UL", "ETL", "ISO 9001", "Level 2G", "Telcordia", "RoHS", "Tier III"].map((comp) => {
                          const active = selectedCompliance.includes(comp);
                          return (
                            <button
                              key={comp}
                              onClick={() => {
                                setSelectedCompliance((prev) =>
                                  prev.includes(comp) ? prev.filter((c) => c !== comp) : [...prev, comp]
                                );
                              }}
                              className={`px-2 py-1 rounded font-mono text-[10px] cursor-pointer transition-colors border ${
                                active
                                  ? "bg-blue-600 text-white border-blue-600 font-bold"
                                  : "bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border-slate-200 text-slate-700"
                              }`}
                            >
                              {comp}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </aside>
              )}

              {/* =============================================================
                  RIGHT COLUMN: CATALOG ITEMS (GRID OR DENSE TABLE VIEW)
              ============================================================= */}
              <div className={`${isSidebarCollapsed ? "lg:col-span-12" : "lg:col-span-9"} flex flex-col gap-5`}>
                {/* Active Filters Bar & Sorting Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-slate-500 font-medium">Active:</span>

                    {selectedBrands.map((bId) => {
                      const brand = BRANDS_DATA.find((b) => b.id === bId);
                      if (!brand) return null;
                      return (
                        <span
                          key={bId}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-800 font-mono text-xs font-semibold shadow-2xs"
                        >
                          Brand: {brand.name}
                          <button
                            type="button"
                            onClick={() => toggleBrand(bId)}
                            className="hover:text-rose-600 font-bold ml-1 cursor-pointer"
                            title={`Remove ${brand.name} filter`}
                          >
                            ×
                          </button>
                        </span>
                      );
                    })}

                    {selectedCategories.map((cat) => (
                      <span
                        key={cat}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-semibold shadow-2xs"
                      >
                        {cat}
                        <button
                          type="button"
                          onClick={() => toggleCategory(cat)}
                          className="hover:text-rose-600 font-bold ml-1 cursor-pointer"
                          title={`Remove ${cat} filter`}
                        >
                          ×
                        </button>
                      </span>
                    ))}

                    {selectedCompliance.map((comp) => (
                      <span
                        key={comp}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 border border-purple-200 text-purple-700 font-mono text-xs"
                      >
                        {comp}
                        <button
                          type="button"
                          onClick={() => setSelectedCompliance((prev) => prev.filter((c) => c !== comp))}
                          className="hover:text-rose-600 font-bold ml-1 cursor-pointer"
                          title={`Remove ${comp} filter`}
                        >
                          ×
                        </button>
                      </span>
                    ))}

                    {(selectedBrands.length > 0 ||
                      selectedCategories.length > 0 ||
                      selectedCompliance.length > 0 ||
                      searchQuery.trim() !== "") && (
                      <button
                        type="button"
                        onClick={resetAllFilters}
                        className="text-slate-400 hover:text-rose-600 font-mono text-xs underline ml-1 cursor-pointer"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {/* Sort Selector */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-xs text-slate-500">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-white border border-slate-300 px-3 py-1.5 rounded-md font-mono text-xs text-slate-700 outline-none focus:border-blue-600 cursor-pointer shadow-2xs"
                    >
                      <option value="featured">Featured / Critical Lines</option>
                      <option value="name">Product Name (A-Z)</option>
                      <option value="sku">Part Number (Alphanumeric)</option>
                    </select>
                  </div>
                </div>

                {/* -------------------------------------------------------------
                    VIEW 1: CARD GRID VIEW (ENTERPRISE B2B - NO PRICES)
                ------------------------------------------------------------- */}
                {viewMode === "grid" && (
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${
                      isSidebarCollapsed ? "lg:grid-cols-4" : "lg:grid-cols-3"
                    } gap-6`}
                    id="cardGridContainer"
                  >
                    {filteredProducts.map((product, idx) => (
                      <article
                        key={product.id}
                        className="flex flex-col justify-between bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 p-5 group"
                      >
                        <div className="flex flex-col gap-3">
                          {/* Card Top: Brand & SKU + Compliance Tag */}
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-blue-700 flex items-center gap-1.5">
                              <span className="size-2 rounded-full bg-blue-600" />
                              {product.brand} • {product.sku}
                            </span>
                            <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                              {product.compliance[0]}
                            </span>
                          </div>

                          {/* Hardware Image Pedestal */}
                          <div className="w-full h-44 rounded-lg bg-slate-50 flex items-center justify-center relative overflow-hidden border border-slate-100 p-3">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              loading={idx < 6 ? "eager" : "lazy"}
                              priority={idx < 2}
                              className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-white font-mono text-[10px] text-slate-500 border border-slate-200 shadow-2xs">
                              {product.category}
                            </div>
                          </div>

                          {/* Titles & Description */}
                          <div className="flex flex-col">
                            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                              {product.brand}
                            </span>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5 line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          {/* 2x2 Technical Spec Chips */}
                          <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px]">
                            {product.specs.slice(0, 4).map((spec, sIdx) => (
                              <div key={sIdx}>
                                <span className="text-slate-400 block text-[9px] uppercase">{spec.label}</span>
                                <span className="text-slate-900 font-semibold truncate block">{spec.value}</span>
                              </div>
                            ))}
                          </div>

                          {/* Compliance Tags */}
                          <div className="flex flex-wrap gap-1">
                            {product.compliance.map((c, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono border border-slate-200"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Bottom: B2B Actions (STRICTLY NO PRICES) */}
                        <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleAddToRfq(product)}
                              className="flex-1 py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                            >
                              <Plus className="size-3.5" />
                              <span>Add to RFQ</span>
                            </button>
                            <button
                              onClick={() => setActiveSpecProduct(product)}
                              className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-mono transition-colors flex items-center justify-center cursor-pointer"
                              title="Inspect Full Specifications"
                            >
                              <Eye className="size-3.5" />
                            </button>
                          </div>
                          <button
                            onClick={() => setActiveSpecProduct(product)}
                            className="text-center font-mono text-[11px] text-slate-500 hover:text-blue-700 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <FileText className="size-3" />
                            <span>Engineering Submittal Pack →</span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {/* -------------------------------------------------------------
                    VIEW 2: DENSE SPEC TABLE VIEW (ENGINEERING & PROCUREMENT)
                ------------------------------------------------------------- */}
                {viewMode === "table" && (
                  <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-2xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                          <th className="py-3 px-4 font-semibold">SKU / Item</th>
                          <th className="py-3 px-4 font-semibold">Brand</th>
                          <th className="py-3 px-4 font-semibold">Category</th>
                          <th className="py-3 px-4 font-semibold">Core Specifications</th>
                          <th className="py-3 px-4 font-semibold">Standards</th>
                          <th className="py-3 px-4 font-semibold text-right">Commercial Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        {filteredProducts.map((product) => (
                          <tr key={product.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <div className="size-10 rounded bg-slate-100 relative overflow-hidden border border-slate-200 shrink-0">
                                  <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                                </div>
                                <div>
                                  <span className="font-mono font-bold text-blue-700 block text-xs">
                                    {product.sku}
                                  </span>
                                  <span className="font-semibold text-slate-900 block max-w-xs truncate">
                                    {product.name}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-mono font-medium text-slate-700">{product.brand}</td>
                            <td className="py-3.5 px-4 text-slate-600">{product.category}</td>
                            <td className="py-3.5 px-4 font-mono text-[11px] text-slate-600">
                              <div className="flex flex-col gap-0.5">
                                {product.specs.slice(0, 2).map((s, idx) => (
                                  <span key={idx}>
                                    <strong className="text-slate-800">{s.label}:</strong> {s.value}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="flex flex-wrap gap-1 max-w-xs">
                                {product.compliance.slice(0, 3).map((c, idx) => (
                                  <span
                                    key={idx}
                                    className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono border border-slate-200"
                                  >
                                    {c}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => setActiveSpecProduct(product)}
                                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer"
                                  title="View Specifications"
                                >
                                  <Eye className="size-3.5" />
                                </button>
                                <button
                                  onClick={() => handleAddToRfq(product)}
                                  className="px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                                >
                                  <Plus className="size-3.5" />
                                  <span>Add RFQ</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          SECTION 3: FLOATING BOTTOM RFQ DOCK & INQUIRY BASKET (CONDITIONAL FLOATING PILL)
      ========================================================================= */}
      <AnimatePresence>
        {rfqBasket.length > 0 && (
          <motion.aside
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="fixed bottom-4 sm:bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-3 sm:px-6"
            id="rfqBottomBar"
          >
            <div className="pointer-events-auto w-[96%] max-w-[1360px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl md:rounded-full p-2.5 sm:px-5 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 transition-all">
              {/* Left: Basket Counter Badge & Removable SKU Chips */}
              <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden flex-1 min-w-0">
                {/* RFQ INQUIRY BASKET BADGE */}
                <div className="flex items-center gap-2.5 bg-blue-50/70 border border-blue-200/80 rounded-xl md:rounded-full px-3.5 py-1.5 shrink-0">
                  <ClipboardList className="size-4 text-blue-700 shrink-0" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      RFQ INQUIRY BASKET
                    </span>
                    <span className="font-mono text-xs font-extrabold text-slate-900 tracking-tight">
                      {rfqBasket.reduce((sum, item) => sum + item.quantity, 0)} Items Staged
                    </span>
                  </div>
                </div>

                {/* Staged Product SKU Chips */}
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 flex-1 min-w-0">
                  {rfqBasket.map((item) => (
                    <span
                      key={item.product.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg md:rounded-full bg-slate-100 hover:bg-slate-200/70 border border-slate-200 text-slate-800 font-mono text-xs font-semibold shrink-0 transition-colors shadow-2xs"
                    >
                      <span>{item.product.sku}</span>
                      <span className="text-slate-500 text-[11px] font-medium">({item.quantity}x)</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFromRfq(item.product.id)}
                        className="text-slate-400 hover:text-rose-600 font-bold ml-0.5 cursor-pointer text-sm leading-none"
                        title="Remove from RFQ Pack"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Export CSV BOM & Review & Submit RFQ */}
              <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="px-3.5 py-2 rounded-xl md:rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-semibold flex items-center gap-1.5 border border-slate-200/90 transition-all cursor-pointer shadow-2xs"
                >
                  <Download className="size-3.5 text-slate-600" />
                  <span>Export BOM (.CSV)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsRfqModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl md:rounded-full bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm shadow-blue-700/25 transition-all cursor-pointer"
                >
                  <Send className="size-3.5" />
                  <span>Review & Submit RFQ</span>
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 1: TECHNICAL SPECIFICATION INSPECTION DRAWER
      ========================================================================= */}
      <AnimatePresence>
        {activeSpecProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-blue-600" />
                  <div>
                    <h3 className="font-mono text-sm font-bold text-slate-900">{activeSpecProduct.sku}</h3>
                    <p className="text-xs text-slate-500">{activeSpecProduct.brand} • {activeSpecProduct.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSpecProduct(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="size-40 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden shrink-0">
                    <Image
                      src={activeSpecProduct.image}
                      alt={activeSpecProduct.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{activeSpecProduct.name}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{activeSpecProduct.description}</p>
                  </div>
                </div>

                {/* Full Spec Grid */}
                <div>
                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technical Specifications
                  </h5>
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs">
                    {activeSpecProduct.specs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-slate-400 text-[10px] uppercase">{spec.label}</span>
                        <span className="text-slate-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance List */}
                <div>
                  <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Verified Industry Standards
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeSpecProduct.compliance.map((c, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-medium"
                      >
                        ✓ {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50">
                <span className="text-xs text-slate-500 font-mono">B2B Wholesale & Commercial Inquiries Only</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveSpecProduct(null)}
                    className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-mono text-xs cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleAddToRfq(activeSpecProduct);
                      setActiveSpecProduct(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="size-3.5" />
                    <span>Add to RFQ Pack</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MODAL 2: ENTERPRISE RFQ SUBMISSION MODAL
      ========================================================================= */}
      <AnimatePresence>
        {isRfqModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
                <div>
                  <h3 className="font-bold text-base text-slate-900">Request Official Commercial Quotation (RFQ)</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Dispatched directly to YFC-BonEagle wholesale sales engineering desk.
                  </p>
                </div>
                <button
                  onClick={() => setIsRfqModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 cursor-pointer"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs">
                {/* Staged Items Summary */}
                <div>
                  <label className="font-mono font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Staged Bill of Materials ({rfqBasket.length} Items):
                  </label>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 max-h-36 overflow-y-auto divide-y divide-slate-200">
                    {rfqBasket.map((item) => (
                      <div key={item.product.id} className="py-2 flex items-center justify-between">
                        <div>
                          <span className="font-mono font-bold text-blue-700">{item.product.sku}</span>
                          <span className="text-slate-700 ml-2">{item.product.name}</span>
                        </div>
                        <span className="font-mono font-bold text-slate-900">Qty: {item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-slate-600 block mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Telecom Systems"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-slate-600 block mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      placeholder="engineering@acme.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-slate-600 block mb-1">Contact Person & Phone</label>
                    <input
                      type="text"
                      placeholder="Engr. Juan Dela Cruz / +63 917 123 4567"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-slate-600 block mb-1">Preferred Regional Fulfillment Hub</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-600">
                      <option>Manila Main Hub (Ermita, Manila)</option>
                      <option>Cebu VisMin Office (Mandaue City, Cebu)</option>
                      <option>Bataan Manufacturing Complex (Hermosa, Bataan)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-slate-600 block mb-1">Project Details / Estimated Delivery Date</label>
                  <textarea
                    rows={3}
                    placeholder="Provide tender references, required length drums, delivery deadlines, or certification test requirements..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={handleExportCsv}
                  className="font-mono text-xs text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FileSpreadsheet className="size-3.5" />
                  <span>Download Staged BOM (.CSV)</span>
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRfqModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-mono text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert("Commercial RFQ dispatched successfully. A technical sales engineer will reach out within 2-4 business hours.");
                      setIsRfqModalOpen(false);
                    }}
                    className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Send className="size-3.5" />
                    <span>Submit Official RFQ</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Staged Toast Notification */}
      <AnimatePresence>
        {stagedToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-mono border border-slate-700"
          >
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>{stagedToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
