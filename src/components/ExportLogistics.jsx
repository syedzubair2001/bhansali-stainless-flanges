import React from 'react';
import { motion } from 'framer-motion';
import { MIDDLE_EAST_PORTS } from '../data/flangeData';
import { Truck, Globe, Box, ShieldCheck, Clock, FileText, Anchor } from 'lucide-react';

export default function ExportLogistics() {
  return (
    <section id="logistics" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll-Based Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-amber-500/30">
            <Truck className="w-3.5 h-3.5" /> Middle East Export Network
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            GCC Freight & Port Shipping Logistics
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Direct air and sea freight logistics serving oilfield contractors, EPC companies, and stockholders across the Arabian Peninsula.
          </p>
        </motion.div>

        {/* Ports & Transit Matrix with Framer Motion Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MIDDLE_EAST_PORTS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/30 transition-all shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.flag}</span>
                  <h3 className="font-heading font-bold text-slate-100 text-base">
                    {item.country}
                  </h3>
                </div>
                <span className="text-[11px] bg-slate-950 text-amber-400 border border-slate-800 px-2 py-0.5 rounded font-mono">
                  GCC Direct
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <div className="text-slate-500 text-[11px] flex items-center gap-1 mb-1">
                    <Anchor className="w-3.5 h-3.5 text-blue-400" /> Destination Ports
                  </div>
                  <div className="font-medium text-slate-200">
                    {item.mainPorts.join(' • ')}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Est. Transit:
                  </span>
                  <span className="font-semibold text-emerald-400">{item.transitDays}</span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/60 text-[11px] text-slate-400">
                  {item.dutyExemption}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export Packaging & Documentation Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Packaging Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-100 text-lg">
                  Heavy-Duty Export Packaging
                </h4>
                <p className="text-slate-400 text-xs">ISPM-15 Standard Seaworthy Palletization</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Fumigated Wooden Boxes:</strong> Heat-treated ISPM-15 certified wooden cases to prevent sea moisture damage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Flange Face Protection:</strong> Plastic bevel protectors & protective rubber caps on raised face (RF) surfaces.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong>Anti-Rust Preservative:</strong> Coated with transparent rust-preventive oil or VCI protective wrap.</span>
              </li>
            </ul>
          </div>

          {/* Export Documentation Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-100 text-lg">
                  GCC Customs Clearance Kit
                </h4>
                <p className="text-slate-400 text-xs">Smooth Customs Clearance at Dammam & Jebel Ali</p>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Attested Certificate of Origin (COO):</strong> Issued by Chamber of Commerce with embassy attestation on demand.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Detailed Packing List & Commercial Invoice:</strong> HS Code 730721 (Stainless Steel Flanges) pre-classified.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong>Original Mill Test Report (MTC EN 10204 3.1):</strong> Attached to every shipping container and box.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
