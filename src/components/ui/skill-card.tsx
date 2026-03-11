import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  name: string
}

export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 group cursor-pointer">
      {/* Icon */}
      <div className="mb-3 transition-transform duration-300 group-hover:scale-110">{icon}</div>

      {/* Skill Name */}
      <p className="text-white text-sm font-medium text-center leading-tight">{name}</p>
    </div>
  )
}
