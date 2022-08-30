import React, { useEffect } from "react";

import FeedContainer from "../components/FeedContainer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Feed = () => {
  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <Navbar />
      <main className="flex ">
        <Sidebar />
        <FeedContainer />
        <Suggestions />
      </main>
    </div>
  );
};

export default Feed;
