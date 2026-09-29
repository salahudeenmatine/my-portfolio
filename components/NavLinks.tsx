'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'CV', href: '/cv' },
]

export function NavLinks() {
  const pathname = usePathname()
  return (
    <ul className="nav-list">
      {links.map((l) => {
        const current = pathname === l.href || pathname.startsWith(`${l.href}/`)
        return (
          <li key={l.href}>
            <Link href={l.href} aria-current={current ? 'page' : undefined}>
              {l.label}
            </Link>
          </li>
        )
      })}
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  )
}
