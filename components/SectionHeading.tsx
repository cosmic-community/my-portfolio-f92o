interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}