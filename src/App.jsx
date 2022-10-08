import './App.css'

// Bringing All Comps
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import { CardSection } from './components/CardSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">
    <NavBar />
    <HeroSection />
    <CardSection />
    <Footer />
    </div>
  )
}

export default App
