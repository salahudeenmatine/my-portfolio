import { snapstore, evidence as snapstoreEvidence } from './snapstore'
import type { CaseStudy, Evidence } from './types'

/**
 * Add a case study: create content/case-studies/<slug>.ts, add it here,
 * and set `caseStudy: true` on the matching project in content/projects.ts.
 */
export const caseStudies: { study: CaseStudy; evidence: Record<string, Evidence> }[] = [
  { study: snapstore, evidence: snapstoreEvidence },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.study.slug === slug)
