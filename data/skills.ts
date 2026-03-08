export type SkillCategory = {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'OSINT',
    items: ['Passive Recon', 'Maltego', 'Shodan', 'Google Dorking', 'WHOIS / DNS Analysis'],
  },
  {
    category: 'Web App Testing',
    items: ['OWASP Top 10', 'Burp Suite', 'SQLi / XSS', 'Auth Bypass', 'API Testing'],
  },
  {
    category: 'Threat Intel',
    items: ['IOC Analysis', 'MITRE ATT&CK', 'VirusTotal', 'Open-source Feeds', 'Threat Profiling'],
  },
  {
    category: 'Report Writing',
    items: ['Executive Summaries', 'Risk Ratings', 'CVSS Scoring', 'Remediation Plans', 'Technical Docs'],
  },
]
