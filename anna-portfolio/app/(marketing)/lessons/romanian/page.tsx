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
  title: 'Romanian Language Lessons',
  description: 'Learn Romanian online with Anna Gladysheva — a specialist who lived in Bucharest for years and holds advanced Romanian with an academic research background.',
  path: '/lessons/romanian',
})

const curriculum = [
  { level: 'Beginner (A1–A2)', topics: 'Romanian alphabet, pronunciation, greetings, basic grammar, everyday phrases' },
  { level: 'Intermediate (B1–B2)', topics: 'Conversational fluency, complex grammar, Romanian culture and history' },
  { level: 'Advanced (C1)', topics: 'Nuanced expression, literature, formal writing, regional dialects' },
]

export default function RomanianLessonsPage() {
  const service = services.find((s) => s.id === 'romanian')!
  const romanianTestimonials = testimonials.filter((t) => t.lessonType === 'romanian')

  return (
    <>
      <HeroSection
        headline="Learn Romanian — A Rare Opportunity"
        subheadline="Find a qualified Romanian teacher online is hard. Anna lived in Bucharest, specialises in Romanian history, and teaches with cultural depth."
        primaryCTA={{ label: 'Book Your First Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200"
        imageAlt="Romanian language lessons"
        variant="fullbleed"
      />

      {/* Why Anna for Romanian */}
      <section className="section-padding bg-bg">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-10">
            <p className="label-badge text-accent mb-3">Why Anna for Romanian?</p>
            <h2 className="heading-2 font-serif text-primary">More Than a Language — A Living Culture</h2>
          </FadeInView>
          <FadeInView delay={0.1} className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Anna spent years living and working in Bucharest at the Russian Center of Culture and Science. She has conducted PhD-level research on Romanian-Soviet relations, presented at conferences across Romania, and published in Romanian academic journals.
            </p>
            <p>
              Her Romanian is not just textbook — it is the language she used daily in archives, libraries, cafes, and markets. She brings this living knowledge to every lesson.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom max-w-4xl">
          <FadeInView className="text-center mb-12">
            <p className="label-badge text-accent mb-3">Is This For You?</p>
            <h2 className="heading-2 font-serif text-primary">Who Takes Romanian Lessons with Anna</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { who: 'Heritage Speakers', desc: 'Reconnect with Romanian roots or family language.' },
              { who: 'Travelers', desc: 'Prepare for travel to Romania, Moldova, or the region.' },
              { who: 'Russian Speakers', desc: 'Romanian shares surprising similarities — progress is fast.' },
              { who: 'History & Culture Lovers', desc: 'Explore Romanian literature, cinema, and history.' },
              { who: 'Business Professionals', desc: 'Expand opportunities in Eastern European markets.' },
              { who: 'Absolute Beginners', desc: 'Start from zero with structured, patient guidance.' },
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
      <section className="section-padding bg-bg">
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
                    <span className="text-accent font-serif font-semibold text-sm">Ro</span>
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

      <TestimonialsCarousel testimonials={romanianTestimonials.length > 0 ? romanianTestimonials : testimonials.slice(0, 3)} />
      <PricingTable tiers={service.pricing} language="Romanian" />

      <section className="section-padding bg-primary text-center">
        <div className="container-custom max-w-xl">
          <FadeInView>
            <h2 className="heading-2 font-serif text-white mb-4">Start Speaking Romanian Today</h2>
            <p className="text-white/70 mb-8">Book a 30-minute trial lesson for just $25. No commitment required.</p>
            <Button href="/book" variant="primary" size="lg">Book Your Trial</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
