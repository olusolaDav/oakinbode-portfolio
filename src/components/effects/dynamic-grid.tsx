"use client"

import { useEffect, useState, useCallback } from "react"

export function DynamicGrid() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Use useCallback to memoize event handlers
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    // Add event listeners
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Initial scroll position
    setScrollY(window.scrollY)

    return () => {
      // Clean up event listeners
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleScroll, handleMouseMove])

  // Calculate grid size based on scroll position
  const baseSize = 50
  const scrollFactor = Math.min(scrollY / 1000, 1)
  const gridSize = baseSize + scrollFactor * 30

  // Calculate mouse influence
  const mouseInfluence = 0.1
  const offsetX = (mousePosition.x - window.innerWidth / 2) * mouseInfluence
  const offsetY = (mousePosition.y - window.innerHeight / 2) * mouseInfluence

  return (
    <>
      {/* Main grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, ${0.03 + scrollFactor * 0.02}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, ${0.03 + scrollFactor * 0.02}) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          transform: `translate(${offsetX}px, ${offsetY}px)`,
          transition: "background-size 0.5s ease-out",
        }}
      />

      {/* Secondary grid for depth */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, ${0.02 + scrollFactor * 0.01}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, ${0.02 + scrollFactor * 0.01}) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
          transform: `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`,
          transition: "background-size 0.5s ease-out",
        }}
      />

      {/* Accent dots at grid intersections */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: `${gridSize * 4}px ${gridSize * 4}px`,
          transform: `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px)`,
          transition: "background-size 0.5s ease-out",
        }}
      />
    </>
  )
}
