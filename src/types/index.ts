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
