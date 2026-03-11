"use client"
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaSass, FaAws } from "react-icons/fa"
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiGraphql,
  SiGo,
  SiFastapi,
  SiFlask,
  SiJenkins,
  SiNginx,
  SiFigma,
  SiChakraui,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { SectionHeading } from "@/components/ui/section-heading"

const skills = [
  // Frontend Frameworks (4 skills)
  { name: "React.js", icon: <FaReact className="w-10 h-10 text-[#61dafb]" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="w-10 h-10 text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-[#3178c6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-[#f7df1e]" /> },

  // Backend (4 skills)
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-[#83cd29]" /> },
  { name: "Python", icon: <FaPython className="w-10 h-10 text-[#3776ab]" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-10 h-10 text-[#009688]" /> },
  { name: "Flask", icon: <SiFlask className="w-10 h-10 text-white" /> },

  // Databases (3 skills)
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#4db33d]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#336791]" /> },
  { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-[#00758f]" /> },

  // Styling (6 skills)
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-[#06b6d4]" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10 text-[#7952b3]" /> },
  { name: "SASS", icon: <FaSass className="w-10 h-10 text-[#cf649a]" /> },
  { name: "Figma", icon: <SiFigma className="w-10 h-10 text-[#f24e1e]" /> },
  { name: "Chakra UI", icon: <SiChakraui className="w-10 h-10 text-[#319795]" /> },
  {
    name: "Shadcn/ui",
    icon: (
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xs">
        UI
      </div>
    ),
  },

  // Tools & DevOps (8 skills)
  { name: "Git", icon: <FaGitAlt className="w-10 h-10 text-[#f05032]" /> },
  { name: "Docker", icon: <FaDocker className="w-10 h-10 text-[#0db7ed]" /> },
  { name: "Jenkins", icon: <SiJenkins className="w-10 h-10 text-[#d24939]" /> },
  { name: "Nginx", icon: <SiNginx className="w-10 h-10 text-[#009639]" /> },
  { name: "AWS", icon: <FaAws className="w-10 h-10 text-[#ff9900]" /> },
  { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-[#ffca28]" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-10 h-10 text-[#e10098]" /> },
  { name: "Go Lang", icon: <SiGo className="w-10 h-10 text-[#00add8]" /> },
]

export function SkillsSection() {
  // Triple the array for seamless infinite scrolling
  const allSkills = [...skills, ...skills, ...skills]

  return (
    <div id="skills" className="py-6">
      <div className="container mx-auto px-2">
        {/* Section Heading */}
        <SectionHeading title="My Skills" />

        {/* Scrolling Skills Container */}
        <div className="relative overflow-hidden">
          {/* CSS Animation */}
          <style jsx>{`
            @keyframes scroll-skills {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
          `}</style>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Skills */}
          <div
            className="flex gap-8"
            style={{
              animation: "scroll-skills 45s linear infinite",
              width: "max-content",
            }}
          >
            {allSkills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 group cursor-pointer">
                {/* Skill Card - Matching the reference design */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  {/* Icon */}
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>

                  {/* Skill Name */}
                  <p className="text-white text-sm font-medium text-center leading-tight">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
