'use client'

import { useState } from 'react'
import { FileText, Music, Download } from 'lucide-react'
import { resources } from '@/data/resources'
import FadeInView from '@/components/motion/FadeInView'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  const [email, setEmail] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setDownloading(true)
    setTimeout(() => {
      setUnlocked(true)
      setDownloading(false)
    }, 800)
  }

  const Icon = resource.format === 'MP3' ? Music : FileText

  return (
    <div className="card-base p-6 flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-card bg-accent/10 flex items-center justify-center shrink-0">
          <Icon size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-primary text-sm">{resource.title}</h3>
            <Badge variant="outline">{resource.format}</Badge>
          </div>
          <p className="text-text-muted text-xs leading-relaxed">{resource.description}</p>
        </div>
      </div>

      {unlocked ? (
        <a
          href={`/downloads/${resource.fileName}`}
          download
          className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-sm py-2.5 rounded-btn hover:bg-accent-light transition-colors"
        >
          <Download size={16} /> Download Free
        </a>
      ) : (
        <form onSubmit={handleUnlock} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 rounded-btn border border-border text-xs focus:outline-none focus:border-accent"
            aria-label="Email to unlock download"
          />
          <Button type="submit" variant="primary" size="sm" loading={downloading}>
            {downloading ? '…' : 'Get Free'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default function ResourcesPage() {
  return (
    <section className="section-padding pt-28 bg-bg">
      <div className="container-custom max-w-4xl">
        <FadeInView className="text-center mb-14">
          <p className="label-badge text-accent mb-3">Free Resources</p>
          <h1 className="heading-1 font-serif text-primary mb-4">Language Learning Toolkit</h1>
          <p className="text-text-muted max-w-lg mx-auto">
            Download these free guides to kickstart your Russian or English learning journey. Enter your email to unlock.
          </p>
        </FadeInView>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r) => (
            <StaggerItem key={r.id}>
              <ResourceCard resource={r} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
