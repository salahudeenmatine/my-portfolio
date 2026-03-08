import React from 'react'

// ─── Container ───────────────────────────────────────────────────────────────

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-5xl px-6 ${className}`}>{children}</div>
  )
}

// ─── SectionHeader ───────────────────────────────────────────────────────────

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="text-[10px] text-[#00ff8c]/60 uppercase tracking-[0.3em] mb-2">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-3 text-sm text-slate-500 leading-relaxed max-w-lg ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 h-px w-10 bg-[#00ff8c]/25 ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}

// ─── Button ──────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export function Button({
  variant = 'primary',
  href,
  children,
  download,
  className = '',
}: {
  variant?: ButtonVariant
  href: string
  children: React.ReactNode
  download?: boolean
  className?: string
}) {
  const base =
    'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff8c]/50'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'px-6 py-3 bg-[#00ff8c] text-black hover:bg-[#00e07a] hover:shadow-[0_0_24px_rgba(0,255,140,0.25)]',
    secondary:
      'px-6 py-3 border border-[#00ff8c]/30 text-[#00ff8c] hover:border-[#00ff8c] hover:bg-[#00ff8c]/5',
    ghost:
      'px-6 py-3 border border-[#1a2535] text-slate-400 hover:border-slate-600 hover:text-slate-200',
  }

  return (
    <a
      href={href}
      download={download}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

// ─── Tag ─────────────────────────────────────────────────────────────────────

export function Tag({ children }: { children: string }) {
  return (
    <span className="text-[10px] text-[#00ff8c]/70 border border-[#00ff8c]/15 bg-[#00ff8c]/5 rounded-md px-2 py-0.5 uppercase tracking-widest">
      {children}
    </span>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        relative rounded-xl border border-[#1a2535] bg-[#0c1117]
        hover:border-[#00ff8c]/20 hover:-translate-y-1
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────

export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px bg-[#1a2535] ${className}`} />
}
