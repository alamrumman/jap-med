import {
  SnowIcon,
  HeadIcon,
  BodyIcon,
  ThermoIcon,
  LeafIcon,
  ArrowRight,
} from '../components/Icons.jsx'

const SYMPTOMS = [
  { icon: SnowIcon, label: 'かぜ・せき' },
  { icon: HeadIcon, label: '頭痛' },
  { icon: BodyIcon, label: '体の痛み' },
  { icon: ThermoIcon, label: '発熱' },
  { icon: LeafIcon, label: 'アレルギー' },
]

export default function Hero({ onLearnMore }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">つらい症状に、これひとつ。</p>
          <h1 id="hero-title" className="hero-title">
            ひとつの薬に、
            <br />
            毎日の安心を。
          </h1>
          <p className="hero-sub">
            リリーバは、頭痛・発熱・かぜ・せき・体の痛みなど、
            毎日のつらい症状をすばやく緩和するために設計された総合かぜ薬です。
          </p>
          <div className="hero-actions">
            <a
              href="#relief"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                onLearnMore()
              }}
            >
              詳しく見る <ArrowRight />
            </a>
            <a href="#cta" className="btn btn-secondary">
              ご購入はこちら
            </a>
          </div>
        </div>

        <div className="hero-bottle-wrap">
          <img
            src="/medicine.webp"
            alt="リリーバ 総合かぜ薬のボトル。青と白のカプセルが入ったガラス瓶"
            className="hero-bottle bottle-float"
            width="900"
            height="1125"
            fetchPriority="high"
          />
          <div className="hero-pedestal" aria-hidden="true" />
        </div>

        <ul className="symptom-chips" aria-label="対応する症状">
          {SYMPTOMS.map(({ icon: Icon, label }) => (
            <li key={label} className="chip">
              <span className="chip-icon">
                <Icon />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <p className="scroll-hint" aria-hidden="true">
        スクロールして詳しく
      </p>
    </section>
  )
}
