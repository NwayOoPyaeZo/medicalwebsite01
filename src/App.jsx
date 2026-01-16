import Header from './components/Header'
import TopServices from './components/TopServices'
import AboutSection from './components/AboutSection'
import HowItWorksSection from './components/HowItWorksSection'
import PeopleSection from './components/PeopleSection'
import ContactUs from './components/ContactUs'
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
        <ContactUs />
      </main>
      <div className="h-24 lg:h-32" />
      <Footer />
    </div>
  )
}

export default App
