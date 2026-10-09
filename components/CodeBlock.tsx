export function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <figure className="code">
      <figcaption>{label}</figcaption>
      {/* Focusable so keyboard users can scroll long lines. */}
      <pre tabIndex={0} role="region" aria-label={`Code: ${label}`}>
        <code>{code}</code>
      </pre>
    </figure>
  )
}
