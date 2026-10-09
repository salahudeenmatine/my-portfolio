import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/content/site'
import { availableCvs } from '@/lib/cv'
import { Row } from '@/components/Row'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Download the CV of Salahudeen Matine, cybersecurity graduate based in London.',
  alternates: { canonical: '/cv' },
}

export default function CvPage() {
  const cvs = availableCvs()
  const primary = cvs.find((c) => c.primary)
  const others = cvs.filter((c) => !c.primary)

  return (
    <section className="section" aria-labelledby="cv-title">
      <div className="wrap">
        <Row>
          <h1 id="cv-title" className="page-title">
            CV
          </h1>
          {primary ? (
            <>
              <p className="lede">My current CV, covering my experience, projects and education.</p>
              <div className="actions">
                <a className="button" href={primary.href}>
                  Download CV (PDF, {primary.sizeKb} KB)
                </a>
              </div>
            </>
          ) : (
            <p className="lede">
              Email me at <a href={`mailto:${site.email}?subject=CV%20request`}>{site.email}</a> and I’ll send my current CV.
            </p>
          )}
        </Row>
        {others.length > 0 && (
          <Row>
            <h2>Tailored versions</h2>
            <p>The same experience, ordered for particular kinds of role.</p>
            <ul className="prose-list">
              {others.map((c) => (
                <li key={c.file}>
                  <a href={c.href}>
                    {c.label} (PDF, {c.sizeKb} KB)
                  </a>
                  , for {c.forRoles}.
                </li>
              ))}
            </ul>
          </Row>
        )}
        <Row>
          <p>
            The same experience in more detail is on the <Link href="/experience">Experience</Link> page, and the work behind
            it is on the <Link href="/work">Work</Link> page.
          </p>
        </Row>
      </div>
    </section>
  )
}
