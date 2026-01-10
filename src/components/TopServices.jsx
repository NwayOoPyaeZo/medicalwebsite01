import consultIcon from "../assets/elements/services/consult.svg";
import appointmentIcon from "../assets/elements/services/appointment.svg";
import prescriptionIcon from "../assets/elements/services/prescription.svg";
import medRefillIcon from "../assets/elements/services/medRefill.svg";
import medNoteIcon from "../assets/elements/services/medNote.svg";
import curveLineIcon from "../assets/elements/services/curveLine.svg";

const TopServices = () => {
  return (
    <section className="w-full relative min-h-250 bg-amber-50">
      <div className="w-full mx-auto h-80">
        <h2 className="absolute left-1/2 top-25 transform -translate-x-1/2 w-101.5 h-13 font-manrope font-bold text-[40px] text-center leading-13 text-[#3D3D3D]" >
          Top <span className="bg-linear-to-r from-[#88D8FF] to-[#0179B4] bg-clip-text text-transparent">services</span> we offer
        </h2>
        <p className="absolute top-50 left-1/2 transform -translate-x-1/2 w-204 h-12 px-4 font-manrope font-semibold text-[16px] leading-6 text-center text-[#B0B0B0]" >In today's fast-paced world, your health deserves the utmost attention and convenience. That's why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:</p>
      </div>


      {/* card grid */}
      <div className="flex justify-center py-8">
        <div className="w-[977px] h-[580px] grid grid-cols-3 rounded-3xl drop-shadow">

          {/* Card 1: Online Consultations */}
          <div
            className="relative w-[567px] h-[280px] -left-[2.2px] -top-[1.5px] rounded-3xl bg-white overflow-hidden border-2 border-[#B3E5FC] col-span-2 drop-shadow"
          >
            <div className="relative left-10 top-10 w-[44px] h-[44px] bg-[#EFF9FF] rounded-[8px] flex items-center justify-center mb-[16px]">
              <img
                src={consultIcon}
                alt="Online Consultations"
                className="w-[28px] h-[25px]"
              />
            </div>

            <h3 className="relative left-10 top-15 font-manrope font-bold text-lg text-[#0069AB] mb-3">
              Online Consultations
            </h3>

            <p className="relative left-10 top-17 max-w-[446px] font-manrope font-semibold text-[14px] leading-[24px] text-[#6D6D6D]">
              Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.
            </p>
          </div>

          {/* Card 2: Booking Appointments */}
          <div className="relative bg-white w-[370px] h-[280px] -top-[1.5px] -left-[43.5px] rounded-3xl overflow-hidden border-2 border-[#B3E5FC] drop-shadow">
            <div className="relative top-10 left-15 w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <img
                src={appointmentIcon}
                alt="Booking Appointments"
                className="w-6 h-6"
              />
            </div>
            <h3 className="relative left-15 top-15 font-manrope font-bold text-lg text-[#0069AB] mb-3">Booking Appointments</h3>
            <p className="relative left-15 top-17 w-[256px] h-[96px] font-manrope font-semibold text-[14px] text-[#6D6D6D] leading-[24px]">
              Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.
            </p>
          </div>

          {/* Card 3: Prescriptions */}
          <div className="relative w-[299px] h-[260px] top-[19.7px] -left-[2.2px] bg-white rounded-3xl p-6 overflow-hidden border-2 border-[#B3E5FC] drop-shadow">
            <div className="relative top-10 left-10 w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <img
                src={prescriptionIcon}
                alt="Prescriptions"
                className="w-5 h-6"
              />
            </div>
            <h3 className="relative left-10 top-10 font-manrope font-bold text-lg text-[#0069AB] mb-3">Prescriptions</h3>
            <p className="relative left-10 top-12 w-[219px] font-manrope font-semibold text-[14px] text-[#6D6D6D] leading-[24px]">
              Receive and renew prescriptions digitally after your consultation with our specialists.
            </p>
          </div>

          {/* Card 4: Medicine Refills */}
          <div className="relative w-[299px] h-[260px] top-[19.7px] left-3 bg-white rounded-3xl p-6 overflow-hidden border-2 border-[#B3E5FC] drop-shadow">
            <div className="relative left-10 top-10 w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <img
                src={medRefillIcon}
                alt="Medicine Refills"
                className="w-5 h-6"
              />
            </div>
            <h3 className="relative left-10 top-10 font-manrope font-bold text-lg text-[#0069AB] mb-3">Medicine Refills</h3>
            <p className="relative left-10 top-12 w-[219px] h-[72px] font-manrope font-semibold text-[14px] text-[#6D6D6D] leading-[24px]">
              Skip the pharmacy queues and save time + energy by ordering medicine refills online.
            </p>
          </div>

          {/* Card 5: Medical Notes */}
          <div className="relative w-[299px] h-[260px] top-[19.7px] left-[27.7px] bg-white rounded-3xl p-6 overflow-hidden border-2 border-[#B3E5FC] drop-shadow">
            <div className="relative left-10 top-10 w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <img
                src={medNoteIcon}
                alt="Medical Notes"
                className="w-5 h-5"
              />
            </div>
            <h3 className="relative left-10 top-10 font-manrope font-bold text-lg text-[#0069AB] mb-3">Medical Notes</h3>
            <p className="relative left-10 top-12 w-[219px] h-[72px] font-manrope font-semibold text-[14px] text-[#6D6D6D] leading-[24px]">
              Obtain necessary medical notes for work or school with only a few clicks of hassle.
            </p>
          </div>
        </div>
      </div>

      {/* decoration */}
      <img src={curveLineIcon} alt="curve decoration" className="absolute left-32 top-[296px] z-10" />
      <img src={curveLineIcon} alt="curve decoration" className="absolute right-30 bottom-22 scale-x-[-1]" />
    </section >
  );
};

export default TopServices;
