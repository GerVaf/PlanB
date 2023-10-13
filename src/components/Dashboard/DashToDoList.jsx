import React, { useEffect, useState } from "react";
import { get } from "../../Global/api";

const DashToDoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`/blogs?pending=true`);
        // console.log(response);
        setData(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-xl">
      {/* Header */}
      <h1 className="font-semibold text-[#344767] text-lg p-5 border-b">
        Todo List
      </h1>

      {/* Lists */}
      <div className="py-2 h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700/60 ">
        {data?.map((el) => {
          return (
            <div
              key={el?.id}
              className="my-3 py-3 px-5 border-b grid grid-cols-12 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <div className="col-span-2 h-full flex gap-2 flex-col">
                {/* Author */}
                <p className="font-semibold">{el?.author}</p>
              </div>
              <div className="col-span-6 overflow-hidden">
                {/* Title */}
                <p>{el?.title}</p>
              </div>
              {/* note  */}
              <div className="col-span-4">
                <span className="font-semibold text-lg">
                  {el?.todo.length === 0
                    ? "There's no note."
                    : el?.todo?.map((toDo) => {
                        return <span key={toDo}> {toDo} ,</span>;
                      })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashToDoList;
