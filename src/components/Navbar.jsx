import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Globe, ShieldCheck, FileText, ChevronRight, Menu, X, BarChart2 } from 'lucide-react';

export default function Navbar({ onOpenEnquiry, onOpenSeoModal, onToggleAnalytics }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Enquiry-First Top Bar (Click to Contact visible at top, NOT buried in footer) */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Middle East & GCC Export Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 font-semibold px-2 py-0.5 rounded border border-amber-500/30">
              <Globe className="w-3.5 h-3.5" /> Middle East & GCC Direct Exporter
            </span>
            <span className="hidden lg:inline text-slate-400">
              ⚡ 48h Express Shipping to Saudi Arabia (Dammam/Jeddah) & UAE (Jebel Ali)
            </span>
          </div>

          {/* Direct Click-to-Contact CTAs */}
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+919677806361" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
              title="Call Sales Team Directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 9677806361</span>
            </a>

            <span className="text-slate-700">|</span>

            <a 
              href="https://wa.me/919677806361?text=Hi%20Bhansali%20Stainless,%20I%20need%20a%20quote%20for%20Stainless%20Steel%20Flanges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 px-2.5 py-0.5 rounded border border-emerald-500/40 transition-colors font-medium"
              title="Direct WhatsApp Chat"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct (+91 9677806361)</span>
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            <a 
              href="mailto:sales@bhansaliflanges.com?subject=Inquiry%20for%20Stainless%20Steel%20Flanges" 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
              title="Send Inquiry Email"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>sales@bhansaliflanges.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-heading font-extrabold text-slate-950 text-xl shadow-md group-hover:scale-105 transition-transform">
              BS
            </div>
            <div>
              <div className="font-heading font-bold text-slate-100 text-lg tracking-tight group-hover:text-amber-400 transition-colors">
                BHANSALI STAINLESS
              </div>
              <div className="text-[10px] text-slate-400 tracking-wider uppercase">
                Iso 9001:2015 Forged Steel Exporters
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
            <a href="#visualizer" className="hover:text-amber-400 transition-colors font-semibold text-amber-400">3D Visualizer</a>
            <a href="#grades" className="hover:text-amber-400 transition-colors">Grade Variants</a>
            <a href="#specifications" className="hover:text-amber-400 transition-colors">Specifications</a>
            <a href="#related-products" className="hover:text-amber-400 transition-colors text-emerald-400 font-semibold">Products & Prices</a>
            <a href="#certifications" className="hover:text-amber-400 transition-colors">Certifications</a>
            
            {/* Assignment 2 SEO Strategy Modal Button */}
            <button 
              onClick={onOpenSeoModal}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/30 transition-all shadow-sm"
              title="View Assignment 2 SEO Strategy & Keyword Research"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>SEO Strategy (Task 2)</span>
            </button>

            {/* Analytics Inspector Toggle */}
            <button 
              onClick={onToggleAnalytics}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 border border-slate-700 px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-all"
              title="Toggle Live GTM & GA4 Debug Console"
            >
              <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
              <span>GTM/GA4 Console</span>
            </button>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onOpenEnquiry}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-lg group bg-gradient-to-br from-amber-500 to-amber-600 group-hover:from-amber-500 group-hover:to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all active:scale-95"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 rounded-md flex items-center gap-2">
                <span>Request Fast RFQ</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={onOpenEnquiry}
              className="bg-amber-500 text-slate-950 font-semibold px-3 py-1.5 text-xs rounded-md shadow"
            >
              Enquire Now
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-3 text-sm text-slate-300 pb-2">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Overview</a>
            <a href="#grades" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Grade Variants (304/316/316L)</a>
            <a href="#specifications" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Specifications Table</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">Certifications & MTC 3.1</a>
            <a href="#logistics" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400">GCC Logistics</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenSeoModal(); }}
                className="flex items-center gap-2 text-amber-400 text-xs font-semibold py-1.5"
              >
                <FileText className="w-4 h-4" /> View Assignment 2 SEO Plan
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onToggleAnalytics(); }}
                className="flex items-center gap-2 text-blue-400 text-xs py-1.5"
              >
                <BarChart2 className="w-4 h-4" /> Toggle GTM/GA4 Console
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
