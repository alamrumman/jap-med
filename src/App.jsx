import { useEffect } from 'react'
import { RouterProvider, useRouter } from './router.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Contact from './pages/Contact.jsx'

const TITLES = {
  '/': 'リリーバ | 総合かぜ薬 — ひとつの薬に、毎日の安心を。',
  '/about': '私たちについて | リリーバ',
  '/privacy': 'プライバシーポリシー | リリーバ',
  '/terms': '利用規約 | リリーバ',
  '/contact': 'お問い合わせ | リリーバ',
}

function Routes() {
  const { path } = useRouter()

  useEffect(() => {
    document.title = TITLES[path] ?? TITLES['/']
  }, [path])

  switch (path) {
    case '/about':
      return <About />
    case '/privacy':
      return <Privacy />
    case '/terms':
      return <Terms />
    case '/contact':
      return <Contact />
    default:
      return <Home />
  }
}

export default function App() {
  return (
    <RouterProvider>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </RouterProvider>
  )
}
