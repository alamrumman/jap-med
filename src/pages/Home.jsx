import Hero from '../sections/Hero.jsx'
import Theater from '../sections/Theater.jsx'
import Relief from '../sections/Relief.jsx'
import How from '../sections/How.jsx'
import Benefits from '../sections/Benefits.jsx'
import Ingredients from '../sections/Ingredients.jsx'
import Trust from '../sections/Trust.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Stats from '../sections/Stats.jsx'
import Faq from '../sections/Faq.jsx'
import Cta from '../sections/Cta.jsx'

export default function Home() {
  const scrollToRelief = () => {
    document.getElementById('relief')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero onLearnMore={scrollToRelief} />
      <Theater />
      <Relief />
      <How />
      <Benefits />
      <Ingredients />
      <Trust />
      <Testimonials />
      <Stats />
      <Faq />
      <Cta />
    </>
  )
}
