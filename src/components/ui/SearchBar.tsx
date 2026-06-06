'use client'

import { useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  className?: string
  onSearch?: (query: string) => void
  compact?: boolean
}

export default function SearchBar({
  placeholder = 'Search football news...',
  className,
  onSearch,
  compact = false,
}: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = useCallback(
    (value: string) => {
      if (value.trim()) {
        if (onSearch) {
          onSearch(value.trim())
        } else {
          router.push(`/search?q=${encodeURIComponent(value.trim())}`)
        }
      }
    },
    [onSearch, router]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query)
    }
    if (e.key === 'Escape') {
      setQuery('')
      inputRef.current?.blur()
    }
  }

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div
      className={cn(
        'relative flex items-center',
        compact ? 'w-48 focus-within:w-64' : 'w-full',
        'transition-all duration-300',
        className
      )}
    >
      <div
        className={cn(
          'relative flex items-center w-full rounded-xl border transition-all duration-200',
          isFocused
            ? 'border-brand bg-surface-3 shadow-lg shadow-brand/10'
            : 'border-border-muted bg-surface-2 hover:border-muted/50'
        )}
      >
        <Search
          className={cn(
            'absolute left-3 transition-colors duration-200',
            compact ? 'w-4 h-4' : 'w-4 h-4',
            isFocused ? 'text-brand' : 'text-muted'
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent py-2.5 pl-9 pr-10 text-sm text-white placeholder-muted',
            'focus:outline-none rounded-xl',
            compact ? 'text-xs py-2' : ''
          )}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-muted hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {!query && !compact && (
          <span className="absolute right-3 text-xs text-muted/60 font-mono hidden md:block">
            ⌘K
          </span>
        )}
      </div>
    </div>
  )
}
