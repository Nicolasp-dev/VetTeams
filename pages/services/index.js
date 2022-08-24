import React from "react";
import HomeServices from "../../components/Home/HomeServices";
import Navigation from "../../components/Layout/Navigation";

const index = () => {
  return (
    <>
      <Navigation />
      <div className="sm:ml-[8rem]">
        <HomeServices />;
      </div>
    </>
  );
};

export default index;
