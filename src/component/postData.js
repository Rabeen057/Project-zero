import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { getPosts } from "../redux/slice/postSlice";

const PostData = () => {
  const dispatch = useDispatch();

  const fetchPost = () => {
    dispatch(getPosts());
  };
  return (
    <div>
      <h1>Fetching post data</h1>
      <button onClick={fetchPost}>Fetch post</button>
    </div>
  );
};

export default PostData;
