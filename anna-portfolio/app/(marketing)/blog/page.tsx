import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import BlogCard from '@/components/sections/BlogCard'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import { getAllPosts } from '@/lib/blog'
import { BlogPost } from '@/types/blog'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { Clock } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = genMeta({
  title: 'Blog & Travel Journal',
  description: 'Language learning tips, travel stories, and teaching insights from Anna Volkova.',
  path: '/blog',
})

const categoryLabels: Record<BlogPost['category'], string> = {
  'language-learning': 'Language Learning',
  travel: 'Travel',
  culture: 'Culture',
  'teaching-tips': 'Teaching Tips',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.find((p) => p.featured) || posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <section className="section-padding pt-28 bg-bg">
      <div className="container-custom">
        <FadeInView className="text-center mb-14">
          <p className="label-badge text-accent mb-3">Journal</p>
          <h1 className="heading-1 font-serif text-primary">Words from the Road</h1>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">Language learning tips, travel stories, and musings from 40+ countries.</p>
        </FadeInView>

        {featured && (
          <FadeInView className="mb-16">
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 card-base card-hover overflow-hidden">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-bg-subtle">
                <Image src={featured.coverImage} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="gold">Featured</Badge>
                  <Badge>{categoryLabels[featured.category]}</Badge>
                  <span className="flex items-center gap-1 text-xs text-text-muted"><Clock size={12} /> {featured.readingTime} min</span>
                </div>
                <h2 className="heading-2 font-serif text-primary mb-3 group-hover:text-accent transition-colors">{featured.title}</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <p className="text-xs text-text-muted">{formatDate(featured.publishedAt)}</p>
              </div>
            </Link>
          </FadeInView>
        )}

        {rest.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        ) : (
          <FadeInView className="text-center py-16">
            <p className="text-text-muted">More posts coming soon. Check back soon!</p>
          </FadeInView>
        )}
      </div>
    </section>
  )
}
