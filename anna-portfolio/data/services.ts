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
  language: 'russian' | 'english'
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
    shortDescription: 'Learn Russian from a native speaker with 8+ years of teaching experience.',
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
        features: ['4 hrs/week sessions', 'Priority scheduling', 'Daily support', 'Full curriculum', 'Exam prep'],
      },
    ],
  },
  {
    id: 'english',
    language: 'english',
    title: 'English Language Lessons',
    shortDescription: 'Professional English instruction tailored to your career and personal goals.',
    href: '/lessons/english',
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
        features: ['60-minute sessions', 'Flexible scheduling', 'Business focus available', 'Progress tracking', 'Study materials'],
        highlighted: true,
      },
      {
        name: 'Intensive',
        price: '$180',
        duration: 'per week',
        description: '4 hours/week — fastest progress',
        features: ['4 hrs/week sessions', 'Priority scheduling', 'IELTS/CEFR prep', 'Full curriculum', 'Mock exams'],
      },
    ],
  },
]

export const faqItems = [
  { question: 'How do I book my first lesson?', answer: 'Simply click the "Book a Lesson" button, select a convenient time on Calendly, and we\'ll meet via Zoom. Your first session includes a free level assessment.' },
  { question: 'What platform do you use for lessons?', answer: 'All lessons are conducted via Zoom. You\'ll receive a link in your confirmation email after booking.' },
  { question: 'How quickly can I see progress?', answer: 'Most students notice improvement within the first 4–6 weeks with consistent practice. Intensive students often progress even faster.' },
  { question: 'Do you offer group lessons?', answer: 'Currently I focus on 1-on-1 lessons to provide fully personalized instruction. Group lessons may be available in the future.' },
  { question: 'What if I need to cancel or reschedule?', answer: 'You can reschedule up to 24 hours before your lesson through Calendly with no penalty. Cancellations within 24 hours are charged 50% of the lesson fee.' },
  { question: 'Is there a money-back guarantee?', answer: 'If you\'re not satisfied after your trial lesson, I offer a full refund — no questions asked.' },
  { question: 'What levels do you teach?', answer: 'I teach all levels from absolute beginner (A0) through advanced (C1). My specialty is taking beginners to conversational fluency.' },
  { question: 'Do you provide learning materials?', answer: 'Yes. All materials, worksheets, and recordings are provided at no extra charge as part of your lesson package.' },
  { question: 'Can lessons be in Russian from day one?', answer: 'We start with English explanations and gradually transition to Russian-only as your confidence grows — at your own pace.' },
  { question: 'How do I pay for lessons?', answer: 'Payment is processed securely through Stripe or PayPal at the time of booking via Calendly. All major cards accepted.' },
]
