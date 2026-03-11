import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: "Olusola Akinbode - Full Stack Developer & Software Engineer Portfolio",
    template: "%s | Olusola David AKINBODE",
  },
  description:
    "Experienced Full Stack Developer with 4+ years of expertise in React, Node.js, Python, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities. Specializing in scalable web applications, DevOps, and UI/UX design.",
  keywords: [
    // Primary Keywords
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    // Technical Skills
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Engineer",
    // Technologies
    "React.js",
    "Node.js",
    "Python",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Express.js",
    "FastAPI",
    "Flask",
    "Docker",
    "AWS",
    "Git",
    "REST API",
    "GraphQL",
    // UI/UX & Design
    "UI/UX Designer",
    "Responsive Web Design",
    "Mobile-First Design",
    "Tailwind CSS",
    "Bootstrap",
    "SASS/SCSS",
    "Figma",
    "Adobe XD",
    // DevOps & Tools
    "DevOps Engineer",
    "CI/CD",
    "Jenkins",
    "Nginx",
    "Firebase",
    "Vercel",
    "Netlify",
    // Location & Availability
    "Nigeria Developer",
    "Remote Developer",
    "Freelance Developer",
    "Contract Developer",
    // Personal Branding
    "Olusola David Akinbode",
    "Olusola Akinbode",
    "AKINBODE",
    "olusolaDav",
    // Services
    "Web Application Development",
    "E-commerce Development",
    "Custom Software Development",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "SEO Optimization",
    // Industries
    "Fintech Developer",
    "EdTech Developer",
    "SaaS Developer",
    "Startup Developer",
  ],
  authors: [{ name: "Olusola David AKINBODE", url: "https://olusoladavid.dev" }],
  creator: "Olusola David AKINBODE",
  publisher: "Olusola David AKINBODE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://oakinbode.vercel.app"),
  alternates: {
    canonical: "https://oakinbode.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oakinbode.vercel.app",
    title: "Olusola David AKINBODE - Full Stack Developer & Software Engineer",
    description:
      "Experienced Full Stack Developer with 4+ years of expertise in React, Node.js, Python, TypeScript, and modern web technologies. Specializing in scalable web applications, DevOps, and UI/UX design.",
    siteName: "Olusola David AKINBODE - Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olusola David AKINBODE - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Olusola David AKINBODE - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olusola David AKINBODE - Full Stack Developer & Software Engineer",
    description:
      "Experienced Full Stack Developer with 4+ years of expertise in React, Node.js, Python, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities.",
    images: ["/images/og-image.png"],
    creator: "@olusola_dav",
    site: "@olusola_dav",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/images/logo.png", color: "#06b6d4" }],
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Olusola David AKINBODE",
    "application-name": "Olusola David AKINBODE",
    "msapplication-TileColor": "#06b6d4",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ysZkmo0gjb7ozvzVwj2HuHWxyZGPZpRFhB1emhEohB4" />
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  )
}
