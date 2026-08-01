export interface NavLink {
  label: string
  path: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
}

export interface Internship {
  role: string
  company: string
  description: string
}

export interface Certification {
  issuer: string
  title: string
}

export interface Education {
  degree: string
  school: string
  period: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export type ProjectCategory =
  | 'featured'
  | 'backend'
  | 'frontend'
  | 'fullstack'
  | 'in-progress'
  | 'completed'

export type ProjectStatusTone = 'brand' | 'emerald' | 'amber'

export interface GalleryProject {
  id: string
  title: string
  description: string
  anchor: string
  statusLabel: string
  statusTone: ProjectStatusTone
  categories: ProjectCategory[]
  tech: string[]
  github: string
  liveDemo?: string
}

export interface CurrentFocus {
  title: string
  description: string
}
