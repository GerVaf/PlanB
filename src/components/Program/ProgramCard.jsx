import Atropos from "atropos/react";
import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdSportsVolleyball } from "react-icons/md";

const ProgramCard = () => {
  return (
    <Atropos
      activeOffset={40}
      shadow={true}
      shadowScale={1.05}
      rotate={true}
      onEnter={() => console.log("Enter")}
      onLeave={() => console.log("Leave")}
      onRotate={(x, y) => console.log("Rotate", x, y)}
    >
      <div
        data-atropos-offset="-3"
        className=" flex flex-col bg-white rounded-lg shadow-lg p-5"
      >
        <div data-atropos-offset="3" className="flex gap-10">
          {/* cate icon */}
          <div
            data-atropos-offset="3"
            className=" w-28 h-28 rounded-lg bg-black flex items-center justify-center text-4xl text-white"
          >
            <BsMusicNoteBeamed />
          </div>
          {/* information */}
          <div data-atropos-offset="3" className="flex flex-col gap-3">
            <h1 data-atropos-offset="3" className="text-xl font-bold">
              Program title
            </h1>
            <p data-atropos-offset="3" className="text-base">
              Blog List : 4
            </p>
            <button data-atropos-offset="3" className="text-base text-start rounded-lg py-1 text-red-500 font-bold">
              Delete
            </button>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default ProgramCard;
