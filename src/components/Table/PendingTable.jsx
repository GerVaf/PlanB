import React from "react";
import { BsExclamationLg } from "react-icons/bs";
const PendingTable = () => {
  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1">Add to list</h1>
        <h1 className="col-span-1">Category</h1>
        <h1 className="col-span-1">Author</h1>
        <h1 className="col-span-2">Blog Title</h1>
        <h1 className="col-span-2">Blog Description</h1>
        <h1 className="col-span-1">Date</h1>
        <h1 className="col-span-2">Note</h1>
        <h1 className="col-span-2">Action</h1>
      </div>
      {/* Table Row */}
      {/* Table row */}
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200">
          <div className="col-span-1 flex justify-center items-center">
            <p
              className={
                "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white p-2 rounded-full w-8 transition-all cursor-pointer"
              }
            >
              <BsExclamationLg />
            </p>
          </div>
          <p className="col-span-1">category</p>
          <p className="col-span-1">Author</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Date</p>
          <p className="col-span-2">Somethin Missing</p>
          <div className="col-span-2 text-blue-500 underline cursor-pointer flex items-center justify-center gap-3">
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200">
          <div className="col-span-1 flex justify-center items-center">
            <p
              className={
                "bg-gradient-to-r from-cyan-400 to-cyan-500 text-white p-2 rounded-full w-8 transition-all cursor-pointer"
              }
            >
              <BsExclamationLg />
            </p>
          </div>
          <p className="col-span-1">category</p>
          <p className="col-span-1">Author</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Date</p>
          <p className="col-span-2">Somethin Missing</p>
          <div className="col-span-2 text-blue-500 underline cursor-pointer flex items-center justify-center gap-3">
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingTable;
