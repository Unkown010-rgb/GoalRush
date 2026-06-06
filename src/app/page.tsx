import Link from 'next/link'
import { mockArticles, mockTransfers } from '@/lib/mockData'
import NewsGrid from '@/components/news/NewsGrid'
import LiveScoreWidget from '@/components/scores/LiveScoreWidget'
import TransferTracker from '@/components/transfers/TransferTracker'
import LeagueTable from '@/components/scores/LeagueTable'
import { TrendingUp, Zap, Globe, Users } from 'lucide-react'

const stats = [
  { label: 'Articles Published', value: '10,000+', icon: '📰' },
  { label: 'News Sources', value: '50+', icon: '📡' },
  { label: 'Leagues Covered', value: '15+', icon: '🏆' },
  { label: 'Daily Readers', value: '500K+', icon: '👥' },
]

export default function HomePage() {
  const featuredArticles = mockArticles.filter((a) => a.isFeatured).slice(0, 1)
  const breakingArticles = mockArticles.filter((a) => a.isBreaking).slice(0, 3)
  const allArticles = mockArticles.slice(0, 12)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="relative rounded-2xl overflow-hidden bg-hero-gradient border border-border-muted">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,208,132,0.1),transparent_60%)]" />
          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-brand" />
                <span className="text-xs font-semibold text-brand uppercase tracking-wider">Live & Auto-Updated</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
                Football News.<br />
                <span className="text-brand">Delivered Fast.</span>
              </h1>
              <p className="text-muted text-base sm:text-lg mb-6 max-w-lg">
                Breaking transfers, Champions League drama, controversial incidents, and historical records — all in one place, 24/7.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/news" className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-brand/25">
                  Read Latest News
                </Link>
                <Link href="/transfers" className="bg-surface-3 hover:bg-surface-4 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-border-muted">
                  Transfer Centre
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-surface-2/80 border border-border-muted rounded-xl px-4 py-3">
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        {/* Left: News */}
        <div className="space-y-8">
          {/* Breaking News */}
          {breakingArticles.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-breaking" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Breaking Now</h2>
              </div>
              <div className="space-y-3">
                {breakingArticles.map((article) => (
                  <Link key={article.id} href={`/news/${article.slug}`} className="flex items-start gap-3 p-3 bg-breaking/5 border border-breaking/20 rounded-xl hover:bg-breaking/10 transition-colors group">
                    <span className="w-2 h-2 rounded-full bg-breaking live-pulse mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors line-clamp-2">{article.title}</p>
                      <p className="text-xs text-muted mt-1">{article.source}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All News */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Latest News</h2>
              </div>
              <Link href="/news" className="text-xs text-brand hover:text-brand-dark font-medium transition-colors">View all →</Link>
            </div>
            <NewsGrid articles={allArticles} />
          </section>

          {/* League Table */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base">📊</span>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">League Table</h2>
            </div>
            <LeagueTable />
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          <LiveScoreWidget />
          <TransferTracker compact />

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/30 rounded-xl p-5">
            <div className="text-2xl mb-2">📬</div>
            <h3 className="text-sm font-bold text-white mb-1">Never Miss a Story</h3>
            <p className="text-xs text-muted mb-3">Get personalized football news delivered to your inbox.</p>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-surface-3 border border-border-muted rounded-lg px-3 py-2 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors mb-2"
            />
            <button className="w-full bg-brand hover:bg-brand-dark text-white text-sm font-semibold py-2 rounded-lg transition-colors">
              Subscribe Free
            </button>
          </div>

          {/* Support GoalRush */}
          <div className="bg-surface-2 border border-border-muted rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">❤️</div>
            <h3 className="text-sm font-bold text-white mb-1">Support GoalRush</h3>
            <p className="text-xs text-muted mb-3">Help us keep the lights on and the news flowing.</p>
            <Link href="/donate" className="block bg-surface-3 hover:bg-surface-4 text-white text-sm font-semibold py-2 rounded-lg transition-colors border border-border-muted">
              Donate Any Amount
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
