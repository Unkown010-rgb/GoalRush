import { mockLeagueTable } from '@/lib/mockData'
import { LeagueTableRow } from '@/types'

function FormBadge({ result }: { result: 'W' | 'D' | 'L' }) {
  const styles = { W: 'bg-brand text-white', D: 'bg-gold text-black', L: 'bg-breaking text-white' }
  return (
    <span className={`w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center ${styles[result]}`}>
      {result}
    </span>
  )
}

export default function LeagueTable({ rows = mockLeagueTable, compact = false }: { rows?: LeagueTableRow[], compact?: boolean }) {
  const displayRows = compact ? rows.slice(0, 6) : rows
  return (
    <div className="bg-surface-2 border border-border-muted rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border-muted">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League Table
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-muted border-b border-border-muted">
              <th className="text-left px-3 py-2 font-medium w-6">#</th>
              <th className="text-left px-3 py-2 font-medium">Team</th>
              <th className="text-center px-2 py-2 font-medium">P</th>
              <th className="text-center px-2 py-2 font-medium">W</th>
              <th className="text-center px-2 py-2 font-medium">D</th>
              <th className="text-center px-2 py-2 font-medium">L</th>
              {!compact && <th className="text-center px-2 py-2 font-medium">GD</th>}
              <th className="text-center px-2 py-2 font-medium font-bold text-white">Pts</th>
              {!compact && <th className="text-center px-2 py-2 font-medium">Form</th>}
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row) => (
              <tr key={row.position} className={`border-b border-border-muted/50 hover:bg-surface-3 transition-colors ${row.position <= 4 ? 'border-l-2 border-l-brand' : row.position <= 6 ? 'border-l-2 border-l-gold' : row.position >= 18 ? 'border-l-2 border-l-breaking' : 'border-l-2 border-l-transparent'}`}>
                <td className="px-3 py-2.5 text-muted font-medium">{row.position}</td>
                <td className="px-3 py-2.5 font-medium text-white">{row.team}</td>
                <td className="text-center px-2 py-2.5 text-muted">{row.played}</td>
                <td className="text-center px-2 py-2.5 text-muted">{row.won}</td>
                <td className="text-center px-2 py-2.5 text-muted">{row.drawn}</td>
                <td className="text-center px-2 py-2.5 text-muted">{row.lost}</td>
                {!compact && <td className={`text-center px-2 py-2.5 font-medium ${row.gd > 0 ? 'text-brand' : row.gd < 0 ? 'text-breaking' : 'text-muted'}`}>{row.gd > 0 ? '+' : ''}{row.gd}</td>}
                <td className="text-center px-2 py-2.5 font-bold text-white">{row.points}</td>
                {!compact && (
                  <td className="px-2 py-2.5">
                    <div className="flex items-center gap-0.5">
                      {row.form.map((f, i) => <FormBadge key={i} result={f} />)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-3 border-t border-border-muted flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-xs text-muted"><span className="w-2.5 h-2.5 rounded-full bg-brand" /> Champions League</div>
        <div className="flex items-center gap-1.5 text-xs text-muted"><span className="w-2.5 h-2.5 rounded-full bg-gold" /> Europa League</div>
        <div className="flex items-center gap-1.5 text-xs text-muted"><span className="w-2.5 h-2.5 rounded-full bg-breaking" /> Relegation</div>
      </div>
    </div>
  )
}
