'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (result?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/')
    }
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
          <h1 className="text-2xl font-black text-white mb-1">Welcome back</h1>
          <p className="text-muted text-sm">Sign in to your GoalRush account</p>
        </div>

        <div className="bg-surface-2 border border-border-muted rounded-2xl p-8">
          {error && (
            <div className="bg-breaking/10 border border-breaking/30 rounded-xl px-4 py-3 text-sm text-breaking mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors pr-10"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-brand hover:text-brand-dark">Forgot password?</a>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand/25 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Signing in...</> : 'Sign In'}
            </button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border-muted" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-surface-2 px-3 text-muted">or continue with</span></div>
          </div>

          <button type="button" className="w-full flex items-center justify-center gap-3 bg-surface-3 hover:bg-surface-4 border border-border-muted text-white text-sm font-medium py-3 rounded-xl transition-colors">
            <span className="text-lg">🔵</span> Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-muted mt-5">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-brand hover:text-brand-dark font-semibold">Create one free</Link>
        </p>
      </div>
    </div>
  )
}
