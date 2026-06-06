'use client'

import { useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { mockArticles } from '@/lib/mockData'
import NewsCard from '@/components/news/NewsCard'
import Link from 'next/link'
import { Search } from 'lucide-react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLowerCase()
    return mockArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        (a.author || '').toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Search className="w-5 h-5 text-brand" />
          <h1 className="text-xl font-black text-white">
            {query ? `Search results for "${query}"` : 'Search GoalRush'}
          </h1>
        </div>
        {query && <p className="text-sm text-muted">{results.length} result{results.length !== 1 ? 's' : ''} found</p>}
      </div>

      {!query && (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-white font-semibold mb-1">Search football news</p>
          <p className="text-muted text-sm">Use the search bar above to find articles, transfers, and more.</p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">😕</div>
          <p className="text-white font-semibold mb-1">No results found</p>
          <p className="text-muted text-sm mb-4">We couldn&apos;t find anything matching &ldquo;{query}&rdquo;</p>
          <Link href="/news" className="text-brand hover:text-brand-dark text-sm font-medium">Browse all news →</Link>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Suspense fallback={<div className="text-center py-16 text-muted">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}
