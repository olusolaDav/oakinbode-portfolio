"use client"

import { MorphingBlob } from "@/components/effects/advanced-animations"

interface SectionTransitionProps {
  variant?: "simple" | "gradient" | "dots" | "wave" | "zigzag"
  className?: string
}

export function SectionTransition({ variant = "gradient", className = "" }: SectionTransitionProps) {
  const renderTransition = () => {
    switch (variant) {
      case "simple":
        return (
          <div className="section-divider mx-auto max-w-xs" />
        )

      case "gradient":
        return (
          <div className="section-divider-gradient mx-auto" />
        )

      case "dots":
        return (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }}></div>
          </div>
        )

      case "wave":
        return (
          <div className="relative h-16 w-full overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,60 Q300,20 600,60 T1200,60 V120 H0 V60 Z"
                fill="url(#waveGradient)"
                className="animate-pulse"
              />
            </svg>
          </div>
        )

      case "zigzag":
        return (
          <div className="relative h-8 w-full flex justify-center">
            <svg width="200" height="32" viewBox="0 0 200 32" className="text-cyan-400/50">
              <path
                d="M10,16 L30,8 L50,24 L70,8 L90,24 L110,8 L130,24 L150,8 L170,24 L190,16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            </svg>
          </div>
        )

      default:
        return (
          <div className="section-divider-gradient mx-auto" />
        )
    }
  }

  return (
    <div className={`py-8 lg:py-12 ${className}`}>
      {renderTransition()}
    </div>
  )
}

// Enhanced section separator with decorative elements
interface EnhancedSectionSeparatorProps {
  title?: string
  subtitle?: string
  showDecorations?: boolean
  className?: string
}

export function EnhancedSectionSeparator({
  title,
  subtitle,
  showDecorations = true,
  className = ""
}: EnhancedSectionSeparatorProps) {
  return (
    <div className={`relative py-16 lg:py-24 ${className}`}>
      {/* Background decorations */}
      {showDecorations && (
        <>
          <MorphingBlob 
            className="top-8 left-8" 
            color="from-cyan-500/10 to-blue-500/10" 
            size="lg" 
          />
          <MorphingBlob 
            className="bottom-8 right-8" 
            color="from-purple-500/10 to-pink-500/10" 
            size="md" 
          />
          <MorphingBlob 
            className="top-1/2 left-1/4 transform -translate-y-1/2" 
            color="from-emerald-500/10 to-teal-500/10" 
            size="sm" 
          />
        </>
      )}

      <div className="relative z-10 text-center">
        {title && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary mb-4">
            {title}
          </h2>
        )}
        
        {subtitle && (
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-pink-500"></div>
        </div>
      </div>
    </div>
  )
}

// Smooth scroll transition component
interface SmoothScrollTransitionProps {
  children: React.ReactNode
  offset?: number
}

export function SmoothScrollTransition({ 
  children, 
  offset = 100 
}: SmoothScrollTransitionProps) {
  const scrollToNext = () => {
    const currentSection = document.activeElement?.closest('section')
    if (currentSection) {
      const nextSection = currentSection.nextElementSibling as HTMLElement
      if (nextSection) {
        const targetPosition = nextSection.offsetTop - offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="relative">
      {children}
      
      {/* Scroll indicator */}
      <div className="flex justify-center py-8">
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <div className="text-xs uppercase tracking-wide">Scroll</div>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent group-hover:from-cyan-400"></div>
          <div className="w-2 h-2 border border-gray-400 group-hover:border-cyan-400 transform rotate-45 animate-bounce"></div>
        </button>
      </div>
    </div>
  )
}