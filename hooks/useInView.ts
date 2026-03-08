'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds the class `in-view` to the returned ref's element when it enters the
 * viewport. Works with the `.animate-fade-in-up` CSS animation defined in
 * globals.css. Observer disconnects after first trigger.
 */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
