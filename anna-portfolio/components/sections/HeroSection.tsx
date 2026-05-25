import Image from 'next/image'
import Button from '@/components/ui/Button'
import TextReveal from '@/components/motion/TextReveal'
import FadeInView from '@/components/motion/FadeInView'

interface HeroSectionProps {
  headline: string
  subheadline?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  imageSrc: string
  imageAlt: string
  variant?: 'split' | 'centered' | 'fullbleed'
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  variant = 'split',
}: HeroSectionProps) {
  if (variant === 'split') {
    return (
      <section className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-20 overflow-hidden bg-bg">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-0">
            <div className="order-2 lg:order-1">
              <FadeInView delay={0.1}>
                <p className="label-badge text-accent mb-4">Language Teacher & Traveler</p>
              </FadeInView>
              <h1 className="heading-display font-serif text-primary mb-6">
                <TextReveal text={headline} delay={0.2} />
              </h1>
              {subheadline && (
                <FadeInView delay={0.5}>
                  <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">{subheadline}</p>
                </FadeInView>
              )}
              <FadeInView delay={0.65}>
                <div className="flex flex-wrap gap-4">
                  {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="lg">{primaryCTA.label}</Button>}
                  {secondaryCTA && <Button href={secondaryCTA.href} variant="secondary" size="lg">{secondaryCTA.label}</Button>}
                </div>
              </FadeInView>
            </div>
            <div className="order-1 lg:order-2 relative">
              <FadeInView direction="left" delay={0.3}>
                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-card overflow-hidden shadow-card-hover">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-card shadow-card p-4 hidden lg:block">
                  <p className="font-serif text-2xl font-semibold text-primary">200+</p>
                  <p className="text-xs text-text-muted">Students Worldwide</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-accent rounded-card shadow-card p-4 hidden lg:block">
                  <p className="font-serif text-2xl font-semibold text-primary">40+</p>
                  <p className="text-xs text-primary/70">Countries</p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="relative container-custom py-20">
        <FadeInView>
          <h1 className="heading-display font-serif text-white mb-6">{headline}</h1>
        </FadeInView>
        {subheadline && (
          <FadeInView delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{subheadline}</p>
          </FadeInView>
        )}
        <FadeInView delay={0.4}>
          <div className="flex flex-wrap gap-4 justify-center">
            {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="lg">{primaryCTA.label}</Button>}
            {secondaryCTA && <Button href={secondaryCTA.href} variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-primary">{secondaryCTA.label}</Button>}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
