import { workTypes, type WorkType } from '@/content/work-types'
import type { MetaItem, Note } from '@/content/case-studies/types'
import { Inline } from './Inline'

export function WorkTypes({ types }: { types: WorkType[] }) {
  return (
    <ul className="worktypes" aria-label="Type of work">
      {types.map((t) => (
        <li key={t} className="worktype">
          {workTypes[t]}
        </li>
      ))}
    </ul>
  )
}

export function Facts({ items }: { items: string[] }) {
  return (
    <ul className="facts">
      {items.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  )
}

export function MetaList({ items }: { items: MetaItem[] }) {
  return (
    <dl className="meta">
      {items.map((m) => (
        <div key={m.label} className="meta-item">
          <dt>{m.label}</dt>
          <dd className={m.mono ? 'mono' : undefined}>{m.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function MarginNote({ note }: { note: Note }) {
  return (
    <p className={note.tone === 'limit' ? 'note note--limit' : 'note'}>
      <span className="note-label">{note.label}</span> <Inline text={note.text} />
    </p>
  )
}
