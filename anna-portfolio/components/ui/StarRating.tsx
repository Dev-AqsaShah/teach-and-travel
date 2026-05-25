import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  max?: number
  className?: string
}

export default function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-accent text-accent' : 'fill-none text-border'}
        />
      ))}
    </div>
  )
}
