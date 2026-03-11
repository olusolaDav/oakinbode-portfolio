// Create a reusable component for project cards with gradient borders
"use client"

import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  role: string
  codeSnippet: string
  showGithub?: boolean
  category?: string
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  role,
  codeSnippet,
  showGithub = true,
  category,
}: ProjectCardProps) {
  return (
    <div className="space-y-2">
      {/* Learning Project Badge */}
      {category === "Learning Project" && (
        <div className="flex justify-start mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-1.5 animate-pulse"></span>
            Learning Project
          </span>
        </div>
      )}
      
      {/* Project Preview */}
      <GradientOutlineBorder gradientColors={["#8b5cf6", "#ec4899", "#3b82f6"]}>
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border-0">
          {/* Browser Header */}
          <div className="flex items-center justify-between px-4 py-1 bg-slate-800/80 border-b border-slate-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-cyan-400 text-sm font-medium">{title}</div>
          </div>

          {/* Project Image */}
          <div className="relative group">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              {showGithub && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {showGithub ? "Live Demo" : "Visit Website"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </GradientOutlineBorder>

      {/* Code Snippet */}
      <GradientOutlineBorder gradientColors={["#06b6d4", "#3b82f6", "#8b5cf6"]}>
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 border-0">
          <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
            <code>
              <span className="text-pink-400">const</span> <span className="text-blue-300">project</span>{" "}
              <span className="text-gray-400">=</span> <span className="text-yellow-300">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-blue-300">name:</span> <span className="text-green-300">'{title}'</span>,{"\n"}
              {"  "}
              <span className="text-blue-300">tools:</span> [
              {technologies.map((tech, i) => (
                <span key={i}>
                  <span className="text-green-300">'{tech}'</span>
                  {i < technologies.length - 1 ? ", " : ""}
                </span>
              ))}
              ],{"\n"}
              {"  "}
              <span className="text-blue-300">myRole:</span> <span className="text-green-300">'{role}'</span>,{"\n"}
              {"  "}
              <span className="text-blue-300">description:</span>{" "}
              <span className="text-green-300">'{description}'</span>,{"\n"}
              <span className="text-yellow-300">{"}"}</span>;
            </code>
          </pre>
        </div>
      </GradientOutlineBorder>
    </div>
  )
}
