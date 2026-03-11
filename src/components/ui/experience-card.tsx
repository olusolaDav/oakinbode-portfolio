"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GradientOutlineBorder } from "@/components/effects/gradient-outline-border"

function calculateDuration(period: string): string {
  const parts = period.split(" - ")
  if (parts.length !== 2) return period

  const startStr = parts[0].trim()
  const endStr = parts[1].trim()

  // Function to abbreviate month names
  const abbreviateMonths = (dateStr: string): string => {
    return dateStr
      .replace(/September/gi, "Sept")
      .replace(/February/gi, "Feb")
      .replace(/November/gi, "Nov")
      .replace(/December/gi, "Dec")
      .replace(/January/gi, "Jan")
      .replace(/October/gi, "Oct")
  }

  const abbreviatedPeriod = `${abbreviateMonths(startStr)} - ${abbreviateMonths(endStr)}`

  // Parse start date
  const startDate = new Date(startStr)

  // Parse end date (handle "Present" case)
  const endDate = endStr.toLowerCase() === "present" ? new Date() : new Date(endStr)

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return abbreviatedPeriod // Return abbreviated version if parsing fails
  }

  // Calculate difference in months
  const yearDiff = endDate.getFullYear() - startDate.getFullYear()
  const monthDiff = endDate.getMonth() - startDate.getMonth()
  const totalMonths = yearDiff * 12 + monthDiff

  if (totalMonths < 1) {
    return `Less than 1 month (${abbreviatedPeriod})`
  } else if (totalMonths < 12) {
    return `${totalMonths} month${totalMonths === 1 ? "" : "s"} (${abbreviatedPeriod})`
  } else {
    const years = Math.floor(totalMonths / 12)
    const remainingMonths = totalMonths % 12

    if (remainingMonths === 0) {
      return `${years} year${years === 1 ? "" : "s"} (${abbreviatedPeriod})`
    } else {
      return `${years} year${years === 1 ? "" : "s"} ${remainingMonths} month${remainingMonths === 1 ? "" : "s"} (${abbreviatedPeriod})`
    }
  }
}

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  location: string
  logo: string
  color: string
  description?: string
}

export function ExperienceCard({ company, role, period, location, logo, color, description }: ExperienceCardProps) {
  // Convert color prop to actual colors
  const getColorsFromColorProp = (colorProp: string) => {
    if (colorProp.includes("cyan") && colorProp.includes("blue")) {
      return ["#06b6d4", "#3b82f6"]
    }
    if (colorProp.includes("green") && colorProp.includes("emerald")) {
      return ["#10b981", "#059669"]
    }
    if (colorProp.includes("purple") && colorProp.includes("pink")) {
      return ["#8b5cf6", "#ec4899"]
    }
    if (colorProp.includes("orange") && colorProp.includes("red")) {
      return ["#f97316", "#ef4444"]
    }
    return ["#8b5cf6", "#ec4899", "#3b82f6"]
  }

  // Determine background color based on company
  const getLogoBackground = (companyName: string, logoPath: string) => {
    if (!logoPath.startsWith("/")) return `bg-gradient-to-r ${color}`

    if (companyName === "Symbols App Inc") return "bg-black"
    if (companyName === "Alot Digital Solutions") return "bg-white"
    if (companyName === "Trade Easier") return "bg-white"
    if (companyName === "MobileXcetera") return "bg-white"
    if (companyName === "Destiny International College") return "bg-white"

    return "bg-white" // Default for other image logos
  }

  return (
    <div className="group">
      <GradientOutlineBorder 
        gradientColors={getColorsFromColorProp(color)}
        className="enhanced-hover-lift card-hover-effect"
      >
        <Card className="bg-slate-900/90 backdrop-blur-sm border-0 group-hover:bg-slate-800/90 transition-all duration-500 overflow-hidden">
          <CardContent className="p-6 lg:p-8 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Duration Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-400/30">
                  <span className="text-sm text-cyan-400 font-semibold">
                    {calculateDuration(period)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 lg:space-x-6">
              {/* Enhanced Company Logo */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                <div
                  className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 ${getLogoBackground(company, logo)}`}
                >
                  {logo.startsWith("/") ? (
                    <img
                      src={logo || "/placeholder.svg"}
                      alt={`${company} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <span className="text-lg lg:text-xl">{logo}</span>
                  )}
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="flex-1 min-w-0 space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-white uppercase tracking-wide group-hover:text-gradient-primary transition-colors duration-300">
                    {role}
                  </h3>
                  <div className="flex flex-col space-y-1">
                    <p className="text-gray-300 font-medium">
                      {company}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                      <span>📍</span>
                      <span>{location}</span>
                    </p>
                  </div>
                </div>
                
                {description && (
                  <div className="pt-2">
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {description}
                    </p>
                  </div>
                )}

                {/* Interactive elements */}
                <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2 text-xs text-cyan-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Hover for details</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </GradientOutlineBorder>
    </div>
  )
}
