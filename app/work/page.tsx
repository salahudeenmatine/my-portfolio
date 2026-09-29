import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, labExposure } from '@/content/projects'
import { Row } from '@/components/Row'
import { WorkTypes, Facts, MarginNote } from '@/components/Margin'
import { Inline } from '@/components/Inline'
import { SmartLink } from '@/components/SmartLink'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Security assessment, Python tooling, an academic cryptocurrency investigation framework and AI-agent security challenge work by Salahudeen Matine.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <Row>
            <h1 id="work-title" className="page-title">
              Work
            </h1>
            <p className="lede">
              Each piece of work is labelled with the kind of work it was, and anything it doesn’t show is noted beside it.
            </p>
            <p>
              My client investigation and supervised testing work at ISECOM is on the{' '}
              <Link href="/experience#isecom">Experience</Link> page. The case material itself is confidential, so it isn’t
              here.
            </p>
          </Row>
        </div>
      </section>

      {projects.map((p) => (
        <section key={p.slug} id={p.slug} className="section" aria-labelledby={`${p.slug}-title`}>
          <div className="wrap">
            <Row
              margin={
                <>
                  <WorkTypes types={[p.type]} />
                  <Facts items={p.facts} />
                  {p.limits?.map((l) => (
                    <MarginNote key={l} note={{ label: 'Limit', tone: 'limit', text: l }} />
                  ))}
                </>
              }
            >
              <h2 id={`${p.slug}-title`}>{p.title}</h2>
              {p.description.map((d) => (
                <p key={d}>
                  <Inline text={d} />
                </p>
              ))}
              {p.points && (
                <>
                  {p.pointsHeading && <h3 className="list-heading">{p.pointsHeading}</h3>}
                  <ul className="prose-list">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <Inline text={pt} />
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {p.links && (
                <ul className="link-list">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <SmartLink href={l.href}>{l.label}</SmartLink>
                    </li>
                  ))}
                </ul>
              )}
            </Row>
          </div>
        </section>
      ))}

      <section id="lab" className="section" aria-labelledby="lab-title">
        <div className="wrap">
          <Row margin={<Facts items={['University of West London']} />}>
            <h2 id="lab-title">Lab exposure</h2>
            <p>{labExposure}</p>
          </Row>
        </div>
      </section>
    </>
  )
}
