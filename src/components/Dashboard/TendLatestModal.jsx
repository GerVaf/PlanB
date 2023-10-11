import { Center, Modal, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import publish from "../../assets/publish.svg";
import publishActive from "../../assets/publishActive.svg";
import Cookies from "js-cookie";
import { get } from "../../Global/api";
import { useDispatch } from "react-redux";
import { addDetail } from "../../Global/Slice/BlogSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const TrendLatestModal = ({ opened, close, refresh, setRefresh, parent }) => {
  // console.log(parent)
  const [loading, setLoading] = useState(false);
  // showing blog to add Trend or Latest and pagination
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await get(
          `/blogs?limit=10&page=${page}&published=true`
        );
        // console.log(response);
        setBlogs(response?.data?.data);
        setTotalPages(response?.data?.pagination?.totalPages);
        setRefresh(!refresh);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // for detail
  const nav = useNavigate();
  const dispatch = useDispatch();

  // collect blog
  const [blogsId, setBlogsId] = useState([]);

  const handleCheck = (e, element) => {
    e.stopPropagation();
    const { id } = element;

    setBlogsId((prevBlogs) => {
      if (e.target.checked) {
        return [...prevBlogs, id];
      } else {
        return prevBlogs.filter((blogId) => blogId !== id);
      }
    });
  };

  // console.log(blogsId);

  const token = Cookies.get("token");

  //post to Trend and Latest
  const postHandler = async () => {
    const response = await axios.post(
      `https://api.opaqueindustries.news/blogs/tag/${parent}`,
      {
        blogs: blogsId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setRefresh(!refresh);
    handleModalClose();
    console.log(response);
  };

  // clean history
  const handleModalClose = () => {
    setBlogsId([]);
    close();
  };
  return (
    <>
      <Modal
        size={`auto`}
        opened={opened}
        onClose={handleModalClose}
        withCloseButton={false}
      >
        {loading ? (
          <p className="text-black">Loading Please Wait . . .</p>
        ) : (
          <div className="flex flex-col">
            {/* close btn  */}
            <button
              onClick={handleModalClose}
              className="text-2xl text-red-600 self-end p-1 rounded-md transition-colors hover:bg-slate-100"
            >
              <RxCross2 />
            </button>
            {/* title  */}
            <label htmlFor="mission" className="text-2xl font-semibold">
              All Blogs
            </label>

            {/* complete blogs   */}
            <div className="mt-5">
              {/* Header */}
              <div className="grid grid-cols-8 items-center text-black text-center text-base font-semibold ">
                <h1 className="col-span-1"></h1>
                <h1 className="col-span-1">Publish</h1>
                <h1 className="col-span-1">Category</h1>
                <h1 className="col-span-2">Author</h1>
                <h1 className="col-span-2">Blog Title</h1>
                <h1 className="col-span-1">Date</h1>
              </div>

              {/* Table row */}
              {blogs?.map((element) => (
                <div key={element?.id}>
                  <div
                    onClick={() => {
                      dispatch(addDetail(element));
                      nav("/view");
                    }}
                    className="grid grid-cols-8 items-center text-center bg-white text-secondary rounded-xl py-3 my-2 transition-colors hover:text-white hover:bg-gray-700"
                  >
                    <p
                      className="col-span-1 flex justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5"
                        checked={blogsId[element.id]}
                        onChange={(e) => handleCheck(e, element)}
                      />
                    </p>
                    <p className="col-span-1 flex justify-center cursor-pointer">
                      <img
                        src={element?.is_published ? publishActive : publish}
                        alt=""
                        className="h-8"
                      />
                    </p>
                    <p className="col-span-1">{element?.category}</p>
                    <p className="col-span-2">{element?.author}</p>
                    <p className="col-span-2">{element?.title}</p>
                    <p className="col-span-1">{element?.date}</p>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <Center my={"lg"}>
                <Pagination
                  total={totalPages}
                  onChange={setPage}
                  value={page}
                  // not([data-disabled]):active
                  styles={{
                    control: {
                      color: "black",
                      borderColor: "transparent",

                      "&[data-active]": {
                        borderColor: "white",
                        backgroundColor: "#3D3F3D",
                      },
                      "&[data-active]&:not([data-disabled]):hover": {
                        backgroundColor: "#3D3F3D70",
                      },
                      "&:not([data-disabled]):hover": {
                        backgroundColor: "black",
                        color: "white",
                      },
                    },
                    dots: {
                      color: "white",
                    },
                  }}
                />
              </Center>
            </div>

            {/* add handle  */}
            <button
              onClick={() => {
                postHandler(), close();
              }}
              className="py-2 px-8 bg-secondary rounded-md uppercase text-white self-end mt-5"
            >
              Add To {parent} News
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TrendLatestModal;