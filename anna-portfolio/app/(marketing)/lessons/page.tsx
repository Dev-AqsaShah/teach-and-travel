import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import HeroSection from '@/components/sections/HeroSection'
import ServiceCardsSection from '@/components/sections/ServiceCard'
import PricingTable from '@/components/sections/PricingTable'
import FAQAccordion from '@/components/sections/FAQAccordion'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Button from '@/components/ui/Button'
import { services, faqItems } from '@/data/services'
import { ShieldCheck, Clock, RefreshCw } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Lessons & Services',
  description: 'Private Russian and Romanian lessons with Anna Gladysheva — academic researcher and experienced language teacher. All levels welcome.',
  path: '/lessons',
})

const guarantees = [
  { icon: <ShieldCheck size={24} />, label: 'Native Russian Speaker' },
  { icon: <Clock size={24} />, label: 'Flexible Schedule' },
  { icon: <RefreshCw size={24} />, label: 'Money-Back on Trial' },
]

export default function LessonsPage() {
  const russianService = services.find((s) => s.id === 'russian')!

  return (
    <>
      <HeroSection
        headline="Language Learning with Academic Depth"
        subheadline="Russian and Romanian lessons designed around your goals — backed by 13+ years of teaching and academic research experience."
        primaryCTA={{ label: 'Book a Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
        imageAlt="Language lesson online"
        variant="fullbleed"
      />

      <ServiceCardsSection
        services={services.map((s) => ({
          id: s.id,
          title: s.title,
          shortDescription: s.shortDescription,
          href: s.href,
          icon: s.icon,
        }))}
      />

      {/* Guarantees */}
      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <StaggerChildren className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-20">
            {guarantees.map((g) => (
              <StaggerItem key={g.label} className="flex items-center gap-3 text-white">
                <span className="text-accent">{g.icon}</span>
                <span className="font-semibold">{g.label}</span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <PricingTable tiers={russianService.pricing} language="Russian" />

      <FAQAccordion items={faqItems} />

      <section className="section-padding bg-primary text-center">
        <div className="container-custom max-w-xl">
          <FadeInView>
            <h2 className="heading-2 font-serif text-white mb-4">Start with a Risk-Free Trial</h2>
            <p className="text-white/70 mb-8">30-minute trial lesson for just $25. Full refund if you&rsquo;re not satisfied.</p>
            <Button href="/book" variant="primary" size="lg">Book Your Trial — $25</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
