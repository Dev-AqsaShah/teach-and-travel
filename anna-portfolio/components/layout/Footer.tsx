import Link from 'next/link'
import { ExternalLink, Mail } from 'lucide-react'
import { footerLinks } from '@/data/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white/80">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold text-white hover:text-accent transition-colors">
              Anna Gladysheva
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Language Teacher & Researcher — Russian & Romanian lessons from an academic specialist based in Vladimir, Russia.
            </p>
            <div className="flex items-center gap-3 mt-5">
                {[
                { href: 'https://instagram.com', label: 'Instagram' },
                { href: 'https://linkedin.com', label: 'LinkedIn' },
                { href: 'https://youtube.com', label: 'YouTube' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors text-xs font-semibold">
                  <ExternalLink size={14} />
                </a>
              ))}
              <a href="mailto:annikigladysheva@gmail.com" aria-label="Email Anna" className="p-2 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h3 className="label-badge text-white mb-4">{section.heading}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} Anna Gladysheva. All rights reserved.</p>
          <p>Designed & built with care for language learners worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
