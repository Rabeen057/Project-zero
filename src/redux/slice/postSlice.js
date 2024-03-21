import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: [],
  },
  reducers: {
    getPosts: async (state) => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
