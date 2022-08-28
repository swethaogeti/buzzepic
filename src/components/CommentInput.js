import { Button } from "@material-ui/core";
import React from "react";

const CommentInput = () => {
  return (
    <div className="flex  items-center p-3 space-x-2">
      <input
        placeholder="Add Comment"
        className="flex-1 bg-gray-200 p-2 m-1 focus:outline-purple-400"
      ></input>
      <div>
        <button className="p-1 b text-[1rem] w-20 bg-purple-500  text-white rounded-md">
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
