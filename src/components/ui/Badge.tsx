import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'breaking' | 'confirmed' | 'rumour' | 'completed' | 'failed' | 'live' | 'category'
  size?: 'sm' | 'md'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-surface-3 text-muted border border-border-muted',
    breaking: 'badge-breaking font-bold uppercase tracking-wider',
    confirmed: 'badge-confirmed font-semibold',
    rumour: 'badge-rumour font-semibold',
    completed: 'bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold',
    failed: 'bg-red-500/20 text-red-400 border border-red-500/30 font-semibold',
    live: 'badge-live font-bold uppercase tracking-wider',
    category: 'bg-brand/20 text-brand border border-brand/30 font-medium',
  }

  const sizes = {
    sm: 'text-xs px-2 py-0.5 rounded-md',
    md: 'text-sm px-3 py-1 rounded-lg',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {variant === 'breaking' && (
        <span className="w-1.5 h-1.5 rounded-full bg-breaking animate-pulse inline-block" />
      )}
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-breaking animate-pulse inline-block" />
      )}
      {children}
    </span>
  )
}
