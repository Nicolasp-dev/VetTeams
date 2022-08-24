import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PathCategory = (props) => {
  const router = useRouter();

  return (
    <Link href={props.path}>
      <div
        className={
          router.pathname === props.path
            ? `w-full h-[4rem] block relative pl-5 pt-3 border-l-4 border-white font-medium bg-[#7bdbdb9c] cursor-pointer`
            : `block pt-3 hover:bg-[#7bdbdb9c] cursor-pointer pl-6  duration-500 relative h-[4rem]`
        }
      >
        {props.children}
      </div>
    </Link>
  );
};

export default PathCategory;
