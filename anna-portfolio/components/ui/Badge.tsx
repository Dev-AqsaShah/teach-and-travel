import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'navy' | 'outline'
  className?: string
}

const variantClasses = {
  default: 'bg-bg-subtle text-text-muted',
  gold: 'bg-accent text-primary',
  navy: 'bg-primary text-white',
  outline: 'border border-border text-text-muted',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'label-badge inline-flex items-center rounded-badge px-2.5 py-1',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
