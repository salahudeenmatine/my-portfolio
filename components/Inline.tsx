import { SmartLink } from './SmartLink'

const TOKEN = /(`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/

/** Renders content strings, turning `code` and [text](href) into elements. */
export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.length > 2 && part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>
        }
        const link = part.match(LINK)
        if (link) {
          return (
            <SmartLink key={i} href={link[2]}>
              {link[1]}
            </SmartLink>
          )
        }
        return part
      })}
    </>
  )
}
