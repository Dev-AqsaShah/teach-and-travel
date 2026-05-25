import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses = {
  primary: 'bg-accent text-primary font-semibold hover:bg-accent-light active:scale-[0.98] shadow-sm',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]',
  ghost: 'border border-border text-text hover:border-accent hover:text-accent active:scale-[0.98]',
  link: 'text-accent underline-offset-4 hover:underline p-0 h-auto',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  loading,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-btn font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    variant !== 'link' && sizeClasses[size],
    className
  )

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {loading ? <span className="animate-pulse">Loading…</span> : children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>
      {content}
    </button>
  )
}
