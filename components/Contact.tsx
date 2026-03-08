'use client'

import { useInView } from '@/hooks/useInView'
import { Container, SectionHeader } from './ui'

const contacts = [
  {
    label: 'Email',
    value: 'salahmatine@gmail.com',
    href: 'mailto:salahmatine@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/salahudeen-matine',
    href: 'https://www.linkedin.com/in/salahudeen-matine-3587a6218/',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/salahudeenmatine',
    href: 'https://github.com/salahudeenmatine',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Curriculum Vitae',
    value: 'Download CV (PDF)',
    href: '/cv.pdf',
    download: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
]

export function Contact() {
  const ref = useInView(0.1)

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-fade-in-up py-32 border-t border-[#1a2535]"
    >
      <Container>
        <SectionHeader
          eyebrow="05 / Contact"
          title="Get in Touch"
          description="Open to internships, graduate roles, and freelance security work."
          centered
        />

        <div className="mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {contacts.map(({ label, value, href, external, download, icon }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(download ? { download: true } : {})}
              className="group flex items-center gap-4 px-5 py-4 rounded-xl
                         border border-[#1a2535] bg-[#0c1117]
                         hover:border-[#00ff8c]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                         transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-full bg-[#00ff8c]/8 border border-[#00ff8c]/15 flex items-center justify-center flex-shrink-0 text-[#00ff8c] group-hover:bg-[#00ff8c]/12 transition-colors duration-200">
                {icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#00ff8c]/50 mb-0.5">{label}</p>
                <p className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-200 truncate">
                  {value}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-slate-700 group-hover:text-[#00ff8c]/50 flex-shrink-0 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
