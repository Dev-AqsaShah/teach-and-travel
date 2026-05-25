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
      <section className="relative flex items-center pt-16 pb-8 overflow-hidden bg-bg">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-6 lg:py-8">
            <div className="order-2 lg:order-1">
              <FadeInView delay={0.1}>
                <p className="label-badge text-accent mb-3">Language Teacher & Traveler</p>
              </FadeInView>
              <h1 className="font-serif text-[2rem] lg:text-[2.8rem] leading-tight font-semibold text-primary mb-4">
                <TextReveal text={headline} delay={0.2} />
              </h1>
              {subheadline && (
                <FadeInView delay={0.5}>
                  <p className="text-base text-text-muted leading-relaxed mb-6 max-w-md">{subheadline}</p>
                </FadeInView>
              )}
              <FadeInView delay={0.65}>
                <div className="flex flex-wrap gap-3">
                  {primaryCTA && <Button href={primaryCTA.href} variant="primary" size="md">{primaryCTA.label}</Button>}
                  {secondaryCTA && <Button href={secondaryCTA.href} variant="secondary" size="md">{secondaryCTA.label}</Button>}
                </div>
              </FadeInView>
            </div>
            <div className="order-1 lg:order-2 relative">
              <FadeInView direction="left" delay={0.3}>
                <div className="relative aspect-[4/3] lg:aspect-[3/3] max-h-[320px] lg:max-h-[360px] rounded-card overflow-hidden shadow-card-hover">
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
                <div className="absolute -bottom-3 -left-3 bg-white rounded-card shadow-card p-3 hidden lg:block">
                  <p className="font-serif text-xl font-semibold text-primary">200+</p>
                  <p className="text-xs text-text-muted">Students Worldwide</p>
                </div>
                <div className="absolute -top-3 -right-3 bg-accent rounded-card shadow-card p-3 hidden lg:block">
                  <p className="font-serif text-xl font-semibold text-primary">40+</p>
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
