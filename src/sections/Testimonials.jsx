import { useEffect, useRef } from 'react'

const REVIEWS = [
  {
    text: 'リリーバは効き目が早く、飲んだあとは仕事に集中できます。かぜのひきはじめには必ずお世話になっています。',
    name: '佐藤 里奈さん',
    meta: '購入確認済み・東京都',
  },
  {
    text: '頭痛持ちですが、これ一つで頭痛にも鼻炎にも対応できるのが本当に助かります。常備薬になりました。',
    name: '田中 健太さん',
    meta: '購入確認済み・大阪府',
  },
  {
    text: '家族全員で使っています。カプセルが飲みやすく、効き目も穏やかで安心です。',
    name: '鈴木 优子さん',
    meta: '購入確認済み・福岡県',
  },
]

export default function Testimonials() {
  const rowRef = useRef(null)

  useEffect(() => {
    const row = rowRef.current
    if (!row) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          row.querySelectorAll('.testimonial').forEach((el) => el.classList.add('visible'))
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    io.observe(row)
    return () => io.disconnect()
  }, [])

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">06</span> お客様の声
        </p>
        <h2 id="testimonials-title" className="section-title">
          使った人から、選ばれていく。
        </h2>

        <div className="testimonial-row" ref={rowRef}>
          {REVIEWS.map(({ text, name, meta }) => (
            <article key={name} className="testimonial">
              <p className="stars" aria-label="5つ星中5つ星">
                ★★★★★
              </p>
              <p>{text}</p>
              <p className="who">
                <strong>{name}</strong>
                {meta}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
