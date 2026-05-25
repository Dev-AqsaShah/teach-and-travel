import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Thank You | Anna Volkova',
  description: 'Your message has been received.',
}

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg pt-20">
      <div className="container-custom max-w-lg text-center">
        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-accent" />
        </div>
        <h1 className="heading-1 font-serif text-primary mb-4">Message Received!</h1>
        <p className="text-text-muted leading-relaxed mb-8">
          Thank you for reaching out. I read every message personally and will respond within 24 hours. In the meantime, feel free to explore the site or book a lesson directly.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary">Book a Lesson</Button>
          <Button href="/" variant="secondary">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}
