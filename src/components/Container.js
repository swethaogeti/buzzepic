import React from "react";
import Posts from "./Posts";
const Container = () => {
  return (
    <div className="flex-grow  h-screen pb-44  ">
      <div className="mx-auto max-w-lg md:max-w-full ">
        <Posts />
      </div>
    </div>
  );
};

export default Container;
