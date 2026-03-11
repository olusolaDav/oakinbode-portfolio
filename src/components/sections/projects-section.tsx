"use client"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/ui/project-card"
import type { Project } from "@/types"

interface ProjectsSectionProps {
  personalProjects: Project[]
  companyProjects: Project[]
}

export function ProjectsSection({ personalProjects, companyProjects }: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      className="py-20 px-6"
      gradientColor="from-purple-500/10 via-pink-500/5 to-orange-500/10"
    >
      <div className="container mx-auto">
        <SectionHeading title="PROJECTS" />

        {/* All Projects in one grid - Company projects first, then personal projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Projects (displayed first) */}
          {companyProjects.map((project, index) => (
            <ProjectCard key={`company-${index}`} {...project} showGithub={false} />
          ))}

          {/* Personal Projects (displayed after company projects) */}
          {personalProjects.map((project, index) => (
            <ProjectCard key={`personal-${index}`} {...project} showGithub={true} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
