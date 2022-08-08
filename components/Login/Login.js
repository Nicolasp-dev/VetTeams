// Next Features
import Image from "next/image";
// Components
import LoginForm from "./LoginForm";
// Assets
import LoginBg from "../../public/assets/images/LoginBg.webp";
// ----------------------------------------------------------------------

const Login = () => {
  return (
    <section className="h-[100vh] w-[100vw] overflow-hidden flex">
      {/* Bg__Image */}
      <div className="z-10 relative w-[100%] md:w-[65%] h-full flex justify-center items-center min-h-[40rem]">
        <div className="relative top-0 left-0 w-full h-full z-10 bg-[#0000005b] "></div>
        <Image src={LoginBg} layout="fill" objectFit="cover" />
      </div>

      {/* Login__Container  */}
      <div className="absolute top-0 right-0 w-full sm:w-[45%] xl:w-[35%] h-full bg-gradient-to-t from-dark-green to-mid-green md:flex justify-center items-center z-10">
        <div className=" h-[80%] flex justify-center ">
          <div className="p-10 h-full mt-12 relative">
            <div className="mb-[2.5rem] flex flex-col items-center justify-between h-[7rem] ">
              <h1 className="text-4xl font-bold text-center text-white">
                ¡Welcome Back!
              </h1>
              <p className="text-white mt-5 tracking-widest self-start leading-8 text-lg">
                Login into your account:
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
