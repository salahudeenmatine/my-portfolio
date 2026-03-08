'use client'

import { useInView } from '@/hooks/useInView'
import { skills } from '@/data/skills'
import { Container, SectionHeader } from './ui'

export function Skills() {
  const ref = useInView()

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-fade-in-up py-32 border-t border-[#1a2535]"
    >
      <Container>
        <SectionHeader eyebrow="02 / Skills" title="Toolkit" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="group border border-[#1a2535] bg-[#0c1117] rounded-xl p-5
                         hover:border-[#00ff8c]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                         transition-all duration-300"
            >
              <p className="text-[#00ff8c] text-[10px] uppercase tracking-[0.25em] mb-5">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-slate-500 flex items-center gap-2.5
                               group-hover:text-slate-400 transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00ff8c]/30 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
