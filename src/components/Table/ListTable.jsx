import React from "react";
import publish from '../../../public/publish.svg';
import publishActive from '../../../public/publish.svg'
const ListTable = () => {
  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1"></h1>
        <h1 className="col-span-1">Publish</h1>
        <h1 className="col-span-1">Category</h1>
        <h1 className="col-span-1">Author</h1>
        <h1 className="col-span-2">Blog Title</h1>
        <h1 className="col-span-3">Blog Description</h1>
        <h1 className="col-span-1">Date</h1>
        <h1 className="col-span-2">Action</h1>
      </div>
      {/* Table Row */}
      {/* Table row */}
      <div>
        <div className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200">
          <div className="col-span-1 flex justify-center items-center">
            <input
              type="checkbox"
              className="w-5 h-5"
            />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img src={publish} alt="" className="w-8 h-8"/>
          </div>
          <p className="col-span-1">category</p>
          <p className="col-span-1">Author</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-3">Description</p>
          <p className="col-span-1">Date</p>
          <div className="col-span-2 text-blue-500 underline cursor-pointer flex items-center justify-center gap-3">
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTable;
