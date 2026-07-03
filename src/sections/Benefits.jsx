import { useInView } from '../hooks/useInView.js'
import {
  DoctorIcon,
  FlaskIcon,
  ClockIcon,
  ShieldIcon,
  HeartIcon,
  CapsuleIcon,
} from '../components/Icons.jsx'

const BENEFITS = [
  { icon: DoctorIcon, label: '医師推奨' },
  { icon: FlaskIcon, label: '臨床試験済み' },
  { icon: ClockIcon, label: 'すばやい効き目' },
  { icon: ShieldIcon, label: '体にやさしい処方' },
  { icon: HeartIcon, label: '安心の品質' },
  { icon: CapsuleIcon, label: '飲みやすいカプセル' },
]

export default function Benefits() {
  const ref = useInView()

  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">03</span> 選ばれる理由
        </p>
        <h2 id="benefits-title" className="section-title">
          多くの人に、信頼される理由。
        </h2>

        <div className="benefit-row reveal" ref={ref}>
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="benefit">
              <span className="benefit-icon">
                <Icon size={28} />
              </span>
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
