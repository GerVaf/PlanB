import { Center, Pagination, Select } from "@mantine/core";
import React from "react";
import ListTable from "../components/Table/ListTable";
import { useState } from "react";

const List = () => {
  const [selectValue, setSelectValue] = useState(10);

  return (
    <div>
      {/* Header */}
      <h1 className="font-bold text-3xl text-[#344767]">Blog List</h1>
      <div className="shadow-lg rounded-md border mt-5">
        {/* Filter entries select and Add Button*/}
        <div className="px-3 py-5 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Select */}
            <Select
              className="w-[70px]"
              value={selectValue}
              onChange={setSelectValue}
              data={[
                { value: 5, label: "5" },
                { value: 10, label: "10" },
                { value: 20, label: "20" },
              ]}
              styles={{
                label: { color: "white" },
                input: { ":focus": { borderColor: "#13C4E0" } },
                item: {
                  "&[data-selected]": {
                    "&, &:hover": {
                      backgroundColor: "#13C4E0",
                      color: "white",
                    },
                  },
                },
              }}
            />
            <p className="text-sm font-semibold text-gray-700">
              entries per page
            </p>
          </div>
          <div>
            <button className="p-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl text-white font-bold shadow-lg hover:shadow hover:to-cyan-400">
              Create Program ( 0 )
            </button>
          </div>
        </div>

        {/* Table */}
        <ListTable />

        {/* Pagination */}
        <div className="border-t">
          <Center my={"lg"}>
            <Pagination
              styles={{
                control: {
                  color: "#344767",
                  borderRadius: "100%",

                  "&[data-active]": {
                    borderColor: "white",
                    //   backgroundColor:'#218FFE',
                    backgroundImage: "linear-gradient(#1BCCE8,#0CBCDA)",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  },
                  "&[data-active]&:not([data-disabled]):hover": {
                    backgroundColor: "#3D3F3D70",
                  },
                  "&:not([data-disabled]):hover": {
                    backgroundColor: "#ddd",
                  },
                },
                dots: {
                  color: "black",
                },
              }}
            />
          </Center>
        </div>
      </div>
    </div>
  );
};

export default List;
