import React, { useState } from 'react';
import { SEO_ASSIGNMENT_DATA } from '../data/flangeData';
import { FileText, Search, Target, Code, Share2, Calendar, X, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export default function SeoStrategyModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('keywords');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                Assignment 2 Deliverable • SEO Specialist
              </div>
              <h3 className="font-heading font-bold text-slate-100 text-lg">
                GCC Stainless Steel Flanges SEO & Content Strategy Plan
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-6 pt-3 flex gap-2 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setActiveTab('keywords')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 border-t border-x transition-all ${
              activeTab === 'keywords'
                ? 'bg-slate-950 border-slate-800 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>1. Keyword Research Matrix ({SEO_ASSIGNMENT_DATA.keywordsMatrix.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('priority')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 border-t border-x transition-all ${
              activeTab === 'priority'
                ? 'bg-slate-950 border-slate-800 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>2. Priority Low-Comp Targets ({SEO_ASSIGNMENT_DATA.prioritizedRationale.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('onpage')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 border-t border-x transition-all ${
              activeTab === 'onpage'
                ? 'bg-slate-950 border-slate-800 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>3. On-Page SEO Spec</span>
          </button>

          <button
            onClick={() => setActiveTab('offpage')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-semibold flex items-center gap-2 border-t border-x transition-all ${
              activeTab === 'offpage'
                ? 'bg-slate-950 border-slate-800 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>4. Citations & 7-Day Activity Log</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-950 space-y-6 text-xs sm:text-sm">
          
          {/* TAB 1: Keywords Matrix */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <span className="text-slate-300 text-xs">Target Region: <strong className="text-amber-400">Saudi Arabia, UAE, Qatar, Oman, Kuwait</strong></span>
                <span className="text-slate-400 text-xs">Product Category: <strong className="text-white">Stainless Steel Flanges</strong></span>
              </div>

              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-slate-400 text-xs">
                    <tr>
                      <th className="py-2.5 px-3">Keyword Target</th>
                      <th className="py-2.5 px-3">Est. Volume</th>
                      <th className="py-2.5 px-3">Competition</th>
                      <th className="py-2.5 px-3">Search Intent</th>
                      <th className="py-2.5 px-3 text-right">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-xs text-slate-300">
                    {SEO_ASSIGNMENT_DATA.keywordsMatrix.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/60">
                        <td className="py-2.5 px-3 font-medium text-slate-100">{item.kw}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">{item.volume}</td>
                        <td className="py-2.5 px-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                            item.competition.includes('Low') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          }`}>
                            {item.competition}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400">{item.intent}</td>
                        <td className="py-2.5 px-3 text-right">
                          {item.priority ? (
                            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px]">
                              TOP PRIORITY
                            </span>
                          ) : (
                            <span className="text-slate-600 text-[11px]">Secondary</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: Priority Selection Rationale */}
          {activeTab === 'priority' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300 text-xs space-y-1">
                <h4 className="font-semibold text-amber-400 flex items-center gap-1.5 text-sm">
                  <Target className="w-4 h-4" /> Strategic Prioritization Rationale
                </h4>
                <p>
                  Instead of chasing high-volume generic keywords like "stainless steel", we prioritize 4 low-competition, high-intent B2B keywords that target decision makers (procurement managers in Aramco, ADNOC, and Jebel Ali EPC contractors).
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {SEO_ASSIGNMENT_DATA.prioritizedRationale.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-amber-400 font-bold text-xs">{item.kw}</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/30">
                        Priority Target #{idx + 1}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      <strong>Why Prioritize:</strong> {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: On-Page SEO Specs */}
          {activeTab === 'onpage' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3 font-mono text-xs text-slate-300">
                <div>
                  <div className="text-slate-500 mb-1">Title Tag (58 chars):</div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-amber-400 font-bold">
                    {SEO_ASSIGNMENT_DATA.onPageElements.titleTag}
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 mb-1">Meta Description (154 chars):</div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-200">
                    {SEO_ASSIGNMENT_DATA.onPageElements.metaDescription}
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 mb-1">Main H1 Tag:</div>
                  <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-emerald-400 font-bold">
                    {SEO_ASSIGNMENT_DATA.onPageElements.h1}
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 mb-1">Heading 2 (H2) Structure:</div>
                  <ul className="space-y-1.5 pl-2">
                    {SEO_ASSIGNMENT_DATA.onPageElements.h2s.map((h2, idx) => (
                      <li key={idx} className="bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
                        H2: {h2}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Citations & Daily Log */}
          {activeTab === 'offpage' && (
            <div className="space-y-6">
              
              {/* Citation Sources */}
              <div>
                <h4 className="font-heading font-bold text-slate-200 text-sm mb-3">
                  Realistic B2B Citation & Directory Sources (GCC Niche)
                </h4>
                <div className="space-y-3">
                  {SEO_ASSIGNMENT_DATA.citations.map((cite, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-amber-400 text-xs">{cite.name}</div>
                        <div className="text-slate-400 text-[11px]">{cite.suitability}</div>
                      </div>
                      <a 
                        href={cite.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[11px] text-blue-400 hover:underline font-mono"
                      >
                        {cite.url}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1-Week Daily Activity Log */}
              <div>
                <h4 className="font-heading font-bold text-slate-200 text-sm mb-3 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-400" /> 1-Week Sample Daily Task Tracking Log
                </h4>
                <div className="border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900 text-slate-400 text-xs">
                      <tr>
                        <th className="py-2.5 px-3">Day</th>
                        <th className="py-2.5 px-3">Primary Task</th>
                        <th className="py-2.5 px-3">Action Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-xs text-slate-300">
                      {SEO_ASSIGNMENT_DATA.dailyActivityLog.map((log, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/60">
                          <td className="py-2.5 px-3 font-bold text-amber-400 font-mono whitespace-nowrap">{log.day}</td>
                          <td className="py-2.5 px-3 font-semibold text-slate-100 whitespace-nowrap">{log.task}</td>
                          <td className="py-2.5 px-3 text-slate-300 text-[11px]">{log.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex justify-between items-center text-xs">
          <span className="text-slate-500">Document generated for Bhansali Stainless Engagement</span>
          <button
            onClick={onClose}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
