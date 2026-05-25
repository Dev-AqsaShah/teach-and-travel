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
    'Meet Anna Gladysheva — academic historian, language researcher, and private Russian & Romanian teacher with 13+ years of teaching experience.',
  path: '/about',
})

const milestones = [
  { year: '2011', event: 'Began private history tutoring while completing a Specialist Degree in History at GAUG, Moscow.' },
  { year: '2012', event: 'Joined the Institute of Slavic Studies at the Russian Academy of Sciences as a Junior Researcher.' },
  { year: '2014', event: 'Began lecturing at RSUH Moscow. First international conference presentations in Russia and Eastern Europe.' },
  { year: '2016', event: 'Moved to Bucharest to work at the Russian Center of Culture and Science. Deepened Romanian language to advanced level.' },
  { year: '2017', event: 'Launched private Russian & Romanian teaching. Published multiple academic papers and book chapters.' },
  { year: '2020', event: 'Moved fully online. Students from USA, UK, Germany, Romania and beyond.' },
  { year: '2024', event: '20+ international conferences, 30+ publications, and 13 years of teaching experience.' },
]

const funFacts = [
  { label: 'Languages', value: 'Russian (native) · Romanian (advanced) · English (good)' },
  { label: 'Academic Specialty', value: 'Romanian-Soviet Relations (1944–1968)' },
  { label: 'Favourite Archive', value: 'RGANI — Russian State Archive of Contemporary History' },
]

const credentials = [
  'Specialist Degree in History — GAUG Moscow (2007–2012)',
  'PhD Research — University of Bucharest, Faculty of History (2016–2019)',
  'PhD Research — Institute of Slavic Studies, Russian Academy of Sciences (2015–2018)',
  'Junior Researcher — Institute of Slavic Studies, RAS (2012–2018)',
  '20+ International Academic Conferences',
  '30+ Peer-reviewed Publications',
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="Scholar, Teacher, Language Bridge"
        subheadline="I believe language is never just vocabulary — it is history, identity, and human connection."
        primaryCTA={{ label: 'Book a Lesson', href: '/book' }}
        imageSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200"
        imageAlt="Anna Gladysheva"
        variant="split"
      />

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="container-custom max-w-3xl">
          <FadeInView>
            <p className="label-badge text-accent mb-4">My Story</p>
            <h2 className="heading-2 font-serif text-primary mb-8">From Vladimir to Bucharest — and Back Again</h2>
          </FadeInView>
          <FadeInView delay={0.1} className="space-y-5 text-text-muted leading-relaxed">
            <p>
              I grew up in Vladimir, Russia — an ancient city with golden-domed churches and a deep sense of history. From an early age I was drawn to the stories between countries, the diplomatic silences, the cultural bridges that language makes possible.
            </p>
            <blockquote className="font-serif text-xl italic border-l-4 border-accent pl-6 text-text my-8">
              &ldquo;Every language you learn is not just a new way of speaking — it is a new way of seeing the world.&rdquo;
            </blockquote>
            <p>
              I studied History at the State Academic University for the Humanities in Moscow, then spent six years as a Junior Researcher at the Institute of Slavic Studies of the Russian Academy of Sciences. My specialty was Romanian-Soviet relations — which brought me to Bucharest in 2016, where I worked at the Russian Center of Culture and Science and immersed myself fully in Romanian language and culture.
            </p>
            <p>
              That time in Romania transformed me. Romanian became not just a language I studied academically, but one I lived. I shopped, argued, laughed, and debated in Romanian. Today it is genuinely the second language of my heart.
            </p>
            <p>
              I have been teaching languages privately since 2011 — first as a history tutor, then expanding to Russian and Romanian language lessons for international students. I have presented at 20+ international conferences across Russia, Romania, Bulgaria, France, and Germany, and published over 30 academic papers.
            </p>
            <p>
              My academic background gives my teaching a distinctive quality: I do not just teach grammar rules, I explain the history behind the words, the culture inside the phrases, the stories that make a language come alive.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-bg-subtle">
        <div className="container-custom max-w-3xl">
          <FadeInView className="mb-12">
            <p className="label-badge text-accent mb-3">Journey</p>
            <h2 className="heading-2 font-serif text-primary">Career Milestones</h2>
          </FadeInView>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 hidden sm:block" />
            <StaggerChildren className="space-y-8">
              {milestones.map((m) => (
                <StaggerItem key={m.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-accent font-serif font-semibold text-xs">{m.year.slice(2)}</span>
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
            <p className="label-badge text-accent mb-3">Qualifications</p>
            <h2 className="heading-2 font-serif text-primary">Academic & Teaching Credentials</h2>
          </FadeInView>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((c) => (
              <StaggerItem key={c}>
                <div className="card-base p-5 flex items-start gap-3">
                  <span className="text-accent font-serif text-xl mt-0.5 shrink-0">✓</span>
                  <p className="text-text text-sm leading-relaxed">{c}</p>
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
            <h2 className="heading-2 font-serif text-primary">A Few Facts</h2>
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
            <p className="text-text-muted mb-8">Book your first lesson and let&rsquo;s find the approach that works for you.</p>
            <Button href="/book" variant="primary" size="lg">Book a Lesson</Button>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
