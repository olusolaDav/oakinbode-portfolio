"use client"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { ExperienceCard } from "@/components/ui/experience-card"
import type { Experience } from "@/types"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <SectionWrapper
      id="experience"
      spacing="lg"
      containerVariant="experience"
      gradientColor="from-green-500/10 via-emerald-500/5 to-cyan-500/10"
    >
      <SectionHeading 
        title="Experience" 
        subtitle="Building digital solutions with passion and precision"
        size="lg"
      />

      {/* Enhanced Grid Layout */}
      <div className="relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"></div>
        
        {/* Timeline Connector (Hidden on Mobile) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent transform -translate-x-1/2"></div>

        {/* Modern Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 relative">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative ${
                index % 2 === 0 ? 'lg:justify-self-end' : 'lg:justify-self-start'
              } w-full max-w-md lg:max-w-lg`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Timeline dot (Hidden on Mobile) */}
              <div className={`hidden lg:block absolute top-8 ${
                index % 2 === 0 ? '-right-6' : '-left-6'
              } w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full z-10 shadow-lg`}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Connection line to timeline (Hidden on Mobile) */}
              <div className={`hidden lg:block absolute top-10 ${
                index % 2 === 0 
                  ? '-right-2 w-4 border-t-2' 
                  : '-left-2 w-4 border-t-2'
              } border-cyan-400/30 z-5`}></div>

              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </SectionWrapper>
  )
}
