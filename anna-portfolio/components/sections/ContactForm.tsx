'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import FadeInView from '@/components/motion/FadeInView'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  country: z.string().min(2, 'Please enter your country'),
  learningGoal: z.enum(['russian', 'english', 'both', 'other'] as const),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again or email anna@annavolkova.com directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-btn border border-border focus:outline-none focus:border-accent font-sans text-sm bg-white transition-colors'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <FadeInView>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="label-badge text-text block mb-1.5">Full Name</label>
          <input id="name" {...register('name')} className={inputClass} placeholder="Your full name" />
          {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label-badge text-text block mb-1.5">Email Address</label>
          <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
          {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="country" className="label-badge text-text block mb-1.5">Country</label>
          <input id="country" {...register('country')} className={inputClass} placeholder="United States" />
          {errors.country && <p className={errorClass} role="alert">{errors.country.message}</p>}
        </div>

        <div>
          <label htmlFor="learningGoal" className="label-badge text-text block mb-1.5">I Want to Learn</label>
          <select id="learningGoal" {...register('learningGoal')} className={inputClass}>
            <option value="">Select a language…</option>
            <option value="russian">Russian</option>
            <option value="english">English</option>
            <option value="both">Both Russian & English</option>
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.learningGoal && <p className={errorClass} role="alert">{errors.learningGoal.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="label-badge text-text block mb-1.5">Message</label>
          <textarea
            id="message"
            {...register('message')}
            rows={5}
            className={inputClass}
            placeholder="Tell me about your goals, current level, and any questions you have…"
          />
          {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
        </div>

        {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-btn">{error}</p>}

        <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center">
          Send Message
        </Button>
      </form>
    </FadeInView>
  )
}
