import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg pt-20 text-center">
      <div className="container-custom max-w-lg">
        <p className="font-serif text-8xl font-semibold text-accent opacity-30 mb-4">404</p>
        <h1 className="heading-2 font-serif text-primary mb-4">Page Not Found</h1>
        <p className="text-text-muted mb-8">
          This page seems to have gone traveling. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary">Go Home</Button>
          <Button href="/lessons" variant="secondary">View Lessons</Button>
        </div>
      </div>
    </section>
  )
}
