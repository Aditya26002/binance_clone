import React from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Image from "next/image";
import Logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className=" hover:cursor-pointer">
          <Image src={Logo} width={120} height={120} alt="" />
        </div>
        <LeftNav />
      </div>
      {/* RIGHT SIDE */}
      <RightNav />
    </nav>
  );
};

export default Navbar;
