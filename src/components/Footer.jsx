import { Link } from '../router.jsx'
import { LogoMark } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">
              <LogoMark />
              リリーバ
            </span>
            <p>
              つらいかぜの諸症状に、速くよく効く。
              毎日の健康を支える総合かぜ薬です。
            </p>
          </div>

          <nav className="footer-col" aria-label="製品情報">
            <h3>製品情報</h3>
            <ul>
              <li><a href="/#relief">効能・効果</a></li>
              <li><a href="/#ingredients">有効成分</a></li>
              <li><a href="/#how">作用の仕組み</a></li>
              <li><a href="/#faq">よくある質問</a></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="サポート">
            <h3>サポート</h3>
            <ul>
              <li><Link to="/about">私たちについて</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
              <li><a href="/#faq">使用上の注意</a></li>
              <li><a href="/#trust">品質へのこだわり</a></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="規約・ポリシー">
            <h3>規約・ポリシー</h3>
            <ul>
              <li><Link to="/privacy">プライバシーポリシー</Link></li>
              <li><Link to="/terms">利用規約</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 リリーバ製薬株式会社 All rights reserved.</span>
          <span>第②類医薬品 — 使用上の注意をよく読み、用法・用量を守って正しくお使いください。</span>
        </div>
      </div>
    </footer>
  )
}
