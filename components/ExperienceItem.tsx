import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ExperienceItemProps {
  experience: WorkExperience
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const role = getMetafieldValue(experience.metadata?.role) || experience.title
  const company = getMetafieldValue(experience.metadata?.company)
  const location = getMetafieldValue(experience.metadata?.location)
  const description = getMetafieldValue(experience.metadata?.description)
  const startDate = formatDate(getMetafieldValue(experience.metadata?.start_date))
  const isCurrent = experience.metadata?.current_position === true
  const endDate = isCurrent ? 'Present' : formatDate(getMetafieldValue(experience.metadata?.end_date))

  return (
    <div className="relative pl-8 pb-10 border-l border-border last:pb-0">
      <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">{role}</h3>
            {company && (
              <p className="text-accent font-medium">{company}</p>
            )}
          </div>
          {(startDate || endDate) && (
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {startDate}{startDate && endDate ? ' — ' : ''}{endDate}
            </span>
          )}
        </div>
        {location && (
          <p className="mt-1 text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}