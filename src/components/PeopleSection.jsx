import dotRoundCircle from "../assets/elements/dotRoundCircle.svg";
import doc04 from "../assets/images/doc/doc04.png";
import deco01 from "../assets/elements/deco01.svg";
import doc05 from "../assets/images/doc/doc05.png";

const PeopleSection = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* testimonials section */}
            <div className="relative min-h-[900px] lg:min-h-[1000px]">
                <div className="flex flex-col items-center justify-center px-5 lg:px-0">
                    <h2 className="w-full max-w-[638px] lg:w-[638px] lg:h-[104px] font-manrope font-bold text-[28px] leading-[36px] lg:text-[40px] lg:leading-[52px] text-center">
                        <span className="bg-[linear-gradient(98.7deg,#0179B4_19.22%,#88D8FF_73.07%)] bg-clip-text text-transparent">Patient Testimonials:</span>
                        <br />
                        Hear from Those We've Cared For
                    </h2>
                    <span className="w-full h-5 lg:hidden"></span>
                    <p className="relative lg:top-7.5 mt-4 w-full max-w-[766px] lg:w-[766px] lg:h-[24px] font-manrope font-semibold text-sm lg:text-base leading-6 text-center text-[#B0B0B0]">Discover the difference we make through the voices of those we've served:</p>
                    <span className="w-full h-16 lg:hidden"></span>
                </div>

                <div className="relative z-10 lg:top-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[100px] px-5">
                    <div className="w-full max-w-[700px] lg:w-[511px] h-auto lg:h-[152px] border-2 border-[#4EC6FF] rounded-[20px] p-6 lg:pt-[28px] lg:pr-[40px] lg:pb-[28px] lg:pl-[40px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex flex-col lg:flex-row items-center justify-center gap-4">
                        <img className="w-[76px] h-[76px] rounded-[8px]" />
                        <p className="w-full lg:w-[335px] h-auto lg:h-[96px] font-manrope font-medium text-base leading-6 text-center">"After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                            <br /><span className="font-manrope font-bold text-base leading-6">- Linda A.</span>
                        </p>
                    </div>
                    <div className="w-full max-w-[700px] lg:w-[511px] h-auto lg:h-[152px] border-2 border-[#4EC6FF] rounded-[20px] p-6 lg:pt-[28px] lg:pr-[40px] lg:pb-[28px] lg:pl-[40px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex flex-col lg:flex-row items-center justify-center gap-4">
                        <img className="w-[76px] h-[76px] rounded-[8px]" />
                        <p className="w-full lg:w-[335px] h-auto lg:h-[96px] font-manrope font-medium text-base leading-6 text-center">“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
                            <br /><span className="font-manrope font-bold text-base leading-6">- Henry B.</span>
                        </p>
                    </div>
                    <span className="w-full h-16 lg:hidden"></span>
                </div>

                <div className="relative lg:top-30 z-10 flex justify-center px-5">
                    <div className="w-full max-w-[988px] lg:w-[988px] h-auto lg:h-[200px] rounded-[16px] p-6 lg:p-[40px] flex items-center justify-center">
                        <div className="w-full grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-2 lg:flex lg:justify-evenly lg:items-center">
                            <div className="flex flex-col items-center">
                                <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                    10,000+
                                </h2>
                                <p className="font-manrope font-semibold text-xs sm:text-sm leading-[24px] text-center text-[#6D6D6D]">Successful Consultations</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                    2,500+
                                </h2>
                                <p className="font-manrope font-semibold text-xs sm:text-sm leading-[24px] text-center text-[#6D6D6D]">Healthcare Professionals</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                    98%
                                </h2>
                                <p className="font-manrope font-semibold text-xs sm:text-sm leading-[24px] text-center text-[#6D6D6D]">Patient Satisfaction Rate</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="font-manrope font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight lg:leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                    200+
                                </h2>
                                <p className="font-manrope font-semibold text-xs sm:text-sm leading-[24px] text-center text-[#6D6D6D]">Top Specialists</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative lg:top-40 z-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[100px] px-5">
                    <span className="w-full h-10 lg:hidden"></span>
                    <div className="w-full max-w-[700px] lg:w-[511px] h-auto lg:h-[152px] border-2 border-[#4EC6FF] rounded-[20px] p-6 lg:pt-[28px] lg:pr-[40px] lg:pb-[28px] lg:pl-[40px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex flex-col lg:flex-row items-center justify-center gap-4">
                        <img className="w-[76px] h-[76px] rounded-[8px]" />
                        <p className="w-full lg:w-[335px] h-auto lg:h-[96px] font-manrope font-medium text-base leading-6 text-center">"After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                            <br /><span className="font-manrope font-bold text-base leading-6">- Linda A.</span>
                        </p>
                    </div>
                    <div className="w-full max-w-[700px] lg:w-[511px] h-auto lg:h-[152px] border-2 border-[#4EC6FF] rounded-[20px] p-6 lg:pt-[28px] lg:pr-[40px] lg:pb-[28px] lg:pl-[40px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex flex-col lg:flex-row items-center justify-center gap-4">
                        <img className="w-[76px] h-[76px] rounded-[8px]" />
                        <p className="w-full lg:w-[335px] h-auto lg:h-[96px] font-manrope font-medium text-base leading-6 text-center">“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
                            <br /><span className="font-manrope font-bold text-base leading-6">- Henry B.</span>
                        </p>
                    </div>
                </div>
                {/* decoration */}
                <div className="absolute inset-0 pointer-events-none select-none">
                    <img
                        src={dotRoundCircle}
                        alt="dot decoration"
                        className="hidden lg:block absolute top-35 left-15 w-[126px] h-[124px] opacity-70 pointer-events-none"
                    />
                    <img
                        src={dotRoundCircle}
                        alt="dot decoration"
                        className="hidden lg:block absolute bottom-35 right-15 w-[126px] h-[124px] opacity-70 pointer-events-none"
                    />
                </div>
            </div>



            {/* doctors section */}
            <section className="w-full overflow-hidden">
                <article className="relative w-full">
                    <div className="w-auto flex flex-col items-center justify-center py-16">
                        <span className="w-full h-20 lg:h-10"></span>
                        <h2
                            className="relative -top-5 w-full max-w-[638px] font-manrope font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] text-center px-4 lg:px-0">
                            <span className="bg-[linear-gradient(98.7deg,#0179B4_19.22%,#88D8FF_73.07%)] bg-clip-text text-transparent">Masters of Medicine:</span>
                            <br />
                            Meet our team of specialists
                        </h2>
                        <p className="relative top-5 w-full max-w-[740px] sm:w-150 lg:w-300 font-manrope font-semibold text-sm leading-5 md:text-base md:leading-6 text-center text-[#B0B0B0] px-4 lg:px-0">
                            Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:
                        </p>
                        <span className="w-full h-16 lg:h-10"></span>
                    </div>


                    <div className="relative flex flex-col w-auto justify-center items-center gap-0 lg:gap-10 mt-24">
                        <div className="scale-[0.75] md:scale-[0.85] lg:scale-100 origin-top">
                            <div className="relative w-[778px] max-w-full min-h-[400px] z-10">
                                <div className="absolute -top-[12.5px] left-[1.5px] w-[320px] h-[400px] rounded-[28px] z-10">
                                    <img
                                        src={doc04}
                                        alt="doctor head"
                                        className="w-[320px] h-[400px] object-cover [clip-path:inset(0_0_calc(100%_-_100px)_0)]"
                                    />
                                </div>
                                <div className="absolute w-full max-w-[778px] min-h-[340px] left-0 top-[48.35px] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#35BDFF_38.13%,#008CD0_100%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden border-2 border-[#95DDFF]">
                                    <img src={doc04} alt="doctor" className="absolute -top-[63px] -left-0 w-[320px] h-[400px] object-cover rounded-[28px]" />

                                    {/* details */}
                                    <aside className="absolute right-[40px] top-[40px] flex flex-col gap-4">
                                        <h2 className="w-[388px] h-[40px] font-manrope font-extrabold text-[24px] leading-[40px] text-[#EFF9FF]">Dr. Sarah Johnson (Cardiologist)</h2>
                                        <p className="w-[388px] h-[144px] font-manrope font-semibold text-base leading-[24px] text-white">Heart health is Dr. Wong's passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She's a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.</p>
                                        <div className="w-[246px] h-[56px] bg-[#EFF9FF] rounded-[12px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] gap-[12px] flex items-center justify-center">
                                            <a className="font-manrope font-semibold text-[16px] leading-[24px] bg-[linear-gradient(98.64deg,#007DAA_6.59%,#15B2FF_72.16%)] bg-clip-text text-transparent">Book appointment</a>
                                            <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="-481.53%" stopColor="#007DAA" />
                                                        <stop offset="-134.2%" stopColor="#15B2FF" />
                                                    </linearGradient>
                                                </defs>
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="url(#phoneGradient)" />
                                            </svg>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>


                        {/* another doctor */}
                        <div className="flex justify-center">
                            <div className="scale-[0.75] md:scale-[0.85] lg:scale-100 origin-top">
                                <div className="relative w-[778px] max-w-full min-h-[400px] z-10">
                                    <div className="absolute top-[27px] left-[1.5px] w-[320px] h-[400px] rounded-[28px] z-10">
                                        <img
                                            src={doc05}
                                            alt="doctor head"
                                            className="w-[320px] h-[400px] object-cover [clip-path:inset(0_0_calc(100%_-_100px)_0)]"
                                        />
                                    </div>
                                    <div className="absolute w-full max-w-[778px] min-h-[340px] left-0 top-[48.35px] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#35BDFF_38.13%,#008CD0_100%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden border-2 border-[#95DDFF]">
                                        <img src={doc05} alt="doctor" className="absolute -top-[23px] -left-0 w-[320px] h-[400px] object-cover rounded-[28px]" />

                                        {/* details */}
                                        <aside className="absolute right-[40px] top-[40px] flex flex-col gap-4">
                                            <h2 className="w-[388px] h-[40px] font-manrope font-extrabold text-[24px] leading-[40px] text-[#EFF9FF]">Dr. Mark Lee (Dermatologist )</h2>
                                            <p className="w-[388px] h-[144px] font-manrope font-semibold text-base leading-[24px] text-white">Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.</p>
                                            <div className="w-[246px] h-[56px] bg-[#EFF9FF] rounded-[12px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] gap-[12px] flex items-center justify-center">
                                                <a className="font-manrope font-semibold text-[16px] leading-[24px] bg-[linear-gradient(98.64deg,#007DAA_6.59%,#15B2FF_72.16%)] bg-clip-text text-transparent">Book appointment</a>
                                                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="-481.53%" stopColor="#007DAA" />
                                                            <stop offset="-134.2%" stopColor="#15B2FF" />
                                                        </linearGradient>
                                                    </defs>
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="url(#phoneGradient)" />
                                                </svg>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
                            <img
                                src={deco01}
                                alt="decorative element"
                                className="absolute left-[-390px] top-[200px] w-[116px] h-[59px]"
                            />
                            <img
                                src={deco01}
                                alt="decorative element"
                                className="absolute right-[-390px] top-[850px] w-[116px] h-[59px]"
                            />
                        </div>
                    </div>
                </article>
            </section>
        </section>

    );
};

export default PeopleSection;