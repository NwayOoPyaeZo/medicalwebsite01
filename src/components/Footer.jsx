export default function Footer() {
  return (
    <footer className="bg-[#F2FAFF] w-full h-auto">
      {/* icons and description */}
      <div className="w-full relative py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-4 md:gap-8 p-4 md:p-8 max-w-7xl mx-auto items-start max-lg:justify-items-center max-lg:text-center">
          <div className="relative w-full md:w-42 h-auto md:h-36 max-lg:flex max-lg:flex-col max-lg:items-center">
            <img src="/src/assets/images/logo.svg" alt="Logo" className="w-[89.58px] h-23 mb-4" />
            <span className="block w-full md:w-42 font-['Clash Display'] font-semibold text-2xl md:text-[42px] leading-8 md:leading-13 text-[#0069AB] mb-3">HealNet</span>
            <p className="w-full md:w-67.25 font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6d6d6d]">Experience personalized medical care from the comfort of your home.</p>
          </div>


          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h3 className="font-['Manrope'] font-bold text-sm md:text-base leading-6 text-[#00A4F4]">Support</h3>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Getting Started</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">FAQS</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Help Articles</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Report an issue</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Contact Help Desk</a>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h3 className="font-['Manrope'] font-bold text-sm md:text-base leading-6 text-[#00A4F4]">Services</h3>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Booking appointments</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Online consultations</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Prescriptions</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Medicine Refills</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Medical Notes</a>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h3 className="font-['Manrope'] font-bold text-sm md:text-base leading-6 text-[#00A4F4]">Legal</h3>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Terms & Conditions</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Privacy Policy</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Cookie Notice</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Cookie Preferences</a>
            <a href="#" className="font-['Manrope'] font-medium text-sm md:text-base leading-6 text-[#6D6D6D] hover:text-[#00A4F4] transition">Trust Center</a>
          </div>

          <div className="w-full h-0 border-t-2 border-[#B6E6FF] col-span-1 md:col-span-2 lg:col-span-4 mt-4 md:mt-0"></div>
        </div>

        {/* icons  and */}
        <div className="relative top-8 flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center items-center justify-between gap-6 lg:gap-0 px-4 md:px-8 pt-6 max-w-7xl mx-auto">
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="w-8 h-8 fill-[#00A4F4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="w-8 h-8 fill-[#00A4F4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="w-8 h-8 fill-[#00A4F4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.66 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.59zM5.337 9.432c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.96-1.715 1.188 0 1.913.762 1.938 1.715 0 .953-.75 1.715-1.983 1.715zm1.946 11.02H3.391V9.724h3.892v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg className="w-8 h-8 fill-[#00A4F4]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <p className="text-[#b0b0b0] font-['Manrope'] font-semibold text-sm leading-5">HealNet 2024 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
