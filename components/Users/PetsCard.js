import Image from "next/image";
import petPhoto from "../../public/assets/images/Grumpy404.png";

const PetsCard = ({ pets }) => {
  return (
    <>
      {pets.map((pet, key) => (
        <div
          className="rounded-md flex items-end  hover:scale-[1.05] cursor-pointer duration-300 w-[9rem] h-[10rem] sm:w-[11rem] sm:h-[12rem] overflow-hidden relative"
          key={key}
        >
          <Image src={petPhoto} layout="fill" objectFit="cover" />

          <div className="z-10 w-full h-[60%] bg-gradient-to-b from-[#ffffff00] to-[#030909] justify-center sm:pt-10 px-5 flex flex-col ">
            <h2 className="font-bold text-white text-xl sm:text-2xl tracking-wider drop-shadow-8xl shadow-yellow">
              {pet.name}
            </h2>
            <p className="mt-1 text-yellow-400 sm:text-xl font-bold tracking-wider">
              {pet.owner}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PetsCard;
