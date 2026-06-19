import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SkillBadgeProps {
  skill: Skill
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const name = getMetafieldValue(skill.metadata?.skill_name) || skill.title
  const proficiencyRaw = skill.metadata?.proficiency
  const proficiency =
    typeof proficiencyRaw === 'number' ? proficiencyRaw : Number(getMetafieldValue(proficiencyRaw)) || 0
  const clamped = Math.max(0, Math.min(100, proficiency))

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm">{name}</span>
        {clamped > 0 && (
          <span className="text-xs text-muted-foreground">{clamped}%</span>
        )}
      </div>
      {clamped > 0 && (
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
            style={{ width: `${clamped}%` }}
          />
        </div>
      )}
    </div>
  )
}