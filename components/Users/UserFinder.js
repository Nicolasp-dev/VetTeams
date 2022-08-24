import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { BiSearchAlt2 } from "react-icons/bi";

const UserFinder = () => {
  const { searchValue, searchHandler } = useContext(GeneralContext);

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;

    searchHandler(inputValue);
  };

  return (
    <div className="relative top-[-2rem] mt-6 h-[3.5rem] md:h-[4rem] md:mb-10">
      <BiSearchAlt2 className="relative top-[2.5rem] text-dark-green ml-4 text-2xl md:top-[3rem] md:text-3xl" />

      <input
        className=" w-full pt-4 pb-2 rounded-md border-[2px] border-dark-green pl-12 md:pl-[4rem] focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 placeholder:text-md md:placeholder:text-xl bg-white placeholder:text-secondary-text  md:text-2xl text-primary-text"
        type="search"
        name="search-form"
        id="search-form"
        placeholder="By: Name, Document, Phone, E-mail . . ."
        value={searchValue}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default UserFinder;
