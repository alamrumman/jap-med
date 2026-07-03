import { useEffect, useRef } from 'react'

const STATS = [
  { value: 3200, unit: '万人', label: 'ご愛用者数' },
  { value: 24, unit: 'か国', label: '展開国数' },
  { value: 8500, unit: '名', label: '推奨する医師' },
  { value: 120, unit: '件', label: '臨床研究' },
]

function animateCount(el, target, duration = 1600) {
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(target * eased).toLocaleString('ja-JP')
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default function Stats() {
  const rowRef = useRef(null)

  useEffect(() => {
    const row = rowRef.current
    if (!row) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        row.querySelectorAll('[data-count]').forEach((el) => {
          const target = Number(el.dataset.count)
          if (reduced) {
            el.textContent = target.toLocaleString('ja-JP')
          } else {
            animateCount(el, target)
          }
        })
        io.disconnect()
      },
      { threshold: 0.4 },
    )

    io.observe(row)
    return () => io.disconnect()
  }, [])

  return (
    <section className="stats" aria-labelledby="stats-title">
      <h2 id="stats-title" className="visually-hidden">
        リリーバの実績
      </h2>
      <div className="container stats-row" ref={rowRef}>
        {STATS.map(({ value, unit, label }) => (
          <div key={label}>
            <p className="stat-value">
              <span data-count={value}>0</span>
              <span className="unit">{unit}</span>
            </p>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
