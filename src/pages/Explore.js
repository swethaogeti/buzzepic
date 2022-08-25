import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { getAllPosts } from "../features/postsSlice";

const Explore = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Container posts={posts} />
        <Suggestions />
      </main>
    </div>
  );
};

export default Explore;
