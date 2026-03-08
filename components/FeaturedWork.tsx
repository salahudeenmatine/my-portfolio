'use client'

import { useInView } from '@/hooks/useInView'
import { projects } from '@/data/projects'
import { Container, SectionHeader, Tag } from './ui'

const featured = projects.filter((p) => p.featured)

export function FeaturedWork() {
  const ref = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-fade-in-up py-32 border-t border-[#1a2535] bg-[#060910]"
    >
      <Container>
        <SectionHeader
          eyebrow="03 / Featured"
          title="Selected Work"
          description="Real-world casework. Details confidential under NDA."
        />

        <div className="mt-12 space-y-5">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl border border-[#1a2535] bg-[#0c1117] overflow-hidden
                         hover:border-[#00ff8c]/20 hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]
                         transition-all duration-300"
            >
              {/* Coloured top stripe */}
              <div
                className="h-[2px] w-full"
                style={{
                  background: `linear-gradient(to right, ${project.accentHex}80, ${project.accentHex}20, transparent)`,
                }}
              />

              <div className="p-8 grid md:grid-cols-[220px_1fr] gap-8 items-start">

                {/* Left: tags + title + badge */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <h3 className="text-white text-base font-bold leading-snug mb-4">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-600 border border-[#1a2535] rounded-md px-2.5 py-1 uppercase tracking-widest">
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Right: description + bullets */}
                <div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <ul className="space-y-2.5">
                    {project.bullets.map((b) => (
                      <li key={b} className="text-xs text-slate-500 flex items-start gap-3">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
