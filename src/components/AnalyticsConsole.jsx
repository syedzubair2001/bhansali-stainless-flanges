import React, { useState, useEffect } from 'react';
import { BarChart2, CheckCircle2, X, Terminal, RefreshCw, Layers } from 'lucide-react';

export default function AnalyticsConsole({ isOpen, onClose, lastEventPayload }) {
  const [eventsLog, setEventsLog] = useState([
    {
      timestamp: new Date().toLocaleTimeString(),
      event: 'gtm.js',
      containerId: 'GTM-BHANSALI99',
      page_type: 'product_category',
      product_category: 'Stainless Steel Flanges',
      target_region: 'GCC & Middle East'
    }
  ]);

  useEffect(() => {
    if (lastEventPayload) {
      setEventsLog(prev => [
        {
          timestamp: new Date().toLocaleTimeString(),
          ...lastEventPayload
        },
        ...prev
      ]);
    }
  }, [lastEventPayload]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-lg w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs animate-slideUp">
      
      {/* Console Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-200 font-sans">GTM & GA4 Live Tracking Debugger</span>
          <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/30">
            Container: GTM-BHANSALI99
          </span>
        </div>
        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Events Stream */}
      <div className="p-4 space-y-3 max-h-72 overflow-y-auto custom-scrollbar bg-slate-950/95">
        {eventsLog.map((log, index) => (
          <div key={index} className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg space-y-1">
            <div className="flex items-center justify-between text-[11px] border-b border-slate-800 pb-1">
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <BarChart2 className="w-3 h-3 text-amber-500" /> Event: {log.event}
              </span>
              <span className="text-slate-500">{log.timestamp}</span>
            </div>
            
            <pre className="text-[10px] text-slate-300 overflow-x-auto pt-1 font-mono">
              {JSON.stringify(log, null, 2)}
            </pre>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 text-[11px] text-slate-400 flex justify-between items-center font-sans">
        <span>dataLayers array size: <strong className="text-amber-400">{eventsLog.length}</strong></span>
        <span className="text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> GA4 Event Fired on Form Submission
        </span>
      </div>
    </div>
  );
}
