import Link from 'next/link'
import { getProfile, getProjects, getSkills, getWorkExperience, getMetafieldValue } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import SkillBadge from '@/components/SkillBadge'
import ExperienceItem from '@/components/ExperienceItem'
import SectionHeading from '@/components/SectionHeading'
import type { Skill } from '@/types'

export default async function HomePage() {
  const [profile, projects, skills, experience] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
    getWorkExperience(),
  ])

  // Featured projects first, limit to 6 for homepage
  const sortedProjects = [...projects].sort((a, b) => {
    const aFeatured = a.metadata?.featured ? 1 : 0
    const bFeatured = b.metadata?.featured ? 1 : 0
    return bFeatured - aFeatured
  })
  const homeProjects = sortedProjects.slice(0, 6)

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!skillsByCategory[category]) {
      skillsByCategory[category] = []
    }
    skillsByCategory[category].push(skill)
  })
  const categories = Object.keys(skillsByCategory)

  const recentExperience = experience.slice(0, 3)

  return (
    <div>
      {profile ? (
        <Hero profile={profile} />
      ) : (
        <section className="max-w-6xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold text-gradient">My Portfolio</h1>
          <p className="mt-4 text-muted-foreground">Add a profile in Cosmic to get started.</p>
        </section>
      )}

      {/* Projects */}
      {homeProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading title="Featured Projects" subtitle="A selection of work I'm proud of." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {projects.length > 6 && (
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted transition-colors inline-block"
              >
                View All Projects
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Skills */}
      {categories.length > 0 && (
        <section className="bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionHeading title="Skills" subtitle="Technologies and tools I work with." />
            <div className="space-y-8">
              {categories.map((category) => {
                const categorySkills = skillsByCategory[category]
                if (!categorySkills || categorySkills.length === 0) {
                  return null
                }
                return (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill) => (
                        <SkillBadge key={skill.id} skill={skill} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {recentExperience.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading title="Experience" subtitle="My professional journey." />
          <div>
            {recentExperience.map((exp) => (
              <ExperienceItem key={exp.id} experience={exp} />
            ))}
          </div>
          {experience.length > 3 && (
            <div className="text-center mt-6">
              <Link
                href="/experience"
                className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted transition-colors inline-block"
              >
                View Full Experience
              </Link>
            </div>
          )}
        </section>
      )}
    </div>
  )
}