/**
 * Site-wide profile facts. Change these and every page, the metadata,
 * the social preview image and the structured data update together.
 */
export const site = {
  name: 'Salahudeen Matine',
  url: 'https://salahudeenmatine.vercel.app',
  role: 'Cybersecurity graduate',
  location: 'London, UK',
  availability: 'Available now',
  email: 'salahmatine@gmail.com',
  linkedin: 'https://www.linkedin.com/in/salahudeen-matine-3587a6218/',
  github: 'https://github.com/salahudeenmatine',

  degree: {
    title: 'BSc (Hons) Cybersecurity',
    institution: 'University of West London',
    years: '2023–2026',
    result: 'First Class Honours',
  },

  /** Used for the page description, search results and link previews. */
  description:
    'Cybersecurity graduate (First Class, University of West London, 2026) with client OSINT investigation experience, supervised web application testing and Python security tooling. Based in London.',

  /** Homepage introduction. */
  intro:
    "I've carried out OSINT investigations for real clients, done supervised web application testing and built Python security tools. Across all of it I do the same thing: collect the evidence, show what it proves, and say plainly what it doesn't.",

  /** Shown in the contact block at the foot of every page. */
  contactNote:
    "I'm available now for graduate and junior security roles. Email is the quickest way to reach me.",
} as const
