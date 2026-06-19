import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32 text-center">
      <h1 className="text-6xl font-extrabold text-gradient">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-8 inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  )
}