import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../data/flangeData';
import { Award, ShieldCheck, FileCheck, Eye, X, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const [showMtcModal, setShowMtcModal] = useState(false);

  return (
    <section id="certifications" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll-Based Reveal Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" /> Quality Assurance & Compliance
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            International Certifications & MTC Standards
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            All Bhansali Stainless Flanges are supplied with 100% Raw Material Traceability and authentic EN 10204 3.1 Material Test Reports.
          </p>
        </motion.div>

        {/* Certification Cards Grid with Framer Motion hover & scroll animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800 px-2.5 py-1 rounded-md">
                    {cert.code}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-100 mb-2">
                  {cert.name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-xs">
                <span className="text-slate-500">Auditing Body:</span>
                <span className="font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {cert.body}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive MTC Preview Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-100 text-lg">
                EN 10204 3.1 Material Test Certificate Placeholder
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Includes Chemical Composition, Tensile Strength, Impact Test (-196°C), PMI & Hydrostatic Test reports.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowMtcModal(true)}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md"
          >
            <Eye className="w-4 h-4" />
            <span>Preview Sample MTC Certificate</span>
          </button>
        </div>

        {/* MTC Modal */}
        {showMtcModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative">
              <button 
                onClick={() => setShowMtcModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase mb-2">
                <FileCheck className="w-4 h-4" /> Material Test Certificate Specimen
              </div>
              
              <h3 className="font-heading text-xl font-bold text-slate-100 mb-4">
                EN 10204 TYPE 3.1 CERTIFICATE
              </h3>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl font-mono text-xs text-slate-300 space-y-2 mb-6">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Manufacturer:</span>
                  <span className="text-white font-bold">BHANSALI STAINLESS MFG. CO.</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Commodity:</span>
                  <span>ASTM A182 Forged Flange WN 316L 150# RF</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Heat No / Lot:</span>
                  <span className="text-amber-400">BS-HT-99482-316L</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">PMI Spectrum Check:</span>
                  <span className="text-emerald-400">PASSED (Cr: 17.2%, Ni: 11.4%, Mo: 2.15%)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500">Hydrostatic Pressure Test:</span>
                  <span className="text-emerald-400">PASSED (450 PSI / 30 BAR for 60s)</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowMtcModal(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-lg"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
