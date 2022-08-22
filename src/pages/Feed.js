import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FeedContainer from "../components/FeedContainer";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { getAllPosts } from "../features/postsSlice";
const Feed = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  console.log("this is posts", posts);
  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <main className="flex ">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <FeedContainer />
        <Suggestions />
      </main>
    </div>
  );
};

export default Feed;
