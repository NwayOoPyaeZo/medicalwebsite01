const ContactUs = () => {
    return (
        <section className="w-full py-20 w-full h-100">
            <article className="relative  h-50 flex flex-col items-center justify-center">
                <h2 className="max-w-[620px] text-center text-[40px] leading-[52px] font-bold text-slate-900">Reach our <span className="bg-[linear-gradient(98.67deg,_#0179B4_40.47%,_#88D8FF_61.43%)] bg-clip-text text-transparent">Help Desk</span> for support</h2>
                <p className="relative top-10 max-w-[438px] text-center text-[16px] leading-[24px] font-semibold text-[#B0B0B0]">
                    Questions? Need assistance? Our dedicated support team is here to help you every step of the way:
                </p>
            </article>

            <div className="relative w-full h-100 flex justify-center">
                <form className="relative top-10 left-0 w-[853px] h-[64px] flex justify-evenly gap-10">
                    <label className="flex w-[298px] h-[64px] items-center gap-0 rounded-[12px] border-2 border-[#32BDFF] px-[12px] py-[18px] bg-white">
                        <img src="src/assets/elements/person.svg" alt="person" className="relative left-5 h-5 w-5 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className=" relative -left-5 w-full bg-transparent font-semibold text-[16px] leading-[24px] text-[#B0B0B0] placeholder:text-[#B0B0B0] text-center outline-none ml-[-4px]"
                        />
                    </label>
                    <label className="flex w-[298px] h-[64px] items-center gap-0 rounded-[12px] border-2 border-[#32BDFF] px-[12px] py-[18px] bg-white">
                        <img src="src/assets/elements/email.svg" alt="email" className="relative left-5 h-5 w-5 flex-shrink-0" />
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="relative -left-1 w-full bg-transparent font-semibold text-[16px] leading-[24px] text-[#B0B0B0] placeholder:text-[#B0B0B0] text-center outline-none ml-[-4px]"
                        />
                    </label>
                    <button className="w-[205px] h-[64px] rounded-[12px] bg-[#00A4F4] px-[24px] py-[20px] gap-[8px] flex items-center justify-center shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] text-[24px] font-bold leading-[24px] text-[#FFFFFF]">Contact us<img src="src/assets/elements/rightArrow.svg" alt="arrow" className="h-5 w-5" /></button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;