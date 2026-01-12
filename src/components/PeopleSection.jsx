import dotRoundCircle from "../assets/elements/dotRoundCircle.svg";
import doc04 from "../assets/images/doc/doc04.png";
import deco01 from "../assets/elements/deco01.svg";
import doc05 from "../assets/images/doc/doc05.png";

const PeopleSection = () => {
    return (
        // patient testimonials section
        <section className="relative w-auto h-500">
            <div className="w-auto h-70 flex flex-col items-center justify-center">
                <h2 className="relative -top-5 w-[638px] h-[104px] font-manrope font-bold text-[40px] leading-[52px] text-center">
                    <span className="bg-[linear-gradient(98.7deg,#0179B4_19.22%,#88D8FF_73.07%)] bg-clip-text text-transparent">Patient Testimonials:</span>
                    <br />
                    Hear from Those We've Cared For
                </h2>
                <p className="relative w-[766px] h-[24px] top-5 font-manrope font-semibold text-base leading-6 text-center text-[#B0B0B0]">Discover the difference we make through the voices of those we've served:</p>
            </div>

            <div className="relative flex justify-center gap-[100px] z-10">
                <div className="w-[511px] h-[152px] border-[#4EC6FF] rounded-[20px] border-2 pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[20px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex items-center justify-center">
                    <img className="w-[76px] h-[76px] rounded-[8px]"></img>
                    <p className="w-[335px] h-[96px] font-manrope font-medium text-base leading-6 text-center">"After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                        <br /><span className="font-manrope font-bold text-base leading-6">- Linda A.</span>
                    </p>
                </div>

                <div className="w-[511px] h-[152px] border-[#4EC6FF] rounded-[20px] border-2 pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[20px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex items-center justify-center">
                    <img className="w-[76px] h-[76px] rounded-[8px]"></img>
                    <p className="w-[335px] h-[96px] font-manrope font-medium text-base leading-6 text-center">“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
                        <br /><span className="font-manrope font-bold text-base leading-6">- Henry B.</span>
                    </p>
                </div>
            </div>

            <div className="relative flex justify-center z-10">
                <div className="w-[988px] h-[200px] rounded-[16px] gap-[48px] p-[40px] flex items-center justify-center">
                    <div className="flex w-full items-center justify-evenly gap-[32px]">
                        <div className="flex flex-col items-center">
                            <h2 className="w-[194px] h-[52px] font-manrope font-extrabold text-[48px] leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                10,000+
                            </h2>
                            <p className="w-[190px] h-[24px] font-manrope font-semibold text-[14px] leading-[24px] text-center text-[#6D6D6D]">Successful Consultations</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className="w-[194px] h-[52px] font-manrope font-extrabold text-[48px] leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                2,500+
                            </h2>
                            <p className="w-[190px] h-[24px] font-manrope font-semibold text-[14px] leading-[24px] text-center text-[#6D6D6D]">Healthcare Professionals</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className="w-[194px] h-[52px] font-manrope font-extrabold text-[48px] leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                98%
                            </h2>
                            <p className="w-[190px] h-[24px] font-manrope font-semibold text-[14px] leading-[24px] text-center text-[#6D6D6D]">Patient Satisfaction Rate</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className="w-[194px] h-[52px] font-manrope font-extrabold text-[48px] leading-[52px] text-center bg-[linear-gradient(100.83deg,#0179B4_21%,#88D8FF_93.51%)] bg-clip-text text-transparent">
                                200+
                            </h2>
                            <p className="w-[190px] h-[24px] font-manrope font-semibold text-[14px] leading-[24px] text-center text-[#6D6D6D]">Top Specialists</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center gap-[100px] z-10">
                <div className="w-[511px] h-[152px] border-[#4EC6FF] rounded-[20px] border-2 pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[20px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex items-center justify-center">
                    <img className="w-[76px] h-[76px] rounded-[8px]"></img>
                    <p className="w-[335px] h-[96px] font-manrope font-medium text-base leading-6 text-center">"After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                        <br /><span className="font-manrope font-bold text-base leading-6">- Linda A.</span>
                    </p>
                </div>

                <div className="w-[511px] h-[152px] border-[#4EC6FF] rounded-[20px] border-2 pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[20px] bg-[radial-gradient(192.09%_498.22%_at_0%_12.07%,#EBF8FF_2.36%,#FDFEFF_49.86%)] shadow-[3.12px_9.37px_21.85px_0px_#0000000F] flex items-center justify-center">
                    <img className="w-[76px] h-[76px] rounded-[8px]"></img>
                    <p className="w-[335px] h-[96px] font-manrope font-medium text-base leading-6 text-center">“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”
                        <br /><span className="font-manrope font-bold text-base leading-6">- Henry B.</span>
                    </p>
                </div>
            </div>

            {/* decoration */}
            <img src={dotRoundCircle} alt="dotRoundCircle decoration" className="relative -top-140 left-18 w-[126px] h-[124px]" />
            <img src={dotRoundCircle} alt="dotRoundCircle decoration" className="relative -top-[200px] left-293 w-[126px] h-[124px]" />


            {/* doctors section */}
            <article className="relative -top-40 w-full h-300">
                <div className="w-auto h-70 flex flex-col items-center justify-center">
                    <h2 className="relative -top-5 w-[638px] h-[104px] font-manrope font-bold text-[40px] leading-[52px] text-center">
                        <span className="bg-[linear-gradient(98.7deg,#0179B4_19.22%,#88D8FF_73.07%)] bg-clip-text text-transparent">Masters of Medicine:</span>
                        <br />
                        Meet our team of specialists
                    </h2>
                    <p className="relative w-[740px] h-[48px] top-5 font-manrope font-semibold text-base leading-6 text-center text-[#B0B0B0]">Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:</p>
                </div>


                <div className="relative -top-30 flex flex-col w-auto h-300 justify-center items-center gap-10">
                    <div className="relative w-[778px] h-[400px] z-10">
                        <div className="absolute -top-[12.5px] left-[1.5px] w-[320px] h-[400px] rounded-[28px] z-10">
                            <img
                                src={doc04}
                                alt="doctor head"
                                className="w-[320px] h-[400px] object-cover [clip-path:inset(0_0_calc(100%_-_100px)_0)]"
                            />
                        </div>
                        <div className="absolute w-[778px] h-[340px] left-0 top-[48.35px] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#35BDFF_38.13%,#008CD0_100%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden border-2 border-[#95DDFF]">
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


                    {/* another doctor */}
                    <div className="flex justify-center">
                        <div className="relative w-[778px] h-[400px] z-10">
                            <div className="absolute top-[27px] left-[1.5px] w-[320px] h-[400px] rounded-[28px] z-10">
                                <img
                                    src={doc05}
                                    alt="doctor head"
                                    className="w-[320px] h-[400px] object-cover [clip-path:inset(0_0_calc(100%_-_100px)_0)]"
                                />
                            </div>
                            <div className="absolute w-[778px] h-[340px] left-0 top-[48.35px] bg-[radial-gradient(114.87%_113.36%_at_40.95%_-10.45%,#35BDFF_38.13%,#008CD0_100%)] shadow-[3.12px_9.37px_21.85px_rgba(0,0,0,0.06)] rounded-[28px] overflow-hidden border-2 border-[#95DDFF]">
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
                    {/* decoration */}
                    <img src={deco01} alt="decorative element" className="relative bottom-[780px] -left-[390px] w-[116px] h-[59px] z-0" />
                    <img src={deco01} alt="decorative element" className="relative bottom-[175px] left-[390px] w-[116px] h-[59px]" />
                </div>
            </article>
        </section>

    );
};

export default PeopleSection;