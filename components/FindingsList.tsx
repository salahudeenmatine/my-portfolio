import type { Finding } from '@/content/case-studies/types'

/**
 * The report numbers its findings, so this is an ordered list. Laid out as a
 * table on wide screens; the column labels are repeated inline for small
 * screens and screen readers.
 */
export function FindingsList({
  findings,
  compact = false,
  linkBase,
}: {
  findings: Finding[]
  compact?: boolean
  /** When set, each title links to its section, e.g. "#finding-". */
  linkBase?: string
}) {
  return (
    <div className={compact ? 'findings findings--compact' : 'findings'}>
      {!compact && (
        <div className="findings-head" aria-hidden="true">
          <span>#</span>
          <span>Finding</span>
          <span>Where</span>
          <span>Proven through</span>
          <span>Rating</span>
        </div>
      )}
      <ol>
        {findings.map((f) => (
          <li key={f.n} className="finding">
            <span className="finding-n" aria-hidden="true">
              {f.n}
            </span>
            <span className="finding-title">
              {linkBase ? <a href={`${linkBase}${f.n}`}>{f.title}</a> : f.title}
            </span>
            <span className="finding-where">
              <span className="finding-label">Where: </span>
              <span className="mono">{f.where}</span>
            </span>
            {!compact && (
              <span className="finding-proven">
                <span className="finding-label">Proven through: </span>
                {f.proven}
              </span>
            )}
            <span className="finding-rating">
              <span className="finding-label">Rating: </span>
              {f.rating}
              {f.ratingNote ? <span className="finding-rating-note"> ({f.ratingNote})</span> : null}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
