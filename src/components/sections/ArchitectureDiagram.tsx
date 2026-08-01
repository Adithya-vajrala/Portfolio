import { Fragment } from 'react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiArrowDown,
  FiDatabase,
  FiKey,
  FiMonitor,
  FiServer,
  FiShare2,
  FiShield,
} from 'react-icons/fi'

interface DiagramNode {
  Icon: IconType
  title: string
  subtitle?: string
  accent?: boolean
}

const NODES: DiagramNode[] = [
  { Icon: FiMonitor, title: 'Client' },
  { Icon: FiShield, title: 'API Gateway', subtitle: 'Spring Cloud Gateway' },
  {
    Icon: FiKey,
    title: 'Authentication Service',
    subtitle: 'JWT · Spring Security',
    accent: true,
  },
  {
    Icon: FiServer,
    title: 'Other Microservices',
    subtitle: 'Professional · Booking · Notification · AI',
  },
  { Icon: FiDatabase, title: 'Database', subtitle: 'MySQL' },
]

export default function ArchitectureDiagram() {
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
                {index === 3 && (
                  <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-white">
                    <FiShare2 size={12} className="text-brand" />
                    Eureka Service Discovery
                  </span>
                )}
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
