export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
            MC
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">Medical Center</p>
            <p className="text-sm text-gray-500">Quality Care</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <a className="hover:text-blue-600" href="#services">Services</a>
          <a className="hover:text-blue-600" href="#about">About</a>
          <a className="hover:text-blue-600" href="#contact">Contact</a>
        </nav>
        <a
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          href="#book"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
