import { NextRequest, NextResponse } from 'next/server'
import { mockArticles } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')?.toLowerCase()
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')

  let articles = [...mockArticles]

  if (category && category !== 'All') {
    articles = articles.filter((a) => a.category === category)
  }
  if (search) {
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(search) ||
        a.excerpt.toLowerCase().includes(search) ||
        a.tags.some((t) => t.toLowerCase().includes(search))
    )
  }

  const total = articles.length
  const start = (page - 1) * limit
  const data = articles.slice(start, start + limit)

  return NextResponse.json({ articles: data, total, page, totalPages: Math.ceil(total / limit) })
}
