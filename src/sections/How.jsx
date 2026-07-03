import { useInView } from '../hooks/useInView.js'

const STEPS = [
  {
    title: '症状を狙う',
    text: '有効成分がすばやく溶け出し、症状の原因に向かいます。',
  },
  {
    title: '原因に作用',
    text: '痛みや炎症の原因物質の生成をおさえます。',
  },
  {
    title: '症状を緩和',
    text: 'つらい症状をしずめ、体を守ります。',
  },
  {
    title: '回復へ',
    text: '体力の消耗をおさえ、本来の調子を取り戻します。',
  },
]

export default function How() {
  const ref = useInView()

  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">02</span> 作用の仕組み
        </p>
        <h2 id="how-title" className="section-title">
          科学が、回復を支える。
        </h2>
        <p className="section-lead">
          リリーバは複数の有効成分を組み合わせ、症状の原因に直接はたらきかけて、
          長く続く緩和効果を発揮します。
        </p>

        <div className="how-figure reveal" ref={ref}>
          <img
            src="/how.webp"
            alt="リリーバの作用を示す4ステップの図：カプセル、有効成分の分子、盾、回復した人体"
            loading="lazy"
            width="1400"
            height="637"
          />
          <div className="how-steps">
            {STEPS.map((step, i) => (
              <div key={step.title} className="how-step">
                <span className="step-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
