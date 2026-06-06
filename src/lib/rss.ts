import Parser from 'rss-parser'
import { slugify } from './utils'

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'GoalRush Football News Aggregator/1.0',
  },
})

const RSS_FEEDS = [
  {
    name: 'Sky Sports Football',
    url: 'https://www.skysports.com/rss/12040',
    category: 'General',
  },
  {
    name: 'BBC Sport Football',
    url: 'https://feeds.bbci.co.uk/sport/football/rss.xml',
    category: 'General',
  },
  {
    name: 'The Guardian Football',
    url: 'https://www.theguardian.com/football/rss',
    category: 'General',
  },
]

export interface RSSArticle {
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl?: string
  category: string
  source: string
  sourceUrl?: string
  author?: string
  isBreaking: boolean
  isFeatured: boolean
  publishedAt: string
}

export async function fetchRSSFeeds(): Promise<RSSArticle[]> {
  const articles: RSSArticle[] = []

  for (const feed of RSS_FEEDS) {
    try {
      const result = await parser.parseURL(feed.url)

      for (const item of result.items.slice(0, 10)) {
        const title = item.title || 'Untitled'
        const slug = slugify(title) + '-' + Date.now()
        const excerpt =
          item.contentSnippet ||
          item.summary ||
          item.content?.replace(/<[^>]*>/g, '').slice(0, 200) ||
          ''
        const content =
          item.content ||
          item['content:encoded'] ||
          item.contentSnippet ||
          ''
        const rawMedia = (item as Record<string, unknown>)['media:content']
        const mediaUrl = rawMedia && typeof rawMedia === 'object' ? (rawMedia as Record<string, unknown>).url as string | undefined : undefined
        const imageUrl =
          item.enclosure?.url ||
          mediaUrl ||
          undefined

        articles.push({
          title,
          slug,
          excerpt: excerpt.slice(0, 500),
          content: content.slice(0, 5000),
          imageUrl,
          category: feed.category,
          source: feed.name,
          sourceUrl: item.link || undefined,
          author: item.creator || item.author || undefined,
          isBreaking: false,
          isFeatured: false,
          publishedAt: item.pubDate
            ? new Date(item.pubDate).toISOString()
            : new Date().toISOString(),
        })
      }
    } catch (e) {
      console.error(`Failed to fetch ${feed.name}:`, e)
    }
  }

  return articles
}
