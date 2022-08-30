import React from "react";
// Next Features
import Image from "next/image";
import Link from "next/link";
// Third Party library
import { motion } from "framer-motion";
// Assets
import DesktopBg from "../../public/assets/images/DesktopBg.webp";
import MobileBg from "../../public/assets/images/MobileBg.webp";
// ------------------------------------------------------------------------------

const bannerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, when: "beforeChildren" },
  },
};

const childContainerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  return (
    <section className="col-start-1 col-end-13 row-start-1 row-end-3 flex justify-center relative font-inter">
      {/* Setting__Background */}
      <div className="hidden md:block">
        <Image
          src={DesktopBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="Happy-Dog Background"
        />
      </div>
      <div className="md:hidden">
        <Image
          src={MobileBg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="Cat Background"
        />
      </div>

      {/* Banner__Container */}
      <motion.div
        variants={bannerContainerVariant}
        initial="hidden"
        animate="visible"
        className="absolute mt-5 w-[80%] h-[15rem] md:h-[20rem] xl:h-[25rem] xl:mt-5 flex flex-col justify-evenly items-center md:items-start md:mt-[8rem] 2xl:mt-[5rem]"
      >
        <h1 className="text-2xl text-white font-bold text-center sm:text-4xl md:text-left w-[90%] md:tracking-wider xl:text-5xl 2xl:text-[3.2rem] 2xl:leading-[1.1]">
          WELCOME TO TEAMS <br />
          <span className="block md:mt-2">VETERINARY CLINIC</span>
        </h1>
        {/* Paragraph__Container */}
        <motion.div
          variants={childContainerVariant}
          className="text-center md:text-left text-white 2xl:mt-10"
        >
          <p className="w-[15em] md:w-[25rem] xl:w-[35rem] sm:text-lg md:text-xl md:font-light xl:text-2xl 2xl:text-3xl 2xl:leading-relaxed 2xl:w-[45rem]">
            Because they are also part of the family, we take care of them
          </p>
        </motion.div>
        {/* Action__Buttons */}
        <motion.div
          variants={childContainerVariant}
          className="flex gap-5 2xl:mt-10"
        >
          <Link href="/welcome">
            <button className=" bg-dark-green text-white tracking-wider w-[6rem] h-[2rem] rounded-md hover:scale-110 duration-300 text-xs sm:w-[7rem] sm:h-[2.5rem] xl:w-[10rem] xl:h-[3rem] xl:text-lg 2xl:w-[15rem] 2xl:h-[3.2rem] 2xl:text-xl ">
              Explore
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
