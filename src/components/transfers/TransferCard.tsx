import { Transfer } from '@/types'
import { formatRelativeTime } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const statusConfig = {
  rumour: { label: 'RUMOUR', className: 'bg-gold/20 text-gold border border-gold/30' },
  confirmed: { label: 'CONFIRMED', className: 'bg-brand/20 text-brand border border-brand/30' },
  completed: { label: 'DONE DEAL', className: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
  failed: { label: 'COLLAPSED', className: 'bg-breaking/20 text-breaking border border-breaking/30' },
}

export default function TransferCard({ transfer, compact = false }: { transfer: Transfer, compact?: boolean }) {
  const status = statusConfig[transfer.status] || statusConfig.rumour
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-3 border border-border-muted hover:border-brand/30 transition-all card-hover">
      <div className="w-10 h-10 rounded-full bg-surface-4 border border-border-muted flex items-center justify-center text-lg flex-shrink-0">
        {transfer.nationality || '⚽'}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-white">{transfer.playerName}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-muted">{transfer.fromClub}</span>
              <ArrowRight className="w-3 h-3 text-brand flex-shrink-0" />
              <span className="text-xs font-semibold text-white">{transfer.toClub}</span>
            </div>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${status.className}`}>
            {status.label}
          </span>
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          {transfer.fee && (
            <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full">
              {transfer.fee}
            </span>
          )}
          {transfer.source && (
            <span className="text-xs text-muted">via {transfer.source}</span>
          )}
          {!compact && (
            <span className="text-xs text-muted ml-auto">{formatRelativeTime(transfer.reportedAt)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
