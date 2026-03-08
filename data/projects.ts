export type Project = {
  id: string
  title: string
  description: string
  bullets: string[]
  tags: string[]
  badge?: string
  link?: string
  featured?: boolean
  accentHex: string
}

export const projects: Project[] = [
  {
    id: 'osint',
    title: 'OSINT Investigation Evidence Packs',
    description:
      'Case-style OSINT reports using Shodan, WHOIS lookups, and social media analysis, structured for evidential use with full source attribution.',
    bullets: [
      'Structured case files with source attribution and screenshot evidence',
      'Timeline reconstruction and subject profiling',
      'Risk-rated summaries written for non-technical stakeholders',
    ],
    tags: ['OSINT', 'Investigations', 'Reporting'],
    badge: 'Private · NDA',
    featured: true,
    accentHex: '#00ff8c',
  },
  {
    id: 'webapp',
    title: 'Web App Testing (Burp + Manual)',
    description:
      'Manual web application assessments using Burp Suite, from recon and parameter fuzzing to an evidence-packaged report with CVSS-rated severity.',
    bullets: [
      'OWASP Top 10 coverage: auth bypass, input validation, session analysis',
      'Manual request tampering and parameter fuzzing via Burp Suite',
      'Evidence-packaged findings with CVSS-rated severity',
    ],
    tags: ['Web Testing', 'Burp Suite', 'OWASP'],
    badge: 'Private · NDA',
    featured: true,
    accentHex: '#60a5fa',
  },
  {
    id: 'crypto',
    title: 'Crypto Fraud Detection Research (UWL)',
    description:
      'Final-year dissertation applying OSINT and CTI techniques, including MITRE ATT&CK mapping and on-chain analysis, to detect and report cryptocurrency fraud patterns.',
    bullets: [
      'OSINT + CTI methodology for tracing cryptocurrency fraud patterns',
      'Threat actor profiling mapped to MITRE ATT&CK',
      'Executive-ready report with prioritised recommendations',
    ],
    tags: ['CTI', 'OSINT', 'Crypto'],
    badge: 'Academic Project',
    accentHex: '#a78bfa',
  },
  {
    id: 'homelab',
    title: 'Homelab & CTF Writeups',
    description:
      'Personal Kali Linux lab with documented Hack The Box writeups, covering privilege escalation, web exploitation, and post-exploitation methodology.',
    bullets: [
      'Kali-based lab with deliberately vulnerable VMs (HTB, TryHackMe)',
      'Methodology-first writeups: privilege escalation, web exploitation, forensics',
      'Documented on GitHub for public reference',
    ],
    tags: ['Linux', 'Networking', 'CTF'],
    link: 'https://github.com/salahudeenmatine',
    accentHex: '#fb923c',
  },
]
