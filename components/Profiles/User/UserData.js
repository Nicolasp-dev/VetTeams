// Next Features
import Image from "next/image";
// Third Party Library
import { AiFillEdit } from "react-icons/ai";
import { IoPawSharp } from "react-icons/io5";
// Assets
import WomanPhoto from "../../../public/assets/images/WomanPhoto.avif";
import ManPhoto from "../../../public/assets/images/MenPhoto.avif";
// ------------------------------------------------------------

const UserData = ({ user, toggleModal }) => {
  const photo = user?.gender === "Female" ? WomanPhoto : ManPhoto;
  return (
    <div className=" sm:h-[20rem] flex mx-5 sm:w-full sm:gap-5 ">
      {/* USER__IMAGE */}
      <div className="hidden sm:block w-[30%] h-full bg-slate-200 rounded-md relative overflow-hidden mr-5 drop-shadow-2xl  ">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          placeholder="blur"
          alt="Profile user photo"
        />
      </div>
      {/* USER__DETAILS */}
      <div className="w-full sm:w-[70%] flex flex-col gap-5 z-10">
        <div className="flex justify-between ">
          <h1 className="font-bold text-xl sm:text-4xl xl:text-[3rem] text-primary-text drop-shadow-lg shadow-black">
            {user?.name} {user?.lastName}
          </h1>
          <div className="flex gap-5">
            <div
              className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold text-xs sm:text-md xl:text-lg "
              onClick={toggleModal}
            >
              Add
              <IoPawSharp className="text-xl hover:scale-[1.1]" />
            </div>
            <div
              className="flex gap-2 cursor-pointer text-primary-text  items-center hover:border-b-[1px] hover:border-dark-green hover:scale-[1.1] duration-300 hover:font-semibold text-xs sm:text-md xl:text-lg "
              onClick={toggleModal}
            >
              Edit
              <AiFillEdit className="text-xl hover:scale-[1.1]" />
            </div>
          </div>
        </div>

        <div className="w-full h-[10rem] flex flex-col gap-1 justify-between text-2xl text-primary-text tracking-wide lg:mt-4">
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-1 drop-shadow-xl ">Document:</p>
            <p>{user?.document}</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">E-mail: </p>
            <p>{user?.email}</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Phone:</p>
            <p>{user?.phone}</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text-xl justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Age:</p>
            <p>{user?.age} years</p>
          </div>
          <div className="flex text-sm sm:text-lg lg:text- justify-between border-b-[1px] border-dark-green xl:text-2xl xl:font-light drop-shadow-lg shadow-black">
            <p className="font-semibold pb-2">Address:</p>
            <p>{user?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
