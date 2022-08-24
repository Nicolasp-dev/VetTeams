import React from "react";

const FooterIconsUi = (props) => {
  return (
    <div className="flex items-center gap-5 font-light tracking-wider text-lg xl:text-xl 2xl:text-2xl 2xl:font-light ">
      {props.children}
      {props.text}
    </div>
  );
};

export default FooterIconsUi;
