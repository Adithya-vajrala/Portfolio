import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiCheckCircle,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import SectionContainer from '@/components/ui/SectionContainer'
import SectionHeading from '@/components/ui/SectionHeading'
import { CONTACT, RESUME_URL } from '@/constants'
import { cn } from '@/utils'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

type FormStatus = 'idle' | 'sending' | 'success'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.subject.trim().length === 0) {
    errors.subject = 'Please add a subject.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message (at least 10 characters).'
  }

  return errors
}

interface InfoCard {
  label: string
  value: string
  href?: string
  external?: boolean
  download?: boolean
  Icon: IconType
}

const INFO_CARDS: InfoCard[] = [
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    Icon: FiMail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/Vajrala-Adithya',
    href: CONTACT.linkedin,
    external: true,
    Icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Adithya-vajrala',
    href: CONTACT.github,
    external: true,
    Icon: FiGithub,
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: RESUME_URL,
    download: true,
    Icon: FiDownload,
  },
  {
    label: 'Location',
    value: CONTACT.location,
    Icon: FiMapPin,
  },
]

const FIELD_BASE =
  'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 backdrop-blur transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand/60'
const FIELD_VALID = 'border-white/10 focus:border-brand/40'
const FIELD_INVALID = 'border-red-400/60 focus:ring-red-400/60'

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const timeoutRef = useRef<number | undefined>(undefined)

  // Move focus to the first invalid field when validation fails
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      formRef.current
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus()
    }
  }, [errors])

  // Clear the simulated-send timeout if the section unmounts mid-submit
  useEffect(
    () => () => {
      window.clearTimeout(timeoutRef.current)
    },
    [],
  )

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // Frontend-only simulation — no backend exists yet.
    setStatus('sending')
    timeoutRef.current = window.setTimeout(() => setStatus('success'), 1100)
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
  }

  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    values.subject || 'Portfolio inquiry',
  )}&body=${encodeURIComponent(
    `Hi Adithya,\n\n${values.message}\n\n— ${values.name} (${values.email})`,
  )}`

  return (
    <SectionContainer id="contact">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Have a role, a project, or a question? My inbox is open — I'll get back to you as soon as I can."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
        {/* Contact info cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          className="grid gap-4 sm:grid-cols-2"
        >
          {INFO_CARDS.map(({ label, value, href, external, download, Icon }) => {
            const linkProps = external
              ? { target: '_blank', rel: 'noreferrer' }
              : {}

            const content = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-slate-200">
                    {value}
                  </p>
                </div>
              </>
            )

            const cardClasses =
              'group flex items-center gap-3 rounded-2xl border border-white/10 bg-surface/60 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transform-none'

            return (
              <motion.div key={label} variants={fadeInUp}>
                {href ? (
                  <a
                    href={href}
                    {...linkProps}
                    {...(download ? { download: true } : {})}
                    className={cardClasses}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClasses}>{content}</div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
        >
          <GlassCard className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  role="status"
                  className="flex flex-col items-center py-10 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <FiCheckCircle size={30} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Message ready!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                    This portfolio is frontend-only for now, so nothing was sent
                    to a server. Send it straight to my inbox from your email
                    app instead.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Button href={mailtoHref}>
                      <FiMail size={16} />
                      Send via Email
                    </Button>
                    <Button variant="ghost" onClick={handleReset}>
                      Send another
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? 'contact-name-error' : undefined
                        }
                        placeholder="Your name"
                        className={cn(
                          FIELD_BASE,
                          errors.name ? FIELD_INVALID : FIELD_VALID,
                        )}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'contact-email-error' : undefined
                        }
                        placeholder="you@example.com"
                        className={cn(
                          FIELD_BASE,
                          errors.email ? FIELD_INVALID : FIELD_VALID,
                        )}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={
                        errors.subject ? 'contact-subject-error' : undefined
                      }
                      placeholder="What is this about?"
                      className={cn(
                        FIELD_BASE,
                        errors.subject ? FIELD_INVALID : FIELD_VALID,
                      )}
                    />
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'contact-message-error' : undefined
                      }
                      placeholder="Tell me about the role or project…"
                      className={cn(
                        FIELD_BASE,
                        'resize-none',
                        errors.message ? FIELD_INVALID : FIELD_VALID,
                      )}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <Button type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <>
                          <FiLoader size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-xs leading-relaxed text-slate-500">
                      Frontend-only form — no backend yet. Submitting opens
                      your email app.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
