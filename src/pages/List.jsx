import { Center, Pagination, Select } from "@mantine/core";
import React, { useEffect } from "react";
import ListTable from "../components/Table/ListTable";
import { useState } from "react";
import { get } from "../Global/api";

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // for limit
  const [limit, setLimit] = useState(10);
  // for pagination
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  // console.log(page)
  // console.log(limit)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`/blogs?page=${page}&limit=${limit}`);
        // console.log(response);
        setData(response?.data?.data);
        setPagination(response?.data?.pagination);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page, limit]);

  if (loading) {
    return (
      <div className="text-4xl w-full h-full flex justify-center items-center">
        Loading. . .
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <h1 className="font-bold text-3xl text-[#344767]">Blog List</h1>
      <div className="shadow-lg rounded-md border mt-5">
        
        {/* Filter entries select and Add program Button*/}
        <div className="px-3 py-5 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Select */}
            <Select
              className="w-[70px]"
              value={limit}
              onChange={setLimit}
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
        <ListTable data={data} />

        {/* Pagination */}
        <div className="border-t">
          <Center my={"lg"}>
            <Pagination
              onChange={setPage}
              value={page}
              total={pagination?.totalPages}
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
