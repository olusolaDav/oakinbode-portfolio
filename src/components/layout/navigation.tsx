"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import type { PersonalInfo } from "@/types"

interface NavigationProps {
  personalInfo: PersonalInfo
}

export function Navigation({ personalInfo }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navigationItems = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100

      setScrollProgress(Math.min(progress, 100))

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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/30 z-50 transition-all duration-300">
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-150 ease-out" 
           style={{ width: `${scrollProgress}%` }} />

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Olusola David AKINBODE"
                className="w-8 h-8 rounded-full border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300 cursor-hover"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300" />
            </div>
            <h1 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 cursor-hover">
              {personalInfo.name}
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1" role="menubar">
          {navigationItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 cursor-hover group ${
                activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`}
              role="menuitem"
              aria-label={`Navigate to ${item.toLowerCase()} section`}
            >
              {item}
              {/* Active indicator */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                activeSection === item.toLowerCase() ? "w-full" : "group-hover:w-1/2"
              }`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-cyan-400 hover:bg-cyan-400/10 cursor-hover transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="relative">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </div>
        </Button>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen 
          ? "max-h-96 opacity-100 translate-y-0" 
          : "max-h-0 opacity-0 -translate-y-4"
      }`}>
        <div className="bg-slate-900/98 backdrop-blur-lg border-t border-slate-700/30" role="menu">
          <div className="container mx-auto px-6 py-6 space-y-2">
            {navigationItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 cursor-hover group ${
                  activeSection === item.toLowerCase() 
                    ? "text-cyan-400 bg-cyan-400/10" 
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                role="menuitem"
                aria-label={`Navigate to ${item.toLowerCase()} section`}
              >
                <span className="flex items-center justify-between">
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
