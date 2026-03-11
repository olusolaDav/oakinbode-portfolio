"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Track mouse position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Track mouse clicks
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Track hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-hover")

      setIsHovering(isHoverable)
    }

    // Add event listeners
    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      // Clean up
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, []) // Empty dependency array - only run once on mount

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-5 h-5"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? "border-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/50 scale-150"
              : "border-white/50 bg-white/10"
          } ${isClicking ? "scale-75" : ""}`}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-1 h-1"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-500 ${
            isHovering ? "bg-cyan-400/60 scale-[2]" : "bg-white/30"
          }`}
        />
      </div>
    </>
  )
}
