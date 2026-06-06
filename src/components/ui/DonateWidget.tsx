'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import Button from './Button'

const PRESET_AMOUNTS = [5, 10, 25, 50]

interface DonateWidgetProps {
  compact?: boolean
}

export default function DonateWidget({ compact = false }: DonateWidgetProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10)
  const [customAmount, setCustomAmount] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  const handleDonate = async () => {
    if (!finalAmount || finalAmount <= 0) return
    setIsSubmitting(true)

    try {
      await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount, currency: 'USD' }),
      })
      setSuccess(true)
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <Heart className="w-6 h-6 text-brand fill-brand" />
        </div>
        <p className="text-white font-semibold">Thank you for your support!</p>
        <p className="text-muted text-sm mt-1">Your donation of ${finalAmount} means the world to us.</p>
      </div>
    )
  }

  return (
    <div className={compact ? 'space-y-3' : 'space-y-4'}>
      {!compact && (
        <p className="text-muted text-sm">
          Help us keep GoalRush free and independent. Your support keeps the lights on!
        </p>
      )}

      {/* Preset amounts */}
      <div className="grid grid-cols-4 gap-2">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount)
              setCustomAmount('')
            }}
            className={`py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              selectedAmount === amount && !customAmount
                ? 'bg-brand text-white shadow-lg shadow-brand/20'
                : 'bg-surface-3 text-muted hover:bg-surface-4 hover:text-white border border-border-muted'
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-sm">$</span>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value)
            setSelectedAmount(null)
          }}
          placeholder="Custom amount"
          className="w-full bg-surface-3 border border-border-muted rounded-lg py-2.5 pl-7 pr-4 text-sm text-white placeholder-muted focus:outline-none focus:border-brand"
          min="1"
        />
      </div>

      <Button
        onClick={handleDonate}
        loading={isSubmitting}
        disabled={!finalAmount || finalAmount <= 0}
        className="w-full"
        size={compact ? 'sm' : 'md'}
      >
        <Heart className="w-4 h-4" />
        Donate ${finalAmount || '—'}
      </Button>
    </div>
  )
}
