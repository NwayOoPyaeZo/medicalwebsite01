const AboutSection = () => {
    return (
        <section className="w-full py-20 flex justify-center px-4 lg:px-0">
            <div className="w-full max-w-full lg:w-291.5 lg:h-138 mx-auto border-2 border-[#95DDFF] rounded-[28px] flex flex-col items-center justify-center gap-8 p-6 sm:p-8">
                {/* image for <=1024px */}
                <img
                    src="/src/assets/images/doc/doc02.svg"
                    alt="Doctor"
                    className="relative top-5 w-full max-w-full md:max-w-[600px] lg:hidden"
                />

                {/* heading */}
                <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[32px] leading-10 text-center">
                    <span className="bg-linear-to-r from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">
                        HealNet's Story:
                    </span>{' '}
                    Get to know us
                </h2>

                {/* desktop layout */}
                <div className="hidden lg:flex flex-row gap-6 items-start">
                    <img
                        src="/src/assets/images/doc/doc02.svg"
                        alt="Doctor"
                        className="lg:w-md lg:h-86"
                    />
                    <div className="flex flex-col gap-4">
                        <p className="w-133.5 h-60 font-['Manrope'] font-semibold text-base leading-6 text-[#6D6D6D]">
                            HealNet is more than just an online medical service; it's a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that's just a click away.
                        </p>
                        <a className="relative flex items-center justify-center px-9 py-4.5 gap-2 w-77.25 h-15 bg-[#00A4F4] shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] rounded-xl font-['Manrope'] font-bold text-2xl text-white">
                            Learn more about us
                        </a>
                    </div>
                </div>

                {/* tablet + mobile text */}
                <div className="relative bottom-2 flex flex-col gap-5 items-center lg:hidden">
                    <p
                        className="font-['Manrope'] font-semibold text-sm sm:text-base leading-6 text-[#6D6D6D] max-w-[650px] md:max-w-[800px] text-justify">
                        HealNet is more than just an online medical service; it's a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that's just a click away.
                    </p>

                    <a
                        className="relative flex items-center justify-center px-12 py-5 gap-2 w-full max-w-[320px] h-20 bg-[#00A4F4] shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] rounded-xl font-['Manrope'] font-bold text-xl sm:text-2xl text-white text-center">
                        Learn more about us
                    </a>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection