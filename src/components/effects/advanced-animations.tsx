"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "bounceIn" | "zoomIn" | "slideInBottom"
  delay?: number
  duration?: number
  triggerOnce?: boolean
  threshold?: number
}

export function AnimatedElement({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  triggerOnce = true,
  threshold = 0.1
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, triggerOnce])

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeInUp":
        return "animate-fade-in-up"
      case "slideInLeft":
        return "animate-slide-in-left"
      case "slideInRight":
        return "animate-slide-in-right"
      case "bounceIn":
        return "animate-bounce-in"
      case "zoomIn":
        return "animate-zoom-in"
      case "slideInBottom":
        return "animate-slide-in-bottom"
      default:
        return "animate-fade-in-up"
    }
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        "reveal-animation",
        isVisible && "revealed",
        isVisible && getAnimationClass(),
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}

// Stagger animation component for lists
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight" | "bounceIn" | "zoomIn"
  delayIncrement?: number
  initialDelay?: number
}

export function StaggeredAnimation({
  children,
  className,
  animation = "fadeInUp", 
  delayIncrement = 100,
  initialDelay = 0
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedElement
          key={index}
          animation={animation}
          delay={initialDelay + (index * delayIncrement)}
        >
          {child}
        </AnimatedElement>
      ))}
    </div>
  )
}

// Parallax scroll effect component
interface ParallaxElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function ParallaxElement({
  children,
  className,
  speed = 0.8,
  offset = 0
}: ParallaxElementProps) {
  const [scrollY, setScrollY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const transform = `translateY(${(scrollY * speed) + offset}px)`

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ transform }}
    >
      {children}
    </div>
  )
}

// Morphing blob component for decorative elements
interface MorphingBlobProps {
  className?: string
  color?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function MorphingBlob({
  className,
  color = "from-purple-500/20 to-pink-500/20",
  size = "md"
}: MorphingBlobProps) {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-16 h-16"
      case "md":
        return "w-24 h-24"
      case "lg":
        return "w-32 h-32"
      case "xl":
        return "w-48 h-48"
      default:
        return "w-24 h-24"
    }
  }

  return (
    <div
      className={cn(
        getSizeClass(),
        "absolute rounded-full blur-2xl animate-morphing",
        `bg-gradient-to-br ${color}`,
        className
      )}
    />
  )
}

// Enhanced gradient border component
interface EnhancedGradientBorderProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  borderWidth?: number
  borderRadius?: string
  animated?: boolean
}

export function EnhancedGradientBorder({
  children,
  className,
  colors = ["#06b6d4", "#8b5cf6", "#ec4899"],
  borderWidth = 2,
  borderRadius = "rounded-xl",
  animated = false
}: EnhancedGradientBorderProps) {
  const gradientColors = colors.join(", ")
  
  return (
    <div
      className={cn(
        "relative p-[1px]",
        borderRadius,
        animated && "animate-gradient-pulse",
        className
      )}
      style={{
        background: `linear-gradient(45deg, ${gradientColors})`,
        backgroundSize: animated ? "200% 200%" : "100% 100%"
      }}
    >
      <div
        className={cn(
          "relative bg-slate-900/95 backdrop-blur-sm w-full h-full",
          borderRadius
        )}
      >
        {children}
      </div>
    </div>
  )
}