import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email, leagues, categories } = body

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // In production: save to DB and send confirmation email
  return NextResponse.json({
    success: true,
    message: `Subscribed ${email} to ${leagues?.length || 0} leagues and ${categories?.length || 0} categories.`,
  })
}
