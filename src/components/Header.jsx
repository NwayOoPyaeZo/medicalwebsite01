import logoSvg from '../assets/images/logo.svg'

export default function Header() {
  return (
    <header className="sticky top-0 bg-linear-to-b from-white to-[#F6FBFF] z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-5">
        <div className="absolute left-[100.01px] top-12">
          <img
            src={logoSvg}
            alt="HealNet logo"
            className="w-[167.99px] h-12 shrink-0"
          />
        </div>

        <nav className="absolute left-101.5 top-15 w-150 h-6 flex items-center gap-x-10 opacity-100">
          <a className="text-[#0069AB] font-bold text-base leading-6 w-12 h-6" href="#home">Home</a>
          <a className="text-[#3D3D3D] font-semibold text-base leading-6 w-16.5 h-6" href="#services">Services</a>
          <a className="text-[#3D3D3D] font-semibold text-base leading-6 w-24.5 h-6" href="#find-doctors">Find Doctors</a>
          <a className="text-[#3D3D3D] font-semibold text-base leading-6 w-17.5 h-6" href="#about">About us</a>
          <a className="text-[#3D3D3D] font-semibold text-base leading-6 w-8.5 h-6" href="#blog">Blog</a>
          <a className="text-[#3D3D3D] font-semibold text-base leading-6 w-22 h-6" href="#contact">Contact us</a>
        </nav>

        <a
          className="absolute left-284 top-11 w-32.5 h-14 bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] shadow-[-8px_8px_28px_0px_rgba(0,0,0,0.06)] text-white text-sm font-semibold pt-4 pr-6 pb-4 pl-6 rounded-xl transition flex items-center justify-center gap-3"
          href="#join"
        >
          Join us
        </a>
      </div>
    </header>
  )
}
