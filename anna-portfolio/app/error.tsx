'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <p className="label-badge text-accent mb-4">Something went wrong</p>
        <h2 className="heading-2 font-serif text-primary mb-4">An error occurred</h2>
        <p className="text-text-muted mb-8">Please try again or return to the home page.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-btn border border-border text-text hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            Try Again
          </button>
          <Button href="/" variant="primary">Go Home</Button>
        </div>
      </div>
    </div>
  )
}
