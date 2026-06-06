'use client'

import { breakingNewsItems } from '@/lib/mockData'
import { Zap } from 'lucide-react'

export default function BreakingNewsTicker() {
  return (
    <div className="bg-breaking/95 text-white py-2 overflow-hidden relative z-50">
      <div className="flex items-center">
        {/* Fixed BREAKING label */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-white/20 px-4 py-0.5 font-bold text-xs tracking-widest uppercase z-10">
          <Zap className="w-3 h-3 fill-white" />
          BREAKING
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex">
            <div className="ticker-animation flex items-center gap-0">
              {[...breakingNewsItems, ...breakingNewsItems].map((item, index) => (
                <span key={index} className="flex items-center gap-2 text-xs font-medium px-2">
                  <span className="text-white/60">●</span>
                  <span>{item}</span>
                  <span className="text-white/30 mx-6">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
