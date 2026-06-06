import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types'
import { formatRelativeTime, getCategoryColor } from '@/lib/utils'
import { Clock, ExternalLink, ArrowRight } from 'lucide-react'

interface FeaturedArticleProps {
  article: Article
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const categoryColor = getCategoryColor(article.category)

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl border border-border-muted hover:border-brand/40 transition-all duration-300 bg-surface-2">
        {/* Image */}
        <div className="relative h-72 sm:h-80 lg:h-96">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(135deg, ${categoryColor}20, #080c18)`,
              }}
            >
              ⚽
            </div>
          )}

          {/* Strong gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/70 to-transparent" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Category & source */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{
                  backgroundColor: `${categoryColor}25`,
                  color: categoryColor,
                  border: `1px solid ${categoryColor}50`,
                }}
              >
                {article.category}
              </span>
              {article.isBreaking && (
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-breaking/20 text-breaking border border-breaking/30 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-breaking animate-pulse" />
                  Breaking
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-black leading-tight mb-3 line-clamp-3 group-hover:text-brand transition-colors">
              {article.title}
            </h2>

            {/* Excerpt */}
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4 hidden sm:block">
              {article.excerpt}
            </p>

            {/* Meta + CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-white/60">
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {article.source}
                </span>
                {article.author && (
                  <span className="hidden sm:block">by {article.author}</span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatRelativeTime(article.publishedAt)}
                </span>
              </div>

              <span className="hidden sm:flex items-center gap-1 text-brand text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
