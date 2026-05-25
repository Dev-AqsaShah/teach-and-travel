import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

const categoryLabels: Record<BlogPost['category'], string> = {
  'language-learning': 'Language Learning',
  travel: 'Travel',
  culture: 'Culture',
  'teaching-tips': 'Teaching Tips',
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group card-base card-hover flex flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-bg-subtle">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="default">{categoryLabels[post.category]}</Badge>
          <span className="flex items-center gap-1 text-xs text-text-muted">
            <Clock size={12} /> {post.readingTime} min read
          </span>
        </div>
        <h3 className="font-serif text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed flex-1">{post.excerpt}</p>
        <p className="text-xs text-text-muted mt-4">{formatDate(post.publishedAt)}</p>
      </div>
    </Link>
  )
}
