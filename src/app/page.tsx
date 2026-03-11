"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, Github, Mail, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { SectionHeading } from "@/components/ui/section-heading"
import { Container } from "@/components/layout/container"
import { SectionTransition, EnhancedSectionSeparator } from "@/components/effects/section-transitions"
import { MorphingBlob, AnimatedElement } from "@/components/effects/advanced-animations"
import { experiences } from "@/data/experience"
import { personalProjects, companyProjects } from "@/data/projects"
import { personalInfo } from "@/data/personal"
import { socialLinks } from "@/data/social"
import { contactInfo } from "@/data/contact"

// Dynamic imports for client-only components
const CustomCursor = dynamic(
  () => import("@/components/effects/custom-cursor").then((mod) => ({ default: mod.CustomCursor })),
  {
    ssr: false,
  },
)

const DynamicGrid = dynamic(
  () => import("@/components/effects/dynamic-grid").then((mod) => ({ default: mod.DynamicGrid })),
  {
    ssr: false,
  },
)

const InteractiveBackground = dynamic(
  () => import("@/components/effects/interactive-background").then((mod) => ({ default: mod.InteractiveBackground })),
  {
    ssr: false,
  },
)

const typingSkills = [
  "Full-Stack Developer",
  "React Specialist", 
  "UI/UX Designer",
  "Node.js Expert",
  "Python Developer",
  "DevOps Engineer",
  "Problem Solver",
  "Creative Thinker"
]

export default function Portfolio() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-x-hidden relative cursor-none">
      {/* SEO-friendly structured content */}
      <div className="sr-only">
        <h1>Olusola David AKINBODE - Full Stack Developer Portfolio</h1>
        <p>
          Professional portfolio showcasing 4+ years of experience in full-stack web development, specializing in React,
          Node.js, Python, TypeScript, and modern web technologies.
        </p>
      </div>

      {/* Custom Cursor - Client Only */}
      <CustomCursor />

      {/* Dynamic Grid Background - Client Only */}
      <DynamicGrid />

      {/* Interactive Background - Client Only */}
      <InteractiveBackground />

      {/* Enhanced Navigation */}
      <Navigation personalInfo={personalInfo} />

      {/* Hero Section */}
      <HeroSection 
        personalInfo={personalInfo}
        socialLinks={socialLinks}
        typingSkills={typingSkills}
      />

      {/* About Section */}
      <AboutSection personalInfo={personalInfo} />

      {/* Transition to Experience */}
      <SectionTransition variant="wave" />

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Transition to Skills */}
      <SectionTransition variant="dots" />

      {/* Skills Section */}
      <SectionWrapper 
        id="skills"
        spacing="lg" 
        containerVariant="wide"
        gradientColor="from-cyan-500/10 via-blue-500/5 to-purple-500/10"
      >
        <SkillsSection />
      </SectionWrapper>

      {/* Enhanced Section Separator for Projects */}
      <EnhancedSectionSeparator 
        title="My Work" 
        subtitle="Explore the projects that showcase my skills and creativity"
      />

      {/* Projects Section */}
      <ProjectsSection personalProjects={personalProjects} companyProjects={companyProjects} />

      {/* Education Section */}
      <SectionWrapper
        id="education"
        spacing="lg"
        containerVariant="content"
        gradientColor="from-indigo-500/10 via-purple-500/5 to-pink-500/10"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Education & Certifications" 
            subtitle="Continuous learning and professional development"
            size="lg"
          />

          <div className="space-y-8">
            {/* Education */}
            <Card className="enhanced-card">
              <CardContent className="p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">B.A Education: Fine Art</h3>
                    <p className="text-cyan-400 mb-3 text-lg">Obafemi Awolowo University, Ile-Ife, Nigeria</p>
                    <p className="text-gray-400">August 2016 - February 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="enhanced-card">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-8">Training & Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "DevOps and Cloud Engineering (In Progress) - KodeKloud",
                    "Complete React Developer in 2022 - Zero to Mastery (Udemy)",
                    "Become a Software Developer - LinkedIn Learning",
                    "Web Development with Python and JavaScript - CS50 by Harvard",
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{cert}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Transition to Contact */}
      <SectionTransition variant="zigzag" />

      {/* Contact Section */}
      <ContactSection contactInfo={contactInfo} />

      {/* Enhanced Footer */}
      <footer className="relative py-16 border-t border-slate-700/30" role="contentinfo">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <Container variant="wide" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient-primary">Olusola David AKINBODE</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences 
                and solving complex problems with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={`Visit my ${social.name}`}
                  >
                    <span className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {social.icon === "Github" && <Github className="h-5 w-5" />}
                      {social.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
                      {social.icon === "Twitter" && <Twitter className="h-5 w-5" />}
                      {social.icon === "Mail" && <Mail className="h-5 w-5" />}
                      {social.icon === "MessageCircle" && <MessageCircle className="h-5 w-5" />}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center space-x-2">
                  <span>📧</span>
                  <span>olusola.dave11@gmail.com</span>
                </p>
                <p className="text-gray-400 flex items-center space-x-2">
                  <span>🌍</span>  
                  <span>Nigeria</span>
                </p>
                <p className="text-gray-400 flex items-center space-x-2">
                  <span>💼</span>
                  <span>Available for new opportunities</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-700/30 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left">
              © 2025 Olusola David AKINBODE. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 text-center sm:text-right">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </Container>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
            <Button
              onClick={scrollToTop}
              className="relative w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 shadow-2xl cursor-hover"
              size="icon"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}