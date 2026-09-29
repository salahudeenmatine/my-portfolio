import Link from 'next/link'
import { Row } from '@/components/Row'

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="nf-title">
      <div className="wrap">
        <Row>
          <h1 id="nf-title" className="page-title">
            Page not found
          </h1>
          <p className="lede">There’s nothing at this address. The work and experience pages are the best places to start.</p>
          <ul className="link-list">
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </Row>
      </div>
    </section>
  )
}
