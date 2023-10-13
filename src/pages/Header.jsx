import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { HiMiniHome } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const nav = useNavigate()
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
      } flex rounded-lg justify-between items-center px-10 transition-all ease-out`}
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
        <Link to={"/setting"}>
          <AiFillSetting />
        </Link>
        <AiOutlineBell />
        <button onClick={()=>nav('create')} className="cursor-pointer group flex justify-center items-center gap-3 px-5 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl text-white text-base font-bold shadow-lg transition-all hover:shadow hover:to-cyan-400">
          <BsPencilSquare className="text-xl group-hover:animate-bounce"/>
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default Header;
