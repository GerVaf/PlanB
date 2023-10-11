import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
const DashTrending = () => {
  return (
    <>
      {/* list table modal  */}
      {/* <TrendLatestModal
        opened={opened}
        close={close}
        refresh={refresh}
        setRefresh={setRefresh}
        par
      /> */}
      <div className="bg-white shadow-lg rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="font-semibold text-[#344767] text-lg">
            Trending News
          </h1>
          <div
            className={
              "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white text-xl p-3 rounded-lg shadow-lg"
            }
          >
            <BsFillPlusSquareFill />
          </div>
        </div>

        {/* Lists */}
        <div className="p-2 h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/60 ">
          <div className="my-3 grid grid-cols-12 rounded-md border overflow-hidden relative transition-shadow hover:shadow-lg">
            <div className="col-span-5">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="col-span-7 flex flex-col gap-4 w-full p-3">
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-full py-1 px-5">
                  Music
                </p>
                <div
                  className={
                    "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white p-2 rounded-lg transition-all cursor-pointer hover:text-red-600 hover:from-white hover:shadow-lg"
                  }
                >
                  <FaTrashCan />
                </div>
              </div>
              <div className="h-full flex gap-2 flex-col">
                <p className="text-lg font-medium">Title : Hello World</p>
                <p className="text-base">Author : Wai Linn Aung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashTrending;
