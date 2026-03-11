"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface GradientOutlineBorderProps {
  children: ReactNode
  className?: string
  gradientColors?: string[]
  borderWidth?: number
  glowIntensity?: number
}

export function GradientOutlineBorder({
  children,
  className = "",
  gradientColors = [
    "#06b6d4", // cyan-500
    "#8b5cf6", // violet-500
    "#ec4899", // pink-500
    "#3b82f6", // blue-500
    "#06b6d4", // cyan-500 (loop back)
  ],
  borderWidth = 0.5, // Changed from 1 to 0.5
  glowIntensity = 0.8,
}: GradientOutlineBorderProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const gradientString = gradientColors.join(", ")

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Static gradient border */}
      <div
        className="absolute inset-0 rounded-lg opacity-100 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${gradientString})`,
          padding: `${borderWidth}px`,
          filter: `blur(${isHovering ? 0.5 : 0}px)`, // No blur by default, slight blur on hover
          transform: `scale(${isHovering ? 1.01 : 1})`, // Reduced scale from 1.02 to 1.01
        }}
      >
        <div className="w-full h-full bg-slate-900 rounded-lg" />
      </div>

      {/* Enhanced glow on hover */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, ${glowIntensity * 1.5}) 0%, transparent 70%)`,
            filter: "blur(12px)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
