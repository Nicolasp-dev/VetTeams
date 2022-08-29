// Next Features
import Image from "next/image";
import Link from "next/link";
// Third Party Library
import { IoHomeSharp } from "react-icons/io5";
// Components
import RegisterForm from "./RegisterForm";
import AsideLogin from "./AsideLogin";
// Assets
import RegisterBg from "../../public/assets/images/RegisterBg.webp";
// -------------------------------------------------------------------------

const Register = () => {
  return (
    <section className="h-[100vh] w-[100vw] sm:overflow-hidden flex font-inter">
      <Link href="/welcome">
        <button className="absolute right-5 top-5 sm:top-10 sm:right-10 text-white z-50 cursor-pointer flex gap-2 hover:border-b-[1px]">
          <p className="text-lg font-light">Welcome</p>
          <IoHomeSharp className="text-sm md:text-2xl" />
        </button>
      </Link>
      <div className="z-10 relative w-[100%] md:w-[65%] h-full flex justify-center items-center min-h-[40rem]">
        {/* Bg__Image */}
        <div className="relative top-0 left-0 w-full h-full z-10 bg-[#00000035] "></div>
        <Image
          src={RegisterBg}
          layout="fill"
          objectFit="cover"
          alt="background image showing a dog in a large field"
        />
        {/* Form__Container */}
        <div className="w-full h-full absolute bg-[#00000047] backdrop-blur-sm flex flex-col justify-center px-1 z-50 pt-10 sm:w-[70%] sm:h-[80%] sm:rounded-md sm:px-[2rem] md:justify-start">
          <h1 className="text-4xl sm:text-4xl tracking-wider font-bold text-center text-white">
            Create a New Account
          </h1>
          <RegisterForm />
        </div>
      </div>

      {/* --- Login ---  */}
      <AsideLogin />
    </section>
  );
};

export default Register;
