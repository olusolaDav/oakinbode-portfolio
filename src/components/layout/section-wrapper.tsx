"use client"

import { useState, type ReactNode } from "react"
import { Container } from "@/components/layout/container"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  gradientColor?: string
  variant?: "default" | "hero" | "content" | "full"
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  containerVariant?: "default" | "wide" | "narrow" | "full" | "experience" | "hero" | "content"
}

export function SectionWrapper({
  children,
  className = "",
  id,
  gradientColor = "from-purple-500/10 via-pink-500/5 to-blue-500/10",
  variant = "default",
  spacing = "lg",
  containerVariant = "default"
}: SectionWrapperProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getSpacingClasses = () => {
    switch (spacing) {
      case "none":
        return ""
      case "sm":
        return "py-12 md:py-16"
      case "md":
        return "py-16 md:py-20"
      case "lg":
        return "py-20 md:py-24 lg:py-32"
      case "xl":
        return "py-24 md:py-32 lg:py-40"
      default:
        return "py-20 md:py-24 lg:py-32"
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "hero":
        return "min-h-screen flex items-center"
      case "content":
        return "relative"
      case "full":
        return "w-full"
      default:
        return "relative"
    }
  }

  return (
    <section
      id={id}
      className={`relative transition-all duration-700 ease-out ${getVariantClasses()} ${getSpacingClasses()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColor} transition-all duration-700 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Animated border effects on hover */}
      <div
        className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Top border */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent h-px top-0" />
        {/* Bottom border */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent h-px bottom-0" />
        {/* Left border */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent w-px left-0" />
        {/* Right border */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent w-px right-0" />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.cyan.500),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.500),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.pink.500),transparent_70%)]" />
      </div>

      {/* Content wrapped in Container */}
      <Container variant={containerVariant} className="relative z-10">
        {children}
      </Container>
    </section>
  )
}
