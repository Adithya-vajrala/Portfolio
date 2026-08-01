import type {
  Certification,
  Education,
  Internship,
  Project,
} from '@/types'

export const SKILLS: string[] = [
  'Java',
  'OOPs',
  'Collections',
  'JDBC',
  'SQL',
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'GitHub',
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
