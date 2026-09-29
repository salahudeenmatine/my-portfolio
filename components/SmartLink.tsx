import Link from 'next/link'
import type { ReactNode } from 'react'

/** Internal paths use Next's Link; everything else is a plain anchor. */
export function SmartLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
