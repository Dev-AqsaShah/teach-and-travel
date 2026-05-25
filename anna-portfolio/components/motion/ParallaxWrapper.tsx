'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxWrapper({
  children,
  speed = 0.3,
  className,
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
