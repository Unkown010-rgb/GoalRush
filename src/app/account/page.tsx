'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Check, Bell, Mail, Trophy, User, Heart } from 'lucide-react'

const LEAGUES = ['Premier League', 'La Liga', 'Champions League', 'World Cup', 'Bundesliga', 'Serie A']
const CATEGORIES = ['Transfers', 'Controversies', 'History', 'Live Scores']

export default function AccountPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [subscriptions, setSubscriptions] = useState<string[]>(['Premier League', 'Champions League'])
  const [categories, setCategories] = useState<string[]>(['Transfers'])
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/login')
  }, [status, router])

  if (status === 'loading') return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin w-8 h-8 border-2 border-brand border-t-transparent rounded-full" /></div>
  if (!session) return null

  const toggle = (arr: string[], item: string, setArr: (v: string[]) => void) =>
    setArr(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item])

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000) }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl font-black text-white mb-6">My Account</h1>

      <div className="space-y-6">
        {/* Profile */}
        <div className="bg-surface-2 border border-border-muted rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4"><User className="w-4 h-4 text-brand" /> Profile</h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white text-2xl font-black">
              {session.user?.name?.[0]?.toUpperCase() || '?'}
            </div>
            <div>
              <p className="font-bold text-white">{session.user?.name || 'GoalRush User'}</p>
              <p className="text-sm text-muted">{session.user?.email}</p>
              <span className="inline-flex items-center gap-1 text-xs bg-brand/20 text-brand border border-brand/30 px-2 py-0.5 rounded-full mt-1">
                <Check className="w-3 h-3" /> Verified Member
              </span>
            </div>
          </div>
        </div>

        {/* League Subscriptions */}
        <div className="bg-surface-2 border border-border-muted rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4"><Trophy className="w-4 h-4 text-gold" /> My Leagues</h2>
          <div className="flex flex-wrap gap-2">
            {LEAGUES.map((l) => (
              <button key={l} onClick={() => toggle(subscriptions, l, setSubscriptions)}
                className={`text-xs px-3 py-2 rounded-xl border transition-all ${subscriptions.includes(l) ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' : 'bg-surface-3 text-muted border-border-muted hover:text-white hover:border-brand/50'}`}>
                {subscriptions.includes(l) && <Check className="w-3 h-3 inline mr-1" />}{l}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-surface-2 border border-border-muted rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4"><Bell className="w-4 h-4 text-brand" /> News Categories</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => toggle(categories, c, setCategories)}
                className={`text-xs px-3 py-2 rounded-xl border transition-all ${categories.includes(c) ? 'bg-brand text-white border-brand shadow-lg shadow-brand/20' : 'bg-surface-3 text-muted border-border-muted hover:text-white hover:border-brand/50'}`}>
                {categories.includes(c) && <Check className="w-3 h-3 inline mr-1" />}{c}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-surface-2 border border-border-muted rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4"><Mail className="w-4 h-4 text-brand" /> Notifications</h2>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-sm font-medium text-white">Email notifications</p>
              <p className="text-xs text-muted">Breaking news alerts for your favourite leagues</p>
            </div>
            <div onClick={() => setEmailNotifs(!emailNotifs)} className={`w-12 h-6 rounded-full transition-all cursor-pointer relative ${emailNotifs ? 'bg-brand' : 'bg-surface-4'}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${emailNotifs ? 'right-1' : 'left-1'}`} />
            </div>
          </label>
        </div>

        {/* Donation history */}
        <div className="bg-surface-2 border border-border-muted rounded-2xl p-6">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 mb-4"><Heart className="w-4 h-4 text-breaking" /> Donation History</h2>
          <p className="text-sm text-muted">No donations yet. <a href="/donate" className="text-brand hover:underline">Support GoalRush today →</a></p>
        </div>

        <button onClick={handleSave} className={`w-full font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${saved ? 'bg-brand/80 text-white' : 'bg-brand hover:bg-brand-dark text-white shadow-brand/25'}`}>
          {saved ? <><Check className="w-4 h-4" /> Saved!</> : 'Save Preferences'}
        </button>
      </div>
    </div>
  )
}
