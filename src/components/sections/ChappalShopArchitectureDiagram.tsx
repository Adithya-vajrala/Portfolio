import { Fragment } from 'react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiArrowDown, FiDatabase, FiMonitor, FiServer } from 'react-icons/fi'

interface DiagramNode {
  Icon: IconType
  title: string
  subtitle?: string
  accent?: boolean
}

const NODES: DiagramNode[] = [
  { Icon: FiMonitor, title: 'Client', subtitle: 'React' },
  {
    Icon: FiServer,
    title: 'Backend API',
    subtitle: 'Spring Boot · REST APIs',
    accent: true,
  },
  { Icon: FiDatabase, title: 'Database', subtitle: 'MySQL' },
]

export default function ChappalShopArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl">
      <div className="flex flex-col items-center">
        {NODES.map(({ Icon, title, subtitle, accent }, index) => (
          <Fragment key={title}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`flex w-full max-w-xs items-center gap-3 rounded-xl border px-5 py-4 backdrop-blur ${
                accent
                  ? 'border-brand/40 bg-brand/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <Icon className="shrink-0 text-brand" size={20} />
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                {subtitle && (
                  <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>
                )}
              </div>
            </motion.div>

            {index < NODES.length - 1 && (
              <div className="flex flex-col items-center">
                <span
                  aria-hidden
                  className="h-6 w-px bg-gradient-to-b from-brand/50 to-brand/20"
                />
                <FiArrowDown aria-hidden className="mt-1 text-brand/70" size={14} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
