import Atropos from "atropos/react";
import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdSportsVolleyball } from "react-icons/md";
import { useSelector } from "react-redux";

const ProgramCard = ({ el }) => {
  const ProgramTable = useSelector((state) => state?.blog?.production_table);
  console.log(ProgramTable);

  return (
    <Atropos activeOffset={40} shadow={true} shadowScale={1.05} rotate={true}>
      <div
        data-atropos-offset="-3"
        className={` ${
          el?.title === ProgramTable?.title ? "bg-black" : "bg-white"
        } flex flex-col  rounded-lg shadow-lg p-5`}
      >
        <div data-atropos-offset="3" className="flex gap-10">
          {/* cate icon */}
          <div
            data-atropos-offset="3"
            className={` w-28 h-28 rounded-lg ${
              el?.title === ProgramTable?.title
                ? "bg-white text-black"
                : "bg-black text-white"
            }  flex items-center justify-center text-4xl `}
          >
            {el?.category === "music" ? (
              <BsMusicNoteBeamed />
            ) : (
              <MdSportsVolleyball />
            )}
          </div>
          {/* information */}
          <div
            data-atropos-offset="3"
            className={`${
              el?.title === ProgramTable?.title ? " text-white" : " text-black"
            } flex flex-col gap-3`}
          >
            <h1 data-atropos-offset="3" className="text-xl font-bold">
              {el?.title}
            </h1>
            <p data-atropos-offset="3" className="text-base">
              Blog List : {el?.blog_count}
            </p>
            <button
              data-atropos-offset="3"
              className="text-base text-start rounded-lg py-1 text-red-500 font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default ProgramCard;
