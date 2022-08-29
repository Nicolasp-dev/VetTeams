import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center font-inter">
      <div className="h-[80%] flex flex-col justify-around">
        <div>
          <p className="text-[7em] md:text-[15rem] text-center text-[#565656] font-semibold">
            404
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl  md:text-4xl text-center font-bold text-[#565656]">
            Uh oh we have a problem{" "}
          </h1>
          <Link href="/welcome">
            <button className="bg-[#154D4D] text-white py-3 px-6 rounded-md tracking-widest hover:bg-[#217a7a]  w-[12rem] sm:w-[16rem] sm:py-4 text-sm sm:text-md">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
