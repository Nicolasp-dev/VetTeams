// Components
import FooterIconsUi from "../UI/FooterIconsUi";
// Third Party Library ( Icons )
//prettier-ignore
import { BsFillTelephoneFill, BsFillClockFill,  BsShieldFillCheck} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoPawSharp, IoLocationSharp } from "react-icons/io5";
// -------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    <footer className="relative bottom-[-6rem] col-start-1 col-end-13 md:mt-[15rem] lg:mt-10 row-start-7 font-inter mt-12">
      <div className="bg-mid-green flex flex-wrap md:grid md:grid-cols-11 text-white px-2 py-[3rem] gap-5 ">
        {/* Contact__&__Location__Container */}
        <div className="col-start-2 col-end-5 px-5 mt-2 ">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Contact & Location
          </h3>
          <div className="flex flex-col gap-5">
            <FooterIconsUi text="321-275-6540">
              <BsFillTelephoneFill />
            </FooterIconsUi>
            <FooterIconsUi text="info@vetTeams.com">
              <MdEmail />
            </FooterIconsUi>
            <FooterIconsUi text="Street Avenue 123">
              <IoLocationSharp />
            </FooterIconsUi>
          </div>
        </div>
        {/* Schedule__Container */}
        <div className="col-start-5 col-end-8  px-5 mt-2">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Schedule
          </h3>
          <div className="flex flex-col gap-5">
            <FooterIconsUi text="Mon - Sun 24 hrs">
              <BsFillClockFill />
            </FooterIconsUi>
            <FooterIconsUi text="Open on Holidays">
              <BsShieldFillCheck />
            </FooterIconsUi>
          </div>
        </div>
        {/* Services__Container */}
        <div className="col-start-8 col-end-11  px-5 mt-2">
          <h3 className="text-xl font-semibold tracking-wider mb-3 2xl:text-4xl 2xl:my-10">
            Services
          </h3>
          <div className="flex flex-col gap-5">
            <FooterIconsUi text="General consultation">
              <IoPawSharp />
            </FooterIconsUi>
            <FooterIconsUi text="Specialized consultation">
              <IoPawSharp />
            </FooterIconsUi>
            <FooterIconsUi text="Ultrasound">
              <IoPawSharp />
            </FooterIconsUi>
            <FooterIconsUi text="X-Ray">
              <IoPawSharp />
            </FooterIconsUi>
            <FooterIconsUi text="Laboratory">
              <IoPawSharp />
            </FooterIconsUi>
            <FooterIconsUi text="Surgery">
              <IoPawSharp />
            </FooterIconsUi>
          </div>
        </div>
      </div>
      {/* Copyright__Container */}
      <div className="bg-dark-green h-[4.5rem] flex justify-center items-center text-white tracking-wider text-sm 2xl:text-xl font-light">
        <p>© 2022, Top Gun Lab project, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
