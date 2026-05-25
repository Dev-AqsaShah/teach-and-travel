import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'

const stats = [
  { value: '13+', label: 'Years Teaching' },
  { value: '20+', label: 'Int\'l Conferences' },
  { value: '2', label: 'Languages Taught' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function StatStrip() {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container-custom">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="heading-2 font-serif text-accent">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1 font-sans">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
