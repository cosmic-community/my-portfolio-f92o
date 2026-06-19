// app/projects/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProject, getMetafieldValue } from '@/lib/cosmic'

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.project_title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const techStack = getMetafieldValue(project.metadata?.tech_stack)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const screenshot = project.metadata?.screenshot
  const gallery = project.metadata?.gallery

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Projects
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold">
        <span className="text-gradient">{title}</span>
      </h1>

      {techStack && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.split(',').map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Visit Live Site
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      {screenshot && (
        <div className="mt-10 rounded-xl overflow-hidden border border-border">
          <img
            src={`${screenshot.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {description && (
        <div className="mt-10 prose prose-invert max-w-none">
          <p className="text-foreground/85 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((image, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-border">
                <img
                  src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={`${title} gallery ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}