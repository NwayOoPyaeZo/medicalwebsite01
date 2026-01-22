
const ContactUs = () => {
    return (
        <section className="w-full pt-16 pb-28 lg:pt-20 lg:pb-32">
            <article className="relative flex flex-col items-center justify-center px-4">
                <span className="w-full h-5"></span>
                <h2 className="max-w-[620px] text-center text-[28px] leading-[36px] md:text-[32px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] font-bold text-slate-900">
                    Reach our <span className="bg-[linear-gradient(98.67deg,_#0179B4_40.47%,_#88D8FF_61.43%)] bg-clip-text text-transparent">Help Desk</span> for support
                </h2>
                <span className="w-full h-10"></span>
                <p className="mt-6 max-w-[438px] text-center text-sm md:text-base leading-[22px] font-semibold text-[#B0B0B0]">
                    Questions? Need assistance? Our dedicated support team is here to help you every step of the way:
                </p>
                <span className="w-full h-10"></span>
            </article>

            <div className="relative w-full flex justify-center px-4 mt-10">
                <form className="w-full max-w-[853px] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
                    <label className="flex w-full md:w-[298px] h-[64px] items-center justify-center rounded-[12px] border-2 border-[#32BDFF] px-[12px] bg-white">
                        <img src="src/assets/elements/person.svg" alt="person" className="relative lg:left-5 md:left-5 h-5 w-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className="w-full bg-transparent font-semibold text-[16px] text-[#B0B0B0] placeholder:text-[#B0B0B0] outline-none px-3 text-center placeholder:text-center"
                        />
                    </label>
                    <label className="flex w-full md:w-[298px] h-[64px] items-center justify-center rounded-[12px] border-2 border-[#32BDFF] px-[12px] bg-white">
                        <img src="src/assets/elements/email.svg" alt="email" className="relative lg:left-4 md:left-5 h-5 w-5 flex-shrink-0" />
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full bg-transparent font-semibold text-[16px] text-[#B0B0B0] placeholder:text-[#B0B0B0] outline-none px-3 text-center placeholder:text-center"
                        />
                    </label>
                    <button className="w-full md:w-[298px] h-[64px] rounded-[12px] bg-[#00A4F4] px-[24px] py-[20px] flex items-center justify-center gap-2 shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] text-[18px] md:text-[20px] lg:text-[24px] font-bold text-white">
                        Contact us
                        <img src="src/assets/elements/rightArrow.svg" alt="arrow" className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;