import React from "react";

const InputForm = (props) => {
  return (
    <input
      className="placeholder:text-[#1F6B6B] block bg-white w-full border-2 border-[#1F6B6B] rounded-2xl py-2 pl-9 pr-3  focus:outline-none focus:border-[#1F6B6B] focus:ring-[#1F6B6B] focus:ring-1"
      placeholder={props.placeholder}
      type={props.type}
      register={props.register}
    />
  );
};

export default InputForm;
