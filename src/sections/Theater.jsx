import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  SnowIcon,
  HeadIcon,
  BodyIcon,
  ThermoIcon,
  LeafIcon,
} from '../components/Icons.jsx'

const CHAPTERS = [
  {
    id: 'cold',
    icon: SnowIcon,
    color: 'var(--cold)',
    title: 'かぜ・せきに',
    text: 'のどの痛み、せき、鼻みず、鼻づまり。かぜのひきはじめから、つらいピークまで。有効成分が気道の炎症をしずめ、呼吸を楽にします。',
    points: ['くしゃみ・鼻みず', '鼻づまり', 'のどの痛み・せき', 'すばやい緩和へ'],
    bottle: { rotate: 0, y: 0, scale: 1 },
  },
  {
    id: 'headache',
    icon: HeadIcon,
    color: 'var(--headache)',
    title: '頭痛に',
    text: 'ズキズキと続く頭の痛みに。鎮痛成分が痛みの原因物質の生成をおさえ、頭痛をやわらげます。仕事や家事の途中でも、いつもの毎日へ。',
    points: ['ズキズキする痛み', '緊張型の頭痛', '発熱に伴う頭重感'],
    bottle: { rotate: 6, y: 0, scale: 1 },
  },
  {
    id: 'pain',
    icon: BodyIcon,
    color: 'var(--pain)',
    title: '体の痛みに',
    text: '関節の痛み、筋肉の痛み、悪寒による体のだるさに。炎症をしずめる成分が全身に行きわたり、体を内側から楽にします。',
    points: ['筋肉の痛み', '関節の痛み', '回復をサポート'],
    bottle: { rotate: -4, y: 10, scale: 0.98 },
  },
  {
    id: 'fever',
    icon: ThermoIcon,
    color: 'var(--fever)',
    title: '発熱に',
    text: '急な発熱にも。解熱成分が体温調節中枢にはたらきかけ、熱を穏やかに下げます。体力の消耗をおさえ、回復を後押しします。',
    points: ['急な発熱', '熱によるだるさ', '穏やかな解熱作用'],
    bottle: { rotate: 0, y: 0, scale: 1.04 },
  },
  {
    id: 'allergy',
    icon: LeafIcon,
    color: 'var(--allergy)',
    title: 'アレルギー症状に',
    text: '花粉やハウスダストによるくしゃみ・鼻みずに。抗ヒスタミン成分がアレルギー反応をブロックし、不快な症状をしずめます。',
    points: ['花粉によるくしゃみ', 'アレルギー性鼻炎', '目や鼻のムズムズ'],
    bottle: { rotate: 3, y: -6, scale: 1 },
  },
]

export default function Theater() {
  const [active, setActive] = useState(null)
  const rootRef = useRef(null)
  const bottleRef = useRef(null)
  const chapterRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.dataset.id
          entry.target.classList.toggle('in-view', entry.isIntersecting)
          if (entry.isIntersecting) setActive(id)
        }
      },
      { threshold: 0.35 },
    )

    chapterRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!active || !bottleRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const { bottle } = CHAPTERS.find((c) => c.id === active)
    const tween = gsap.to(bottleRef.current, {
      rotate: bottle.rotate,
      y: bottle.y,
      scale: bottle.scale,
      duration: 1.1,
      ease: 'power2.out',
    })
    return () => tween.kill()
  }, [active])

  return (
    <section
      id="relief"
      className="theater"
      data-chapter={active ?? ''}
      ref={rootRef}
      aria-labelledby="theater-title"
    >
      <h2 id="theater-title" className="visually-hidden">
        リリーバが効く症状
      </h2>
      <div className="container theater-grid">
        <div className="theater-stage">
          <div className="stage-bottle-wrap" ref={bottleRef}>
            <div className="stage-glow" aria-hidden="true" />
            <img
              src="/medicine.webp"
              alt=""
              aria-hidden="true"
              className="stage-bottle"
              width="900"
              height="1125"
              loading="lazy"
            />
          </div>
        </div>

        <div className="chapters">
          {CHAPTERS.map((chapter, i) => {
            const Icon = chapter.icon
            return (
              <article
                key={chapter.id}
                className="chapter"
                data-id={chapter.id}
                ref={(el) => (chapterRefs.current[i] = el)}
              >
                <span className="chapter-icon" style={{ color: chapter.color }}>
                  <Icon size={26} />
                </span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
                <ul className="chapter-points">
                  {chapter.points.map((point) => (
                    <li key={point}>
                      <span
                        className="point-dot"
                        style={{ background: chapter.color }}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
