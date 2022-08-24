// Next Feature
import Image from "next/image";
// Component
import Navigation from "../Layout/Navigation";
// Assets
import WelcomeBg from "../../public/assets/images/WelcomeBg.webp";
// -----------------------------------------------------------------------

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  location.reload();
}

const Welcome = () => {
  return (
    <>
      <Navigation />
      <section className="h-[100vh] w-[100vw] overflow-hidden flex font-inter">
        <div className="z-10 relative w-[100%] md:w-[65%] h-full flex justify-center items-center min-h-[40rem]">
          <div className="relative top-0 left-0 w-full h-full z-10 bg-[#00000051] "></div>
          <Image
            src={WelcomeBg}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            alt="cat vet clinic"
          />
        </div>

        {/* --- Welcome ---  */}
        <div className="absolute top-0 right-0 w-full sm:w-[45%] xl:w-[35%] h-full bg-gradient-to-t from-dark-green to-mid-green md:flex justify-between items-center z-10">
          <div className=" h-[80%] flex justify-center ">
            <div className="p-10 h-full mt-12 relative">
              <div className="mb-[2.5rem] flex flex-col items-center justify-between h-[7rem] ">
                <h1 className="text-4xl font-bold text-center text-white">
                  ¡Welcome Back!
                </h1>
                <p className="text-white mt-5 tracking-widest leading-8 text-lg text-center">
                  We wish you an excellent day
                </p>
              </div>
              <div>
                <p className="text-white font-light text-center leading-10 tracking-wider">
                  If you have already finished your duties, remember to log out
                  of your account
                </p>
                <button
                  onClick={() => deleteCookie("token")}
                  className="bg-[#166060e4] text-white tracking-widest w-full h-[3rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm"
                  type="submit"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
