'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Menu, ChevronDown, User, LogOut, Settings, Trophy } from 'lucide-react'
import SearchBar from '@/components/ui/SearchBar'
import MobileMenu from './MobileMenu'

const leagues = [
  { name: 'Premier League', href: '/leagues/premier-league', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'La Liga', href: '/leagues/la-liga', emoji: '🇪🇸' },
  { name: 'Champions League', href: '/leagues/champions-league', emoji: '⭐' },
  { name: 'World Cup', href: '/leagues/world-cup', emoji: '🌍' },
  { name: 'Bundesliga', href: '/leagues/bundesliga', emoji: '🇩🇪' },
  { name: 'Serie A', href: '/leagues/serie-a', emoji: '🇮🇹' },
]

export default function Header() {
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLeaguesOpen, setIsLeaguesOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLeaguesOpen(false)
      setIsUserMenuOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface-1/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border-muted'
            : 'bg-surface-1 border-b border-border-muted'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/30 group-hover:shadow-brand/50 transition-shadow">
                <span className="text-white text-lg font-black leading-none">⚽</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Goal<span className="text-brand">Rush</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm text-muted hover:text-white hover:bg-surface-3 rounded-lg transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/news"
                className="px-3 py-2 text-sm text-muted hover:text-white hover:bg-surface-3 rounded-lg transition-colors font-medium"
              >
                News
              </Link>
              <Link
                href="/transfers"
                className="px-3 py-2 text-sm text-muted hover:text-white hover:bg-surface-3 rounded-lg transition-colors font-medium"
              >
                Transfers
              </Link>
              <Link
                href="/live-scores"
                className="px-3 py-2 text-sm text-muted hover:text-white hover:bg-surface-3 rounded-lg transition-colors font-medium"
              >
                Live Scores
              </Link>

              {/* Leagues Dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setIsLeaguesOpen(!isLeaguesOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-muted hover:text-white hover:bg-surface-3 rounded-lg transition-colors font-medium"
                >
                  <Trophy className="w-4 h-4 text-gold" />
                  Leagues
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLeaguesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLeaguesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-surface-2 border border-border-muted rounded-xl shadow-xl overflow-hidden z-50">
                    {leagues.map(({ name, href, emoji }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsLeaguesOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-surface-3 transition-colors"
                      >
                        <span>{emoji}</span>
                        <span>{name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/donate"
                className="px-3 py-2 text-sm text-brand hover:text-white hover:bg-brand/10 rounded-lg transition-colors font-medium"
              >
                ❤️ Donate
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Search - Desktop */}
              <div className="hidden md:block">
                <SearchBar compact placeholder="Search..." className="w-52" />
              </div>

              {/* Auth */}
              {session ? (
                <div className="relative hidden md:block" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 bg-surface-3 hover:bg-surface-4 rounded-lg transition-colors border border-border-muted"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-white">
                      {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <span className="text-sm text-white font-medium hidden lg:block max-w-24 truncate">
                      {session.user?.name || session.user?.email}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted" />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-surface-2 border border-border-muted rounded-xl shadow-xl overflow-hidden z-50">
                      <Link
                        href="/account"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-surface-3 transition-colors"
                      >
                        <User className="w-4 h-4" />
                        My Account
                      </Link>
                      <Link
                        href="/account"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted hover:text-white hover:bg-surface-3 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <div className="border-t border-border-muted" />
                      <button
                        onClick={() => signOut()}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-surface-3 transition-colors w-full"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link
                    href="/auth/login"
                    className="px-3 py-2 text-sm text-muted hover:text-white transition-colors font-medium"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/register"
                    className="px-4 py-2 text-sm bg-brand hover:bg-brand-dark text-white rounded-lg transition-colors font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-surface-3 text-muted hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        session={session}
      />
    </>
  )
}
