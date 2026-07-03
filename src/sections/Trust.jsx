import { useInView } from '../hooks/useInView.js'
import { ShieldIcon, FlaskIcon, FactoryIcon, DoctorIcon } from '../components/Icons.jsx'

const POINTS = [
  {
    icon: ShieldIcon,
    title: 'GMP認定工場で製造',
    text: '国際基準の品質管理のもと、一貫した品質で製造しています。',
  },
  {
    icon: FlaskIcon,
    title: '全ロット品質検査',
    text: '出荷前にすべてのロットで純度と含有量を検査しています。',
  },
  {
    icon: FactoryIcon,
    title: '国内製造',
    text: '原料の受け入れから包装まで、国内の自社工場で行っています。',
  },
  {
    icon: DoctorIcon,
    title: '医療従事者との連携',
    text: '医師・薬剤師の知見を製品開発に反映しています。',
  },
]

export default function Trust() {
  const ref = useInView()

  return (
    <section id="trust" className="trust" aria-labelledby="trust-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">05</span> 専門家の信頼
        </p>
        <h2 id="trust-title" className="section-title">
          医師に信頼され、
          <br />
          多くの人に愛される。
        </h2>

        <div className="trust-grid reveal" ref={ref}>
          <figure className="doctor-quote">
            <blockquote>
              「複数の症状に悩む患者さんに、私がまずおすすめするのがリリーバです。
              安全で、効果的で、信頼できる。それがこの薬を選ぶ理由です。」
            </blockquote>
            <figcaption>
              <strong>アルジュン・メータ 医師</strong>
              内科専門医（MBBS, MD）
            </figcaption>
          </figure>

          <div className="trust-points">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="trust-point">
                <span className="tp-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
