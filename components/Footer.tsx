export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {year} My Portfolio. Built with Next.js & Cosmic.
        </p>
      </div>
    </footer>
  )
}