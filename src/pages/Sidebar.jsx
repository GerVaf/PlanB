import React, { useState, useEffect } from "react";
import { BiSolidNotepad } from "react-icons/bi";
import { HiMiniHome, HiVideoCamera } from "react-icons/hi2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxDash } from "react-icons/rx";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import logo from "../../public/logotext.svg";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logOut } from "../Global/Slice/AuthSlice";
const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(1);

  const mainMenu = [
    {
      id: 1,
      name: "Menu",
      path: "/",
      icon: <HiMiniHome />,
    },
    {
      id: 2,
      name: "List",
      path: "list",
      icon: <BiSolidNotepad />,
      child: [
        {
          id: 1,
          name: "Pending",
          path: "pending",
        },
        {
          id: 2,
          name: "My Blogs",
          path: "myBlogs",
        },
      ],
    },
    {
      id: 3,
      name: "Program",
      path: "program",
      icon: <HiVideoCamera />,
    },
  ];

  useEffect(() => {
    const matchingItem = mainMenu.find((item) => {
      if (item.path === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith("/" + item.path);
    });
    // console.log(matchingItem)
    if (matchingItem) {
      setActiveItem(matchingItem.id);
    }
  }, [location.pathname, mainMenu]);

  // for logout
  const dispatch = useDispatch();
  const nav = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(logOut(null));
    nav("/login");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 my-10">
      <img className="px-10 h-20 border-b-2 w-full" src={logo} alt="" />
      <div className="w-[90%] flex flex-col gap-8">
        {mainMenu.map((el) => (
          <div key={el.id}>
            <NavLink
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              to={el.path}
              className={`${
                activeItem === el.id ? "bg-white shadow-lg " : ""
              } py-3 rounded-lg cursor-pointer text-gray-500 flex justify-between px-10 items-center`}
            >
              {/* icon and name */}
              <div className="flex gap-5 items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{
                    scale: activeItem === el.id ? 1.1 : 1,
                    backgroundColor: activeItem === el.id ? "cyan" : "white",
                  }}
                  className={`${
                    activeItem === el.id
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white shadow-lg "
                      : "bg-white "
                  } text-md p-3 rounded-lg shadow-lg`}
                >
                  {el.icon}
                </motion.div>
                <p>{el.name}</p>
              </div>

              {/* have child ? */}
              <div>
                {el.child ? (
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: activeItem === el.id ? 180 : 0,
                    }}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </motion.div>
                ) : (
                  <RxDash />
                )}
              </div>
            </NavLink>

            {/* child  */}
            {el.child && activeItem === el.id ? (
              <motion.div
                className="text-gray-600 flex flex-col mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {el?.child?.map((ch) => {
                  return (
                    <motion.div
                      key={ch.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }} // Add exit animation
                    >
                      <NavLink
                        to={el.path + "/" + ch.path}
                        className={`${
                          location.pathname.includes(el.path + "/" + ch.path)
                            ? "text-gray-800 font-bold"
                            : ""
                        } py-3 rounded-lg cursor-pointer text-gray-500 flex justify-between px-10 items-center`}
                      >
                        <div className="flex gap-5 items-center">
                          <motion.div
                            initial={{ scale: 1 }}
                            animate={{
                              scale: location.pathname.includes(
                                el.path + "/" + ch.path
                              )
                                ? 1.1
                                : 1,
                            }}
                            className={` text-md p-3 rounded-lg`}
                          >
                            <BsDot />
                          </motion.div>
                          <p>{ch?.name}</p>
                        </div>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <button onClick={() => logoutHandler()}>logout</button>
    </div>
  );
};

export default Sidebar;
