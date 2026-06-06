import { NextResponse } from 'next/server'
import { fetchRSSFeeds } from '@/lib/rss'

export async function GET() {
  try {
    const articles = await fetchRSSFeeds()
    return NextResponse.json({ articles, count: articles.length, fetchedAt: new Date().toISOString() })
  } catch (error) {
    console.error('RSS fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch RSS feeds' }, { status: 500 })
  }
}
