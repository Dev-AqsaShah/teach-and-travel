import { cn } from '@/lib/utils'
import Image from 'next/image'

interface AvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = { sm: 32, md: 48, lg: 64 }

export default function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const px = sizeMap[size]

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-bg-subtle flex items-center justify-center shrink-0',
        className
      )}
      style={{ width: px, height: px }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={`${px}px`} className="object-cover" />
      ) : (
        <span className="font-serif text-lg font-semibold text-text-muted">
          {alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  )
}
