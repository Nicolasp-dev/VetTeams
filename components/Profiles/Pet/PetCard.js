// React Features
import { useContext } from "react";
import { GeneralContext } from "../../../contexts/GeneralContext";
// Next Feature
import Link from "next/link";
import Image from "next/image";
// Third Party Library
import { AiFillDelete } from "react-icons/ai";
import { RiFolderOpenFill } from "react-icons/ri";
// Assets
import BgPetCard from "../../../public/assets/images/BgPetCard.webp";

// ------------------------------------------------------------------

const PetCard = ({ pet }) => {
  const { petsCtx } = useContext(GeneralContext);
  const { deletePetHandler } = petsCtx;

  return (
    <ul className="border-[0.5px] bg-gradient-to-t from-white p-5 drop-shadow-2xl cursor-pointer w-[16rem] h-[13.5rem] lg:w-[17rem] lg:h-[16.5rem] border-dark-green rounded-md relative overflow-hidden px-5 py-2 hover:translate-y-[-10px] duration-300 ">
      <Image
        src={BgPetCard}
        layout="fill"
        objectFit="contain"
        objectPosition="top"
      />

      <div className="z-50 relative flex flex-col gap-8 ">
        <div className="flex justify-between items-center mt-1 ">
          <h1 className="text-xl sm:text-2xl xl:text-3xl text-white tracking-wide  font-semibold drop-shadow-lg shadow-black">
            {pet.name}
          </h1>
          <div className="flex gap-2">
            <AiFillDelete
              className="cursor-pointer text-white sm:text-[1.2rem] hover:scale-[1.1] drop-shadow-lg shadow-black "
              onClick={() => deletePetHandler(pet.id, pet.name)}
            />
            <Link href={`/petProfile/${pet.id}`} passHref>
              <RiFolderOpenFill className="cursor-pointer text-white sm:text-[1.2rem] hover:scale-[1.1] drop-shadow-lg shadow-black " />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2 ">
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold drop-shadow-lg shadow-black">
              Species:
            </p>
            <p>{pet.species}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold drop-shadow-lg shadow-black">Gender:</p>
            <p>{pet.gender}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold drop-shadow-lg shadow-black">Weight:</p>
            <p>{pet.weight} Kg</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold drop-shadow-lg shadow-black">Breed:</p>
            <p>{pet.breed}</p>
          </div>
          <div className="text-sm sm:text-md lg:text-lg text-primary-green flex justify-between ">
            <p className="font-semibold drop-shadow-lg shadow-black">
              Birthday:
            </p>
            <p>{pet.birthday}</p>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default PetCard;
