// Design tokens — single source of truth for colors and accent hex values.
// Tailwind classes reference these values as arbitrary utilities.

export const COLORS = {
  bg:          '#080b10',
  surface:     '#0c1117',
  surfaceDark: '#060910',
  border:      '#1a2535',
  accent:      '#00ff8c',
} as const

// Per-project accent colors (used in inline styles to avoid Tailwind purge issues)
export const PROJECT_ACCENTS: Record<string, string> = {
  osint:   '#00ff8c',
  webapp:  '#60a5fa',
  crypto:  '#a78bfa',
  homelab: '#fb923c',
}
