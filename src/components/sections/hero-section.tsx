"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, Twitter, MessageCircle, X } from "lucide-react"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import type { PersonalInfo, SocialLink } from "@/types"

interface HeroSectionProps {
  personalInfo: PersonalInfo
  socialLinks: SocialLink[]
  typingSkills: string[]
}

const TypingAnimation = ({ skills }: { skills: string[] }) => {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const current = skills[currentSkill]

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        setTypingSpeed(75)
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentSkill((prev) => (prev + 1) % skills.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentSkill, typingSpeed, skills])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function HeroSection({ personalInfo, socialLinks, typingSkills }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center py-20 lg:py-32"
      gradientColor="from-purple-500/20 via-pink-500/10 to-blue-500/20"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Content - Enhanced Layout */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 opacity-90">
                  Hello, I'm
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <span className="block text-white mt-2 lg:mt-4">
                    {personalInfo.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
              </div>

              {/* Dynamic Typing Text */}
              <div className="space-y-4">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                  Professional
                </p>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    <TypingAnimation skills={typingSkills} />
                  </span>
                </div>
              </div>

              {/* Brief Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                Crafting exceptional digital experiences with modern web technologies. 
                Specializing in full-stack development, UI/UX design, and scalable solutions.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
              {/* Primary CTA */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-hover border-0 text-base"
                  aria-label="Go to contact section"
                >
                  Let's Work Together
                </Button>
              </div>

              {/* Secondary CTA */}
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="px-8 py-4 rounded-full font-semibold text-base border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-hover"
                aria-label="View my work"
              >
                View My Work
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-gray-400 font-medium">Connect with me:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const gradients = [
                    ["#ec4899", "#f97316"], // Pink to Orange
                    ["#8b5cf6", "#a855f7"], // Purple variations
                    ["#06b6d4", "#3b82f6"], // Cyan to Blue
                    ["#a855f7", "#d946ef"], // Purple
                    ["#22c55e", "#10b981"]  // Green
                  ];

                  return (
                    <GradientOutlineBorder
                      key={social.name}
                      gradientColors={gradients[index % gradients.length]}
                      containerClassName="rounded-full"
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center hover:bg-slate-800/80 transition-all duration-300 cursor-hover hover:scale-110"
                        aria-label={`Visit my ${social.name}`}
                      >
                        {social.icon === "Github" && <Github className="h-5 w-5 text-pink-400" />}
                        {social.icon === "Linkedin" && <Linkedin className="h-5 w-5 text-blue-400" />}
                        {social.icon === "Twitter" && <X className="h-5 w-5 text-cyan-400" />}
                        {social.icon === "Mail" && <Mail className="h-5 w-5 text-purple-400" />}
                        {social.icon === "MessageCircle" && <MessageCircle className="h-5 w-5 text-green-400" />}
                      </a>
                    </GradientOutlineBorder>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Code Editor */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>

            {/* Code Editor Container */}
            <div className="relative perspective-1000 cursor-hover">
              <GradientOutlineBorder className="rounded-xl shadow-2xl">
                <div
                  className="bg-slate-900/95 backdrop-blur-sm rounded-xl overflow-hidden min-h-[400px] lg:min-h-[500px]"
                  role="img"
                  aria-label="Code snippet showing developer profile"
                >
                  {/* Enhanced Browser Header */}
                  <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">developer-profile.js</div>
                  </div>

                  {/* Enhanced Code Content - Real Editor Style */}
                  <div className="flex font-mono text-sm lg:text-base bg-slate-900">
                    {/* Line Numbers Column - VS Code Style */}
                    <div className="flex flex-col bg-slate-800/50 border-r border-slate-700/30 px-3 py-6 lg:py-8 min-w-[3rem] select-none">
                      <div className="text-xs text-slate-500 leading-[1.7] space-y-0 font-medium">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <div 
                            key={num}
                            className="text-right hover:text-slate-400 transition-colors cursor-pointer py-0.5 px-1"
                            style={{ lineHeight: '1.7' }}
                          >
                            {num}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Code Content - Real Editor Style */}
                    <div className="flex-1 overflow-hidden">
                      <div className="p-6 lg:p-8 space-y-0">
                        <div className="space-y-0 text-slate-200" style={{ lineHeight: '1.7' }}>
                          
                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-slate-500 italic">// Welcome to my profile</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-pink-400 font-semibold">const</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-blue-300 font-medium">developer</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-cyan-400">=</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-yellow-400">{"{"}</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-slate-300">  </span>
                            <span className="text-blue-300">name</span>
                            <span className="text-cyan-400">:</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-green-400">'{personalInfo.name}'</span>
                            <span className="text-cyan-400">,</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-slate-300">  </span>
                            <span className="text-blue-300">title</span>
                            <span className="text-cyan-400">:</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-green-400">'Full Stack Developer'</span>
                            <span className="text-cyan-400">,</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-slate-300">  </span>
                            <span className="text-blue-300">skills</span>
                            <span className="text-cyan-400">:</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-yellow-400">[</span>
                            <span className="text-green-400">'React'</span>
                            <span className="text-cyan-400">,</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-green-400">'TypeScript'</span>
                            <span className="text-cyan-400">,</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-green-400">'Node.js'</span>
                            <span className="text-yellow-400">]</span>
                            <span className="text-cyan-400">,</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-slate-300">  </span>
                            <span className="text-blue-300">experience</span>
                            <span className="text-cyan-400">:</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-orange-400">'4+ years'</span>
                            <span className="text-cyan-400">,</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-blue-300">isHireable</span>
                            <span className="text-cyan-400">:</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-purple-400 font-semibold">true</span>
                          </div>

                          <div className="py-0.5 hover:bg-slate-800/30 transition-colors px-2 -mx-2">
                            <span className="text-yellow-400">{"}"}</span>
                            <span className="text-cyan-400">;</span>
                            <span className="text-slate-300"> </span>
                            <span className="text-slate-500 italic">// Ready to build amazing things!</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GradientOutlineBorder>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}