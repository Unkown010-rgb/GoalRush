'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Check } from 'lucide-react'

const LEAGUES = ['Premier League', 'La Liga', 'Champions League', 'World Cup', 'Bundesliga', 'Serie A', 'Ligue 1']

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPwd, setShowPwd] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const toggleLeague = (l: string) =>
    setSelectedLeagues((prev) => prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) return setError('Passwords do not match')
    if (form.password.length < 8) return setError('Password must be at least 8 characters')
    if (!agreed) return setError('Please agree to the terms')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/30">
              <span className="text-white text-xl">⚽</span>
            </div>
            <span className="text-white font-bold text-2xl">Goal<span className="text-brand">Rush</span></span>
          </Link>
          <h1 className="text-2xl font-black text-white mb-1">Create your account</h1>
          <p className="text-muted text-sm">Join 500,000+ football fans on GoalRush</p>
        </div>

        <div className="bg-surface-2 border border-border-muted rounded-2xl p-8">
          {error && (
            <div className="bg-breaking/10 border border-breaking/30 rounded-xl px-4 py-3 text-sm text-breaking mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Full Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Smith" className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Email address</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="you@example.com" className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Password</label>
              <div className="relative">
                <input type={showPwd ? 'text' : 'password'} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required placeholder="Min 8 characters" className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors pr-10" />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Confirm Password</label>
              <input type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} required placeholder="Repeat password" className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors" />
            </div>

            {/* Favourite Leagues */}
            <div>
              <label className="block text-xs font-semibold text-muted mb-2">Favourite Leagues (optional)</label>
              <div className="flex flex-wrap gap-2">
                {LEAGUES.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => toggleLeague(l)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selectedLeagues.includes(l) ? 'bg-brand text-white border-brand' : 'bg-surface-3 text-muted border-border-muted hover:text-white'}`}
                  >
                    {selectedLeagues.includes(l) && <Check className="w-3 h-3 inline mr-1" />}
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded-md border mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors ${agreed ? 'bg-brand border-brand' : 'border-border-muted bg-surface-3'}`}
              >
                {agreed && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-xs text-muted">
                I agree to the <a href="#" className="text-brand hover:underline">Terms of Service</a> and <a href="#" className="text-brand hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button type="submit" disabled={loading} className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand/25 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Creating account...</> : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-muted mt-5">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-brand hover:text-brand-dark font-semibold">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
