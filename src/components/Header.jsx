import { useEffect, useRef, useState } from 'react'
import { Link, useRouter } from '../router.jsx'
import { LogoMark, MenuIcon } from './Icons.jsx'

const NAV = [
  { id: 'relief', label: '効能' },
  { id: 'how', label: '仕組み' },
  { id: 'ingredients', label: '成分' },
  { id: 'faq', label: 'よくある質問' },
]

export default function Header() {
  const { path, navigate } = useRouter()
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setSolid(y > 24)
        setHidden(y > 160 && y > lastY.current)
        lastY.current = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    if (path !== '/') {
      navigate('/')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`site-header ${solid ? 'solid' : ''} ${hidden && !menuOpen ? 'hidden' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="リリーバ ホーム">
          <LogoMark />
          リリーバ
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="メニュー"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="メイン">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`/#${id}`} onClick={(e) => goToSection(e, id)}>
              {label}
            </a>
          ))}
          <a
            href="/#cta"
            className="btn btn-primary header-cta"
            onClick={(e) => goToSection(e, 'cta')}
          >
            ご購入はこちら
          </a>
        </nav>
      </div>
    </header>
  )
}
