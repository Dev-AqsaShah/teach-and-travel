import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import FadeInView from '@/components/motion/FadeInView'

export const metadata: Metadata = genMeta({
  title: 'Book a Lesson',
  description: 'Schedule your first Russian or English lesson with Anna Volkova. Free 15-minute consultation available.',
  path: '/book',
})

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/anna-volkova'

  return (
    <section className="min-h-screen pt-24 pb-16 bg-bg">
      <div className="container-custom max-w-3xl">
        <FadeInView className="text-center mb-10">
          <p className="label-badge text-accent mb-3">Schedule a Session</p>
          <h1 className="heading-1 font-serif text-primary mb-4">Let&rsquo;s Find Your Perfect Time</h1>
          <p className="text-text-muted leading-relaxed max-w-lg mx-auto">
            Choose a time that works for you. All lessons are conducted via Zoom — no software to install.
          </p>
        </FadeInView>

        <FadeInView delay={0.2} className="card-base overflow-hidden">
          <iframe
            src={`${calendlyUrl}?hide_gdpr_banner=1`}
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a lesson with Anna Volkova"
            className="block"
          />
        </FadeInView>

        <FadeInView delay={0.3} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: '🔒', text: 'Secure Booking via Calendly' },
            { icon: '❌', text: 'Cancel Anytime — No Commitment' },
            { icon: '💬', text: 'Free 15-Min Consultation Available' },
          ].map((item) => (
            <div key={item.text} className="card-base p-4">
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p className="text-xs text-text-muted font-medium">{item.text}</p>
            </div>
          ))}
        </FadeInView>
      </div>
    </section>
  )
}
