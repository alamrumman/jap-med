import { useEffect, useRef } from 'react'

// Adds `className` to the element once it enters the viewport.
export function useInView(className = 'visible', threshold = 0.2) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [className, threshold])

  return ref
}
