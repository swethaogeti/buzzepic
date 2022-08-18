import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownIcon from "@material-ui/icons/ThumbDownAltOutlined";
import CommentIcon from "@material-ui/icons/CommentOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVertRounded";
const Post = () => {
  return (
    <div className="flex space-x-1 hover:bg-gray-100 p-1 m-1 border">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJDJisq3ecaPo1prF9NShDFkKC9D11JWLWnW885vVRbCXzaprii6ikn5GQgqxUOenW4A&usqp=CAU"
        className="h-14 w-14 object-contain rounded-full"
      ></img>
      <div className="space-y-3">
        {/* ********************** */}
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="text-purple-500 font-[600] ">Swetha ogeti</h3>
            <p className="text-gray-500 font-thin text-[.9rem]">
              @sweetyXYZ555
            </p>
          </div>
          <h3 className="text-gray-500 font-thin text-[.9rem] ">
            2 months ago
          </h3>
          <MoreVertIcon className="text-gray-600 font-thin text-[.8rem]" />
        </div>
        {/* ********************** */}

        {/* ********************** */}
        <p>
          Try to admire someone beauty without questioning on yours.We can do
          anything we want to if we stick to it long enough
        </p>
        {/* ********************** */}

        {/* ********************** */}
        <div className="text-gray-600 flex justify-between">
          <ThumbUpIcon />
          <ThumbDownIcon />
          <CommentIcon />
          <BookmarkIcon />
        </div>
        {/* ********************** */}

        <p className="text-gray-500 text-[.9rem] font-[500]">
          Liked by Sammy and 2 other
        </p>
      </div>
    </div>
  );
};

export default Post;
