import Image from 'next/image'
import type { Evidence } from '@/content/case-studies/types'

export function EvidenceFigure({ evidence, priority = false }: { evidence: Evidence; priority?: boolean }) {
  const { src, alt, caption, reportFigure, dark, highlights } = evidence
  return (
    <figure className="evidence">
      <div className="evidence-scroll" tabIndex={0} role="region" aria-label={`Report figure ${reportFigure}, scrollable`}>
        {/* Screenshots are 2x retina captures: never shrink below half their pixel width, so terminal text stays at its original size. */}
        <div
          className={dark ? 'evidence-frame evidence-frame--dark' : 'evidence-frame'}
          style={{ minWidth: `${Math.round(src.width / 2)}px` }}
        >
          <Image src={src} alt={alt} sizes="(min-width: 76rem) 70rem, 44rem" priority={priority} />
          {highlights.map((h, i) => (
            <span
              key={i}
              className="evidence-mark"
              style={{ top: `${h.top}%`, height: `${h.height}%` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <figcaption>
        <strong>Report figure {reportFigure}.</strong> {caption}{' '}
        <span className="evidence-key">The outlined lines are the proof.</span>{' '}
        <a href={src.src}>Open the full-size screenshot</a>
        <span className="evidence-hint"> Scroll sideways to read long lines.</span>
      </figcaption>
    </figure>
  )
}
