'use client'

import { useState, useMemo } from 'react'
import { currencies, mockExchangeRates } from '@/lib/mockData'
import { Heart, ChevronDown, Check, Globe } from 'lucide-react'

const BASE_AMOUNTS_USD = [5, 10, 25, 50]

function convertAmount(usdAmount: number, toCurrency: string): string {
  const rate = mockExchangeRates[toCurrency] || 1
  const converted = usdAmount * rate
  const decimals = converted >= 100 ? 0 : converted >= 10 ? 2 : 2
  return converted.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })
}

export default function DonatePage() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10)
  const [customAmount, setCustomAmount] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false)
  const [currencySearch, setCurrencySearch] = useState('')

  const filteredCurrencies = useMemo(() =>
    currencies.filter(
      (c) =>
        c.code.toLowerCase().includes(currencySearch.toLowerCase()) ||
        c.name.toLowerCase().includes(currencySearch.toLowerCase())
    ),
    [currencySearch]
  )

  const finalAmountUSD = selectedAmount || parseFloat(customAmount) || 0
  const displayAmount = finalAmountUSD > 0 ? convertAmount(finalAmountUSD, selectedCurrency.code) : '0'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (finalAmountUSD <= 0) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="bg-surface-2 border border-brand/30 rounded-2xl p-10">
          <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-brand" />
          </div>
          <h1 className="text-2xl font-black text-white mb-2">Thank You! ❤️</h1>
          <p className="text-muted mb-2">Your donation of <strong className="text-white">{selectedCurrency.symbol}{displayAmount} {selectedCurrency.code}</strong> has been received.</p>
          <p className="text-muted text-sm">You help keep GoalRush free and independent for millions of football fans worldwide.</p>
          {message && <blockquote className="mt-4 bg-surface-3 rounded-xl px-4 py-3 text-sm text-muted italic">&ldquo;{message}&rdquo;</blockquote>}
          <a href="/" className="mt-6 inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors">Back to GoalRush</a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-brand" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">Support GoalRush</h1>
        <p className="text-muted max-w-sm mx-auto">GoalRush is free for everyone. Your donation keeps us independent, ad-light, and always improving.</p>
      </div>

      {/* Donor stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[{ v: '2,841', l: 'Donors' }, { v: '$48,200', l: 'Raised' }, { v: '149', l: 'Countries' }].map((s) => (
          <div key={s.l} className="bg-surface-2 border border-border-muted rounded-xl p-4 text-center">
            <div className="text-lg font-black text-white">{s.v}</div>
            <div className="text-xs text-muted">{s.l}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-surface-2 border border-border-muted rounded-2xl p-6 space-y-6">
        {/* Currency Selector */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand" /> Currency
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCurrencyPicker(!showCurrencyPicker)}
              className="w-full flex items-center justify-between bg-surface-3 border border-border-muted hover:border-brand/50 rounded-xl px-4 py-3 text-sm text-white transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>{selectedCurrency.flag}</span>
                <span className="font-semibold">{selectedCurrency.code}</span>
                <span className="text-muted">— {selectedCurrency.name}</span>
                <span className="text-brand font-bold ml-1">({selectedCurrency.symbol})</span>
              </span>
              <ChevronDown className={`w-4 h-4 text-muted transition-transform ${showCurrencyPicker ? 'rotate-180' : ''}`} />
            </button>

            {showCurrencyPicker && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface-2 border border-border-muted rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-3 border-b border-border-muted">
                  <input
                    type="text"
                    value={currencySearch}
                    onChange={(e) => setCurrencySearch(e.target.value)}
                    placeholder="Search currency..."
                    className="w-full bg-surface-3 border border-border-muted rounded-lg px-3 py-2 text-sm text-white placeholder-muted focus:outline-none focus:border-brand"
                    autoFocus
                  />
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredCurrencies.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => { setSelectedCurrency(c); setShowCurrencyPicker(false); setCurrencySearch('') }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-surface-3 transition-colors text-left ${selectedCurrency.code === c.code ? 'bg-brand/10 text-brand' : 'text-muted hover:text-white'}`}
                    >
                      <span>{c.flag}</span>
                      <span className="font-semibold w-10">{c.code}</span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="text-muted">{c.symbol}</span>
                      {selectedCurrency.code === c.code && <Check className="w-4 h-4 text-brand" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-xs text-muted mt-1">Supporting {currencies.length} currencies worldwide</p>
        </div>

        {/* Amount presets */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">Donation Amount</label>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {BASE_AMOUNTS_USD.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => { setSelectedAmount(amt); setCustomAmount('') }}
                className={`py-3 rounded-xl text-sm font-bold transition-all ${
                  selectedAmount === amt
                    ? 'bg-brand text-white shadow-lg shadow-brand/25'
                    : 'bg-surface-3 text-muted hover:text-white border border-border-muted hover:border-brand/50'
                }`}
              >
                <div className="text-xs text-opacity-70 mb-0.5">{selectedCurrency.symbol}</div>
                {convertAmount(amt, selectedCurrency.code)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-surface-3 border border-border-muted focus-within:border-brand rounded-xl px-4 py-3 transition-colors">
            <span className="text-brand font-bold">{selectedCurrency.symbol}</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
              placeholder="Custom amount"
              className="flex-1 bg-transparent text-sm text-white placeholder-muted focus:outline-none"
              min="0.01"
              step="0.01"
            />
            <span className="text-xs text-muted">{selectedCurrency.code}</span>
          </div>
          {finalAmountUSD > 0 && (
            <p className="text-xs text-brand mt-1.5 font-medium">
              ≈ {selectedCurrency.symbol}{displayAmount} {selectedCurrency.code}
            </p>
          )}
        </div>

        {/* Personal info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-muted mb-1.5">Your Name (optional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Anonymous"
              className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted mb-1.5">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="for receipt"
              className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-muted mb-1.5">Message (optional)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a message for the GoalRush team..."
            rows={3}
            className="w-full bg-surface-3 border border-border-muted rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-brand transition-colors resize-none"
          />
        </div>

        {/* Payment (mock Stripe UI) */}
        <div className="bg-surface-3 border border-border-muted rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-white">Card Details</span>
            <div className="flex gap-1.5">
              {['💳 Visa', '💳 MC', '💳 Amex'].map((c) => (
                <span key={c} className="text-xs bg-surface-4 px-2 py-0.5 rounded text-muted">{c}</span>
              ))}
            </div>
          </div>
          <input type="text" placeholder="1234 5678 9012 3456" className="w-full bg-surface-4 border border-border-muted rounded-lg px-3 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-brand mb-2" maxLength={19} />
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="MM / YY" className="bg-surface-4 border border-border-muted rounded-lg px-3 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-brand" maxLength={7} />
            <input type="text" placeholder="CVC" className="bg-surface-4 border border-border-muted rounded-lg px-3 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-brand" maxLength={4} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || finalAmountUSD <= 0}
          className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
        >
          {loading ? (
            <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Processing...</>
          ) : (
            <><Heart className="w-4 h-4" /> Donate {finalAmountUSD > 0 ? `${selectedCurrency.symbol}${displayAmount} ${selectedCurrency.code}` : ''}</>
          )}
        </button>

        <p className="text-xs text-muted text-center">🔒 Secured by Stripe. We never store your card details.</p>
      </form>
    </div>
  )
}
