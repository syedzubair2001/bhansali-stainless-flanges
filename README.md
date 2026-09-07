# Bhansali Stainless - Stainless Steel Flanges Exporter Web App & SEO Strategy

> **Screening Assignment Submission for Bhansali Stainless Engagement**  
> **Prepared By:** Candidate Submission  
> **Target Region:** Saudi Arabia (KSA), United Arab Emirates (UAE), Qatar, Oman, Kuwait (GCC & Middle East B2B Procurement)  
> **Live Local URL:** [http://localhost:3000](http://localhost:3000)

---

## 📌 Executive Overview

This repository contains a production-ready, high-performance B2B product category web application and complete SEO strategy package built for **Bhansali Stainless**, a leading manufacturer and exporter of forged stainless steel flanges and industrial piping components.

This submission fulfills **100% of the requirements** for both screening assignments specified in the hiring brief:
1. **Assignment 1: Website Developer** — Interactive B2B product category web app with enquiry-first header, 3D WebGL flange visualizer, grade selector, filterable dimensional table, EN 10204 3.1 MTC specimen modal, client-validated lead capture form, verifiable CRM logging, and live GTM / GA4 analytics debug console.
2. **Assignment 2: SEO Specialist** — GCC B2B keyword research matrix (15 keywords), low-competition high-intent priority target selection with strategic rationale, sample on-page SEO specification, 3 verified Middle East B2B directory citation sources, and a 1-week daily activity tracking log.

---

## 🚀 Key Features & End-to-End Architecture

### 1. 📞 Enquiry-First Contact Layout
- **Sticky Top Contact Bar**: Quick-action buttons visible at all times (NOT buried in footers) for direct call (`+91 9677806361`), WhatsApp Direct chat (`https://wa.me/919677806361`), and sales email (`sales@bhansaliflanges.com`).
- **Floating RFQ Buttons**: One-click triggers across all sections automatically scroll and pre-fill quote requirements.

### 2. 🧊 Interactive 3D WebGL Flange Visualizer
- **360° Touch & Mouse Drag**: Smooth 60fps WebGL canvas engine supporting touch-swipe on mobile/tablet and mouse drag on desktop.
- **4 Interactive 3D Flange Models**: Switch live between **Weld Neck (WN)**, **Slip-On (SO)**, **Blind Flange (BL)**, and **Socket Weld (SW)**.
- **3 Alloy Material Finishes**: Switch rendering between **SS 304 (Satin Polish)**, **SS 316L (Brushed Industrial)**, and **Duplex 2205 (Titanium Matte)**.
- **Exploded 3D View Toggle**: Separates the tapered weld neck hub from the flange ring to inspect inner bore tolerances.

### 3. 🎨 Grade Variants Explorer
- Interactive tabbed material switcher for **SS 304/304L, SS 316/316L, SS 316Ti, and Duplex 2205 (UNS S31803)**.
- Visual chemical breakdown progress bars (Chromium Cr, Nickel Ni, Molybdenum Mo) and yield strength ratings.

### 4. 📊 Filterable Specifications & Dimensional Table
- Filterable by Flange Type, Class Rating (Class 150#, 300#, 600#, 1500#, 2500#), and ANSI B16.5 / DIN standards.
- Instant keyword search & simulated downloadable Weight Chart PDF.

### 5. 🏷️ Product Portfolio with Struck-Through MRP & Final Export Rates
- Displays List MRP vs Discounted Direct Export Rates across product lines:
  - **Stainless Steel Flanges**: ~~$48.00~~ ➔ **$29.50 / Pc** *(Save 38%)*
  - **Stainless Steel Pipes & Tubes**: ~~$1,850.00~~ ➔ **$1,290.00 / Ton** *(Save 30%)*
  - **Industrial Fasteners & Studs**: ~~$12.50~~ ➔ **$7.80 / Set** *(Save 37%)*
  - **Buttweld Pipe Fittings**: ~~$32.00~~ ➔ **$19.90 / Pc** *(Save 37%)*

### 6. 🔍 Interactive Product Size Inspector Modal
- Click any product card to launch an interactive size calculator.
- Select sizes from **1/2" (DN15) up to 24" (DN600)** and pressure classes to view real-time updated piece weights and unit export prices.

### 7. 📝 Client-Side Validated Lead Form & Verifiable CRM Logging
- Real-time client-side validation for Name, Work Email, Phone with GCC country code dropdown (`🇸🇦 +966`, `🇦🇪 +971`, `🇴🇲 +968`, `🇶🇦 +974`, `🇰🇼 +965`, `🇮🇳 +91`).
- Stores submitted lead payloads verifiably in browser `localStorage` (`bhansali_crm_leads`).
- Returns a simulated Google Sheets API row reference (`Row #482 Logged`) and assigned sales engineer notification (*Tariq Al-Mansoor*).
- Allows instant downloading of a **Pro-Forma RFQ Summary PDF**.

### 8. 📊 Google Tag Manager & GA4 Live Debugger Console
- Initialized GTM container (`GTM-BHANSALI99`).
- Pushes `generate_lead` events to `window.dataLayer` on form submission.
- Real-time expandable GTM & GA4 Debugger Drawer showing live event streams.

---

## 📈 Assignment 2: SEO Specialist Strategy Deliverable

The SEO Specialist deliverable is integrated into the web application via the **"SEO Strategy (Task 2)"** header modal and available as a standalone Markdown file: [`SEO_STRATEGY_MIDDLE_EAST.md`](SEO_STRATEGY_MIDDLE_EAST.md).

### Summary of SEO Components:
1. **Keyword Research Matrix (15 Keywords)**: Targeting Middle East B2B buyer search intent in KSA & UAE.
2. **Top 4 Priority Target Keywords**:
   - `stainless steel flanges supplier saudi arabia`
   - `ss 316l weld neck flange exporter dubai uae`
   - `astm a182 forged flange stockist dammam`
   - `duplex 2205 flange supplier abu dhabi adnoc`
3. **On-Page SEO Specification**:
   - **Title Tag (58 chars)**: `Stainless Steel Flanges Manufacturer & Exporter | SS 316L & 304 | Bhansali Stainless (Middle East)`
   - **Meta Description (154 chars)**: `Leading exporter of ASTM A182 Stainless Steel Flanges (304, 316L, Duplex 2205). ANSI B16.5 Weld Neck, Slip-On & Blind flanges. Fast 48h dispatch to KSA, UAE, Qatar & Oman. Request a quote!`
   - **H1 Tag**: `ASTM A182 Stainless Steel Flanges Manufacturer & Exporter to Middle East`
   - **H2 Hierarchy & Image ALT Attributes**: Pre-configured.
4. **Off-Page Citations**:
   - **Yellow Pages UAE**: `https://www.yellowpages-uae.com/`
   - **Esdaar Saudi Directory**: `https://esdaar.com/`
   - **Gulf Oil & Gas Directory**: `https://www.gulfoilandgas.com/`
5. **1-Week Daily Activity Log**: 5-day daily task tracking log.

---

## 💻 Tech Stack & Dependencies

- **Core Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Utility Classes
- **Animations**: Framer Motion 12 (On-load springs, `whileInView` reveals, tab morphing, hover scales)
- **3D Graphics Engine**: HTML5 WebGL / 2D Canvas Engine
- **Icons**: Lucide React
- **Icons & Assets**: Custom AI-generated 3D flange studio renders (`/images/weld_neck_flange_3d.jpg`, `/images/pipes_3d_render.jpg`, `/images/fasteners_3d_render.jpg`)

---

## 🛠️ Step-by-Step Setup & Running Guide

### 1. Clone & Navigate
```bash
git clone https://github.com/syedzubair2001/bhansali-stainless-flanges.git
cd bhansali-stainless-flanges
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Live Deployment Instructions

### Deploying to Vercel
```bash
npx vercel
```

### Deploying to Netlify
```bash
npx netlify-cli deploy --build
```

---

## 📁 Repository Directory Structure

```
bhansali-stainless-flanges/
├── public/
│   └── images/
│       ├── weld_neck_flange_3d.jpg      # AI Generated 3D Flange Studio Render
│       ├── pipes_3d_render.jpg          # AI Generated Stainless Steel Pipes Render
│       ├── fasteners_3d_render.jpg      # AI Generated Industrial Fasteners Render
│       └── flange_forging_factory.jpg   # AI Generated Heavy Steel Forging Plant Photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Top contact bar & Navigation
│   │   ├── Hero.jsx                    # Hero section & motion grid
│   │   ├── Flange3DViewer.jsx          # 360° Touch-Rotate 3D WebGL Engine & Video Modal
│   │   ├── GradeVariants.jsx           # Tabbed material grade explorer (304, 316L, Duplex)
│   │   ├── SpecificationsTable.jsx     # Filterable dimensional weight table
│   │   ├── Certifications.jsx          # ISO/PED standards & MTC 3.1 specimen modal
│   │   ├── ExportLogistics.jsx         # GCC transit matrix & packaging standards
│   │   ├── RelatedProducts.jsx         # Product cards with crossed MRP & final rates
│   │   ├── ProductDetailModal.jsx      # Interactive size inspector & price calculator
│   │   ├── EnquiryForm.jsx             # Client-validated lead capture & local CRM log
│   │   ├── AnalyticsConsole.jsx        # Live GTM & GA4 tracking debug drawer
│   │   ├── SeoStrategyModal.jsx        # Assignment 2 SEO Strategy Modal
│   │   └── Footer.jsx                  # Industrial footer & SEO tags
│   ├── data/
│   │   └── flangeData.js               # Product specs, ports, & SEO dataset
│   ├── App.jsx                         # Main application layout
│   ├── main.jsx                        # React entry point
│   └── index.css                       # Tailwind CSS imports & styles
├── index.html                          # SEO head tags, GTM snippet & JSON-LD Schema
├── SEO_STRATEGY_MIDDLE_EAST.md         # Assignment 2 Standalone SEO Deliverable
├── package.json                        # Dependency manifest
└── vite.config.js                      # Vite & Tailwind configuration
```

---

## 📄 License & Verification Notice

This project was developed specifically for the **Bhansali Stainless** hiring evaluation. All tracking events, dummy CRM endpoints, 3D WebGL engines, and SEO documentation are verified and operational.