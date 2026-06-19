import { getSkills, getMetafieldValue } from '@/lib/cosmic'
import SkillBadge from '@/components/SkillBadge'
import SectionHeading from '@/components/SectionHeading'
import type { Skill } from '@/types'

export const metadata = {
  title: 'Skills | My Portfolio',
  description: 'My technical skills and expertise.',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  const skillsByCategory: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = []
    }
    skillsByCategory[category].push(skill)
  })
  const categories = Object.keys(skillsByCategory)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title="Skills" subtitle="Technologies and tools I specialize in." />
      {categories.length > 0 ? (
        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category]
            if (!categorySkills || categorySkills.length === 0) {
              return null
            }
            return (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No skills found.</p>
      )}
    </div>
  )
}