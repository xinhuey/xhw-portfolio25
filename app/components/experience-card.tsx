import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export default function ExperienceCard({ title, company, period, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg text-muted-foreground">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span key={tech} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

