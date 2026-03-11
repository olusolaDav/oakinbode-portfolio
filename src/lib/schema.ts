import { seoData, personalInfo } from "@/data/personal"

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: seoData.description,
    url: seoData.siteUrl,
    sameAs: ["https://github.com/olusolaDav", "https://www.linkedin.com/in/olusoladav/", "https://x.com/olusola_dav"],
    address: {
      "@type": "PostalAddress",
      addressCountry: personalInfo.location,
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    knowsAbout: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "JavaScript",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Obafemi Awolowo University",
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Trade Easier",
        description: "Software Developer - Fullstack and DevOps",
      },
      {
        "@type": "Organization",
        name: "Symbols App Inc",
        description: "Web Developer / QA Tester",
      },
    ],
  }
}
