import logoSvg from '../assets/images/logo.svg'
import doctor01 from '../assets/images/doc/doctor01.png'
import vector01 from '../assets/images/Vector01.svg'
import star from '../assets/elements/star.svg'
import doubleQuotes from '../assets/elements/doubleQuotes.svg'
import check from '../assets/elements/check.svg'
import dotGrid from '../assets/elements/dotGrid.svg'

export default function Header() {
  return (
    <header>
      {/* logo */}
      <div className="absolute top-0 bg-linear-to-b from-white to-[#F6FBFF] z-50">
        <div className="relative max-w-7xl mx-auto px-4 py-5">
          <div className="relative left-[100.01px] top-12">
            <img
              src={logoSvg}
              alt="HealNet logo"
              className="w-[167.99px] h-12 shrink-0"
            />
          </div>

          {/* navbar */}
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
      </div>

      {/* hero section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-6">
            <h1 className="absolute top-60 left-25 w-117.5 h-29 font-manrope font-bold text-[46px] leading-13.5 tracking-normal text-[#3D3D3D]">
              Your <span className="font-manrope font-extrabold bg-[linear-gradient(100.68deg,#0179B4_20.59%,#88D8FF_86.44%)] bg-clip-text text-transparent">trusted partner</span> in digital healthcare.
            </h1>
            <p className="absolute top-96 left-25 w-138 h-24 font-manrope font-medium text-[16px] leading-6 tracking-normal text-[#4F4F4F]">
              <span className="font-manrope font-bold text-[16px] leading-6 tracking-normal text-[#0084D4]!">Empowering Your Health at Every Step.</span> Experience personalized medical care from the comfort of your home. Connect with <span className="font-manrope font-bold text-[16px] leading-6 tracking-normal text-[#0084D4]">certified doctors</span>, or manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <span className="font-manrope font-bold text-[16px] leading-6 tracking-normal text-[#0084D4]">Get Started</span> or Book an Appointment today.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#find-doctors"
                className="absolute w-86 h-17 top-133 left-25 bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] text-white font-manrope font-bold text-[24px] leading-7 tracking-normal pt-5 pr-9 pb-5 pl-9 rounded-xl shadow-[-8px_8px_28px_0px_rgba(0,0,0,0.06)] gap-3 transition hover:translate-y--0.5 flex items-center justify-center"
              >
                Book an appointment
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.20024 0C1.64107 0 1.09064 0.201675 0.673187 0.582022C0.253197 0.964914 0 1.50229 0 2.08123C0 2.66018 0.253102 3.19747 0.673092 3.58036L6.28019 8.69064C6.46671 8.86063 6.46671 9.15417 6.28019 9.32415L0.667601 14.4394L0.662199 14.4445C0.25322 14.8305 0.0108525 15.3649 0.0163097 15.9373C0.0217669 16.5096 0.274136 17.0393 0.689456 17.4178C1.10224 17.794 1.64528 17.9956 2.19829 17.9999C2.75128 18.0043 3.29734 17.8114 3.71635 17.4426L3.72191 17.4377L11.327 10.5064C11.747 10.1235 12 9.58634 12 9.0074C12 8.42845 11.7469 7.89116 11.3269 7.50827L3.72729 0.582022C3.30984 0.201675 2.7594 0 2.20024 0Z" fill="white" />
                </svg>
              </a>

              <p className="absolute top-160 left-25 w-71 h-6 font-manrope font-semibold text-[16px] leading-6 tracking-normal text-[#B0B0B0]">
                Trusted by millions across the globe:</p>
              <div className="absolute top-170 left-25 w-[385.22px] h-11 flex items-center justify-evenly">
                <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.2222 26.4298C34.2222 27.6915 33.5291 30.121 31.9718 31.4555C31.6603 31.6985 31.3489 31.5614 31.4858 31.2073C31.9393 30.0828 32.9764 27.4815 32.4903 26.8828C32.1464 26.4281 30.726 26.4628 29.5143 26.5669C28.9616 26.6381 28.4755 26.6711 28.099 26.7492C27.7499 26.7769 27.6798 26.4663 28.0289 26.2233C28.4835 25.8979 28.986 25.6472 29.5177 25.4806C31.4858 24.8836 33.7602 25.2428 34.087 25.6246C34.1486 25.6975 34.2222 25.904 34.2222 26.4298ZM30.933 28.6737C30.4817 29.0236 30.0077 29.3425 29.5143 29.6282C25.8829 31.8408 21.1784 33 17.0934 33C10.5167 33 4.63484 30.541 0.171663 26.4264C-0.211677 26.1105 0.104921 25.6524 0.553292 25.9006C5.36216 28.7466 11.3142 30.4681 17.475 30.4681C21.3529 30.4681 25.532 29.7323 29.5143 28.1496C29.7933 28.0438 30.1047 27.8997 30.3768 27.7991C31.0049 27.5127 31.5577 28.219 30.933 28.6737ZM20.374 9.53245C20.374 7.72591 20.4459 6.66213 19.8555 5.74932C19.3318 4.9979 18.43 4.5467 17.1704 4.61785C15.8048 4.6942 14.3381 5.60181 13.9651 7.26604C13.8915 7.64782 13.6724 8.02267 13.2172 8.10423L9.0501 7.56626C8.75233 7.49684 8.29882 7.26604 8.44771 6.66213C9.34274 1.88809 13.3661 0.223864 17.1721 0H18.0654C20.1533 0 22.8367 0.605648 24.5531 2.19352C26.6358 4.16491 26.4134 6.8131 26.4134 9.69036V16.5052C26.4134 18.5495 27.2314 19.4554 28.0528 20.5209C28.2753 20.9009 28.3523 21.3487 27.9775 21.6575C26.8994 22.6323 25.8057 23.5892 24.6969 24.5279C24.3974 24.7587 23.8601 24.783 23.653 24.606C22.3352 23.4866 22.0135 22.8654 21.1972 21.7287C19.7768 23.2402 18.584 24.0749 17.1653 24.5279C16.1676 24.7846 15.1415 24.9106 14.1123 24.9027C10.5355 24.9027 7.70328 22.6415 7.70328 18.1694C7.70328 14.6136 9.56864 12.1963 12.3239 11.0526C15.0792 9.90729 19.0837 9.54286 20.374 9.53592M19.5577 18.546C20.4476 17.0328 20.374 15.7937 20.374 13.0188C19.2583 13.0188 18.139 13.0969 17.1721 13.3277C15.3838 13.8535 13.9634 14.9937 13.9634 17.4145C13.9634 19.3061 14.9354 20.5938 16.5749 20.5938C16.8008 20.5938 16.9993 20.566 17.1704 20.5157C18.317 20.1929 19.0324 19.6098 19.5577 18.546Z" fill="black" />
                </svg>

                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.5881 38.8622C30.5348 40.7972 28.293 40.4916 26.1349 39.5751C23.8512 38.6382 21.756 38.5974 19.3465 39.5751C16.3295 40.8379 14.7371 40.4713 12.9353 38.8622C2.7108 28.6172 4.21933 13.0155 15.8266 12.4452C18.6551 12.5878 20.6246 13.9524 22.2798 14.0746C24.7521 13.5858 27.1197 12.1804 29.7596 12.3637C32.9233 12.6081 35.3118 13.8302 36.8832 16.0299C30.3462 19.8387 31.8967 28.2099 37.8889 30.5522C36.6946 33.6073 35.1442 36.6421 32.5671 38.8826L32.5881 38.8622ZM22.0703 12.323C21.756 7.78095 25.5483 4.03328 29.9063 3.66666C30.5139 8.92155 25.0035 12.8322 22.0703 12.323Z" fill="black" />
                  </g>
                </svg>

                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path opacity="0.7" d="M22.407 10.9578C25.0132 10.9141 27.5315 11.8995 29.4158 13.7005L34.6738 8.44245C31.3555 5.32538 26.9594 3.61384 22.407 3.66662C19.0078 3.66521 15.6752 4.60924 12.7817 6.39317C9.88828 8.17709 7.54799 10.7306 6.0225 13.7683L12.1477 18.5166C12.8521 16.3418 14.2209 14.4427 16.0613 13.0868C17.9018 11.7308 20.1212 10.9862 22.407 10.9578Z" fill="black" />
                    <path d="M6.0225 13.7684C4.74083 16.3231 4.07342 19.1418 4.07342 22C4.07342 24.8582 4.74083 27.677 6.0225 30.2317L12.1477 25.4834C11.3812 23.2244 11.3812 20.7757 12.1477 18.5167L6.0225 13.7684Z" fill="black" />
                    <path opacity="0.5" d="M28.6147 31.2914C27.1972 32.2013 25.5907 32.7754 23.9177 32.97C22.2447 33.1646 20.5493 32.9745 18.9609 32.4143C17.3725 31.854 15.933 30.9384 14.7522 29.7373C13.5715 28.5361 12.6806 27.0812 12.1477 25.4834L6.02433 30.2317C7.54954 33.2688 9.88926 35.822 12.782 37.6059C15.6748 39.3898 19.0066 40.3341 22.4052 40.3334C26.868 40.4543 31.2084 38.8652 34.5382 35.8912L28.6147 31.2914Z" fill="black" />
                    <path opacity="0.25" d="M39.6733 18.667H22.407V25.7583H32.274C32.0698 26.8801 31.6402 27.9487 31.0112 28.8997C30.3822 29.8507 29.567 30.6643 28.6147 31.2913L34.54 35.893C36.3444 34.1552 37.7634 32.0577 38.7052 29.7364C39.647 27.415 40.0905 24.9217 40.007 22.418C40.007 21.1585 39.897 19.9045 39.6733 18.667Z" fill="black" />
                  </g>
                </svg>

                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M9.99455 10.094C11.177 11.0186 11.6249 10.9533 13.8572 10.8101L34.9024 9.59903C35.3503 9.59903 34.9777 9.16937 34.8272 9.09718L31.3312 6.67388C30.6659 6.17203 29.7701 5.60602 28.0585 5.74237L7.68579 7.17458C6.93929 7.23989 6.78999 7.59852 7.08859 7.88496L9.99455 10.094ZM11.257 14.8031V36.0411C11.257 37.1812 11.8482 37.6108 13.186 37.5387L36.3154 36.2554C37.6531 36.1832 37.8084 35.4018 37.8084 34.4714V13.3766C37.8084 12.4451 37.4345 11.9502 36.614 12.0223L12.4466 13.3766C11.5508 13.4488 11.2582 13.8716 11.2582 14.7974L11.257 14.8031ZM34.0878 15.9363C34.2371 16.5814 34.0878 17.2196 33.4154 17.2975L32.3022 17.5129V33.1893C31.3312 33.6912 30.4426 33.9776 29.702 33.9776C28.5076 33.9776 28.209 33.619 27.3192 32.5511L20.0286 21.5712V32.1936L22.3362 32.6955C22.3362 32.6955 22.3362 33.9787 20.4765 33.9787L15.3442 34.2652C15.1949 33.9787 15.3442 33.2626 15.8674 33.1251L17.2051 32.7665V18.7251L15.3454 18.5819C15.1961 17.9368 15.57 17.0122 16.6079 16.9411L22.1129 16.5825L29.702 27.7056V17.8646L27.7671 17.6492C27.6178 16.8678 28.209 16.2949 28.9555 16.2285L34.0878 15.9363ZM5.97542 5.24854L27.1699 3.75102C29.7701 3.53561 30.4426 3.67883 32.0777 4.81888L38.8463 9.38363C39.9595 10.165 40.3333 10.3804 40.3333 11.234V36.2565C40.3333 37.8262 39.7361 38.7509 37.6579 38.8941L13.0355 40.3206C11.4804 40.3928 10.7339 40.1774 9.91214 39.1805L4.92913 32.9739C4.03931 31.8339 3.66666 30.9803 3.66666 29.9846V7.74403C3.66666 6.46076 4.26385 5.39291 5.97422 5.24969L5.97542 5.24854Z" fill="black" />
                  </g>
                </svg>

                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M32.8167 19.9833C26.95 16.5 17.1417 16.1333 11.55 17.875C10.6333 18.15 9.71667 17.6 9.44167 16.775C9.16667 15.8583 9.71667 14.9417 10.5417 14.6667C17.05 12.7417 27.775 13.1083 34.5583 17.1417C35.3833 17.6 35.6583 18.7 35.2 19.525C34.7417 20.1667 33.6417 20.4417 32.8167 19.9833ZM32.6333 25.1167C32.175 25.7583 31.35 26.0333 30.7083 25.575C25.7583 22.55 18.2417 21.6333 12.4667 23.4667C11.7333 23.65 10.9083 23.2833 10.725 22.55C10.5417 21.8167 10.9083 20.9917 11.6417 20.8083C18.3333 18.7917 26.5833 19.8 32.2667 23.2833C32.8167 23.5583 33.0917 24.475 32.6333 25.1167ZM30.4333 30.1583C30.0667 30.7083 29.425 30.8917 28.875 30.525C24.5667 27.8667 19.1583 27.3167 12.7417 28.7833C12.1 28.9667 11.55 28.5083 11.3667 27.9583C11.1833 27.3167 11.6417 26.7667 12.1917 26.5833C19.1583 25.025 25.2083 25.6667 29.975 28.6C30.6167 28.875 30.7083 29.6083 30.4333 30.1583ZM22 3.66666C19.5924 3.66666 17.2084 4.14086 14.9841 5.0622C12.7598 5.98353 10.7388 7.33396 9.03638 9.03637C5.59821 12.4745 3.66667 17.1377 3.66667 22C3.66667 26.8623 5.59821 31.5254 9.03638 34.9636C10.7388 36.666 12.7598 38.0164 14.9841 38.9378C17.2084 39.8591 19.5924 40.3333 22 40.3333C26.8623 40.3333 31.5255 38.4018 34.9636 34.9636C38.4018 31.5254 40.3333 26.8623 40.3333 22C40.3333 19.5924 39.8591 17.2084 38.9378 14.9841C38.0165 12.7598 36.666 10.7388 34.9636 9.03637C33.2612 7.33396 31.2402 5.98353 29.0159 5.0622C26.7916 4.14086 24.4076 3.66666 22 3.66666Z" fill="black" />
                  </g>
                </svg>

                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M11.386 26.8246C11.386 27.8482 10.9793 28.8299 10.2555 29.5537C9.53167 30.2776 8.54995 30.6842 7.52631 30.6842C6.50266 30.6842 5.52095 30.2776 4.79712 29.5537C4.0733 28.8299 3.66666 27.8482 3.66666 26.8246C3.66666 25.8009 4.0733 24.8192 4.79712 24.0954C5.52095 23.3715 6.50266 22.9649 7.52631 22.9649H11.386V26.8246ZM13.3158 26.8246C13.3158 25.8009 13.7224 24.8192 14.4462 24.0954C15.1701 23.3715 16.1518 22.9649 17.1754 22.9649C18.1991 22.9649 19.1808 23.3715 19.9046 24.0954C20.6284 24.8192 21.0351 25.8009 21.0351 26.8246V36.4737C21.0351 37.4973 20.6284 38.479 19.9046 39.2029C19.1808 39.9267 18.1991 40.3333 17.1754 40.3333C16.1518 40.3333 15.1701 39.9267 14.4462 39.2029C13.7224 38.479 13.3158 37.4973 13.3158 36.4737V26.8246ZM17.1754 11.386C16.1518 11.386 15.1701 10.9793 14.4462 10.2555C13.7224 9.53167 13.3158 8.54995 13.3158 7.52631C13.3158 6.50266 13.7224 5.52095 14.4462 4.79712C15.1701 4.0733 16.1518 3.66666 17.1754 3.66666C18.1991 3.66666 19.1808 4.0733 19.9046 4.79712C20.6284 5.52095 21.0351 6.50266 21.0351 7.52631V11.386H17.1754ZM17.1754 13.3158C18.1991 13.3158 19.1808 13.7224 19.9046 14.4462C20.6284 15.1701 21.0351 16.1518 21.0351 17.1754C21.0351 18.1991 20.6284 19.1808 19.9046 19.9046C19.1808 20.6284 18.1991 21.0351 17.1754 21.0351H7.52631C6.50266 21.0351 5.52095 20.6284 4.79712 19.9046C4.0733 19.1808 3.66666 18.1991 3.66666 17.1754C3.66666 16.1518 4.0733 15.1701 4.79712 14.4462C5.52095 13.7224 6.50266 13.3158 7.52631 13.3158H17.1754ZM32.614 17.1754C32.614 16.1518 33.0207 15.1701 33.7445 14.4462C34.4683 13.7224 35.45 13.3158 36.4737 13.3158C37.4973 13.3158 38.479 13.7224 39.2029 14.4462C39.9267 15.1701 40.3333 16.1518 40.3333 17.1754C40.3333 18.1991 39.9267 19.1808 39.2029 19.9046C38.479 20.6284 37.4973 21.0351 36.4737 21.0351H32.614V17.1754ZM30.6842 17.1754C30.6842 18.1991 30.2776 19.1808 29.5537 19.9046C28.8299 20.6284 27.8482 21.0351 26.8246 21.0351C25.8009 21.0351 24.8192 20.6284 24.0954 19.9046C23.3715 19.1808 22.9649 18.1991 22.9649 17.1754V7.52631C22.9649 6.50266 23.3715 5.52095 24.0954 4.79712C24.8192 4.0733 25.8009 3.66666 26.8246 3.66666C27.8482 3.66666 28.8299 4.0733 29.5537 4.79712C30.2776 5.52095 30.6842 6.50266 30.6842 7.52631V17.1754ZM26.8246 32.614C27.8482 32.614 28.8299 33.0207 29.5537 33.7445C30.2776 34.4683 30.6842 35.45 30.6842 36.4737C30.6842 37.4973 30.2776 38.479 29.5537 39.2029C28.8299 39.9267 27.8482 40.3333 26.8246 40.3333C25.8009 40.3333 24.8192 39.9267 24.0954 39.2029C23.3715 38.479 22.9649 37.4973 22.9649 36.4737V32.614H26.8246ZM26.8246 30.6842C25.8009 30.6842 24.8192 30.2776 24.0954 29.5537C23.3715 28.8299 22.9649 27.8482 22.9649 26.8246C22.9649 25.8009 23.3715 24.8192 24.0954 24.0954C24.8192 23.3715 25.8009 22.9649 26.8246 22.9649H36.4737C37.4973 22.9649 38.479 23.3715 39.2029 24.0954C39.9267 24.8192 40.3333 25.8009 40.3333 26.8246C40.3333 27.8482 39.9267 28.8299 39.2029 29.5537C38.479 30.2776 37.4973 30.6842 36.4737 30.6842H26.8246Z" fill="black" />
                  </g>
                </svg>
              </div>
            </div>

            {/* doctor01 pic */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-96.5 h-119">
                <div className="absolute w-96.5 h-100.5 bg-[linear-gradient(180deg,#00A4F4_-16.77%,#C2EBFF_62.45%)] rounded-tl-[300px] rounded-tr-[300px] rounded-br-2xl rounded-bl-2xl top-64.5 left-199 opacity-100"></div>
                <img
                  src={doctor01}
                  alt="Doctor smiling while holding a folder"
                  className="absolute w-120.5 h-119 top-46 left-191.25 opacity-100"
                />
              </div>
            </div>
          </div>

          <div id="vector01" className="absolute w-[1456.2px] h-156.75 left-[-19.44px] top-100.5 z-1 pointer-events-none">
            <img src={vector01} alt="" aria-hidden="true" className="w-full h-full" />
          </div>

          <div className="absolute top-263 left-19.75 w-[139.46px] h-[68.46px] ">
            <img src={dotGrid} alt="" aria-hidden="true" className="w-full h-full" />
          </div>
        </div>
      </div>


      {/* Testimonial Card */}
      <div className="absolute left-266.5 top-104 w-[241.9512px] h-32 z-10">
        <div className="relative h-full w-full rounded-[9.37px] border-2 border-[#95DDFF] p-[1.56px]">
          <div className="relative h-full w-full rounded-[7.81px] p-4.5 shadow-[3.12px_9.37px_21.85px_0px_#0000000F] bg-[radial-gradient(197.8%_197.87%_at_46.45%_-32.32%,#FFFFFF_33.84%,#EEF9FF_97.64%)]">
            {/* Group 4 - Avatars Container */}
            <div className="absolute w-49 h-[65.71px] left-[23.41px] top-[18.73px]">
              {/* Avatar */}
              <div className="absolute w-[37.46px] h-[37.46px] left-0 top-0 bg-[#D9D9D9] border-[1.17073px] border-white rounded-full"></div>
              <div className="absolute w-[37.46px] h-[37.46px] left-[28.1px] top-0 bg-[#D9D9D9] border-[1.17073px] border-white rounded-full"></div>
              <div className="absolute w-[37.46px] h-[37.46px] left-[56.2px] top-0 bg-[#D9D9D9] border-[1.17073px] border-white rounded-full"></div>
              <div className="absolute w-[37.46px] h-[37.46px] left-[84.3px] top-0 bg-[#D9D9D9] border-[1.17073px] border-white rounded-full"></div>
            </div>

            {/* 2400+ */}
            <p className="absolute w-17 h-6.25 left-[151.41px] top-[24.98px] font-manrope font-bold text-[21.85px] leading-6.25">
              <span className="text-[#3D3D3D]">2400</span><span className="font-extrabold text-[#00A4F4]">+</span>
            </p>

            {/* Happy Customers */}
            <p className="absolute w-33.75 h-5.5 left-[23.41px] top-[62.44px] font-manrope font-bold text-[15.61px] leading-5.5 text-[#00A4F4]">
              Happy Customers
            </p>

            {/* Group 7 - Stars and Rating */}
            <div className="absolute w-[177.17px] h-4 left-[23.41px] top-[93.66px]">
              {/* Group 6 - Stars Container */}
              <div className="absolute w-[106.15px] h-[14.05px] left-0 top-[0.78px]">
                {/* Stars*/}
                <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px] left-0 top-0" />
                <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px] left-[22.64px] top-0" />
                <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px] left-[45.27px] top-0" />
                <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px] left-[67.91px] top-0" />
                <div className="absolute w-[15.61px] h-[14.05px] left-[90.54px] top-0 overflow-hidden">
                  <img src={star} alt="star" className="absolute w-[15.61px] h-[14.05px]" />
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-white"></div>
                </div>
              </div>

              {/* (4.7 Stars) text */}
              <p className="absolute w-16 h-4 left-[113.18px] top-0 font-manrope font-bold text-[12.4878px] leading-4 text-[#6D6D6D]">
                (4.7 Stars)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Box */}
      <div className="absolute left-174.75 top-136 w-74 h-11 flex flex-row items-center justify-center gap-3 px-6 bg-white rounded-[10px] shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] z-10">
        <div className="relative flex-none w-7 h-7 bg-[#EFF9FF] rounded flex items-center justify-center">
          <img src={star} alt="star" className="w-4.5 h-4 filter-[brightness(0)_saturate(100%)_invert(33%)_sepia(59%)_saturate(1113%)_hue-rotate(186deg)_brightness(101%)_contrast(100%)]" />
        </div>

        <p className="flex-none w-52 h-5 font-manrope font-bold text-base leading-5 text-[#0069AB]">
          Easy Appointment Booking
        </p>
      </div>

      {/* Frame */}
      <div className="absolute left-242.25 top-162 w-75 h-22 box-border rounded-xl border-2 border-[#95DDFF] bg-[linear-gradient(95.16deg,#FBFDFF_0.79%,#E9F6FF_98.08%)] shadow-[3.12195px_9.36585px_21.8537px_rgba(0,0,0,0.06)] z-10">
        <div className="relative h-full w-full">
          <img src={doubleQuotes} alt="quotes" className="absolute w-15.5 h-12.5 left-5 -top-9.5" />
          <p className="absolute w-63 h-10 left-6 top-7 font-manrope font-medium text-[14px] leading-4.5 text-[#3D3D3D]">
            Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras.
          </p>
        </div>
      </div>

      {/*Appointment Booking Section */}
      <div className="absolute left-1/2 -translate-x-1/2 top-200 w-291.5 h-70 box-border rounded-[28px] border-2 border-[#95DDFF] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#FFFFFF_32.81%,#F8FDFF_97.64%)] shadow-[3.12195px_9.36585px_21.8537px_rgba(0,0,0,0.06)] z-10">
        <h2 className="absolute w-174.5 h-10 left-10 top-10 font-manrope font-bold text-[32px] leading-10 text-[#0069AB]">
          Easily book an appointment in 3 simple steps.
        </h2>

        {/* Email Address Field */}
        <div className="absolute w-64.25 h-27 left-10 top-30">
          <div className="absolute w-8 h-8 left-0 bottom-19">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6667 8C27.0203 8 27.3594 8.14048 27.6095 8.39052C27.8595 8.64057 28 8.97971 28 9.33333V22.6667C28 23.0203 27.8595 23.3594 27.6095 23.6095C27.3594 23.8595 27.0203 24 26.6667 24H5.33333C4.97971 24 4.64057 23.8595 4.39052 23.6095C4.14048 23.3594 4 23.0203 4 22.6667V9.33333C4 8.97971 4.14048 8.64057 4.39052 8.39052C4.64057 8.14048 4.97971 8 5.33333 8H26.6667ZM26.4 11.08L16.2533 17.4133C16.1743 17.4632 16.0844 17.4931 15.9915 17.5005C15.8986 17.5079 15.8054 17.4925 15.72 17.4556L15.6 17.4L5.6 11.08V22.6667H26.6667L26.4 11.08ZM25.9333 9.33333H6.06667L16 15.6267L25.9333 9.33333Z" fill="#00A4F4" />
            </svg>
          </div>
          <p className="absolute w-28.25 h-6 left-10 bottom-20 font-manrope font-semibold text-base leading-6 text-[#888888]">
            Email Address
          </p>
          <div className="absolute w-64.25 h-15 left-0 bottom-0 box-border bg-white border border-[#E7E7E7] rounded-xl">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="absolute w-50.5 h-6 left-4.5 top-4.5 font-manrope font-semibold text-base leading-6 text-[#E7E7E7] bg-transparent border-none outline-none placeholder:text-[#E7E7E7]"
            />
          </div>
        </div>

        {/* Contact Number Field */}
        <div className="absolute w-64.25 h-27 left-84.25 top-30">
          <div className="absolute w-8 h-8 left-0 bottom-19">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.6417 21.4533L21.9734 20.72C21.5919 20.6455 21.1978 20.6906 20.8449 20.849C20.492 21.0075 20.1981 21.2716 20.0034 21.6067L17.9601 24.9867C13.9145 22.9164 10.7503 19.752 8.68006 15.7067L12.0734 13.6467C12.4084 13.4518 12.6722 13.1577 12.8306 12.8047C12.989 12.4517 13.034 12.0575 12.9601 11.676L12.2267 8.02667C12.1362 7.56172 11.8906 7.14397 11.5338 6.84564C11.177 6.54732 10.7305 6.38692 10.2717 6.39333H7.63339C5.77339 6.39333 4.24006 7.92667 4.32006 9.78667C4.88006 19.7467 12.9201 27.7733 22.8667 28.3333C24.7267 28.4133 26.2601 26.88 26.2601 25.02V22.3817C26.2734 21.1467 25.2934 20.1267 24.0584 20C23.9189 19.9843 23.7806 19.9843 23.6417 20L25.6417 21.4533Z" fill="#00A4F4" />
            </svg>
          </div>
          <p className="absolute w-32 h-6 left-10 bottom-20 font-manrope font-semibold text-base leading-6 text-[#888888]">
            Contact Number
          </p>
          <div className="absolute w-64.25 h-15 left-0 bottom-0 box-border bg-white border border-[#E7E7E7] rounded-xl">
            <input
              type="tel"
              placeholder="Enter Your Contact Number"
              className="absolute w-54.25 h-6 left-4.5 top-4.5 font-manrope font-semibold text-base leading-6 text-[#E7E7E7] bg-transparent border-none outline-none placeholder:text-[#E7E7E7]"
            />
          </div>
        </div>

        {/* Date of Appointment Field */}
        <div className="absolute w-64.25 h-27 left-158.5 top-30">
          <div className="absolute w-8 h-8 left-0 bottom-19">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3333 6.66667H24V5.33333C24 4.97971 23.8595 4.64057 23.6095 4.39052C23.3594 4.14048 23.0203 4 22.6667 4C22.313 4 21.9739 4.14048 21.7239 4.39052C21.4738 4.64057 21.3333 4.97971 21.3333 5.33333V6.66667H10.6667V5.33333C10.6667 4.97971 10.5262 4.64057 10.2761 4.39052C10.0261 4.14048 9.68695 4 9.33333 4C8.97971 4 8.64057 4.14048 8.39052 4.39052C8.14048 4.64057 8 4.97971 8 5.33333V6.66667H6.66667C5.95942 6.66667 5.28115 6.94762 4.78105 7.44772C4.28095 7.94781 4 8.62609 4 9.33333V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V9.33333C28 8.62609 27.719 7.94781 27.219 7.44772C26.7189 6.94762 26.0406 6.66667 25.3333 6.66667ZM25.3333 25.3333H6.66667V14.6667H25.3333V25.3333ZM25.3333 12H6.66667V9.33333H25.3333V12Z" fill="#00A4F4" />
            </svg>
          </div>
          <p className="absolute w-40.5 h-6 left-10 bottom-20 font-manrope font-semibold text-base leading-6 text-[#888888]">
            Date of Appointment
          </p>
          <div className="absolute w-64.25 h-15 left-0 bottom-0 box-border bg-white border border-[#E7E7E7] rounded-xl">
            <input
              type="date"
              placeholder="Select Date of Appointment"
              className="absolute w-55.25 h-6 left-4.5 top-4.5 font-manrope font-semibold text-base leading-6 text-[#E7E7E7] bg-transparent border-none outline-none placeholder:text-[#E7E7E7]"
            />
          </div>
        </div>

        {/* Book Now Button */}
        <button className="absolute w-48.75 h-15 left-232.75 top-42 flex flex-row items-center justify-center gap-2 px-5 py-4.5 bg-[#00A4F4] shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] rounded-xl">
          <span className="w-28.5 h-6 font-manrope font-bold text-2xl leading-6 text-white">
            Book Now
          </span>
          <img src={check} alt="check icon" className="w-5 h-5" />
        </button>
      </div>

    </header >
  )
}
