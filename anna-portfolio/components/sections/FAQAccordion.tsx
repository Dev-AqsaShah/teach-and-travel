'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <section className="section-padding bg-bg" id="faq">
      <div className="container-custom">
        <FadeInView className="text-center mb-12">
          <p className="label-badge text-accent mb-3">FAQ</p>
          <h2 className="heading-1 font-serif text-primary">Frequently Asked Questions</h2>
        </FadeInView>
        <Accordion.Root type="single" collapsible className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="card-base overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left group focus-visible:outline-none">
                  <span className="font-sans font-semibold text-primary group-hover:text-accent transition-colors pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out]">
                <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
