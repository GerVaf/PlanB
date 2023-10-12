import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { HiMiniHome } from "react-icons/hi2";

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleShowNav = () => {
    const scrollTop = window.scrollY;
    if (lastScroll !== scrollTop) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setLastScroll(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowNav);

    return () => {
      window.removeEventListener("scroll", handleShowNav);
    };
  }, []);

  return (
    <div
      className={` sticky z-50 h-20 ${
        showNav ? "bg-white/30 backdrop-blur-md  top-5 border" : "top-0 "
      } flex rounded-lg justify-between items-center px-20 transition-all ease-out`}
    >
      {/* left side */}
      <div className="flex gap-3 items-center text-lg text-gray-400">
        <HiMiniHome />
        <p>{location?.pathname?.split("/").join(" / ")}</p>
      </div>
      {/* right side */}
      <div className="flex items-center text-gray-600 text-xl gap-5">
        <div className="flex gap-3 items-center">
          <BsPersonCircle />
          <p className="text-base">Thant Zin</p>
        </div>
        <Link to={'/setting'}>
          <AiFillSetting />
        </Link>
        <AiOutlineBell />
      </div>
    </div>
  );
};

export default Header;
