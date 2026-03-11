"use client"

import { GradientOutlineBorder } from "./gradient-outline-border"
import type { ReactNode } from "react"

interface GradientBorderProps {
  children: ReactNode
  className?: string
  gradientClassName?: string
  containerClassName?: string
  borderWidth?: string
  blur?: string
  opacity?: string
  hoverOpacity?: string
}

export function GradientBorder({
  children,
  className = "",
  gradientClassName = "from-purple-500 via-pink-500 to-blue-500",
  containerClassName = "",
}: GradientBorderProps) {
  // Convert Tailwind gradient classes to actual colors
  const getColorsFromGradient = (gradientClass: string) => {
    if (gradientClass.includes("purple") && gradientClass.includes("pink") && gradientClass.includes("blue")) {
      return ["#8b5cf6", "#ec4899", "#3b82f6"]
    }
    if (gradientClass.includes("cyan") && gradientClass.includes("blue")) {
      return ["#06b6d4", "#3b82f6"]
    }
    if (gradientClass.includes("green") && gradientClass.includes("emerald")) {
      return ["#10b981", "#059669"]
    }
    if (gradientClass.includes("orange") && gradientClass.includes("red")) {
      return ["#f97316", "#ef4444"]
    }
    // Default gradient
    return ["#8b5cf6", "#ec4899", "#3b82f6"]
  }

  return (
    <GradientOutlineBorder className={containerClassName} gradientColors={getColorsFromGradient(gradientClassName)}>
      <div className={className}>{children}</div>
    </GradientOutlineBorder>
  )
}
