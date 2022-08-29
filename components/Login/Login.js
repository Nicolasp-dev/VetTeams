// Next Features
import Image from "next/image";
import Link from "next/link";
// Third Party Library
import { IoHomeSharp } from "react-icons/io5";
// Components
import LoginForm from "./LoginForm";
// Assets
import LoginBg from "../../public/assets/images/LoginBg.webp";
import { useAuth } from "../../contexts/AuthCtx";
// ----------------------------------------------------------------------

const Login = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <section className="h-[100vh] w-[100vw] overflow-hidden flex font-inter">
      <Link href="/">
        <button className="absolute right-5 top-5 sm:top-10 sm:right-10 text-white z-50 cursor-pointer flex gap-2 hover:border-b-[1px]">
          <p className="text-lg font-light">Home</p>
          <IoHomeSharp className="text-sm md:text-2xl" />
        </button>
      </Link>
      {/* Bg__Image */}
      <div className="z-10 relative w-[100%] md:w-[65%] h-full flex justify-center items-center min-h-[40rem]">
        <div className="relative top-0 left-0 w-full h-full z-10 bg-[#0000005b] "></div>
        <Image
          src={LoginBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="Veterinary office"
        />
      </div>

      {/* Login__Container  */}
      <div className="absolute top-0 right-0 w-full sm:w-[45%] xl:w-[35%] h-full bg-gradient-to-t from-dark-green to-mid-green md:flex justify-center items-center z-10">
        <div className=" h-[80%] flex justify-center ">
          <div className="p-10 h-full mt-12 relative">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
