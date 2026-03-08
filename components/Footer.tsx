import { Container } from './ui'

export function Footer() {
  return (
    <footer className="border-t border-[#1a2535] py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#00ff8c] text-xs font-bold tracking-[0.15em] uppercase select-none">
          SM
        </span>
        <p className="text-[10px] text-slate-700 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Salahudeen Matine
        </p>
        <p className="text-[10px] text-slate-700">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </Container>
    </footer>
  )
}
