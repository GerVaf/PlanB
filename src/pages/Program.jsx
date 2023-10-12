import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgramCard from "../components/Program/ProgramCard";

const Program = () => {
  const [cate, setCate] = useState([
    {
      id: 1,
      title: "All",
      name: "all",
      active: true,
    },
    {
      id: 2,
      title: "Sport",
      name: "sport",
      active: false,
    },
    {
      id: 3,
      title: "Music",
      name: "music",
      active: false,
    },
  ]);

  const handleCategoryClick = (categoryId) => {
    const updatedCategories = cate.map((category) => {
      if (category.id === categoryId) {
        return { ...category, active: true };
      } else {
        return { ...category, active: false };
      }
    });
    setCate(updatedCategories);
  };

  const getActiveDivRight = () => {
    const activeCategory = cate.find((category) => category.active);
    if (activeCategory.title === "All") {
      return 256;
    } else if (activeCategory.title === "Sport") {
      return 128;
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between font-bold">
        <h1 className="text-3xl">Program</h1>
        {/* category chose  */}
        <div className="bg-violet-100 p-1 rounded-2xl">
          <div className="flex relative">
            {cate.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`bg-violet-100 w-32 px-10 py-1 cursor-pointer`}
                  onClick={() => handleCategoryClick(el.id)}
                >
                  <p className="relative z-20 text-center">{el.title}</p>
                </div>
              );
            })}
            {/* active div with dynamic right property and animation */}
            <motion.div
              className="z-10 absolute w-32 h-full rounded-xl bg-white"
              initial={{ right: getActiveDivRight() }}
              animate={{ right: getActiveDivRight() }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div className=" col-span-1">
          <ProgramCard />
        </div>
      </div>
    </div>
  );
};

export default Program;
