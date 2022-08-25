import React from "react";
import Posts from "./Posts";
import TextInputBox from "./TextInputBox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../features/postsSlice";
const FeedContainer = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="flex-grow  h-screen pb-20 ">
      <div className="mx-auto max-w-lg md:max-w-full overflow-scroll h-full">
        <TextInputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default FeedContainer;
