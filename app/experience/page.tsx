import { getWorkExperience } from '@/lib/cosmic'
import ExperienceItem from '@/components/ExperienceItem'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Experience | My Portfolio',
  description: 'My professional work experience.',
}

export default async function ExperiencePage() {
  const experience = await getWorkExperience()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title="Work Experience" subtitle="My professional journey and roles." />
      {experience.length > 0 ? (
        <div>
          {experience.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No work experience found.</p>
      )}
    </div>
  )
}