import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        'bg-brand hover:bg-brand-dark text-white font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/30',
      secondary:
        'bg-surface-3 hover:bg-surface-4 text-white font-medium border border-border-muted',
      outline:
        'bg-transparent hover:bg-surface-3 text-brand border border-brand font-medium',
      ghost:
        'bg-transparent hover:bg-surface-3 text-muted hover:text-white font-medium',
      danger:
        'bg-breaking/20 hover:bg-breaking/30 text-breaking border border-breaking/30 font-medium',
    }

    const sizes = {
      sm: 'text-sm px-3 py-1.5 rounded-md',
      md: 'text-sm px-4 py-2.5 rounded-lg',
      lg: 'text-base px-6 py-3 rounded-xl',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
