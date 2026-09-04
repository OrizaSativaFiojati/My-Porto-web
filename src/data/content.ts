export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutContent {
  title: string;
  description: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    gpa: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillsContent {
  languages: string[];
  frontend: string[];
  backend: string[];
  devops: string[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
}

export interface PortfolioContent {
  personal: PersonalInfo;
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillsContent;
  contact: ContactContent;
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: "Oriza Sativa",
    role: "Fullstack Developer & Software Engineer",
    location: "Jakarta, Indonesia",
    email: "oriza.sativa.fiojati@gmail.com",
    github: "https://github.com/OrizaSativaFiojati",
    linkedin: "https://linkedin.com/in/oriza-sativa-fiojati",
    resumeUrl: "/resume.pdf",
  },
  hero: {
    headline: "Hi, I'm Oriza Sativa",
    subheadline: "Engineering scalable web applications with Golang, React, Next.js, and TypeScript.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Download CV",
  },
  about: {
    title: "About Me",
    description: "Fullstack Developer with experience in engineering scalable web applications using Golang, React, Next.js, and TypeScript. Proficient in microservices architecture, REST API integration, master data management with Prisma ORM, and implementing Role-Based Access Control (RBAC). Adept at building operational dashboards, checkout flows, and CMS.",
    education: {
      institution: "Gunadarma University",
      degree: "S1 Informatics",
      period: "Jun 2019 - Sep 2023",
      gpa: "3.84 / 4.00",
    },
  },
  experience: [
    {
      period: "Apr 2025 – Present",
      role: "Freelance Frontend Programmer",
      company: "VOTERA.ID",
      description: "Built and implemented frontend architecture for Checkout System and Content Management System (CMS) using React.js and Tailwind CSS. Implemented automated CI/CD pipelines using GitHub Actions.",
    },
    {
      period: "Aug 2025 – Feb 2026",
      role: "Fullstack Developer Intern",
      company: "PT. Infracom Technology",
      description: "Engineered modular backend services utilizing Golang and Microservices architecture. Developed Asset Management & Request System web applications using Next.js, React (TypeScript), and Tailwind CSS.",
    },
    {
      period: "Oct 2023 – Nov 2023",
      role: "Backend Programmer Intern",
      company: "PT Mitra Teknologi Gemilang",
      description: "Contributed to the development of the Tactical and Operational Support System application for the Regional Police of Yogyakarta (Polda DIY) using Python.",
    },
  ],
  projects: [
    {
      title: "My-Porto-Web",
      description: "Modern developer portfolio built with Next.js, Framer Motion, and Tailwind CSS with custom glassmorphism styling.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/OrizaSativaFiojati/My-Porto-web",
      liveUrl: "#",
    },
  ],
  skills: {
    languages: ["Golang", "TypeScript", "JavaScript", "Python"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
    backend: ["REST API Design", "Microservices Architecture", "Prisma ORM", "BigQuery"],
    devops: ["Git", "GitHub Actions", "Postman", "Apidog", "Notion", "draw.io"],
  },
  contact: {
    title: "Let's Connect & Work Together",
    subtitle: "Looking for a dedicated Fullstack / Frontend Developer? Feel free to get in touch.",
  },
};
