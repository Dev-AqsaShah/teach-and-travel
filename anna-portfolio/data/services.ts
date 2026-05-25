export interface PricingTier {
  name: string
  price: string
  duration: string
  description: string
  features: string[]
  highlighted?: boolean
}

export interface Service {
  id: string
  language: 'russian' | 'romanian'
  title: string
  shortDescription: string
  href: string
  icon: string
  pricing: PricingTier[]
}

export const services: Service[] = [
  {
    id: 'russian',
    language: 'russian',
    title: 'Russian Language Lessons',
    shortDescription: 'Learn Russian from a native speaker with 13+ years of teaching experience and an academic research background.',
    href: '/lessons/russian',
    icon: 'BookOpen',
    pricing: [
      {
        name: 'Trial',
        price: '$25',
        duration: '30 min',
        description: 'Introductory session — no commitment',
        features: ['30-minute session', 'Level assessment', 'Learning plan preview', 'No commitment'],
      },
      {
        name: 'Standard',
        price: '$55',
        duration: 'per hour',
        description: 'Weekly 1-on-1 lessons',
        features: ['60-minute sessions', 'Flexible scheduling', 'Custom curriculum', 'Progress tracking', 'Study materials'],
        highlighted: true,
      },
      {
        name: 'Intensive',
        price: '$180',
        duration: 'per week',
        description: '4 hours/week — fastest progress',
        features: ['4 hrs/week sessions', 'Priority scheduling', 'Daily support', 'Full curriculum', 'Exam prep (TORFL)'],
      },
    ],
  },
  {
    id: 'romanian',
    language: 'romanian',
    title: 'Romanian Language Lessons',
    shortDescription: 'Rare opportunity to learn Romanian with an advanced speaker who lived and worked in Bucharest for years.',
    href: '/lessons/romanian',
    icon: 'Globe',
    pricing: [
      {
        name: 'Trial',
        price: '$25',
        duration: '30 min',
        description: 'Introductory session — no commitment',
        features: ['30-minute session', 'Level assessment', 'Learning plan preview', 'No commitment'],
      },
      {
        name: 'Standard',
        price: '$55',
        duration: 'per hour',
        description: 'Weekly 1-on-1 lessons',
        features: ['60-minute sessions', 'Flexible scheduling', 'Cultural context included', 'Progress tracking', 'Study materials'],
        highlighted: true,
      },
      {
        name: 'Intensive',
        price: '$180',
        duration: 'per week',
        description: '4 hours/week — fastest progress',
        features: ['4 hrs/week sessions', 'Priority scheduling', 'History & culture focus', 'Full curriculum', 'Mock conversations'],
      },
    ],
  },
]

export const faqItems = [
  { question: 'How do I book my first lesson?', answer: 'Click "Book a Lesson", select a time on Calendly, and we meet via Zoom. Your first session includes a free level assessment.' },
  { question: 'What platform do you use for lessons?', answer: 'All lessons are conducted via Zoom. You will receive a link in your confirmation email after booking.' },
  { question: 'Do you teach Romanian as well as Russian?', answer: 'Yes! I teach both Russian (native) and Romanian (advanced). I lived and worked in Bucharest for several years and have an academic specialisation in Romanian-Soviet history.' },
  { question: 'How quickly can I see progress?', answer: 'Most students notice improvement within the first 4–6 weeks with consistent practice. Intensive students often progress even faster.' },
  { question: 'What levels do you teach?', answer: 'I teach all levels from absolute beginner (A0) through advanced (C1) in both Russian and Romanian.' },
  { question: 'What if I need to cancel or reschedule?', answer: 'You can reschedule up to 24 hours before your lesson through Calendly with no penalty. Cancellations within 24 hours are charged 50% of the lesson fee.' },
  { question: 'Is there a money-back guarantee?', answer: 'If you are not satisfied after your trial lesson, I offer a full refund — no questions asked.' },
  { question: 'Do you provide learning materials?', answer: 'Yes. All materials, worksheets, and resources are provided at no extra charge as part of your lesson package.' },
  { question: 'Can you help with TORFL exam preparation?', answer: 'Absolutely. I offer targeted TORFL (Test of Russian as a Foreign Language) preparation as part of intensive packages.' },
  { question: 'How do I pay for lessons?', answer: 'Payment is processed securely through Stripe or PayPal at the time of booking via Calendly. All major cards accepted.' },
]
