import React, { useEffect } from "react";
import Posts from "./Posts";

const Container = ({ posts }) => {
  return (
    <div className="flex-grow  h-screen pb-44  ">
      <div className="mx-auto max-w-lg md:max-w-full ">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Container;
