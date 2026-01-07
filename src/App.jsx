import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Medical Center</h1>
            <p className="text-xl mb-8">Providing quality healthcare services and compassionate care</p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Book Appointment
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">General Care</h3>
                <p className="text-gray-600">Comprehensive healthcare services for all ages</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Diagnostics</h3>
                <p className="text-gray-600">Advanced laboratory and imaging services</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Specialists</h3>
                <p className="text-gray-600">Expert physicians in various specialties</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
