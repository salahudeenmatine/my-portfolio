import type { ReactNode } from 'react'

/**
 * The page is built from rows: a reading column and, beside it, a margin for
 * work type, dates and limits. On narrow screens the margin drops underneath.
 * `wide` rows (figures) span the full width and have no margin.
 */
export function Row({
  children,
  margin,
  wide = false,
  className,
}: {
  children: ReactNode
  margin?: ReactNode
  wide?: boolean
  className?: string
}) {
  return (
    <div className={['row', wide ? 'row--wide' : '', className ?? ''].join(' ').trim()}>
      <div className="row-main">{children}</div>
      {!wide && margin ? <div className="row-margin">{margin}</div> : null}
    </div>
  )
}
