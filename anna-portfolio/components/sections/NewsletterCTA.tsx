'use client'

import { useState } from 'react'
import FadeInView from '@/components/motion/FadeInView'
import Button from '@/components/ui/Button'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-padding bg-bg-subtle">
      <div className="container-custom">
        <FadeInView className="max-w-xl mx-auto text-center">
          <p className="label-badge text-accent mb-3">Free Resources</p>
          <h2 className="heading-2 font-serif text-primary mb-4">
            Get Language Tips in Your Inbox
          </h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Join 1,000+ students and get weekly Russian & English learning tips, travel stories, and free resources.
          </p>
          {submitted ? (
            <p className="text-accent font-semibold">Thank you! Check your inbox for a welcome gift.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-btn border border-border focus:outline-none focus:border-accent font-sans text-sm bg-white"
                aria-label="Email address"
              />
              <Button type="submit" variant="primary">Subscribe Free</Button>
            </form>
          )}
        </FadeInView>
      </div>
    </section>
  )
}
