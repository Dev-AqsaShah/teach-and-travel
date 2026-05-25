import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import { PricingTier } from '@/data/services'
import { cn } from '@/lib/utils'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'

export default function PricingTable({ tiers }: { tiers: PricingTier[]; language: string }) {
  return (
    <section className="section-padding bg-bg-subtle" id="pricing">
      <div className="container-custom">
        <FadeInView className="text-center mb-12">
          <p className="label-badge text-accent mb-3">Pricing</p>
          <h2 className="heading-1 font-serif text-primary">Simple, Transparent Pricing</h2>
          <p className="text-text-muted mt-3">All prices in USD · Equivalent in EUR/GBP available on request</p>
        </FadeInView>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div className={cn(
                'card-base p-8 flex flex-col h-full',
                tier.highlighted && 'border-accent shadow-card-hover ring-1 ring-accent relative'
              )}>
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 label-badge bg-accent text-primary px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-semibold text-primary">{tier.name}</h3>
                  <p className="text-text-muted text-sm mt-1">{tier.description}</p>
                  <div className="mt-4">
                    <span className="font-serif text-4xl font-semibold text-primary">{tier.price}</span>
                    <span className="text-text-muted text-sm ml-1">/{tier.duration}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-text">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/book"
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
