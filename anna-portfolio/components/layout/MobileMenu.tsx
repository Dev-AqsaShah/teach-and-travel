'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'
import { navLinks } from '@/data/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-50 flex flex-col lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-serif text-xl font-semibold text-primary">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-btn hover:bg-bg-subtle transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-serif text-2xl font-medium text-primary py-3 border-b border-border/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-8">
              <Link
                href="/book"
                onClick={onClose}
                className="w-full flex items-center justify-center bg-accent text-primary font-semibold py-3 px-6 rounded-btn hover:bg-accent-light transition-colors"
              >
                Book a Lesson
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
