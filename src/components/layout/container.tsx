import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  id?: string
  variant?: "default" | "wide" | "narrow" | "full" | "experience" | "hero" | "content"
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
}

export function Container({ 
  children, 
  className, 
  as: Component = "div", 
  id, 
  variant = "default",
  spacing = "md"
}: ContainerProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "wide":
        return "w-full max-w-8xl mx-auto"
      case "narrow":
        return "w-full max-w-4xl mx-auto"
      case "full":
        return "w-full"
      case "experience":
        return "w-full max-w-6xl mx-auto"
      case "hero":
        return "w-full max-w-7xl mx-auto"
      case "content":
        return "w-full max-w-5xl mx-auto"
      default:
        return "w-full max-w-7xl mx-auto"
    }
  }

  const getSpacingClasses = () => {
    switch (spacing) {
      case "none":
        return ""
      case "sm":
        return "px-4 sm:px-6 lg:px-8"
      case "md":
        return "px-6 sm:px-8 lg:px-12"
      case "lg":
        return "px-8 sm:px-12 lg:px-16"
      case "xl":
        return "px-12 sm:px-16 lg:px-20"
      default:
        return "px-6 sm:px-8 lg:px-12"
    }
  }

  return (
    <Component 
      id={id} 
      className={cn(getVariantClasses(), getSpacingClasses(), className)}
    >
      {children}
    </Component>
  )
}
