import { useInView } from '../hooks/useInView.js'

const INGREDIENTS = [
  {
    name: 'アセトアミノフェン',
    role: '解熱・鎮痛',
    text: '痛みをやわらげ、熱を下げます。体への負担が少なく、幅広く使われている成分です。',
  },
  {
    name: 'クロルフェニラミンマレイン酸塩',
    role: '抗ヒスタミン',
    text: 'アレルギー反応をおさえ、くしゃみ・鼻みずを緩和します。',
  },
  {
    name: 'フェニレフリン塩酸塩',
    role: '血管収縮',
    text: '鼻粘膜の腫れをしずめ、鼻づまりを楽にします。',
  },
  {
    name: 'デキストロメトルファン臭化水素酸塩',
    role: '鎮咳',
    text: 'せき中枢にはたらきかけ、つらいせきをしずめます。',
  },
]

export default function Ingredients() {
  const ref = useInView()

  return (
    <section id="ingredients" className="ingredients" aria-labelledby="ingredients-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">04</span> 有効成分
        </p>
        <h2 id="ingredients-title" className="section-title">
          厳選された成分。
          <br />
          臨床で実証された効果。
        </h2>
        <p className="section-lead">
          リリーバのすべての成分は、安全性・純度・有効性を基準に選び抜かれています。
        </p>

        <div className="ingredients-grid reveal" ref={ref}>
          <div className="ingredients-figure">
            <img
              src="/medicine.webp"
              alt="リリーバのボトルと青白のカプセル"
              loading="lazy"
              width="900"
              height="1125"
              style={{ width: 'min(380px, 90%)', margin: '0 auto' }}
            />
          </div>
          <div className="ingredient-list">
            {INGREDIENTS.map(({ name, role, text }) => (
              <div key={name} className="ingredient-card">
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
