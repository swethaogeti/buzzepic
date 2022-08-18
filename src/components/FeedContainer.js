import React from "react";
import Posts from "./Posts";
import TextInputBox from "./TextInputBox";

const FeedContainer = () => {
  return (
    <div className="flex-grow  h-screen pb-44    ">
      <div className="mx-auto max-w-lg md:max-w-full ">
        <TextInputBox />
        <Posts />
      </div>
    </div>
  );
};

export default FeedContainer;
