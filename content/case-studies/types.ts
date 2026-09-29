import type { StaticImageData } from 'next/image'
import type { WorkType } from '../work-types'

export type Note = {
  label: string
  text: string
  /** `limit` marks what the evidence does not show. */
  tone?: 'limit'
}

export type Evidence = {
  src: StaticImageData
  alt: string
  caption: string
  /** Figure number in the original report. */
  reportFigure: number
  /** Screenshot has a dark terminal background. */
  dark: boolean
  /** Bands to outline, as percentages of the image height. */
  highlights: { top: number; height: number }[]
}

export type Block =
  | { kind: 'p'; text: string; note?: Note }
  | { kind: 'list'; items: string[]; heading?: string; note?: Note }
  | { kind: 'code'; label: string; code: string; note?: Note }
  | { kind: 'figure'; figure: string }
  | { kind: 'findings' }

export type MetaItem = { label: string; value: string; mono?: boolean }

export type Section = {
  id: string
  title: string
  /** Finding number, when the section is one of the report's findings. */
  number?: number
  meta?: MetaItem[]
  blocks: Block[]
}

export type Finding = {
  n: number
  title: string
  where: string
  proven: string
  rating: string
  ratingNote?: string
}

export type CaseStudy = {
  slug: string
  title: string
  standfirst: string
  description: string
  type: WorkType
  meta: MetaItem[]
  links: { label: string; href: string }[]
  findings: Finding[]
  sections: Section[]
}
