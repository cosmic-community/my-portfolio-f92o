import Link from 'next/link'

export default function Header() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold text-gradient">
            My Portfolio
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}