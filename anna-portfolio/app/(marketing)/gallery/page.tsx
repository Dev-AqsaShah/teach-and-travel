'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '@/data/gallery'
import { GalleryImage } from '@/types/gallery'
import Tag from '@/components/ui/Tag'
import FadeInView from '@/components/motion/FadeInView'

type Region = GalleryImage['region']

const regions: { label: string; value: Region }[] = [
  { label: 'All', value: 'all' },
  { label: 'Europe', value: 'europe' },
  { label: 'Asia', value: 'asia' },
  { label: 'Americas', value: 'americas' },
  { label: 'Middle East', value: 'middle-east' },
]

export default function GalleryPage() {
  const [activeRegion, setActiveRegion] = useState<Region>('all')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const filtered =
    activeRegion === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.region === activeRegion)

  return (
    <>
      <section className="pt-24 pb-8 bg-bg">
        <div className="container-custom">
          <FadeInView className="text-center mb-10">
            <p className="label-badge text-accent mb-3">Travel Photography</p>
            <h1 className="heading-1 font-serif text-primary mb-4">Around the World</h1>
            <p className="text-text-muted max-w-xl mx-auto">
              40+ countries, countless memories. These are the places that have shaped who I am as a teacher and a person.
            </p>
          </FadeInView>

          <FadeInView delay={0.2} className="flex flex-wrap gap-2 justify-center mb-10">
            {regions.map((r) => (
              <Tag
                key={r.value}
                active={activeRegion === r.value}
                onClick={() => setActiveRegion(r.value)}
              >
                {r.label}
              </Tag>
            ))}
          </FadeInView>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img) => (
              <button
                key={img.id}
                className="group w-full block relative overflow-hidden rounded-card shadow-card cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setLightbox(img)}
                aria-label={`View photo: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                  <span className="px-4 py-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.location}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={lightbox.width}
              height={lightbox.height}
              className="rounded-card w-full h-auto max-h-[80vh] object-contain"
              priority
            />
            <p className="text-white text-center mt-3 font-semibold">{lightbox.location}</p>
          </div>
        </div>
      )}
    </>
  )
}
