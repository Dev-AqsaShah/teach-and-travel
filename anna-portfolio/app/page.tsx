import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import StatStrip from '@/components/sections/StatStrip'
import ServiceCardsSection from '@/components/sections/ServiceCard'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import BlogCard from '@/components/sections/BlogCard'
import NewsletterCTA from '@/components/sections/NewsletterCTA'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Button from '@/components/ui/Button'
import { testimonials } from '@/data/testimonials'
import { services } from '@/data/services'
import { galleryImages } from '@/data/gallery'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = genMeta({
  title: 'Home',
  description:
    'Private Russian & English lessons with Anna Volkova — a native speaker who has taught students across 40+ countries. Book your free consultation today.',
})

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)
  const previewPhotos = galleryImages.slice(0, 6)

  return (
    <>
      <HeroSection
        headline="Learn Languages. See the World."
        subheadline="Private Russian & English lessons with a native speaker who has taught students across 40+ countries."
        primaryCTA={{ label: 'Book Your First Lesson', href: '/book' }}
        secondaryCTA={{ label: 'Meet Anna', href: '/about' }}
        imageSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200"
        imageAlt="Anna Volkova — Language Teacher"
        variant="split"
      />

      <StatStrip />

      <ServiceCardsSection
        services={services.map((s) => ({
          id: s.id,
          title: s.title,
          shortDescription: s.shortDescription,
          href: s.href,
          icon: s.icon,
        }))}
      />

      {/* About Teaser */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInView direction="right">
              <div className="relative aspect-[4/5] max-w-md rounded-card overflow-hidden shadow-card-hover mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                  alt="Anna Volkova portrait"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover"
                />
              </div>
            </FadeInView>
            <FadeInView direction="left" delay={0.2}>
              <p className="label-badge text-accent mb-4">About Anna</p>
              <h2 className="heading-1 font-serif text-primary mb-6">A Teacher Who Has Lived What She Teaches</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                I&rsquo;m Anna Volkova, a Russian language teacher, certified English instructor, and passionate world traveler. Born in Saint Petersburg, I discovered my love for teaching when I began tutoring exchange students at university.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Over the past 8 years, I&rsquo;ve taught more than 200 students from 40+ countries — from busy professionals in New York to heritage speakers in Berlin.
              </p>
              <Button href="/about" variant="secondary">Read My Story →</Button>
            </FadeInView>
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={testimonials} />

      {/* Gallery Teaser */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom">
          <FadeInView className="flex items-end justify-between mb-10">
            <div>
              <p className="label-badge text-accent mb-3">Travel Gallery</p>
              <h2 className="heading-2 font-serif text-primary">Around the World</h2>
            </div>
            <Link href="/gallery" className="text-accent font-semibold text-sm hover:underline hidden sm:block">
              View Full Gallery →
            </Link>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {previewPhotos.map((photo) => (
              <StaggerItem key={photo.id}>
                <Link href="/gallery" className="group block relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-end">
                    <span className="px-3 py-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.location}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <div className="text-center mt-8 sm:hidden">
            <Button href="/gallery" variant="secondary">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {posts.length > 0 && (
        <section className="section-padding bg-bg">
          <div className="container-custom">
            <FadeInView className="flex items-end justify-between mb-10">
              <div>
                <p className="label-badge text-accent mb-3">Travel Journal</p>
                <h2 className="heading-2 font-serif text-primary">Latest from the Blog</h2>
              </div>
              <Link href="/blog" className="text-accent font-semibold text-sm hover:underline hidden sm:block">
                Read the Journal →
              </Link>
            </FadeInView>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      <NewsletterCTA />

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-2xl">
          <FadeInView>
            <h2 className="heading-1 font-serif text-white mb-4">Ready to Start Your Language Journey?</h2>
            <p className="text-white/70 text-lg mb-8">Book a free 15-minute consultation call. No commitment needed.</p>
            <Button href="/book" variant="primary" size="lg">Schedule Now</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
