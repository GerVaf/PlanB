import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { patch } from "../Global/api";
import { useNavigate } from "react-router-dom";
import TextEditorTest from "../components/TextEditorTest";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/js/plugins/font_family.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/line_height.min.js";

const BlogEdit = () => {
  const data = useSelector((state) => state.blog.detailBlog);
  const [selectedImage, setSelectedImage] = useState(data?.images?.url);
  const [model, setModel] = useState(data?.description);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    title: data?.title,
    category: data?.category,
    images: data?.images?.url,
    description: data?.description,
    date: data?.date,
    author: data?.author,
    id: data?.id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // const data = new FormData();
    // data.append('file',file);
    if (file) {
      // Create a FileReader
      const reader = new FileReader();

      reader.onload = () => {
        // Set the selected image to the data URL
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
    setFormData({
      ...formData,
      images: file,
    });
  };

  const handleEditorChange = (content) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: content,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("category", formData.category);

    // Check if the selected image has changed
    if (formData.images instanceof File) {
      // If it's a File object, it means the user has selected a new image.
      data.append("images", formData.images);
    }

    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("id", formData.id);
    // console.log("Submitted data:", data);

    patch("/blogs", data).then((response) => {
      console.log(response);
      nav("/list");
    });
  };

  function formatDateForInput(date) {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
    const day = String(formattedDate.getDate()).padStart(2, "0");
    const hours = String(formattedDate.getHours()).padStart(2, "0");
    const minutes = String(formattedDate.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="font-bold text-3xl text-[#344767]">Edit Blog</div>
      {/* form */}
      <div className="py-5">
        <form className="grid grid-cols-12 gap-5" onSubmit={handleSubmit}>
          {/* image upload  */}
          <div className="col-span-12">
            <label className="flex flex-col relative border border-gray-300 rounded-md shadow-lg group transition-all hover:bg-gray-100 hover:shadow hover:border-cyan-400">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="object-cover w-full"
                />
              ) : (
                <div className="flex flex-col h-full items-center justify-center py-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Upload Main Image
                  </p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                id="images"
                name="images"
                onChange={handleFileChange}
                // required
                className="opacity-0 absolute"
              />
            </label>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-3">
            {/* title  */}
            <div className="col-span-6 flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="blgtit">
                Blog Title
              </label>
              <input
                className="outline-none rounded-lg p-3 border transition focus:border-cyan-400"
                placeholder="Enter Blog Title"
                type="text"
                id="blgtit"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* author  */}
            <div className="col-span-6 flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="author">
                Author
              </label>
              <input
                className="outline-none rounded-lg p-3 border transition focus:border-cyan-400"
                placeholder="Enter Author Name"
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* category  */}
            <div className="col-span-6 flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="category">
                Category
              </label>
              <select
                className="outline-none rounded-lg p-3 border transition focus:border-cyan-400"
                name="category"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a Category</option>
                <option value="sport">Sport</option>
                <option value="music">Music</option>
              </select>
            </div>
            {/* date  */}
            <div className="col-span-6 flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="date">
                Date & Time
              </label>
              <input
                className="outline-none rounded-lg p-3 border transition focus:border-cyan-400"
                placeholder="Enter Author Name"
                type="datetime-local"
                id="date"
                name="date"
                value={formatDateForInput(formData?.date)}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* content  */}
            <div className="col-span-12">
              <TextEditorTest
                model={model}
                setModel={setModel}
                handleEditorChange={handleEditorChange}
              />
            </div>
          </div>

          {/* bottom btn  */}
          <div className="col-span-12 flex justify-end">
            {/* submit btn */}
            <button
              type="submit"
              className="cursor-pointer px-8 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl text-white font-bold shadow-lg transition-all hover:shadow hover:to-cyan-400"
            >
              Confirm Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;
