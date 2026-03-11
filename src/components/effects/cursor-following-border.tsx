"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"

interface CursorFollowingBorderProps {
  children: ReactNode
  className?: string
  borderColor?: string
  glowColor?: string
  glowSize?: number
}

export function CursorFollowingBorder({
  children,
  className = "",
  borderColor = "rgba(139, 92, 246, 0.5)",
  glowColor = "rgba(139, 92, 246, 0.8)",
  glowSize = 100,
}: CursorFollowingBorderProps) {
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

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Base border */}
      <div className="absolute inset-0 rounded-lg border border-slate-700/50 pointer-events-none" />

      {/* Cursor-following glow effect */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 70%)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: "xor",
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
