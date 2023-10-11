import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { HiMiniHome } from "react-icons/hi2";

import { useLocation } from "react-router-dom";

const Header = () => {
  const loacation = useLocation();


  return (
    <div className="h-[10vh] sticky top-0 flex justify-between items-center w-full px-20">
      {/* left side  */}
      <div className="flex gap-3 items-center text-lg text-gray-400">
        <HiMiniHome />
        <p className="">{location?.pathname?.split("/").join(" / ")}</p>
      </div>
      {/* right side  */}
      <div className="flex items-center text-gray-600 text-xl gap-5">
        <div className="flex gap-3 items-center">
          <BsPersonCircle />
          <p className="text-base">Thant Zin</p>
        </div>
        <AiFillSetting />
        <AiOutlineBell />
      </div>
    </div>
  );
};

export default Header;
