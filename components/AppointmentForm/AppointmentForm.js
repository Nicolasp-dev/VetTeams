
// Assets
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmergency } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
// Components
import ContactItem from "./ContactItem";
import Form from "./Form";
import Navigation from "../Layout/Navigation";

const AppointmentForm = () => {
 
  return (
    <>
      <Navigation />
      <section className=" lg:grid grid-cols-12  lg:grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter  w-full gap-5">
        {/* FORM */}
        <div className="lg:col-start-3 lg:col-end-9 lg:row-start-2 flex ">
          <Form />
        </div>

        {/* QUICK CONTACT  */}
        <div className="flex lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-span-full  justify-center items-start p-10  bg-dark-green ">
          <div className=" flex flex-col justify-center w-[65%] gap-4 lg:gap-9 items-center mt-10">
            <h1 className="text-white text-xl sm:text-3xl font-semibold">
              Quick Contact
            </h1>
            <ul className="text-white flex flex-col lg:gap-5 2xl:w-[60%]">
              <ContactItem>
                <BsTelephone size={20} />
                <p>+57 (000) 000-000</p>
              </ContactItem>
              <ContactItem>
                <MdOutlineEmergency size={22} />
                <p>Contact Vet-Teams</p>
              </ContactItem>
              <ContactItem>
                <Ri24HoursFill size={22} />
                <p>Open 24/7</p>
              </ContactItem>
              <ContactItem>
                <TiLocation size={25} />
                <p>Some address - 123</p>
              </ContactItem>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;
