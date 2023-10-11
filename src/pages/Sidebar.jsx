import React, { useState } from "react";
import { BiSolidNotepad, BiSolidContact } from "react-icons/bi";
import { HiMiniHome } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { FaClipboardList } from "react-icons/fa";
import { BsCameraReelsFill, BsFillPatchExclamationFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxDash } from "react-icons/rx";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(1);

  const mainMenu = [
    {
      id: 1,
      name: "Menu",
      icon: <HiMiniHome />,
    },
    {
      id: 2,
      name: "List",
      icon: <BiSolidNotepad />,
      child: [
        {
          id: 1,
          name: "Pending",
        },
        {
          id: 2,
          name: "List",
        },
        {
          id: 3,
          name: "My Blogs",
        },
      ],
    },
    {
      id: 3,
      name: "Menu",
      icon: <BsCameraReelsFill />,
    },
  ];

  const toggleActive = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Sidebar menu */}
      <div className="w-[90%] mt-20 flex flex-col gap-8">
        {mainMenu.map((el) => {
          return (
            <div
              key={el.id}
              onClick={() => toggleActive(el.id)}
              className={`${
                activeItem === el.id ? "bg-white shadow-lg " : ""
              } py-3 rounded-lg cursor-pointer text-gray-500 flex justify-between px-10 items-center`}
            >
              <div className="flex gap-5 items-center">
                <div
                  className={`${
                    activeItem === el.id
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg "
                      : ""
                  } text-md p-3 rounded-lg shadow-lg`}
                >
                  {el.icon}
                </div>
                <p>{el.name}</p>
              </div>
              {el.child ? <MdOutlineKeyboardArrowDown /> : <RxDash />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
