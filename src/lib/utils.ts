import { clsx, type ClassValue } from 'clsx'
import { formatDistanceToNow, format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateString: string): string {
  try {
    return format(new Date(dateString), 'MMM d, yyyy')
  } catch {
    return dateString
  }
}

export function formatRelativeTime(dateString: string): string {
  try {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true })
  } catch {
    return dateString
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Premier League': '#3b82f6',
    'La Liga': '#ef4444',
    'Champions League': '#f59e0b',
    'World Cup': '#8b5cf6',
    'Transfers': '#00d084',
    'Controversies': '#ff3b30',
    'History': '#6b7280',
    'Serie A': '#10b981',
    'Bundesliga': '#f97316',
    'General': '#8892a4',
  }
  return colors[category] || '#8892a4'
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Premier League': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'La Liga': '🇪🇸',
    'Champions League': '⭐',
    'World Cup': '🌍',
    'Transfers': '🔄',
    'Controversies': '🔥',
    'History': '📖',
    'Serie A': '🇮🇹',
    'Bundesliga': '🇩🇪',
    'General': '⚽',
  }
  return icons[category] || '⚽'
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    'live': '#ff3b30',
    'finished': '#8892a4',
    'upcoming': '#00d084',
    'rumour': '#f5c518',
    'confirmed': '#00d084',
    'completed': '#3b82f6',
    'failed': '#ff3b30',
  }
  return colors[status] || '#8892a4'
}
