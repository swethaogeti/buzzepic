import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../features/postsSlice";

const TextInputBox = () => {
  const { user, token } = useSelector((state) => state.auth);
  console.log(user);
  const navigate = useNavigate();
  const [postData, setPostText] = useState({ content: "" });
  const dispatch = useDispatch();
  const handleCreatePost = async () => {
    if (postData.content !== " ") {
      const res = await dispatch(createPost({ postData, token }));
    }
    setPostText({ content: " " });
  };
  return (
    <div className="bg-white p-2 text-gray-600  font-medium  mt-6">
      <div className="flex items-start justify-start space-x-1 p-2 cursor-pointer">
        {user?.avatarURL ? (
          <img
            src={user.avatarURL}
            className="object-contain rounded-full w-14 h-14"
          ></img>
        ) : (
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_purple_white_letter-s.svg/1200px-Eo_circle_purple_white_letter-s.svg.png"
            className="h-14 w-14"
          ></Avatar>
        )}
        {/* <img
          src={
            avatarURL
              ? avatarURL
              : ""
          }
          className="object-contain rounded-full w-14 h-14"
        ></img> */}
        <form className="flex flex-1" onSubmit={(e) => e.preventDefault}>
          <textarea
            value={postData.content}
            onChange={(e) =>
              setPostText({ ...postData, content: e.target.value })
            }
            placeholder={`what's in your mind ${
              user ? user?.firstName : "buddy Login to post"
            }`}
            className="flex-grow  h-24 focus:outline-none px-2"
          ></textarea>
          <button hidden type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-end p-2 border-b-2">
        <button
          className="p-1 b text-[1rem] w-16 bg-purple-500  text-white rounded-full"
          onClick={handleCreatePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default TextInputBox;
