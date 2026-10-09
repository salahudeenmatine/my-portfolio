import type { CSSProperties, ReactNode } from 'react'

export type FlowItem = {
  main: ReactNode
  /** Margin content. Starts level with this item and runs down beside following items. */
  margin?: ReactNode
  /** Spans both columns (figures, tables). Stops any margin note above it. */
  wide?: boolean
}

type Vars = CSSProperties & { '--r'?: number; '--span'?: number }

/**
 * A reading column with a margin beside it. Each margin note is placed level
 * with the item it belongs to and may extend down alongside the items that
 * follow, so a tall note never pushes the text apart. On narrow screens the
 * grid collapses and each note sits directly under its item.
 */
export function Flow({ items }: { items: FlowItem[] }) {
  const cells: ReactNode[] = []
  items.forEach((item, i) => {
    const r = i + 1
    const mainStyle: Vars = { '--r': r }
    cells.push(
      <div key={`main-${i}`} className={item.wide ? 'flow-main flow-main--wide' : 'flow-main'} style={mainStyle}>
        {item.main}
      </div>,
    )
    if (item.margin && !item.wide) {
      let span = 1
      for (let j = i + 1; j < items.length && !items[j].wide && !items[j].margin; j++) span++
      const noteStyle: Vars = { '--r': r, '--span': span }
      cells.push(
        <div key={`margin-${i}`} className="flow-margin" style={noteStyle}>
          {item.margin}
        </div>,
      )
    }
  })
  return <div className="flow">{cells}</div>
}
