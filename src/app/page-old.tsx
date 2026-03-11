"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Menu, X, ArrowUp, Phone } from "lucide-react"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { ExperienceCard } from "@/components/ui/experience-card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { Container } from "@/components/layout/container"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"
import { ContactForm } from "@/components/ui/contact-form"
import { experiences } from "@/data/experience"
import { personalProjects, companyProjects } from "@/data/projects"
import Link from "next/link"

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

const TypingAnimation = () => {
  const skills = [
    "Full-Stack Developer",
    "React Specialist",
    "Responsive Web App",
    "Modern Web App",
    "Node.js Expert",
    "Python Developer",
    "DevOps Experience",
    "UI/UX Designer",
    "Problem Solver",
    "Creative Thinker",
    "Innovative"
  ]

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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      // Show scroll to top button
      setShowScrollTop(window.scrollY > 500)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

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
            {/* Replace the TypingAnimation with logo */}
            <div className="flex items-center space-x-3">
            <Link href='/'>
              <img
                src="/images/logo.png"
                alt="Olusola David AKINBODE"
                className="w-10 h-10 rounded-full border-2 border-cyan-400/50 cursor-hover"
              />
              </Link>
              <h1 className="text-xl font-bold text-cyan-400 cursor-hover">
                <TypingAnimation />
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8" role="menubar">
              {["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-cyan-400 cursor-hover ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${item.toLowerCase()} section`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-cyan-400 cursor-hover"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50" role="menu">
            <Container>
              <div className="py-4 space-y-3">
                {["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-hover"
                    role="menuitem"
                    aria-label={`Navigate to ${item.toLowerCase()} section`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </Container>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <SectionWrapper
        id="hero"
        className="pt-24 pb-16 min-h-screen flex items-center"
        gradientColor="from-purple-500/20 via-pink-500/10 to-blue-500/20"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <header className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-gray-300">Hello,</h2>
                <h1 className="text-4xl md:text-6xl font-bold">
                  This is{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                    Olusola Akinbode
                  </span>
                  , I'm a
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Professional{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Full Stack developer.
                  </span>
                </h1>
              </header>

              {/* Social Links */}
              <div className="flex space-x-4" role="list" aria-label="Social media links">
                <GradientOutlineBorder gradientColors={["#ec4899", "#f97316"]} containerClassName="rounded-full">
                  <a
                    href="https://github.com/olusolaDav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center hover:bg-slate-800/80 transition-colors duration-300 cursor-hover"
                    aria-label="Visit my GitHub profile"
                  >
                    <Github className="h-5 w-5 text-pink-400" />
                  </a>
                </GradientOutlineBorder>

                <GradientOutlineBorder gradientColors={["#8b5cf6", "#a855f7"]} containerClassName="rounded-full">
                  <a
                    href="mailto:hello@oakinbode.info"
                    className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center hover:bg-slate-800/80 transition-colors duration-300 cursor-hover"
                    aria-label="Send me an email"
                  >
                    <Mail className="h-5 w-5 text-purple-400" />
                  </a>
                </GradientOutlineBorder>

                <GradientOutlineBorder gradientColors={["#25D366", "#128C7E"]} containerClassName="rounded-full">
                  <a
                    href="https://wa.link/7rqv43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center hover:bg-slate-800/80 transition-colors duration-300 cursor-hover"
                    aria-label="Contact me on WhatsApp"
                  >
                    <Phone className="h-5 w-5 text-green-400" />
                  </a>
                </GradientOutlineBorder>
              </div>

              <div className="relative inline-block">
                {/* Gradient border background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full p-[2px]">
                  <div className="bg-slate-900 rounded-full w-full h-full"></div>
                </div>

                {/* Button content */}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="relative bg-transparent hover:bg-slate-800/50 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-hover border-0"
                  aria-label="Go to contact section"
                >
                  CONTACT ME 👤
                </Button>
              </div>
            </div>

            {/* Right Content - Code Editor with Cursor Following Border */}
            <div className="relative perspective-1000 cursor-hover">
              <GradientOutlineBorder className="rounded-lg">
                <div
                  className="bg-slate-900/95 backdrop-blur-sm rounded-lg h-full overflow-hidden"
                  role="img"
                  aria-label="Code snippet showing developer profile"
                >
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 px-4 py-3 bg-slate-800/90 border-b border-slate-700/50">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="mt-4">
                        <span className="text-pink-400">const</span> <span className="text-blue-300">olusola</span>{" "}
                        <span className="text-gray-400">=</span> <span className="text-yellow-300">{"{"}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-300">name:</span>{" "}
                        <span className="text-green-300">'Olusola David AKINBODE'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-300">skills:</span> [
                      </div>
                      <div className="ml-8">
                        <span className="text-green-300">'React'</span>,{" "}
                        <span className="text-green-300">'TypeScript'</span>,{" "}
                        <span className="text-green-300">'Node.js'</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-green-300">'Python'</span>,{" "}
                        <span className="text-green-300">'PostgreSQL'</span>,{" "}
                        <span className="text-green-300">'MongoDB'</span>,
                      </div>
                      <div className="ml-8">
                        <span className="text-green-300">'Next.js'</span>,{" "}
                        <span className="text-green-300">'FastAPI'</span>,{" "}
                        <span className="text-green-300">'Docker'</span>
                      </div>
                      <div className="ml-4">],</div>
                      <div className="ml-4">
                        <span className="text-blue-300">experience:</span> <span className="text-orange-400">4</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-300">isHireable:</span> <span className="text-purple-400">true</span>
                        ,
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-300">getExpertise</span>():{" "}
                        <span className="text-green-300">string[]</span> <span className="text-yellow-300">{"{"}</span>
                      </div>
                      <div className="ml-8">
                        <span className="text-pink-400">return</span> <span className="text-cyan-400">this</span>
                        .skills.filter(
                      </div>
                      <div className="ml-12">
                        <span className="text-blue-300">skill</span> <span className="text-gray-400">{"=>"}</span>{" "}
                        <span className="text-cyan-400">this</span>.experience {">"}{" "}
                        <span className="text-orange-400">3</span>
                      </div>
                      <div className="ml-8">);</div>
                      <div className="ml-4">
                        <span className="text-yellow-300">{"}"}</span>
                      </div>
                      <div>
                        <span className="text-yellow-300">{"}"}</span>;
                      </div>
                    </div>
                  </div>
                </div>
              </GradientOutlineBorder>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="py-20" gradientColor="from-blue-500/10 via-cyan-500/5 to-purple-500/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading title="About Me" />
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a passionate software developer with expertise in full-stack web development, frontend technologies,
              and graphic design. With over 4 years of experience, I specialize in creating robust, scalable web
              applications using modern technologies like React, Node.js, Python, and various databases. I'm also
              skilled in DevOps practices and have a strong background in UI/UX design.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper
        id="experience"
        className="py-20"
        gradientColor="from-green-500/10 via-emerald-500/5 to-cyan-500/10"
      >
        <Container>
          <SectionHeading title="Experiences" />

          {/* Simple Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="py-20" gradientColor="from-cyan-500/10 via-blue-500/5 to-purple-500/10">
        <Container>
          <SkillsSection />
        </Container>
      </SectionWrapper>

      {/* Projects Section */}
      <ProjectsSection personalProjects={personalProjects} companyProjects={companyProjects} />

      {/* Education Section */}
      <SectionWrapper
        id="education"
        className="py-20"
        gradientColor="from-indigo-500/10 via-purple-500/5 to-pink-500/10"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Education & Certifications" />

            <div className="space-y-8">
              {/* Education */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 cursor-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">B.A Education: Fine Art</h3>
                      <p className="text-cyan-400 mb-2">Obafemi Awolowo University, Ile-Ife, Nigeria</p>
                      <p className="text-gray-400 text-sm">August 2016 - February 2020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 cursor-hover">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Training & Certifications</h3>
                  <div className="space-y-4">
                    {[
                      "DevOps and Cloud Engineering (In Progress) - KodeKloud",
                      "Complete React Developer in 2022 - Zero to Mastery (Udemy)",
                      "Become a Software Developer - LinkedIn Learning",
                      "Web Development with Python and JavaScript - CS50 by Harvard",
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <p className="text-gray-300">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="py-20" gradientColor="from-pink-500/10 via-purple-500/5 to-blue-500/10">
        <Container>
          <ContactForm />
        </Container>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50" role="contentinfo">
        <Container>
          <div className="text-center">
            <p className="text-gray-400">© 2025 Olusola David AKINBODE. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
          </div>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg z-50 cursor-hover"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
