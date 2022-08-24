// Next Feature
import Link from "next/link";

// ---------------------------

const AsideLogin = () => {
  return (
    <div className="hidden  absolute top-0 right-0 w-[35%] h-full bg-gradient-to-t from-dark-green to-mid-green md:flex justify-center items-center">
      <div className="w-[70%] h-[55%] 2xl:w-[85%] flex flex-col justify-between items-center gap-5">
        <h1 className="text-4xl lg:text-5xl 2xl:text-[3.2rem] text-white font-bold text-center">
          ¡ Hello !
        </h1>
        <p className="text-white tracking-widest text-center lg:text-lg 2xl:text-xl 2xl:leading-[1.8]">
          To access our site, you must first register and create an account with
          us.
        </p>
        <p className="text-white tracking-widest font-light text-center lg:text-lg 2xl:text-lg 2xl:leading-[1.8]">
          If you already have a registered account, <br /> go to the access
          page.
        </p>
        <Link href="/login">
          <button className="text-sm tracking-[2px] bg-transparent text-white w-[10rem] lg:w-[16rem] h-[3rem] rounded-md border-[1px] duration-200 hover:bg-[#2b9d9d] hover:w-[18rem] hover:border-none  2xl:h-[2.8rem] 2xl:text-md">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AsideLogin;
