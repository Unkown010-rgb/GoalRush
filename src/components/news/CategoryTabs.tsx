'use client'

import { getCategoryColor } from '@/lib/utils'

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Premier League', value: 'Premier League' },
  { name: 'La Liga', value: 'La Liga' },
  { name: 'Champions League', value: 'Champions League' },
  { name: 'World Cup', value: 'World Cup' },
  { name: 'Transfers', value: 'Transfers' },
  { name: 'Controversies', value: 'Controversies' },
  { name: 'History', value: 'History' },
]

interface CategoryTabsProps {
  activeCategory?: string
  onCategoryChange?: (category: string) => void
  active?: string
  onChange?: (category: string) => void
}

export default function CategoryTabs({ activeCategory, onCategoryChange, active, onChange }: CategoryTabsProps) {
  const currentActive = active || activeCategory || 'all'
  const handleChange = onChange || onCategoryChange || (() => {})
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {categories.map(({ name, value }) => {
        const isActive = currentActive === value || (value === 'all' && currentActive === 'All')
        const color = value === 'all' ? '#00d084' : getCategoryColor(value)

        return (
          <button
            key={value}
            onClick={() => handleChange(value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
              isActive
                ? 'bg-brand text-white shadow-lg shadow-brand/20'
                : 'bg-surface-3 text-muted hover:bg-surface-4 hover:text-white border border-border-muted'
            }`}
          >
            {value !== 'all' && !isActive && (
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
              />
            )}
            {name}
          </button>
        )
      })}
    </div>
  )
}
