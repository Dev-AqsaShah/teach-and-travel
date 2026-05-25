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
  title: 'English Language Lessons',
  description: 'Professional English lessons with Anna Volkova — CELTA certified instructor for business, general, and exam English.',
  path: '/lessons/english',
})

export default function EnglishLessonsPage() {
  const service = services.find((s) => s.id === 'english')!
  const englishTestimonials = testimonials.filter((t) => t.lessonType === 'english')

  return (
    <>
      <HeroSection
        headline="Professional English, Taught with Precision"
        subheadline="Business English, conversational fluency, IELTS preparation — tailored entirely to your goals."
        primaryCTA={{ label: 'Book Your First Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200"
        imageAlt="English language lessons"
        variant="fullbleed"
      />

      <section className="section-padding bg-bg">
        <div className="container-custom max-w-4xl">
          <FadeInView className="text-center mb-12">
            <p className="label-badge text-accent mb-3">Is This For You?</p>
            <h2 className="heading-2 font-serif text-primary">English Lessons Designed Around Your Life</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { who: 'Business Professionals', desc: 'Presentations, emails, negotiations — in perfect English.' },
              { who: 'IELTS/CEFR Students', desc: 'Targeted exam preparation with mock tests.' },
              { who: 'Conversational Learners', desc: 'Build natural, confident everyday communication.' },
              { who: 'Academic Writers', desc: 'Essays, reports, and academic English.' },
              { who: 'Expats & Immigrants', desc: 'Navigate life abroad with confidence.' },
              { who: 'All Levels', desc: 'From pre-intermediate (B1) to advanced (C2).' },
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

      <TestimonialsCarousel testimonials={englishTestimonials.length > 0 ? englishTestimonials : testimonials.slice(0, 3)} />
      <PricingTable tiers={service.pricing} language="English" />

      <section className="section-padding bg-primary text-center">
        <div className="container-custom max-w-xl">
          <FadeInView>
            <h2 className="heading-2 font-serif text-white mb-4">Your English Journey Starts Here</h2>
            <p className="text-white/70 mb-8">Book a trial lesson for $25 and see the difference a great teacher makes.</p>
            <Button href="/book" variant="primary" size="lg">Book Your Trial</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
