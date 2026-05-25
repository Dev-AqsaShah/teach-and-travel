import Link from 'next/link'
import { BookOpen, Globe, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={28} />,
  Globe: <Globe size={28} />,
}

interface ServiceCardProps {
  id: string
  title: string
  shortDescription: string
  href: string
  icon: string
}

function Card({ title, shortDescription, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group card-base card-hover p-8 flex flex-col gap-5 block">
      <div className="w-14 h-14 rounded-card bg-bg-subtle flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-250">
        {iconMap[icon] || <BookOpen size={28} />}
      </div>
      <div>
        <h3 className="heading-3 text-primary mb-2">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{shortDescription}</p>
      </div>
      <span className="flex items-center gap-2 text-accent font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200">
        Learn More <ArrowRight size={16} />
      </span>
    </Link>
  )
}

export default function ServiceCardsSection({ services }: { services: ServiceCardProps[] }) {
  return (
    <section className="section-padding bg-bg-subtle">
      <div className="container-custom">
        <FadeInView className="text-center mb-12">
          <p className="label-badge text-accent mb-3">What I Teach</p>
          <h2 className="heading-1 font-serif text-primary">Languages I Offer</h2>
        </FadeInView>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <Card {...s} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
