import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Globe, ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenEnquiry, onOpenSeoModal, onToggleAnalytics }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-heading font-extrabold text-slate-950 text-lg">
                BS
              </div>
              <div>
                <span className="font-heading font-bold text-slate-100 text-base">BHANSALI STAINLESS</span>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Flange Manufacturing & Export</div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier manufacturer and stockist of ASTM A182 Stainless Steel Flanges (304, 316L, 316Ti, Duplex 2205). Exporting high-pressure piping components across Saudi Arabia, UAE, Qatar, Oman, and Kuwait.
            </p>

            {/* Direct Click to Contact Links */}
            <div className="space-y-2 pt-1 font-medium">
              <a href="tel:+919677806361" className="flex items-center gap-2 hover:text-amber-400 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Direct Sales: +91 9677806361</span>
              </a>
              <a href="https://wa.me/919677806361" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instant Chat: +91 9677806361</span>
              </a>
              <a href="mailto:sales@bhansaliflanges.com" className="flex items-center gap-2 hover:text-amber-400 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>Email: sales@bhansaliflanges.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Products & Types */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              Flange Types
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Weld Neck Flanges (WN)</a></li>
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Slip-On Flanges (SO)</a></li>
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Blind Flanges (BL)</a></li>
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Socket Weld Flanges (SW)</a></li>
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Threaded Flanges (NPT)</a></li>
              <li><a href="#specifications" className="hover:text-amber-400 transition-colors">Lap Joint Flanges (LJ)</a></li>
            </ul>
          </div>

          {/* Col 3: Stainless Grades */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              Material Grades
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#grades" className="hover:text-amber-400 transition-colors">SS 304 / 304L Flanges</a></li>
              <li><a href="#grades" className="hover:text-amber-400 transition-colors">SS 316 / 316L Flanges</a></li>
              <li><a href="#grades" className="hover:text-amber-400 transition-colors">SS 316Ti Stabilized</a></li>
              <li><a href="#grades" className="hover:text-amber-400 transition-colors">Duplex 2205 (S31803)</a></li>
              <li><a href="#grades" className="hover:text-amber-400 transition-colors">Super Duplex 2507</a></li>
            </ul>
          </div>

          {/* Col 4: Deliverables & Tools */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-sm uppercase tracking-wider">
              Screening Tasks
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenSeoModal} className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Task 2: SEO Strategy Plan</span>
                </button>
              </li>
              <li>
                <button onClick={onToggleAnalytics} className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>GTM / GA4 Event Debugger</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Interactive RFQ Lead Form</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bhansali Stainless Steel Flanges Exporters. ISO 9001:2015 Registered.
          </div>

          <div className="flex items-center gap-4">
            <span>Container: GTM-BHANSALI99</span>
            <span>•</span>
            <span>GA4 event: generate_lead</span>
            <span>•</span>
            <span className="text-amber-400 font-medium">Middle East Procurement Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
