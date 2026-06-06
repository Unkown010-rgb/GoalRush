import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/layout/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreakingNewsTicker from '@/components/layout/BreakingNewsTicker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GoalRush — Football News, Live Scores & Transfer Updates',
    template: '%s | GoalRush',
  },
  description: 'GoalRush is your #1 source for breaking football news, live scores, transfer updates, and in-depth analysis from the Premier League, La Liga, Champions League, World Cup and beyond.',
  openGraph: {
    title: 'GoalRush — Football News, Live Scores & Transfer Updates',
    description: 'Breaking football news, live scores, transfer updates, and analysis.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-surface-1 text-white min-h-screen`}>
        <Providers>
          <BreakingNewsTicker />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
