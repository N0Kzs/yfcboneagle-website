// ============================================================================
// COMPLETE 149-PRODUCT HARDWARE CATALOG SOURCED FROM public/Solutions-Products
// Sourced from brand CSVs: AEM TestPro, Bestlink Netware, Iskratel, Joinwit,
// Planet, Premium Line, Prime, Shinewaytech, and VITEC.
// ============================================================================

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  brandId: string;
  category:
    | "All Categories"
    | "Modular Data Center"
    | "Test Equipment"
    | "Data Cabinet"
    | "Structured Cabling"
    | "Fusion Machine"
    | "Digital Signage Solution"
    | "Active Devices";
  sku: string;
  image: string;
  description: string;
  specs: ProductSpec[];
  compliance: string[];
  datasheetAvailable: boolean;
  featured?: boolean;
}

export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    "id": "aem-aem-nsa-certi-lite-test-kit-copper-k30e",
    "name": "AEM NSA Certi-Lite Test Kit Copper – K30E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-NSA-K30E",
    "image": "/Solutions-Products/AEM TestPro/AEM NSA Certi-Lite Test Kit Copper – K30E.jpeg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Network Test",
        "value": "1G / 2.5G / 5G / 10G SNR"
      },
      {
        "label": "PoE Verification",
        "value": "TruePower Under Load"
      },
      {
        "label": "Interface",
        "value": "Dual Touchscreen"
      },
      {
        "label": "Cable Qualification",
        "value": "Copper & Fiber Cert"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "aem-aem-nsa-certi-lite-test-kit-copper-fiber-k31e",
    "name": "AEM NSA Certi-Lite Test Kit Copper/Fiber – K31E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-NSA-K31E",
    "image": "/Solutions-Products/AEM TestPro/AEM NSA Certi-Lite Test Kit Copper_Fiber – K31E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Network Test",
        "value": "1G / 2.5G / 5G / 10G SNR"
      },
      {
        "label": "PoE Verification",
        "value": "TruePower Under Load"
      },
      {
        "label": "Interface",
        "value": "Dual Touchscreen"
      },
      {
        "label": "Cable Qualification",
        "value": "Copper & Fiber Cert"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "aem-aem-nsa-certi-lite-smart-building-test-kit-copper-k60e",
    "name": "AEM NSA Certi-Lite Smart Building Test Kit Copper – K60E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K60E",
    "image": "/Solutions-Products/AEM TestPro/AEM NSA Certi-Lite Smart Building Test Kit Copper – K60E.jpeg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "aem-aem-nsa-certi-lite-smart-building-test-kit-copper-fiber-k61e",
    "name": "AEM NSA Certi-Lite Smart Building Test Kit Copper/Fiber – K61E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K61E",
    "image": "/Solutions-Products/AEM TestPro/AEM NSA Certi-Lite Smart Building Test Kit Copper_Fiber – K61E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "aem-aem-testpro-k61e",
    "name": "AEM TestPro K61E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K61E",
    "image": "/Solutions-Products/AEM TestPro/AEM TestPro K61E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "aem-aem-testpro-k60e",
    "name": "AEM TestPro K60E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K60E",
    "image": "/Solutions-Products/AEM TestPro/AEM TestPro K60E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "aem-aem-testpro-k51e",
    "name": "AEM TestPro K51E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K51E",
    "image": "/Solutions-Products/AEM TestPro/AEM TestPro K51E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "aem-aem-testpro-k50e",
    "name": "AEM TestPro K50E",
    "brand": "AEM TestPro",
    "brandId": "aem",
    "category": "Test Equipment",
    "sku": "AEM-TP-K50E",
    "image": "/Solutions-Products/AEM TestPro/AEM TestPro K50E.jpg",
    "description": "Professional multifunction enterprise network and cable certifier engineered for high-frequency autotests, PoE under full load validation, and comprehensive multi-gigabit link certification.",
    "specs": [
      {
        "label": "Frequency Range",
        "value": "3,000 MHz (3GHz)"
      },
      {
        "label": "Autotest Speed",
        "value": "6 Sec Cat 6A"
      },
      {
        "label": "PoE Load Test",
        "value": "90W TruePower 802.3bt"
      },
      {
        "label": "Accuracy Standard",
        "value": "ANSI/TIA Level 2G"
      }
    ],
    "compliance": [
      "ANSI/TIA-1152-A Level 2G",
      "ISO/IEC Level VI",
      "ETL Verified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-media-converter-sm",
    "name": "Bestlink Media Converter SM",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Active Devices",
    "sku": "BN-MC-1P-SM",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Media Converter SM.jpg",
    "description": "Ruggedized optical media converter bridging copper Ethernet to fiber optic infrastructure with extended temperature tolerance and stable long-range transmission.",
    "specs": [
      {
        "label": "Fiber Interface",
        "value": "100/1000Base-X SC/SFP"
      },
      {
        "label": "Copper Interface",
        "value": "10/100/1000Base-T RJ45"
      },
      {
        "label": "Distance",
        "value": "Up to 20 km Single-Mode"
      },
      {
        "label": "Power Input",
        "value": "Redundant DC Input"
      }
    ],
    "compliance": [
      "IEEE 802.3",
      "CE",
      "FCC",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-media-converter-4ports",
    "name": "Bestlink Media Converter 4Ports",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Active Devices",
    "sku": "BN-MC-4P-SM",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Media Converter 4Ports.jpg",
    "description": "Ruggedized optical media converter bridging copper Ethernet to fiber optic infrastructure with extended temperature tolerance and stable long-range transmission.",
    "specs": [
      {
        "label": "Fiber Interface",
        "value": "100/1000Base-X SC/SFP"
      },
      {
        "label": "Copper Interface",
        "value": "10/100/1000Base-T RJ45"
      },
      {
        "label": "Distance",
        "value": "Up to 20 km Single-Mode"
      },
      {
        "label": "Power Input",
        "value": "Redundant DC Input"
      }
    ],
    "compliance": [
      "IEEE 802.3",
      "CE",
      "FCC",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-media-converter",
    "name": "Bestlink Media Converter",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Active Devices",
    "sku": "BN-MC-100-FX",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Media Converter.jpg",
    "description": "Ruggedized optical media converter bridging copper Ethernet to fiber optic infrastructure with extended temperature tolerance and stable long-range transmission.",
    "specs": [
      {
        "label": "Fiber Interface",
        "value": "100/1000Base-X SC/SFP"
      },
      {
        "label": "Copper Interface",
        "value": "10/100/1000Base-T RJ45"
      },
      {
        "label": "Distance",
        "value": "Up to 20 km Single-Mode"
      },
      {
        "label": "Power Input",
        "value": "Redundant DC Input"
      }
    ],
    "compliance": [
      "IEEE 802.3",
      "CE",
      "FCC",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-fiber-optic-splitter-chassis",
    "name": "Bestlink Fiber Optic Splitter Chassis",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-FOC-SPLIT-1U",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Fiber Optic Splitter Chassis.jpg",
    "description": "Rugged telecommunications fiber distribution closure and PLC splitter chassis engineered for rapid drop cable termination, environmental sealing, and fiber routing.",
    "specs": [
      {
        "label": "Port Ratio",
        "value": "Modular PLC Splitter"
      },
      {
        "label": "Insertion Loss",
        "value": "< 13.8 dB (1:16)"
      },
      {
        "label": "Return Loss",
        "value": "> 55 dB SC/APC"
      },
      {
        "label": "Protection Rating",
        "value": "IP65 Weatherproof"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-optic-dp-closure-1-16-plc-splitter",
    "name": "Bestlink Optic DP Closure 1:16 PLC Splitter",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-DP-CLOS-116",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Optic DP Closure 1_16 PLC Splitter.jpg",
    "description": "Rugged telecommunications fiber distribution closure and PLC splitter chassis engineered for rapid drop cable termination, environmental sealing, and fiber routing.",
    "specs": [
      {
        "label": "Port Ratio",
        "value": "1:16 Balanced PLC"
      },
      {
        "label": "Insertion Loss",
        "value": "< 13.8 dB (1:16)"
      },
      {
        "label": "Return Loss",
        "value": "> 55 dB SC/APC"
      },
      {
        "label": "Protection Rating",
        "value": "IP65 Weatherproof"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-optic-dp-closure",
    "name": "Bestlink Optic DP Closure",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-DP-CLOSURE",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink Optic DP Closure.jpg",
    "description": "Rugged telecommunications fiber distribution closure and PLC splitter chassis engineered for rapid drop cable termination, environmental sealing, and fiber routing.",
    "specs": [
      {
        "label": "Port Ratio",
        "value": "Modular PLC Splitter"
      },
      {
        "label": "Insertion Loss",
        "value": "< 13.8 dB (1:16)"
      },
      {
        "label": "Return Loss",
        "value": "> 55 dB SC/APC"
      },
      {
        "label": "Protection Rating",
        "value": "IP65 Weatherproof"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-s-clamp-white",
    "name": "Bestlink S Clamp White",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-CLAMP-S-WHT",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink S Clamp White.jpg",
    "description": "Enterprise-grade structured cabling and fiber connectivity solution manufactured to strict international telecommunications standards for high data throughput.",
    "specs": [
      {
        "label": "Material",
        "value": "Industrial Telecommunications"
      },
      {
        "label": "Standard",
        "value": "ANSI/TIA-568 & ISO/IEC"
      },
      {
        "label": "Temperature",
        "value": "-20°C to +60°C"
      },
      {
        "label": "RoHS",
        "value": "Fully Compliant"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-s-clamp",
    "name": "Bestlink S Clamp",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-CLAMP-S-BLK",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink S Clamp.jpg",
    "description": "Enterprise-grade structured cabling and fiber connectivity solution manufactured to strict international telecommunications standards for high data throughput.",
    "specs": [
      {
        "label": "Material",
        "value": "Industrial Telecommunications"
      },
      {
        "label": "Standard",
        "value": "ANSI/TIA-568 & ISO/IEC"
      },
      {
        "label": "Temperature",
        "value": "-20°C to +60°C"
      },
      {
        "label": "RoHS",
        "value": "Fully Compliant"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "bestlink-bestlink-bl265223024",
    "name": "Bestlink BL265223024",
    "brand": "Bestlink Netware",
    "brandId": "bestlink",
    "category": "Structured Cabling",
    "sku": "BN-BL265223024-ODF",
    "image": "/Solutions-Products/Bestlink Netware/Bestlink BL265223024.jpg",
    "description": "Enterprise-grade structured cabling and fiber connectivity solution manufactured to strict international telecommunications standards for high data throughput.",
    "specs": [
      {
        "label": "Material",
        "value": "Industrial Telecommunications"
      },
      {
        "label": "Standard",
        "value": "ANSI/TIA-568 & ISO/IEC"
      },
      {
        "label": "Temperature",
        "value": "-20°C to +60°C"
      },
      {
        "label": "RoHS",
        "value": "Fully Compliant"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "iskratel-si3000-lumia-g16",
    "name": "SI3000 LUMIA G16",
    "brand": "Skratel / Iskratel",
    "brandId": "iskratel",
    "category": "Active Devices",
    "sku": "SK-LUMIA-G16",
    "image": "/Solutions-Products/Iskratel/SI3000 LUMIA G16.jpg",
    "description": "Carrier-grade high-density Optical Line Terminal (OLT) supporting GPON and XGS-PON combo connectivity, multi-gigabit uplinks, and open software-defined networking architectures.",
    "specs": [
      {
        "label": "PON Ports",
        "value": "16x Combo GPON/XGS-PON"
      },
      {
        "label": "Uplinks",
        "value": "4x 100GE / 40GE QSFP28"
      },
      {
        "label": "Subscriber Scale",
        "value": "Up to 2,048 ONTs"
      },
      {
        "label": "Chassis",
        "value": "1U High-Density Rackmount"
      }
    ],
    "compliance": [
      "ITU-T G.984 / G.9807",
      "ETSI",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "iskratel-innbox-g74",
    "name": "Innbox G74",
    "brand": "Skratel / Iskratel",
    "brandId": "iskratel",
    "category": "Active Devices",
    "sku": "SK-INNBOX-G74",
    "image": "/Solutions-Products/Iskratel/Innbox G74.jpg",
    "description": "High-performance FTTH optical network terminal (ONT) and enterprise residential gateway offering gigabit LAN switching, concurrent dual-band Wi-Fi, and carrier-grade voice VoIP ports.",
    "specs": [
      {
        "label": "WAN Interface",
        "value": "GPON SC/APC Class B+"
      },
      {
        "label": "LAN Ports",
        "value": "4x Gigabit 10/100/1000"
      },
      {
        "label": "Wireless",
        "value": "Concurrent Dual-Band"
      },
      {
        "label": "Voice Ports",
        "value": "2x FXS SIP VoIP"
      }
    ],
    "compliance": [
      "ITU-T G.984 / G.9807",
      "ETSI",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "iskratel-innbox-g11",
    "name": "Innbox G11",
    "brand": "Skratel / Iskratel",
    "brandId": "iskratel",
    "category": "Active Devices",
    "sku": "SK-INNBOX-G11",
    "image": "/Solutions-Products/Iskratel/Innbox G11.jpg",
    "description": "High-performance FTTH optical network terminal (ONT) and enterprise residential gateway offering gigabit LAN switching, concurrent dual-band Wi-Fi, and carrier-grade voice VoIP ports.",
    "specs": [
      {
        "label": "WAN Interface",
        "value": "GPON SC/APC Class B+"
      },
      {
        "label": "LAN Ports",
        "value": "4x Gigabit 10/100/1000"
      },
      {
        "label": "Wireless",
        "value": "Concurrent Dual-Band"
      },
      {
        "label": "Voice Ports",
        "value": "2x FXS SIP VoIP"
      }
    ],
    "compliance": [
      "ITU-T G.984 / G.9807",
      "ETSI",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "iskratel-innbox-g21",
    "name": "Innbox G21",
    "brand": "Skratel / Iskratel",
    "brandId": "iskratel",
    "category": "Active Devices",
    "sku": "SK-INNBOX-G21",
    "image": "/Solutions-Products/Iskratel/Innbox G21.jpg",
    "description": "High-performance FTTH optical network terminal (ONT) and enterprise residential gateway offering gigabit LAN switching, concurrent dual-band Wi-Fi, and carrier-grade voice VoIP ports.",
    "specs": [
      {
        "label": "WAN Interface",
        "value": "GPON SC/APC Class B+"
      },
      {
        "label": "LAN Ports",
        "value": "4x Gigabit 10/100/1000"
      },
      {
        "label": "Wireless",
        "value": "Concurrent Dual-Band"
      },
      {
        "label": "Voice Ports",
        "value": "2x FXS SIP VoIP"
      }
    ],
    "compliance": [
      "ITU-T G.984 / G.9807",
      "ETSI",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "iskratel-innbox-64",
    "name": "Innbox 64",
    "brand": "Skratel / Iskratel",
    "brandId": "iskratel",
    "category": "Active Devices",
    "sku": "SK-INNBOX-64",
    "image": "/Solutions-Products/Iskratel/Innbox 64.jpg",
    "description": "High-performance FTTH optical network terminal (ONT) and enterprise residential gateway offering gigabit LAN switching, concurrent dual-band Wi-Fi, and carrier-grade voice VoIP ports.",
    "specs": [
      {
        "label": "WAN Interface",
        "value": "GPON SC/APC Class B+"
      },
      {
        "label": "LAN Ports",
        "value": "4x Gigabit 10/100/1000"
      },
      {
        "label": "Wireless",
        "value": "Concurrent Dual-Band"
      },
      {
        "label": "Voice Ports",
        "value": "2x FXS SIP VoIP"
      }
    ],
    "compliance": [
      "ITU-T G.984 / G.9807",
      "ETSI",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-5004-fttx-tool-kits",
    "name": "Joinwit 5004 FTTx Tool Kits",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-5004-FTTX",
    "image": "/Solutions-Products/Joinwit/Joinwit 5004 FTTx Tool Kits.png",
    "description": "Comprehensive telecom-grade FTTx fiber termination and preparation tool kit including precision cleaver, thermal stripper, Kevlar scissors, and optical cleaning supplies.",
    "specs": [
      {
        "label": "Cleaver Accuracy",
        "value": "< 0.5 Degree Angle"
      },
      {
        "label": "Stripper Gauge",
        "value": "3-Hole Fiber Stripper"
      },
      {
        "label": "Case Material",
        "value": "High-Impact Weatherproof"
      },
      {
        "label": "Application",
        "value": "FTTx Drop & Backbone"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-5001a-kit",
    "name": "Joinwit 5001A Kit",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-5001A-KIT",
    "image": "/Solutions-Products/Joinwit/Joinwit 5001A Kit.jpg",
    "description": "Comprehensive telecom-grade FTTx fiber termination and preparation tool kit including precision cleaver, thermal stripper, Kevlar scissors, and optical cleaning supplies.",
    "specs": [
      {
        "label": "Cleaver Accuracy",
        "value": "< 0.5 Degree Angle"
      },
      {
        "label": "Stripper Gauge",
        "value": "3-Hole Fiber Stripper"
      },
      {
        "label": "Case Material",
        "value": "High-Impact Weatherproof"
      },
      {
        "label": "Application",
        "value": "FTTx Drop & Backbone"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-4108",
    "name": "Joinwit 4108",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Fusion Machine",
    "sku": "JW-4108-PRO",
    "image": "/Solutions-Products/Joinwit/Joinwit 4108.jpg",
    "description": "High-precision industrial core-alignment optical fiber fusion splicer engineered for low splice loss, ultra-fast cycle times, automated arc calibration, and field-rugged durability.",
    "specs": [
      {
        "label": "Splice Time",
        "value": "6s Fast Splice"
      },
      {
        "label": "Heating Cycle",
        "value": "14-16s Quick Oven"
      },
      {
        "label": "Alignment",
        "value": "6-Motor Core Alignment"
      },
      {
        "label": "Battery Life",
        "value": "200+ Splice & Heat Cycles"
      }
    ],
    "compliance": [
      "Telcordia GR-765",
      "CE",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "joinwit-joinwit-3305",
    "name": "Joinwit 3305",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-3305-OPM",
    "image": "/Solutions-Products/Joinwit/Joinwit 3305.jpg",
    "description": "High-accuracy calibrated optical power meter supporting multi-wavelength attenuation measurement and insertion loss testing in telecom and enterprise fiber networks.",
    "specs": [
      {
        "label": "Calibrated Waves",
        "value": "850/1300/1310/1490/1550/1625"
      },
      {
        "label": "Measurement Range",
        "value": "-70 to +10 dBm"
      },
      {
        "label": "Connector Type",
        "value": "Universal 2.5mm / FC/SC"
      },
      {
        "label": "Battery Life",
        "value": "100+ Hours Operation"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-3302f-otdr",
    "name": "Joinwit 3302F OTDR",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-3302F-OTDR",
    "image": "/Solutions-Products/Joinwit/Joinwit 3302F OTDR.jpg",
    "description": "Precision optical time-domain reflectometer designed for rapid fiber fault location, splice loss analysis, reflectance testing, and comprehensive last-mile FTTx network characterization.",
    "specs": [
      {
        "label": "Wavelengths",
        "value": "1310 / 1550 nm SM"
      },
      {
        "label": "Dynamic Range",
        "value": "32 / 30 dB"
      },
      {
        "label": "Event Dead Zone",
        "value": "< 0.8 m"
      },
      {
        "label": "Display",
        "value": "Color Touchscreen"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-3213n-pon",
    "name": "Joinwit 3213N PON",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-3213N-PON",
    "image": "/Solutions-Products/Joinwit/Joinwit 3213N PON.jpg",
    "description": "High-accuracy calibrated optical power meter supporting multi-wavelength attenuation measurement and insertion loss testing in telecom and enterprise fiber networks.",
    "specs": [
      {
        "label": "PON Channels",
        "value": "1310 / 1490 / 1550 nm"
      },
      {
        "label": "Measurement",
        "value": "Simultaneous Voice/Data/RF"
      },
      {
        "label": "Pass/Fail Threshold",
        "value": "Programmable 10 Sets"
      },
      {
        "label": "Data Storage",
        "value": "1,000+ Result Records"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-3116",
    "name": "Joinwit 3116",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-3116-LS",
    "image": "/Solutions-Products/Joinwit/Joinwit 3116.jpg",
    "description": "Stabilized dual/multi-wavelength optical laser source providing ultra-low drift output for high-precision optical attenuation and fiber path continuity verification.",
    "specs": [
      {
        "label": "Output Wavelengths",
        "value": "1310 / 1550 nm"
      },
      {
        "label": "Output Power",
        "value": "> -5 dBm Stabilized"
      },
      {
        "label": "Modulation",
        "value": "CW, 270Hz, 1kHz, 2kHz"
      },
      {
        "label": "Output Drift",
        "value": "< ±0.05 dB / 15min"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "joinwit-joinwit-3105a-vfl",
    "name": "Joinwit 3105A VFL",
    "brand": "Joinwit",
    "brandId": "joinwit",
    "category": "Test Equipment",
    "sku": "JW-3105A-VFL",
    "image": "/Solutions-Products/Joinwit/Joinwit 3105A VFL.jpeg",
    "description": "Rugged pen-type red laser visual fault locator for pinpointing fiber breaks, severe bends, and faulty mechanical connectors across single-mode and multimode patch cables.",
    "specs": [
      {
        "label": "Laser Output",
        "value": "10mW Red Laser 650nm"
      },
      {
        "label": "Testing Distance",
        "value": "Up to 10-12 km"
      },
      {
        "label": "Modes",
        "value": "Continuous & Pulsed 2Hz"
      },
      {
        "label": "Connector",
        "value": "Universal 2.5mm Ferrules"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "planet-planet-igs-6325-16p4s",
    "name": "Planet IGS-6325-16P4S",
    "brand": "Planet",
    "brandId": "planet",
    "category": "Active Devices",
    "sku": "PLT-IGS-6325-16P4S",
    "image": "/Solutions-Products/Planet/Planet IGS-6325-16P4S.jpg",
    "description": "Industrial Layer 3 managed DIN-rail Gigabit switch providing high PoE+ power budget, optical SFP uplinks, hardware routing, and sub-20ms ERPS ring self-recovery for harsh environments.",
    "specs": [
      {
        "label": "PoE Capacity",
        "value": "360W Total (802.3at)"
      },
      {
        "label": "Switch Fabric",
        "value": "40 Gbps Non-Blocking"
      },
      {
        "label": "Operating Temp",
        "value": "-40°C to +75°C"
      },
      {
        "label": "Uplink Interfaces",
        "value": "4x 100/1000X SFP"
      }
    ],
    "compliance": [
      "IEEE 802.3at",
      "EN 50121-4 Railway",
      "FCC Class A",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "planet-planet-pwr-48v",
    "name": "Planet PWR-48V",
    "brand": "Planet",
    "brandId": "planet",
    "category": "Active Devices",
    "sku": "PLT-PWR-48V-DIN",
    "image": "/Solutions-Products/Planet/Planet PWR-48V.jpg",
    "description": "Industrial DIN-rail mounted DC power supply engineered for high efficiency, active PFC, overload protection, and reliable 24/7 industrial networking operations.",
    "specs": [
      {
        "label": "Throughput",
        "value": "Gigabit Wire-Speed"
      },
      {
        "label": "Power Input",
        "value": "Industrial Redundant"
      },
      {
        "label": "Operating Temp",
        "value": "-20°C to +70°C"
      },
      {
        "label": "Mounting",
        "value": "DIN-Rail / Rackmount"
      }
    ],
    "compliance": [
      "IEEE 802.3at",
      "EN 50121-4 Railway",
      "FCC Class A",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "planet-planet-igup-805at",
    "name": "Planet IGUP-805AT",
    "brand": "Planet",
    "brandId": "planet",
    "category": "Active Devices",
    "sku": "PLT-IGUP-805AT",
    "image": "/Solutions-Products/Planet/Planet IGUP-805AT.jpg",
    "description": "Ruggedized optical media converter bridging copper Ethernet to fiber optic infrastructure with extended temperature tolerance and stable long-range transmission.",
    "specs": [
      {
        "label": "Fiber Interface",
        "value": "100/1000Base-X SC/SFP"
      },
      {
        "label": "Copper Interface",
        "value": "10/100/1000Base-T RJ45"
      },
      {
        "label": "Distance",
        "value": "Up to 20 km Single-Mode"
      },
      {
        "label": "Power Input",
        "value": "Redundant DC Input"
      }
    ],
    "compliance": [
      "IEEE 802.3at",
      "EN 50121-4 Railway",
      "FCC Class A",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-90-unshielded-navigator-keystone-jack",
    "name": "Cat 6 90° Unshielded Navigator Keystone Jack",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-KJ-C6-NAV-90",
    "image": "/Solutions-Products/Premium Line/Cat 6 90° Unshielded Navigator Keystone Jack.png",
    "description": "High-performance RJ45 keystone jack engineered for high-density patch panels, featuring toolless termination, gold-plated contacts, and superior crosstalk cancellation.",
    "specs": [
      {
        "label": "Category",
        "value": "Cat 6 Component Compliant"
      },
      {
        "label": "Bandwidth",
        "value": "250 MHz Verified"
      },
      {
        "label": "Contact Plating",
        "value": "50µ Gold Over Nickel"
      },
      {
        "label": "Termination",
        "value": "Toolless Butterfly Snap"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-180-shielded-die-casting-keystone-jack",
    "name": "Cat 6 180˚ Shielded Die-Casting Keystone Jack",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-KJ-C6-180-S",
    "image": "/Solutions-Products/Premium Line/Cat 6 180˚ Shielded Die-Casting Keystone Jack.png",
    "description": "High-performance RJ45 keystone jack engineered for high-density patch panels, featuring toolless termination, gold-plated contacts, and superior crosstalk cancellation.",
    "specs": [
      {
        "label": "Category",
        "value": "Cat 6 Component Compliant"
      },
      {
        "label": "Bandwidth",
        "value": "250 MHz Verified"
      },
      {
        "label": "Contact Plating",
        "value": "50µ Gold Over Nickel"
      },
      {
        "label": "Termination",
        "value": "Toolless Butterfly Snap"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "premium-line-cat-6-180-unshielded-slim-shutter-keystone-jack",
    "name": "Cat 6 180˚ Unshielded Slim Shutter Keystone Jack",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-KJ-C6-180-U",
    "image": "/Solutions-Products/Premium Line/Cat 6 180˚ Unshielded Slim Shutter Keystone Jack.png",
    "description": "High-performance RJ45 keystone jack engineered for high-density patch panels, featuring toolless termination, gold-plated contacts, and superior crosstalk cancellation.",
    "specs": [
      {
        "label": "Category",
        "value": "Cat 6 Component Compliant"
      },
      {
        "label": "Bandwidth",
        "value": "250 MHz Verified"
      },
      {
        "label": "Contact Plating",
        "value": "50µ Gold Over Nickel"
      },
      {
        "label": "Termination",
        "value": "Toolless Butterfly Snap"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-shielded-in-line-coupler",
    "name": "Cat 6 Shielded In-line Coupler",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CPL-C6-SH-4",
    "image": "/Solutions-Products/Premium Line/Cat 6 Shielded In-line Coupler.png",
    "description": "Shielded feed-through RJ45 in-line coupler providing seamless pass-through connection between modular patch cords while maintaining high RF transmission integrity.",
    "specs": [
      {
        "label": "Performance",
        "value": "Cat 6 RJ45 Shielded"
      },
      {
        "label": "Shielding",
        "value": "Full Zinc-Alloy Shell"
      },
      {
        "label": "Mating Cycles",
        "value": "> 750 Insertions"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.15 dB"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-shielded-in-line-coupler-1",
    "name": "Cat 6 Shielded In-line Coupler",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CPL-C6-SH-5",
    "image": "/Solutions-Products/Premium Line/Cat 6 Shielded In-line Coupler_5.png",
    "description": "Shielded feed-through RJ45 in-line coupler providing seamless pass-through connection between modular patch cords while maintaining high RF transmission integrity.",
    "specs": [
      {
        "label": "Performance",
        "value": "Cat 6 RJ45 Shielded"
      },
      {
        "label": "Shielding",
        "value": "Full Zinc-Alloy Shell"
      },
      {
        "label": "Mating Cycles",
        "value": "> 750 Insertions"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.15 dB"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-f-utp-installation-cable-pvc-250mhz",
    "name": "Cat 6 F/UTP Installation Cable PVC 250MHz",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C6-FUTP-PVC",
    "image": "/Solutions-Products/Premium Line/Cat 6 F_UTP Installation Cable PVC 250MHz.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "23AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "250 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-6-f-utp-installation-cable-lsoh-250mhz",
    "name": "Cat 6 F/UTP Installation Cable LSOH 250MHz",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C6-FUTP-LSOH",
    "image": "/Solutions-Products/Premium Line/Cat 6 F_UTP Installation Cable LSOH 250MHz.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "23AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "250 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "LSOH / IEC 60332-1"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-prime-cat-5e-molded-booted-patch-cord",
    "name": "PRIME Cat 5e Molded Booted Patch Cord",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-SYS-108",
    "image": "/Solutions-Products/Premium Line/PRIME Cat 5e Molded Booted Patch Cord.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-retail-patch-cord-pvc-20m-red",
    "name": "Cat 5e U/UTP Retail Patch Cord PVC 20m Red",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PC-C5E-20M-RD",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Retail Patch Cord PVC 20m Red.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-retail-patch-cord-pvc-20m-blue",
    "name": "Cat 5e U/UTP Retail Patch Cord PVC 20m Blue",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PC-C5E-20M-BL",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Retail Patch Cord PVC 20m Blue.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-retail-patch-cord-pvc-20m-grey",
    "name": "Cat 5e U/UTP Retail Patch Cord PVC 20m Grey",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PC-C5E-20M-GY",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Retail Patch Cord PVC 20m Grey.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-retail-patch-cord-pvc-20m-green",
    "name": "Cat 5e U/UTP Retail Patch Cord PVC 20m Green",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PC-C5E-20M-GN",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Retail Patch Cord PVC 20m Green.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-retail-patch-cord-pvc-yellow",
    "name": "Cat 5e U/UTP Retail Patch Cord PVC Yellow",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PC-C5E-20M-YL",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Retail Patch Cord PVC Yellow.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-cable-management-bar-click-on-type",
    "name": "Cat 5e Cable Management Bar Click On Type",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CMB-C5E-CLICK",
    "image": "/Solutions-Products/Premium Line/Cat 5e Cable Management Bar Click On Type.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-cable-management-bar-screw-type",
    "name": "Cat 5e Cable Management Bar Screw Type",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CMB-C5E-SCREW",
    "image": "/Solutions-Products/Premium Line/Cat 5e Cable Management Bar Screw Type.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-installation-cable-100mhz-pvc",
    "name": "Cat 5e U/UTP Installation Cable 100MHz PVC",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5E-UUTP-PVC",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Installation Cable 100MHz PVC.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-installation-cable-100mhz-lsoh",
    "name": "Cat 5e U/UTP Installation Cable 100MHz LSOH",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5E-UUTP-LSOH",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Installation Cable 100MHz LSOH.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "LSOH / IEC 60332-1"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-f-utp-installation-cable-100mhz-pvc",
    "name": "Cat 5e F/UTP Installation Cable 100MHz PVC",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5E-FUTP-PVC",
    "image": "/Solutions-Products/Premium Line/Cat 5e F_UTP Installation Cable 100MHz PVC.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-f-utp-installation-cable-100mhz-lsoh",
    "name": "Cat 5e F/UTP Installation Cable 100MHz LSOH",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5E-FUTP-LSOH",
    "image": "/Solutions-Products/Premium Line/Cat 5e F_UTP Installation Cable 100MHz LSOH.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "LSOH / IEC 60332-1"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5e-u-utp-outdoor-installation-cable-gel-filled",
    "name": "Cat 5e U/UTP Outdoor Installation Cable Gel Filled",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5E-OUT-GEL",
    "image": "/Solutions-Products/Premium Line/Cat 5e U_UTP Outdoor Installation Cable Gel Filled.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5-u-utp-multipair-cable-25-pairs-pvc",
    "name": "Cat 5 U/UTP Multipair Cable 25 Pairs PVC",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5-MP25-PVC",
    "image": "/Solutions-Products/Premium Line/Cat 5 U_UTP Multipair Cable 25 Pairs PVC.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-cat-5-u-utp-multipair-cable-50-pairs-pvc",
    "name": "Cat 5 U/UTP Multipair Cable 50 Pairs PVC",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-CAB-C5-MP50-PVC",
    "image": "/Solutions-Products/Premium Line/Cat 5 U_UTP Multipair Cable 50 Pairs PVC.png",
    "description": "Solid bare copper horizontal installation cable engineered for low attenuation, minimal return loss, and compliance with stringent fire safety and data standards.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Solid Bare Copper"
      },
      {
        "label": "Bandwidth",
        "value": "100 MHz"
      },
      {
        "label": "Flame Rating",
        "value": "PVC Flame Retardant"
      },
      {
        "label": "Packaging",
        "value": "305m Easy-Pull Reel"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-sc-mm",
    "name": "Fully Loaded Adapter Plate 8 Port SC MM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8SC-MM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port SC MM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-st-mm",
    "name": "Fully Loaded Adapter Plate 8 Port ST MM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8ST-MM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port ST MM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-fc-mm",
    "name": "Fully Loaded Adapter Plate 8 Port FC MM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8FC-MM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port FC MM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-sc-sm",
    "name": "Fully Loaded Adapter Plate 8 Port SC SM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8SC-SM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port SC SM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-st-sm",
    "name": "Fully Loaded Adapter Plate 8 Port ST SM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8ST-SM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port ST SM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-fc-sm",
    "name": "Fully Loaded Adapter Plate 8 Port FC SM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8FC-SM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port FC SM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-lc-mm",
    "name": "Fully Loaded Adapter Plate 8 Port LC MM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8LC-MM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port LC MM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fully-loaded-adapter-plate-8-port-lc-sm",
    "name": "Fully Loaded Adapter Plate 8 Port LC SM",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FAP-8LC-SM",
    "image": "/Solutions-Products/Premium Line/Fully Loaded Adapter Plate 8 Port LC SM.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fiber-optic-adapter-support-module-sc",
    "name": "Fiber Optic Adapter Support Module SC",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-ASM-SC",
    "image": "/Solutions-Products/Premium Line/Fiber Optic Adapter Support Module SC.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fiber-optic-adapter-support-module-st",
    "name": "Fiber Optic Adapter Support Module ST",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-ASM-ST",
    "image": "/Solutions-Products/Premium Line/Fiber Optic Adapter Support Module ST.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-sc-pc-duplex-mm-adapter-beige",
    "name": "SC/PC Duplex MM Adapter Beige",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-SC-PC-DX-MM-BG",
    "image": "/Solutions-Products/Premium Line/SC_PC Duplex MM Adapter Beige.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-lc-pc-duplex-mm-adapter-beige",
    "name": "LC/PC Duplex MM Adapter Beige",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-LC-PC-DX-MM-BG",
    "image": "/Solutions-Products/Premium Line/LC_PC Duplex MM Adapter Beige.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-st-pc-mm-adapter",
    "name": "ST/PC MM Adapter",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-ST-PC-MM",
    "image": "/Solutions-Products/Premium Line/ST_PC MM Adapter.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fc-pc-mm-small-d-flange-adapter",
    "name": "FC/PC MM Small D-Flange Adapter",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-FC-PC-MM",
    "image": "/Solutions-Products/Premium Line/FC_PC MM Small D-Flange Adapter.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-sc-pc-duplex-sm-adapter-blue",
    "name": "SC/PC Duplex SM Adapter Blue",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-SC-PC-DX-SM-BL",
    "image": "/Solutions-Products/Premium Line/SC_PC Duplex SM Adapter Blue.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-lc-pc-duplex-sm-adapter-blue",
    "name": "LC/PC Duplex SM Adapter Blue",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-LC-PC-DX-SM-BL",
    "image": "/Solutions-Products/Premium Line/LC_PC Duplex SM Adapter Blue.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-st-pc-sm-adapter",
    "name": "ST/PC SM Adapter",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-ST-PC-SM",
    "image": "/Solutions-Products/Premium Line/ST_PC SM Adapter.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-fc-pc-sm-small-d-flange-adapter",
    "name": "FC/PC SM Small D-Flange Adapter",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-FC-PC-SM",
    "image": "/Solutions-Products/Premium Line/FC_PC SM Small D-Flange Adapter.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-single-selection-6u",
    "name": "Wall Mounted Cabinet Single Selection 6U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-SS-6U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Single Selection 6U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "6U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-single-selection-9u",
    "name": "Wall Mounted Cabinet Single Selection 9U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-SS-9U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Single Selection 9U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "9U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-single-selection-12u",
    "name": "Wall Mounted Cabinet Single Selection 12U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-SS-12U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Single Selection 12U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "12U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-single-selection-15u",
    "name": "Wall Mounted Cabinet Single Selection 15U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-SS-15U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Single Selection 15U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "15U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-single-selection",
    "name": "Wall Mounted Cabinet Single Selection",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-SS-STD",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Single Selection.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-network-server-cabinet-27u",
    "name": "Network Server Cabinet 27U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-NSC-27U-BLK",
    "image": "/Solutions-Products/Premium Line/Network Server Cabinet 27U.png",
    "description": "Standard 19-inch EIA-compliant network server cabinet built with high-grade cold-rolled steel, high-flow ventilation doors, and static load capacity engineered for dense data center deployments.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "27U"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-network-server-cabinet-32u",
    "name": "Network Server Cabinet 32U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-NSC-32U-BLK",
    "image": "/Solutions-Products/Premium Line/Network Server Cabinet 32U.png",
    "description": "Standard 19-inch EIA-compliant network server cabinet built with high-grade cold-rolled steel, high-flow ventilation doors, and static load capacity engineered for dense data center deployments.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "32U"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-network-server-cabinet-37u",
    "name": "Network Server Cabinet 37U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-NSC-37U-BLK",
    "image": "/Solutions-Products/Premium Line/Network Server Cabinet 37U.png",
    "description": "Standard 19-inch EIA-compliant network server cabinet built with high-grade cold-rolled steel, high-flow ventilation doors, and static load capacity engineered for dense data center deployments.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "37U"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-network-server-cabinet-42u",
    "name": "Network Server Cabinet 42U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-NSC-42U-BLK",
    "image": "/Solutions-Products/Premium Line/Network Server Cabinet 42U.png",
    "description": "Standard 19-inch EIA-compliant network server cabinet built with high-grade cold-rolled steel, high-flow ventilation doors, and static load capacity engineered for dense data center deployments.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "42U"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-network-server-cabinet-47u",
    "name": "Network Server Cabinet 47U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-NSC-47U-BLK",
    "image": "/Solutions-Products/Premium Line/Network Server Cabinet 47U.png",
    "description": "Standard 19-inch EIA-compliant network server cabinet built with high-grade cold-rolled steel, high-flow ventilation doors, and static load capacity engineered for dense data center deployments.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "47U"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-dual-selection-6u",
    "name": "Wall Mounted Cabinet Dual Selection 6U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-DS-6U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Dual Selection 6U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "6U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-dual-selection-9u",
    "name": "Wall Mounted Cabinet Dual Selection 9U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-DS-9U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Dual Selection 9U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "9U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-dual-selection-12u",
    "name": "Wall Mounted Cabinet Dual Selection 12U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-DS-12U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Dual Selection 12U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "12U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-dual-selection-15u",
    "name": "Wall Mounted Cabinet Dual Selection 15U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-DS-15U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Dual Selection 15U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "15U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-wall-mounted-cabinet-dual-selection-18u",
    "name": "Wall Mounted Cabinet Dual Selection 18U",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-WMC-DS-18U",
    "image": "/Solutions-Products/Premium Line/Wall Mounted Cabinet Dual Selection 18U.png",
    "description": "Heavy-duty wall-mounted 19-inch equipment enclosure featuring toughened smoked glass front door, removable side panels, top/bottom cable entry, and electrostatic powder coating.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "18U"
      },
      {
        "label": "Mounting Style",
        "value": "Wall Mount (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "60 - 80 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "Smoked Tempered Glass"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x1070x1992",
    "name": "Enhanced Network Server Cabinet 800x1070x1992",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8010-1992",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x1070x1992.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x1070x2259",
    "name": "Enhanced Network Server Cabinet 800x1070x2259",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8010-2259",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x1070x2259.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x1200x1992",
    "name": "Enhanced Network Server Cabinet 800x1200x1992",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8012-1992",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x1200x1992.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x1200x2259",
    "name": "Enhanced Network Server Cabinet 800x1200x2259",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8012-2259",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x1200x2259.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x800x1992",
    "name": "Enhanced Network Server Cabinet 800x800x1992",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8080-1992",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x800x1992.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-enhanced-network-server-cabinet-800x800x2259",
    "name": "Enhanced Network Server Cabinet 800x800x2259",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Data Cabinet",
    "sku": "PL-ENSC-8080-2259",
    "image": "/Solutions-Products/Premium Line/Enhanced Network Server Cabinet 800x800x2259.png",
    "description": "High-density enterprise server cabinet with 80% honeycomb high-ventilation perforated doors, heavy-gauge steel frame, multi-point locking, and optimized vertical cable pathways.",
    "specs": [
      {
        "label": "Rack Height",
        "value": "Standard EIA"
      },
      {
        "label": "Mounting Style",
        "value": "Floor Server (19-inch)"
      },
      {
        "label": "Static Load",
        "value": "800 - 1000 kg"
      },
      {
        "label": "Ventilation Door",
        "value": "80% Perforated Mesh"
      }
    ],
    "compliance": [
      "ANSI/EIA RS-310-D",
      "DIN 41494",
      "IEC 60297-2",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-4-50-125",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 4, 50/125",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-4C-50-125",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 4, 50_125.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "4 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-6-50-1251",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 6, 50/1251",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-6C-50-125",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 6, 50_1251.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "6 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-8-50-125",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 8, 50/125",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-8C-50-125",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 8, 50_125.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-12-50-125",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 12, 50/125",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-12C-50-125",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 12, 50_125.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "12 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-24-50-125",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 24, 50/125",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-24C-50-125",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 24, 50_125.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "24 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-4-50-125-om3",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 4, 50/125 (OM3)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-4C-OM3",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 4, 50_125 (OM3).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "4 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-6-50-125-om3",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 6, 50/125 (OM3)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-6C-OM3",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 6, 50_125 (OM3).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "6 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-8-50-125-om3",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 8, 50/125 (OM3)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-8C-OM3",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 8, 50_125 (OM3).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-12-50-125-om3",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 12, 50/125 (OM3)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-12C-OM3",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 12, 50_125 (OM3).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "12 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-24-50-125-om3",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 24, 50/125 (OM3)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-24C-OM3",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC PE 24, 50_125 (OM3).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "24 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-4-50-125-om4",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 4, 50/125 (OM4)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-4C-OM4",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 4, 50_125 (OM4).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "4 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-6-50-125-om4",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 6, 50/125 (OM4)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-6C-OM4",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 6, 50_125 (OM4).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "6 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-8-50-125-om4",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 8, 50/125 (OM4)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-8C-OM4",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 8, 50_125 (OM4).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-12-50-125-om4",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 12, 50/125 (OM4)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-12C-OM4",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 12, 50_125 (OM4).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "12 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-outdoor-parallel-steel-wires-steel-armored-uni-tube-foc-pe-24-50-125-om4",
    "name": "Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 24, 50/125 (OM4)",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-ARM-24C-OM4",
    "image": "/Solutions-Products/Premium Line/Outdoor Parallel Steel Wires & Steel Armored Uni-tube FOC, PE 24, 50_125 (OM4).png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "24 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Parallel Steel Wire Armor"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-12",
    "name": "Figure 8 Fiber Optic Cable 12",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-12C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 12.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-24",
    "name": "Figure 8 Fiber Optic Cable 24",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-24C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 24.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-48",
    "name": "Figure 8 Fiber Optic Cable 48",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-48C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 48.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-72",
    "name": "Figure 8 Fiber Optic Cable 72",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-72C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 72.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-96",
    "name": "Figure 8 Fiber Optic Cable 96",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-96C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 96.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-figure-8-fiber-optic-cable-144",
    "name": "Figure 8 Fiber Optic Cable 144",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-FOC-FIG8-144C",
    "image": "/Solutions-Products/Premium Line/Figure 8 Fiber Optic Cable 144.png",
    "description": "Heavy-duty armored or aerial outdoor optical fiber cable engineered with water-blocking compounds, UV-resistant PE jacket, and tensile strength members for long-span durability.",
    "specs": [
      {
        "label": "Fiber Cores",
        "value": "8 Cores"
      },
      {
        "label": "Armor / Support",
        "value": "Steel Messenger Wire"
      },
      {
        "label": "Outer Sheath",
        "value": "UV-Resistant High-Density PE"
      },
      {
        "label": "Attenuation",
        "value": "< 0.36 dB/km (1310nm)"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-12-pack-pigtail-lc-upc-om3",
    "name": "12 Pack Pigtail LC/UPC OM3",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-PT-12LC-OM3",
    "image": "/Solutions-Products/Premium Line/12 Pack Pigtail LC_UPC OM3.png",
    "description": "Factory-terminated and machine-polished optical fiber pigtail pack featuring precision LC/UPC connectors and low insertion loss for fusion splicing in fiber distribution trays.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-sc-apc-duplex-sm-adapter-green",
    "name": "SC/APC Duplex SM Adapter Green",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-SC-APC-SM-GN",
    "image": "/Solutions-Products/Premium Line/SC_APC Duplex SM Adapter Green.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "premium-line-lc-apc-duplex-sm-adapter-green",
    "name": "LC/APC Duplex SM Adapter Green",
    "brand": "Premium Line",
    "brandId": "premium-line",
    "category": "Structured Cabling",
    "sku": "PL-AD-LC-APC-SM-GN",
    "image": "/Solutions-Products/Premium Line/LC_APC Duplex SM Adapter Green.png",
    "description": "Precision optical adapter assembly featuring low-insertion-loss zirconia ceramic alignment sleeves for stable single-mode or multimode optical fiber interconnection.",
    "specs": [
      {
        "label": "Alignment Sleeve",
        "value": "Precision Zirconia Ceramic"
      },
      {
        "label": "Insertion Loss",
        "value": "< 0.20 dB Typical"
      },
      {
        "label": "Return Loss",
        "value": "> 50 dB (UPC) / > 60 dB (APC)"
      },
      {
        "label": "Mating Cycles",
        "value": "> 1,000 Operations"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "GHMT Certified",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "prime-prime-5kw-enterprise-data-center",
    "name": "PRIME 5kW Enterprise Data Center",
    "brand": "Prime",
    "brandId": "prime",
    "category": "Modular Data Center",
    "sku": "PR-MDC-5KW-42U",
    "image": "/Solutions-Products/Prime/PRIME 5kW Enterprise Data Center.jpg",
    "description": "Enterprise modular edge micro data center with self-contained inverter cooling, integrated N+1 UPS power, cold-aisle glass containment, and smart remote environmental monitoring.",
    "specs": [
      {
        "label": "Cooling Capacity",
        "value": "5kW DC Inverter"
      },
      {
        "label": "Rack Space",
        "value": "42U Standard Frame"
      },
      {
        "label": "Power Backup",
        "value": "N+1 Modular Rack UPS"
      },
      {
        "label": "Efficiency",
        "value": "PUE < 1.25 Nominal"
      }
    ],
    "compliance": [
      "UL 2416",
      "ISO 9001",
      "Tier III Ready",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "prime-prime-2kw-enterprise-data-center",
    "name": "PRIME 2kW Enterprise Data Center",
    "brand": "Prime",
    "brandId": "prime",
    "category": "Modular Data Center",
    "sku": "PR-MDC-2KW-24U",
    "image": "/Solutions-Products/Prime/PRIME 2kW Enterprise Data Center.jpg",
    "description": "Enterprise modular edge micro data center with self-contained inverter cooling, integrated N+1 UPS power, cold-aisle glass containment, and smart remote environmental monitoring.",
    "specs": [
      {
        "label": "Cooling Capacity",
        "value": "2kW DC Inverter"
      },
      {
        "label": "Rack Space",
        "value": "24U Compact Frame"
      },
      {
        "label": "Power Backup",
        "value": "N+1 Modular Rack UPS"
      },
      {
        "label": "Efficiency",
        "value": "PUE < 1.25 Nominal"
      }
    ],
    "compliance": [
      "UL 2416",
      "ISO 9001",
      "Tier III Ready",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "prime-prime-cat-5e-molded-booted-patch-cord",
    "name": "PRIME Cat 5e Molded Booted Patch Cord",
    "brand": "Prime",
    "brandId": "prime",
    "category": "Structured Cabling",
    "sku": "PR-C5E-MBPC-BL",
    "image": "/Solutions-Products/Prime/PRIME Cat 5e Molded Booted Patch Cord.png",
    "description": "High-flex stranded copper patch cord equipped with snagless molded strain-relief boots and 50-micron gold-plated RJ45 connectors for reliable data distribution.",
    "specs": [
      {
        "label": "Conductor",
        "value": "24AWG Stranded Copper"
      },
      {
        "label": "Jacket",
        "value": "Molded Snagless PVC"
      },
      {
        "label": "Plug",
        "value": "50µ Gold Plated RJ45"
      },
      {
        "label": "Testing",
        "value": "100% Component Tested"
      }
    ],
    "compliance": [
      "ANSI/TIA-568.2-D",
      "ISO/IEC 11801",
      "UL Listed"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "shinewaytech-shinewaytech-sls-50",
    "name": "Shinewaytech SLS-50",
    "brand": "Shinewaytech",
    "brandId": "shinewaytech",
    "category": "Test Equipment",
    "sku": "SW-SLS-50",
    "image": "/Solutions-Products/Shinewaytech/Shinewaytech SLS-50.jpg",
    "description": "Stabilized dual/multi-wavelength optical laser source providing ultra-low drift output for high-precision optical attenuation and fiber path continuity verification.",
    "specs": [
      {
        "label": "Output Wavelengths",
        "value": "1310 / 1550 nm"
      },
      {
        "label": "Output Power",
        "value": "> -5 dBm Stabilized"
      },
      {
        "label": "Modulation",
        "value": "CW, 270Hz, 1kHz, 2kHz"
      },
      {
        "label": "Output Drift",
        "value": "< ±0.05 dB / 15min"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "shinewaytech-shinewaytech-palmotdr",
    "name": "Shinewaytech PalmOTDR",
    "brand": "Shinewaytech",
    "brandId": "shinewaytech",
    "category": "Test Equipment",
    "sku": "SW-PALM-OTDR",
    "image": "/Solutions-Products/Shinewaytech/Shinewaytech PalmOTDR.jpg",
    "description": "Precision optical time-domain reflectometer designed for rapid fiber fault location, splice loss analysis, reflectance testing, and comprehensive last-mile FTTx network characterization.",
    "specs": [
      {
        "label": "Wavelengths",
        "value": "1310 / 1550 nm SM"
      },
      {
        "label": "Dynamic Range",
        "value": "Up to 38 dB"
      },
      {
        "label": "Event Dead Zone",
        "value": "< 0.8 m"
      },
      {
        "label": "Display",
        "value": "Color Touchscreen"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "shinewaytech-shinewaytech-opm-50",
    "name": "Shinewaytech OPM-50",
    "brand": "Shinewaytech",
    "brandId": "shinewaytech",
    "category": "Test Equipment",
    "sku": "SW-OPM-50",
    "image": "/Solutions-Products/Shinewaytech/Shinewaytech OPM-50.jpg",
    "description": "High-accuracy calibrated optical power meter supporting multi-wavelength attenuation measurement and insertion loss testing in telecom and enterprise fiber networks.",
    "specs": [
      {
        "label": "Calibrated Waves",
        "value": "850/1300/1310/1490/1550/1625"
      },
      {
        "label": "Measurement Range",
        "value": "-70 to +10 dBm"
      },
      {
        "label": "Connector Type",
        "value": "Universal 2.5mm / FC/SC"
      },
      {
        "label": "Battery Life",
        "value": "100+ Hours Operation"
      }
    ],
    "compliance": [
      "CE",
      "FCC",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "shinewaytech-shinewaytech-ofs-95s",
    "name": "Shinewaytech OFS - 95S",
    "brand": "Shinewaytech",
    "brandId": "shinewaytech",
    "category": "Fusion Machine",
    "sku": "SW-OFS-95S",
    "image": "/Solutions-Products/Shinewaytech/Shinewaytech OFS - 95S.jpg",
    "description": "High-precision industrial core-alignment optical fiber fusion splicer engineered for low splice loss, ultra-fast cycle times, automated arc calibration, and field-rugged durability.",
    "specs": [
      {
        "label": "Splice Time",
        "value": "7s Quick Splice"
      },
      {
        "label": "Heating Cycle",
        "value": "14-16s Quick Oven"
      },
      {
        "label": "Alignment",
        "value": "6-Motor Core Alignment"
      },
      {
        "label": "Battery Life",
        "value": "200+ Splice & Heat Cycles"
      }
    ],
    "compliance": [
      "Telcordia GR-765",
      "CE",
      "ISO 9001",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "vitec-vitec-e3832-encoder",
    "name": "VITEC e3832 Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3832",
    "image": "/Solutions-Products/VITEC/VITEC e3832 Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-e3832-hdcp-32-encoder",
    "name": "VITEC e3832 hdcp-32 Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3832",
    "image": "/Solutions-Products/VITEC/VITEC e3832 hdcp-32 Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-e3832-hdcp-pro-encoder",
    "name": "VITEC e3832 hdcp-pro Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3832",
    "image": "/Solutions-Products/VITEC/VITEC e3832 hdcp-pro Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-e3830-encoder",
    "name": "VITEC e3830 Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3830",
    "image": "/Solutions-Products/VITEC/VITEC e3830 Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-e3830-hdcp-32-encoder",
    "name": "VITEC e3830 hdcp-32 Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3830",
    "image": "/Solutions-Products/VITEC/VITEC e3830 hdcp-32 Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-e3830-hdcp-pro-encoder",
    "name": "VITEC e3830 hdcp-pro Encoder",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-E3830",
    "image": "/Solutions-Products/VITEC/VITEC e3830 hdcp-pro Encoder.png",
    "description": "Professional enterprise video encoder delivering broadcast-quality low-latency IP streaming with hardware video compression, HDCP protection, and wide protocol compatibility.",
    "specs": [
      {
        "label": "Video Compression",
        "value": "H.264 / HEVC HD/4K"
      },
      {
        "label": "Input Resolution",
        "value": "Up to 1080p60 / 4K UHD"
      },
      {
        "label": "Protocols",
        "value": "UDP, RTP, RTSP, SRT"
      },
      {
        "label": "Latency",
        "value": "Ultra-Low Sub-Frame"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-r9300-media-player",
    "name": "VITEC r9300 Media Player",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-R9300",
    "image": "/Solutions-Products/VITEC/VITEC r9300 Media Player.png",
    "description": "Solid-state fanless high-performance media player and IPTV receiver engineered for 24/7 continuous digital signage displays, interactive kiosks, and video wall installations.",
    "specs": [
      {
        "label": "Video Output",
        "value": "HDMI 2.0 4K60 UHD"
      },
      {
        "label": "Storage",
        "value": "Solid State Fanless"
      },
      {
        "label": "Network",
        "value": "Gigabit LAN with PoE"
      },
      {
        "label": "Content Control",
        "value": "Centralized IPTV / Signage"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-m9500-media-player",
    "name": "VITEC m9500 Media Player",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-M9500",
    "image": "/Solutions-Products/VITEC/VITEC m9500 Media Player.png",
    "description": "Solid-state fanless high-performance media player and IPTV receiver engineered for 24/7 continuous digital signage displays, interactive kiosks, and video wall installations.",
    "specs": [
      {
        "label": "Video Output",
        "value": "HDMI 2.0 4K60 UHD"
      },
      {
        "label": "Storage",
        "value": "Solid State Fanless"
      },
      {
        "label": "Network",
        "value": "Gigabit LAN with PoE"
      },
      {
        "label": "Content Control",
        "value": "Centralized IPTV / Signage"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-m9405-media-player",
    "name": "VITEC m9405 Media Player",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-M9405",
    "image": "/Solutions-Products/VITEC/VITEC m9405 Media Player.png",
    "description": "Solid-state fanless high-performance media player and IPTV receiver engineered for 24/7 continuous digital signage displays, interactive kiosks, and video wall installations.",
    "specs": [
      {
        "label": "Video Output",
        "value": "HDMI 2.0 4K60 UHD"
      },
      {
        "label": "Storage",
        "value": "Solid State Fanless"
      },
      {
        "label": "Network",
        "value": "Gigabit LAN with PoE"
      },
      {
        "label": "Content Control",
        "value": "Centralized IPTV / Signage"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-m9400-media-player",
    "name": "VITEC m9400 Media Player",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-M9400",
    "image": "/Solutions-Products/VITEC/VITEC m9400 Media Player.png",
    "description": "Solid-state fanless high-performance media player and IPTV receiver engineered for 24/7 continuous digital signage displays, interactive kiosks, and video wall installations.",
    "specs": [
      {
        "label": "Video Output",
        "value": "HDMI 2.0 4K60 UHD"
      },
      {
        "label": "Storage",
        "value": "Solid State Fanless"
      },
      {
        "label": "Network",
        "value": "Gigabit LAN with PoE"
      },
      {
        "label": "Content Control",
        "value": "Centralized IPTV / Signage"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-m9305-media-player",
    "name": "VITEC m9305 Media Player",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-M9305",
    "image": "/Solutions-Products/VITEC/VITEC m9305 Media Player.png",
    "description": "Solid-state fanless high-performance media player and IPTV receiver engineered for 24/7 continuous digital signage displays, interactive kiosks, and video wall installations.",
    "specs": [
      {
        "label": "Video Output",
        "value": "HDMI 2.0 4K60 UHD"
      },
      {
        "label": "Storage",
        "value": "Solid State Fanless"
      },
      {
        "label": "Network",
        "value": "Gigabit LAN with PoE"
      },
      {
        "label": "Content Control",
        "value": "Centralized IPTV / Signage"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-c1103-chassis",
    "name": "VITEC c1103 Chassis",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-C1103",
    "image": "/Solutions-Products/VITEC/VITEC c1103 Chassis.png",
    "description": "High-density modular rackmount chassis designed to power, house, and manage multiple hot-swappable enterprise IPTV encoder and streaming gateway blades.",
    "specs": [
      {
        "label": "Slot Capacity",
        "value": "3-Blade 1U Chassis"
      },
      {
        "label": "Power Supplies",
        "value": "Hot-Swap Dual Redundant"
      },
      {
        "label": "Cooling",
        "value": "Forced-Air Fan Trays"
      },
      {
        "label": "Mounting",
        "value": "19-Inch EIA Rackmount"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-c1101-chassis",
    "name": "VITEC c1101 Chassis",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-C1101",
    "image": "/Solutions-Products/VITEC/VITEC c1101 Chassis.png",
    "description": "High-density modular rackmount chassis designed to power, house, and manage multiple hot-swappable enterprise IPTV encoder and streaming gateway blades.",
    "specs": [
      {
        "label": "Slot Capacity",
        "value": "1-Slot Desktop/Shelf"
      },
      {
        "label": "Power Supplies",
        "value": "Hot-Swap Dual Redundant"
      },
      {
        "label": "Cooling",
        "value": "Forced-Air Fan Trays"
      },
      {
        "label": "Mounting",
        "value": "19-Inch EIA Rackmount"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-c1210-chassis",
    "name": "VITEC c1210 Chassis",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-C1210",
    "image": "/Solutions-Products/VITEC/VITEC c1210 Chassis.png",
    "description": "High-density modular rackmount chassis designed to power, house, and manage multiple hot-swappable enterprise IPTV encoder and streaming gateway blades.",
    "specs": [
      {
        "label": "Slot Capacity",
        "value": "10-Blade 3U Chassis"
      },
      {
        "label": "Power Supplies",
        "value": "Hot-Swap Dual Redundant"
      },
      {
        "label": "Cooling",
        "value": "Forced-Air Fan Trays"
      },
      {
        "label": "Mounting",
        "value": "19-Inch EIA Rackmount"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4548-rf-gateway",
    "name": "VITEC g4548 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4548",
    "image": "/Solutions-Products/VITEC/VITEC g4548 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4542-rf-gateway",
    "name": "VITEC g4542 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4542",
    "image": "/Solutions-Products/VITEC/VITEC g4542 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4540-rf-gateway",
    "name": "VITEC g4540 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4540",
    "image": "/Solutions-Products/VITEC/VITEC g4540 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4518-rf-gateway",
    "name": "VITEC g4518 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4518",
    "image": "/Solutions-Products/VITEC/VITEC g4518 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4512-rf-gateway",
    "name": "VITEC g4512 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4512",
    "image": "/Solutions-Products/VITEC/VITEC g4512 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4510-rf-gateway",
    "name": "VITEC g4510 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4510",
    "image": "/Solutions-Products/VITEC/VITEC g4510 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-vitec-g4517-rf-gateway",
    "name": "VITEC g4517 RF Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4517",
    "image": "/Solutions-Products/VITEC/VITEC g4517 RF Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": false
  },
  {
    "id": "vitec-avediastream-g4415-lk-gateway",
    "name": "AvediaStream g4415-lk Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4415",
    "image": "/Solutions-Products/VITEC/AvediaStream g4415-lk Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "vitec-avediastream-g4401-gateway",
    "name": "AvediaStream g4401 Gateway",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-G4401",
    "image": "/Solutions-Products/VITEC/AvediaStream g4401 Gateway.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  },
  {
    "id": "vitec-avediastream-gateway-avstr-g4448-us",
    "name": "AvediaStream Gateway avstr-g4448-us",
    "brand": "VITEC",
    "brandId": "vitec",
    "category": "Digital Signage Solution",
    "sku": "VT-AVSTR-G4448-US",
    "image": "/Solutions-Products/VITEC/AvediaStream Gateway avstr-g4448-us.png",
    "description": "Enterprise RF-to-IP streaming gateway ingesting terrestrial, satellite, or cable broadcast signals and converting them into multicasted IP streams across corporate networks.",
    "specs": [
      {
        "label": "RF Ingest",
        "value": "DVB-S/S2/T/T2 Dual Tuner"
      },
      {
        "label": "Streaming Output",
        "value": "IP Multicast / Unicast"
      },
      {
        "label": "Conditional Access",
        "value": "Dual DVB-CI Slots"
      },
      {
        "label": "Management",
        "value": "HTTPS REST Web GUI"
      }
    ],
    "compliance": [
      "HDCP 2.2",
      "Broadcast DVB",
      "FCC Part 15",
      "CE",
      "RoHS"
    ],
    "datasheetAvailable": true,
    "featured": true
  }
];
