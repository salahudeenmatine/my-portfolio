'use client'

import { useState, useEffect } from 'react'
import { Container } from './ui'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen]           = useState(false)
  const [scrolled, setScrolled]           = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#1a2535] bg-[#080b10]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Brand */}
        <a
          href="#hero"
          className="text-[#00ff8c] font-bold tracking-[0.15em] text-sm uppercase select-none"
        >
          SM
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-[#00ff8c]'
                    : 'text-slate-500 hover:text-slate-200'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              className="text-xs uppercase tracking-widest border border-[#1a2535] text-slate-400 px-4 py-1.5 rounded-lg hover:border-[#00ff8c]/40 hover:text-[#00ff8c] transition-all duration-200"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-slate-400 transition-transform duration-200 origin-center ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-400 transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-400 transition-transform duration-200 origin-center ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1a2535] bg-[#080b10]/98 px-6 py-5 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-xs uppercase tracking-widest text-slate-400 hover:text-[#00ff8c] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            className="block py-2.5 text-xs uppercase tracking-widest text-slate-400 hover:text-[#00ff8c] transition-colors"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
