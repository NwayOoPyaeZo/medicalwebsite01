export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-3">Medical Center</h3>
          <p className="text-sm text-gray-400">
            Delivering compassionate, evidence-based healthcare for our community.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-300">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>123 Health Ave, Wellness City</li>
            <li>(555) 123-4567</li>
            <li>care@medicalcenter.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-300">Hours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
            <li>Sat: 9:00 AM - 1:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Medical Center. All rights reserved.
      </div>
    </footer>
  )
}
