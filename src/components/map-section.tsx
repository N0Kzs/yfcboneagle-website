"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Map as MapLibreMap, Marker as MapLibreMarker, setWorkerUrl, getVersion } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { motion, AnimatePresence } from "motion/react";
import { Building2, ChevronRight } from "lucide-react";
import { createRoot, Root } from "react-dom/client";

if (typeof window !== "undefined") {
  setWorkerUrl(`https://unpkg.com/maplibre-gl@${getVersion()}/dist/maplibre-gl-worker.mjs`);
}

const locations = [
  {
    id: "manila",
    name: "Manila",
    title: "Manila Office",
    desc: "5th Floor, New Gold Building, #1579, F.T Benitez Street, Ermita, Manila.",
    coords: [120.994437, 14.571951] as [number, number],
    icon: Building2
  },
  {
    id: "cebu",
    name: "Cebu",
    title: "Cebu Office",
    desc: "2nd Floor, Norkis Cyberpark, A.S Fortuna St., Bakilid, Mandaue City, Cebu",
    coords: [123.933514, 10.336513] as [number, number],
    icon: Building2
  },
  {
    id: "bataan",
    name: "Bataan Factory",
    title: "Bataan Factory",
    desc: "YFC BONEAGLE ELECTRONIC TECHNOLOGY PHILS. CORP. Lot 1-4, Blk 15, Hermosa Ecozone Industrial Park, Palihan Hermosa, Bataan.",
    coords: [120.461126, 14.838579] as [number, number],
    icon: Building2
  }
];

export function MapSection() {
  const [selected, setSelected] = useState(locations[0]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<{ [key: string]: MapLibreMarker }>({});
  const rootsRef = useRef<{ [key: string]: Root }>({});

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;

    mapRef.current = new MapLibreMap({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [122.5, 12.0],
      zoom: 5.2,
      pitch: 0,
      bearing: 0,
      minZoom: 4,
      maxZoom: 15
    });

    // Suppress missing image warnings from the openfreemap style using v6+ API
    mapRef.current.setMissingStyleImageResolver((id) => {
      if (mapRef.current && !mapRef.current.hasImage(id)) {
        // Provide a 1x1 transparent pixel to prevent console spam
        mapRef.current.addImage(id, new ImageData(1, 1));
      }
    });

    locations.forEach(loc => {
      const el = document.createElement("div");
      el.className = "cursor-pointer transition-transform duration-300 relative flex items-center justify-center";
      
      const root = createRoot(el);
      rootsRef.current[loc.id] = root;
      const isSelected = selected.id === loc.id;
      
      root.render(
        <div className={`transition-all duration-300 ${isSelected ? 'scale-125 z-20' : 'scale-100 opacity-90 z-10'}`}>
          <div 
            className={`w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center text-white text-xs font-bold transition-shadow duration-300`}
            style={{ 
              backgroundColor: '#1b3073',
              boxShadow: isSelected ? '0 0 20px 4px rgba(27, 48, 115, 0.6)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            {isSelected && (
              <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: '#1b3073' }}></div>
            )}
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      );

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleSelect(loc);
      });

      const marker = new MapLibreMarker({ element: el })
        .setLngLat(loc.coords)
        .addTo(mapRef.current!);
        
      markersRef.current[loc.id] = marker;
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Update marker UI on selection change
  useEffect(() => {
    Object.values(markersRef.current).forEach(marker => {
      const locId = Object.keys(markersRef.current).find(key => markersRef.current[key] === marker);
      if (!locId) return;
      
      const isSelected = selected.id === locId;
      const root = rootsRef.current[locId];
      if (!root) return;
      
      root.render(
        <div className={`transition-all duration-300 ${isSelected ? 'scale-125 z-20' : 'scale-100 opacity-90 z-10'}`}>
          <div 
            className={`w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center text-white text-xs font-bold transition-shadow duration-300`}
            style={{ 
              backgroundColor: '#1b3073',
              boxShadow: isSelected ? '0 0 20px 4px rgba(27, 48, 115, 0.6)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            {isSelected && (
              <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: '#1b3073' }}></div>
            )}
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      );
    });
  }, [selected]);

  const handleSelect = useCallback((loc: typeof locations[0]) => {
    setSelected(loc);
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: loc.coords,
        zoom: 7,
        duration: 1500,
        essential: true
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[750px] rounded-3xl overflow-hidden border border-border shadow-xl bg-muted/20">
      
      {/* Native MapLibre Container */}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />

      {/* Top Center Pill Toggle */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-1.5 bg-background/80 backdrop-blur-md rounded-full shadow-md border border-border/50">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => handleSelect(loc)}
            className={`relative px-5 py-2 rounded-full text-sm transition-all duration-300 z-10 ${selected.id === loc.id ? 'font-semibold' : 'text-muted-foreground hover:text-foreground font-medium'}`}
            style={{ color: selected.id === loc.id ? '#1b3073' : undefined }}
          >
            {selected.id === loc.id && (
              <motion.div 
                layoutId="map-toggle-bg" 
                className="absolute inset-0 bg-background border rounded-full -z-10 shadow-sm"
                style={{ borderColor: 'rgba(27, 48, 115, 0.3)' }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {loc.name}
          </button>
        ))}
      </div>

      {/* Left Floating Info Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={selected.id}
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 lg:left-20 z-20 w-[90%] max-w-[380px]"
        >
          <div className="bg-background shadow-2xl p-8 rounded-xl flex flex-col border border-border/50 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-foreground mb-4">{selected.name}</h3>
            <div className="h-1 w-full rounded-full mb-6" style={{ backgroundImage: 'linear-gradient(to right, #1b3073, transparent)' }}></div>
            
            <div className="flex items-start gap-4 mb-10">
              <div className="grid place-items-center size-14 shrink-0 bg-muted rounded-md text-muted-foreground">
                <selected.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-foreground">{selected.title}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {selected.desc}
                </p>
              </div>
            </div>

            <button 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors w-fit group"
              style={{ color: '#1b3073' }}
            >
              <span className="group-hover:opacity-80 transition-opacity">LEARN MORE</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
