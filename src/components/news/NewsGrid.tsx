'use client'

import { useState } from 'react'
import { Article } from '@/types'
import NewsCard from './NewsCard'
import FeaturedArticle from './FeaturedArticle'
import CategoryTabs from './CategoryTabs'
import { ChevronDown } from 'lucide-react'

interface NewsGridProps {
  articles: Article[]
  showFeatured?: boolean
  showCategoryTabs?: boolean
  initialCategory?: string
}

const PAGE_SIZE = 9

export default function NewsGrid({
  articles,
  showFeatured = true,
  showCategoryTabs = true,
  initialCategory = 'all',
}: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  const featuredArticle = showFeatured ? filteredArticles.find((a) => a.isFeatured) : null
  const remainingArticles = showFeatured && featuredArticle
    ? filteredArticles.filter((a) => a.id !== featuredArticle.id)
    : filteredArticles

  const visibleArticles = remainingArticles.slice(0, visibleCount)
  const hasMore = visibleArticles.length < remainingArticles.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE)
  }

  return (
    <div className="space-y-6">
      {/* Category tabs */}
      {showCategoryTabs && (
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat)
            setVisibleCount(PAGE_SIZE)
          }}
        />
      )}

      {/* No articles state */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No articles found in this category.</p>
        </div>
      )}

      {/* Featured article */}
      {featuredArticle && (
        <div className="mb-2">
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      {/* News grid */}
      {visibleArticles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* Load more button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 bg-surface-3 hover:bg-surface-4 border border-border-muted hover:border-brand/40 text-white rounded-xl transition-all duration-200 font-medium group"
          >
            Load More Articles
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}
