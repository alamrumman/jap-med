import { useInView } from '../hooks/useInView.js'
import {
  SnowIcon,
  HeadIcon,
  BodyIcon,
  ThermoIcon,
  LeafIcon,
} from '../components/Icons.jsx'

const CARDS = [
  {
    icon: HeadIcon,
    title: '頭痛',
    text: '頭痛や片頭痛の痛みをやわらげます。',
  },
  {
    icon: SnowIcon,
    title: 'かぜ・せき',
    text: 'くしゃみ、鼻みず、鼻づまりを緩和します。',
  },
  {
    icon: BodyIcon,
    title: '体の痛み',
    text: '筋肉や関節の痛みをしずめます。',
  },
  {
    icon: ThermoIcon,
    title: '発熱',
    text: '熱を下げ、体を楽にします。',
  },
  {
    icon: LeafIcon,
    title: 'アレルギー',
    text: 'アレルギーによる不快感を緩和します。',
  },
]

export default function Relief() {
  const ref = useInView()

  return (
    <section className="relief" aria-labelledby="relief-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">01</span> マルチシンプトム
        </p>
        <h2 id="relief-title" className="section-title">
          必要なところに、
          <br />
          効く。
        </h2>
        <p className="section-lead">
          リリーバは毎日のさまざまな症状を幅広く緩和し、
          あなたがいつもの生活に戻れるようサポートします。
        </p>

        <div className="relief-grid reveal" ref={ref}>
          <div className="relief-figure">
            <img
              src="/human.webp"
              alt="頭・肩・胸・腹部が青く光る人体イラスト。リリーバが作用する部位を示す"
              loading="lazy"
              width="900"
              height="755"
            />
          </div>
          <ul className="relief-cards" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {CARDS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="relief-card">
                <span className="chip-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
