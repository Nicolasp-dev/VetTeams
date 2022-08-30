// Next Feature
import Image from "next/image";
import Link from "next/link";
// Third Party library
import { motion } from "framer-motion";
// Component
import Navigation from "../Layout/Navigation";
// Assets
import WelcomeBg from "../../public/assets/images/WelcomeBg.webp";
// -----------------------------------------------------------------------

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  location.reload();
}

const containerVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

const nextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
        <div className="absolute  top-0 right-0 h-full bg-gradient-to-t from-dark-green to-mid-green w-full sm:w-[45%] xl:w-[35%] md:flex justify-between items-center z-10">
          <motion.div
            className="h-[80%] flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="p-10 h-full mt-[10rem] md:mt-12 relative">
              <div className="mb-[7.5rem] flex flex-col items-center justify-between h-[7rem] ">
                <h1 className="text-2xl sm:text-4xl font-bold text-center text-white ">
                  ¡Welcome Back!
                </h1>
                <p className="text-white mt-5 tracking-widest leading-8 sm:text-lg text-center">
                  We wish you an excellent day
                </p>
                <Link href="/users">
                  <button className="bg-[#166060e4] text-white tracking-widest w-full p-[0.9rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm">
                    EXPLORE USERS
                  </button>
                </Link>
              </div>
              <motion.div variants={nextVariants}>
                <p className="text-white font-light text-center leading-8 tracking-wider">
                  If you have already finished your duties, remember to logout
                  of your account
                </p>
                <button
                  onClick={() => deleteCookie("token")}
                  className="bg-[#166060e4] text-white tracking-widest w-full h-[3rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm"
                  type="submit"
                >
                  LOGOUT
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
