import { motion } from 'framer-motion'

interface CodeToken {
  text: string
  className?: string
}

const CODE_BLOCK: CodeToken[][] = [
  [
    {
      text: '// hello.ts — the developer behind this portfolio',
      className: 'text-slate-500',
    },
  ],
  [
    { text: 'const', className: 'text-sky-400' },
    { text: ' developer', className: 'text-slate-200' },
    { text: ' = {', className: 'text-slate-300' },
  ],
  [
    { text: '  name:', className: 'text-slate-300' },
    { text: " 'Vajrala Adithya'", className: 'text-emerald-400' },
    { text: ',', className: 'text-slate-300' },
  ],
  [
    { text: '  role:', className: 'text-slate-300' },
    { text: " 'Java Full Stack Developer'", className: 'text-emerald-400' },
    { text: ',', className: 'text-slate-300' },
  ],
  [
    { text: '  stack: [', className: 'text-slate-300' },
    {
      text: "'Java', 'Spring Boot', 'React', 'Microservices'",
      className: 'text-emerald-400',
    },
    { text: '],', className: 'text-slate-300' },
  ],
  [
    { text: '  degree:', className: 'text-slate-300' },
    { text: " 'B.Tech CSE · 2022 – 2026'", className: 'text-emerald-400' },
    { text: ',', className: 'text-slate-300' },
  ],
  [
    { text: '  focus:', className: 'text-slate-300' },
    {
      text: " 'building scalable web applications'",
      className: 'text-emerald-400',
    },
    { text: ',', className: 'text-slate-300' },
  ],
  [{ text: '};', className: 'text-slate-300' }],
  [],
  [
    { text: 'developer.', className: 'text-slate-200' },
    { text: 'letsConnect', className: 'text-sky-400' },
    { text: '();', className: 'text-slate-300' },
  ],
]

const FLOATING_BADGES = [
  { label: 'Java', className: '-top-6 left-6', delay: 0 },
  { label: 'Spring Boot', className: '-right-4 top-1/4', delay: 0.6 },
  { label: 'React', className: '-left-5 bottom-8 hidden sm:flex', delay: 1.2 },
]

export default function HeroCodeWindow() {
  return (
    <div className="relative">
      {/* Soft glow behind the window */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-brand/20 via-sky-500/10 to-transparent blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        {/* Window title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">
            portfolio.ts
          </span>
        </div>

        {/* Code */}
        <div className="overflow-x-auto bg-ink/60 p-6 font-mono text-sm leading-7">
          {CODE_BLOCK.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + lineIndex * 0.08, duration: 0.3 }}
              className="whitespace-pre"
            >
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.className}>
                  {token.text}
                </span>
              ))}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="inline-block h-5 w-2.5 translate-y-1 animate-pulse bg-brand"
          />
        </div>
      </motion.div>

      {/* Floating skill badges */}
      {FLOATING_BADGES.map(({ label, className, delay }) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.8 + delay },
            scale: { delay: 0.8 + delay },
            y: { delay, duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`absolute rounded-full border border-white/10 bg-surface/90 px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-black/30 backdrop-blur ${className}`}
        >
          {label}
        </motion.span>
      ))}
    </div>
  )
}
