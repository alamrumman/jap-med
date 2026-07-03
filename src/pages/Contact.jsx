import { useState } from 'react'
import { ArrowRight } from '../components/Icons.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="static-page">
      <div className="container" style={{ maxWidth: 'var(--max-w)' }}>
        <h1>お問い合わせ</h1>
        <p className="page-updated">
          製品に関するご質問・ご相談は、下記フォームよりお気軽にお寄せください。
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h2>お客様相談室</h2>
            <p>
              受付時間：平日 9:00〜17:00（土日祝日を除く）
              <br />
              電話：0120-000-000（フリーダイヤル）
            </p>

            <h2>医療従事者の方へ</h2>
            <p>
              製品の学術情報に関するお問い合わせは、フォームの種別で「医療従事者」を選択してください。
            </p>

            <h2>副作用等の報告</h2>
            <p>
              服用後に気になる症状があらわれた場合は、直ちに服用を中止し、
              医師または薬剤師にご相談ください。
            </p>
          </div>

          {sent ? (
            <div className="form-success" role="status">
              お問い合わせを受け付けました。内容を確認のうえ、担当者より3営業日以内にご連絡いたします。
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-field">
                <label htmlFor="name">お名前（必須）</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">メールアドレス（必須）</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="form-field">
                <label htmlFor="type">お問い合わせ種別</label>
                <select id="type" name="type" defaultValue="製品について">
                  <option>製品について</option>
                  <option>ご購入について</option>
                  <option>医療従事者</option>
                  <option>その他</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">お問い合わせ内容（必須）</label>
                <textarea id="message" name="message" rows="6" required />
              </div>

              <button type="submit" className="btn btn-primary">
                送信する <ArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
