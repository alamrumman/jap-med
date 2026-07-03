import { useInView } from '../hooks/useInView.js'
import { ArrowRight } from '../components/Icons.jsx'
import { Link } from '../router.jsx'

export default function Cta() {
  const ref = useInView()

  return (
    <section id="cta" className="cta" aria-labelledby="cta-title">
      <div className="container reveal" ref={ref}>
        <img
          src="/medicine.webp"
          alt="リリーバ 総合かぜ薬"
          className="cta-bottle"
          loading="lazy"
          width="900"
          height="1125"
        />
        <h2 id="cta-title">そろそろ、楽になりませんか。</h2>
        <p>
          リリーバで、速く、確かな、トータルケアを。
          つらい症状に悩む毎日から、いつもの自分へ。
        </p>
        <div className="cta-actions">
          <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
            ご購入はこちら <ArrowRight />
          </a>
          <Link to="/contact" className="btn btn-secondary">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  )
}
