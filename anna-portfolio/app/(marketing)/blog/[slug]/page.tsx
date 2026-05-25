import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { generateMetadata as genMeta } from '@/lib/seo'
import Badge from '@/components/ui/Badge'
import FadeInView from '@/components/motion/FadeInView'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar } from 'lucide-react'
import { BlogPost } from '@/types/blog'

const categoryLabels: Record<BlogPost['category'], string> = {
  'language-learning': 'Language Learning',
  travel: 'Travel',
  culture: 'Culture',
  'teaching-tips': 'Teaching Tips',
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return genMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage,
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="pt-24 pb-16 bg-bg">
      <div className="container-custom max-w-3xl">
        <FadeInView className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge>{categoryLabels[post.category]}</Badge>
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <Clock size={12} /> {post.readingTime} min read
            </span>
            <span className="flex items-center gap-1 text-xs text-text-muted">
              <Calendar size={12} /> {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 className="heading-1 font-serif text-primary mb-4">{post.title}</h1>
          <p className="text-text-muted text-lg leading-relaxed">{post.excerpt}</p>
        </FadeInView>

        <FadeInView delay={0.1} className="relative aspect-video rounded-card overflow-hidden shadow-card-hover mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </FadeInView>

        <FadeInView delay={0.2} className="prose-anna">
          <MDXRemote source={post.content || ''} />
        </FadeInView>

        <FadeInView delay={0.3} className="mt-12 pt-8 border-t border-border flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-bg-subtle flex items-center justify-center shrink-0">
            <span className="font-serif text-xl font-semibold text-primary">A</span>
          </div>
          <div>
            <p className="font-semibold text-primary">Anna Volkova</p>
            <p className="text-text-muted text-sm">Language Teacher & Traveler</p>
          </div>
        </FadeInView>
      </div>
    </article>
  )
}
