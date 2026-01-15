import { useState } from 'react'
import logoSvg from '../assets/images/logo.svg'
import doctor01 from '../assets/images/doc/doctor01.png'
import vector01 from '../assets/images/Vector01.svg'
import star from '../assets/elements/star.svg'
import doubleQuotes from '../assets/elements/doubleQuotes.svg'
import check from '../assets/elements/check.svg'
import dotGrid from '../assets/elements/dotGrid.svg'
import avatar1 from '../assets/images/testimonials/avatar01.png'
import avatar2 from '../assets/images/testimonials/avatar02.png'
import avatar3 from '../assets/images/testimonials/avatar03.png'
import avatar4 from '../assets/images/testimonials/avatar04.png'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="relative w-full h-full min-h-[50px] overflow-hidden">
      {/* logo + nav */}
      <div className="bg-linear-to-b from-white to-[#F6FBFF] z-50 sticky top-0">
        <div className="max-w-7xl min-h-[60px] mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
          {/* logo and name */}
          <div className="relative top-2 left-10 flex items-center gap-3">
            <img
              src={logoSvg}
              alt="HealNet logo"
              className="w-[46.99px] h-12 mt-6 mb-1 md:static md:mt-0 md:mb-0 md:left-0 md:top-0"
            />
            {/* Name hidden on tablet (md) view, shown on mobile and desktop */}
            <span className="font-inter font-normal text-xl md:text-[28px] leading-8.5 text-[#0069AB] block md:hidden lg:inline">
              HealNet
            </span>
          </div>


          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-10">
            <a className="text-[#0069AB] font-bold text-xs md:text-base leading-6 whitespace-nowrap" href="#home">Home</a>
            <a className="text-[#3D3D3D] font-semibold text-xs md:text-base leading-6 whitespace-nowrap" href="#services">Services</a>
            <a className="text-[#3D3D3D] font-semibold text-xs md:text-base leading-6 whitespace-nowrap" href="#find-doctors">Find Doctors</a>
            <a className="text-[#3D3D3D] font-semibold text-xs md:text-base leading-6 whitespace-nowrap" href="#about">About us</a>
            <a className="text-[#3D3D3D] font-semibold text-xs md:text-base leading-6 whitespace-nowrap" href="#blog">Blog</a>
            <a className="text-[#3D3D3D] font-semibold text-xs md:text-base leading-6 whitespace-nowrap" href="#contact">Contact us</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="relative top-2 hidden md:flex w-32.5 h-14 bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] shadow-[-8px_8px_28px_0px_rgba(0,0,0,0.06)] text-white text-sm font-semibold pt-4 pr-6 pb-4 pl-6 rounded-xl transition items-center justify-center gap-3"
              href="#join"
            >
              Join us
            </a>

            {/* hamburger */}
            <button
              type="button"
              className="relative top-2 right-2 md:hidden w-11 h-11 rounded-lg border border-[#B6E6FF] bg-white flex items-center justify-center shadow-sm"
              onClick={() => setIsNavOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 text-[#0069AB]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile view */}
        {isNavOpen && (
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center justify-center gap-3 text-sm font-semibold text-[#3D3D3D]">
            <a onClick={() => setIsNavOpen(false)} href="#home" className="py-2">Home</a>
            <a onClick={() => setIsNavOpen(false)} href="#services" className="py-2">Services</a>
            <a onClick={() => setIsNavOpen(false)} href="#find-doctors" className="py-2">Find Doctors</a>
            <a onClick={() => setIsNavOpen(false)} href="#about" className="py-2">About us</a>
            <a onClick={() => setIsNavOpen(false)} href="#blog" className="py-2">Blog</a>
            <a onClick={() => setIsNavOpen(false)} href="#contact" className="py-2">Contact us</a>
            <a
              onClick={() => setIsNavOpen(false)}
              href="#join"
              className="mt-2 w-full h-12 bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] text-white font-semibold rounded-xl flex items-center justify-center shadow-[-8px_8px_28px_0px_rgba(0,0,0,0.06)]"
            >
              Join us
            </a>
          </nav>
        )}
      </div>

      {/* hero section */}
      <section className="relative w-full h-auto min-h-200 top-0 overflow-hidden">
        {/* Desktop & Tablet Hero */}
        <div className="hidden md:grid relative top-20 max-w-7xl h-full mx-auto px-4 py-16 grid-cols-2 gap-12 items-center">

          {/* left column */}
          <div className="relative flex flex-col justify-center items-start w-full">
            <h1 className="relative left-10 font-manrope font-bold max-w-[400px] text-2xl md:text-3xl lg:text-[38px] leading-tight text-[#3D3D3D] md:leading-[48px] w-full">
              Your <span className="font-extrabold bg-[linear-gradient(100.68deg,#0179B4_20.59%,#88D8FF_86.44%)] bg-clip-text text-transparent">trusted partner</span> in digital healthcare.
            </h1>
            <p className="relative left-10 top-5 font-manrope max-w-[552px] text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 text-[#4F4F4F] w-full">
              <span className="font-bold text-[#0084D4]">Empowering Your Health at Every Step.</span> Experience personalized medical care from the comfort of your home. Connect with <span className="font-bold text-[#0084D4]">certified doctors</span>, manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <span className="font-bold text-[#0084D4]">Get started</span> or book an appointment today.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <a
                href="#find-doctors"
                className="relative left-10 top-18 h-12 md:h-[56px] lg:h-[68px] inline-flex items-center justify-center gap-3 rounded-xl bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] px-6 md:px-8 lg:pt-5 lg:pr-9 lg:pb-5 lg:pl-9 text-base md:text-lg lg:text-xl font-manrope font-bold text-white shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] transition hover:translate-y-[-2px] w-3/5"
              >
                Book an appointment
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.20024 0C1.64107 0 1.09064 0.201675 0.673187 0.582022C0.253197 0.964914 0 1.50229 0 2.08123C0 2.66018 0.253102 3.19747 0.673092 3.58036L6.28019 8.69064C6.46671 8.86063 6.46671 9.15417 6.28019 9.32415L0.667601 14.4394L0.662199 14.4445C0.25322 14.8305 0.0108525 15.3649 0.0163097 15.9373C0.0217669 16.5096 0.274136 17.0393 0.689456 17.4178C1.10224 17.794 1.64528 17.9956 2.19829 17.9999C2.75128 18.0043 3.29734 17.8114 3.71635 17.4426L3.72191 17.4377L11.327 10.5064C11.747 10.1235 12 9.58634 12 9.0074C12 8.42845 11.7469 7.89116 11.3269 7.50827L3.72729 0.582022C3.30984 0.201675 2.7594 0 2.20024 0Z" fill="white" />
                </svg>
              </a>
              <p className="relative left-10 top-18 text-xs md:text-sm font-manrope font-semibold text-[#B0B0B0] w-full">
                Trusted by millions across the globe:
              </p>

              {/* social media icons */}
              <div className="relative left-10 top-20 flex flex-wrap items-center gap-x-5 gap-y-4 w-full">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-[35px] lg:h-[33px]" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.2222 26.4298C34.2222 27.6915 33.5291 30.121 31.9718 31.4555C31.6603 31.6985 31.3489 31.5614 31.4858 31.2073C31.9393 30.0828 32.9764 27.4815 32.4903 26.8828C32.1464 26.4281 30.726 26.4628 29.5143 26.5669C28.9616 26.6381 28.4755 26.6711 28.099 26.7492C27.7499 26.7769 27.6798 26.4663 28.0289 26.2233C28.4835 25.8979 28.986 25.6472 29.5177 25.4806C31.4858 24.8836 33.7602 25.2428 34.087 25.6246C34.1486 25.6975 34.2222 25.904 34.2222 26.4298ZM30.933 28.6737C30.4817 29.0236 30.0077 29.3425 29.5143 29.6282C25.8829 31.8408 21.1784 33 17.0934 33C10.5167 33 4.63484 30.541 0.171663 26.4264C-0.211677 26.1105 0.104921 25.6524 0.553292 25.9006C5.36216 28.7466 11.3142 30.4681 17.475 30.4681C21.3529 30.4681 25.532 29.7323 29.5143 28.1496C29.7933 28.0438 30.1047 27.8997 30.3768 27.7991C31.0049 27.5127 31.5577 28.219 30.933 28.6737ZM20.374 9.53245C20.374 7.72591 20.4459 6.66213 19.8555 5.74932C19.3318 4.9979 18.43 4.5467 17.1704 4.61785C15.8048 4.6942 14.3381 5.60181 13.9651 7.26604C13.8915 7.64782 13.6724 8.02267 13.2172 8.10423L9.0501 7.56626C8.75233 7.49684 8.29882 7.26604 8.44771 6.66213C9.34274 1.88809 13.3661 0.223864 17.1721 0H18.0654C20.1533 0 22.8367 0.605648 24.5531 2.19352C26.6358 4.16491 26.4134 6.8131 26.4134 9.69036V16.5052C26.4134 18.5495 27.2314 19.4554 28.0528 20.5209C28.2753 20.9009 28.3523 21.3487 27.9775 21.6575C26.8994 22.6323 25.8057 23.5892 24.6969 24.5279C24.3974 24.7587 23.8601 24.783 23.653 24.606C22.3352 23.4866 22.0135 22.8654 21.1972 21.7287C19.7768 23.2402 18.584 24.0749 17.1653 24.5279C16.1676 24.7846 15.1415 24.9106 14.1123 24.9027C10.5355 24.9027 7.70328 22.6415 7.70328 18.1694C7.70328 14.6136 9.56864 12.1963 12.3239 11.0526C15.0792 9.90729 19.0837 9.54286 20.374 9.53592M19.5577 18.546C20.4476 17.0328 20.374 15.7937 20.374 13.0188C19.2583 13.0188 18.139 13.0969 17.1721 13.3277C15.3838 13.8535 13.9634 14.9937 13.9634 17.4145C13.9634 19.3061 14.9354 20.5938 16.5749 20.5938C16.8008 20.5938 16.9993 20.566 17.1704 20.5157C18.317 20.1929 19.0324 19.6098 19.5577 18.546Z" fill="black" />
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.5881 38.8622C30.5348 40.7972 28.293 40.4916 26.1349 39.5751C23.8512 38.6382 21.756 38.5974 19.3465 39.5751C16.3295 40.8379 14.7371 40.4713 12.9353 38.8622C2.7108 28.6172 4.21933 13.0155 15.8266 12.4452C18.6551 12.5878 20.6246 13.9524 22.2798 14.0746C24.7521 13.5858 27.1197 12.1804 29.7596 12.3637C32.9233 12.6081 35.3118 13.8302 36.8832 16.0299C30.3462 19.8387 31.8967 28.2099 37.8889 30.5522C36.6946 33.6073 35.1442 36.6421 32.5671 38.8826L32.5881 38.8622ZM22.0703 12.323C21.756 7.78095 25.5483 4.03328 29.9063 3.66666C30.5139 8.92155 25.0035 12.8322 22.0703 12.323Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path opacity="0.7" d="M22.407 10.9578C25.0132 10.9141 27.5315 11.8995 29.4158 13.7005L34.6738 8.44245C31.3555 5.32538 26.9594 3.61384 22.407 3.66662C19.0078 3.66521 15.6752 4.60924 12.7817 6.39317C9.88828 8.17709 7.54799 10.7306 6.0225 13.7683L12.1477 18.5166C12.8521 16.3418 14.2209 14.4427 16.0613 13.0868C17.9018 11.7308 20.1212 10.9862 22.407 10.9578Z" fill="black" />
                    <path d="M6.0225 13.7684C4.74083 16.3231 4.07342 19.1418 4.07342 22C4.07342 24.8582 4.74083 27.677 6.0225 30.2317L12.1477 25.4834C11.3812 23.2244 11.3812 20.7757 12.1477 18.5167L6.0225 13.7684Z" fill="black" />
                    <path opacity="0.5" d="M28.6147 31.2914C27.1972 32.2013 25.5907 32.7754 23.9177 32.97C22.2447 33.1646 20.5493 32.9745 18.9609 32.4143C17.3725 31.854 15.933 30.9384 14.7522 29.7373C13.5715 28.5361 12.6806 27.0812 12.1477 25.4834L6.02433 30.2317C7.54954 33.2688 9.88926 35.822 12.782 37.6059C15.6748 39.3898 19.0066 40.3341 22.4052 40.3334C26.868 40.4543 31.2084 38.8652 34.5382 35.8912L28.6147 31.2914Z" fill="black" />
                    <path opacity="0.25" d="M39.6733 18.667H22.407V25.7583H32.274C32.0698 26.8801 31.6402 27.9487 31.0112 28.8997C30.3822 29.8507 29.567 30.6643 28.6147 31.2913L34.54 35.893C36.3444 34.1552 37.7634 32.0577 38.7052 29.7364C39.647 27.415 40.0905 24.9217 40.007 22.418C40.007 21.1585 39.897 19.9045 39.6733 18.667Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M9.99455 10.094C11.177 11.0186 11.6249 10.9533 13.8572 10.8101L34.9024 9.59903C35.3503 9.59903 34.9777 9.16937 34.8272 9.09718L31.3312 6.67388C30.6659 6.17203 29.7701 5.60602 28.0585 5.74237L7.68579 7.17458C6.93929 7.23989 6.78999 7.59852 7.08859 7.88496L9.99455 10.094ZM11.257 14.8031V36.0411C11.257 37.1812 11.8482 37.6108 13.186 37.5387L36.3154 36.2554C37.6531 36.1832 37.8084 35.4018 37.8084 34.4714V13.3766C37.8084 12.4451 37.4345 11.9502 36.614 12.0223L12.4466 13.3766C11.5508 13.4488 11.2582 13.8716 11.2582 14.7974L11.257 14.8031ZM34.0878 15.9363C34.2371 16.5814 34.0878 17.2196 33.4154 17.2975L32.3022 17.5129V33.1893C31.3312 33.6912 30.4426 33.9776 29.702 33.9776C28.5076 33.9776 28.209 33.619 27.3192 32.5511L20.0286 21.5712V32.1936L22.3362 32.6955C22.3362 32.6955 22.3362 33.9787 20.4765 33.9787L15.3442 34.2652C15.1949 33.9787 15.3442 33.2626 15.8674 33.1251L17.2051 32.7665V18.7251L15.3454 18.5819C15.1961 17.9368 15.57 17.0122 16.6079 16.9411L22.1129 16.5825L29.702 27.7056V17.8646L27.7671 17.6492C27.6178 16.8678 28.209 16.2949 28.9555 16.2285L34.0878 15.9363ZM5.97542 5.24854L27.1699 3.75102C29.7701 3.53561 30.4426 3.67883 32.0777 4.81888L38.8463 9.38363C39.9595 10.165 40.3333 10.3804 40.3333 11.234V36.2565C40.3333 37.8262 39.7361 38.7509 37.6579 38.8941L13.0355 40.3206C11.4804 40.3928 10.7339 40.1774 9.91214 39.1805L4.92913 32.9739C4.03931 31.8339 3.66666 30.9803 3.66666 29.9846V7.74403C3.66666 6.46076 4.26385 5.39291 5.97422 5.24969L5.97542 5.24854Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.8167 19.9833C26.95 16.5 17.1417 16.1333 11.55 17.875C10.6333 18.15 9.71667 17.6 9.44167 16.775C9.16667 15.8583 9.71667 14.9417 10.5417 14.6667C17.05 12.7417 27.775 13.1083 34.5583 17.1417C35.3833 17.6 35.6583 18.7 35.2 19.525C34.7417 20.1667 33.6417 20.4417 32.8167 19.9833ZM32.6333 25.1167C32.175 25.7583 31.35 26.0333 30.7083 25.575C25.7583 22.55 18.2417 21.6333 12.4667 23.4667C11.7333 23.65 10.9083 23.2833 10.725 22.55C10.5417 21.8167 10.9083 20.9917 11.6417 20.8083C18.3333 18.7917 26.5833 19.8 32.2667 23.2833C32.8167 23.5583 33.0917 24.475 32.6333 25.1167ZM30.4333 30.1583C30.0667 30.7083 29.425 30.8917 28.875 30.525C24.5667 27.8667 19.1583 27.3167 12.7417 28.7833C12.1 28.9667 11.55 28.5083 11.3667 27.9583C11.1833 27.3167 11.6417 26.7667 12.1917 26.5833C19.1583 25.025 25.2083 25.6667 29.975 28.6C30.6167 28.875 30.7083 29.6083 30.4333 30.1583ZM22 3.66666C19.5924 3.66666 17.2084 4.14086 14.9841 5.0622C12.7598 5.98353 10.7388 7.33396 9.03638 9.03637C5.59821 12.4745 3.66667 17.1377 3.66667 22C3.66667 26.8623 5.59821 31.5254 9.03638 34.9636C10.7388 36.666 12.7598 38.0164 14.9841 38.9378C17.2084 39.8591 19.5924 40.3333 22 40.3333C26.8623 40.3333 31.5255 38.4018 34.9636 34.9636C38.4018 31.5254 40.3333 26.8623 40.3333 22C40.3333 19.5924 39.8591 17.2084 38.9378 14.9841C38.0165 12.7598 36.666 10.7388 34.9636 9.03637C33.2612 7.33396 31.2402 5.98353 29.0159 5.0622C26.7916 4.14086 24.4076 3.66666 22 3.66666Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M11.386 26.8246C11.386 27.8482 10.9793 28.8299 10.2555 29.5537C9.53167 30.2776 8.54995 30.6842 7.52631 30.6842C6.50266 30.6842 5.52095 30.2776 4.79712 29.5537C4.0733 28.8299 3.66666 27.8482 3.66666 26.8246C3.66666 25.8009 4.0733 24.8192 4.79712 24.0954C5.52095 23.3715 6.50266 22.9649 7.52631 22.9649H11.386V26.8246ZM13.3158 26.8246C13.3158 25.8009 13.7224 24.8192 14.4462 24.0954C15.1701 23.3715 16.1518 22.9649 17.1754 22.9649C18.1991 22.9649 19.1808 23.3715 19.9046 24.0954C20.6284 24.8192 21.0351 25.8009 21.0351 26.8246V36.4737C21.0351 37.4973 20.6284 38.479 19.9046 39.2029C19.1808 39.9267 18.1991 40.3333 17.1754 40.3333C16.1518 40.3333 15.1701 39.9267 14.4462 39.2029C13.7224 38.479 13.3158 37.4973 13.3158 36.4737V26.8246ZM17.1754 11.386C16.1518 11.386 15.1701 10.9793 14.4462 10.2555C13.7224 9.53167 13.3158 8.54995 13.3158 7.52631C13.3158 6.50266 13.7224 5.52095 14.4462 4.79712C15.1701 4.0733 16.1518 3.66666 17.1754 3.66666C18.1991 3.66666 19.1808 4.0733 19.9046 4.79712C20.6284 5.52095 21.0351 6.50266 21.0351 7.52631V11.386H17.1754ZM17.1754 13.3158C18.1991 13.3158 19.1808 13.7224 19.9046 14.4462C20.6284 15.1701 21.0351 16.1518 21.0351 17.1754C21.0351 18.1991 20.6284 19.1808 19.9046 19.9046C19.1808 20.6284 18.1991 21.0351 17.1754 21.0351H7.52631C6.50266 21.0351 5.52095 20.6284 4.79712 19.9046C4.0733 19.1808 3.66666 18.1991 3.66666 17.1754C3.66666 16.1518 4.0733 15.1701 4.79712 14.4462C5.52095 13.7224 6.50266 13.3158 7.52631 13.3158H17.1754ZM32.614 17.1754C32.614 16.1518 33.0207 15.1701 33.7445 14.4462C34.4683 13.7224 35.45 13.3158 36.4737 13.3158C37.4973 13.3158 38.479 13.7224 39.2029 14.4462C39.9267 15.1701 40.3333 16.1518 40.3333 17.1754C40.3333 18.1991 39.9267 19.1808 39.2029 19.9046C38.479 20.6284 37.4973 21.0351 36.4737 21.0351H32.614V17.1754ZM30.6842 17.1754C30.6842 18.1991 30.2776 19.1808 29.5537 19.9046C28.8299 20.6284 27.8482 21.0351 26.8246 21.0351C25.8009 21.0351 24.8192 20.6284 24.0954 19.9046C23.3715 19.1808 22.9649 18.1991 22.9649 17.1754V7.52631C22.9649 6.50266 23.3715 5.52095 24.0954 4.79712C24.8192 4.0733 25.8009 3.66666 26.8246 3.66666C27.8482 3.66666 28.8299 4.0733 29.5537 4.79712C30.2776 5.52095 30.6842 6.50266 30.6842 7.52631V17.1754ZM26.8246 32.614C27.8482 32.614 28.8299 33.0207 29.5537 33.7445C30.2776 34.4683 30.6842 35.45 30.6842 36.4737C30.6842 37.4973 30.2776 38.479 29.5537 39.2029C28.8299 39.9267 27.8482 40.3333 26.8246 40.3333C25.8009 40.3333 24.8192 39.9267 24.0954 39.2029C23.3715 38.479 22.9649 37.4973 22.9649 36.4737V32.614H26.8246ZM26.8246 30.6842C25.8009 30.6842 24.8192 30.2776 24.0954 29.5537C23.3715 28.8299 22.9649 27.8482 22.9649 26.8246C22.9649 25.8009 23.3715 24.8192 24.0954 24.0954C24.8192 23.3715 25.8009 22.9649 26.8246 22.9649H36.4737C37.4973 22.9649 38.479 23.3715 39.2029 24.0954C39.9267 24.8192 40.3333 25.8009 40.3333 26.8246C40.3333 27.8482 39.9267 28.8299 39.2029 29.5537C38.479 30.2776 37.4973 30.6842 36.4737 30.6842H26.8246Z" fill="black" />
                  </g>
                </svg>
              </div>
            </div>

          </div>

          {/* right column */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full min-h-[300px]">
              <div className="w-96.5 h-119">
                <div className="absolute left-19 top-15 w-96.5 h-100.5 bg-[linear-gradient(180deg,#00A4F4_-16.77%,#C2EBFF_62.45%)] rounded-tl-[300px] rounded-tr-[300px] rounded-br-2xl rounded-bl-2xl"></div>
                <img
                  src={doctor01}
                  alt="Doctor smiling while holding a folder"
                  className="absolute left-11 -top-[14px] w-120.5 h-119"
                />
              </div>

              {/* feature pill */}
              <div className="absolute -left-1 top-90 flex items-center gap-3 w-[296px] h-[44px] rounded-[10px] bg-white shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] z-10">
                <div className="flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#EFF9FF]">
                  <svg className="w-5 h-5" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="star">
                    <path d="M9 0l2.176 5.91H17l-4.588 3.34L13.588 15 9 11.66 4.412 15l1.176-5.75L1 5.91h5.824z" fill="#0069AB" />
                  </svg>
                </div>
                <span
                  className="font-manrope font-bold text-[#0069AB] text-[16px] leading-[20px] w-[220px] h-[20px] inline-block align-middle p-0 m-0"
                >
                  Easy Appointment Booking
                </span>
              </div>

              {/* testimonial card */}
              <div className="absolute left-[375px] top-[210px] w-[241.95px] h-32 z-10 hidden md:block">
                <div className="relative h-full w-full rounded-[9.37px] border-2 border-[#95DDFF] p-[1.56px]">
                  <div className="relative h-full w-full rounded-[7.81px] p-[18px] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] bg-[radial-gradient(197.8%_197.87%_at_46.45%_-32.32%,#FFFFFF_33.84%,#EEF9FF_97.64%)]">
                    {/* Avatars */}
                    <div className="absolute w-[197.84px] h-[65.71px] left-[23.41px] top-[18.73px]">
                      <img src={avatar1} alt="User 1" className="absolute left-0 top-0 w-[37.46px] h-[37.46px] min-w-[37.46px] min-h-[37.46px] max-w-[37.46px] max-h-[37.46px] border-[1.17px] border-white rounded-full object-cover bg-[#D9D9D9]" />
                      <img src={avatar2} alt="User 2" className="absolute left-[28.1px] top-0 w-[37.46px] h-[37.46px] min-w-[37.46px] min-h-[37.46px] max-w-[37.46px] max-h-[37.46px] border-[1.17px] border-white rounded-full object-cover bg-[#D9D9D9]" />
                      <img src={avatar3} alt="User 3" className="absolute left-[56.2px] top-0 w-[37.46px] h-[37.46px] min-w-[37.46px] min-h-[37.46px] max-w-[37.46px] max-h-[37.46px] border-[1.17px] border-white rounded-full object-cover bg-[#D9D9D9]" />
                      <img src={avatar4} alt="User 4" className="absolute left-[84.3px] top-0 w-[37.46px] h-[37.46px] min-w-[37.46px] min-h-[37.46px] max-w-[37.46px] max-h-[37.46px] border-[1.17px] border-white rounded-full object-cover bg-[#D9D9D9]" />
                    </div>
                    {/* 2400+ */}
                    <p className="absolute w-[68px] h-[25px] left-[151.41px] top-[24.98px] font-manrope font-bold text-[21.85px] leading-[25px]">
                      <span className="text-[#3D3D3D]">2400</span><span className="font-extrabold text-[#00A4F4]">+</span>
                    </p>
                    {/* Happy Customers */}
                    <p className="absolute w-[135px] h-[22px] left-[23.41px] top-[62.44px] font-manrope font-bold text-[15.61px] leading-[22px] text-[#00A4F4]">
                      Happy Customers
                    </p>
                    {/* Stars and Rating */}
                    <div className="absolute w-[177.17px] h-4 left-[23.41px] top-[93.66px]">
                      <div className="absolute w-[106.15px] h-[14.05px] left-0 top-[0.78px] flex">
                        <img src={star} alt="star" className="w-[15.61px] h-[14.05px] absolute left-0 top-0" />
                        <img src={star} alt="star" className="w-[15.61px] h-[14.05px] absolute left-[22.64px] top-0" />
                        <img src={star} alt="star" className="w-[15.61px] h-[14.05px] absolute left-[45.27px] top-0" />
                        <img src={star} alt="star" className="w-[15.61px] h-[14.05px] absolute left-[67.91px] top-0" />
                        <div className="absolute w-[15.61px] h-[14.05px] left-[90.54px] top-0 overflow-hidden">
                          <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px]" />
                          <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
                        </div>
                      </div>
                      <p className="absolute w-16 h-4 left-[113.18px] top-0 font-manrope font-bold text-[12.49px] leading-4 text-[#6D6D6D]">
                        (4.7 Stars)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* quote card */}
              <div className="absolute left-70 top-110 w-75 h-22 box-border rounded-xl border-2 border-[#95DDFF] bg-[linear-gradient(95.16deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] shadow-[3.12195px_9.36585px_21.8537px_rgba(0,0,0,0.06)] z-10">
                <div className="relative h-full w-full">
                  <img src={doubleQuotes} alt="quotes" className="absolute w-15.5 h-12.5 left-5 -top-9.5" />
                  <p className="absolute w-63 h-10 left-6 top-7 font-manrope font-medium text-[14px] leading-4.5 text-[#3D3D3D]">
                    Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decoration */}
        {/* Vector01 SVG image */}
        <img src={vector01} alt="Vector graphic" className='hidden md:block absolute top-70 w-[1456.2px] h-[627px]' />

        {/* Mobile Hero */}
        <div className="md:hidden flex flex-col relative max-w-7xl mx-auto px-4 py-8 gap-8">
          {/* right column on top */}
          <div className="w-full h-full flex flex-col items-center gap-6">
            {/* Doctor image + background */}
            <div className="relative w-[280px] h-[330px] mx-auto">
              <div
                className="absolute left-[16px] top-[48px] w-[248px] h-[250px] bg-[linear-gradient(180deg,#00A4F4_-16.77%,#C2EBFF_62.45%)] rounded-tl-[220px] rounded-tr-[220px] rounded-b-2xl"
              />

              <img
                src={doctor01}
                alt="Doctor smiling"
                className="absolute left-0 top-0 w-[280px] h-[330px] object-contain"
              />

              {/* Feature pill */}
              <div
                className="relative -translate-x-1/2 top-[235px] flex items-center gap-2 w-[220px] h-[36px] rounded-lg bg-white shadow-[-6px_6px_18px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-center w-6 h-6 rounded bg-[#EFF9FF]">
                  <svg className="w-4 h-4" viewBox="0 0 18 16" fill="none">
                    <path d="M9 0l2.176 5.91H17l-4.588 3.34L13.588 15 9 11.66 4.412 15l1.176-5.75L1 5.91h5.824z" fill="#0069AB" />
                  </svg>
                </div>

                <span className="font-manrope font-semibold text-[#0069AB] text-[13px] leading-tight">
                  Easy Appointment Booking
                </span>
              </div>

              {/* TESTIMONIAL CARD */}
              <div className="relative left-[200px] top-[120px] w-[180px] h-[96px] z-10 md:hidden">
                <div className="relative h-full w-full rounded-[7px] border border-[#95DDFF] p-[1px]">
                  <div className="relative h-full w-full rounded-[6px] p-[12px] shadow-[2px_6px_14px_rgba(0,0,0,0.08)] bg-[radial-gradient(197.8%_197.87%_at_46.45%_-32.32%,#FFFFFF_34%,#EEF9FF_98%)]">

                    {/* Avatars */}
                    <div className="absolute left-[14px] top-[12px] h-[44px] w-[140px]">
                      <img src={avatar1} className="absolute left-0 top-0 w-[28px] h-[28px] border border-white rounded-full object-cover" />
                      <img src={avatar2} className="absolute left-[18px] top-0 w-[28px] h-[28px] border border-white rounded-full object-cover" />
                      <img src={avatar3} className="absolute left-[36px] top-0 w-[28px] h-[28px] border border-white rounded-full object-cover" />
                      <img src={avatar4} className="absolute left-[54px] top-0 w-[28px] h-[28px] border border-white rounded-full object-cover" />
                    </div>

                    {/* 2400+ */}
                    <p className="absolute right-[12px] top-[14px] font-manrope font-bold text-[16px] leading-none">
                      <span className="text-[#3D3D3D]">2400</span>
                      <span className="text-[#00A4F4] font-extrabold">+</span>
                    </p>

                    {/* Happy Customers */}
                    <p className="absolute left-[14px] top-[44px] font-manrope font-semibold text-[12px] text-[#00A4F4]">
                      Happy Customers
                    </p>

                    {/* Stars */}
                    <div className="absolute left-[14px] top-[66px] flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <img key={i} src={star} className="w-[11px] h-[11px]" />
                      ))}
                      <div className="relative w-[11px] h-[11px] overflow-hidden">
                        <img src={star} className="absolute inset-0" />
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-white" />
                      </div>
                      <span className="ml-1 font-manrope font-bold text-[10px] text-[#6D6D6D]">
                        4.7
                      </span>
                    </div>

                  </div>
                </div>
              </div>


              {/* Quote card */}
              <div
                className="relative left-65 -translate-x-1/2 top-[150px] w-[260px] h-[72px] rounded-lg border border-[#95DDFF] bg-[linear-gradient(95deg,#FBFDFF,#E9F6FF)] shadow-[2px_6px_16px_rgba(0,0,0,0.06)]">
                <img
                  src={doubleQuotes}
                  alt="quotes"
                  className="absolute w-8 h-8 left-4 -top-4"
                />

                <p
                  className="absolute left-4 right-4 top-6 font-manrope text-[12.5px] leading-snug text-[#3D3D3D]"
                >
                  Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
                </p>
              </div>
            </div>
          </div>



          {/* left column at bottom */}
          <div className="relative top-10 flex flex-col justify-center items-center w-full text-center md:items-start md:text-left">
            <h1 className="relative left-0 md:left-10 font-manrope font-bold w-[400px] h-[50px] text-2xl md:text-3xl lg:text-[38px] leading-tight text-[#3D3D3D] md:leading-[48px] w-full">
              Your <span className="font-extrabold bg-[linear-gradient(100.68deg,#0179B4_20.59%,#88D8FF_86.44%)] bg-clip-text text-transparent">trusted partner</span> in digital healthcare.
            </h1>

            <p className="relative left-0 top-5 md:left-10 font-manrope max-w-[552px] text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 text-[#4F4F4F] w-full h-[120px]">
              <span className="font-bold text-[#0084D4]">Empowering Your Health at Every Step.</span> Experience personalized medical care from the comfort of your home. Connect with <span className="font-bold text-[#0084D4]">certified doctors</span>, manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <span className="font-bold text-[#0084D4]">Get started</span> or book an appointment today.
            </p>

            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              <a
                href="#find-doctors"
                className="relative left-0 md:left-10 top-10 h-16 md:h-[56px] lg:h-[68px] inline-flex items-center justify-center gap-3 rounded-xl bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] px-6 md:px-8 lg:pt-5 lg:pr-9 lg:pb-5 lg:pl-9 text-base md:text-lg lg:text-xl font-manrope font-bold text-white shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] transition hover:translate-y-[-2px] w-full md:w-3/5"
              >
                Book an appointment
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                  <path d="M2.20024 0C1.64107 0 1.09064 0.201675 0.673187 0.582022C0.253197 0.964914 0 1.50229 0 2.08123C0 2.66018 0.253102 3.19747 0.673092 3.58036L6.28019 8.69064C6.46671 8.86063 6.46671 9.15417 6.28019 9.32415L0.667601 14.4394C0.25322 14.8305 0.0108525 15.3649 0.0163097 15.9373C0.0217669 16.5096 0.274136 17.0393 0.689456 17.4178C1.10224 17.794 1.64528 17.9956 2.19829 17.9999C2.75128 18.0043 3.29734 17.8114 3.71635 17.4426L11.327 10.5064C11.747 10.1235 12 9.58634 12 9.0074C12 8.42845 11.7469 7.89116 11.3269 7.50827L3.72729 0.582022C3.30984 0.201675 2.7594 0 2.20024 0Z" fill="white" />
                </svg>
              </a>

              <p className="relative left-0 md:left-10 top-12 text-[15px] md:text-sm font-manrope font-semibold text-[#B0B0B0] w-full">
                Trusted by millions across the globe:
              </p>

              <div className="relative left-0 md:left-10 top-15 flex flex-wrap justify-center md:justify-start items-center gap-x-10 gap-y-4 w-full">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-[35px] lg:h-[33px]" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.2222 26.4298C34.2222 27.6915 33.5291 30.121 31.9718 31.4555C31.6603 31.6985 31.3489 31.5614 31.4858 31.2073C31.9393 30.0828 32.9764 27.4815 32.4903 26.8828C32.1464 26.4281 30.726 26.4628 29.5143 26.5669C28.9616 26.6381 28.4755 26.6711 28.099 26.7492C27.7499 26.7769 27.6798 26.4663 28.0289 26.2233C28.4835 25.8979 28.986 25.6472 29.5177 25.4806C31.4858 24.8836 33.7602 25.2428 34.087 25.6246C34.1486 25.6975 34.2222 25.904 34.2222 26.4298ZM30.933 28.6737C30.4817 29.0236 30.0077 29.3425 29.5143 29.6282C25.8829 31.8408 21.1784 33 17.0934 33C10.5167 33 4.63484 30.541 0.171663 26.4264C-0.211677 26.1105 0.104921 25.6524 0.553292 25.9006C5.36216 28.7466 11.3142 30.4681 17.475 30.4681C21.3529 30.4681 25.532 29.7323 29.5143 28.1496C29.7933 28.0438 30.1047 27.8997 30.3768 27.7991C31.0049 27.5127 31.5577 28.219 30.933 28.6737ZM20.374 9.53245C20.374 7.72591 20.4459 6.66213 19.8555 5.74932C19.3318 4.9979 18.43 4.5467 17.1704 4.61785C15.8048 4.6942 14.3381 5.60181 13.9651 7.26604C13.8915 7.64782 13.6724 8.02267 13.2172 8.10423L9.0501 7.56626C8.75233 7.49684 8.29882 7.26604 8.44771 6.66213C9.34274 1.88809 13.3661 0.223864 17.1721 0H18.0654C20.1533 0 22.8367 0.605648 24.5531 2.19352C26.6358 4.16491 26.4134 6.8131 26.4134 9.69036V16.5052C26.4134 18.5495 27.2314 19.4554 28.0528 20.5209C28.2753 20.9009 28.3523 21.3487 27.9775 21.6575C26.8994 22.6323 25.8057 23.5892 24.6969 24.5279C24.3974 24.7587 23.8601 24.783 23.653 24.606C22.3352 23.4866 22.0135 22.8654 21.1972 21.7287C19.7768 23.2402 18.584 24.0749 17.1653 24.5279C16.1676 24.7846 15.1415 24.9106 14.1123 24.9027C10.5355 24.9027 7.70328 22.6415 7.70328 18.1694C7.70328 14.6136 9.56864 12.1963 12.3239 11.0526C15.0792 9.90729 19.0837 9.54286 20.374 9.53592M19.5577 18.546C20.4476 17.0328 20.374 15.7937 20.374 13.0188C19.2583 13.0188 18.139 13.0969 17.1721 13.3277C15.3838 13.8535 13.9634 14.9937 13.9634 17.4145C13.9634 19.3061 14.9354 20.5938 16.5749 20.5938C16.8008 20.5938 16.9993 20.566 17.1704 20.5157C18.317 20.1929 19.0324 19.6098 19.5577 18.546Z" fill="black" />
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.5881 38.8622C30.5348 40.7972 28.293 40.4916 26.1349 39.5751C23.8512 38.6382 21.756 38.5974 19.3465 39.5751C16.3295 40.8379 14.7371 40.4713 12.9353 38.8622C2.7108 28.6172 4.21933 13.0155 15.8266 12.4452C18.6551 12.5878 20.6246 13.9524 22.2798 14.0746C24.7521 13.5858 27.1197 12.1804 29.7596 12.3637C32.9233 12.6081 35.3118 13.8302 36.8832 16.0299C30.3462 19.8387 31.8967 28.2099 37.8889 30.5522C36.6946 33.6073 35.1442 36.6421 32.5671 38.8826L32.5881 38.8622ZM22.0703 12.323C21.756 7.78095 25.5483 4.03328 29.9063 3.66666C30.5139 8.92155 25.0035 12.8322 22.0703 12.323Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path opacity="0.7" d="M22.407 10.9578C25.0132 10.9141 27.5315 11.8995 29.4158 13.7005L34.6738 8.44245C31.3555 5.32538 26.9594 3.61384 22.407 3.66662C19.0078 3.66521 15.6752 4.60924 12.7817 6.39317C9.88828 8.17709 7.54799 10.7306 6.0225 13.7683L12.1477 18.5166C12.8521 16.3418 14.2209 14.4427 16.0613 13.0868C17.9018 11.7308 20.1212 10.9862 22.407 10.9578Z" fill="black" />
                    <path d="M6.0225 13.7684C4.74083 16.3231 4.07342 19.1418 4.07342 22C4.07342 24.8582 4.74083 27.677 6.0225 30.2317L12.1477 25.4834C11.3812 23.2244 11.3812 20.7757 12.1477 18.5167L6.0225 13.7684Z" fill="black" />
                    <path opacity="0.5" d="M28.6147 31.2914C27.1972 32.2013 25.5907 32.7754 23.9177 32.97C22.2447 33.1646 20.5493 32.9745 18.9609 32.4143C17.3725 31.854 15.933 30.9384 14.7522 29.7373C13.5715 28.5361 12.6806 27.0812 12.1477 25.4834L6.02433 30.2317C7.54954 33.2688 9.88926 35.822 12.782 37.6059C15.6748 39.3898 19.0066 40.3341 22.4052 40.3334C26.868 40.4543 31.2084 38.8652 34.5382 35.8912L28.6147 31.2914Z" fill="black" />
                    <path opacity="0.25" d="M39.6733 18.667H22.407V25.7583H32.274C32.0698 26.8801 31.6402 27.9487 31.0112 28.8997C30.3822 29.8507 29.567 30.6643 28.6147 31.2913L34.54 35.893C36.3444 34.1552 37.7634 32.0577 38.7052 29.7364C39.647 27.415 40.0905 24.9217 40.007 22.418C40.007 21.1585 39.897 19.9045 39.6733 18.667Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M9.99455 10.094C11.177 11.0186 11.6249 10.9533 13.8572 10.8101L34.9024 9.59903C35.3503 9.59903 34.9777 9.16937 34.8272 9.09718L31.3312 6.67388C30.6659 6.17203 29.7701 5.60602 28.0585 5.74237L7.68579 7.17458C6.93929 7.23989 6.78999 7.59852 7.08859 7.88496L9.99455 10.094ZM11.257 14.8031V36.0411C11.257 37.1812 11.8482 37.6108 13.186 37.5387L36.3154 36.2554C37.6531 36.1832 37.8084 35.4018 37.8084 34.4714V13.3766C37.8084 12.4451 37.4345 11.9502 36.614 12.0223L12.4466 13.3766C11.5508 13.4488 11.2582 13.8716 11.2582 14.7974L11.257 14.8031ZM34.0878 15.9363C34.2371 16.5814 34.0878 17.2196 33.4154 17.2975L32.3022 17.5129V33.1893C31.3312 33.6912 30.4426 33.9776 29.702 33.9776C28.5076 33.9776 28.209 33.619 27.3192 32.5511L20.0286 21.5712V32.1936L22.3362 32.6955C22.3362 32.6955 22.3362 33.9787 20.4765 33.9787L15.3442 34.2652C15.1949 33.9787 15.3442 33.2626 15.8674 33.1251L17.2051 32.7665V18.7251L15.3454 18.5819C15.1961 17.9368 15.57 17.0122 16.6079 16.9411L22.1129 16.5825L29.702 27.7056V17.8646L27.7671 17.6492C27.6178 16.8678 28.209 16.2949 28.9555 16.2285L34.0878 15.9363ZM5.97542 5.24854L27.1699 3.75102C29.7701 3.53561 30.4426 3.67883 32.0777 4.81888L38.8463 9.38363C39.9595 10.165 40.3333 10.3804 40.3333 11.234V36.2565C40.3333 37.8262 39.7361 38.7509 37.6579 38.8941L13.0355 40.3206C11.4804 40.3928 10.7339 40.1774 9.91214 39.1805L4.92913 32.9739C4.03931 31.8339 3.66666 30.9803 3.66666 29.9846V7.74403C3.66666 6.46076 4.26385 5.39291 5.97422 5.24969L5.97542 5.24854Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.8167 19.9833C26.95 16.5 17.1417 16.1333 11.55 17.875C10.6333 18.15 9.71667 17.6 9.44167 16.775C9.16667 15.8583 9.71667 14.9417 10.5417 14.6667C17.05 12.7417 27.775 13.1083 34.5583 17.1417C35.3833 17.6 35.6583 18.7 35.2 19.525C34.7417 20.1667 33.6417 20.4417 32.8167 19.9833ZM32.6333 25.1167C32.175 25.7583 31.35 26.0333 30.7083 25.575C25.7583 22.55 18.2417 21.6333 12.4667 23.4667C11.7333 23.65 10.9083 23.2833 10.725 22.55C10.5417 21.8167 10.9083 20.9917 11.6417 20.8083C18.3333 18.7917 26.5833 19.8 32.2667 23.2833C32.8167 23.5583 33.0917 24.475 32.6333 25.1167ZM30.4333 30.1583C30.0667 30.7083 29.425 30.8917 28.875 30.525C24.5667 27.8667 19.1583 27.3167 12.7417 28.7833C12.1 28.9667 11.55 28.5083 11.3667 27.9583C11.1833 27.3167 11.6417 26.7667 12.1917 26.5833C19.1583 25.025 25.2083 25.6667 29.975 28.6C30.6167 28.875 30.7083 29.6083 30.4333 30.1583ZM22 3.66666C19.5924 3.66666 17.2084 4.14086 14.9841 5.0622C12.7598 5.98353 10.7388 7.33396 9.03638 9.03637C5.59821 12.4745 3.66667 17.1377 3.66667 22C3.66667 26.8623 5.59821 31.5254 9.03638 34.9636C10.7388 36.666 12.7598 38.0164 14.9841 38.9378C17.2084 39.8591 19.5924 40.3333 22 40.3333C26.8623 40.3333 31.5255 38.4018 34.9636 34.9636C38.4018 31.5254 40.3333 26.8623 40.3333 22C40.3333 19.5924 39.8591 17.2084 38.9378 14.9841C38.0165 12.7598 36.666 10.7388 34.9636 9.03637C33.2612 7.33396 31.2402 5.98353 29.0159 5.0622C26.7916 4.14086 24.4076 3.66666 22 3.66666Z" fill="black" />
                  </g>
                </svg>
                <svg className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[44px] lg:h-[44px]" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M11.386 26.8246C11.386 27.8482 10.9793 28.8299 10.2555 29.5537C9.53167 30.2776 8.54995 30.6842 7.52631 30.6842C6.50266 30.6842 5.52095 30.2776 4.79712 29.5537C4.0733 28.8299 3.66666 27.8482 3.66666 26.8246C3.66666 25.8009 4.0733 24.8192 4.79712 24.0954C5.52095 23.3715 6.50266 22.9649 7.52631 22.9649H11.386V26.8246ZM13.3158 26.8246C13.3158 25.8009 13.7224 24.8192 14.4462 24.0954C15.1701 23.3715 16.1518 22.9649 17.1754 22.9649C18.1991 22.9649 19.1808 23.3715 19.9046 24.0954C20.6284 24.8192 21.0351 25.8009 21.0351 26.8246V36.4737C21.0351 37.4973 20.6284 38.479 19.9046 39.2029C19.1808 39.9267 18.1991 40.3333 17.1754 40.3333C16.1518 40.3333 15.1701 39.9267 14.4462 39.2029C13.7224 38.479 13.3158 37.4973 13.3158 36.4737V26.8246ZM17.1754 11.386C16.1518 11.386 15.1701 10.9793 14.4462 10.2555C13.7224 9.53167 13.3158 8.54995 13.3158 7.52631C13.3158 6.50266 13.7224 5.52095 14.4462 4.79712C15.1701 4.0733 16.1518 3.66666 17.1754 3.66666C18.1991 3.66666 19.1808 4.0733 19.9046 4.79712C20.6284 5.52095 21.0351 6.50266 21.0351 7.52631V11.386H17.1754ZM17.1754 13.3158C18.1991 13.3158 19.1808 13.7224 19.9046 14.4462C20.6284 15.1701 21.0351 16.1518 21.0351 17.1754C21.0351 18.1991 20.6284 19.1808 19.9046 19.9046C19.1808 20.6284 18.1991 21.0351 17.1754 21.0351H7.52631C6.50266 21.0351 5.52095 20.6284 4.79712 19.9046C4.0733 19.1808 3.66666 18.1991 3.66666 17.1754C3.66666 16.1518 4.0733 15.1701 4.79712 14.4462C5.52095 13.7224 6.50266 13.3158 7.52631 13.3158H17.1754ZM32.614 17.1754C32.614 16.1518 33.0207 15.1701 33.7445 14.4462C34.4683 13.7224 35.45 13.3158 36.4737 13.3158C37.4973 13.3158 38.479 13.7224 39.2029 14.4462C39.9267 15.1701 40.3333 16.1518 40.3333 17.1754C40.3333 18.1991 39.9267 19.1808 39.2029 19.9046C38.479 20.6284 37.4973 21.0351 36.4737 21.0351H32.614V17.1754ZM30.6842 17.1754C30.6842 18.1991 30.2776 19.1808 29.5537 19.9046C28.8299 20.6284 27.8482 21.0351 26.8246 21.0351C25.8009 21.0351 24.8192 20.6284 24.0954 19.9046C23.3715 19.1808 22.9649 18.1991 22.9649 17.1754V7.52631C22.9649 6.50266 23.3715 5.52095 24.0954 4.79712C24.8192 4.0733 25.8009 3.66666 26.8246 3.66666C27.8482 3.66666 28.8299 4.0733 29.5537 4.79712C30.2776 5.52095 30.6842 6.50266 30.6842 7.52631V17.1754ZM26.8246 32.614C27.8482 32.614 28.8299 33.0207 29.5537 33.7445C30.2776 34.4683 30.6842 35.45 30.6842 36.4737C30.6842 37.4973 30.2776 38.479 29.5537 39.2029C28.8299 39.9267 27.8482 40.3333 26.8246 40.3333C25.8009 40.3333 24.8192 39.9267 24.0954 39.2029C23.3715 38.479 22.9649 37.4973 22.9649 36.4737V32.614H26.8246ZM26.8246 30.6842C25.8009 30.6842 24.8192 30.2776 24.0954 29.5537C23.3715 28.8299 22.9649 27.8482 22.9649 26.8246C22.9649 25.8009 23.3715 24.8192 24.0954 24.0954C24.8192 23.3715 25.8009 22.9649 26.8246 22.9649H36.4737C37.4973 22.9649 38.479 23.3715 39.2029 24.0954C39.9267 24.8192 40.3333 25.8009 40.3333 26.8246C40.3333 27.8482 39.9267 28.8299 39.2029 29.5537C38.479 30.2776 37.4973 30.6842 36.4737 30.6842H26.8246Z" fill="black" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*Appointment Booking Section */}
      <section className="w-full min-h-[120px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[260px] max-h-full py-4 px-2 mb-6 sm:py-8 sm:px-4 sm:mb-10 md:py-12 md:px-8 md:mb-12 lg:py-16 lg:px-12 lg:mb-16 flex justify-center items-center">
        {/* Desktop/Tablet Appointment Form */}
        <div className="relative -top-30 hidden md:flex w-full max-w-[1166px] min-h-[280px] box-border rounded-[28px] border-2 border-[#95DDFF] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#FFFFFF_32.81%,#F8FDFF_97.64%)] shadow-[3.12195px_9.36585px_21.8537px_rgba(0,0,0,0.06)] z-10 p-10 lg:p-16 flex-col justify-center gap-8">
          <div className="flex items-center">
            <h2 className="relative left-10 block text-[#0069AB] font-manrope font-bold text-3xl lg:text-[32px] leading-[40px] w-full lg:w-[698px] h-auto lg:h-[40px]">
              Easily book an appointment in 3 simple steps.
            </h2>
          </div>
          <form className="w-full flex flex-row items-end justify-evenly gap-6 lg:gap-10">
            {/* Email Address Field */}
            <div className="relative left-5 flex-1 flex flex-col gap-1 min-w-0 w-auto">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-base leading-6 text-[#888888]" htmlFor="email">Email Address</label>
              </div>
              <div className="flex items-center w-full min-h-[52px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full min-h-[44px] pl-3 pr-4 font-manrope font-semibold text-base leading-6 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7]"
                />
              </div>
            </div>
            {/* Contact Number Field */}
            <div className="relative left-2.5 flex-1 flex flex-col gap-1 min-w-0 w-auto">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-base leading-6 text-[#888888]" htmlFor="phone">Contact Number</label>
              </div>
              <div className="flex items-center w-full min-h-[52px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  className="w-full min-h-[44px] pl-4 pr-4 font-manrope font-semibold text-base leading-6 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7] rounded-xl"
                />
              </div>
            </div>
            {/* Date of Appointment Field */}
            <div className="relative right-2.5 flex-1 flex flex-col gap-1 min-w-0 w-auto">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-base leading-6 text-[#888888]" htmlFor="date">Date of Appointment</label>
              </div>
              <div className="flex items-center w-full min-h-[52px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="date"
                  type="date"
                  placeholder="Select Date of Appointment"
                  className="w-full min-h-[44px] pl-4 pr-4 font-manrope font-semibold text-base leading-6 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7] rounded-xl"
                />
              </div>
            </div>
            {/* Book Now Button */}
            <a
              href="#book-appointment"
              className="relative right-5 w-[180px] h-[52px] flex flex-row items-center justify-center gap-2 px-[16px] py-[14px] bg-[#00A4F4] shadow-[0_8px_28px_0px_rgba(0,0,0,0.06)] rounded-[12px] mt-0"
              role="button"
              tabIndex={0}
            >
              <span className="font-manrope font-bold text-xl leading-6 text-white">
                Book Now
              </span>
              <img src={check} alt="check icon" className="w-5 h-5" />
            </a>
          </form>
        </div>
        {/* Mobile Appointment Form */}
        <div className="md:hidden w-full max-w-[1166px] min-h-[120px] box-border rounded-[20px] border-2 border-[#95DDFF] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#FFFFFF_32.81%,#F8FDFF_97.64%)] shadow-[3.12195px_9.36585px_21.8537px_rgba(0,0,0,0.06)] z-10 p-3 flex flex-col justify-center gap-4">
          <div className="flex items-center">
            <h2 className="relative top-2 block text-[#0069AB] font-manrope text-center font-bold text-base leading-6 w-full h-auto">
              Easily book an appointment in 3 simple steps.
            </h2>
          </div>
          <form className="w-full flex flex-col gap-3">
            {/* Email Address Field */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-sm leading-6 text-[#888888]" htmlFor="email">Email Address</label>
              </div>
              <div className="flex items-center w-full min-h-[36px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full min-h-[28px] pl-3 pr-4 font-manrope font-semibold text-xs leading-5 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7]"
                />
              </div>
            </div>
            {/* Contact Number Field */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-sm leading-6 text-[#888888]" htmlFor="phone">Contact Number</label>
              </div>
              <div className="flex items-center w-full min-h-[36px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  className="w-full min-h-[28px] pl-4 pr-4 font-manrope font-semibold text-xs leading-5 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7] rounded-xl"
                />
              </div>
            </div>
            {/* Date of Appointment Field */}
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center mb-1">
                <span className="flex items-center mr-2">
                  {/* ...svg... */}
                </span>
                <label className="font-manrope font-semibold text-sm leading-6 text-[#888888]" htmlFor="date">Date of Appointment</label>
              </div>
              <div className="flex items-center w-full min-h-[36px] bg-white border border-[#E7E7E7] rounded-xl px-0">
                <input
                  id="date"
                  type="date"
                  placeholder="Select Date of Appointment"
                  className="w-full min-h-[28px] pl-4 pr-4 font-manrope font-semibold text-xs leading-5 text-[#3D3D3D] bg-transparent border-none outline-none placeholder:text-[#E7E7E7] rounded-xl"
                />
              </div>
            </div>
            {/* Book Now Button */}
            <a
              href="#book-appointment"
              className="w-full h-[36px] flex flex-row items-center justify-center gap-2 px-[10px] py-[6px] bg-[#00A4F4] shadow-[0_8px_28px_0px_rgba(0,0,0,0.06)] rounded-[10px] mt-2"
              role="button"
              tabIndex={0}
            >
              <span className="font-manrope font-bold text-sm leading-6 text-white">
                Book Now
              </span>
              <img src={check} alt="check icon" className="w-5 h-5" />
            </a>
          </form>
        </div>
      </section>

    </header >
  )
}
