import { mockArticles } from '@/lib/mockData'
import NewsCard from '@/components/news/NewsCard'
import LeagueTable from '@/components/scores/LeagueTable'
import { notFound } from 'next/navigation'

const leagueConfig: Record<string, { name: string; emoji: string; category: string; color: string; description: string }> = {
  'premier-league': { name: 'Premier League', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', category: 'Premier League', color: '#3b82f6', description: 'The most watched football league in the world.' },
  'la-liga': { name: 'La Liga', emoji: '🇪🇸', category: 'La Liga', color: '#ef4444', description: 'Spain\'s top-flight football league, home of Real Madrid and Barcelona.' },
  'champions-league': { name: 'Champions League', emoji: '⭐', category: 'Champions League', color: '#f59e0b', description: 'UEFA\'s premier club football competition.' },
  'world-cup': { name: 'World Cup', emoji: '🌍', category: 'World Cup', color: '#8b5cf6', description: 'The biggest sporting event on the planet.' },
  'bundesliga': { name: 'Bundesliga', emoji: '🇩🇪', category: 'History', color: '#f97316', description: 'Germany\'s top football division.' },
  'serie-a': { name: 'Serie A', emoji: '🇮🇹', category: 'Transfers', color: '#10b981', description: 'Italy\'s elite football competition.' },
}

interface Props { params: { league: string } }

export function generateStaticParams() {
  return Object.keys(leagueConfig).map((league) => ({ league }))
}

export default function LeaguePage({ params }: Props) {
  const config = leagueConfig[params.league]
  if (!config) notFound()

  const articles = mockArticles.filter((a) => a.category === config.category).slice(0, 9)
  const showTable = params.league === 'premier-league'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl">{config.emoji}</div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">{config.name}</h1>
          <p className="text-muted text-sm mt-1">{config.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Latest {config.name} News</h2>
          {articles.length === 0 ? (
            <div className="text-center py-12 text-muted">
              <div className="text-3xl mb-3">📰</div>
              <p>No articles yet for this league.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((a) => <NewsCard key={a.id} article={a} />)}
            </div>
          )}
        </div>
        {showTable && (
          <aside>
            <LeagueTable compact />
          </aside>
        )}
      </div>
    </div>
  )
}
