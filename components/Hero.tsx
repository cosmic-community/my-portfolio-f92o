import type { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  profile: Profile
}

export default function Hero({ profile }: HeroProps) {
  const fullName = getMetafieldValue(profile.metadata?.full_name) || profile.title
  const businessName = getMetafieldValue(profile.metadata?.business_name)
  const tagline = getMetafieldValue(profile.metadata?.tagline)
  const bio = getMetafieldValue(profile.metadata?.bio)
  const location = getMetafieldValue(profile.metadata?.location)
  const email = getMetafieldValue(profile.metadata?.email)
  const phone = getMetafieldValue(profile.metadata?.phone)
  const github = getMetafieldValue(profile.metadata?.github_url)
  const linkedin = getMetafieldValue(profile.metadata?.linkedin_url)
  const heroImage = profile.metadata?.hero_image
  const profilePhoto = profile.metadata?.profile_photo

  return (
    <section className="relative overflow-hidden">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={fullName}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          {profilePhoto && (
            <div className="mb-8">
              <img
                src={`${profilePhoto.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
                alt={fullName}
                width={160}
                height={160}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-4 ring-primary/30 shadow-2xl"
              />
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient">{fullName}</span>
          </h1>

          {businessName && (
            <p className="mt-3 text-xl text-accent font-medium">{businessName}</p>
          )}

          {tagline && (
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              {tagline}
            </p>
          )}

          {bio && (
            <p className="mt-6 text-base text-foreground/80 max-w-2xl leading-relaxed">
              {bio}
            </p>
          )}

          {location && (
            <p className="mt-4 text-sm text-muted-foreground flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                {phone}
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-lg hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-lg hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}