import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Showcase } from './components/Showcase'
import { Steps } from './components/Steps'
import { Stats } from './components/Stats'
import { Value } from './components/Value'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Showcase />
        <Steps />
        <Stats />
        <Value />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
