import React from "react";

const DashToDoList = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl">
      {/* Header */}
      <h1 className="font-semibold text-[#344767] text-lg p-5 border-b">
        Todo List
      </h1>

      {/* Lists */}
      <div className="py-2 h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/60 ">
        <div className="my-3 py-3 px-5 border-b grid grid-cols-12 overflow-hidden transition-shadow hover:shadow-sm">
          <div className="col-span-2 h-full flex gap-2 flex-col">
            {/* Author */}
            <p className="font-semibold">Wai Linn Aung</p>
          </div>
          <div className="col-span-6 overflow-hidden">
            {/* Title */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati veniam quia tenetur cumque? Deserunt molestias</p>
          </div>
          <div className="col-span-4">
            <span className="font-bold text-lg">Note: <span>Somthing Missing</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashToDoList;
