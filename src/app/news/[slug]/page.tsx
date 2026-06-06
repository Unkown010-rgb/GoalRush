import { notFound } from 'next/navigation'
import { mockArticles } from '@/lib/mockData'
import { formatDate, getCategoryColor } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, ExternalLink, Share2 } from 'lucide-react'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return mockArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props) {
  const article = mockArticles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default function ArticlePage({ params }: Props) {
  const article = mockArticles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const related = mockArticles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/news" className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> News
        </Link>
        <span className="text-border-muted">/</span>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: getCategoryColor(article.category) + '20', color: getCategoryColor(article.category) }}>
          {article.category}
        </span>
      </div>

      {/* Article Header */}
      <div className="mb-6">
        {article.isBreaking && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-breaking live-pulse" />
            <span className="text-xs font-bold text-breaking uppercase tracking-wider">Breaking</span>
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-muted text-base sm:text-lg leading-relaxed mb-5">{article.excerpt}</p>

        <div className="flex flex-wrap items-center gap-4 pb-5 border-b border-border-muted">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
              {article.author?.[0] || 'G'}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{article.author || 'GoalRush Staff'}</p>
              <p className="text-xs text-muted">{article.source}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Clock className="w-3.5 h-3.5" />
            {formatDate(article.publishedAt)}
          </div>
          {article.sourceUrl && article.sourceUrl !== '#' && (
            <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-brand hover:text-brand-dark transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Source
            </a>
          )}
          <button className="ml-auto flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors bg-surface-3 px-3 py-1.5 rounded-lg border border-border-muted">
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
      </div>

      {/* Hero Image */}
      {article.imageUrl && (
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 bg-surface-3">
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover" unoptimized />
        </div>
      )}

      {/* Article Body */}
      <article
        className="prose prose-invert prose-sm sm:prose-base max-w-none mb-8
          prose-headings:font-bold prose-headings:text-white
          prose-p:text-muted prose-p:leading-relaxed
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-border-muted">
        {article.tags.map((tag) => (
          <span key={tag} className="text-xs bg-surface-3 text-muted border border-border-muted px-3 py-1 rounded-full hover:text-white hover:border-brand/50 transition-colors cursor-pointer">
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-white mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((a) => (
              <Link key={a.id} href={`/news/${a.slug}`} className="group bg-surface-2 border border-border-muted rounded-xl p-4 hover:border-brand/30 transition-all">
                <p className="text-xs text-brand mb-1">{a.category}</p>
                <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors line-clamp-3">{a.title}</p>
                <p className="text-xs text-muted mt-2">{formatDate(a.publishedAt)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
