"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import type { Education, Certification } from "@/types"

interface EducationSectionProps {
  education: Education[]
  certifications: Certification[]
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  return (
    <SectionWrapper
      id="education"
      className="py-20 px-6"
      gradientColor="from-indigo-500/10 via-purple-500/5 to-pink-500/10"
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Education & Certifications" />

        <div className="space-y-8">
          {/* Education */}
          {education.map((edu, index) => (
            <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 cursor-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    {edu.description && <p className="text-gray-300 mt-2">{edu.description}</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Certifications */}
          <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 cursor-hover">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-6">Training & Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <p className="text-gray-300">
                      {cert.name} - {cert.issuer} {cert.date && `(${cert.date})`}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}
