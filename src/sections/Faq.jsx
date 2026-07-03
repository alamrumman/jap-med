import { PlusIcon } from '../components/Icons.jsx'

const FAQS = [
  {
    q: 'リリーバはどのような症状に効きますか？',
    a: '頭痛、発熱、のどの痛み、せき、鼻みず、鼻づまり、体の痛みなど、かぜに伴う諸症状の緩和に効果があります。',
  },
  {
    q: '1日に何回服用すればよいですか？',
    a: '成人（15歳以上）は1回2カプセル、1日3回、食後に水またはぬるま湯で服用してください。服用間隔は4時間以上あけてください。',
  },
  {
    q: '子どもも服用できますか？',
    a: '15歳未満の方は服用しないでください。お子様には小児用の医薬品をご使用ください。',
  },
  {
    q: '他の薬と併用しても大丈夫ですか？',
    a: '他のかぜ薬、解熱鎮痛薬、鎮咳去痰薬、抗ヒスタミン剤等との併用は避けてください。服用中の薬がある場合は、医師または薬剤師にご相談ください。',
  },
  {
    q: '眠くなる成分は入っていますか？',
    a: 'クロルフェニラミンマレイン酸塩が含まれているため、眠気が生じることがあります。服用後は乗り物や機械類の運転操作をしないでください。',
  },
  {
    q: '妊娠中・授乳中でも服用できますか？',
    a: '妊娠中または妊娠していると思われる方、授乳中の方は、服用前に必ず医師または薬剤師にご相談ください。',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container">
        <p className="eyebrow">
          <span className="num">07</span> よくある質問
        </p>
        <h2 id="faq-title" className="section-title">
          気になることに、お答えします。
        </h2>

        <div className="faq-list">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                {q}
                <PlusIcon />
              </summary>
              <p className="faq-body">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
