import Link from 'next/link'
import { site } from '@/content/site'
import { NavLinks } from './NavLinks'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <NavLinks />
        </nav>
      </div>
    </header>
  )
}
