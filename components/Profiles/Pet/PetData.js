// Next Features
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
// Third Party Library
import { AiFillEdit } from "react-icons/ai";
import { FaUser, FaFileMedical } from "react-icons/fa";
// Assets
import CatPhoto from "../../../public/assets/images/CatPhoto.webp";
import DogPhoto from "../../../public/assets/images/DogPhoto.webp";
// ------------------------------------------------------------

const PetData = ({ pet, toggleModal }) => {
  const photo = pet?.species === "Feline" ? CatPhoto : DogPhoto;

  return (
    <div className=" h-[20rem] flex mx-5 sm:mx-0 sm:w-full sm:gap-5">
      {/* PET__IMAGE */}
      <div className="hidden sm:block w-[30%] h-full rounded-md relative overflow-hidden mr-5 drop-shadow-2xl">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      {/* PET__DETAILS */}
      <div className="w-full sm:w-[70%] flex flex-col gap-5 z-10">
        <div className="flex justify-between gap-5 ">
          <h1 className="font-bold text-xl sm:text-4xl xl:text-[3rem] text-primary-text drop-shadow-lg shadow-black">
            {pet.name}
          </h1>
          <div className="flex gap-2 sm:gap-8">
            <div
              className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold text-xs sm:text-md xl:text-lg "
              onClick={toggleModal}
            >
              Edit
              <AiFillEdit className="text-xl hover:scale-[1.1]" />
            </div>
            <div
              className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold text-xs sm:text-md xl:text-lg "
              onClick={toggleModal}
            >
              New
              <FaFileMedical className="text-xl hover:scale-[1.1]" />
            </div>
            <div
              onClick={() => Router.back()}
              className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold text-xs sm:text-md xl:text-lg "
            >
              Owner
              <FaUser className="text-xl hover:scale-[1.1]" />
            </div>
          </div>
        </div>

        <div className="w-full h-[10rem] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide lg:mt-4">
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-1 drop-shadow-xl ">Microchip:</p>
            <p>{pet.microchip}</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Breed: </p>
            <p>{pet.breed}</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Weight:</p>
            <p>{pet.weight} Kg</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Age:</p>
            <p>{pet.age} years</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text- justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Status:</p>
            <p>{pet.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetData;
