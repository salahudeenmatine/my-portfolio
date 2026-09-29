import type { WorkType } from './work-types'

export type ProjectLink = { label: string; href: string }

export type Project = {
  /** Used for the #anchor on /work, and the URL if it has a case study. */
  slug: string
  title: string
  type: WorkType
  /** Short facts shown in the margin, e.g. language or date. */
  facts: string[]
  /** One sentence for the homepage. Keep it different from `description`. */
  summary: string
  /** Fuller description for /work. Paragraphs. */
  description: string[]
  points?: string[]
  pointsHeading?: string
  /** What the work does not show. Shown in the margin, next to the claim. */
  limits?: string[]
  links?: ProjectLink[]
  /** True when /work/[slug] has a full case study (see content/case-studies.ts). */
  caseStudy?: boolean
  /** Show on the homepage under "Other work". */
  onHome?: boolean
  /** Link text used on the homepage, e.g. "More on the Attack Surface Mapper". */
  moreLabel?: string
}

export const projects: Project[] = [
  {
    slug: 'snapstore',
    title: 'Snapstore security assessment',
    type: 'lab',
    facts: ['August 2026', 'Go, C, Rust and Python target', 'Public report'],
    summary:
      'An authorised local assessment of a deliberately vulnerable service written in Go, C, Rust and Python. I reviewed the source with AI assistance and reproduced five findings against the running service.',
    description: [
      'A full security assessment of snapstore (r2c-mock-polyglot), a deliberately vulnerable practice service, run locally. Five findings: server-side request forgery, a stack buffer overflow, path traversal, SQL injection and untrusted PATH resolution. Each one is written up with the vulnerable code, the exact request, the proof output and a fix.',
    ],
    limits: [
      'The buffer overflow is proven as a remote crash. Code execution was not demonstrated.',
      'The PATH finding needs write access to an early PATH directory. It is not a standalone remote exploit.',
    ],
    links: [
      { label: 'Read the case study', href: '/work/snapstore' },
      {
        label: 'Read the report (PDF)',
        href: 'https://github.com/salahudeenmatine/snapstore-security-assessment/blob/main/snapstore-security-assessment.pdf',
      },
      { label: 'View the repository', href: 'https://github.com/salahudeenmatine/snapstore-security-assessment' },
    ],
    caseStudy: true,
  },
  {
    slug: 'attack-surface-mapper',
    title: 'Attack Surface Mapper',
    type: 'personal',
    facts: ['Python', 'Command-line tool', 'Source not public'],
    summary:
      'A Python command-line tool that takes a domain, maps its DNS, subdomains, hosts and open ports, checks HTTP security posture and writes the results to an HTML report.',
    description: [
      'A command-line tool I built in Python to automate first-pass reconnaissance against a domain. It collects the results into an automatically generated HTML report, with a severity rating on each result from a rule set I wrote.',
    ],
    pointsHeading: 'What it does',
    points: [
      'Domain-based reconnaissance and DNS analysis.',
      'Subdomain discovery and host resolution.',
      'Port scanning.',
      'HTTP security-posture checks.',
      'Automated HTML reports with rule-based severity.',
    ],
    limits: ['Severity comes from my own rules, not CVSS.'],
    onHome: true,
    moreLabel: 'More on the Attack Surface Mapper',
  },
  {
    slug: 'crypto-framework',
    title: 'Cryptocurrency fraud investigation framework',
    type: 'academic',
    facts: ['Final-year project', 'University of West London', 'Python'],
    summary:
      'My final-year project: a Python framework that turns a crypto address, transaction hash or domain into a structured, traceable investigation case.',
    description: [
      'An OSINT and cyber threat intelligence framework for investigating suspected cryptocurrency fraud, combining open-source research with on-chain information. It is mainly a tooling project: I designed the workflow around how an investigation should be recorded, so every result can be traced back to where it came from.',
      'It accepts Bitcoin addresses, Ethereum addresses, transaction hashes and domains, and can draw on optional public and API-based sources such as Etherscan and Chainabuse.',
    ],
    pointsHeading: 'Each case is kept as',
    points: [
      'A case folder with metadata.',
      'An evidence log.',
      'Findings.',
      'The raw API responses.',
      'Run logs.',
      'A structured report.',
    ],
    limits: ['An academic project, not professional casework.'],
    onHome: true,
    moreLabel: 'More on the investigation framework',
  },
  {
    slug: 'tantalus',
    title: 'Tantalus AI-agent security challenge',
    type: 'challenge',
    facts: ['Reached Round 2', 'Prompt injection', 'AI agent tool use'],
    summary:
      'Prompt injection against a tool-using AI agent. I reached Round 2 and got the agent to disclose an API secret inside the challenge, but did not complete external exfiltration.',
    description: [
      'A security challenge built around an AI agent with access to tools. I worked on direct and indirect prompt injection and tested where the boundaries of the agent\u2019s tool use actually were.',
    ],
    pointsHeading: 'What happened',
    points: [
      'Reached Round 2, where grammar-constrained decoding forced the agent\u2019s output into a fixed schema.',
      'Demonstrated access to, and disclosure of, an API secret within the challenge environment.',
      'Investigated possible exfiltration paths. I did not complete external exfiltration.',
      'Documented successful and unsuccessful attempts, and the defences I ran into.',
    ],
    limits: ['Secret disclosure inside the challenge, not external exfiltration.'],
    onHome: true,
    moreLabel: 'More on the Tantalus challenge',
  },
]

/** Smaller supporting material shown at the foot of /work. */
export const labExposure =
  'University labs: Nmap, Nikto and Hydra in lab environments, TCP/IP and subnetting, and building and running virtual machines for practical exercises.'

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
