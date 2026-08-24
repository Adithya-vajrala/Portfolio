import { memo } from 'react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiAlertTriangle,
  FiBox,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGrid,
  FiKey,
  FiLayers,
  FiLayout,
  FiLink,
  FiPackage,
  FiRefreshCw,
  FiServer,
  FiSettings,
  FiShare2,
} from 'react-icons/fi'
import { DiCss3, DiJava } from 'react-icons/di'
import {
  SiC,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

import { fadeInUp } from '@/animations'
import type { SkillCategory } from '@/types'

const CATEGORY_ICONS: Record<string, IconType> = {
  languages: FiCode,
  backend: FiServer,
  frontend: FiLayout,
  database: FiDatabase,
  tools: FiSettings,
  concepts: FiBox,
}

// Official brand icons where available; elegant Feather icons otherwise
const SKILL_ICONS: Record<string, IconType> = {
  Java: DiJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: FiDatabase,
  C: SiC,
  HTML5: SiHtml5,
  CSS3: DiCss3,
  'Spring Boot': SiSpringboot,
  'Spring Security': SiSpringsecurity,
  'Spring Data JPA': SiSpring,
  'JWT Authentication': FiKey,
  'REST APIs': FiServer,
  Microservices: FiGrid,
  React: SiReact,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  'React Router': SiReactrouter,
  'Context API': FiShare2,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  JDBC: FiLink,
  'Database Design': FiLayers,
  Git: SiGit,
  GitHub: SiGithub,
  Maven: FiPackage,
  'IntelliJ IDEA': SiIntellijidea,
  Postman: SiPostman,
  OOP: FiBox,
  Collections: FiGrid,
  'Exception Handling': FiAlertTriangle,
  'Data Structures': FiGitBranch,
  Algorithms: FiCpu,
  SDLC: FiRefreshCw,
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = CATEGORY_ICONS[category.id] ?? FiCode

  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 motion-reduce:transform-none"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-white">{category.title}</h3>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = SKILL_ICONS[skill]
          return (
            <li key={skill}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white/10 hover:text-white motion-reduce:transform-none">
                {SkillIcon ? (
                  <SkillIcon size={12} className="text-brand" />
                ) : null}
                {skill}
              </span>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

export default memo(SkillCategoryCard)
