import { Button, Container } from './ui'

const stats = [
  { label: 'Focus',    value: 'OSINT · Web App Testing' },
  { label: 'Location', value: 'London, UK' },
  { label: 'Status',   value: 'Open to Opportunities' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#00ff8c 1px, transparent 1px), linear-gradient(to right, #00ff8c 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(0,255,140,0.06) 0%, rgba(0,255,140,0.02) 40%, transparent 70%)',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 border border-[#1a2535] bg-[#0c1117] rounded-full px-4 py-1.5 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff8c] animate-pulse flex-shrink-0" />
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.25em]">
            Final-Year BSc · University of West London
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-bold text-white tracking-[-0.03em] leading-[0.95] mb-7">
          Salahudeen<br />
          <span className="text-[#00ff8c]">Matine</span>
          <span className="text-[#00ff8c]/60">.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-[420px] text-slate-400 text-base leading-relaxed mb-10">
          Final-year Cyber Security student focused on OSINT, web app testing, and clear
          reporting. I build evidence-based investigations, test applications in hands-on
          labs, and turn findings into actionable write-ups.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <Button variant="primary" href="#projects">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
            </svg>
            View Projects
          </Button>
          <Button variant="secondary" href="#contact">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Get in Touch
          </Button>
          <Button variant="ghost" href="/cv.pdf">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </Button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[#1a2535] pt-8">
          {stats.map(({ label, value }, i) => (
            <div key={label} className="flex items-stretch gap-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#00ff8c]/40 mb-1">
                  {label}
                </p>
                <p className="text-sm text-slate-300 font-medium">{value}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px self-stretch bg-[#1a2535]" />
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00ff8c]/20 to-transparent" />
      </div>
    </section>
  )
}
