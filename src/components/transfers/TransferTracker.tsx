'use client'

import { useState } from 'react'
import { mockTransfers } from '@/lib/mockData'
import TransferCard from './TransferCard'
import Link from 'next/link'

type Filter = 'all' | 'confirmed' | 'rumour' | 'completed'

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'rumour', label: 'Rumours' },
  { key: 'completed', label: 'Done Deals' },
]

export default function TransferTracker({ compact = false }: { compact?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filtered = mockTransfers.filter((t) =>
    activeFilter === 'all' ? true : t.status === activeFilter
  )
  const displayed = compact ? filtered.slice(0, 5) : filtered

  return (
    <div className="bg-surface-2 border border-border-muted rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border-muted flex items-center justify-between">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          🔄 Transfer Tracker
        </h3>
        <span className="text-xs text-muted">{filtered.length} moves</span>
      </div>

      <div className="flex gap-1 p-3 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === f.key
                ? 'bg-brand text-white shadow-lg shadow-brand/20'
                : 'bg-surface-3 text-muted hover:text-white border border-border-muted'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="px-3 pb-3 space-y-2">
        {displayed.map((transfer) => (
          <TransferCard key={transfer.id} transfer={transfer} compact={compact} />
        ))}
      </div>

      {compact && (
        <div className="px-4 py-3 border-t border-border-muted">
          <Link href="/transfers" className="text-xs text-brand hover:text-brand-dark font-medium transition-colors">
            View all transfers →
          </Link>
        </div>
      )}
    </div>
  )
}
