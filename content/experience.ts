import type { WorkType } from './work-types'

/**
 * Text supports `inline code` and [link text](/path) formatting.
 */

export const isecom = {
  organisation: 'ISECOM',
  role: 'Cybersecurity & OSINT Intern',
  place: 'Remote',
  dates: '2024 – May 2026',
  types: ['client', 'supervised'] as WorkType[],

  /** Opening line on the Experience page. */
  intro:
    'A remote internship working on real client investigations, alongside supervised web application testing.',

  /** Short version for the homepage. */
  summary: [
    'I worked on real client investigations into individuals, online personas, companies and organisations. Most of the work was open-source research into domains, IP addresses and online infrastructure: working out how they connect to each other and to online identities, then writing it up in structured reports.',
    'I also carried out manual web application testing with Burp Suite Proxy, under supervision. Confirmed findings included insecure cookie attributes, exposed directories and session-management weaknesses.',
  ],

  investigations: [
    'Open-source research into individuals, online personas, companies and organisations.',
    'Domain and IP address research, DNS analysis and investigation of online infrastructure.',
    'Identifying and mapping associations between domains, IP addresses and online identities.',
    'Using SpiderFoot, Shodan, WHOIS and DNS tools.',
    'Using LOLArchiver to locate leaked data and assess identity-related information relevant to an investigation.',
    'Collecting and documenting supporting evidence.',
    'Writing structured reports explaining findings, risks and remediation recommendations.',
    'Explaining findings to senior analysts and to non-technical stakeholders.',
  ],

  testing: [
    'Manual web application security testing using Burp Suite Proxy, carried out under supervision.',
    'Confirmed findings included insecure cookie attributes, exposed directories and session-management weaknesses.',
  ],

  confidentiality:
    'Client names, investigation subjects and case material are confidential, so none of it appears on this site.',
}

export const bigBus = {
  organisation: 'Big Bus Tours',
  role: 'Sales Representative',
  place: 'London',
  dates: 'March 2022 – January 2026',
  summary:
    'Customer-facing sales in a busy London tourism business. I helped customers through the booking platforms, troubleshot booking and platform problems, and sorted out issues on the spot.',
}

export const education = [
  {
    qualification: 'BSc (Hons) Cybersecurity',
    institution: 'University of West London',
    dates: '2023–2026',
    result: 'First Class Honours',
    note: 'Final-year project: a [cryptocurrency fraud investigation framework](/work#crypto-framework).',
  },
  {
    qualification: 'BTEC Level 3 Diploma in Applied Sciences',
    institution: 'Westminster Kingsway College',
    dates: '2021–2023',
  },
  {
    qualification: 'Baccalaureate',
    institution: 'Agadir, Morocco',
    dates: '2021',
  },
]

export const languages = 'English, Arabic and French, all fluent.'

/** Tools and techniques, each tied to where it was actually used. */
export const toolsUsed: { tools: string; where: string }[] = [
  { tools: 'SpiderFoot, Shodan, WHOIS, DNS tools, LOLArchiver', where: 'ISECOM client investigations' },
  { tools: 'Burp Suite Proxy', where: 'ISECOM, supervised web application testing' },
  { tools: 'Source code review (Go, C, Rust, Python), curl', where: '[Snapstore assessment](/work/snapstore)' },
  { tools: 'Python', where: '[Attack Surface Mapper](/work#attack-surface-mapper) and my [final-year framework](/work#crypto-framework)' },
  { tools: 'Nmap, Nikto, Hydra', where: 'University labs' },
  { tools: 'TCP/IP, subnetting, virtual machines', where: 'University labs' },
]

/** Short background paragraphs for the homepage. */
export const homeBackground = {
  education:
    'I graduated from the University of West London in 2026 with a First Class BSc (Hons) in Cybersecurity. Before that I took a BTEC Level 3 Diploma in Applied Sciences at Westminster Kingsway College.',
  work:
    'From 2022 to early 2026 I also worked as a sales representative at Big Bus Tours in London: helping customers through the booking platforms, troubleshooting booking and platform problems, and sorting issues out in a busy customer-facing job.',
  languages: 'I speak English, Arabic and French fluently.',
}
