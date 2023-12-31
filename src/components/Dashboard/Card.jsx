import React from "react";
import { HiVideoCamera } from "react-icons/hi";
const Card = ({ data, title,icon }) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl shadow-lg px-3 py-2">
      {/* Left Text and Number */}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-slate-900/80">{title}</h1>
        <p className="text-2xl font-bold text-[#344767]">{data}</p>
      </div>
      {/* Right Icon */}
      <div
        className={
          "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white text-xl p-3 rounded-lg shadow-lg"
        }
      >
        {icon}
      </div>
    </div>
  );
};

export default Card;
