'use client'

import { useInView } from '@/hooks/useInView'
import { projects } from '@/data/projects'
import { Container, SectionHeader, Tag } from './ui'

export function Projects() {
  const ref = useInView(0.05)

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-fade-in-up py-32 border-t border-[#1a2535]"
    >
      <Container>
        <SectionHeader
          eyebrow="04 / Projects"
          title="All Work"
          description="Labs, research, and methodology-first writeups."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl border border-[#1a2535] bg-[#0c1117] overflow-hidden
                         hover:border-[#00ff8c]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                         transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Gradient thumbnail panel */}
              <div
                className="relative h-16 flex-shrink-0 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.accentHex}18 0%, #0c1117 100%)`,
                }}
              >
                {/* Mini grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(${project.accentHex} 1px, transparent 1px), linear-gradient(to right, ${project.accentHex} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Accent dot */}
                <div
                  className="absolute bottom-3 left-5 w-2 h-2 rounded-full"
                  style={{ background: project.accentHex, opacity: 0.5 }}
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-white text-sm font-bold leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((b) => (
                    <li key={b} className="text-xs text-slate-600 flex items-start gap-2.5">
                      <svg
                        className="w-3 h-3 flex-shrink-0 mt-0.5"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <circle cx="6" cy="6" r="2" fill={project.accentHex} opacity="0.4" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Footer row */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#1a2535]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-600 border border-[#1a2535] rounded-md px-2.5 py-1 uppercase tracking-widest whitespace-nowrap">
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      {project.badge}
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-[#00ff8c] uppercase tracking-widest transition-colors duration-200 whitespace-nowrap"
                    >
                      GitHub
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
