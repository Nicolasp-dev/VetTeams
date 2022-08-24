import React from "react";

const ContactItem = ({ children }) => {
  return (
    <li className="flex gap-5 md:flex-col md:items-start lg:flex-row items-center mb-3 text-sm sm:text-lg">
      {children}
    </li>
  );
};

export default ContactItem;
