export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl?: string
  category: string
  tags: string[]
  source: string
  sourceUrl?: string
  author?: string
  isBreaking: boolean
  isFeatured: boolean
  publishedAt: string
}

export interface Transfer {
  id: string
  playerName: string
  playerImage?: string
  fromClub: string
  toClub: string
  fee?: string
  status: 'rumour' | 'confirmed' | 'completed' | 'failed'
  league?: string
  nationality?: string
  source?: string
  reportedAt: string
}

export interface LiveScore {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  minute: number
  status: 'live' | 'finished' | 'upcoming'
  competition: string
  homeFlag?: string
  awayFlag?: string
}

export interface LeagueTableRow {
  position: number
  team: string
  played: number
  won: number
  drawn: number
  lost: number
  gf: number
  ga: number
  gd: number
  points: number
  form: ('W' | 'D' | 'L')[]
  badge?: string
}

export interface User {
  id: string
  name?: string
  email: string
  image?: string
  role: string
}

export interface Subscription {
  id: string
  userId: string
  leagues: string[]
  categories: string[]
  email: boolean
  push: boolean
}

export interface Donation {
  id: string
  userId?: string
  amount: number
  currency: string
  status: string
  message?: string
  createdAt: string
}
