'use client'

import { useState, useEffect } from 'react'
import { mockLiveScores } from '@/lib/mockData'
import { LiveScore } from '@/types'
import { RefreshCw } from 'lucide-react'

function MatchRow({ match }: { match: LiveScore }) {
  return (
    <div className={`p-4 rounded-xl border transition-all ${match.status === 'live' ? 'bg-breaking/5 border-breaking/30' : 'bg-surface-2 border-border-muted'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted font-medium">{match.competition}</span>
        {match.status === 'live' && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-breaking">
            <span className="w-2 h-2 rounded-full bg-breaking live-pulse" />
            {match.minute}&apos;
          </span>
        )}
        {match.status === 'finished' && <span className="text-xs font-medium text-muted bg-surface-3 px-2 py-0.5 rounded-full">FT</span>}
        {match.status === 'upcoming' && <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-0.5 rounded-full border border-brand/30">Upcoming</span>}
      </div>
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold text-white flex-1">{match.homeTeam}</span>
        <div className="flex items-center gap-3">
          {match.status !== 'upcoming' ? (
            <>
              <span className="text-2xl font-black text-white">{match.homeScore}</span>
              <span className="text-muted">—</span>
              <span className="text-2xl font-black text-white">{match.awayScore}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-muted">vs</span>
          )}
        </div>
        <span className="font-bold text-white flex-1 text-right">{match.awayTeam}</span>
      </div>
    </div>
  )
}

export default function LiveScoresPage() {
  const [scores, setScores] = useState<LiveScore[]>(mockLiveScores)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const refresh = () => {
    setRefreshing(true)
    setTimeout(() => { setScores([...mockLiveScores]); setLastUpdate(new Date()); setRefreshing(false) }, 800)
  }

  useEffect(() => { const t = setInterval(refresh, 60000); return () => clearInterval(t) }, [])

  const live = scores.filter((s) => s.status === 'live')
  const finished = scores.filter((s) => s.status === 'finished')
  const upcoming = scores.filter((s) => s.status === 'upcoming')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-white">Live Scores</h1>
          <p className="text-xs text-muted mt-1">Updated {lastUpdate.toLocaleTimeString()}</p>
        </div>
        <button onClick={refresh} className="flex items-center gap-2 bg-surface-2 hover:bg-surface-3 border border-border-muted text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      {live.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-breaking live-pulse" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Live Now ({live.length})</h2>
          </div>
          <div className="space-y-3">{live.map((m) => <MatchRow key={m.id} match={m} />)}</div>
        </section>
      )}

      {upcoming.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3">⏰ Upcoming</h2>
          <div className="space-y-3">{upcoming.map((m) => <MatchRow key={m.id} match={m} />)}</div>
        </section>
      )}

      {finished.length > 0 && (
        <section>
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-3">✅ Finished Today</h2>
          <div className="space-y-3">{finished.map((m) => <MatchRow key={m.id} match={m} />)}</div>
        </section>
      )}
    </div>
  )
}
