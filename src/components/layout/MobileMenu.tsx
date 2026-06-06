'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X, ChevronRight, Home, Newspaper, RefreshCw, Tv, Trophy, Heart, LogIn, UserPlus } from 'lucide-react'

const leagues = [
  { name: 'Premier League', href: '/leagues/premier-league', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'La Liga', href: '/leagues/la-liga', emoji: '🇪🇸' },
  { name: 'Champions League', href: '/leagues/champions-league', emoji: '⭐' },
  { name: 'World Cup', href: '/leagues/world-cup', emoji: '🌍' },
]

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Transfers', href: '/transfers', icon: RefreshCw },
  { name: 'Live Scores', href: '/live-scores', icon: Tv },
  { name: 'Donate', href: '/donate', icon: Heart },
]

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  session: unknown
}

export default function MobileMenu({ isOpen, onClose, session }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-surface-2 z-50 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-muted">
          <span className="text-white font-bold text-lg">
            Goal<span className="text-brand">Rush</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-3 text-muted hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted hover:text-white hover:bg-surface-3 transition-colors group"
            >
              <Icon className="w-5 h-5 text-brand" />
              <span className="font-medium">{name}</span>
              <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>

        {/* Leagues section */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Trophy className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Leagues</span>
          </div>
          {leagues.map(({ name, href, emoji }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:text-white hover:bg-surface-3 transition-colors"
            >
              <span className="text-lg">{emoji}</span>
              <span className="text-sm font-medium">{name}</span>
            </Link>
          ))}
        </div>

        {/* Auth section */}
        <div className="p-4 border-t border-border-muted mt-auto">
          {session ? (
            <div className="space-y-2">
              <Link
                href="/account"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-surface-3 hover:bg-surface-4 rounded-lg text-white text-sm font-medium transition-colors"
              >
                My Account
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                href="/auth/login"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-surface-3 hover:bg-surface-4 rounded-lg text-white text-sm font-medium transition-colors border border-border-muted"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Link>
              <Link
                href="/auth/register"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-brand hover:bg-brand-dark rounded-lg text-white text-sm font-semibold transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
