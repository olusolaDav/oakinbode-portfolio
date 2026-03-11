export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone?: string
  location: string
  bio: string
  avatar?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

export interface Skill {
  name: string
  icon: string
  category: string
}

export interface Experience {
  company: string
  role: string
  period: string
  duration: string
  location: string
  logo: string
  color: string
  description?: string
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  role: string
  codeSnippet: string
  featured?: boolean
  category?: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
  description?: string
}

export interface Certification {
  name: string
  issuer: string
  date?: string
  url?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  socialLinks: SocialLink[]
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  author: string
  siteUrl: string
  image?: string
}
