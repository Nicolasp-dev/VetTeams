import React from "react";
import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div className="">
      {/* <Navigation /> */}
      <main className="grid-cols-12 grid-rows-7">{props.children}</main>
    </div>
  );
}

export default Layout;
