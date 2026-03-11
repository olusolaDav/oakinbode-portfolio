"use client"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import type { PersonalInfo } from "@/types"

interface AboutSectionProps {
  personalInfo: PersonalInfo
}

export function AboutSection({ personalInfo }: AboutSectionProps) {
  return (
    <SectionWrapper 
      id="about" 
      spacing="lg"
      containerVariant="content" 
      gradientColor="from-blue-500/10 via-cyan-500/5 to-purple-500/10"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about creating exceptional digital experiences"
          size="lg"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Bio Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="enhanced-card">
              <CardContent className="p-8 lg:p-10">
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    {personalInfo.bio}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-700/50">
                    <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                      My journey in tech has been driven by curiosity and a passion for solving 
                      complex problems. I believe in writing clean, maintainable code and creating 
                      user experiences that truly make a difference.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats/Highlights Sidebar */}
          <div className="space-y-4">
            {/* Years of Experience */}
            <Card className="enhanced-card">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-primary">4+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Completed */}
            <Card className="enhanced-card">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-primary">50+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="enhanced-card">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient-primary">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Technologies</div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="enhanced-card border-green-500/20">
              <CardContent className="p-6 text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">Available</span>
                  </div>
                  <div className="text-xs text-gray-400">For new projects</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
