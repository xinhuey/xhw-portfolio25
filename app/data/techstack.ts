export interface TechStack {
  category: string
  skills: string[]
}

export const techStack : TechStack[] = [
    {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Kubernetes", "Jenkins"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Jira", "GitHub", "Vercel"],
  },
]