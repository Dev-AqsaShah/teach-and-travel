import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export default function Tag({ children, active, onClick, className }: TagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'label-badge inline-flex items-center rounded-full px-4 py-1.5 transition-all duration-200',
        active
          ? 'bg-primary text-white'
          : 'bg-bg-subtle text-text-muted hover:bg-border hover:text-text',
        onClick ? 'cursor-pointer' : 'cursor-default',
        className
      )}
    >
      {children}
    </button>
  )
}
