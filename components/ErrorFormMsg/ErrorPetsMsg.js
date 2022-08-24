import React from "react";

const ErrorPetsMsg = ({ errorMessage }) => {
  return (
    <p className="text-dark-green text-xs mt-1 pl-3 tracking-widest">
      {errorMessage}
    </p>
  );
};

export default ErrorPetsMsg;
