"use client"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className = "", 
  centered = true,
  size = "lg" 
}: SectionHeadingProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-2xl md:text-3xl"
      case "md":
        return "text-3xl md:text-4xl"
      case "lg":
        return "text-4xl md:text-5xl lg:text-6xl"
      case "xl":
        return "text-5xl md:text-6xl lg:text-7xl"
      default:
        return "text-4xl md:text-5xl lg:text-6xl"
    }
  }

  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 lg:mb-20 ${className}`}>
      {/* Enhanced Title with Multiple Effects */}
      <div className="relative inline-block">
        <h2 className={`${getSizeClasses()} font-bold text-white relative z-10`}>
          {/* Main gradient text */}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            {title}
          </span>
          
          {/* Glow effect layer */}
          <div className={`absolute inset-0 ${getSizeClasses()} font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent opacity-50 blur-sm -z-10`}>
            {title}
          </div>
        </h2>

        {/* Decorative underline */}
        <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
