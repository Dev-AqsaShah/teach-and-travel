'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/navigation'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="font-serif text-xl lg:text-2xl font-semibold text-primary hover:text-accent transition-colors">
              Anna Volkova
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-sans text-sm font-medium transition-colors duration-200 gold-underline pb-0.5',
                    pathname === link.href ? 'text-accent' : 'text-text hover:text-accent'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/book"
                className="hidden lg:inline-flex items-center bg-accent text-primary text-sm font-semibold px-5 py-2.5 rounded-btn hover:bg-accent-light transition-colors duration-200"
              >
                Book a Lesson
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 rounded-btn hover:bg-bg-subtle transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
