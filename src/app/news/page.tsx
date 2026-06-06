'use client'

import { useState, useMemo } from 'react'
import { mockArticles } from '@/lib/mockData'
import NewsCard from '@/components/news/NewsCard'
import CategoryTabs from '@/components/news/CategoryTabs'

const ITEMS_PER_PAGE = 12

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let articles = [...mockArticles]
    if (activeCategory !== 'All') articles = articles.filter((a) => a.category === activeCategory)
    if (search) {
      const q = search.toLowerCase()
      articles = articles.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      )
    }
    return articles
  }, [activeCategory, search])

  const paginated = filtered.slice(0, page * ITEMS_PER_PAGE)
  const hasMore = paginated.length < filtered.length

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-white mb-1">Football News</h1>
        <p className="text-muted text-sm">Breaking news, analysis and features from across world football</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search news..."
          className="bg-surface-2 border border-border-muted rounded-xl px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors w-full sm:w-64"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-semibold text-white mb-1">No results found</p>
          <p className="text-sm">Try adjusting your search or category filter</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="bg-surface-2 hover:bg-surface-3 border border-border-muted text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Load More ({filtered.length - paginated.length} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
