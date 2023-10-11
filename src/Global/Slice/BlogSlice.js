import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myBlogs: [],
  detailBlog: {},
  production_table: [],
  program_title:[]
};

export const blogSlice = createSlice({
  name: "blog_slice",
  initialState,
  reducers: {
    addBlogs: (state, { payload }) => {
      state.myBlogs = payload;
    },
    removeBlogs: (state, { payload }) => {
      state.myBlogs = state.myBlogs.filter((blog) => blog.id !== payload.id);
    },
    addDetail: (state, { payload }) => {
      state.detailBlog = payload;
    },
    productionTable: (state, { payload }) => {
      state.production_table = payload;
    },
    programTitle : (state , {payload})=>{
      state.program_title = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addBlogs, removeBlogs, addDetail, productionTable,programTitle } =
  blogSlice.actions;

export default blogSlice.reducer;
