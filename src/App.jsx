import Header from './components/Header'
import TopServices from './components/TopServices'
import AboutSection from './components/AboutSection'
import HowItWorksSection from './components/HowItWorksSection'
import PeopleSection from './components/PeopleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <TopServices />
        <AboutSection />
        <HowItWorksSection />
        <PeopleSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
