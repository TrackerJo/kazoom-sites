import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Showcase } from './components/Showcase'
import { HowItWorks } from './components/HowItWorks'
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
        <TrustStrip />
        <Showcase />
        <HowItWorks />
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
