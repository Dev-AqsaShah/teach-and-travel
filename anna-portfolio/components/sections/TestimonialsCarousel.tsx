'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, PenLine, X, Star } from 'lucide-react'
import { Testimonial } from '@/types/testimonial'
import StarRating from '@/components/ui/StarRating'
import Avatar from '@/components/ui/Avatar'
import FadeInView from '@/components/motion/FadeInView'

const STORAGE_KEY = 'anna_student_reviews'

function StarSelector({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
          aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
        >
          <Star
            size={26}
            className={
              n <= (hovered || value)
                ? 'text-accent fill-accent'
                : 'text-white/30'
            }
          />
        </button>
      ))}
    </div>
  )
}

type FormState = { name: string; country: string; rating: number; quote: string }
type FormErrors = Partial<Record<keyof FormState, string>>

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [all, setAll] = useState<Testimonial[]>(testimonials)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', country: '', rating: 5, quote: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Testimonial[]
      if (saved.length > 0) setAll([...testimonials, ...saved])
    } catch {}
  }, [testimonials])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % all.length)
  }, [all.length])

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + all.length) % all.length)
  }

  useEffect(() => {
    if (showForm) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, showForm])

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (form.quote.trim().length < 20) e.quote = 'Please write at least 20 characters'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const newReview: Testimonial = {
      id: `user-${Date.now()}`,
      name: form.name.trim(),
      country: form.country.trim() || 'Student',
      countryFlag: '⭐',
      rating: Math.min(5, Math.max(1, form.rating)) as Testimonial['rating'],
      quote: form.quote.trim(),
      lessonType: 'russian',
    }

    const updated = [...all, newReview]
    setAll(updated)

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as Testimonial[]
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newReview]))
    } catch {}

    setDirection(1)
    setCurrent(updated.length - 1)
    setShowForm(false)
    setSubmitted(true)
    setForm({ name: '', country: '', rating: 5, quote: '' })
    setErrors({})
    setTimeout(() => setSubmitted(false), 4000)
  }

  const t = all[current]

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <FadeInView className="text-center mb-12">
          <p className="label-badge text-accent mb-3">Student Stories</p>
          <h2 className="heading-1 font-serif text-white">What My Students Say</h2>
        </FadeInView>

        <div className="max-w-3xl mx-auto">
          {/* Empty state */}
          {all.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-card p-10 text-center"
            >
              <p className="font-serif text-white/60 text-lg italic mb-2">No reviews yet.</p>
              <p className="text-white/40 text-sm">Be the first to share your experience!</p>
            </motion.div>
          ) : (
            <>
              {/* Carousel */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 60 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-white/5 border border-white/10 rounded-card p-8 lg:p-10 text-center"
                  >
                    <StarRating rating={t.rating} className="justify-center mb-5" />
                    <blockquote className="font-serif text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                      <Avatar alt={t.name} src={t.avatarUrl} size="md" />
                      <div className="text-left">
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-white/50">{t.countryFlag} {t.country}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / dots / Next */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {all.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-6' : 'bg-white/30 w-2'}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-2 rounded-full border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}

          {/* Success message */}
          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-center text-accent font-semibold mt-6 text-sm"
              >
                Thank you! Your review has been added.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Write a Review toggle */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowForm((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn border border-white/20 text-white/70 hover:border-accent hover:text-accent transition-colors text-sm font-medium"
            >
              {showForm ? <X size={15} /> : <PenLine size={15} />}
              {showForm ? 'Cancel' : 'Write a Review'}
            </button>
          </div>

          {/* Animated Review Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <form onSubmit={handleSubmit} noValidate>
                  <div className="bg-white/5 border border-white/10 rounded-card p-6 lg:p-8 mt-6 space-y-5">
                    <h3 className="font-serif text-white text-lg text-center">Share Your Experience</h3>

                    {/* Star rating */}
                    <div>
                      <p className="text-white/50 text-xs mb-2">Your Rating</p>
                      <StarSelector
                        value={form.rating}
                        onChange={(n) => setForm({ ...form, rating: n })}
                      />
                    </div>

                    {/* Name + Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/50 text-xs block mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }) }}
                          placeholder="e.g. Maria S."
                          className="w-full bg-white/10 border border-white/20 rounded-btn px-4 py-2.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-white/50 text-xs block mb-1.5">Country (optional)</label>
                        <input
                          type="text"
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          placeholder="e.g. Germany"
                          className="w-full bg-white/10 border border-white/20 rounded-btn px-4 py-2.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="text-white/50 text-xs block mb-1.5">Your Review *</label>
                      <textarea
                        rows={4}
                        value={form.quote}
                        onChange={(e) => { setForm({ ...form, quote: e.target.value }); setErrors({ ...errors, quote: undefined }) }}
                        placeholder="Tell others about your experience with Anna..."
                        className="w-full bg-white/10 border border-white/20 rounded-btn px-4 py-2.5 text-white placeholder-white/25 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                      {errors.quote && <p className="text-red-400 text-xs mt-1">{errors.quote}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-accent text-primary font-semibold rounded-btn hover:bg-accent/90 transition-colors text-sm"
                    >
                      Submit Review
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
