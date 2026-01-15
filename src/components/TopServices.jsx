import consultIcon from "../assets/elements/services/consult.svg";
import appointmentIcon from "../assets/elements/services/appointment.svg";
import prescriptionIcon from "../assets/elements/services/prescription.svg";
import medRefillIcon from "../assets/elements/services/medRefill.svg";
import medNoteIcon from "../assets/elements/services/medNote.svg";
import curveLineIcon from "../assets/elements/services/curveLine.svg";

const TopServices = () => {
  return (
    <section className="relative -top-10 lg:-top-15 w-full py-12 lg:py-0 lg:min-h-250">

      <div className="relative top-25 lg:top-0 w-full mx-auto h-80">
        <h2
          className="font-manrope font-bold text-[28px] leading-tight text-center text-[#3D3D3D] lg:absolute lg:left-1/2 lg:top-25 lg:-translate-x-1/2 lg:w-101.5 lg:h-13 lg:text-[40px] lg:leading-13">
          Top <span className="bg-linear-to-r from-[#88D8FF] to-[#0179B4] bg-clip-text text-transparent">services</span> we offer
        </h2>

        <p
          className="relative top-5 lg:top-0 mt-4 px-4 font-manrope font-semibold text-[14px] leading-6 text-center text-[#B0B0B0] lg:absolute lg:top-50 lg:left-1/2 lg:-translate-x-1/2 lg:w-204 lg:h-12 lg:text-[16px]"
        >
          In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:</p>
      </div>


      {/* card grid */}
      <div className="relative bottom-5 lg:bottom-0 flex justify-center py-8 mb-10 lg:mb-0">
        <div className="w-full grid grid-cols-1 gap-7 sm:gap-8 px-4 lg:px-0 lg:w-244.25 lg:h-145 lg:grid-cols-3 rounded-3xl drop-shadow">

          {/* Card 1: Online Consultations */}

          <div
            className="w-full min-h-[160px] sm:min-h-[180px] bg-white rounded-3xl border-2 border-[#B3E5FC] drop-shadow p-4 sm:p-6 relative lg:p-0 lg:w-141.75 lg:h-70 lg:overflow-hidden lg:-left-[2.2px] lg:-top-[1.5px] lg:col-span-2"
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:block">
              <div className="flex items-center gap-3 lg:block">
                <img
                  src={consultIcon}
                  alt="Online Consultations"
                  className="w-[30px] h-[30px] lg:relative lg:left-10 lg:top-10"
                />
                <h3 className="font-manrope font-bold text-base sm:text-lg w-full leading-snug text-[#0069AB] lg:mt-3 lg:text-lg lg:relative lg:left-10 lg:top-15 lg:max-w-54.75">
                  Online Consultations
                </h3>
              </div>
              <p className="mt-2 text-sm sm:text-base font-manrope font-semibold text-[#6D6D6D] leading-relaxed w-full lg:relative lg:left-10 lg:top-17 lg:max-w-111.5">
                Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.
              </p>
            </div>
          </div>

          {/* Card 2: Booking Appointments */}

          <div
            className="w-full min-h-[160px] sm:min-h-[180px] bg-white rounded-3xl border-2 border-[#B3E5FC] drop-shadow p-4 sm:p-6 relative lg:p-0 lg:w-92.5 lg:h-70 lg:overflow-hidden lg:-top-[1.5px] lg:-left-[43.5px]"
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:block">
              <div className="flex items-center gap-3 lg:block">
                <img
                  src={appointmentIcon}
                  alt="Booking Appointments"
                  className="w-[30px] h-[30px] lg:relative lg:left-15 lg:top-10"
                />
                <h3 className="font-manrope font-bold text-base sm:text-lg w-full leading-snug text-[#0069AB] lg:mt-3 lg:text-lg lg:relative lg:left-15 lg:top-15 lg:max-w-64">
                  Booking Appointments
                </h3>
              </div>
              <p className="mt-2 text-sm sm:text-base font-manrope font-semibold text-[#6D6D6D] leading-relaxed w-full lg:relative lg:left-15 lg:top-17 lg:max-w-64">
                Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.
              </p>
            </div>
          </div>

          {/* Card 3: Prescriptions */}

          <div
            className="w-full min-h-[160px] sm:min-h-[180px] bg-white rounded-3xl border-2 border-[#B3E5FC] drop-shadow p-4 sm:p-6 relative lg:p-0 lg:w-74.75 lg:h-65 lg:overflow-hidden lg:top-[19.7px] lg:-left-[2.2px]"
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:block">
              <div className="flex items-center gap-3 lg:block">
                <img
                  src={prescriptionIcon}
                  alt="Prescriptions"
                  className="w-[30px] h-[30px] lg:relative lg:left-10 lg:top-10"
                />
                <h3 className="font-manrope font-bold text-base sm:text-lg w-full leading-snug text-[#0069AB] lg:mt-3 lg:text-lg lg:relative lg:left-10 lg:top-10 lg:max-w-54.75">
                  Prescriptions
                </h3>
              </div>
              <p className="mt-2 text-sm sm:text-base font-manrope font-semibold text-[#6D6D6D] leading-relaxed w-full lg:relative lg:left-10 lg:top-12 lg:max-w-54.75">
                Receive and renew prescriptions digitally after your consultation with our specialists.
              </p>
            </div>
          </div>

          {/* Card 4: Medical Notes */}

          <div
            className="w-full min-h-[160px] sm:min-h-[180px] bg-white rounded-3xl border-2 border-[#B3E5FC] drop-shadow p-4 sm:p-6 relative lg:p-0 lg:w-74.75 lg:h-65 lg:overflow-hidden lg:top-[19.7px] lg:left-3"
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:block">
              <div className="flex items-center gap-3 lg:block">
                <img
                  src={medNoteIcon}
                  alt="Medical Notes"
                  className="w-[30px] h-[30px] lg:relative lg:left-10 lg:top-10"
                />
                <h3 className="font-manrope font-bold text-base sm:text-lg w-full leading-snug text-[#0069AB] lg:mt-3 lg:text-lg lg:relative lg:left-10 lg:top-10 lg:max-w-54.75">
                  Medical Notes
                </h3>
              </div>
              <p className="mt-2 text-sm sm:text-base font-manrope font-semibold text-[#6D6D6D] leading-relaxed w-full lg:relative lg:left-10 lg:top-12 lg:max-w-54.75">
                Obtain necessary medical notes for work or school with only a few clicks of hassle.
              </p>
            </div>
          </div>

          {/* Card 5: Medicine Refills */}

          <div
            className="w-full min-h-[160px] sm:min-h-[180px] bg-white rounded-3xl border-2 border-[#B3E5FC] drop-shadow p-4 sm:p-6 relative lg:p-0 lg:w-74.75 lg:h-65 lg:overflow-hidden lg:top-[19.7px] lg:left-[27.7px]"
          >
            <div className="flex flex-col gap-3 sm:gap-4 lg:block">
              <div className="flex items-center gap-3 lg:block">
                <img
                  src={medRefillIcon}
                  alt="Medicine Refills"
                  className="w-[30px] h-[30px] lg:relative lg:left-10 lg:top-10"
                />
                <h3 className="font-manrope font-bold text-base sm:text-lg w-full leading-snug text-[#0069AB] lg:mt-3 lg:text-lg lg:relative lg:left-10 lg:top-10 lg:max-w-54.75">
                  Medicine Refills
                </h3>
              </div>
              <p className="mt-2 text-sm sm:text-base font-manrope font-semibold text-[#6D6D6D] leading-relaxed w-full lg:relative lg:left-10 lg:top-12 lg:max-w-54.75">
                Skip the pharmacy queues and save time + energy by ordering medicine refills online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* decoration – desktop only */}
      <img
        src={curveLineIcon}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-32 top-74 z-10 pointer-events-none"
      />
      <img
        src={curveLineIcon}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute right-30 bottom-22 scale-x-[-1] z-10 pointer-events-none"
      />
    </section >
  );
};

export default TopServices;
