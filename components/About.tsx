'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { Container, SectionHeader } from './ui'

const quickStats = [
  ['Focus',      'OSINT · Web App Testing'],
  ['Education',  'BSc Cyber Security · UWL'],
  ['Location',   'London, UK'],
  ['Available',  'Internships · Graduate roles'],
] as const

export function About() {
  const ref = useInView()

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="animate-fade-in-up py-32 border-t border-[#1a2535]"
    >
      <Container>
        <SectionHeader eyebrow="01 / About" title="Background" />

        <div className="mt-14 grid md:grid-cols-2 gap-16 items-start">

          {/* Left: photo + stat tiles */}
          <div className="flex flex-col gap-6">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto md:mx-0 rounded-2xl border border-[#1a2535] bg-[#0c1117] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/headshot.jpg"
                alt="Salahudeen Matine"
                fill
                className="object-cover"
                priority
              />
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#00ff8c]/40 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#00ff8c]/40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#00ff8c]/40 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#00ff8c]/40 pointer-events-none" />
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-3">
              {quickStats.map(([k, v]) => (
                <div
                  key={k}
                  className="border border-[#1a2535] bg-[#0c1117] rounded-xl p-3.5 hover:border-[#00ff8c]/15 transition-colors duration-300"
                >
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#00ff8c]/50 mb-1">{k}</p>
                  <p className="text-xs text-slate-300 leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div className="space-y-5 text-sm text-slate-400 leading-relaxed pt-1">
            <p>
              I&apos;m a final-year Cyber Security student at the University of West London,
              currently building real-world experience through OSINT casework, web testing labs,
              and structured reporting. My focus is on producing findings that are technically
              sound and immediately actionable for both technical and non-technical audiences.
            </p>
            <p>
              I run a personal homelab for hands-on practice, complete challenges on Hack The Box
              and TryHackMe, and document my methodology in structured writeups, prioritising
              process over flags.
            </p>

            {/* Currently working on */}
            <div className="pt-4 border-t border-[#1a2535]">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#00ff8c]/50 mb-2">
                Currently working on
              </p>
              <p className="text-sm text-slate-400">
                Final-year dissertation: OSINT &amp; CTI approaches for detecting cryptocurrency
                fraud patterns, applying MITRE ATT&amp;CK mapping and structured threat reporting.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
