import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Projects | My Portfolio',
  description: 'Explore all my portfolio projects.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  const sortedProjects = [...projects].sort((a, b) => {
    const aFeatured = a.metadata?.featured ? 1 : 0
    const bFeatured = b.metadata?.featured ? 1 : 0
    return bFeatured - aFeatured
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title="All Projects" subtitle="A complete collection of my work." />
      {sortedProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects found.</p>
      )}
    </div>
  )
}