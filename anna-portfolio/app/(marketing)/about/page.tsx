import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import HeroSection from '@/components/sections/HeroSection'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Button from '@/components/ui/Button'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = genMeta({
  title: 'About Anna',
  description:
    'Meet Anna Volkova — a Russian language teacher and world traveler who has taught 200+ students across 40 countries over 8 years.',
  path: '/about',
})

const milestones = [
  { year: '2015', event: 'First student — a heritage speaker from Berlin wanting to reconnect with her roots.' },
  { year: '2017', event: 'Reached 50 students across 10 countries. Moved teaching fully online.' },
  { year: '2019', event: 'Launched English lessons for Russian professionals. Completed CELTA certification.' },
  { year: '2020', event: 'Global pivot to remote — grew from local to international in 12 months.' },
  { year: '2022', event: 'Passed 150 students milestone. Published first free learning resources.' },
  { year: '2024', event: '200+ students from 40+ countries. Teaching language, one conversation at a time.' },
]

const funFacts = [
  { label: 'Languages I Speak', value: 'Russian, English, French (B2), Spanish (A2)' },
  { label: 'Countries Visited', value: '40+ across 5 continents' },
  { label: 'Favorite Book', value: 'The Master and Margarita — Bulgakov' },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="Behind Every Lesson Is a Story"
        subheadline="I'm Anna — a teacher, a traveler, and a firm believer that language opens every door."
        primaryCTA={{ label: 'Book a Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200"
        imageAlt="Anna Volkova"
        variant="split"
      />

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="container-custom max-w-3xl">
          <FadeInView>
            <p className="label-badge text-accent mb-4">My Story</p>
            <h2 className="heading-2 font-serif text-primary mb-8">From Saint Petersburg to the World</h2>
          </FadeInView>
          <FadeInView delay={0.1} className="prose-anna space-y-5 text-text-muted">
            <p>
              I grew up in Saint Petersburg surrounded by languages. My mother was an English teacher, my grandfather spoke French, and the city itself felt like a living museum of culture. From a young age, I understood that language was more than communication — it was connection.
            </p>
            <blockquote className="font-serif text-xl italic border-l-4 border-accent pl-6 text-text my-8">
              &ldquo;Every language you learn is a new window through which you see the world.&rdquo;
            </blockquote>
            <p>
              I began tutoring exchange students at university, and what started as a side project became a calling. My teaching philosophy is simple: language learning should be joyful, personal, and grounded in real communication — not grammar drills.
            </p>
            <p>
              Over the past 8 years, I&rsquo;ve taught students from New York to Tokyo, from Berlin to Dubai. Each student has taught me something too — about patience, about culture, about the universal human desire to be understood.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-12">
            <p className="label-badge text-accent mb-3">Journey</p>
            <h2 className="heading-2 font-serif text-primary">Milestones</h2>
          </FadeInView>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 hidden sm:block" />
            <StaggerChildren className="space-y-8">
              {milestones.map((m) => (
                <StaggerItem key={m.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-accent font-serif font-semibold text-sm">{m.year.slice(2)}</span>
                  </div>
                  <div className="card-base p-5 flex-1">
                    <p className="label-badge text-accent mb-1">{m.year}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{m.event}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-bg">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-10">
            <p className="label-badge text-accent mb-3">Credentials</p>
            <h2 className="heading-2 font-serif text-primary">Qualifications</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['CELTA Certified English Teacher', 'BA Linguistics — SPbU', 'TORFL Examiner Certified'].map((c) => (
              <StaggerItem key={c}>
                <div className="card-base p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-serif text-xl">✓</span>
                  </div>
                  <p className="font-semibold text-primary text-sm">{c}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-10">
            <p className="label-badge text-accent mb-3">Getting to Know Me</p>
            <h2 className="heading-2 font-serif text-primary">A Few Fun Facts</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {funFacts.map((f) => (
              <StaggerItem key={f.label}>
                <div className="card-base p-6">
                  <p className="label-badge text-accent mb-2">{f.label}</p>
                  <p className="text-text font-semibold text-sm">{f.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <TestimonialsCarousel testimonials={testimonials.slice(0, 3)} />

      <section className="section-padding bg-bg text-center">
        <div className="container-custom max-w-xl">
          <FadeInView>
            <h2 className="heading-2 font-serif text-primary mb-4">Ready to Learn Together?</h2>
            <p className="text-text-muted mb-8">Book your first lesson and let&rsquo;s find your perfect starting point.</p>
            <Button href="/book" variant="primary" size="lg">Book a Lesson</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
