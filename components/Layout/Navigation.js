import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// 3rd party libraries
import { IconContext } from "react-icons";
import { FaHome, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { AiFillSchedule, AiOutlinePoweroff } from "react-icons/ai";
import { MdMedicalServices, MdPets } from "react-icons/md";
import { IoMdArrowDroprightCircle } from "react-icons/io";
// Components
import PathCategory from "./PathCategory";

// --------------------------------------------------------------- //

function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileIcon, setShowMobileIcon] = useState(false);

  const showSidebarHandler = () => setShowSidebar(!showSidebar);
  const showMobileMenuHandler = () => setShowMobileIcon(!showMobileIcon);

  const width = showSidebar ? "sm:w-40" : "sm:w-16";

  return (
    <div
      className={`w-full fixed flex justify-between items-center h-[80px] bg-gradient-to-r from-dark-green to-[#0f5e5e] sm:bg-gradient-to-l sm:from-dark-green sm:to-[#0b4a4a] text-white sm:block sm:flex-none sm:h-full ${width} sm:h-screen sm:pt-8  duration-500 z-50`}
    >
      {/* Logo Header */}
      <IconContext.Provider value={{ size: 28 }}>
        <div className="sm:block sm:relative sm:py-4 px-3">
          <IoMdArrowDroprightCircle
            size={40}
            className={`hidden sm:block border-2 border-dark-green rounded-full cursor-pointer absolute right-[-1.2rem] top-[1rem] z-50 bg-mid-green ${
              showSidebar && "rotate-180 duration-1000"
            }`}
            onClick={showSidebarHandler}
          />
        </div>

        {/* Desktop Sidebar Items  */}
        <div className={`mt-[5rem] hidden sm:block`}>
          <PathCategory path="/welcome">
            <FaHome className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Home
            </h2>
          </PathCategory>

          <PathCategory path="/profile">
            <FaUser className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Profile
            </h2>
          </PathCategory>

          <PathCategory path="/users">
            <MdPets className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Pets
            </h2>
          </PathCategory>

          <PathCategory path="/appointments">
            <AiFillSchedule className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Schedule
            </h2>
          </PathCategory>

          <PathCategory path="/services">
            <MdMedicalServices className="relative mt-1 ml-[-0.5rem]" />

            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Services
            </h2>
          </PathCategory>
          <PathCategory path="/">
            <AiOutlinePoweroff className="relative mt-1 ml-[-0.5rem]" />
            <h2
              className={`text-xl left-[2.5rem] top-[-1.8rem] relative origin-left duration-500 ${
                !showSidebar && "scale-0"
              } `}
            >
              Logout
            </h2>
          </PathCategory>
        </div>

        {/* Mobile Hamburger */}
        <div
          onClick={showMobileMenuHandler}
          className="relative mt-2 right-5 sm:hidden z-50 flex items-center"
        >
          {!showMobileIcon ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !showMobileIcon
              ? "hidden"
              : "absolute top-0 left-0 w-full h-[50rem] bg-gradient-to-t from-dark-green to-[#0d5c5c] flex flex-col py-7 items-center"
          }
        >
          {/* Mobile Header */}
          <div className="flex justify-center items-center w-[80%] p-9 border-b-[1px] border-white">
            <h1
              className={`text-4xl font-bold sm:text-4xl sm:left-[6rem] sm:top-[-3.5rem] relative left-[0.5rem] tracking-widest text-center `}
            >
              Vet Teams
            </h1>
          </div>

          {/* Mobile Items */}
          <div className="py-8">
            <div
              className="w-[18rem] text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Home</h2>
              </Link>
            </div>
            <div
              className="w-full text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/profile">
                <h2 className="mx-auto text-2xl">Profile</h2>
              </Link>
            </div>

            <div
              className="w-full text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/profile">
                <h2 className="mx-auto text-2xl">Pets</h2>
              </Link>
            </div>

            <div
              className="w-full text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/appointments">
                <h2 className="text-2xl">Schedule</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/services">
                <h2 className="text-2xl">Services</h2>
              </Link>
            </div>
            <div
              className="w-full  text-center pt-4 hover:border-b-[1px] hover:border-white cursor-pointer  h-[4rem] tracking-wider font-semibold"
              onClick={showMobileMenuHandler}
            >
              <Link href="/">
                <h2 className="text-2xl">Logout</h2>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navigation;
