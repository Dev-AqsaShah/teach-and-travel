import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import ContactForm from '@/components/sections/ContactForm'
import FadeInView from '@/components/motion/FadeInView'
import { Mail, Clock, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Contact',
  description: 'Get in touch with Anna Volkova. Questions about lessons, pricing, or anything else — I respond within 24 hours.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="section-padding pt-28 bg-bg">
      <div className="container-custom">
        <FadeInView className="text-center mb-14">
          <p className="label-badge text-accent mb-3">Get in Touch</p>
          <h1 className="heading-1 font-serif text-primary mb-4">Let&rsquo;s Talk</h1>
          <p className="text-text-muted max-w-lg mx-auto">
            Have a question about lessons, pricing, or just want to say hello? I&rsquo;d love to hear from you.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <FadeInView delay={0.2} className="lg:col-span-2 space-y-6">
            <div className="card-base p-6 space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-sm">Email</p>
                  <a href="mailto:anna@annavolkova.com" className="text-text-muted text-sm hover:text-accent transition-colors">
                    anna@annavolkova.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-sm">Location</p>
                  <p className="text-text-muted text-sm">Moscow, Russia (UTC+3)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary text-sm">Response Time</p>
                  <p className="text-text-muted text-sm">Within 24 hours, Mon–Sat</p>
                </div>
              </div>
            </div>

            <div className="card-base p-6">
              <p className="font-semibold text-primary mb-4 text-sm">Follow Along</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://instagram.com', label: 'Instagram' },
                  { href: 'https://linkedin.com', label: 'LinkedIn' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors">
                    <ExternalLink size={14} /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
