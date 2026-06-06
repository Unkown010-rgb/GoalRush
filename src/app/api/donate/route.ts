import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { amount, currency, message, name } = body

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
  }

  // In production: create Stripe PaymentIntent here
  const mockPaymentIntent = {
    id: `pi_mock_${Date.now()}`,
    amount: Math.round(amount * 100),
    currency: currency?.toLowerCase() || 'usd',
    status: 'requires_payment_method',
    client_secret: `pi_mock_${Date.now()}_secret_${Math.random().toString(36).slice(2)}`,
    metadata: { message: message || '', donor_name: name || 'Anonymous' },
  }

  return NextResponse.json({ paymentIntent: mockPaymentIntent })
}
