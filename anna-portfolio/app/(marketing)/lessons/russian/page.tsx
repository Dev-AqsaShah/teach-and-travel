import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import HeroSection from '@/components/sections/HeroSection'
import PricingTable from '@/components/sections/PricingTable'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = genMeta({
  title: 'Russian Language Lessons',
  description: 'Learn Russian online with Anna Volkova — a native speaker with 8+ years of experience teaching students from 40+ countries.',
  path: '/lessons/russian',
})

const curriculum = [
  { level: 'Beginner (A1–A2)', topics: 'Alphabet, pronunciation, greetings, basic grammar, survival phrases' },
  { level: 'Intermediate (B1–B2)', topics: 'Conversational fluency, complex grammar, reading and listening' },
  { level: 'Advanced (C1)', topics: 'Nuanced expression, idioms, business Russian, exam prep (TORFL)' },
]

export default function RussianLessonsPage() {
  const service = services.find((s) => s.id === 'russian')!
  const russianTestimonials = testimonials.filter((t) => t.lessonType === 'russian')

  return (
    <>
      <HeroSection
        headline="Learn Russian with a Native Speaker"
        subheadline="Personalized 1-on-1 Russian lessons designed for your goals — from absolute beginner to conversational fluency."
        primaryCTA={{ label: 'Book Your First Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
        imageAlt="Russian language lessons"
        variant="fullbleed"
      />

      {/* Who it's for */}
      <section className="section-padding bg-bg">
        <div className="container-custom max-w-4xl">
          <FadeInView className="text-center mb-12">
            <p className="label-badge text-accent mb-3">Is This For You?</p>
            <h2 className="heading-2 font-serif text-primary">Who Takes Russian Lessons with Anna</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { who: 'Heritage Speakers', desc: 'Reconnect with your family language and culture.' },
              { who: 'Travelers', desc: 'Prepare for a trip to Russia, Ukraine, or Eastern Europe.' },
              { who: 'Professionals', desc: 'Expand career opportunities with Russian language skills.' },
              { who: 'Exam Students', desc: 'TORFL, CEFR exam preparation with targeted practice.' },
              { who: 'Language Enthusiasts', desc: 'Learn for the love of Slavic languages and literature.' },
              { who: 'Beginners', desc: 'Start from zero with patient, structured guidance.' },
            ].map((item) => (
              <StaggerItem key={item.who}>
                <div className="card-base card-hover p-6">
                  <h3 className="font-semibold text-primary mb-2">{item.who}</h3>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-10">
            <p className="label-badge text-accent mb-3">Curriculum</p>
            <h2 className="heading-2 font-serif text-primary">What You&rsquo;ll Learn</h2>
          </FadeInView>
          <StaggerChildren className="space-y-4">
            {curriculum.map((item) => (
              <StaggerItem key={item.level}>
                <div className="card-base p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-serif font-semibold text-sm">Aa</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.level}</h3>
                    <p className="text-text-muted text-sm">{item.topics}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <TestimonialsCarousel testimonials={russianTestimonials} />
      <PricingTable tiers={service.pricing} language="Russian" />

      <section className="section-padding bg-primary text-center">
        <div className="container-custom max-w-xl">
          <FadeInView>
            <h2 className="heading-2 font-serif text-white mb-4">Start Speaking Russian Today</h2>
            <p className="text-white/70 mb-8">Book a 30-minute trial lesson for just $25. No commitment required.</p>
            <Button href="/book" variant="primary" size="lg">Book Your Trial</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
