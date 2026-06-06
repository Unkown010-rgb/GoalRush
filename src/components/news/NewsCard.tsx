import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types'
import { formatRelativeTime, getCategoryColor } from '@/lib/utils'
import Badge from '@/components/ui/Badge'
import { Clock, ExternalLink } from 'lucide-react'

interface NewsCardProps {
  article: Article
  size?: 'sm' | 'md' | 'lg'
}

export default function NewsCard({ article, size = 'md' }: NewsCardProps) {
  const categoryColor = getCategoryColor(article.category)

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <article className="news-card bg-surface-2 border border-border-muted rounded-xl overflow-hidden hover:border-brand/30 transition-all duration-300">
        {/* Image */}
        <div className={`relative overflow-hidden ${size === 'sm' ? 'h-36' : size === 'lg' ? 'h-56' : 'h-48'}`}>
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center text-4xl"
              style={{
                background: `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}05)`,
              }}
            >
              ⚽
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-1/80 via-transparent to-transparent" />

          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {article.isBreaking && (
              <Badge variant="breaking" size="sm">BREAKING</Badge>
            )}
          </div>

          {/* Category dot */}
          <div className="absolute bottom-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: `${categoryColor}25`,
                color: categoryColor,
                border: `1px solid ${categoryColor}40`,
              }}
            >
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-4 ${size === 'sm' ? 'p-3' : ''}`}>
          <h3 className={`text-white font-bold leading-tight mb-2 group-hover:text-brand transition-colors line-clamp-2 ${size === 'lg' ? 'text-lg' : 'text-base'}`}>
            {article.title}
          </h3>

          {size !== 'sm' && (
            <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-3">
              {article.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-muted/80 flex items-center gap-1">
                <ExternalLink className="w-3 h-3" />
                {article.source}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatRelativeTime(article.publishedAt)}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
