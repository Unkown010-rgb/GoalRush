'use client'

import { useState, useEffect } from 'react'
import { mockLiveScores } from '@/lib/mockData'
import { LiveScore } from '@/types'
import { RefreshCw } from 'lucide-react'
import Link from 'next/link'

function ScoreRow({ match }: { match: LiveScore }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-surface-3/50 rounded-lg transition-colors group">
      {/* Home team */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <div className="w-5 h-5 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-[10px] font-bold text-brand flex-shrink-0">
          {match.homeTeam[0]}
        </div>
        <span className="text-sm font-medium text-white truncate">{match.homeTeam}</span>
      </div>

      {/* Score / Status */}
      <div className="flex flex-col items-center px-3 flex-shrink-0">
        {match.status === 'live' ? (
          <>
            <div className="flex items-center gap-1.5 font-black text-white text-base">
              <span>{match.homeScore}</span>
              <span className="text-muted/60">—</span>
              <span>{match.awayScore}</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-breaking animate-pulse" />
              <span className="text-[10px] text-breaking font-bold">{match.minute}&apos;</span>
            </div>
          </>
        ) : match.status === 'finished' ? (
          <>
            <div className="flex items-center gap-1.5 font-black text-white/80 text-base">
              <span>{match.homeScore}</span>
              <span className="text-muted/60">—</span>
              <span>{match.awayScore}</span>
            </div>
            <span className="text-[10px] text-muted font-medium">FT</span>
          </>
        ) : (
          <>
            <span className="text-sm font-bold text-muted">vs</span>
            <span className="text-[10px] text-brand font-medium">Soon</span>
          </>
        )}
      </div>

      {/* Away team */}
      <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
        <span className="text-sm font-medium text-white truncate text-right">{match.awayTeam}</span>
        <div className="w-5 h-5 rounded-full bg-muted/10 border border-border-muted flex items-center justify-center text-[10px] font-bold text-muted flex-shrink-0">
          {match.awayTeam[0]}
        </div>
      </div>
    </div>
  )
}

export default function LiveScoreWidget() {
  const [scores, setScores] = useState<LiveScore[]>(mockLiveScores)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setScores(mockLiveScores)
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 800)
  }

  const liveMatches = scores.filter((s) => s.status === 'live')
  const finishedMatches = scores.filter((s) => s.status === 'finished')
  const upcomingMatches = scores.filter((s) => s.status === 'upcoming')

  return (
    <div className="bg-surface-2 border border-border-muted rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-muted bg-surface-3/50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-breaking animate-pulse" />
          <span className="text-white font-bold text-sm">Live Scores</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted text-xs">
            {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <button
            onClick={handleRefresh}
            className="p-1 rounded hover:bg-surface-4 text-muted hover:text-white transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Live matches */}
      {liveMatches.length > 0 && (
        <div>
          <div className="px-3 pt-2 pb-1">
            <span className="text-[10px] font-bold text-breaking uppercase tracking-wider">Live Now ({liveMatches.length})</span>
          </div>
          {liveMatches.map((match) => (
            <div key={match.id}>
              <div className="px-3 pb-0.5">
                <span className="text-[10px] text-muted/60">{match.competition}</span>
              </div>
              <ScoreRow match={match} />
            </div>
          ))}
        </div>
      )}

      {/* Finished matches */}
      {finishedMatches.length > 0 && (
        <div>
          <div className="px-3 pt-3 pb-1 border-t border-border-muted">
            <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Finished</span>
          </div>
          {finishedMatches.map((match) => (
            <div key={match.id}>
              <div className="px-3 pb-0.5">
                <span className="text-[10px] text-muted/60">{match.competition}</span>
              </div>
              <ScoreRow match={match} />
            </div>
          ))}
        </div>
      )}

      {/* Upcoming matches */}
      {upcomingMatches.length > 0 && (
        <div>
          <div className="px-3 pt-3 pb-1 border-t border-border-muted">
            <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Upcoming</span>
          </div>
          {upcomingMatches.map((match) => (
            <div key={match.id}>
              <div className="px-3 pb-0.5">
                <span className="text-[10px] text-muted/60">{match.competition}</span>
              </div>
              <ScoreRow match={match} />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-border-muted px-4 py-2.5">
        <Link
          href="/live-scores"
          className="text-xs text-brand hover:text-brand/80 font-medium transition-colors flex items-center justify-center gap-1"
        >
          View all scores →
        </Link>
      </div>
    </div>
  )
}
