export default function About() {
  return (
    <div className="static-page">
      <div className="container">
        <h1>私たちについて</h1>
        <p className="page-lead">
          「ひとつの薬に、毎日の安心を。」
          リリーバ製薬は、つらいかぜの諸症状に速く、確かに応える総合かぜ薬を通じて、
          一人ひとりの「いつもの毎日」を支えることを使命としています。
        </p>

        <h2>私たちの理念</h2>
        <p>
          体調をくずしたその日も、できるだけ早く、いつもの自分に戻ってほしい。
          その想いから、私たちは有効成分の設計から品質管理まで一貫してこだわり、
          科学的根拠にもとづいた、信頼できる医薬品づくりに取り組んでいます。
        </p>

        <h2>品質へのこだわり</h2>
        <ul>
          <li>GMP（医薬品の製造管理および品質管理の基準）に準拠した国内工場での製造</li>
          <li>原料の受け入れから出荷まで、全工程での品質検査の実施</li>
          <li>医師・薬剤師の監修による処方設計と、使用上の注意の明確な表示</li>
          <li>製品の安全性に関する情報の継続的な収集と提供</li>
        </ul>

        <h2>会社概要</h2>
        <table className="company-table">
          <tbody>
            <tr>
              <th scope="row">会社名</th>
              <td>リリーバ製薬株式会社</td>
            </tr>
            <tr>
              <th scope="row">設立</th>
              <td>2010年4月</td>
            </tr>
            <tr>
              <th scope="row">代表者</th>
              <td>代表取締役社長　佐藤 健一</td>
            </tr>
            <tr>
              <th scope="row">所在地</th>
              <td>〒100-0005　東京都千代田区丸の内一丁目1番1号</td>
            </tr>
            <tr>
              <th scope="row">資本金</th>
              <td>1億円</td>
            </tr>
            <tr>
              <th scope="row">事業内容</th>
              <td>一般用医薬品の研究・開発・製造・販売</td>
            </tr>
            <tr>
              <th scope="row">従業員数</th>
              <td>240名（2026年4月現在）</td>
            </tr>
            <tr>
              <th scope="row">許可区分</th>
              <td>医薬品製造販売業許可</td>
            </tr>
          </tbody>
        </table>

        <h2>お問い合わせ</h2>
        <p>
          製品に関するご相談やご質問は、お問い合わせページよりお気軽にご連絡ください。
          お客様相談室が、誠実に対応いたします。
        </p>
      </div>
    </div>
  )
}
