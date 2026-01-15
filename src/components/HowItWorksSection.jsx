const HowItWorks = () => {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 items-center justify-center">
                {/* desktop layout */}
                <div className="hidden lg:flex flex-col gap-8 items-center justify-center w-full">
                    <h2 className="font-['Manrope'] font-bold text-5xl leading-13 text-center text-[#3D3D3D]">
                        How <span className="bg-[linear-gradient(98.64deg,#88D8FF_27.32%,#0179B4_69.76%)] bg-clip-text text-transparent font-bold">our platform</span> works
                    </h2>
                    <p className="w-191.5 h-12 font-['Manrope'] font-semibold text-base leading-6 text-center text-[#B0B0B0]">
                        Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:
                    </p>
                    <div className="flex flex-row gap-20 items-center justify-center w-full">
                        {/* List of steps */}
                        <aside className="relative top-5 w-105 h-114">
                            <ol className="font-['Manrope'] font-bold text-[32px] leading-10 tracking-normal text-black list-none flex flex-col gap-12 relative">
                                {/* Vertical dotted line connecting steps */}
                                <div className="absolute left-6.5 top-13 w-0.5 h-70 dashed-line"></div>
                                <li className="flex gap-4 items-start relative z-10">
                                    <span className="w-13 h-13 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">1</span>
                                    <div>
                                        <span className="font-['Manrope'] font-bold text-[32px] leading-10 tracking-normal text-[#3D3D3D]">Create Your Profile</span>
                                        <p className="w-83.5 h-18 font-['Manrope'] font-semibold text-[14px] leading-6 tracking-normal text-[#6D6D6D]">Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start relative z-10">
                                    <span className="w-13 h-13 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">2</span>
                                    <div>
                                        <span className="font-['Manrope'] font-bold text-[32px] leading-10 tracking-normal text-[#3D3D3D]">Choose Your Service</span>
                                        <p className="w-83.5 h-18 font-['Manrope'] font-semibold text-[14px] leading-6 tracking-normal text-[#6D6D6D]">Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start relative z-10">
                                    <span className="w-13 h-13 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">3</span>
                                    <div>
                                        <span className="font-['Manrope'] font-bold text-[32px] leading-10 tracking-normal text-[#3D3D3D]">Meet Your Doctor</span>
                                        <p className="w-87 h-18 font-['Manrope'] font-semibold text-[14px] leading-6 tracking-normal text-[#6D6D6D]">Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.</p>
                                    </div>
                                </li>
                            </ol>
                        </aside>
                        {/* Doctor image with medical cross */}
                        <div>
                            <div className="relative w-93.5 h-99.5">
                                <div className="absolute w-79.75 h-71 top-28.5 left-16 bg-[radial-gradient(94.62%_124.56%_at_40.95%_-10.45%,#FFFFFF_44.28%,#CEEFFF_97.64%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-3xl border-2 border-[#4EC6FF] z-0"></div>
                                <img src="/src/assets/images/doc/doc03.png" alt="Doctor smiling at camera" className="relative left-13 w-93.5 h-99.5 object-cover object-[center_20%] z-10" />
                            </div>
                            <div className="relative">
                                {/* Background shadow crosses */}
                                <img src="/src/assets/elements/bgCross.svg" alt="" className="absolute -right-12.5 -top-71.25 w-[90.64px] h-[90.64px] z-10" />
                                {/* Main cross */}
                                <img src="/src/assets/elements/medCross.svg" alt="Medical cross" className="relative right-28.25 -top-74.5 left-87 w-[90.64px] h-[90.64px] z-20" />
                            </div>
                        </div>
                    </div>
                    {/* certificate */}
                    <div className="relative -top-45 -right-103 w-87.25 h-11 rounded-[10px] px-6 py-2 flex items-center justify-center gap-3 bg-white border border-[#4EC6FF]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.06)] z-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 15"
                            className="w-4.5 h-4 text-[#4EC6FF]"
                            aria-hidden="true"
                        >
                            <path d="M7.80488 11.7654L11.5901 13.9214C12.2833 14.3165 13.1316 13.7324 12.9492 12.9937L11.9459 8.93949L15.2933 6.20804C15.9044 5.70985 15.576 4.76501 14.7734 4.70488L10.3679 4.35272L8.64402 0.52181C8.3339 -0.173937 7.27586 -0.173937 6.96574 0.52181L5.24185 4.34413L0.836365 4.69629C0.0337093 4.75642 -0.29465 5.70126 0.316463 6.19945L3.6639 8.9309L2.66058 12.9851C2.47816 13.7238 3.32642 14.3079 4.01963 13.9128L7.80488 11.7654Z" fill="currentColor" />
                        </svg>
                        <span className="inline-block w-65.25 h-5 font-['Manrope'] font-bold text-base leading-5 tracking-normal text-[#0069AB]">Best Certified Team of Specialists</span>
                    </div>
                </div>

                {/* tablet + mobile layout */}
                <div className="flex flex-col items-center gap-14 lg:hidden w-full">
                                        <h2 className="relative top-20 font-['Manrope'] font-bold text-center text-[#3D3D3D] text-3xl sm:text-4xl md:text-5xl leading-tight">
                                            How{" "}
                                            <span className="bg-[linear-gradient(98.64deg,#88D8FF_27.32%,#0179B4_69.76%)] bg-clip-text text-transparent font-bold">
                                                our platform
                                            </span>{" "}
                                            works
                                        </h2>
                    <p className="relative top-20 text-center text-[#6D6D6D] max-w-2xl mb-2">
                        Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:
                    </p>
                    {/* doctor image + crosses */}
                    <div className="relative left-2 flex flex-col items-center">
                        <div className="relative w-[280px] sm:w-[340px] md:w-[420px]">
                            <div className="absolute inset-x-0 bottom-0 mx-auto w-[85%] h-[70%] bg-[radial-gradient(94.62%_124.56%_at_40.95%_-10.45%,#FFFFFF_44.28%,#CEEFFF_97.64%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-3xl border-2 border-[#4EC6FF] z-0"></div>
                            <img
                                src="/src/assets/images/doc/doc03.png"
                                alt="Doctor smiling at camera"
                                className="relative z-10 w-full object-cover object-[center_20%]"
                            />
                        </div>
                        {/* crosses */}
                    </div>
                    {/* mobile + tablet crosses */}
                    <div className="relative left-2 w-full flex justify-center mt-6 lg:hidden">
                        <div className="relative w-[280px] sm:w-[340px] md:w-[420px]">
                            {/* background cross */}
                            <img
                                src="/src/assets/elements/bgCross.svg"
                                alt=""
                                aria-hidden
                                className="absolute right-5 bottom-80 md:bottom-100 md:-right-2 w-16 sm:w-18 md:w-30 z-10"
                            />
                            {/* main medical cross */}
                            <img
                                src="/src/assets/elements/medCross.svg"
                                alt="Medical cross"
                                className="absolute right-0 bottom-85 md:bottom-105 md:-right-7 w-16 sm:w-18 md:w-30 z-20"
                            />
                        </div>
                    </div>
                    {/* certificate – tablet + mobile */}
                    <div className="relative left-2 -top-20 md:-top-15 w-full max-w-[560px] mt-6 px-4">
                        <div className="w-full h-20 rounded-xl px-5 py-3 flex items-center justify-center gap-3 bg-white border border-[#4EC6FF]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.06)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 15"
                                className="w-5 h-5 text-[#4EC6FF] shrink-0"
                                aria-hidden="true"
                            >
                                <path d="M7.80488 11.7654L11.5901 13.9214C12.2833 14.3165 13.1316 13.7324 12.9492 12.9937L11.9459 8.93949L15.2933 6.20804C15.9044 5.70985 15.576 4.76501 14.7734 4.70488L10.3679 4.35272L8.64402 0.52181C8.3339 -0.173937 7.27586 -0.173937 6.96574 0.52181L5.24185 4.34413L0.836365 4.69629C0.0337093 4.75642 -0.29465 5.70126 0.316463 6.19945L3.6639 8.9309L2.66058 12.9851C2.47816 13.7238 3.32642 14.3079 4.01963 13.9128L7.80488 11.7654Z" fill="currentColor" />
                            </svg>
                            <span className="font-['Manrope'] font-bold text-sm sm:text-base text-[#0069AB] text-center">
                                Best Certified Team of Specialists
                            </span>
                        </div>
                    </div>
                    {/* steps list */}
                    <aside className="w-full max-w-[560px]">
                        <ol className="relative -top-20 md:-top-15 flex flex-col gap-10">
                            <li className="flex gap-4">
                                <span className="w-12 h-12 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">
                                    1
                                </span>
                                <div>
                                    <h3 className="font-bold text-xl text-[#3D3D3D]">Create Your Profile</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6D6D6D]">
                                        Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-12 h-12 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">
                                    2
                                </span>
                                <div>
                                    <h3 className="font-bold text-xl text-[#3D3D3D]">Choose Your Service</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6D6D6D]">
                                        Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-12 h-12 rounded-full bg-[linear-gradient(101.91deg,#A7E2FF_0%,#0095DE_87.74%)] flex items-center justify-center font-bold text-white shrink-0">
                                    3
                                </span>
                                <div>
                                    <h3 className="font-bold text-xl text-[#3D3D3D]">Meet Your Doctor</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6D6D6D]">
                                        Have a virtual consultation with one of our certified specialists, or go for a physical visit if you opted for a physical check-up.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks