'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { languageTips } from '@/data/languageTips'
import FadeInView from '@/components/motion/FadeInView'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setErrorMsg('')

    const tip = languageTips[Math.floor(Math.random() * languageTips.length)]

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: email,
          tip_language: tip.language,
          tip_emoji: tip.emoji,
          tip_title: tip.title,
          tip_body: tip.body,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setStatus('success')
    } catch {
      setErrorMsg('Could not send. Please try again.')
      setStatus('error')
    }
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
            Join 1,000+ students and get weekly Russian &amp; Romanian learning tips, travel stories, and free resources.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent/10 border border-accent/30 rounded-card px-6 py-5"
              >
                <p className="text-primary font-serif text-lg mb-1">Check your inbox!</p>
                <p className="text-text-muted text-sm">
                  A language tip is on its way to{' '}
                  <span className="font-semibold text-primary">{email}</span>.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex gap-3 flex-col sm:flex-row"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setStatus('idle')
                    setErrorMsg('')
                  }}
                  placeholder="Your email address"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 px-4 py-3 rounded-btn border border-border focus:outline-none focus:border-accent font-sans text-sm bg-white disabled:opacity-60 transition-colors"
                  aria-label="Email address"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-btn text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {status === 'loading' ? 'Sending…' : 'Subscribe Free'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {errorMsg && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-3"
            >
              {errorMsg}
            </motion.p>
          )}
        </FadeInView>
      </div>
    </section>
  )
}
