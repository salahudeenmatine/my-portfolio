/**
 * CV files live in public/cv/. To replace a CV, overwrite the PDF with the
 * same file name. A version only appears on the site when its file exists,
 * so there are never dead download links.
 */
export type CvVersion = {
  file: string
  label: string
  /** Roles this version is written for. Shown after "for", so start lowercase unless it's an acronym. */
  forRoles: string
  primary?: boolean
}

export const cvVersions: CvVersion[] = [
  {
    file: 'salahudeen-matine-cv.pdf',
    label: 'CV',
    forRoles: 'graduate and junior cybersecurity and security analyst roles',
    primary: true,
  },
  {
    file: 'salahudeen-matine-cv-osint.pdf',
    label: 'CV, investigations version',
    forRoles: 'OSINT, investigations, threat intelligence and fraud intelligence roles',
  },
  {
    file: 'salahudeen-matine-cv-technical.pdf',
    label: 'CV, technical security version',
    forRoles: 'application security and AI security roles',
  },
]
