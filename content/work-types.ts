/**
 * Every piece of work on the site is labelled with what kind of work it was.
 * Keep these categories distinct: they are what stops lab practice reading
 * like client work.
 */
export const workTypes = {
  client: 'Client work',
  supervised: 'Supervised testing',
  academic: 'Academic project',
  personal: 'Personal project',
  lab: 'Lab assessment',
  challenge: 'Security challenge',
  employment: 'Employment',
} as const

export type WorkType = keyof typeof workTypes
