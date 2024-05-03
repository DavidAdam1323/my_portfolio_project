import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-[#E4F1FF] font-semibold">
          Logo
        </Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
