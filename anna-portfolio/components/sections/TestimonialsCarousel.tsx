'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Testimonial } from '@/types/testimonial'
import StarRating from '@/components/ui/StarRating'
import Avatar from '@/components/ui/Avatar'
import FadeInView from '@/components/motion/FadeInView'

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <FadeInView className="text-center mb-12">
          <p className="label-badge text-accent mb-3">Student Stories</p>
          <h2 className="heading-1 font-serif text-white">What My Students Say</h2>
        </FadeInView>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden" onMouseEnter={() => {}} onFocus={() => {}}>
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

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-accent w-6' : 'bg-white/30'}`}
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
        </div>
      </div>
    </section>
  )
}
