import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Highlights from './components/Highlights'
import TechStack from './components/TechStack'
import Metrics from './components/Metrics'
import News from './components/News'
import Careers from './components/Careers'
import FAQ from './components/FAQ'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <TechStack />
        <Metrics />
        <Partners />
        <News />
        <Careers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}