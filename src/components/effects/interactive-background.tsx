"use client"

import { useEffect, useState, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function InteractiveBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    setParticles(initialParticles)

    // Track mouse position with ref instead of state
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) particle.vx *= -1
          if (newY < 0 || newY > window.innerHeight) particle.vy *= -1

          // Mouse interaction
          const dx = mousePosition.current.x - newX
          const dy = mousePosition.current.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const force = (100 - distance) / 100
            newX -= (dx / distance) * force * 2
            newY -= (dy / distance) * force * 2
          }

          return {
            ...particle,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY)),
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []) // Empty dependency array - only run once on mount

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
            )
            if (distance < 150) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(6, 182, 212, 0.1)"
                  strokeWidth="1"
                  opacity={1 - distance / 150}
                />
              )
            }
            return null
          }),
        )}
      </svg>
    </div>
  )
}
