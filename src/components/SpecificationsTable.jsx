import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SPECIFICATIONS_TABLE, FLANGE_TYPES } from '../data/flangeData';
import { Search, Filter, Download, CheckCircle2, ChevronRight, Table } from 'lucide-react';

export default function SpecificationsTable({ onOpenEnquiry }) {
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedClass, setSelectedClass] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filtered dataset
  const filteredSpecs = SPECIFICATIONS_TABLE.filter((item) => {
    const matchesType = selectedType === 'ALL' || item.type.toLowerCase().includes(selectedType.toLowerCase());
    const matchesClass = selectedClass === 'ALL' || item.class.includes(selectedClass);
    const matchesSearch = searchQuery === '' || 
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.facing.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standard.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesClass && matchesSearch;
  });

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="specifications" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Framer Motion Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 font-semibold px-3 py-1 rounded-full text-xs mb-3 border border-blue-500/30">
              <Table className="w-3.5 h-3.5" /> Dimensional & Engineering Data
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Flange Specifications & Weight Chart
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Dimensional tolerances according to ASME/ANSI B16.5, B16.47, and EN 1092-1 standards for forged stainless steel flanges.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSimulateDownload}
            className="self-start md:self-auto bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{downloadSuccess ? 'Downloaded Weight Chart PDF ✓' : 'Download Complete Spec Sheet (PDF)'}</span>
          </motion.button>
        </motion.div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl mb-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-4 items-center">
          
          {/* Flange Type Selector */}
          <div className="lg:col-span-4">
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Flange Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">All Types (Weld Neck, Slip On, Blind, etc.)</option>
              <option value="Weld Neck">Weld Neck (WN)</option>
              <option value="Slip-On">Slip-On (SO)</option>
              <option value="Blind">Blind Flange (BL)</option>
              <option value="Socket Weld">Socket Weld (SW)</option>
              <option value="Threaded">Threaded (TH)</option>
            </select>
          </div>

          {/* Pressure Rating Selector */}
          <div className="lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Pressure Rating Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">All Pressure Ratings</option>
              <option value="150#">Class 150#</option>
              <option value="300#">Class 300#</option>
              <option value="600#">Class 600#</option>
              <option value="1500#">Class 1500# / 2500#</option>
            </select>
          </div>

          {/* Keyword Search Input */}
          <div className="lg:col-span-5">
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Quick Filter / Search
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by facing (RF/RTJ), size, or standard..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Specifications Data Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Spec ID</th>
                  <th className="py-3.5 px-4">Flange Type</th>
                  <th className="py-3.5 px-4">Class Rating</th>
                  <th className="py-3.5 px-4">Nominal Size</th>
                  <th className="py-3.5 px-4">Facing Type</th>
                  <th className="py-3.5 px-4">Standard</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm text-slate-300">
                {filteredSpecs.length > 0 ? (
                  filteredSpecs.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/60 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-amber-400 text-xs font-medium">{row.id}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-100">{row.type}</td>
                      <td className="py-3.5 px-4">
                        <span className="bg-slate-800 text-amber-300 border border-slate-700 px-2 py-0.5 rounded font-mono text-xs">
                          {row.class}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-200">{row.size}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-300">{row.facing}</td>
                      <td className="py-3.5 px-4 text-slate-400 text-xs">{row.standard}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={onOpenEnquiry}
                          className="bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 px-3 py-1 rounded text-xs font-semibold transition-all"
                        >
                          Quote
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-500 text-xs">
                      No matching flange specifications found for the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-950 border-t border-slate-800 px-4 py-3 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              Showing <strong className="text-slate-200">{filteredSpecs.length}</strong> specifications matching ANSI/ASME & DIN standards
            </div>
            <div className="text-amber-400 font-medium">
              Need custom dimensions or Heavy Wall Forging?
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
