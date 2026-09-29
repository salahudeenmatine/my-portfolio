import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/content/case-studies'
import type { Block, Evidence, Section } from '@/content/case-studies/types'
import { Row } from '@/components/Row'
import { Flow, type FlowItem } from '@/components/Flow'
import { WorkTypes, MetaList, MarginNote } from '@/components/Margin'
import { Inline } from '@/components/Inline'
import { CodeBlock } from '@/components/CodeBlock'
import { EvidenceFigure } from '@/components/EvidenceFigure'
import { FindingsList } from '@/components/FindingsList'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.study.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const entry = getCaseStudy(slug)
  if (!entry) return {}
  return {
    title: entry.study.title,
    description: entry.study.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: entry.study.title, description: entry.study.description, url: `/work/${slug}`, type: 'article' },
  }
}

function blockToItem(
  block: Block,
  evidence: Record<string, Evidence>,
  subLevel: 'h3' | 'h4',
  findings: React.ReactNode,
): FlowItem {
  const SubHeading = subLevel
  const margin = 'note' in block && block.note ? <MarginNote note={block.note} /> : undefined
  switch (block.kind) {
    case 'p':
      return {
        main: (
          <p>
            <Inline text={block.text} />
          </p>
        ),
        margin,
      }
    case 'list':
      return {
        main: (
          <>
            {block.heading && <SubHeading className="list-heading">{block.heading}</SubHeading>}
            <ul className="prose-list">
              {block.items.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          </>
        ),
        margin,
      }
    case 'code':
      return { main: <CodeBlock label={block.label} code={block.code} />, margin }
    case 'figure':
      return { main: <EvidenceFigure evidence={evidence[block.figure]} />, wide: true }
    case 'findings':
      return { main: findings, wide: true }
  }
}

function SectionView({
  section,
  evidence,
  findings,
}: {
  section: Section
  evidence: Record<string, Evidence>
  findings: React.ReactNode
}) {
  const Heading = section.number ? 'h3' : 'h2'
  const heading: FlowItem = {
    main: (
      <Heading id={`${section.id}-title`}>
        {section.number ? (
          <>
            <span className="finding-heading-n">Finding {section.number}</span>{' '}
          </>
        ) : null}
        {section.title}
      </Heading>
    ),
    margin: section.meta && <MetaList items={section.meta} />,
  }
  return (
    <section id={section.id} className="section" aria-labelledby={`${section.id}-title`}>
      <div className="wrap">
        <Flow
          items={[
            heading,
            ...section.blocks.map((b) => blockToItem(b, evidence, section.number ? 'h4' : 'h3', findings)),
          ]}
        />
      </div>
    </section>
  )
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params
  const entry = getCaseStudy(slug)
  if (!entry) notFound()
  const { study, evidence } = entry

  return (
    <article aria-labelledby="study-title">
      <section className="section">
        <div className="wrap">
          <Row>
            <p className="crumb">
              <Link href="/work">Work</Link>
            </p>
          </Row>
          <Row
            margin={
              <>
                <WorkTypes types={[study.type]} />
                <MetaList items={study.meta} />
                <ul className="facts">
                  {study.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </>
            }
          >
            <h1 id="study-title" className="page-title">
              {study.title}
            </h1>
            <p className="lede">{study.standfirst}</p>
          </Row>
        </div>
      </section>
      {study.sections.map((s) => (
        <SectionView
          key={s.id}
          section={s}
          evidence={evidence}
          findings={<FindingsList findings={study.findings} linkBase="#finding-" />}
        />
      ))}
      <section className="section" aria-labelledby="sources-title">
        <div className="wrap">
          <Row>
            <h2 id="sources-title">Source material</h2>
            <p>
              Everything on this page comes from the published report, where each finding also includes the full request and
              proof output.
            </p>
            <ul className="link-list">
              {study.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </Row>
        </div>
      </section>
    </article>
  )
}
