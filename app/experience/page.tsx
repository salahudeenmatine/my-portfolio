import type { Metadata } from 'next'
import { isecom, bigBus, education, languages, toolsUsed } from '@/content/experience'
import { Row } from '@/components/Row'
import { Flow } from '@/components/Flow'
import { WorkTypes, Facts, MarginNote } from '@/components/Margin'
import { Inline } from '@/components/Inline'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'OSINT investigations for ISECOM clients, supervised web application testing, education and languages. Salahudeen Matine, cybersecurity graduate.',
  alternates: { canonical: '/experience' },
}

export default function ExperiencePage() {
  return (
    <>
      <section className="section" aria-labelledby="experience-title">
        <div className="wrap">
          <Row>
            <h1 id="experience-title" className="page-title">
              Experience
            </h1>
            <p className="lede">
              Client investigation work and supervised testing at ISECOM, a customer-facing job alongside my degree, and the
              education behind both.
            </p>
          </Row>
        </div>
      </section>

      <section id="isecom" className="section" aria-labelledby="isecom-title">
        <div className="wrap">
          <Flow
            items={[
              {
                main: (
                  <>
                    <h2 id="isecom-title">{isecom.role}</h2>
                    <p className="subhead">{isecom.organisation}</p>
                    <p>{isecom.intro}</p>
                  </>
                ),
                margin: (
                  <>
                    <WorkTypes types={isecom.types} />
                    <Facts items={[isecom.place, isecom.dates]} />
                  </>
                ),
              },
              {
                main: (
                  <>
                    <h3 className="list-heading">Investigations</h3>
                    <ul className="prose-list">
                      {isecom.investigations.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </>
                ),
                margin: <MarginNote note={{ label: 'Confidentiality', text: isecom.confidentiality }} />,
              },
              {
                main: (
                  <>
                    <h3 className="list-heading">Web application testing</h3>
                    <ul className="prose-list">
                      {isecom.testing.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section id="big-bus-tours" className="section" aria-labelledby="bigbus-title">
        <div className="wrap">
          <Row margin={<><WorkTypes types={['employment']} /><Facts items={[bigBus.place, bigBus.dates]} /></>}>
            <h2 id="bigbus-title">{bigBus.role}</h2>
            <p className="subhead">{bigBus.organisation}</p>
            <p>{bigBus.summary}</p>
          </Row>
        </div>
      </section>

      <section id="education" className="section" aria-labelledby="education-title">
        <div className="wrap">
          <Row>
            <h2 id="education-title">Education</h2>
          </Row>
          {education.map((e) => (
            <Row key={e.qualification} margin={<Facts items={[e.dates]} />}>
              <h3 className="entry-title">{e.qualification}</h3>
              <p className="small-print">
                {e.institution}
                {e.result ? `. ${e.result}.` : ''}
              </p>
              {e.note && (
                <p>
                  <Inline text={e.note} />
                </p>
              )}
            </Row>
          ))}
        </div>
      </section>

      <section id="tools" className="section" aria-labelledby="tools-title">
        <div className="wrap">
          <Row>
            <h2 id="tools-title">Tools, and where I used them</h2>
          </Row>
          <Row>
            <table className="plain-table">
              <caption className="sr-only">Tools and techniques, and where each was used</caption>
              <thead>
                <tr>
                  <th scope="col">Tool or technique</th>
                  <th scope="col">Where</th>
                </tr>
              </thead>
              <tbody>
                {toolsUsed.map((t) => (
                  <tr key={t.tools}>
                    <th scope="row">{t.tools}</th>
                    <td>
                      <Inline text={t.where} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Row>
        </div>
      </section>

      <section id="languages" className="section" aria-labelledby="languages-title">
        <div className="wrap">
          <Row>
            <h2 id="languages-title">Languages</h2>
            <p>{languages}</p>
          </Row>
        </div>
      </section>
    </>
  )
}
