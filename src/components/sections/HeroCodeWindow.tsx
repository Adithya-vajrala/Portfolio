import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils'

interface CodeToken {
  text: string
  className?: string
}

// Java syntax coloring (dark theme)
const SYNTAX = {
  comment: 'text-slate-500',
  annotation: 'text-violet-400',
  keyword: 'text-sky-400',
  type: 'text-yellow-200',
  method: 'text-sky-300',
  string: 'text-amber-400',
  plain: 'text-slate-300',
} as const

type SyntaxStyle = keyof typeof SYNTAX

const L = (parts: Array<[string, SyntaxStyle]>): CodeToken[] =>
  parts.map(([text, style]) => ({ text, className: SYNTAX[style] }))

// Each file has the same number of lines so tab switches cause zero height shift (no CLS)
const CODE_FILES: Record<string, CodeToken[][]> = {
  'AuthController.java': [
    L([['package ', 'keyword'], ['com.library.auth;', 'plain']]),
    [],
    L([['@RestController', 'annotation']]),
    L([['@RequestMapping', 'annotation'], ['("/api/auth")', 'string']]),
    L([['public class AuthController {', 'plain']]),
    [],
    L([['  @PostMapping', 'annotation'], ['("/login")', 'string']]),
    L([
      ['  public ', 'keyword'],
      ['ResponseEntity<LoginResponse>', 'type'],
      [' login(', 'method'],
    ]),
    L([
      ['      @RequestBody', 'annotation'],
      [' LoginRequest request) {', 'type'],
    ]),
    L([
      ['    String token = authService.', 'plain'],
      ['authenticate', 'method'],
      ['(request);', 'plain'],
    ]),
    L([
      ['    return ResponseEntity.', 'plain'],
      ['ok', 'method'],
      ['(', 'plain'],
      ['new', 'keyword'],
      [' LoginResponse(token));', 'type'],
    ]),
    L([['  }', 'plain']]),
    L([['}', 'plain']]),
    [],
  ],
  'SecurityConfig.java': [
    L([['package ', 'keyword'], ['com.library.config;', 'plain']]),
    [],
    L([['@Configuration', 'annotation']]),
    L([['public class SecurityConfig {', 'plain']]),
    L([['  @Bean', 'annotation']]),
    L([
      ['  public ', 'keyword'],
      ['SecurityFilterChain', 'type'],
      [' securityFilterChain(', 'method'],
    ]),
    L([
      ['      ', 'plain'],
      ['HttpSecurity', 'type'],
      [' http) throws Exception {', 'plain'],
    ]),
    L([['    return http', 'plain']]),
    L([['        .authorizeHttpRequests(auth -> auth', 'plain']]),
    L([
      ['            .requestMatchers', 'method'],
      ['("/api/auth/**")', 'string'],
      ['.permitAll()', 'plain'],
    ]),
    L([['            .anyRequest().authenticated())', 'plain']]),
    L([['        .build();', 'method']]),
    L([['  }', 'plain']]),
    L([['}', 'plain']]),
  ],
  'JwtAuthenticationFilter.java': [
    L([['package ', 'keyword'], ['com.library.security;', 'plain']]),
    [],
    L([['public class JwtAuthenticationFilter', 'plain']]),
    L([
      ['    extends ', 'keyword'],
      ['OncePerRequestFilter', 'type'],
      [' {', 'plain'],
    ]),
    L([['  @Override', 'annotation']]),
    L([['  protected ', 'keyword'], ['void doFilterInternal(', 'plain']]),
    L([
      ['      ', 'plain'],
      ['HttpServletRequest', 'type'],
      [' request,', 'plain'],
    ]),
    L([
      ['      ', 'plain'],
      ['HttpServletResponse', 'type'],
      [' response,', 'plain'],
    ]),
    L([
      ['      ', 'plain'],
      ['FilterChain', 'type'],
      [' chain) throws Exception {', 'plain'],
    ]),
    L([
      ['    String token = ', 'plain'],
      ['resolveToken', 'method'],
      ['(request);', 'plain'],
    ]),
    L([
      ['    if ', 'keyword'],
      ['(token != null && jwtService.', 'plain'],
      ['isValid', 'method'],
      ['(token))', 'plain'],
    ]),
    L([['      ', 'plain'], ['setAuthentication', 'method'], ['(token);', 'plain']]),
    L([['    chain.', 'plain'], ['doFilter', 'method'], ['(request, response);', 'plain']]),
    L([['  }', 'plain']]),
  ],
}

const FILE_NAMES = Object.keys(CODE_FILES)

const FLOATING_BADGES = [
  { label: 'Spring Boot', className: '-top-6 left-6', delay: 0 },
  { label: 'JWT', className: '-right-4 top-1/4', delay: 0.6 },
  { label: 'React', className: '-left-5 bottom-10 hidden sm:flex', delay: 1.2 },
]

export default function HeroCodeWindow() {
  const [activeFile, setActiveFile] = useState(FILE_NAMES[0])

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
        {/* Window title bar with file tabs */}
        <div className="border-b border-white/10 bg-white/5 px-4 pt-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <div className="ml-4 flex min-w-0 flex-1 gap-1 overflow-x-auto">
              {FILE_NAMES.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveFile(name)}
                  aria-label={`Show ${name}`}
                  aria-pressed={activeFile === name}
                  className={cn(
                    'whitespace-nowrap rounded-t-md border-b-2 px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                    activeFile === name
                      ? 'border-brand bg-ink/60 text-white'
                      : 'border-transparent text-slate-500 hover:text-slate-300',
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Code */}
        <div className="overflow-x-auto bg-ink/60 p-6 font-mono text-sm leading-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFile}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {CODE_FILES[activeFile].map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + lineIndex * 0.05, duration: 0.25 }}
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
                transition={{ delay: 0.9 }}
                className="inline-block h-5 w-2.5 translate-y-1 animate-pulse bg-brand"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating tech badges */}
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
