import Link from 'next/link'
import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const title = getMetafieldValue(project.metadata?.project_title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const screenshot = project.metadata?.screenshot
  const featured = project.metadata?.featured

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {screenshot ? (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={`${screenshot.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {featured && (
            <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
              Featured
            </span>
          )}
        </div>
      ) : (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">No image</span>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        {techStack && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.split(',').map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-md"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}