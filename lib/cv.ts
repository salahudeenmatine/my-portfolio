import fs from 'node:fs'
import path from 'node:path'
import { cvVersions, type CvVersion } from '@/content/cv'

export type AvailableCv = CvVersion & { href: string; sizeKb: number }

/**
 * Returns only the CV versions whose PDF actually exists in public/cv/.
 * Checked at build time, so a missing file never becomes a dead link.
 */
export function availableCvs(): AvailableCv[] {
  return cvVersions.flatMap((v) => {
    const file = path.join(process.cwd(), 'public', 'cv', v.file)
    if (!fs.existsSync(file)) return []
    return [{ ...v, href: `/cv/${v.file}`, sizeKb: Math.max(1, Math.round(fs.statSync(file).size / 1024)) }]
  })
}

export const primaryCv = () => availableCvs().find((v) => v.primary)
