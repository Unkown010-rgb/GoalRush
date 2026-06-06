import TransferTracker from '@/components/transfers/TransferTracker'
import { mockTransfers } from '@/lib/mockData'

export const metadata = { title: 'Transfer Centre — GoalRush' }

export default function TransfersPage() {
  const confirmed = mockTransfers.filter((t) => t.status === 'confirmed' || t.status === 'completed').length
  const rumours = mockTransfers.filter((t) => t.status === 'rumour').length

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">Transfer Centre</h1>
        <p className="text-muted text-sm">Live transfer news, rumours, and confirmed deals from Fabrizio Romano, Sky Sports and more.</p>
        <div className="flex gap-4 mt-4">
          <div className="bg-brand/10 border border-brand/30 rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-black text-brand">{confirmed}</div>
            <div className="text-xs text-muted mt-0.5">Confirmed / Done</div>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-black text-gold">{rumours}</div>
            <div className="text-xs text-muted mt-0.5">Active Rumours</div>
          </div>
          <div className="bg-surface-2 border border-border-muted rounded-xl px-5 py-3 text-center">
            <div className="text-2xl font-black text-white">{mockTransfers.length}</div>
            <div className="text-xs text-muted mt-0.5">Total Tracked</div>
          </div>
        </div>
      </div>
      <TransferTracker />
    </div>
  )
}
