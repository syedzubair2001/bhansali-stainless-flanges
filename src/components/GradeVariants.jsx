import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STAINLESS_GRADES } from '../data/flangeData';
import { Layers, ShieldAlert, Thermometer, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

export default function GradeVariants({ onSelectGradeForQuote }) {
  const [selectedGradeId, setSelectedGradeId] = useState('316');
  const currentGrade = STAINLESS_GRADES.find(g => g.id === selectedGradeId) || STAINLESS_GRADES[1];

  return (
    <section id="grades" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-amber-500/30">
            <Layers className="w-3.5 h-3.5" /> Grade Engineering Comparison
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Stainless Steel Grade Variants
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Select a material grade to inspect chemical compositions, mechanical properties, and certified application environments across Middle East projects.
          </p>
        </div>

        {/* Grade Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {STAINLESS_GRADES.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setSelectedGradeId(grade.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-sm ${
                selectedGradeId === grade.id
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/20 scale-105 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <span>{grade.name}</span>
              {selectedGradeId === grade.id && (
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Active Grade Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGrade.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl"
          >
            {/* Left Column: Grade Overview & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  {currentGrade.standard}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentGrade.name}
                </h3>
                <p className="text-slate-300 text-sm font-medium">
                  {currentGrade.tagline}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Corrosion Resistance
                  </div>
                  <div className="font-semibold text-slate-100 text-sm">{currentGrade.corrosionRating}</div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                  <div className="text-slate-400 text-xs flex items-center gap-1.5 mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-rose-400" /> Temp Operating Range
                  </div>
                  <div className="font-semibold text-slate-100 text-sm">{currentGrade.tempRange}</div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-slate-400 text-xs mb-1">Yield Strength (Min)</div>
                  <div className="font-semibold text-emerald-400 text-sm">{currentGrade.yieldStrength}</div>
                </div>
              </div>

              {/* Chemical Breakdown Bars */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3">
                <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider flex justify-between items-center">
                  <span>Nominal Chemical Composition (%)</span>
                  <span className="text-amber-400 text-[11px]">ASTM A182 Compliant</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  {Object.entries(currentGrade.chemical).map(([elem, percent]) => (
                    <div key={elem} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs">
                      <div className="text-slate-400 font-mono mb-0.5">{elem} Element</div>
                      <div className="font-semibold text-amber-300">{percent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Applications & Regional Popularity */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h4 className="font-heading font-semibold text-slate-200 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Primary GCC Applications
                </h4>

                <ul className="space-y-2.5 text-sm text-slate-300">
                  {currentGrade.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regional Footprint */}
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> High-Demand Procurement Hubs:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentGrade.popularIn.map((loc, idx) => (
                    <span key={idx} className="bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs px-2.5 py-1 rounded-md font-medium">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectGradeForQuote(currentGrade.name)}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>Request Pricing for {currentGrade.id.toUpperCase()} Flanges</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
