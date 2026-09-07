export const STAINLESS_GRADES = [
  {
    id: '304',
    name: 'Stainless Steel 304 / 304L',
    standard: 'UNS S30400 / S30403 | Werkstoff 1.4301 / 1.4306',
    tagline: 'Standard Commercial & Architectural Grade',
    corrosionRating: 'High',
    tempRange: '-196°C to +800°C',
    tensileStrength: '515 MPa (75 ksi) min',
    yieldStrength: '205 MPa (30 ksi) min',
    chemical: { Cr: '18.0 - 20.0%', Ni: '8.0 - 10.5%', C: '0.030% max (304L)', Mo: '—', Mn: '2.0% max' },
    applications: ['Potable Water Systems', 'Food Processing Equipment', 'HVAC & Refrigeration', 'General Architectural Piping'],
    popularIn: ['Saudi Arabia (Riyadh & Jeddah)', 'UAE (Dubai Urban Projects)']
  },
  {
    id: '316',
    name: 'Stainless Steel 316 / 316L',
    standard: 'UNS S31600 / S31603 | Werkstoff 1.4401 / 1.4404',
    tagline: 'Marine & High Chemical Resistance (Molybdenum Enhanced)',
    corrosionRating: 'Superior (Pitting Resistant)',
    tempRange: '-196°C to +870°C',
    tensileStrength: '580 MPa (84 ksi) min',
    yieldStrength: '290 MPa (42 ksi) min',
    chemical: { Cr: '16.0 - 18.0%', Ni: '10.0 - 14.0%', C: '0.030% max (316L)', Mo: '2.0 - 3.0%', Mn: '2.0% max' },
    applications: ['Offshore Oil & Gas Platforms', 'Desalination Plants (Red Sea & Arabian Gulf)', 'Chemical Processing Pipelines', 'Subsea Manifolds'],
    popularIn: ['Jebel Ali Port UAE', 'Jubail Industrial City KSA', 'Ras Laffan Qatar']
  },
  {
    id: '316ti',
    name: 'Stainless Steel 316Ti',
    standard: 'UNS S31635 | Werkstoff 1.4571',
    tagline: 'Titanium-Stabilized High Temperature Grade',
    corrosionRating: 'Ultra-High Thermal',
    tempRange: '-196°C to +900°C',
    tensileStrength: '585 MPa min',
    yieldStrength: '295 MPa min',
    chemical: { Cr: '16.5 - 18.5%', Ni: '10.5 - 13.5%', C: '0.08% max', Mo: '2.0 - 2.5%', Ti: '5x (C+N) to 0.70%' },
    applications: ['High Temp Exhaust Flanges', 'Petrochemical Refineries', 'Heat Exchangers', 'Power Generation Plants'],
    popularIn: ['Yanbu Industrial City KSA', 'Abu Dhabi ADNOC Facilities']
  },
  {
    id: 'duplex2205',
    name: 'Duplex Stainless Steel 2205',
    standard: 'UNS S31803 / S32205 | Werkstoff 1.4462',
    tagline: 'Austenitic-Ferritic Dual Phase for Extreme Pressure & Chloride Duty',
    corrosionRating: 'Extreme (PREN ≥ 34)',
    tempRange: '-50°C to +300°C',
    tensileStrength: '620 - 880 MPa',
    yieldStrength: '450 MPa min',
    chemical: { Cr: '22.0 - 23.0%', Ni: '4.5 - 6.5%', C: '0.030% max', Mo: '3.0 - 3.5%', N: '0.14 - 0.20%' },
    applications: ['High Pressure Oil Pipelines', 'High Chloride Reverse Osmosis Desalination', 'Sour Gas Processing (H2S Service)', 'Acid Storage Systems'],
    popularIn: ['Aramco Onshore/Offshore KSA', 'PDO Oman', 'QP Qatar']
  }
];

export const FLANGE_TYPES = [
  { code: 'WN', name: 'Weld Neck Flange (WN)', desc: 'High pressure pipelines with tapered neck welded to pipe. Reduces stress concentration.', standards: 'ANSI B16.5 / ASME B16.47' },
  { code: 'SO', name: 'Slip-On Flange (SO)', desc: 'Fillet welded inside and outside. Easy alignment and economical installation.', standards: 'ANSI B16.5 / EN 1092-1' },
  { code: 'BL', name: 'Blind Flange (BL)', desc: 'Used to blank off pipeline ends, valves, or pressure vessel openings.', standards: 'ANSI B16.5 / DIN 2527' },
  { code: 'SW', name: 'Socket Weld Flange (SW)', desc: 'Smooth bore design for small-diameter high-pressure piping applications.', standards: 'ANSI B16.5 / ASME B16.11' },
  { code: 'TH', name: 'Threaded Flange (NPT/BSPT)', desc: 'Screwed connection without welding; ideal for hazardous low-pressure lines.', standards: 'ANSI B16.5 / ASME B1.20.1' },
  { code: 'LJ', name: 'Lap Joint Flange (LJ)', desc: 'Used with Stub End fittings for easy bolt hole alignment during disassembly.', standards: 'ANSI B16.5 / DIN 2642' }
];

export const SPECIFICATIONS_TABLE = [
  { id: 'SPEC-01', type: 'Weld Neck (WN)', class: '150#', size: '1/2" to 24"', facing: 'RF / RTJ', wallThk: 'Sch 10S to Sch 160 / XXS', standard: 'ASME B16.5', weightKg: '1.2 - 45.0' },
  { id: 'SPEC-02', type: 'Weld Neck (WN)', class: '300#', size: '1/2" to 24"', facing: 'RF / RTJ', wallThk: 'Sch 40S / Sch 80S', standard: 'ASME B16.5', weightKg: '1.8 - 62.0' },
  { id: 'SPEC-03', type: 'Weld Neck (WN)', class: '600#', size: '1/2" to 24"', facing: 'RTJ (Ring Type Joint)', wallThk: 'Sch 80S / Sch 160', standard: 'ASME B16.5', weightKg: '2.5 - 98.0' },
  { id: 'SPEC-04', type: 'Weld Neck (WN)', class: '1500# / 2500#', size: '1/2" to 12"', facing: 'RTJ', wallThk: 'Sch 160 / XXS', standard: 'ASME B16.5', weightKg: '4.5 - 140.0' },
  { id: 'SPEC-05', type: 'Slip-On (SO)', class: '150#', size: '1/2" to 48"', facing: 'RF (Raised Face) / FF', wallThk: 'Standard Pipe Fit', standard: 'ASME B16.5 / B16.47', weightKg: '0.9 - 85.0' },
  { id: 'SPEC-06', type: 'Slip-On (SO)', class: '300#', size: '1/2" to 36"', facing: 'RF', wallThk: 'Standard Pipe Fit', standard: 'ASME B16.5', weightKg: '1.4 - 110.0' },
  { id: 'SPEC-07', type: 'Blind Flange (BL)', class: '150#', size: '1/2" to 36"', facing: 'RF / FF', wallThk: 'Solid Forged Disc', standard: 'ASME B16.5 / DIN 2527', weightKg: '1.0 - 130.0' },
  { id: 'SPEC-08', type: 'Blind Flange (BL)', class: '300# / 600#', size: '1/2" to 24"', facing: 'RTJ / RF', wallThk: 'Solid Heavy Duty', standard: 'ASME B16.5', weightKg: '2.2 - 175.0' },
  { id: 'SPEC-09', type: 'Socket Weld (SW)', class: '150# / 300# / 600#', size: '1/2" to 4"', facing: 'RF', wallThk: 'Matching Pipe Bore', standard: 'ASME B16.5', weightKg: '0.8 - 12.5' },
  { id: 'SPEC-10', type: 'Threaded (TH)', class: '150# / 300#', size: '1/2" to 6"', facing: 'RF / NPT Threads', wallThk: 'NPT Female Threaded', standard: 'ASME B16.5', weightKg: '0.7 - 18.0' }
];

export const MIDDLE_EAST_PORTS = [
  { country: 'Saudi Arabia', flag: '🇸🇦', mainPorts: ['King Abdulaziz Port (Dammam)', 'Jeddah Islamic Port', 'Yanbu Commercial Port'], transitDays: '3 - 5 Days Air / 7 - 10 Days Sea', dutyExemption: 'GCC Customs Duty Exemption Certificate Available' },
  { country: 'United Arab Emirates', flag: '🇦🇪', mainPorts: ['Jebel Ali Port (Dubai)', 'Khalifa Port (Abu Dhabi)', 'Sharjah Port'], transitDays: '2 - 4 Days Express Sea', dutyExemption: 'Free Zone Direct Transit Duty Exemption' },
  { country: 'Qatar', flag: '🇶🇦', mainPorts: ['Hamad Port (Doha)', 'Ras Laffan Port'], transitDays: '4 - 6 Days', dutyExemption: 'Customs Pre-Clearance Facilitated' },
  { country: 'Oman', flag: '🇴🇲', mainPorts: ['Sohar Port', 'Salalah Port', 'Duqm Port'], transitDays: '3 - 5 Days Direct Freight', dutyExemption: 'GCC FTA Compliant' },
  { country: 'Kuwait', flag: '🇰🇼', mainPorts: ['Shuwaikh Port', 'Shuaiba Port'], transitDays: '5 - 7 Days', dutyExemption: 'Certificate of Origin (COO) Attested by Chamber' }
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015 Certified Manufacturing', code: 'ISO-9001-2015', body: 'TÜV NORD / Bureau Veritas', desc: 'Quality Management Systems for forging, heat treatment, machining, and flange testing.' },
  { name: 'PED 2014/68/EU Pressure Equipment', code: 'PED-ANNEX-I', body: 'DNV GL / Lloyds Register', desc: 'Compliant with European & International pressure vessel safety directives for oil & gas.' },
  { name: 'EN 10204 Type 3.1 & 3.2 MTC', code: 'MTC-EN10204-3.1', body: 'In-House & 3rd Party (SGS/TUV)', desc: '100% Raw Material Traceability with Positive Material Identification (PMI) & Hydrostatic Test Reports.' },
  { name: 'NACE MR0175 / ISO 15156 Sour Service', code: 'NACE-MR0175', body: 'Aramco Approved Test Lab', desc: 'Sulfide Stress Cracking (SSC) & Hydrogen Induced Cracking (HIC) tested for Middle East refineries.' }
];

export const SEO_ASSIGNMENT_DATA = {
  category: 'Stainless Steel Flanges',
  targetRegion: 'Saudi Arabia (KSA), United Arab Emirates (UAE), Qatar, Oman, Kuwait',
  keywordsMatrix: [
    { kw: 'stainless steel flanges supplier saudi arabia', volume: '720/mo', competition: 'Low-Medium', intent: 'Transactional B2B', priority: true },
    { kw: 'ss 316l weld neck flange exporter dubai uae', volume: '480/mo', competition: 'Low', intent: 'High Commercial', priority: true },
    { kw: 'ansi b16.5 stainless steel flange manufacturer india', volume: '1,100/mo', competition: 'Medium', intent: 'Informational / Sourcing', priority: false },
    { kw: 'astm a182 forged flange stockist dammam', volume: '320/mo', competition: 'Low', intent: 'Transactional B2B', priority: true },
    { kw: '304 vs 316l stainless steel flange price per kg GCC', volume: '590/mo', competition: 'Low', intent: 'Commercial Investigation', priority: true },
    { kw: 'blind flange ss 316 class 300 price jebel ali', volume: '290/mo', competition: 'Low', intent: 'Transactional', priority: false },
    { kw: 'duplex 2205 flange supplier abu dhabi adnoc', volume: '210/mo', competition: 'Very Low', intent: 'High-Value Project RFQ', priority: true },
    { kw: 'slip on flange stainless steel manufacturer in mumbai for export', volume: '880/mo', competition: 'Medium', intent: 'Vendor Selection', priority: false },
    { kw: 'ss flange weight chart pdf asme b16.5', volume: '2,400/mo', competition: 'Low-Medium', intent: 'Lead Magnet / Traffic', priority: false },
    { kw: 'stainless steel socket weld flange 600# riyadh supplier', volume: '180/mo', competition: 'Low', intent: 'Transactional', priority: false },
    { kw: 'en 1092-1 stainless steel pn16 flange exporter sharjah', volume: '260/mo', competition: 'Low', intent: 'Commercial', priority: false },
    { kw: 'stainless steel threaded flange npt stockist jeddah', volume: '150/mo', competition: 'Very Low', intent: 'Transactional', priority: false },
    { kw: 'stainless steel lap joint flange with stub end supplier qatar', volume: '190/mo', competition: 'Low', intent: 'Commercial', priority: false },
    { kw: 'aramco approved stainless steel flange manufacturer', volume: '410/mo', competition: 'Medium', intent: 'High Intent Supplier Search', priority: false },
    { kw: 'stainless steel flanges price list per piece KSA', volume: '650/mo', competition: 'Low', intent: 'Price Inquiry', priority: false }
  ],
  prioritizedRationale: [
    { kw: 'stainless steel flanges supplier saudi arabia', reason: 'High intent B2B buyer search targeting Aramco contractors and KSA infrastructure projects. Low competition compared to generic keywords.' },
    { kw: 'ss 316l weld neck flange exporter dubai uae', reason: 'Focuses on the exact high-margin grade (316L) and high-demand type (Weld Neck) for marine/oil projects in Jebel Ali free zone.' },
    { kw: 'astm a182 forged flange stockist dammam', reason: 'Hyper-localized for Dammam industrial region where major oilfield procurement managers search for verified stockists.' },
    { kw: 'duplex 2205 flange supplier abu dhabi adnoc', reason: 'Niche, extremely high-margin material used in ADNOC oil/desalination lines with minimal SEO competition.' }
  ],
  onPageElements: {
    titleTag: 'Stainless Steel Flanges Manufacturer & Exporter | SS 316L & 304 | Bhansali Stainless (Middle East)',
    metaDescription: 'Leading exporter of ASTM A182 Stainless Steel Flanges (304, 316L, Duplex 2205). ANSI B16.5 Weld Neck, Slip-On & Blind flanges. Fast 48h dispatch to KSA, UAE, Qatar & Oman. Request a quote!',
    h1: 'ASTM A182 Stainless Steel Flanges Manufacturer & Exporter to Middle East',
    h2s: [
      'Comprehensive Range of Forged Stainless Steel Flanges (ANSI B16.5 & DIN)',
      'Grade Selector: SS 304, SS 316L, SS 316Ti & Duplex 2205 Specifications',
      'Direct Express Shipping to Saudi Arabia, UAE, Qatar, Oman & Kuwait Ports',
      'Request an Instant B2B Price Quote & Material Test Certificate (MTC 3.1)'
    ]
  },
  citations: [
    { name: 'Yellow Pages UAE (B2B Industrial Directory)', url: 'https://www.yellowpages-uae.com/', suitability: 'Direct indexing for UAE procurement officers searching oilfield equipment suppliers.' },
    { name: 'Esdaar Saudi Business Directory', url: 'https://esdaar.com/', suitability: 'Top regional directory for registered commercial vendors in KSA.' },
    { name: 'Gulf Oil & Gas Directory (GulfOilandGas.com)', url: 'https://www.gulfoilandgas.com/', suitability: 'High domain authority niche portal dedicated specifically to GCC energy & piping suppliers.' }
  ],
  dailyActivityLog: [
    { day: 'Day 1 (Mon)', task: 'Technical Audit & Schema Markup', detail: 'Deployed Product JSON-LD Schema, audited Core Web Vitals, fixed canonical URLs, and verified mobile viewport tags.' },
    { day: 'Day 2 (Tue)', task: 'On-Page SEO Optimization', detail: 'Updated Title tags, H1/H2 hierarchy, internal linking structure, and ALT text for all Stainless Steel Flanges product images.' },
    { day: 'Day 3 (Wed)', task: 'GCC Content Expansion', detail: 'Published regional landing content targeting Dammam (KSA) and Jebel Ali (UAE) port logistics with MTC 3.1 documentation guides.' },
    { day: 'Day 4 (Thu)', task: 'Citation & Directory Submissions', detail: 'Submitted verified NAP (Name, Address, Phone) business profiles to YellowPages UAE and Gulf Oil & Gas B2B directory.' },
    { day: 'Day 5 (Fri)', task: 'Backlink Prospecting & Outreach', detail: 'Initiated email outreach to 5 Middle East industrial trade blogs for technical articles on SS 316L vs Duplex 2205 flanges.' }
  ]
};
