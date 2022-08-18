import React from "react";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";

const Bookmarks = () => {
  return (
    <div className=" h-screen  md:max-w-7xl mx-auto">
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Container />
        <Suggestions />
      </main>
    </div>
  );
};

export default Bookmarks;
