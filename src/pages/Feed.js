import React from "react";

import FeedContainer from "../components/FeedContainer";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
const Feed = () => {
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
