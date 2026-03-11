import type { Project } from "@/types"

// Company Projects (moved to top)
export const companyProjects: Project[] = [
 {
  title: 'Accuvice Solutions (Data Protection Compliance Platform)',
  description: 'Developed a comprehensive multi-tenant web application for Accuvice Solutions, transforming their business from a static website into a robust compliance platform. Features 5 specialized role-based dashboards (Admin, Client, Auditor, Blogger, Collaborator) with advanced form management, AI-powered assistance, automated workflows, and complete client lifecycle management for data protection compliance services.',
  image: '/images/accuvice.png',
  technologies: [
    'Next.js', 
    'TypeScript', 
    'React', 
    'MongoDB', 
    'Tailwind CSS', 
    'Radix UI', 
    'Framer Motion', 
    'OpenAI', 
    'Cloudinary', 
    'JWT Authentication', 
    'Zod Validation', 
    'React Hook Form',
    'Nodemailer',
    'Recharts'
  ],
  liveUrl: 'https://accuvice.ng',
  githubUrl: '',
  role: 'Full-Stack Developer',
  featured: true,
  codeSnippet: `const accuviceWebPlatform = {
  name: 'Accuvice Data Protection Platform',
  tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'OpenAI', 'Cloudinary', 'Radix UI', 'Framer Motion'],
  myRole: 'Full-Stack Developer',
  description: 'Enterprise-grade compliance platform with multi-role dashboards, AI-powered form assistance, automated workflows, and comprehensive audit management systems.',
  features: ['Multi-tenant architecture', 'Role-based access control', 'AI query assistant', 'Automated reporting', 'Real-time collaboration']
};`
},
{
  title: "Academic Portfolio Website",
  description:
    "Developed a comprehensive academic portfolio and content management platform for a UK-based PhD educator. The website features a professional homepage showcasing academic credentials, experience, education, and publications. Includes a full blog system with comments, resource management for teaching materials with Cloudinary integration, admin dashboard with analytics, role-based authentication, and extensive SEO optimization with structured data (JSON-LD), dynamic sitemaps, and UK-targeted meta tags for academic searches.",
  image: "/images/academic-portfolio-website.png",
  technologies: [
    "Next.js 16",
    "TypeScript",
    "MongoDB",
    "Tailwind CSS 4",
    "shadcn/ui",
    "Cloudinary",
    "Framer Motion",
    "React Hook Form",
    "Zod",
    "Recharts",
    "Resend API"
  ],
  liveUrl: "https://ngoziumoru.info",
  githubUrl: "",
  role: "Frontend Developer",
  featured: true,
  codeSnippet: `const academicPortfolio = {
  name: 'Academic Portfolio Website',
  tools: ['Next.js 16', 'TypeScript', 'MongoDB', 'Tailwind CSS 4', 'shadcn/ui', 'Cloudinary', 'Framer Motion'],
  myRole: 'Frontend Developer',
  description: 'Full-stack academic portfolio with blog, resource management, admin dashboard, and UK-targeted SEO optimization.',
};`
},
{
  title: "ALOT Digital Agency Platform",
  description:
    "Comprehensive digital agency platform offering end-to-end business solutions including web development, brand identity design, product design, and digital marketing services. Features a modern dashboard system, portfolio showcase, integrated booking system, blog management, payment processing, and multi-role authentication for seamless client and team management.",
  image: "/images/alot-digital-agency.png",
  technologies: [
    "Next.js", 
    "TypeScript", 
    "MongoDB", 
    "Tailwind CSS", 
    "Radix UI", 
    "Shadcn/ui",
    "Framer Motion", 
    "React Hook Form", 
    "Mongoose", 
    "Resend", 
    "Cloudinary",
    "NextAuth",
    "React Query"
  ],
  liveUrl: "https://agency.alotacademy.com",
  githubUrl: "",
  role: "Full-Stack Developer",
  featured: true,
  codeSnippet: `const alotAgencyPlatform = {
  name: 'ALOT Digital Agency Platform',
  tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Radix UI', 'Framer Motion'],
  myRole: 'Full-Stack Developer',
  description: 'Complete digital agency solution with portfolio management, client dashboard, booking system, and integrated business tools.',
};`,
},
{
  title: "Alot Academy Official Website",
  description:
    "Architected and built a full-stack digital academy platform with animated landing pages, admin/user dashboards for proposals, invoices, affiliate commissions, and blog management. Implemented real-time chat (Socket.io) with an OpenAI chatbot, Paystack payments, JWT auth with RBAC, Cloudinary uploads, Brevo emails, activity logging, notifications, multi-currency support, and dark/light mode",
  image: "/images/alot-academy.png",
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "MongoDB",
    "Mongoose",
    "Socket.io",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "Framer Motion",
    "TipTap Editor",
    "Paystack",
    "Cloudinary",
    "OpenAI",
    "Brevo",
    "Zod",
    "React Query",
    "JWT"
  ],
  liveUrl: "https://alotacademy.com",
  githubUrl: "",
  role: "Full Stack Developer",
  featured: true,
  codeSnippet: `const alotAcademy = {
  name: 'Alot Academy Official Website',
  tools: ['Next.js 16', 'React 19', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Shadcn/UI', 'Paystack', 'Cloudinary'  ],
  myRole: 'Full Stack Developer',
  description: 'Built a full-stack digital academy platform with animated landing pages, dashboards, real-time chat, payments, notifications, multi-currency support, and dark/light mode. Integrated OpenAI chatbot, JWT auth, RBAC, Cloudinary, Brevo emails, and activity logging.',
};`
},
{
  title: "ALOT Assessment Platform",
  description:
    "Built a comprehensive assessment platform for ALOT Digital Agency that enables administrators to create multi-stage technical assessments and allows candidates to take timed evaluations. Features include real-time auto-save, assessment integrity monitoring, AI-powered evaluation using OpenAI, drag-and-drop stage reordering, rich text and code editors, and automated email notifications for candidates.",
  image: "/images/alot-assessment.png",
  technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Radix UI", "OpenAI API", "JWT Auth", "React 19"],
  liveUrl: "https://test.alotacademy.com",
  githubUrl: "",
  role: "Full Stack Developer",
  featured: true,
  codeSnippet: `const alotAssessmentPlatform = {
  name: 'ALOT Assessment Platform',
  tools: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Radix UI', 'OpenAI API', 'JWT Auth', 'React 19'],
  myRole: 'Full Stack Developer',
  description: 'Comprehensive assessment platform with multi-stage evaluations, real-time auto-save, integrity monitoring, and AI-powered grading.',
};`
},
  {
    title: "Trade Easier Website",
    description:
      "Collaborated on developing the main website for Trade Easier, a platform that leverages AI technology to simplify stock analysis and enhance trading journeys. The website features a modern UI with smooth animations, responsive design, and seamless navigation between different sections including Home, Blog, Community, Support, and Learning resources.",
    image: "/images/trade-easier-website.png",
    technologies: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS", "Ant UI", "DaisyUI", "Framer Motion"],
    liveUrl: "https://tradeeasier.com",
    githubUrl: "",
    role: "Frontend Developer",
    featured: true,
    codeSnippet: `const tradeEasierWebsite = {
  name: 'Trade Easier Website',
  tools: ['Next.js', 'TypeScript', 'Strapi', 'Tailwind CSS', 'Ant UI', 'DaisyUI', 'Framer Motion'],
  myRole: 'Frontend Developer',
  description: 'Modern financial trading platform website with AI-powered features, animations, and responsive design.',
};`,
  },
    {
    title: "Trade Easier Learning Management System",
    description:
      "A comprehensive Learning Management System for Trade Easier, designed to help users invest in their financial potential through structured trading education. The platform features professional trading courses taught by Wall Street experts with 38+ years of experience, course enrollment system, progress tracking, and interactive learning modules. Built with a modern dark theme showcasing real trading chart backgrounds.",
    image: "/images/trade-easier-lms-updated.png",
    technologies: ["Next.js 14", "PostgreSQL", "REST API", "Dashboard", "Progressive Web App"],
    liveUrl: "https://learn.tradeeasier.com",
    githubUrl: "",
    role: "Fullstack Developer and DevOps",
    featured: true,
    codeSnippet: `const tradeLMS = {
  name: 'Trade Easier Learning Management System',
  tools: ['Next.js 14', 'PostgreSQL', 'REST API', 'Dashboard'],
  myRole: 'Fullstack Developer and DevOps',
  description: 'Role-based LMS for financial trading education with authentication, course management, and progress tracking.',
};`,
  },
    {
    title: "AI Overlords Complete Website",
    description:
      "Developed a modern, responsive website for AI Overlords from Figma design, showcasing AI services like ML, NLP, Gen AI, and Data Science. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.",
    image: "/images/ai-overlords-updated.png",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Figma to Code"],
    liveUrl: "https://www.aioverlords.io",
    githubUrl: "",
    role: "Frontend Developer",
    featured: true,
    codeSnippet: `const aiOverlords = {
  name: 'AI Overlords Complete Website',
  tools: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
  myRole: 'Frontend Developer',
  description: 'Modern AI services website with responsive design, dark/light mode, and performance optimization.',
};`,
  },
    {
    title: "D-lighter Tutor Platform",
    description:
      "Led the development of a comprehensive tutoring platform that connects students with qualified tutors across various subjects. The platform features tutor profiles, booking system, personalized learning paths, and responsive design for all devices.",
    image: "/images/d-lighter-tutor.png",
    technologies: ["Next.js", "Chakra UI", "Material UI", "MongoDB", "React", "SASS"],
    liveUrl: "https://www.d-lightertutor.com/",
    githubUrl: "",
    role: "Lead Frontend Developer",
    featured: true,
    codeSnippet: `const tutorPlatform = {
  name: 'D-lighter Tutor Platform',
  tools: ['Next.js', 'Chakra UI', 'Material UI', 'MongoDB', 'React', 'SASS'],
  myRole: 'Lead Frontend Developer',
  description: 'Comprehensive tutoring platform with student-tutor matching, booking system, and personalized learning paths.',
};`,
  },




  {
    title: "TransferPay",
    description:
      "A modern fintech platform that provides an alternative to traditional POS systems by enabling offline payment acceptance via bank transfers. The platform helps businesses avoid heavy POS charges and targets while offering a seamless payment experience. During my internship at MobileXcetera, I contributed to developing the user dashboard and frontend components of this innovative payment solution.",
    image: "/images/transferpay.png",
    technologies: ["React.js", "JavaScript", "CSS", "API Integration"],
    liveUrl: "https://transferpay.ng/",
    githubUrl: "",
    role: "Frontend Developer Intern",
    featured: true,
    codeSnippet: `const transferPay = {
  name: 'TransferPay',
  tools: ['React.js', 'JavaScript', 'CSS', 'API Integration'],
  myRole: 'Frontend Developer Intern',
  description: 'Modern fintech platform for offline payment acceptance via bank transfers, eliminating POS charges.',
};`,
  },
]

// Personal Projects (moved after company projects)
export const personalProjects: Project[] = [
  {
    title: "Multiplication Table MathGame",
    description:
      "An interactive math game designed to help children practice and master multiplication tables. Features timed challenges, progressive difficulty levels, score tracking, and an intuitive interface with Start, Stop, and Restart controls. Built with React.js for engaging educational gameplay. [Learning Project]",
    image: "/images/multiplication-mathgame.png",
    technologies: ["React.js", "JavaScript", "CSS", "HTML"],
    liveUrl: "https://mathgame-multiplicationtable.netlify.app",
    githubUrl: "https://github.com/olusolaDav/mathGame2",
    role: "Frontend Developer",
    featured: true,
    category: "Learning Project",
    codeSnippet: `const mathGame = {
  name: 'Multiplication Table MathGame',
  tools: ['React.js', 'JavaScript', 'CSS', 'HTML'],
  myRole: 'Frontend Developer',
  description: 'Interactive math game for children with timed challenges, progressive levels, and score tracking.',
};`,
  },
  {
    title: "Graphic Portfolio",
    description:
      "My personal portfolio showcasing graphic design work I created during my undergraduate studies. Features a collection of illustrations, digital art, and creative designs including the 'Monkey & Shark' series. Built with HTML/CSS, Bootstrap, and JavaScript to create an interactive gallery experience. [Learning Project]",
    image: "/images/graphic-portfolio.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    liveUrl: "https://olusoladav.netlify.app/",
    githubUrl: "https://github.com/olusolaDav/graphic-portfolio",
    role: "Web Developer/Designer",
    featured: false,
    category: "Learning Project",
    codeSnippet: `const graphicPortfolio = {
  name: 'Graphic Portfolio',
  tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
  myRole: 'Web Developer/Designer',
  description: 'Showcase of graphic design work with interactive gallery and responsive layout featuring illustrations and digital art.',
};`,
  },
  {
    title: "ChatScrum - Drag and Drop Task Board",
    description:
      "A comprehensive task management application featuring drag-and-drop functionality for organizing daily and weekly tasks. The platform includes user authentication (Sign-up/Sign-in), personalized dashboard with task categorization, and an intuitive interface for managing projects and breaking them down into defined 'sprints' of time, day, and week. [Learning Project]",
    image: "/images/chatscrum-dashboard.png",
    technologies: ["React.js", "JavaScript", "CSS", "Local Storage"],
    liveUrl: "https://chatscrumboard.netlify.app/",
    githubUrl: "https://github.com/olusolaDav/Scrumboard",
    role: "Frontend Developer",
    featured: false,
    category: "Learning Project",
    codeSnippet: `const scrumBoard = {
  name: 'ChatScrum - Drag and Drop Task Board',
  tools: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
  myRole: 'Frontend Developer',
  description: 'Comprehensive task management app with drag-and-drop functionality, user authentication, and sprint-based organization.',
};`,
  },
]

// Combined projects with company projects first, then personal projects
export const projects: Project[] = [...companyProjects, ...personalProjects]
