import Link from 'next/link'
import { site } from '@/content/site'
import { isecom, bigBus, homeBackground } from '@/content/experience'
import { projects, getProject } from '@/content/projects'
import { snapstore, evidence } from '@/content/case-studies/snapstore'
import { Row } from '@/components/Row'
import { Flow } from '@/components/Flow'
import { WorkTypes, Facts, MarginNote } from '@/components/Margin'
import { FindingsList } from '@/components/FindingsList'
import { EvidenceFigure } from '@/components/EvidenceFigure'
import { CvAction } from '@/components/CvAction'
import { SmartLink } from '@/components/SmartLink'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: site.degree.institution },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    name: `${site.degree.title}, ${site.degree.result}`,
  },
  knowsLanguage: ['en', 'ar', 'fr'],
  sameAs: [site.linkedin, site.github],
}

export default function Home() {
  const snap = getProject('snapstore')!
  const others = projects.filter((p) => p.onHome)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <section className="section" aria-labelledby="intro-title">
        <div className="wrap">
          <Row
            margin={
              <dl className="meta">
                <div className="meta-item">
                  <dt>Based in</dt>
                  <dd>{site.location}</dd>
                </div>
                <div className="meta-item">
                  <dt>Availability</dt>
                  <dd>{site.availability}</dd>
                </div>
                <div className="meta-item">
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
              </dl>
            }
          >
            <h1 id="intro-title" className="title-name">
              {site.name}
            </h1>
            <p className="role-line">
              {site.role}, {site.degree.result}, {site.degree.institution} (2026)
            </p>
            <p className="lede">{site.intro}</p>
            <div className="actions">
              <Link className="button" href="/work/snapstore">
                Read the Snapstore assessment
              </Link>
              <CvAction />
            </div>
          </Row>
        </div>
      </section>

      <section className="section" aria-labelledby="snapstore-title">
        <div className="wrap">
          <Flow
            items={[
              {
                main: <h2 id="snapstore-title">{snap.title}</h2>,
                margin: (
                  <>
                    <WorkTypes types={[snap.type]} />
                    <Facts items={snap.facts} />
                  </>
                ),
              },
              { main: <p>{snap.summary}</p> },
              {
                main: <FindingsList findings={snapstore.findings} compact />,
                margin: (
                  <>
                    <MarginNote note={{ label: 'Finding 2', tone: 'limit', text: 'Proven as a remote crash of the helper process. Code execution was not demonstrated.' }} />
                    <MarginNote note={{ label: 'Finding 5', tone: 'limit', text: 'Needs write access to an early PATH directory first. Not a standalone remote exploit.' }} />
                  </>
                ),
              },
              { main: <EvidenceFigure evidence={evidence.traversal} />, wide: true },
              {
                main: (
                  <ul className="link-list">
                    {snap.links?.slice(0, 2).map((l) => (
                      <li key={l.href}>
                        <SmartLink href={l.href}>{l.label}</SmartLink>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="isecom-title">
        <div className="wrap">
          <Flow
            items={[
              {
                main: (
                  <>
                    <h2 id="isecom-title">{isecom.organisation}</h2>
                    <p className="subhead">{isecom.role}</p>
                  </>
                ),
                margin: (
                  <>
                    <WorkTypes types={isecom.types} />
                    <Facts items={[isecom.place, isecom.dates]} />
                  </>
                ),
              },
              { main: <p>{isecom.summary[0]}</p> },
              { main: <p>{isecom.summary[1]}</p> },
              {
                main: (
                  <>
                    <p className="small-print">{isecom.confidentiality}</p>
                    <p>
                      <Link className="text-link" href="/experience#isecom">
                        More on the ISECOM work
                      </Link>
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="other-work-title">
        <div className="wrap">
          <Flow
            items={[
              { main: <h2 id="other-work-title">Other work</h2> },
              ...others.map((p) => ({
                main: (
                  <div className="entry">
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <p>
                      <Link className="text-link" href={`/work#${p.slug}`}>
                        {p.moreLabel ?? `More on ${p.title}`}
                      </Link>
                    </p>
                  </div>
                ),
                margin: (
                  <>
                    <WorkTypes types={[p.type]} />
                    <Facts items={p.facts.slice(0, 1)} />
                  </>
                ),
              })),
              {
                main: (
                  <Link className="text-link" href="/work">
                    See all work
                  </Link>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="background-title">
        <div className="wrap">
          <Flow
            items={[
              { main: <h2 id="background-title">Background</h2> },
              { main: <p>{homeBackground.education}</p>, margin: <Facts items={[site.degree.institution, site.degree.years]} /> },
              { main: <p>{homeBackground.work}</p>, margin: <Facts items={[bigBus.organisation, bigBus.dates]} /> },
              {
                main: (
                  <>
                    <p>{homeBackground.languages}</p>
                    <p>
                      <Link className="text-link" href="/experience">
                        Experience and education
                      </Link>
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  )
}
