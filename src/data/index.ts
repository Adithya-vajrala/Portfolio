import { PROJECT_LINKS } from '@/constants'
import type {
  Certification,
  CurrentFocus,
  Education,
  GalleryProject,
  Internship,
  Project,
  SkillCategory,
} from '@/types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'JWT Authentication',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Context API',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'JDBC', 'Database Design'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'Postman'],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    skills: [
      'OOP',
      'Collections',
      'Exception Handling',
      'Data Structures',
      'Algorithms',
      'SDLC',
    ],
  },
]

export const CURRENT_FOCUS: CurrentFocus[] = [
  {
    title: 'Java Backend',
    description:
      'Deepening Java fundamentals, OOP design, and solid backend engineering.',
  },
  {
    title: 'Spring Boot Microservices',
    description:
      'Building scalable services with API Gateway, Eureka, and JWT security.',
  },
  {
    title: 'React + TypeScript',
    description:
      'Crafting fast, type-safe interfaces with modern React patterns.',
  },
  {
    title: 'System Design',
    description:
      'Learning to architect systems that scale, stay reliable, and stay maintainable.',
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Library Management System',
    description:
      'Developed a Java-based Library Management System with CRUD operations, secure login, and MySQL database integration using OOP principles and layered architecture.',
    tech: ['Java', 'MySQL', 'JDBC', 'OOPs'],
  },
  {
    title: 'QR-Based Food Ordering System',
    description:
      'Built a QR-based food ordering system that allows users to access digital menus and place orders with real-time tracking functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed and developed a responsive personal portfolio website using HTML and CSS with modern UI design and interactive hover effects.',
    tech: ['HTML', 'CSS'],
  },
]

export const PROJECTS_GALLERY: GalleryProject[] = [
  {
    id: 'skillbridge',
    title: 'SkillBridge',
    description:
      'A full-stack service marketplace connecting customers with professionals — built with Spring Boot microservices, JWT auth, and a React frontend.',
    anchor: '#featured-project',
    statusLabel: 'Completed',
    statusTone: 'emerald',
    categories: ['featured', 'backend', 'fullstack', 'completed'],
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Cloud Gateway',
      'Eureka',
    ],
    github: PROJECT_LINKS.skillbridge.github,
    liveDemo: PROJECT_LINKS.skillbridge.liveDemo,
  },
  {
    id: 'urbanwear',
    title: 'UrbanWear',
    description:
      'A responsive e-commerce storefront built with React, TypeScript, React Router, and Context API.',
    anchor: '#urbanwear',
    statusLabel: 'Completed',
    statusTone: 'emerald',
    categories: ['frontend', 'completed'],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    github: PROJECT_LINKS.urbanwear.github,
    liveDemo: PROJECT_LINKS.urbanwear.liveDemo,
  },

]

export const INTERNSHIPS: Internship[] = [
  {
    role: 'Web Developer Intern',
    company: 'SkillCraft Technology',
    description:
      'Developed responsive web pages using HTML, CSS, JavaScript, and React. Fixed UI bugs and collaborated in Agile-based development.',
  },
  {
    role: 'Data Analyst Associate Intern',
    company: 'Excelerate',
    description:
      'Worked on dashboard creation, reporting, and data visualization tasks to support data-driven decisions.',
  },
  {
    role: 'Data Science Intern',
    company: 'Eduexpose.in',
    description:
      'Performed data preprocessing and basic machine learning analysis while documenting project insights.',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    issuer: 'Infosys ICT Academy',
    title: 'Java Software Developer Training Program',
  },
  {
    issuer: 'Forage',
    title: 'Solutions Architecture Job Simulation',
  },
]

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech - Computer Science and Engineering',
    school: 'Gayatri Vidya Parishad College',
    period: '2022 - 2026',
  },
]
