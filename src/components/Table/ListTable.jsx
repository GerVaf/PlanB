import React, { useState } from "react";
import publish from "../../../public/publish.svg";
import publishActive from "../../../public/publishActive.svg";
import { RxDash } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addDetail } from "../../Global/Slice/BlogSlice";
import { useNavigate } from "react-router-dom";

const ListTable = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const nav = useNavigate()
  // for check and collect id
  const [checkedItems, setCheckedItems] = useState([]);
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  const handleCheck = (e, element) => {
    e.stopPropagation();
    const { id } = element;

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));

    setBlogs((prevBlogs) => {
      if (e.target.checked) {
        return [...prevBlogs, id];
      } else {
        return prevBlogs.filter((blogId) => blogId !== id);
      }
    });
  };

  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      {/* Table Header */}
      <div className="grid grid-cols-12 items-center text-[#344767] text-center text-base font-semibold border-b py-3">
        <h1 className="col-span-1"></h1>
        <h1 className="col-span-1">Publish</h1>
        <h1 className="col-span-1">Category</h1>
        <h1 className="col-span-1">Author</h1>
        <h1 className="col-span-3">Blog Title</h1>
        <h1 className="col-span-2">Description</h1>
        <h1 className="col-span-1">Program</h1>
        <h1 className="col-span-1">Date</h1>
        <h1 className="col-span-1">Action</h1>
      </div>

      {/* Table Row */}
      <div>
        {data?.map((el) => {
          return (
            <div
              key={el.id}
              className="grid grid-cols-12 items-center text-center py-5 border-b transition-colors hover:bg-gray-200"
            >
              <div className="col-span-1 flex justify-center items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={checkedItems[el.id]}
                  onChange={(e) => handleCheck(e, el)}
                />
              </div>

              {/* publish  */}
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src={el?.is_published ? publishActive : publish}
                  alt=""
                  className="w-8 h-8"
                />
              </div>

              <p className="col-span-1">{el?.category}</p>
              <p className="col-span-1">{el?.author}</p>
              <p className="col-span-3">{el?.title}</p>

              <p className="col-span-2">
                {el?.description
                  .replace(regex, "")
                  .replace(
                    /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
                    " "
                  )
                  .substring(0, 10)}
                ...
              </p>
              {/* program  */}
              <p className="col-span-1 flex justify-center">
                {el?.programs.length === 0 ? (
                  <RxDash />
                ) : (
                  el?.programs?.map((el) => el)
                )}
              </p>

              <p className="col-span-1">{el?.date}</p>
              <div className="col-span-1 text-blue-500 underline cursor-pointer flex items-center justify-center gap-3">
                <p onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addDetail(el));
                        nav(`/edit`);
                      }}>Edit</p>
                <p>Delete</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListTable;
