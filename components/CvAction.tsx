import { site } from '@/content/site'
import { primaryCv } from '@/lib/cv'

/** Download link for the main CV, or an email request if no PDF is present. */
export function CvAction({ className = 'text-link' }: { className?: string }) {
  const cv = primaryCv()
  if (cv) {
    return (
      <a className={className} href={cv.href}>
        Download CV (PDF, {cv.sizeKb} KB)
      </a>
    )
  }
  return (
    <a className={className} href={`mailto:${site.email}?subject=CV%20request`}>
      Request my CV by email
    </a>
  )
}
